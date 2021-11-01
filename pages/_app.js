import {wrapper} from '../redux/store'
import {ChakraProvider} from "@chakra-ui/react"

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    // <SafeHydrate>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    // </SafeHydrate>
  )
}

export default wrapper.withRedux(MyApp)