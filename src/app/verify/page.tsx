"use client";

import React, { useState } from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"] });

const Verify = () => {
  const [isVerify, setIsVerify] = useState(false);

  return (
    <div className="flex flex-col items-center gap-40 mt-16 med:gap-20 mb-11">
      <div className="flex flex-col gap-14 w-[50%] m-auto med:w-fit">
        <div className="flex flex-col gap-9">
          <span
            className={`${outfit.className} font-semibold text-[64px] text-[#012376] text-center sem:text-4xl`}
          >
            Verify Certificates
          </span>
          <span
            className={`${outfit.className} font-light text-xl text-[#012376] text-center`}
          >
            Verify Academic & Work-Experience Certificates and CVs on Blockchain
            in a transparent & tamper-proof manner
          </span>
        </div>
        <div className="rounded-[20px] border border-solid border-[#FFFFFF30] bg-[#AECFFF47] py-9 px-7 flex flex-col gap-16 sem:p-4 sem:w-[90%] sem:m-auto">
          <span
            className={`${outfit.className} font-medium text-5xl text-[#012376] text-center`}
          >
            Verifier
          </span>
          <div className="flex flex-col gap-4">
            <label
              className={`${outfit.className} font-normal text-xl text-[#012376]`}
            >
              Upload a file to verify
            </label>
            <div className="flex items-center sem:flex-col">
              <input
                className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47] sem:p-4 sem:w-full`}
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
            onClick={() => setIsVerify(true)}
          >
            Verify Certificate
          </button>
          {isVerify && (
            <div className="flex flex-col gap-6">
              <input
                className={`${outfit.className} font-normal text-center text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
                type="text"
                placeholder="Certifying Authority"
                readOnly
                value="Record On Blockchain"
              />
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
                  readOnly
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
                  readOnly
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
                  readOnly
                />
              </div>
              <div className="flex flex-col gap-4">
                <label
                  className={`${outfit.className} font-normal text-xl text-[#012376]`}
                >
                  File Hash on Blockchain:
                </label>
                <input
                  className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
                  type="text"
                  placeholder="Certificate Type"
                  readOnly
                />
              </div>
              <div className="flex flex-col gap-4">
                <label
                  className={`${outfit.className} font-normal text-xl text-[#012376]`}
                >
                  Certificate Issuer Account:
                </label>
                <input
                  className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
                  type="text"
                  placeholder="Certificate Type"
                  readOnly
                />
              </div>
              <div className="flex flex-col gap-4">
                <label
                  className={`${outfit.className} font-normal text-xl text-[#012376]`}
                >
                  Timestamp:
                </label>
                <input
                  className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
                  type="text"
                  placeholder="Certificate Type"
                  readOnly
                />
              </div>
              <div className="flex flex-col gap-4">
                <span
                  className={`w-full text-xl text-center text-green-500 font-normal ${outfit.className} flex self-center py-2 px-6 justify-center`}
                >
                  Certificate Successfully Verified!
                </span>
                <button
                  className={`rounded-[30px] font-normal text-xl text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex self-center py-2 px-6 w-fit`}
                  onClick={() => window.location.reload()}
                >
                  Click here to verify another certificate
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        className={`rounded-[30px] border border-solid font-normal text-xl text-center text-[#012376] border-[#012376]  ${outfit.className} flex self-center py-2 px-6 w-fit`}
      >
        Certificate Issuer Lookup
      </button>
      <Image alt="frame" src="/images/frame3.png" width={1197} height={580} />
    </div>
  );
};

export default Verify;
