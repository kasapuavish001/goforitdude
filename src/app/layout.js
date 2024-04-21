import { MuseoModerno } from "next/font/google";
import MainLayout from "./components/MainLayout/MainLayout";
import "./reset.css";

const kalam = MuseoModerno({ subsets: ["latin"] });

export const metadata = {
  title: "Go For It Dude",
  description: "Traveling made for hiking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kalam.className}>
        <MainLayout/>
        </body>
    </html>
  );
}
