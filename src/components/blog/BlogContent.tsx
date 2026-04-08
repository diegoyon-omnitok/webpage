import { Fragment, type ReactNode } from "react";
import Link from "next/link";

type BlogContentProps = {
  rawText: string;
  leadExcerpt?: string;
};

const skipBlocks = new Set(["contáctanos", "contactanos", "agenda una demo", "comienza ahora", "share:", "tags:"]);
const connectorEndingRegex =
  /\b(a|al|como|con|de|del|desde|e|el|en|entre|la|las|lo|los|o|para|pero|por|que|se|sin|su|sus|un|una|unas|unos|y)\s*$/i;
const headingBodyStarterRegex =
  /^(A|An|As|At|After|All|Another|Before|Brands|But|By|Even|For|However|How|If|In|Instead|It|Last|Many|Most|No|On|One|Our|Perform|Recently|Right|Second|Speak|That|The|These|This|Third|Think|Today|Too|Unlike|We|When|While|Without|You|Además|Ahí|Al|Aquellas|Aquí|Con|Cuando|De|Durante|El|En|Entre|Ese|Esta|Este|Hoy|Las|Lo|Los|Muchas|Para|Pero|Por|Primero|Segundo|Si|Sin|Su|Tercero|Una|Un)\b/;

type ContentNode =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] };

function normalizeSpacing(text: string) {
  return text
    .replace(/[\uD800-\uDFFF]/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/([¿¡])\s+/g, "$1")
    .trim();
}

function normalizeComparableText(text: string) {
  return normalizeSpacing(text)
    .toLowerCase()
    .replace(/["“”'’]/g, "")
    .replace(/[^a-z0-9áéíóúñü\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripLegacyFormatting(rawText: string) {
  return rawText
    .replace(/\r\n?/g, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>\s*<p>/gi, "\n\n")
    .replace(/\bContáctanos\b/gi, "")
    .replace(/\bContactanos\b/gi, "")
    .replace(/\bReach out today\b/gi, "")
    .replace(/\bto see how Omnitok can help\.?/gi, "")
    .replace(/[📩✉️]/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/\u00A0/g, " ")
    .replace(/:\s*(\d+)\./g, ":\n$1. ")
    .replace(/([.!?])\s*(\d+)\.\s+/g, "$1\n\n$2. ")
    .replace(/\n{3,}/g, "\n\n");
}

function renderInlineContent(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<Fragment key={`text-${lastIndex}`}>{text.slice(lastIndex, match.index)}</Fragment>);
    }

    const [, label, href] = match;
    const key = `link-${match.index}-${href}`;
    if (href.startsWith("http")) {
      parts.push(
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          {label}
        </a>
      );
    } else {
      parts.push(
        <Link key={key} href={href} className="font-medium text-primary underline-offset-4 hover:underline">
          {label}
        </Link>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(<Fragment key={`text-${lastIndex}`}>{text.slice(lastIndex)}</Fragment>);
  }

  return parts;
}

function isHeading(line: string) {
  if (line.length > 90) return false;
  if (/[.!?]$/.test(line)) return false;
  const words = line.split(/\s+/).length;
  if (words < 2 || words > 11) return false;
  if (/^\d+\./.test(line)) return false;
  return true;
}

function isColonSubheading(line: string) {
  return /^[A-ZÁÉÍÓÚÑ¿][^:]{2,90}:$/.test(line);
}

function isListItem(line: string) {
  return /^(-|\d+\.)\s+/.test(line);
}

function isLikelyHeadingPhrase(text: string) {
  if (!text || text.length > 95) return false;
  if (/[.!?]$/.test(text)) return false;

  if (text.includes(":")) {
    return /^[A-ZÁÉÍÓÚÑ¿]/.test(text);
  }

  const words = text.split(/\s+/);
  if (words.length < 3 || words.length > 12) return false;

  return words.every((word) => {
    const clean = word.replace(/^[("'“‘\[]+|[)"'”:,.!?]+$/g, "");
    if (!clean) return true;
    if (/^(a|al|and|con|de|del|e|el|en|for|from|if|in|into|la|las|lo|los|of|on|or|para|pero|por|que|se|sin|su|sus|the|to|un|una|unas|unos|with|y)$/i.test(clean)) {
      return true;
    }

    return /^[A-ZÁÉÍÓÚÑ0-9]/.test(clean);
  });
}

function splitInlineHeadingParagraph(block: string) {
  const words = block.split(/\s+/);

  for (let start = 0; start <= words.length - 6; start += 1) {
    const previousWord = words[start - 1] ?? "";
    if (start > 0 && !/[.!?]$/.test(previousWord)) {
      continue;
    }

    for (let end = start + 3; end <= Math.min(words.length - 3, start + 14); end += 1) {
      const before = words.slice(0, start).join(" ").trim();
      const left = words.slice(start, end).join(" ").trim();
      const right = words.slice(end).join(" ").trim();

      if (isLikelyHeadingPhrase(left) && headingBodyStarterRegex.test(right)) {
        return [before, left, right].filter(Boolean);
      }
    }
  }

  return [block];
}

function splitEditorialBlocks(block: string): string[] {
  let segments = [block.trim()];
  let changed = true;

  while (changed) {
    changed = false;
    const nextSegments: string[] = [];

    for (const segment of segments) {
      const split = splitInlineHeadingParagraph(segment).filter(Boolean);
      if (split.length > 1) {
        nextSegments.push(...split);
        changed = true;
        continue;
      }

      nextSegments.push(segment);
    }

    segments = nextSegments.filter(Boolean);
  }

  return segments;
}

function shouldMergeWithPrevious(currentLine: string, previousLine: string) {
  if (!previousLine) return false;
  if (isListItem(currentLine) || isListItem(previousLine)) return false;
  if (isHeading(currentLine) || isColonSubheading(currentLine)) return false;

  if (connectorEndingRegex.test(previousLine)) return true;
  if (!/[.!?:]$/.test(previousLine)) return true;
  if (/^[a-záéíóúñ(%"'$€£0-9]/.test(currentLine)) return true;
  if (/^(CMS|PDP|PDPs|SKU|IA|MAP|ERP|PIM)\b/.test(currentLine) && connectorEndingRegex.test(previousLine)) return true;

  return false;
}

function normalizeEditorialRawText(rawText: string) {
  const lines = stripLegacyFormatting(rawText)
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => !skipBlocks.has(line.toLowerCase()));

  const mergedLines: string[] = [];

  for (const line of lines) {
    if (!line) {
      if (mergedLines.at(-1) !== "") {
        mergedLines.push("");
      }
      continue;
    }

    const normalizedLine = normalizeSpacing(line);
    const previousLine = mergedLines.at(-1);

    if (previousLine && previousLine !== "" && shouldMergeWithPrevious(normalizedLine, previousLine)) {
      mergedLines[mergedLines.length - 1] = normalizeSpacing(`${previousLine} ${normalizedLine}`);
      continue;
    }

    mergedLines.push(normalizedLine);
  }

  return mergedLines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function parseNodes(rawText: string): ContentNode[] {
  const blocks = normalizeEditorialRawText(rawText)
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  const nodes: ContentNode[] = [];

  for (const originalBlock of blocks.flatMap(splitEditorialBlocks)) {
    const block = originalBlock.trim();
    const lines = block
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    if (!lines.length) continue;

    if (lines.every((line) => isListItem(line))) {
      nodes.push({
        type: "list",
        items: lines.map((line) => normalizeSpacing(line.replace(/^(-|\d+\.)\s+/, ""))),
      });
      continue;
    }

    if (lines.length === 1 && isColonSubheading(lines[0])) {
      nodes.push({ type: "subheading", text: lines[0].replace(/:$/, "") });
      continue;
    }

    if (lines.length === 1 && isHeading(lines[0])) {
      nodes.push({ type: "heading", text: lines[0] });
      continue;
    }

    if (/^\d+\.\s+/.test(lines[0])) {
      nodes.push({ type: "subheading", text: lines[0].replace(/^\d+\.\s+/, "") });
      const rest = lines.slice(1).join(" ");
      if (rest) {
        nodes.push({ type: "paragraph", text: normalizeSpacing(rest) });
      }
      continue;
    }

    nodes.push({ type: "paragraph", text: normalizeSpacing(lines.join(" ")) });
  }

  return nodes;
}

export default function BlogContent({ rawText, leadExcerpt }: BlogContentProps) {
  const nodes = parseNodes(rawText);
  const normalizedExcerpt = leadExcerpt ? normalizeComparableText(leadExcerpt) : "";
  const filteredNodes =
    normalizedExcerpt && nodes[0]?.type === "paragraph"
      ? nodes.filter((node, index) => {
          if (index !== 0 || node.type !== "paragraph") return true;
          const normalizedParagraph = normalizeComparableText(node.text);
          if (normalizedParagraph.length < 80) return true;

          return !(
            normalizedExcerpt.startsWith(normalizedParagraph) ||
            normalizedParagraph.startsWith(normalizedExcerpt) ||
            normalizedExcerpt.includes(normalizedParagraph)
          );
        })
      : nodes;

  return (
    <div className="blog-content">
      {filteredNodes.map((node, index) => {
        if (node.type === "heading") {
          return <h2 key={`${index}-${node.text}`}>{node.text}</h2>;
        }

        if (node.type === "subheading") {
          return <h3 key={`${index}-${node.text}`}>{node.text}</h3>;
        }

        if (node.type === "list") {
          return (
            <ul key={`${index}-${node.items[0]}`} className="list-disc pl-6">
              {node.items.map((item) => (
                <li key={item}>{renderInlineContent(item)}</li>
              ))}
            </ul>
          );
        }

        return <p key={`${index}-${node.text.slice(0, 32)}`}>{renderInlineContent(node.text)}</p>;
      })}
    </div>
  );
}
