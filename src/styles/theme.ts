import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    blue: {
      "900": "#",
      "800": "#",
      "700": "#",
      "600": "#",
      "500": "#",
      "400": "#4299E1",
      "300": "#63B3ED",
      "200": "#",
      "100": "#BEE3F8",
      "50": "#EBF8FF",
    },
    gray: {
      "900": "#",
      "800": "#",
      "700": "#",
      "600": "#",
      "500": "#",
      "400": "#A0AEC0",
      "300": "#",
      "200": "#E2E8F0",
      "100": "#EDF2F7",
      "50": "#F7FAFC",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto", 
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray"
      }
    }
  }
}) 