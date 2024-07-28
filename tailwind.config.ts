import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-footer':
          'linear-gradient(90deg, #E9A49B -3.82%, #FFFFFF 52.04%, #FFBBD2 85.55%, #F1DFC1 107.89%)',
      },
      fontSize: {
        xss: ['0.625rem', '0.875rem'], //size: 10px, line-height: 14px
      },
      colors: {
        project: {
          fuchsia: '#F75471',
          pink: '#FFBBD2',
          'pastel-pink': '#EB9096',
          apricot: '#E9A49B',
          cream: '#F1DFC1',
          blue: '#678CEC',
          'dark-blue': '#183F86',
          'dark-gray': '#979797',
          'light-gray': '#313131',
          'light-blue': '#D8E3FE',
          gray: '#DDDDDD',
          brown: '#AA8B84',
          yellow: '#EFD08B',
          red: '#C94B4B',
        },
        rpkm: {
          red: '#C94B4B',
          cream: '#EAE3C3',
          green: '#67AB88',
          blue: '#183F86',
          gray: '#313131',
          yellow: '#EFD08B',
          pink: '#EB9096',
          silver: '#D9D9D9',
        },
      },
      fontFamily: {
        season: ['var(--season)', 'system-ui'],
        athiti: ['var(--athiti)', 'system-ui'],
        sarun: ['var(--sarun)', 'system-ui'],
        sopha: ['var(--sopha)', 'system-ui'],
      },
      dropShadow: {
        font: '0 1.2px 1.2px rgba(0,0,0,0.8)',
      },
      animation: {
        shake: 'shaking 60ms infinite',
      },
      keyframes: {
        shaking: {
          '0%': { top: '0px' },
          '50%': { transform: 'rotate(1deg)' },
          '80%': { transform: 'rotate(-1deg)' },
          '100%': { top: '10px' },
        },
      },
    },
  },
  plugins: [
    require('@butterfail/tailwindcss-inverted-radius'),
    require('@designbycode/tailwindcss-text-stroke'),
  ],
};
export default config;
