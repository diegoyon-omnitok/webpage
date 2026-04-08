import { permanentRedirect } from "next/navigation";
import { canonicalRoutes } from "@/lib/markets";

export default function WhitepapersPage() {
  permanentRedirect(canonicalRoutes.latam.recursos);
}
