import React from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"] });

const About = () => {
  return (
    <div className="flex flex-col bg-[#ffffff] mt-8 mb-40 gap-24">
      <div className="flex flex-col gap-9  w-[80%] self-center sem:w-fit">
        <span
          className={`${outfit.className} font-semibold text-[64px] text-[#012376] text-center sem:text-5xl`}
        >
          About Edubuk
        </span>
        <span
          className={`${outfit.className} font-light text-xl text-[#012376] text-center sem:w-[90%] sem:m-auto sem:text-[1rem]`}
        >
          Edubuk is Your Gateway to the Exciting World of Emerging Technological
          Skills Built Securely Using AI and Blockchain Our mission is to
          upskill, reskill and certify learners with cutting-edge knowledge
          needed to thrive in the ever-evolving career paths of the 21st century
          driven by these emerging technologies.
          <br /> At Edubuk, we believe in recognizing your achievements in a way
          that stands out during your employment interviews and while you work
          in MNCs professionally. We provide a reliable and secure system that
          records your achievements and creates completely verified CVs, known
          as the Edubuk Profile, all stored on the Blockchain for transparency
          and reliability.
        </span>
      </div>
      <div className="flex flex-col gap-10" id="founders">
        <span
          className={`${outfit.className} font-medium text-5xl text-[#012376] text-center`}
        >
          Meet our Co-founders
        </span>
        <div className="flex justify-center gap-20 flex-wrap sem:flex-col">
          <div className="rounded-[20px] border border-solid border-[#AECFFF47] p-9 bg-[#AECFFF47] flex flex-col gap-5 items-center w-[30%] sem:w-[90%] sem:p-4 sem:m-auto">
            <Image
              alt="image"
              src="/images/ceo.png"
              width={359}
              height={315}
              className="rounded-[20px] w-[359px] h-[314px] sem:w-fit"
            />
            <span
              className={`${outfit.className} font-semibold text-2xl text-[#012376] text-center w-[60%] sem:w-auto`}
            >
              Shivani Mehrotra Co-Founder & CEO
            </span>
            <span
              className={`${outfit.className} font-normal text-base text-[#012376] text-center`}
            >
              University Topper, UCG NET Qualified Professor in Economics and
              Management, Top 30 Young Indian Awardee with more than 10 years of
              experience in education industry. Appointed as National Vice
              President of Emerging Technologies Wing in WICCI (Women’s Indian
              Chamber of Commerce and Industry). Microsoft Certified Innovative
              Educator for Emerging Technologies Skilling
            </span>
            <Link
              href="https://www.linkedin.com/in/shivani-mehrotra-edubuk/"
              target="_blank"
            >
              <Image
                alt="linkedin"
                src="/linkedin-icon-2.svg"
                width={40}
                height={40}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div className="rounded-[20px] border border-solid border-[#AECFFF47] p-9 bg-[#AECFFF47] flex flex-col gap-5 items-center w-[30%] sem:w-[90%] sem:p-4 sem:m-auto">
            <Image
              alt="image"
              src="/images/cto.png"
              width={333.25}
              height={308}
              className="rounded-[20px] w-[359px] h-[314px] sem:w-fit"
            />
            <span
              className={`${outfit.className} font-semibold text-2xl text-[#012376] text-center w-[60%] sem:w-auto`}
            >
              Apoorva Bajaj <br />
              Co-Founder & CTO
            </span>
            <span
              className={`${outfit.className} font-normal text-base pb-[6%] text-[#012376] text-center`}
            >
              Engineer from IIT and MBA from IIM, Gold Medallist, a CFA
              Charterholder with 10+ years of work experience in the Financial
              Markets working with MNCs like Goldman Sachs, JP Morgan, DE Shaw.
              Completed training in AI & Blockchain from ISB, IBM and Microsoft
              certified trainers. Sought after global trainer for emerging
              technologies skilling.
            </span>
            <Link
              href=" https://www.linkedin.com/in/apoorva-bajaj-iit-iim-cfa-edubuk/"
              target="_blank"
            >
              <Image
                alt="linkedin"
                src="/linkedin-icon-2.svg"
                width={40}
                height={40}
                className="rounded-2xl"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10" id="founders">
        <span
          className={`${outfit.className} font-medium text-5xl text-[#012376] text-center`}
        >
          Meet Our Team
        </span>
        <div className="flex justify-center gap-20 flex-wrap sem:flex-col">
          <div className="rounded-[20px] border border-solid border-[#AECFFF47] p-9 bg-[#AECFFF47] flex flex-col gap-5 items-center w-[30%] sem:w-[90%] sem:p-4 sem:m-auto">
            <Image
              alt="image"
              src="/images/Harsh Moroliya.jpg"
              width={333.25}
              height={308}
              className="rounded-[20px] w-[359px] h-[314px] sem:w-fit"
            />
            <span
              className={`${outfit.className} font-semibold text-2xl text-[#012376] text-center sem:w-auto`}
            >
              Harsh Moroliya <br />
              Lead-Full Stack Web3 Developer
            </span>
            <span
              className={`${outfit.className} font-normal text-base text-[#012376] text-center`}
            >
              7+ years Tech Experience:
              <br /> Back end: Rust, Solidity, Web3.JS, Python, JS
              <br /> Front End: REACT + Frameworks, <br />
              Cloud: AWS + Azure, <br />
              DB: SQL
            </span>
            <Link href="https://www.linkedin.com/in/harsh-km/" target="_blank">
              <Image
                alt="linkedin"
                src="/linkedin-icon-2.svg"
                width={40}
                height={40}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div className="rounded-[20px] border border-solid border-[#AECFFF47] p-9 bg-[#AECFFF47] flex flex-col gap-5 items-center w-[30%] sem:w-[90%] sem:p-4 sem:m-auto">
            <Image
              alt="image"
              src="/images/Aseem.jpeg"
              width={333.25}
              height={308}
              className="rounded-[20px] w-[359px] h-[314px] sem:w-fit"
            />
            <span
              className={`${outfit.className} font-semibold text-2xl text-[#012376] text-center sem:w-auto`}
            >
              Aseem Anand <br />
              Head of University Partnerships
            </span>
            <span
              className={`${outfit.className} font-normal text-base text-[#012376] text-center`}
            >
              8+ years education client relationship experience. Completed MBA
              in Human Resources from UPTU and completed M.A. Psychology from
              Kerala University. Heading University Partnerships and
              Relationships for Edubuk in the north Indian region.
            </span>
            <Link
              href=" https://www.linkedin.com/in/aseem-bajaj-a2149550/"
              target="_blank"
            >
              <Image
                alt="linkedin"
                src="/linkedin-icon-2.svg"
                width={40}
                height={40}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div className="rounded-[20px] border border-solid border-[#AECFFF47] p-9 bg-[#AECFFF47] flex flex-col gap-5 items-center w-[30%] sem:w-[90%] sem:p-4 sem:m-auto">
            <Image
              alt="image"
              src="/images/Prince.png"
              width={333.25}
              height={308}
              className="rounded-[20px] w-[359px] h-[314px] sem:w-fit"
            />
            <span
              className={`${outfit.className} font-semibold text-2xl text-[#012376] text-center sem:w-auto`}
            >
              Priyanshu Vijay
              <br />
              Full-Stack Web3 Developer
            </span>
            <span
              className={`${outfit.className} font-normal text-base text-[#012376] text-center`}
            >
              6+ years Experience: <br />
              Back End: Python, Java, JS, Solidity, Web3.JS
              <br />
              Front End: HTML, CSS, REACT
            </span>
            <Link
              href="https://www.linkedin.com/in/priyanshu-v-2a5529176/"
              target="_blank"
            >
              <Image
                alt="linkedin"
                src="/linkedin-icon-2.svg"
                width={40}
                height={40}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div className="rounded-[20px] border border-solid border-[#AECFFF47] p-9 bg-[#AECFFF47] flex flex-col gap-5 items-center w-[30%] sem:w-[90%] sem:p-4 sem:m-auto">
            <Image
              alt="image"
              src="/images/Ayushi.png"
              width={333.25}
              height={308}
              className="rounded-[20px] w-[359px] h-[314px] sem:w-fit"
            />
            <span
              className={`${outfit.className} font-semibold text-2xl text-[#012376] text-center  sem:w-auto`}
            >
              Ayushi Wahi
              <br />
              Head of Business Development
            </span>
            <span
              className={`${outfit.className} pb-[6%] font-normal text-base text-[#012376] text-center`}
            >
              8+ years as Teacher in City Montessori School, Asia’s Largest
              School, State President at WICCI
            </span>
            <Link
              href="https://www.linkedin.com/in/ayushi-wahi-7587591b2/"
              target="_blank"
            >
              <Image
                alt="linkedin"
                src="/linkedin-icon-2.svg"
                width={40}
                height={40}
                className="rounded-2xl"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <span
          className={`${outfit.className} font-medium text-5xl text-[#012376] text-center`}
        >
          Meet our Advisors
        </span>
        <div className="flex justify-center gap-20 flex-wrap sem:flex-col">
          <div className="rounded-[20px] border border-solid border-[#AECFFF47] p-9 bg-[#AECFFF47] flex flex-col gap-5 items-center w-[30%] sem:w-[90%] sem:p-4 sem:m-auto">
            <Image
              alt="image"
              src="/images/pic1.jpg"
              width={359}
              height={315}
              className="rounded-[20px] w-[359px] h-[314px] sem:w-fit"
            />
            <span
              className={`${outfit.className} font-semibold text-2xl text-[#012376] text-center  sem:w-auto`}
            >
              Mukul Agrawal
              <br />
              Co-Founder, E-Tutor World
            </span>
            <span
              className={`${outfit.className} font-normal text-base text-[#012376] text-center`}
            >
              Ed-Tech Entrepreneur, Global Leader, IIM Calcutta TiE Charter
              Mentor. Generated $30 million in sales, met and exceeded country
              P&L and revenue growth targets
            </span>
            <Link href="https://www.linkedin.com/in/muagrawal/" target="_blank">
              <Image
                alt="linkedin"
                src="/linkedin-icon-2.svg"
                width={40}
                height={40}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div className="rounded-[20px] border border-solid border-[#AECFFF47] p-9 bg-[#AECFFF47] flex flex-col gap-5 items-center w-[30%] sem:w-[90%] sem:p-4 sem:m-auto">
            <Image
              alt="image"
              src="/images/pic2.jpg"
              width={333.25}
              height={308}
              className="rounded-[20px] w-[359px] h-[314px] sem:w-fit"
            />
            <span
              className={`${outfit.className}  font-semibold text-2xl text-[#012376] text-center  sem:w-auto`}
            >
              Dr. Narsing Rao, GS <br />
              Former VC at ICFAI University
            </span>
            <span
              className={`${outfit.className} pb-[6%] font-normal text-base text-[#012376] text-center`}
            >
              IIM Ahmedabad, IIT BHU Alumni, ex-CEO of Institute of Management
              and Global Education Chief Mentor, Synergy School of Business
            </span>
            <Link
              href="https://www.linkedin.com/in/dr-narsing-rao-gs-a318735/"
              target="_blank"
            >
              <Image
                alt="linkedin"
                src="/linkedin-icon-2.svg"
                width={40}
                height={40}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div className="rounded-[20px] border border-solid border-[#AECFFF47] p-9 bg-[#AECFFF47] flex flex-col gap-5 items-center w-[30%] sem:w-[90%] sem:p-4 sem:m-auto">
            <Image
              alt="image"
              src="/images/pic3.jpg"
              width={333.25}
              height={308}
              className="rounded-[20px] w-[359px] h-[314px] sem:w-fit"
            />
            <span
              className={`${outfit.className} font-semibold text-2xl text-[#012376] text-center sem:w-auto`}
            >
              Shalini Paul
              <br />
              National Vice President, WICCI
            </span>
            <span
              className={`${outfit.className} font-normal text-base text-[#012376] text-center`}
            >
              Emerging Technologies Evangelist, Talks about AI, Metaverse,
              Blockchain and Emerging Technologies
            </span>
            <Link
              href="https://www.linkedin.com/in/shaliniemergingtech/"
              target="_blank"
            >
              <Image
                alt="linkedin"
                src="/linkedin-icon-2.svg"
                width={40}
                height={40}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div className="rounded-[20px] border border-solid border-[#AECFFF47] p-9 bg-[#AECFFF47] flex flex-col gap-5 items-center w-[30%] sem:w-[90%] sem:p-4 sem:m-auto">
            <Image
              alt="image"
              src="/images/pic4.jpg"
              width={333.25}
              height={308}
              className="rounded-[20px] w-[359px] h-[314px] sem:w-fit"
            />
            <span
              className={`${outfit.className} font-semibold text-2xl text-[#012376] text-center  sem:w-auto`}
            >
              Saibal Sen
              <br />
              Founder, Zenesys Consulting
            </span>
            <span
              className={`${outfit.className} font-normal text-base text-[#012376] text-center`}
            >
              Director of Zenesys Learning, Senior Global Consultant, London
              School of Economics Alumni
            </span>
            <Link href="https://www.linkedin.com/in/saibal/" target="_blank">
              <Image
                alt="linkedin"
                src="/linkedin-icon-2.svg"
                width={40}
                height={40}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div className="rounded-[20px] border border-solid border-[#AECFFF47] p-9 bg-[#AECFFF47] flex flex-col gap-5 items-center w-[30%] sem:w-[90%] sem:p-4 sem:m-auto">
            <Image
              alt="image"
              src="/images/guest.png"
              width={333.25}
              height={308}
              className="rounded-[20px] w-[359px] h-[314px] sem:w-fit"
            />
            <span
              className={`${outfit.className} font-semibold text-2xl text-[#012376] text-center  sem:w-auto`}
            >
              Sachin Kumar
              <br />
              Founder, Jumbo Blockchain
            </span>
            <span
              className={`${outfit.className} font-normal text-base text-[#012376] text-center`}
            >
              An ardent leader and ISB Hyderabad alum, with 19 years in IT at
              IBM & Infosys, embodies innovation and entrepreneurship. Known for
              a sharp business acumen, he drives strategic decisions, blending
              tech insight with entrepreneurial spirit, marking significant
              strides in the tech landscape and inspiring many.
            </span>
            <Link
              href="https://www.linkedin.com/in/kumarsachin30"
              target="_blank"
            >
              <Image
                alt="linkedin"
                src="/linkedin-icon-2.svg"
                width={40}
                height={40}
                className="rounded-2xl"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
