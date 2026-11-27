import { createFileRoute } from '@tanstack/react-router';
import { WhyPage, reasonsHead } from '@/components/pages';
export const Route = createFileRoute('/why-choose-us')({ head: reasonsHead, component: WhyPage });
