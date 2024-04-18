"use client";

import React, { FC } from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";

const outfit = Outfit({ subsets: ["latin"] });

interface UserProps {
  text: string;
  name: string;
  school: string;
}

const UserCard: FC<UserProps> = (props): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-solid border-[#FFFFFF4D] bg-[#FFFFFF14] shadow-[0px_24px_32px_0px_#00000005] py-5 px-8">
      <span className={`${outfit.className} font-light text-xl text-[#012376]`}>
        {props.text}
      </span>
      <span
        className={`${outfit.className} font-medium text-xl text-[#012376]`}
      >
        {props.name}
        <br /> {props.school}
      </span>
    </div>
  );
};

const ProgramSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // Change the number of cards to show per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-28" id="accelerator">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex rounded-2xl p-2 gap-1 bg-[#050506] border border-solid border-[#FFFFFF30] w-fit">
            <Image alt="circle" src="/circle.svg" width={16} height={16} />
            <span
              className={`${outfit.className} font-normal text-sm text-[#FFFFFF]`}
            >
              Our Accelerator program⏳
            </span>
          </div>
          <span
            className={`${outfit.className} font-medium text-[64px] text-[#012376] text-center sem:text-5xl sem:w-fit`}
          >
            Completed Accelerator Program
          </span>
        </div>
        <div className="flex gap-5 justify-center sem:flex-col sem:w-fit sem:self-center">
          <div className="rounded-3xl bg-[#9DB8FF4D] py-7 px-6 border border-solid border-[#AECFFF47] flex items-center">
            <Image src="/images/l22.png" alt="adlogo" width={89} height={89} />
          </div>
          <div className="rounded-3xl bg-[#9DB8FF4D] py-7 px-6 border border-solid border-[#AECFFF47] flex items-center">
            <Image src="/images/l23.png" alt="adlogo" width={89} height={89} />
          </div>
          <div className="rounded-3xl bg-[#9DB8FF4D] py-7 px-6 border border-solid border-[#AECFFF47] flex items-center">
            <Image src="/images/l24.png" alt="adlogo" width={89} height={89} />
          </div>
          <div className="rounded-3xl bg-[#9DB8FF4D] py-11 px-6 border border-solid border-[#AECFFF47] flex items-center">
            <Image src="/images/l25.png" alt="adlogo" width={89} height={89} />
          </div>
          <div className="rounded-3xl bg-[#9DB8FF4D] py-11 px-6 border border-solid border-[#AECFFF47] flex items-center">
            <Image src="/images/l26.png" alt="adlogo" width={89} height={89} />
          </div>
        </div>
        <div className="flex gap-5 justify-center"></div>
      </div>
      <div className="flex flex-col gap-11" id="testimonials">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex rounded-2xl p-2 gap-1 bg-[#050506] border border-solid border-[#FFFFFF30] w-fit">
            <Image alt="circle" src="/circle.svg" width={16} height={16} />
            <span
              className={`${outfit.className} font-normal text-sm text-[#FFFFFF]`}
            >
              What our users say✨
            </span>
          </div>
          <span
            className={`${outfit.className} font-medium text-[64px] text-[#012376] text-center w-[50%] sem:text-5xl sem:w-fit`}
          >
            Testimonials
          </span>
        </div>
        <div className={styles.sliderContainer}>
          <Slider {...settings} className="flex">
            <div className="inline-flex gap-14">
              <UserCard
                text="The Course was excellent. We learnt so much about Artificial intelligence and other emerging technologies. Also we learnt practical use-cases of these technologies in today's corporate sector in order to get a high-paying job which no one tells in today's world and is very important too."
                name="Anshika Guleria"
                school="NPGC College, Lucknow"
              />
              <UserCard
                text="Amazing and very informative sessions on various emerging technologies. Very helpful and easy to understand."
                name="Swati Poojary"
                school="GEMS School, Dubai"
              />
              <UserCard
                text="It was a wonderful learning experience during the CETA program. I am glad to have taken this course from Edubuk and will surely recommend the course to my friends who want to learn about emerging technologies and its fundamentals."
                name="Rahul Reddy"
                school="JBIET Hyderabad"
              />
            </div>
            <div className="flex gap-14">
              <UserCard
                text="I am really satisfied with the course and the knowledge we gained during the sessions. Also Mr Apoorva, the trainer, is very skilled and professional, everything was well organised and ontime."
                name="Lina Nimri"
                school="Rosary College, Marj Elhamam"
              />
              <UserCard
                text="The lessons were great, and I believe Apoorva Bajaj is an incredible tutor who is able to explain long and complex subjects on emerging technologies in a way that is concise and easy to remember."
                name="Abdallah Al-Shishani"
                school="Rosemary School, Jordan"
              />
              {/* <UserCard
                text="It was a wonderful learning experience during the CETA program. I am glad to have taken this course from Edubuk and will surely recommend the course to my friends who want to learn about emerging technologies and its fundamentals."
                name="Rahul Reddy"
                school="JBIET Hyderabad"
              /> */}
            </div>
          </Slider>
        </div>
      </div>
      <div className="flex flex-col gap-11" id="unsdgs">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex rounded-2xl p-2 gap-1 bg-[#050506] border border-solid border-[#FFFFFF30] w-fit">
            <Image alt="circle" src="/circle.svg" width={16} height={16} />
            <span
              className={`${outfit.className} font-normal text-sm text-[#FFFFFF]`}
            >
              Sustainable Development Goals✨
            </span>
          </div>
          <span
            className={`${outfit.className} font-medium text-2xl text-[#012376] text-center w-[50%]  sem:text-3xl sem:w-[90%]`}
          >
            Edubuk is committed and aligned towards United Nation&#39;s
            Sustainable Development Goals (UN SDGs)
          </span>
        </div>
        <div className="flex gap-6 justify-center sem:flex-col sem:w-fit sem:self-center">
          <div className="rounded-[20px] bg-[#AECFFF47] py-[45px] px-[25px] border border-solid border-[#FFFFFF30] flex items-center">
            <Image
              src="/images/book.png"
              alt="adlogo"
              width={125.03}
              height={125.03}
            />
          </div>
          <div className="rounded-[20px] bg-[#AECFFF47] py-[45px] px-[25px] border border-solid border-[#FFFFFF30] flex items-center">
            <Image
              src="/images/sign.png"
              alt="adlogo"
              width={125.03}
              height={125.03}
            />
          </div>
          <div className="rounded-[20px] bg-[#AECFFF47] py-[45px] px-[25px] border border-solid border-[#FFFFFF30] flex items-center">
            <Image
              src="/images/up.png"
              alt="adlogo"
              width={125.03}
              height={125.03}
            />
          </div>
          <div className="rounded-[20px] bg-[#AECFFF47] py-[45px] px-[25px] border border-solid border-[#FFFFFF30] flex items-center">
            <Image
              src="/images/formula.png"
              alt="adlogo"
              width={125.03}
              height={125.03}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
