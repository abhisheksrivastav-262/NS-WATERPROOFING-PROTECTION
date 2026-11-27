import { createFileRoute } from '@tanstack/react-router';
import { ServicesPage, servicesHead } from '@/components/pages';

export const Route = createFileRoute('/services/')({ head: servicesHead, component: ServicesPage });
