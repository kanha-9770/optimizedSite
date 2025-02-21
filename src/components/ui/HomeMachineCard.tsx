"use client";
import React, {
  useRef,
  useState,
} from "react";
import { StaticImageData } from "next/image";
import { BiCross } from "react-icons/bi";
import dynamic from "next/dynamic";
const ProductModal=dynamic(()=>import("./ProductModal"))
const BlurImage=dynamic(()=>import("./BlurImage"))
type Card = {
    description: string;
    items: { className: string; text: string }[];
    firstname: string;
    secondname: string;
    image: string;
    title: string;
    icon: StaticImageData | string;
    category: string;
    content?: React.ReactNode;
  };
const Card = ({
    card,
  }: {
    card: Card;
    index: number;
    layout?: boolean;
  }) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <>
        {open && (
          <div className="fixed font-poppins  inset-0  h-screen z-[99999] overflow-auto">
            <div className="bg-black/80  backdrop-blur-lg h-full w-full fixed inset-0" />
            <div
              ref={containerRef}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky z-50 top-0 h-8 w-8 right-0 -mr-32 -mt-6 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <BiCross className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <div className="py-0">
                <ProductModal
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  buttons={[{ text: "Know Machine", icon: true }]} // Customize buttons if needed
                  items={card.items}
                  firstname={card.firstname}
                  secondname={card.secondname}
                />
              </div>
            </div>
          </div>
        )}
  
        <button
          onClick={handleOpen}
          className=" h-48 rounded-3xl bg-white font-poppins p-1 lg:p-2   w-40 lg:h-[16rem] md:w-56  overflow-hidden flex flex-col items-start justify-start relative z-10"
        >
          <div className="relative p-2 h-full w-full">
            <div className="absolute flex bg-white h-14 lg:h-16 w-24 lg:w-32  flex-row  top-0 space-x-2 -mr-4 right-0 z-40 rounded-bl-xl">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4 -ml-4 mt-0 "
                >
                  <path
                    d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                    fill="white" // Use the color prop here
                  ></path>
                </svg>
              </div>
              <div className="flex flex-row h-14 w-12 lg:w-20 items-center justify-center">
                <div className="h-full w-16 lg:h-20 lg:w-20  flex items-center justify-center">
                  <BlurImage
                    src={card.icon}
                    alt="icon"
                    height={100}
                    width={100}
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-8 w-8 lg:h-12 lg:w-12 -mr-4 flex items-center justify-center border-2 border-[#483d78] rounded-full bg-white">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-lg lg:text-base font-bold text-[#dc0e2a]">
                        70
                      </span>
                      <span className="text-5 text-[#483d78]">PCM/MIN</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4 mt-14 lg:mt-16 mr-4"
                >
                  <path
                    d="M20 20C20 8.95431 11.0457 0 0 0H20V20Z"
                    fill="white" // Use the color prop here
                  ></path>
                </svg>
              </div>
            </div>
            <BlurImage
              src={card.image}
              alt={card.title}
              fill
              className="object-contain h-36 border-2 bg-[#f2f2f2]  rounded-[1.5rem] absolute z-10 inset-0"
            />
            <div className="absolute -mb-2 font-poppins left-0 right-0 bottom-0 z-40 p-4">
              <h3 className="text-black font-poppins text-sm md:text-base font-regular text-left">
                {card.title}
              </h3>
            </div>
          </div>
        </button>
      </>
    );
  };
  export default Card;