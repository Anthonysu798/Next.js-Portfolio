import type { Metadata as NextMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '../components/theme-provider'
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

type Metadata = {
	// ... other properties
	icons?: {
		icon?: string[];
	  apple?: string[];
	  shortcut?: string[];
	};
  };

export const metadata: NextMetadata & Metadata = {
	metadataBase: new URL("https://anthonysu.me/"),

	title: "Anthony Su",
	authors: {
		name: "Anthony Su",
	},
	icons: {
		icon: ['/favicon.ico?v=4'],
		apple: ['/apple-touch-icon.png'],
		shortcut: ['/shortcut-icon.png'],
	  },
	

	description:
		"I'm a Fullstack developer studying in Seneca College. Making good UI website is my passion.",
	openGraph: {
		title: "Anthony Su",
		description:
			"I'm a Fullstack developer studying in Seneca College. Making good UI website is my passion.",
		url: "https://anthonysu.me/",
		siteName: "Anthony Su",
		images: "/4.png",
		type: "website",
	},
	keywords: ["Study in seneca", "Anthony Su", "Seneca Student", "UI designer"],

};
export default function RootLayout({
	children,
  }: Readonly<{
	children: React.ReactNode;
  }>) {
	return (
	  <html lang="en" suppressHydrationWarning>
	
		<body className={inter.className}>
		  <ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		  >
			{children}
		  </ThemeProvider>
		  <Analytics />
		  <SpeedInsights />
		</body>
	  </html>
	);
  }