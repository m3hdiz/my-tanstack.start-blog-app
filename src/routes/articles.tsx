import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='min-h-screen w-2/3 justify-self-end'>
      Hello "/articles"!
    </div>
  )
}
