import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Wadi Chahrour El Oulia Municipality",
  description: "Official website of Wadi Chahrour El Oulia Municipality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}
