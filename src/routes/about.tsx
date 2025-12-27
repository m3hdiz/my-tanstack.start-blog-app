import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='min-h-screen w-2/3 justify-self-end'>Hello "/about"!</div>
  )
}
