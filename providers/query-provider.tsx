"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function QueryProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                // 5 minutes stale time
                staleTime: 5 * 60 * 1000,
                // Refetch on window focus is often good, but can be disabled if too aggressive
                refetchOnWindowFocus: false,
                retry: 1
            }
        }
    }))

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
