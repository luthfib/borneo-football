import { Inter } from "next/font/google";
import "./globals.css";
import "./robot.css";
import StyledComponentsRegistry from "./registry";

// If you were using a font in _app.js
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Borneo Football",
  description:
    "Borneo Football International Academy kicked off in 2015 with just 14 children - word quickly spread and today there are more than 150 players, including three allgirls team. The program quickly expanded when we realized these children - who come from low- income families - needed much more.",
  icons: {
    icon: [
      { url: "/static/images/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/static/images/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/static/images/favicon.ico",
    apple: { url: "/static/images/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://www.youtube.com/iframe_api" />
        <link rel="manifest" href="/static/images/site.webmanifest" />
        {/* Add any additional head elements from _document.js here */}
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {/* If you had any custom body elements in _document.js, add them here */}
          {/* If you had any providers in _app.js, add them here */}
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
