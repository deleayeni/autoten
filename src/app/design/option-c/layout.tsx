import "./option-c.css";
import OptionCNavBar from "./OptionCNavBar";

export const metadata = {
  title: "AutoTen — Driven by Trust (Option C · Sharp Modern Retail)",
  description:
    "Design preview: sharp modern retail direction for the AutoTen home page. Uses existing Nunito Sans + Heebo.",
};

export default function OptionCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="option-c-root">
      <OptionCNavBar />
      {children}
    </div>
  );
}
