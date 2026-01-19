import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";

// Configure Fonts
const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron",
  weight: ["400", "700"] 
});

const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"] 
});

export const metadata = {
  title: "Praj Vault | UX/UI Designer",
  description: "Portfolio of Prajwal Gohad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${poppins.variable} font-sans bg-background text-white`}>
        {children}
      </body>
    </html>
  );
}