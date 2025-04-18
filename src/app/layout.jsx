import Header from "@/components/Header/header";
import Footer from "@/components/footer/footer";
import ClientWrapper from "@/components/share/ClientWrapper";
import AuthProvider from "@/provider/AuthProvider";
import { Tiro_Bangla } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// Bangla font setting
const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "msab||#MHS",
  description: "#MHS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tiroBangla.className}`}>
        <AuthProvider>
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
            <ClientWrapper />
          </footer>
        </AuthProvider>
        <Toaster/>
      </body>
    </html>
  );
}
