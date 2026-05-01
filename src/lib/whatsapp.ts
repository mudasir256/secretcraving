import { sitePromo } from "@/data/site";

/** E.164 digits only — aligned with `sitePromo.phoneTel` / `whatsappHref`. */
export const WHATSAPP_E164 = sitePromo.phoneTel.replace(/\D/g, "");

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi, I'm browsing Private Room and would like to help with an order or product question.";

export function getWhatsAppHref(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
}
