import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                church: {
                    '50': '#ecf3ff',
                    '100': '#dce8ff',
                    '200': '#bfd3ff',
                    '300': '#99b5ff',
                    '400': '#708bff',
                    '500': '#4f63ff',
                    '600': '#2f35fc',
                    '700': '#2326df',
                    '800': '#1e22aa',
                    '900': '#22288d',
                    '950': '#141652',
                },
            },
            boxShadow: {
                'card': '0px 0px 10px 1px rgba(0,0,0,0.20)',
            },
        },
    },
    plugins: [],
}
export default config
