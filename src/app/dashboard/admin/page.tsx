"use client";

import { Outfit } from "next/font/google";
import { useState } from "react";

const outfit = Outfit({ subsets: ["latin"] });

const Admin = () => {
  const [InstituteAddress, setInstituteAddress] = useState("");
  const [InstituteName, setInstituteName] = useState("");
  const [InstituteAcronym, setInstituteAcronym] = useState("");
  const [Website, setWebsite] = useState("");

  return (
    <div className="flex flex-col gap-32 w-[50%] mx-auto mt-16 mb-40 sem:w-auto">
      <div className="flex flex-col gap-9">
        <span
          className={`${outfit.className} font-semibold text-[64px] text-[#012376] text-center sem:text-4xl`}
        >
          Admin Dashboard
        </span>
        <span
          className={`${outfit.className} font-light text-xl text-[#012376] text-center`}
        >
          You may add an institute into the Credentials Ethereum Blockchain
          Below
        </span>
      </div>
      <div className="rounded-[20px] border border-solid border-[#FFFFFF4D] bg-[#AECFFF47] pt-9 pb-24 px-7 flex flex-col gap-8 sem:p-4 med:w-[90%] med:m-auto">
        <span
          className={`${outfit.className} font-medium text-5xl text-[#012376] text-center`}
        >
          Institute Registration
        </span>
        <span
          className={`${outfit.className} mt-8 font-medium text-3xl text-[#012376]`}
        >
          Details
        </span>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <label
              className={`${outfit.className} font-normal text-xl text-[#012376]`}
            >
              Institute Account Address
            </label>
            <input
              className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
              type="text"
              placeholder="Address"
              onChange={(e) => setInstituteAddress(e.target.value)}
              value={InstituteAddress}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              className={`${outfit.className} font-normal text-xl text-[#012376]`}
            >
              Institute Name
            </label>
            <input
              className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
              type="text"
              placeholder="Name"
              onChange={(e) => setInstituteName(e.target.value)}
              value={InstituteName}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              className={`${outfit.className} font-normal text-xl text-[#012376]`}
            >
              Institute Acronym
            </label>
            <input
              className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
              type="text"
              placeholder="SUTID"
              onChange={(e) => setInstituteAcronym(e.target.value)}
              value={InstituteAcronym}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              className={`${outfit.className} font-normal text-xl text-[#012376]`}
            >
              Institute Website Link
            </label>
            <input
              className={`${outfit.className} font-normal text-xl text-[#012376] rounded-[20px] p-6 bg-[#AECFFF47]`}
              type="url"
              placeholder="www.acbd.com"
              onChange={(e) => setWebsite(e.target.value)}
              value={Website}
            />
          </div>
          <button
            className={`rounded-[30px] w-fit self-center font-normal text-xl text-center text-[#ffffff] bg-gradient-to-r from-[#012376] to-[#009EFF] ${outfit.className} flex py-2 px-6`}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
