import { createFileRoute } from '@tanstack/react-router';
import { BrandsPage, brandsHead } from '@/components/pages';
export const Route = createFileRoute('/brands')({ head: brandsHead, component: BrandsPage });
