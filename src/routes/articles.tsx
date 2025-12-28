import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='min-h-screen'>
      {/* Section 1 */}
      <section className='min-h-screen bg-green-800 sticky flex flex-col justify-center items-center'>
        <div className='min-h-screen size-40 bg-blue-800 rounded-lg shadow-2xl sticky top-0'></div>
        <div className='size-40 bg-red-800 rounded-lg shadow-2xl sticky top-0'></div>
        <div className='size-40 bg-green-800 rounded-lg shadow-2xl sticky top-0'></div>
      </section>
      {/* 
      {/* Add more sections as needed */}
    </div>
  )
}
