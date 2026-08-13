"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Emite `resource_view` una vez al abrir la landing de un recurso. */
export default function ResourceViewTracker({
  slug,
  title,
  type,
}: {
  slug: string;
  title: string;
  type: string;
}) {
  useEffect(() => {
    trackEvent("resource_view", {
      resource_slug: slug,
      resource_title: title,
      resource_type: type,
    });
  }, [slug, title, type]);

  return null;
}
