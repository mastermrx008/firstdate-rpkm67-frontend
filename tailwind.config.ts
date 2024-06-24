import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        project: {
          fuchsia: '#F75471',
          pink: '#FFBBD2',
          apricot: '#E9A49B',
          cream: '#F1DFC1',
          blue: '#678CEC',
          'dark-gray': '#979797',
          'light-gray': '#313131',
          'light-blue': '#D8E3FE',
        },
      },
    },
  },
  plugins: [],
};
export default config;
