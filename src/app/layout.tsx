import "../styles/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "../components/Navbar"

export const metadata = {
  title: "Recipe app",
  description:
    "Our recipe app lets you easily search for recipes and learn how to make them. You'll find detailed steps and ingredient lists for each recipe. Start cooking and explore a variety of delicious dishes with our user-friendly app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Navbar/>{children}</body>
      <Script src="./themeScript.js" />
    </html>
  );
}
