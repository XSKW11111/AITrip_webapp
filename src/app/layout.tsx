import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { fonts } from "./font";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Ai Trip",
  description: "Ai Trip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          <ErrorBoundary errorComponent={Error}>{children}</ErrorBoundary>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
