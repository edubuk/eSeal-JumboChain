import React from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#012376] py-14 px-24 gap-20 sem:p-8">
      <div className="flex flex-col gap-16">
        <div className="flex justify-between med:flex-col">
          <span
            className={`${outfit.className} font-semibold text-[90px] text-[#FFFFFF] text-center`}
          >
            Edubuk.
          </span>
          <div className="flex gap-9 items-center med:justify-center">
            <span
              className={`${outfit.className} font-medium text-4xl text-[#FFFFFF] text-center`}
            >
              Follow Us:{" "}
            </span>
            <div className="flex gap-5">
              <Link
                href="https://www.linkedin.com/in/edubuk-ai-driven-decentralized-skilling-ecosystem-on-blockchain/"
                target="_blank"
              >
                <Image
                  alt="icon"
                  src="/linkedin.svg"
                  width={31}
                  height={31}
                  className="hover:cursor-pointer"
                />
              </Link>
              <Link
                href="https://www.facebook.com/edubuk.trst/"
                target="_blank"
              >
                <Image
                  alt="icon"
                  src="/facebook.svg"
                  width={31}
                  height={31}
                  className="hover:cursor-pointer"
                />
              </Link>
              <Link href="https://twitter.com/edubuktrust" target="_blank">
                <Image
                  alt="icon"
                  src="/X.svg"
                  width={31}
                  height={31}
                  className="hover:cursor-pointer"
                />
              </Link>
              <Link href="https://www.instagram.com/edubuk_/" target="_blank">
                <Image
                  alt="icon"
                  src="/instagram.svg"
                  width={31}
                  height={31}
                  className="hover:cursor-pointer"
                />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC4g4MH4F_JTbd1tqNS5pq1g/videos"
                target="_blank"
              >
                <Image
                  alt="icon"
                  src="/youtube.svg"
                  width={31}
                  height={31}
                  className="hover:cursor-pointer"
                />
              </Link>
              <Link href="https://t.me/+boPh8H_HpNljZDZl" target="_blank">
                <Image
                  alt="icon"
                  src="/telegram.svg"
                  width={31}
                  height={31}
                  className="hover:cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between sem:flex-col">
          <div className="flex flex-col gap-4">
            <Link href="#learner">
              <span
                className={`${outfit.className} font-normal text-base text-[#FFFFFF] `}
              >
                Learner’s Profile
              </span>
            </Link>
            <Link href="#collaborators">
              <span
                className={`${outfit.className} font-normal text-base text-[#FFFFFF] `}
              >
                Our Collaborators
              </span>
            </Link>
            <Link href="#testimonials">
              <span
                className={`${outfit.className} font-normal text-base text-[#FFFFFF] `}
              >
                Testimonials
              </span>
            </Link>
            <Link href="#unsdgs">
              <span
                className={`${outfit.className} font-normal text-base text-[#FFFFFF] `}
              >
                UN SDG’s Compliance
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="#accelerator">
              <span
                className={`${outfit.className} font-normal text-base text-[#FFFFFF] `}
              >
                Accelerator Programs
              </span>
            </Link>
            <Link href="#awards">
              <span
                className={`${outfit.className} font-normal text-base text-[#FFFFFF] `}
              >
                Awards & Recognitions
              </span>
            </Link>
            <Link href="/about#founders">
              <span
                className={`${outfit.className} font-normal text-base text-[#FFFFFF] `}
              >
                Meet Our Co-Founders
              </span>
            </Link>
            <Link href="/ceta">
              <span
                className={`${outfit.className} font-normal text-base text-[#FFFFFF] `}
              >
                Know more about CETA Program
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span
              className={`${outfit.className} font-normal text-base text-[#FFFFFF] `}
            >
              Visit us at:{" "}
              <Link href="https://www.edubuk.io/" target="_blank">
                www.edubuk.io
              </Link>
            </span>
            <span
              className={`${outfit.className} font-normal text-base text-[#FFFFFF] `}
            >
              Reach us at:{" "}
              <Link href="mailto:support@edubuk.com">support@edubuk.com</Link>
            </span>
            <Link href="/eSeal">
              <span
                className={`${outfit.className} font-normal text-base text-[#FFFFFF] `}
              >
                eSeal Certificates
              </span>
            </Link>
            <Link href="/verify">
              <span
                className={`${outfit.className} font-normal text-base text-[#FFFFFF] `}
              >
                Verify Certificates
              </span>
            </Link>
          </div>
        </div>
      </div>
      <span
        className={`${outfit.className} font-normal text-base text-[#FFFFFF] text-center`}
      >
        All rights reserved with Edubuk.
      </span>
    </div>
  );
};

export default Footer;
