import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles/theme"
import axios from "axios"
import { SegmentContext, SegmentProvider } from "../context/SegmentContext"




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SegmentProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SegmentProvider>
  )
}

export default MyApp
