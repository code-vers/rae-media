import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import "./globals.css";

export const metadata = {
  title: "RAE Media Agency",
  description:
    "RAE Media connects ambitious brands with the right YouTube creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
