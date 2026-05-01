export const WHATSAPP_E164 = "923064575790";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi, I'm browsing Private Room and would like to help with an order or product question.";

export function getWhatsAppHref(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
}
