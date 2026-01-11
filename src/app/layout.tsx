import Footer from "@/components/Footer/Footer";
import MobileAndDesktopHeaderSwitch from "@/components/Header/MobileAndDesktopHeaderSwitch";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { footerSocialLinks } from "@/lib/footerSocialLinks";
import { headerRouteOptions } from "@/lib/headerRouteOptions";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutPropsType = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutPropsType) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <MobileAndDesktopHeaderSwitch routes={headerRouteOptions} />
          </header>
          <main>{children}</main>
          <footer>
            <Footer data={footerSocialLinks} />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
