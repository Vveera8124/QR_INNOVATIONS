import React, { useState, useEffect } from "react";
import Images1 from "./../Assests/b1.png";
import Images2 from "./../Assests/b2.png";
import Images3 from "./../Assests/b4.png";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import LOGO from "./../Assests/LogoQr.png";

// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { Carousel } from "./list";

const Home = () => {
  // const slides = [
  //   { url: Images1 },
  //   { url: Images2 },
  //   { url: Images3 },
  //   { url: Images4 },
  // ];
  const slides = [Images1, Images2, Images3];
  //   const [curr, setCurr] = useState(0);
  //   const prev = () => {
  //     const isFirstSlide = curr === 0;
  //     const newIndex = isFirstSlide ? slides.length - 1 : curr - 1;
  //     setCurr(newIndex);
  //   };

  //   const next = () => {
  //     const isLastSlide = curr === slides.length - 1;
  //     const newIndex = isLastSlide ? 0 : curr + 1;
  //     setCurr(newIndex);
  //   };

  //   const autoSlide = () => {
  //     const nextIndex = curr === slides.length - 1 ? 0 : curr + 1;
  //     setCurr(nextIndex);
  //     setInterval(() => {
  //       next();
  //     }, 3000);
  //   };

  //   useEffect(() => {
  //     autoSlide(); // Start the automatic slide timer when the component mounts
  //     return () => clearInterval(autoSlide); // Clear the timer when the component unmounts
  //   }, []);

  //   return (
  //     <div className="max-w-[1400px] h-[600px] w-full m-auto py-4 px-4 relative group">
  //       <div
  //         style={{ backgroundImage: `url(${slides[curr].url})` }}
  //         className="w-full h-full rounded-2xl bg-center bg-cover ease-in-out duration-300"
  //       >
  //         <div className="absolute bottom-5 right-0 left-0">
  //           <div className="flex items-center justify-center gap-4">
  //             {slides.map((_, i) => (
  //               <div
  //                 key={i}
  //                 className={`
  //                   transition-all w-3 h-3 bg-white rounded-full
  //                   ${curr === i ? "p-2" : "bg-opacity-50"}
  //                 `}
  //               />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //       <div className="flex absolute inset-0 text-white items-center justify-between p-4">
  //         <div
  //           onClick={prev}
  //           className="rounded-full shadow bg-white/40 text-gray-800 m-2 cursor-pointer"
  //         >
  //           <FiChevronLeft size={20} />
  //         </div>
  //         <div
  //           onClick={next}
  //           className="rounded-full shadow bg-white/40 text-gray-800 m-2 cursor-pointer"
  //         >
  //           <FiChevronRight size={20} />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div>
      <Carousel
        transition={{ duration: 1, type: "tween" }}
        autoplay={true}
        autoplayDelay={3000}
        loop={true}
        className=" max-w-[1600px] h-[450px] w-full  py-2"
      >
        <div className="w-full h-full rounded-2xl bg-center object-cover relative">
          <img src={slides[0]} alt="image 1" className="h-full w-full  " />
          <div className="absolute inset-0 grid   h-full w-full place-items-left bg-black/30 bg-blend-difference">
            <div className="w-3/4 text-center md:w-2/4 place-items-left">
              <Typography
                variant="lead"
                color="white"
                className="ml-9 mt-40 sticky"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full rounded-2xl bg-center  object-cover">
          <img src={slides[1]} alt="image 2" className="h-full w-full " />
          <div className="absolute inset-0 grid   h-full w-full place-items-left bg-black/30 bg-blend-difference">
            <div className="w-3/4 text-center md:w-2/4 place-items-left">
              <Typography
                variant="lead"
                color="white"
                className="ml-9 mt-40  sticky "
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full rounded-2xl bg-center object-cover">
          <img src={slides[2]} alt="image 3" className="h-full w-full " />
          <div className="absolute inset-0 grid   h-full w-full place-items-left bg-black/30 bg-blend-difference">
            <div className="w-3/4 text-center md:w-2/4 place-items-left">
              <Typography
                variant="lead"
                color="white"
                className="ml-9 mt-40  sticky "
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>

      <div className="m-auto text-black relative inset-0 grid h-[150px] w-full place-items-center ">
        <Typography className="mt-10 font-black text-xl text-center">
          WHO WE ARE
          <br />
        </Typography>
        <Typography className="text-center text-md font-medium">
          We are more than just a technology company; we are pioneers in the QR
          code revolution. <br />
          We are dedicated to creating products that harness the capabilities of
          QR codes to benfit businesses, organisations, and individuals, making
          the workd a more connected, safe and efficient place. <br />
          At QR-INNOVATIONS, we are passionate about the untapped potential of
          QR codes and their power to revolutionise the way we connect,
          comminicated, and engage with the world
        </Typography>
      </div>

      <div className=" relative mt-10 py-10 flex justify-center items-center rounded-lg overflow-hidden ">
        <iframe
          width="700"
          height="350"
          src="https://www.youtube.com/embed/FPhg_ZjrPtU?si=BNbGSB4VCSS3rE7X"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="relative bg-[#eeeef0] text-center flex justify-around m-2 ">
        <div className="flex items-center ">
          <img src={LOGO} alt="logo.img" className="w-[120px] h-[110px] " />
        </div>
        <div>
          <ul>
            <li className="font-bold text-lg">About</li>
            <li className="!p-2">Charity Enquiry</li>
            <li className="!p-2">Franchisee Enquiry</li>
            <li className="!p-2">Business Model</li>
            <li className="!p-2">Social Responsibility</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold text-lg">Products</li>
            <li className="!p-2">QR Doors</li>
            <li className="!p-2">QR Helmet</li>
            <li className="!p-2">QR Tag</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold text-lg">Conditions</li>
            <li className="!p-2">Terms and Conditions</li>
            <li className="!p-2">Privacy Statement Refund Policy</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold text-lg">Address</li>
            <li className="!p-2">
              xyz,
              <br />
              Singapore
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
