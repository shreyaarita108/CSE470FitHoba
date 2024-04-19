import React from "react";
import Wave from "react-wavify";
import logo from "./Assets/3.png"


import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div style={{ position: "relative" }}>
      <Wave
        className="h-[40rem] md:h-[15rem] "
        fill="url(#gradient)"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.2,
          points: 6,
        }}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="20%" stopColor="#9cc030" />
            <stop offset="80%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
      </Wave>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="hidden md:flex md:flex-row  md:justify-between items-center md:mx-20 md:gap-[20rem] text-white font-[TimesNewRoman]">
          <div className="flex flex-col md:w-32 w-10 text-black">
            <h1 className="text-2xl  w-[20rem] font-bold ">
              CONTACT US
            </h1>
            <h1 className="text-lg  w-[20rem] font-semibold ">
              bracu@gmail.com
            </h1>
            <h1 className="text-xs w-[20rem] font-semibold">
              Bracu University, New campus
            </h1>
          </div>
          <div className="flex flex-col gap-2 items-center font-bold text-black">
            FIND US ON
            <div className="flex flex-row gap-2">
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#000000"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M25,3c-12.13844,0 -22,9.86156 -22,22c0,11.01913 8.12753,20.13835 18.71289,21.72852l1.14844,0.17383v-17.33594h-5.19727v-3.51953h5.19727v-4.67383c0,-2.87808 0.69065,-4.77363 1.83398,-5.96289c1.14334,-1.18926 2.83269,-1.78906 5.18359,-1.78906c1.87981,0 2.61112,0.1139 3.30664,0.19922v2.88086h-2.44727c-1.38858,0 -2.52783,0.77473 -3.11914,1.80664c-0.59131,1.03191 -0.77539,2.264 -0.77539,3.51953v4.01758h6.12305l-0.54492,3.51953h-5.57812v17.36523l1.13477,-0.1543c10.73582,-1.45602 19.02148,-10.64855 19.02148,-21.77539c0,-12.13844 -9.86156,-22 -22,-22zM25,5c11.05756,0 20,8.94244 20,20c0,9.72979 -6.9642,17.7318 -16.15625,19.5332v-12.96875h5.29297l1.16211,-7.51953h-6.45508v-2.01758c0,-1.03747 0.18982,-1.96705 0.50977,-2.52539c0.31994,-0.55834 0.62835,-0.80078 1.38477,-0.80078h4.44727v-6.69141l-0.86719,-0.11719c-0.59979,-0.08116 -1.96916,-0.27148 -4.43945,-0.27148c-2.7031,0 -5.02334,0.73635 -6.625,2.40234c-1.60166,1.66599 -2.39258,4.14669 -2.39258,7.34961v2.67383h-5.19727v7.51953h5.19727v12.9043c-9.04433,-1.91589 -15.86133,-9.84626 -15.86133,-19.4707c0,-11.05756 8.94244,-20 20,-20z"></path>
                    </g>
                  </g>
                </svg>
              </motion.button>
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#000000"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                    </g>
                  </g>
                </svg>
              </motion.button>
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#000000"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M24.40234,9c-6.60156,0 -12.80078,0.5 -16.10156,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.39844,2.39844 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.50391,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.59766,-0.5 16.09766,-1.19922c2.20313,-0.5 4.10156,-2 4.5,-4.30078c0.40234,-2.5 0.90234,-6.09766 1,-10.59766c0,-4.5 -0.5,-8.10156 -1,-10.60156c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.5,-0.5 -9.59766,-1 -16.19531,-1zM24.40234,11c7.19922,0 12.99609,0.59766 15.79688,1.09766c1.5,0.40234 2.69922,1.40234 2.89844,2.70313c0.60156,3.19922 1,6.60156 1,10.10156c-0.09766,4.29688 -0.59766,7.79688 -1,10.29688c-0.29687,1.89844 -2.29687,2.5 -2.89844,2.70313c-3.60156,0.69922 -9.60156,1.19531 -15.60156,1.19531c-6,0 -12.09766,-0.39844 -15.59766,-1.19531c-1.5,-0.40234 -2.69922,-1.40234 -2.89844,-2.70312c-0.80078,-2.80078 -1.10156,-6.5 -1.10156,-10.19922c0,-4.60156 0.40234,-8 0.80078,-10.09766c0.30078,-1.90234 2.39844,-2.50391 2.89844,-2.70312c3.30078,-0.69922 9.40234,-1.19922 15.70313,-1.19922zM19,17v16l14,-8zM21,20.40234l8,4.59766l-8,4.59766z"></path>
                    </g>
                  </g>
                </svg>
              </motion.button>
            </div>
            <h1 className="text-xs w-96 text-center mt-1 text-gray-800">
              @ 2024 All rights reserved by SMMZ7 | Developed by{" "}
              <a href="" target="_blank">
                <span
                  style={{
                    color: "#fff",
                    textShadow:
                      "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #7F193B, 0 0 20px #7F193B, 0 0 30px #7F193B, 0 0 40px #7F193B, 0 0 55px #7F193B, 0 0 75px #7F193B",
                  }}
                >
                  SMMZ7
                </span>
              </a>
              {" Designed by "}
              <a href="" target="_blank">
                <span
                  style={{
                    color: "#fff",
                    textShadow:
                      "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #7F193B, 0 0 20px #7F193B, 0 0 30px #7F193B, 0 0 40px #7F193B, 0 0 55px #7F193B, 0 0 75px #7F193B",
                  }}
                >
                  SMMZ7
                </span>
              </a>
            </h1>
          </div>
          <div className="md:w-32 w-10 text-black">
            <img  lassName="w-[40rem]" src={logo} alt="" />
          </div>
        </div>
        <div className="md:hidden flex-col items-center ">
          <div className="text-black ml-20">
            <img className="w-[40rem]" src={logo} alt="" />
          </div>
          <div className="flex flex-col gap-2 text-center text-gray-800 mt-5 w-[20rem]">
            <h1 className="text-2xl font-bold ">CONTACT US</h1>
            <h1 className="text-xl font-semibold ">bracu@gmail.com</h1>
            <h1 className="text-sm font-semibold">
              bracu university,New campus
            </h1>
          </div>
          <div className="flex flex-col gap-2 items-center font-bold mt-4">
            FIND US ON
            <div className="flex flex-row gap-2">
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M25,3c-12.13844,0 -22,9.86156 -22,22c0,11.01913 8.12753,20.13835 18.71289,21.72852l1.14844,0.17383v-17.33594h-5.19727v-3.51953h5.19727v-4.67383c0,-2.87808 0.69065,-4.77363 1.83398,-5.96289c1.14334,-1.18926 2.83269,-1.78906 5.18359,-1.78906c1.87981,0 2.61112,0.1139 3.30664,0.19922v2.88086h-2.44727c-1.38858,0 -2.52783,0.77473 -3.11914,1.80664c-0.59131,1.03191 -0.77539,2.264 -0.77539,3.51953v4.01758h6.12305l-0.54492,3.51953h-5.57812v17.36523l1.13477,-0.1543c10.73582,-1.45602 19.02148,-10.64855 19.02148,-21.77539c0,-12.13844 -9.86156,-22 -22,-22zM25,5c11.05756,0 20,8.94244 20,20c0,9.72979 -6.9642,17.7318 -16.15625,19.5332v-12.96875h5.29297l1.16211,-7.51953h-6.45508v-2.01758c0,-1.03747 0.18982,-1.96705 0.50977,-2.52539c0.31994,-0.55834 0.62835,-0.80078 1.38477,-0.80078h4.44727v-6.69141l-0.86719,-0.11719c-0.59979,-0.08116 -1.96916,-0.27148 -4.43945,-0.27148c-2.7031,0 -5.02334,0.73635 -6.625,2.40234c-1.60166,1.66599 -2.39258,4.14669 -2.39258,7.34961v2.67383h-5.19727v7.51953h5.19727v12.9043c-9.04433,-1.91589 -15.86133,-9.84626 -15.86133,-19.4707c0,-11.05756 8.94244,-20 20,-20z"></path>
                    </g>
                  </g>
                </svg>
              </motion.button>
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                    </g>
                  </g>
                </svg>
              </motion.button>
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M24.40234,9c-6.60156,0 -12.80078,0.5 -16.10156,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.39844,2.39844 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.50391,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.59766,-0.5 16.09766,-1.19922c2.20313,-0.5 4.10156,-2 4.5,-4.30078c0.40234,-2.5 0.90234,-6.09766 1,-10.59766c0,-4.5 -0.5,-8.10156 -1,-10.60156c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.5,-0.5 -9.59766,-1 -16.19531,-1zM24.40234,11c7.19922,0 12.99609,0.59766 15.79688,1.09766c1.5,0.40234 2.69922,1.40234 2.89844,2.70313c0.60156,3.19922 1,6.60156 1,10.10156c-0.09766,4.29688 -0.59766,7.79688 -1,10.29688c-0.29687,1.89844 -2.29687,2.5 -2.89844,2.70313c-3.60156,0.69922 -9.60156,1.19531 -15.60156,1.19531c-6,0 -12.09766,-0.39844 -15.59766,-1.19531c-1.5,-0.40234 -2.69922,-1.40234 -2.89844,-2.70312c-0.80078,-2.80078 -1.10156,-6.5 -1.10156,-10.19922c0,-4.60156 0.40234,-8 0.80078,-10.09766c0.30078,-1.90234 2.39844,-2.50391 2.89844,-2.70312c3.30078,-0.69922 9.40234,-1.19922 15.70313,-1.19922zM19,17v16l14,-8zM21,20.40234l8,4.59766l-8,4.59766z"></path>
                    </g>
                  </g>
                </svg>
              </motion.button>
            </div>
            <h1 className="text-xs  text-center mt-2 text-gray-800">
              @ 2024 All rights reserved by Mamun Abdullah| Developed by{" "}
              <a href="" target="_blank">
                <span
                  style={{
                    color: "#fff",
                    textShadow:
                      "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #7F193B, 0 0 20px #7F193B, 0 0 30px #7F193B, 0 0 40px #7F193B, 0 0 55px #7F193B, 0 0 75px #7F193B",
                  }}
                >
                  Mamun Abdullah
                </span>
              </a>
              {" Designed by "}
              <a href="" target="_blank">
                <span
                  style={{
                    color: "#fff",
                    textShadow:
                      "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #7F193B, 0 0 20px #7F193B, 0 0 30px #7F193B, 0 0 40px #7F193B, 0 0 55px #7F193B, 0 0 75px #7F193B",
                  }}
                >
                  SMMZ7
                </span>
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
