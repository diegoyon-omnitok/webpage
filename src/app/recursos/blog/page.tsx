import { permanentRedirect } from "next/navigation";

export default function LegacyLatamBlogRedirect() {
  permanentRedirect("/es/blog");
}
