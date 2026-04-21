import { Fraunces, DM_Sans } from "next/font/google";
import "./option-b.css";
import OptionBNavBar from "./OptionBNavBar";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata = {
  title: "AutoTen — Driven by Trust (Option B · Editorial Luxury)",
  description:
    "Design preview: editorial luxury direction for the AutoTen home page.",
};

export default function OptionBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${fraunces.variable} ${dmSans.variable} option-b-root`}>
      <OptionBNavBar />
      {children}
    </div>
  );
}
