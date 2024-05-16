import { useState } from "react";
import Navbar from "./components/Navbar";
import ImageMain from "./components/ImageMain";
import VideoMain from "./components/VideoMain";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Egvideo from "./components/Egvideo";
export default function App() {
  const [active, setActive] = useState("image");
  return (
    <div className=" App bg-[#f5f5fa] min-h-screen">
     {/* <Banner />   */}
     <Navbar active={active} setActive={setActive} />
     
      <Slider />
       <ImageMain />
       <Egvideo />
       <VideoMain />

       <Testimonials />
       <Team />
       <Footer />
    </div>
  );
}
