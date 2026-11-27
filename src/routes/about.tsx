import { createFileRoute } from '@tanstack/react-router';
import { AboutPage, aboutHead } from '@/components/pages';
export const Route = createFileRoute('/about')({ head: aboutHead, component: AboutPage });
