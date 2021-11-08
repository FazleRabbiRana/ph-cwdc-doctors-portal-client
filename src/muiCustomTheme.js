import { createTheme } from '@mui/material';
import { cyan } from '@mui/material/colors';

export const muiCustomTheme = createTheme({
	// breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 640,
  //     md: 768,
  //     lg: 1024,
  //     xl: 1280,
	// 		xxl: 1536,
  //   },
  // },
	palette: {
		primary: {
			light: cyan[400],
			main: '#1CC7C1',
			dark: cyan[700],
			contrastText: '#fff'
		},
		// myPrimary: {
		// 	light: cyan[400],
		// 	main: '#1CC7C1',
		// 	dark: cyan[700],
		// 	contrastText: '#fff'
		// }
	},
});