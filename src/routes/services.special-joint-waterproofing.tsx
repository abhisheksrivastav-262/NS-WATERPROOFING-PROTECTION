import { createFileRoute } from '@tanstack/react-router';
import { ServicePage } from '@/components/pages';
export const Route = createFileRoute('/services/special-joint-waterproofing')({ head:()=>({meta:[{title:'Special Joint Waterproofing | NS Waterproofing'},{name:'description',content:'निर्माण एवं एक्सपेंशन जॉइंट के लिए प्रोफेशनल सीलिंग।'}]}), component:()=> <ServicePage slug="special-joint-waterproofing"/> });
