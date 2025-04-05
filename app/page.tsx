import AboutMe from "@/components/about-me";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <AboutMe/>
    </div>
   
  );
}
