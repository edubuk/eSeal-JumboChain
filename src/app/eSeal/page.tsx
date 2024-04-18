import React from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"] });

const Certificate = () => {
  return (
    <div className="flex flex-col gap-32 w-[50%] mx-auto mt-16 mb-40 sem:w-auto">
      <div className="flex flex-col gap-9">
        <span
          className={`${outfit.className} font-semibold text-[64px] text-[#012376] text-center sem:text-4xl`}
        >
          eSeal Certificates
        </span>
        <span
          className={`${outfit.className} font-light text-xl text-[#012376] text-center`}
        >
          Record Academic & Work-Experience Certificates and CVs on Blockchain
          in a transparent & tamper-proof manner
        </span>
      </div>
      <div className="rounded-[20px] border border-solid border-[#FFFFFF4D] bg-[#AECFFF47] pt-9 pb-24 px-7 flex flex-col gap-8 sem:p-4 med:w-[90%] med:m-auto">
        <span
          className={`${outfit.className} font-medium text-5xl text-[#012376] text-center`}
        >
          eSealer
        </span>
        <div className="flex gap-6 justify-center">
          <button
            className={`rounded-[30px] font-normal text-xl text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex py-2 px-6`}
          >
            Browser Wallet
          </button>
          <button
            className={`rounded-[30px] font-normal text-xl text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex py-2 px-6`}
          >
            Mobile Wallet
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <label
              className={`${outfit.className} font-normal text-xl text-[#012376]`}
            >
              Connected to
            </label>
            <div className="rounded-[20px] p-6 bg-[#AECFFF47]">
              <div className="flex gap-4">
                <Image alt="icon" src="/info.svg" width={24} height={24} />
                <span
                  className={`${outfit.className} font-normal text-xl text-[#012376] text-center`}
                >
                  Please connect your JumboBlockchain wallet
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label
              className={`${outfit.className} font-normal text-xl text-[#012376]`}
            >
              Certificate issued to
            </label>
            <input
              className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              className={`${outfit.className} font-normal text-xl text-[#012376]`}
            >
              Certificate issued by
            </label>
            <input
              className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
              type="text"
              placeholder="Certifying Authority"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              className={`${outfit.className} font-normal text-xl text-[#012376]`}
            >
              Certificate type
            </label>
            <input
              className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
              type="text"
              placeholder="Certificate Type"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              className={`${outfit.className} font-normal text-xl text-[#012376]`}
            >
              Upload file
            </label>
            <div className="flex items-center sem:flex-col">
              <input
                className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47] sem:w-full`}
                type="file"
                placeholder="Choose file"
              />
              <span
                className={`${outfit.className} font-normal text-xl text-[#012376] text-center`}
              >
                Suggested file types: PDF, docx, word
              </span>
            </div>
          </div>
          <button
            className={`rounded-[30px] font-normal text-xl text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex self-center py-2 px-6 w-fit`}
          >
            Compute File Hash
          </button>
          <div className="flex flex-col gap-4">
            <label
              className={`${outfit.className} font-normal text-xl text-[#012376]`}
            >
              File hash of selected file
            </label>
            <input
              className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47] sem:p-4`}
              type="text"
              placeholder="Fill out the form and select a file"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
