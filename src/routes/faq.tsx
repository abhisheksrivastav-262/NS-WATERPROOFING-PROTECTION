import { createFileRoute } from '@tanstack/react-router';
import { FAQPage, faqHead } from '@/components/pages';
export const Route = createFileRoute('/faq')({ head: faqHead, component: FAQPage });
