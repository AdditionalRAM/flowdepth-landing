import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import '@fontsource-variable/comfortaa'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: true,
    },
    styles: {
      global: (props: any) => ({
        body: {
          color: 'gray.900',
          bg: 'white',
          fontSize: 'lg',
          _dark: {
            color: 'white',
            bg: 'gray.900',
          },
        },
      }),
    },
    colors: {
      "primary": {
        "main": "#197EE6",
        "50": "#E8F2FD",
        "100": "#BFDBF8",
        "200": "#95C4F4",
        "300": "#6CADEF",
        "400": "#4295EB",
        "500": "#197EE6",
        "600": "#1465B8",
        "700": "#0F4C8A",
        "800": "#0A325C",
        "900": "#05192E"
      }
    },
    fonts: {
      heading: 'Comfortaa Variable, Comfortaa, sans-serif',
      body: 'Comfortaa Variable, Comfortaa, sans-serif',
    },
    fontSizes,
    components,
  },
  baseTheme,
)
