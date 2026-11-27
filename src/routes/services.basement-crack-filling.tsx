import { createFileRoute } from '@tanstack/react-router';
import { ServicePage } from '@/components/pages';
export const Route = createFileRoute('/services/basement-crack-filling')({ head:()=>({meta:[{title:'Basement Crack Filling | NS Waterproofing'},{name:'description',content:'बेसमेंट दरार, रिसाव और नमी के लिए क्रैक फिलिंग समाधान।'}]}), component:()=> <ServicePage slug="basement-crack-filling"/> });
