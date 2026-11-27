import { createFileRoute } from '@tanstack/react-router';
import { ServicePage } from '@/components/pages';
export const Route = createFileRoute('/services/retaining-wall-waterproofing')({ head:()=>({meta:[{title:'Retaining Wall Waterproofing | NS Waterproofing'},{name:'description',content:'रिटेनिंग वॉल में पानी के दबाव और नमी से सुरक्षा।'}]}), component:()=> <ServicePage slug="retaining-wall-waterproofing"/> });
