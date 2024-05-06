import React, { FC } from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"] });

interface AwardProps {
  img: string;
}

export const AwardCards: FC<AwardProps> = ({ img }): JSX.Element => {
  return (
    <div className="rounded-3xl bg-[#9DB8FF1F] py-11 px-6 border border-solid border-[#9DB8FF1F] flex items-center sem:p-4">
      <Image
        src={img}
        alt="adlogo"
        width={89}
        height={89}
        className="sem:w-fit"
      />
    </div>
  );
};

const AwardsSection = () => {
  return (
    <div className="flex flex-col gap-44" id="awards">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex rounded-2xl p-2 gap-1 bg-[#050506] border border-solid border-[#FFFFFF30] w-fit">
              <Image alt="circle" src="/circle.svg" width={16} height={16} />
              <span
                className={`${outfit.className} font-normal text-sm text-[#FFFFFF]`}
              >
                Who recognized us✨
              </span>
            </div>
            <span
              className={`${outfit.className} font-medium text-5xl text-[#012376] text-center`}
            >
              Awards & Recognition
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex gap-9 items-center justify-center med:flex-col">
            <div className="flex flex-col gap-9">
              <Image
                alt="award"
                src="/images/award.png"
                width={514}
                height={600}
                className="sem:w-fit sem:self-center"
              />
              <span
                className={`${outfit.className} font-normal text-base text-[#012376] text-center`}
              >
                Winner, G20 Conference, Indonesia 2022: Best Startup, Jury&#39;s
                Choice
              </span>
            </div>
            <span
              className={`${outfit.className} font-light text-xl text-[#012376] text-center w-[50%] med:w-[70%]`}
            >
              Edubuk&#39;s patent published model is globally award winning and
              recognized by various reputed organizations including G20 Summit
              in Indonesia (2022). Best Edtech Startup Jury’s choice out of 100
              Startups, CNN, Financial Times, MIT University, Harvard University
              in the US, World Economic Forum (Davos, Jan 2023), AWS Edstart,
              IIT Bombay, IIT Kharagpur, IIM Calcutta, Polygon Blockchain,
              Concordium Blockchain, The HINDU, CNBC, MoneyControl, RaiseMoney,
              IDFC-First Bank, Inc. 42, NASSCOM, State Government of Telangana
              (India), Dubai Expo 2020, TiE Delhi, TiE Mumbai, Data Innovation
              Bazaar, Telangana AI-Mission, Bombay Stock Exchange&#39;s Impact
              Startups, TimesNext, European Digital University, among many
              others
            </span>
          </div>
          <Image
            alt="logos"
            src="/images/recos.png"
            width={1022}
            height={503}
            className="self-center med:w-fit sem:w-[90%]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-9" id="collaborators">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex rounded-2xl p-2 gap-1 bg-[#050506] border border-solid border-[#FFFFFF30] w-fit">
            <Image alt="circle" src="/circle.svg" width={16} height={16} />
            <span
              className={`${outfit.className} font-normal text-sm text-[#FFFFFF]`}
            >
              Who believe in us✨
            </span>
          </div>
          <span
            className={`${outfit.className} font-medium text-5xl text-[#012376] text-center sem:text-5xl sem:w-fit`}
          >
            Collaborators & Supporters
          </span>
        </div>
        <div className="flex m-auto gap-12 med:flex-col med:items-center">
          <div className="flex flex-col gap-8">
            <Image
              alt="group"
              src="/images/grouppic.png"
              width={553}
              height={484.84}
              className="sem:self-center sem:w-fit"
            />
            <span
              className={`${outfit.className} font-normal text-xl text-[#012376] text-center sem:w-[90%] sem:self-center`}
            >
              Edubuk and IEE, MoU Signed for Collaboration
            </span>
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex gap-9 sem:gap-4 sem:self-center">
              <AwardCards img={"/images/l1.png"} />
              <AwardCards img={"/images/l2.png"} />
              <AwardCards img={"/images/l3.png"} />
            </div>
            <div className="flex gap-9 sem:gap-4">
              <AwardCards img={"/images/l4.png"} />
              <AwardCards img={"/images/l5.png"} />
              <AwardCards img={"/images/l6.png"} />
            </div>
            <div className="flex gap-9 sem:gap-4">
              <AwardCards img={"/images/l7.png"} />
              <AwardCards img={"/images/l8.png"} />
              <AwardCards img={"/images/CCD Logo.png"} />
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-center med:flex-col med:items-center">
          <div className="flex gap-6 sem:gap-4">
            <AwardCards img={"/images/l10.png"} />
            <AwardCards img={"/images/l11.png"} />
            <AwardCards img={"/images/l12.png"} />
          </div>
          <div className="flex gap-6 sem:gap-4">
            <AwardCards img={"/images/l13.png"} />
            <AwardCards img={"/images/l14.png"} />
            <AwardCards img={"/images/l15.png"} />
          </div>
        </div>
        <div className="flex gap-6 justify-center med:flex-col med:items-center">
          <div className="flex gap-6 sem:gap-4">
            <AwardCards img={"/images/l16.png"} />
            <AwardCards img={"/images/l17.png"} />
            <AwardCards img={"/images/l18.png"} />
          </div>
          <div className="flex gap-6 sem:gap-4">
            <AwardCards img={"/images/l19.png"} />
            <AwardCards img={"/images/l20.png"} />
            <AwardCards img={"/images/l21.png"} />
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <span
            className={`${outfit.className} font-medium text-5xl text-[#012376] text-center sem:text-5xl sem:w-fit`}
          >
            MoUs Signed with Universities
          </span>
          <div className="flex gap-6 flex-wrap items-center justify-center rounded-3xl border border-solid border-[#9DB8FF1F] bg-[#9DB8FF1F] p-5 w-[90%] m-auto">
            <Image alt="mou" src="/images/mou1.jpg" width={350} height={250} />
            <Image alt="mou" src="/images/mou2.jpg" width={350} height={250} />
            <Image alt="mou" src="/images/mou3.jpg" width={350} height={250} />
            <Image alt="mou" src="/images/mou4.jpg" width={350} height={250} />
            <Image alt="mou" src="/images/mou5.jpg" width={350} height={250} />
            <Image alt="mou" src="/images/mou7.jpg" width={350} height={250} />
            <Image alt="mou" src="/images/mou6.jpg" width={350} height={250} />
            <Image alt="mou" src="/images/mou8.jpg" width={350} height={250} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
