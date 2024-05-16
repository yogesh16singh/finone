import Logo from "../assets/Logo.png";
const Navbar = ({ active, setActive }) => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }}
  return (
    <header className="absolute z-10 w-full drop-shadow-md flex justify-between items-center h-20  mx-auto px-4 text-black">
      <div className=" p-3 bg-white rounded-lg"> <img className="w-40 " src={Logo}></img></div>
     
      <div className="flex md:mx-20 font-mono bg-white rounded-lg">
        <button
          onClick={() =>{ setActive("image") ;  scrollToSection("image");}}
          className={`m-2 px-4 py-1 text-xl hover:bg-blue-800 hover:text-white hover:shadow-2xl rounded-lg ${active == "image" ? "border-2 border-blue-600" : ""}`}
        >
          Image
        </button>
        <button
          onClick={() => {setActive("video");scrollToSection("video");}}
          className={`m-2 px-4 py-1 text-xl hover:bg-blue-800 hover:text-white rounded-lg ${active == "video" ? "border-2 border-blue-600" : ""}`}
        >
          Video
        </button>
      </div>
    </header>
  );
};
export default Navbar;
