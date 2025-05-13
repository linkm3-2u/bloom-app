import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
		"./app/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom comfort colors
				comfort: {
					blue: '#D3E4FD',
					green: '#F2FCE2',
					purple: '#E5DEFF',
					peach: '#FDE1D3',
					yellow: '#FEF7CD',
					neutral: '#F1F0FB',
					deeppurple: '#4E2A84', // Deep Purple
					pink: '#F6C8D7',    // Blush Pink
					peachpink: '#F6B6B0',   // Peach Pink
					lilac: '#C9B3E6',   // Lilac Purple
					lavender: '#B7C5E8',// Lavender Blue
					pinkAccent: '#EF96A5', // Accent Pink (Leaf)
					blueAccent: '#A4BCE5', // Accent Blue (Leaf)
					basebackground: '#EDEAF6', // Base Background
					// deeppurple: '#4E2A84', // Deep Purple
					// pink: '#F6C8D7',    // Blush Pink
					// peach: '#F6B6B0',   // Peach Pink
					// lilac: '#C9B3E6',   // Lilac Purple
					// lavender: '#B7C5E8',// Lavender Blue
					// pinkAccent: '#EF96A5', // Accent Pink (Leaf)
					// blueAccent: '#A4BCE5', // Accent Blue (Leaf)
					// basebackground: '#EDEAF6', // Base Background
				},
				// // 🌸 Bloom brand colors
				brand: {
					purple: '#4E2A84',
					lilac: '#C9B3E6',
					blush: '#F6C8D7',
					peach: '#F6B6B0',
					lavender: '#B7C5E8',
					background: '#EDEAF6'
				},
				accentPink: '#EF96A5',
				accentBlue: '#A4BCE5'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-gentle': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				'scale-gentle': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
				'scale-gentle': 'scale-gentle 0.4s ease-out',
				'enter': 'fade-in 0.5s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
