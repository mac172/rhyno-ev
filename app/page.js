import Frontline from "@/components/Frontline";
import PreBookBtn from "@/components/PreBookBtn";
import CheckOut from "@/components/ui/CheckOut";
import { StickyScrollRevealDemo } from "@/components/USP";
export default function Home() {
  return (
    <div className="p-0 m-0 sm:overflow-hidden">
      <Frontline />
      <PreBookBtn />
      <CheckOut />
      <StickyScrollRevealDemo />
    </div>
  );
}
