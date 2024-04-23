import DescktopNavBar from "./components/DescktopNavBar";
import MobileNavBar from "./components/MobileNavBar";

export default function Header() {
  return (
    <div>
      <DescktopNavBar />
      <MobileNavBar />
    </div>
  );
}
