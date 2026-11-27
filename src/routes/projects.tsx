import { createFileRoute } from '@tanstack/react-router';
import { ProjectsPage, projectsHead } from '@/components/pages';
export const Route = createFileRoute('/projects')({ head: projectsHead, component: ProjectsPage });
