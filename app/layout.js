import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Praj Vault | UX/UI Designer",
  description: "Portfolio of Prajwal Gohad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  );
}