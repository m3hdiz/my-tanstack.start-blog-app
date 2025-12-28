import FooterLandscapeBorder from '@/components/FooterLandscapeBorder'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles')({
  component: RouteComponent,
})

function RouteComponent() {
  return <></>
}
