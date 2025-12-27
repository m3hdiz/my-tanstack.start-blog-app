import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function getContext() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 60 * 1000, // 30 minutes global default
        gcTime: 60 * 60 * 1000, // 1 hour cache retention
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
      },
    },
  })
  return {
    queryClient,
  }
}

export function Provider({
  children,
  queryClient,
}: {
  children: React.ReactNode
  queryClient: QueryClient
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
