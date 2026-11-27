import { Outlet, createFileRoute } from '@tanstack/react-router';
import { SiteLayout } from '@/components/site';

function ServicesLayout() {
  return <SiteLayout active="/services"><Outlet /></SiteLayout>;
}

export const Route = createFileRoute('/services')({ component: ServicesLayout });
