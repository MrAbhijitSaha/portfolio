import Footer from "@/components/Footer/Footer";
import MobileAndDesktopHeaderSwitch from "@/components/Header/MobileAndDesktopHeaderSwitch";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { footerSocialLinks } from "@/lib/footerSocialLinks";
import { headerRouteOptions } from "@/lib/headerRouteOptions";
import { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutPropsType = Readonly<{
	children: ReactNode;
}>;

export const metadata: Metadata = {
	title: {
		default: "Portfolio | Abhijit Saha",
		template: "%s | Abhijit Saha ",
	},
	description:
		"Learn more about Abhijit Saha — frontend developer, tech enthusiast, and creative coder from Kolkata.",
	keywords: ["Abhijit Saha", "frontend developer", "React", "portfolio"],
	
};

const RootLayout = ({ children }: RootLayoutPropsType) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className="">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange>
					<header className="mx-auto max-w-5xl px-6">
						<MobileAndDesktopHeaderSwitch
							routes={headerRouteOptions}
						/>
					</header>

					<main className="mx-auto max-w-5xl px-6 py-3">
						{children}
					</main>

					<footer>
						<Footer data={footerSocialLinks} />
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
