import Image from "next/image";
import Frontline from "@/components/Frontline";
import PreBookBtn from "@/components/PreBookBtn";
import CheckOut from "@/components/ui/CheckOut";

export default function Home() {
  return (
    <div>
      <Frontline />
      <PreBookBtn />
      <CheckOut />
    </div>
  );
}
