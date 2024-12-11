import { useState, useEffect, useRef } from "react";
import nftImg from "./assets/nfteth.jpeg";
import item1 from "./assets/asset.jpg";
import item2 from "./assets/sections.avif";
import item3 from "./assets/buy.webp";
import item4 from "./assets/it4.jpeg";
import logo from "./assets/logo.jpeg";
import additionalItem from "./assets/item1.jpeg";
import additionalItem2 from "./assets/it4.jpeg";
import additionalItem3 from "./assets/it3.jpeg";
import { Button, Nav } from "react-bootstrap";
import { GrInstagram, GrTwitch, GrTwitter } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/style.css";

const Home = ({ web3Handler, account }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    section.classList.add("fade-in");
  }, []);
  return (
    <>
      <section ref={sectionRef} className="py-6" id="null">
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
          <div className=" mx-auto mt-10 grid grid-cols-1 pt-10 max-w-2xl lg:max-w-full lg:mx-0 md:grid-cols-2 gap-x-8 gap-y-16 sm:mt-16 space-x-4 ">
            <div className="md:order-1 sm:px-4">
              <div className="text-left md:text-left">
                <p className="text-3xl text-white leading-relaxed sm:text-left">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-400">
                    Data{" "}
                  </span>
                  is your inexhaustible asset
                </p>
                <p className="text-sm md:text-lg text-gray-600 mb-4">
                  Buy and sell products with NFTs in a
                  decentralized privacy-preserving platform
                </p>
                <div className="bg-blue-500 hover:scale-110 hover:transition-transform font-bold bg-gradient-to-r from-blue-700 to-green-400 text-white py-2 h-11 text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 px-4 rounded cursor-pointer hover:bg-blue-600">
                  <div>
                    {account ? (
                      <a
                        href={`https://etherscan.io/address/${account}`}
                        target="_blank"
                      >
                        <p className="text-white">Connected</p>
                      </a>
                    ) : (
                      <Button onClick={web3Handler} variant="outline-light">
                        Wallet Connected
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-8 text-left">
                <h3 className="text-2xl text-white font-bold mb-4">
                  Why Choose Us?
                </h3>
                <ul className="text-gray-400">
                  <li className="flex items-center mb-2">
                    <span className="mr-2">&#10003;</span> Decentralized and
                    Secure Transactions
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">&#10003;</span> Wide Range of
                    Options to Explore
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">&#10003;</span> Earn Rewards for
                    each transactiond done
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:order-2 lg:w-full lg:h-2/3 sm:w-1/2  sm:mx-auto">
              <img
                src={nftImg}
                alt="about"
                className="object-cover w-full h-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="my-9">
        <div className="relative px-8 rounded-lg shadow-lg">
          <div className="max-w-2xl mx-auto fade-in-section">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Add your product
            </h2>
            <p className="text-gray-600 mb-6">
              Become a seller or buyer and step into the world of shopping
              on the chain.
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-none border-3 border-blue-700 text-white py-2 w-full md:w-2/3 lg:w-1/2 px-6 rounded-none cursor-pointer hover:bg-blue-700">
                <Nav.Link
                  as={Link}
                  to="/create"
                  className="text-center text-white"
                >
                  Create your Product
                </Nav.Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        <div className="bg-none border-3 border-gray-500 p-4 rounded-md relative hover:scale-105 hover:transition-transform cursor-pointer">
          <img src={item1} alt="item1" />
          <p className=" text-gray-300  tracking-wide">
            Total products <br />
            <span className="font-semibold text-white text-xl tracking-wide">
              200+
            </span>
          </p>
        </div>
        <div className="bg-none border-3 border-gray-500 p-4 rounded-md hover:scale-105 hover:transition-transform cursor-pointer">
          <img src={item2} alt="item2" />
          <p className="text-gray-300">
            Sections <br />
            <span className="font-semibold text-white text-xl tracking-wide">
              10+
            </span>
          </p>
        </div>
        <div className="bg-none border-3 border-gray-500 p-4 rounded-md hover:scale-105 hover:transition-transform cursor-pointer">
          <img src={item3} alt="item3" />

          <p className="text-gray-300">
            Buy Again <br />
            <span className="font-semibold text-white text-xl tracking-wide">
              check
            </span>
          </p>
        </div>
        <div className="bg-none border-3 border-gray-500 p-4 rounded-md hover:scale-105 hover:transition-transform cursor-pointer">
          <img src={item4} alt="item4" />
          <p className="text-gray-300">
            Recently Seen <br />
            <span className="font-semibold text-white text-xl tracking-wide">
              check
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        <div className="bg-none border-3 border-gray-500 p-4 rounded-md cursor-pointer">
          <img src={additionalItem} alt="additionalItem" />
          <p className="text-gray-300">
            Exclusive Collections <br />
            <span className="font-semibold text-white text-xl tracking-wide">
              Get limited edition NFTs with products.
            </span>
          </p>
        </div>

        <div className="bg-none border-3 border-gray-500 p-4 rounded-md cursor-pointer">
          <img src={additionalItem2} alt="additionalItem2" />
          <p className="text-gray-300">
            Community Engagement <br />
            <span className="font-semibold text-white text-xl tracking-wide">
              Connect with other enthusiasts and creators.
            </span>
          </p>
        </div>

        <div className="bg-none border-3 border-gray-500 p-4 rounded-md cursor-pointer">
          <img src={additionalItem3} alt="additionalItem3" />
          <p className="text-gray-300">
            Governance Features <br />
            <span className="font-semibold text-white text-xl tracking-wide">
              Participate in platform decisions with governance [beta]
            </span>
          </p>
        </div>
      </div>

      <div className="bg-none text-white p-4 flex flex-row justify-between items-center">
        <div className="flex-shrink-0">
          <img src={logo} className="w-20 h-20 rounded-full" alt="logo" />
        </div>

        <div className=" flex flex-row space-x-4">
          <Nav.Link
            as={Link}
            to="/"
            className=" hover:text-white text-white  hover:scale-110"
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/"
            href="about"
            className=" hover:text-white text-white  hover:scale-110"
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/"
            href="help"
            className=" hover:text-white text-white  hover:scale-110"
          >
            Help
          </Nav.Link>
        </div>
        <div className="flex flex-row space-x-4 ">
          <a href="#" className="text-xl hover:text-white hover:scale-110">
            <GrTwitter />
          </a>
          <a href="#" className="text-xl hover:text-white hover:scale-110">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl hover:text-white hover:scale-110">
            <GrInstagram />
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
