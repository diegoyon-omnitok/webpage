import { permanentRedirect } from "next/navigation";
import { canonicalRoutes } from "@/lib/markets";

export default function WebinarsPage() {
  permanentRedirect(canonicalRoutes.latam.recursos);
}
