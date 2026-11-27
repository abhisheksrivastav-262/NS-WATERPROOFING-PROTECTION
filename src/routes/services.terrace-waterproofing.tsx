import { createFileRoute } from '@tanstack/react-router';
import { ServicePage } from '@/components/pages';
export const Route = createFileRoute('/services/terrace-waterproofing')({ head:()=>({meta:[{title:'Terrace Waterproofing | NS Waterproofing'},{name:'description',content:'टेरेस लीकेज और सीलन के लिए प्रोफेशनल वाटरप्रूफिंग।'}]}), component:()=> <ServicePage slug="terrace-waterproofing"/> });
