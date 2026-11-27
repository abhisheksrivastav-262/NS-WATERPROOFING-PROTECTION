export const PHONE = '8877557748';
export const WHATSAPP_NUMBER = '918877557748';
export const GUARANTEE_YEARS = 5;
export const SERVICE_AREAS = ['Bihar', 'Jharkhand'] as const;
export const services = ['Terrace Waterproofing', 'Retaining Wall Waterproofing', 'Basement Crack Filling', 'Special Joint Waterproofing', 'Other Waterproofing Work'];
export interface Inquiry { name: string; mobile: string; location: string; service: string; message: string }
export function inquiryLink(inquiry: Inquiry) {
  const text = `नमस्ते NS Waterproofing, मुझे नि:शुल्क सलाह चाहिए।\n\nनाम: ${inquiry.name}\nमोबाइल: ${inquiry.mobile}\nशहर / स्थान: ${inquiry.location}\nसेवा: ${inquiry.service}\nसंदेश: ${inquiry.message || 'साइट निरीक्षण के लिए संपर्क करें।'}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;