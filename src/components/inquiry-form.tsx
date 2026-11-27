import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { inquiryLink, services } from '@/lib/inquiry';

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [submittedLink, setSubmittedLink] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? '').trim();
    const link = inquiryLink({ name: value('name'), mobile: value('mobile'), location: value('location'), service: value('service'), message: value('message') });
    window.open(link, '_blank', 'noopener,noreferrer');
    setSubmittedLink(link);
  }
  return <form onSubmit={submit} className={compact ? 'inquiry-form compact-form' : 'inquiry-form'}>
    <div className="form-field"><label htmlFor={compact ? 'quick-name' : 'contact-name'}>आपका नाम <span>*</span></label><input id={compact ? 'quick-name' : 'contact-name'} name="name" placeholder="पूरा नाम" autoComplete="name" required maxLength={80} /></div>
    <div className="form-field"><label htmlFor={compact ? 'quick-mobile' : 'contact-mobile'}>मोबाइल नंबर <span>*</span></label><input id={compact ? 'quick-mobile' : 'contact-mobile'} name="mobile" type="tel" inputMode="tel" autoComplete="tel" placeholder="10 अंकों का नंबर" pattern="[6-9][0-9]{9}" title="भारत का 10 अंकों वाला मोबाइल नंबर दर्ज करें" required /></div>
    <div className="form-field"><label htmlFor={compact ? 'quick-location' : 'contact-location'}>शहर / स्थान <span>*</span></label><input id={compact ? 'quick-location' : 'contact-location'} name="location" placeholder="आपका शहर" autoComplete="address-level2" required maxLength={120} /></div>
    <div className="form-field"><label htmlFor={compact ? 'quick-service' : 'contact-service'}>सेवा चुनें <span>*</span></label><select id={compact ? 'quick-service' : 'contact-service'} name="service" defaultValue="" required><option value="" disabled>वाटरप्रूफिंग सेवा चुनें</option>{services.map(service => <option key={service}>{service}</option>)}</select></div>
    <div className="form-field message-field"><label htmlFor={compact ? 'quick-message' : 'contact-message'}>आपका संदेश</label><textarea id={compact ? 'quick-message' : 'contact-message'} name="message" placeholder="अपनी समस्या के बारे में बताएं..." rows={compact ? 1 : 3} maxLength={2000} /></div>
    <div className="form-submit"><Button type="submit" variant="aqua" size="lg">नि:शुल्क सलाह प्राप्त करें <ArrowUpRight /></Button><small>आपकी जानकारी सुरक्षित है। कोई बाध्यता नहीं।</small></div>
    {submittedLink && <p className="form-success" role="status"><CheckCircle2 size={17} /> <span>आपकी जानकारी WhatsApp में तैयार है। वहां भेजें दबाकर पूछताछ पूरी करें। <a href={submittedLink} target="_blank" rel="noopener noreferrer" className="text-foreground underline">WhatsApp खोलें <ArrowUpRight size={13} className="inline" /></a></span></p>}
  </form>;
}