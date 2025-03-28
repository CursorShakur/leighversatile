// src/plugins/vuetify.ts
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light', // Or 'dark' if you prefer a dark default
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#2B579A', // Primary Brand Color
          accent: '#00A0B0',  // Accent Brand Color
          secondary: '#9E9E9E', // Neutral Grey for Secondary
          error: '#B00020',    // Standard Error Red
          info: '#2196F3',     // Standard Info Blue
          success: '#4CAF50',  // Standard Success Green
          warning: '#FB8C00',  // Standard Warning Orange
          background: '#FFFFFF', // Default White Background
          surface: '#FFFFFF',    // Default White Surface
        },
      },
      // You can uncomment and define a dark theme here if needed later
      // dark: {
      //   dark: true,
      //   colors: {
      //     primary: '#2B579A', // Adjust for dark mode if needed
      //     accent: '#00A0B0',  // Adjust for dark mode if needed
      //     secondary: '#616161', // Darker Grey for Secondary
      //     error: '#CF6679',
      //     info: '#BB86FC',
      //     success: '#03DAC6',
      //     warning: '#FFB74D',
      //     background: '#121212',
      //     surface: '#1E1E1E',
      //   },
      // },
    },
  },
})