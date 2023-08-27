import Header from "@/components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Container } from "@mui/material";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Imperial Metals</title>
      </head>
      <body className={inter.className}>
        <Container>
          <Header />
          <Navbar />
          <main>
            <Container>{children}</Container>
          </main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
