import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PrimeGlobal",
  description:
    "Welcome to [News Website Name], your go-to source for reliable, up-to-date news. Stay informed with our comprehensive coverage of global events, trends, and stories. Our experienced journalists deliver accurate reporting, insightful analysis, and engaging features. Navigate our user-friendly website to explore a wide range of topics, from breaking news to politics, business, technology, entertainment, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ProgressBar />
        <div className="pageContainer">{children}</div>
      </body>
    </html>
  );
}
