import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-green-400 text-white py-6">
      <div className="container mx-auto flex justify-around items-center">
        <div>
          <p className="text-lg font-semibold font-mono">Simple Crew</p>
          <p className="mt-2 font-serif">123 Main Street, Beawar,Ajmer (RAJ)</p>
          <p className="">ys1997642@gmail.com</p>
        </div>
        <div>
          <p className="text-lg mb-4 font-semibold font-mono">Social Links</p>
          <div className="flex mt-2">
            <a href="#" className=" hover:text-white mr-4">
              <FaFacebook />
            </a>
            <a href="#" className=" hover:text-white mr-4">
              <FaInstagram />
            </a>
            <a href="#" className=" hover:text-white">
              <FaSquareTwitter />
            </a>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      {/* <div className="m-2 flex justify-around">
        <div>Designed and Developed by Simple Crew</div>
        <div>@ All Copywrites reserved</div>
      </div> */}
    </footer>
  );
};

export default Footer;
