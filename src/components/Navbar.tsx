"use client";

import Image from "next/image";
import React from "react";
import { Inter, Outfit } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { ArrowDown2, CloseSquare, HambergerMenu } from "iconsax-react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: "80vw",
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
      role="presentation"
      // onMouseEnter={toggleDrawer(false)}
    >
      <Link
        onClick={toggleDrawer(false)}
        className="font-normal text-base text-center text-[#012376]"
        style={{ fontWeight: "700" }}
        href="/"
      >
        Home
      </Link>
      <Link
        onClick={toggleDrawer(false)}
        className="font-normal text-base text-center text-[#012376]"
        style={{ fontWeight: "700" }}
        href="/about"
      >
        About
      </Link>
      <Link
        onClick={toggleDrawer(false)}
        className="font-normal text-base text-center text-[#012376]"
        style={{ fontWeight: "700" }}
        href="/eSeal"
      >
        eSeal
      </Link>
      <Link
        onClick={toggleDrawer(false)}
        className="font-normal text-base text-center text-[#012376]"
        style={{ fontWeight: "700" }}
        href="/verify"
      >
        eVerify
      </Link>
      <Link
        onClick={toggleDrawer(false)}
        className="font-normal text-base text-center text-[#012376]"
        style={{ fontWeight: "700" }}
        href="/ceta"
      >
        CETA
      </Link>
      <Link
        onClick={toggleDrawer(false)}
        className="font-normal text-base text-center text-[#012376]"
        style={{ fontWeight: "700" }}
        href="/media"
      >
        Media Mentions
      </Link>
      <Link
        onClick={toggleDrawer(false)}
        className="font-normal text-base text-center text-[#012376]"
        style={{ fontWeight: "700" }}
        href="https://edubuk.co.in/contact-us"
        target="_blank"
      >
        Contact Us
      </Link>
    </Box>
  );

  return (
    <div className="hidden sem:flex">
      <Button onClick={toggleDrawer(true)}>
        <HambergerMenu size="36" color="#333" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col py-4 px-8 items-end">
            <CloseSquare onClick={toggleDrawer(false)} size="32" color="#666" />
          </div>
          {DrawerList}
        </div>
      </Drawer>
    </div>
  );
}

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={inter.className}>
      <div className="flex py-5 px-8 bg-[#A3C4FF4F] justify-between  rounded-[33.85px] w-[80%] items-center justify-self-center m-auto mt-8">
        <Link href="/">
          <Image alt="logo" src="/images/newLogo.png" width={75} height={75} />
        </Link>
        <div className="flex gap-14 sem:hidden">
          <Link href="/">
            <span className="font-normal text-base text-center text-[#012376]">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="font-normal text-base text-center text-[#012376]">
              About
            </span>
          </Link>
          <Link href="/eSeal">
            <span className="font-normal text-base text-center text-[#012376]">
              eSeal
            </span>
          </Link>
          <Link href="/verify">
            <span className="font-normal text-base text-center text-[#012376]">
              eVerify
            </span>
          </Link>
          <Link href="/ceta">
            <span className="font-normal text-base text-center text-[#012376]">
              CETA
            </span>
          </Link>
          <Link href="/media">
            <span className="font-normal text-base text-center text-[#012376]">
              Media Mentions
            </span>
          </Link>
          <Link href="https://edubuk.co.in/contact-us" target="_blank">
            <span className="font-normal text-base text-center text-[#012376]">
              Contact Us
            </span>
          </Link>
        </div>
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Navbar;
