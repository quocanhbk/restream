import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { useEffect, useRef } from "react"

function MyApp({ Component, pageProps }: AppProps) {
    const qc = useRef(new QueryClient())

    return (
        <ChakraProvider>
            <QueryClientProvider client={qc.current}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </ChakraProvider>
    )
}

export default MyApp
