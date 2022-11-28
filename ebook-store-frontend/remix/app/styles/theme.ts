import { extendTheme, ThemeConfig } from '@chakra-ui/react'

export const theme: ThemeConfig = extendTheme({
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
	initialColorMode: 'dark',
	useSystemColorMode: false,
})
