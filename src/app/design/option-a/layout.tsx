import { Bodoni_Moda, Jost } from "next/font/google";
import "./option-a.css";
import OptionANavBar from "./OptionANavBar";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  title: "AutoTen — Driven by Trust (Option A · Dark Cinematic)",
  description:
    "Design preview: dark cinematic automotive direction for the AutoTen home page.",
};

export default function OptionALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${bodoni.variable} ${jost.variable} option-a-root`}>
      <OptionANavBar />
      {children}
    </div>
  );
}
