"use client";

import {
  BriefcaseBusiness,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  Copyright,
  DollarSign,
  FileClock,
  FileText,
  Gavel,
  Image,
  Info,
  MessageCircleQuestion,
  PenTool,
  Presentation,
  Scale,
  TrendingUp,
  Tv,
  TvMinimalPlay,
  Users,
} from "lucide-react";
import Link from "next/link";
import { JSX, useEffect, useState } from "react";
import NavbarDropdown from "./WelcomeNavbarDropdown";

type NavbarMenu = {
  products: boolean;
  solutions: boolean;
  company: boolean;
  resources: boolean;
};

type DropdownDetails = {
  lhead?: string;
  rhead?: string;
  loptions?: DropdownOptions;
  rsubhead?: string;
  rdesc?: string;
};

type DropdownOptions = {
  icon?: JSX.Element;
  heading?: string;
  desc?: string;
}[];

const DropdownDetailList = [
  {
    lhead: "OUR PRODUCTS",
    rhead: "FEATURES",
    loptions: [
      {
        link: "corporate/enterprise-contract-management",
        icon: <FileText className='size-4' />,
        heading: "Contract Management",
        desc: "Simplify contract workflows with automated reminders",
      },
      {
        link: "corporate/enterprise-legal-management",
        icon: <Gavel className='size-4' />,
        heading: "Litigation Management",
        desc: "Monitor company-wide litigation with workflow automation",
      },
      {
        link: "corporate/enterprise-notice-management",
        icon: <FileClock className='size-4' />,
        heading: "Legal Notice Management",
        desc: "Manage enterprise legal notices using automated workflows",
      },
      {
        link: "corporate/enterprise-ip-portfolio-management",
        icon: <Copyright className='size-4' />,
        heading: "IPR Management",
        desc: "AI tools to track and protect your valuable IP assets",
      },
      {
        link: "corporate/enterprise-collection-management",
        icon: <CircleDollarSign className='size-4' />,
        heading: "Collections Management",
        desc: "Enhance your digital debt collection strategy",
      },
    ],
    rsubhead: "Security",
    rdesc:
      "URE IPR delivers enterprise-level protection through robust compliance, encrypted storage, and strict access controls—ideal for privacy-focused, security-driven teams.",
  },
  {
    lhead: "FOR TEAMS",
    rhead: "FOR USERS",
    loptions: [
      {
        link: "department-legal",
        icon: <Scale className='size-4' />,
        heading: "Legal",
        desc: "Enhance productivity through case tracking and alerts",
      },
      {
        link: "department-hr",
        icon: <Users className='size-4' />,
        heading: "HR",
        desc: "Centralize employee data, automate policy compliance",
      },
      {
        link: "department-finance",
        icon: <DollarSign className='size-4' />,
        heading: "Finance",
        desc: "Optimize budget and payments to gain full financial oversight",
      },
      {
        link: "department-sales",
        icon: <BriefcaseBusiness className='size-4' />,
        heading: "Sales",
        desc: "Accelerate deals through our efficient e-signature workflow",
      },
    ],
    rsubhead: "Integrations",
    rdesc:
      "URE IPR connects effortlessly with your current tools to simplify legal processes, cut manual tasks, and keep teams synchronized for improved productivity.",
  },
  {
    lhead: "COMPANY",
    rhead: "WHAT'S NEW",
    loptions: [
      {
        icon: <Info className='size-4' />,
        heading: "About Us",
        desc: "Know more about our mission and values",
      },
      {
        icon: <TrendingUp className='size-4' />,
        heading: "Careers",
        desc: "Join our team and shape the future of legal tech",
      },
      {
        icon: <Tv className='size-4' />,
        heading: "News",
        desc: "Keep up with the latest legal trends and industry insights",
      },
      {
        icon: <Image className='size-4' />,
        heading: "Media Kit",
        desc: "URE IPR's assets, facts, figures - all in one place.",
      },
    ],
    rsubhead: "Why Choose URE IPR?",
    rdesc:
      "Elevate your legal operations with our unified platform, built to streamline every process. Perfectly tailored for businesses of all sizes.",
  },
  {
    lhead: "DISCOVER",
    rhead: "FEATURED",
    loptions: [
      {
        icon: <PenTool className='size-4' />,
        heading: "Blogs",
        desc: "Keep informed with our latest blogs featuring expert industry insights.",
      },
      {
        icon: <TvMinimalPlay className='size-4' />,
        heading: "PR",
        desc: "Keep up with recent legal advancements and the latest industry updates",
      },
      {
        icon: <Presentation className='size-4' />,
        heading: "Product Tour",
        desc: "Explore our product highlights to discover essential features",
      },
      {
        icon: <MessageCircleQuestion className='size-4' />,
        heading: "Help Center",
        desc: "Your go-to hub for answers, guides, and support",
      },
    ],
    rsubhead: "",
    rdesc: "",
  },
];

export default function WelcomeNavbar() {
  const [dropdowns, setDropdowns] = useState<NavbarMenu>({
    products: false,
    solutions: false,
    company: false,
    resources: false,
  });
  const [dropdownDetails, setDropdownDetails] = useState<DropdownDetails>({});
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsFixed(currentY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAllDropdowns = () => {
    setDropdowns({
      products: false,
      solutions: false,
      company: false,
      resources: false,
    });
  };

  return (
    <>
      <div className={`h-[77px] ${isFixed ? "block" : "hidden"}`} />
      <nav
        className={`w-full transition-all duration-300 flex items-center justify-between px-16 py-4 bg-slate-300 ${
          isFixed ? "fixed top-0 z-50 shadow-lg" : "relative"
        }`}
      >
        <div className='flex items-center space-x-16'>
          <Link href={"/"}>
            <h2 className='font-bold text-gray-800'>URE IPR</h2>
          </Link>
          <div className='hidden md:flex space-x-6 text-gray-700 text-sm font-bold'>
            <button
              className='flex'
              onClick={() => {
                setDropdowns({
                  ...dropdowns,
                  products: !dropdowns.products,
                  solutions: false,
                  company: false,
                  resources: false,
                });
                setDropdownDetails(DropdownDetailList[0]);
              }}
            >
              Products
              {!dropdowns.products ? <ChevronDown /> : <ChevronUp />}
            </button>
            <button
              className='flex'
              onClick={() => {
                setDropdowns({
                  ...dropdowns,
                  solutions: !dropdowns.solutions,
                  products: false,
                  company: false,
                  resources: false,
                });
                setDropdownDetails(DropdownDetailList[1]);
              }}
            >
              Solutions
              {!dropdowns.solutions ? <ChevronDown /> : <ChevronUp />}
            </button>
            <button
              className='flex'
              onClick={() => {
                setDropdowns({
                  ...dropdowns,
                  company: !dropdowns.company,
                  products: false,
                  solutions: false,
                  resources: false,
                });
                setDropdownDetails(DropdownDetailList[2]);
              }}
            >
              Company
              {!dropdowns.company ? <ChevronDown /> : <ChevronUp />}
            </button>
            <button
              className='flex'
              onClick={() => {
                setDropdowns({
                  ...dropdowns,
                  resources: !dropdowns.resources,
                  products: false,
                  solutions: false,
                  company: false,
                });
                setDropdownDetails(DropdownDetailList[3]);
              }}
            >
              Resources
              {!dropdowns.resources ? <ChevronDown /> : <ChevronUp />}
            </button>
            <button>Pricing</button>
          </div>
        </div>
        <div className='space-x-4'>
          <button className='text-sm text-white bg-gray-800 px-4 py-2 border border-gray-800 rounded hover:bg-blue-800 hover:border-blue-800'>
            <Link href={"/user"}>Sign In</Link>
          </button>
          <button className='text-sm text-white bg-gray-800 px-4 py-2 border border-gray-800 rounded hover:bg-blue-800 hover:border-blue-800'>
            Book Demo
          </button>
        </div>
      </nav>
      {(dropdowns.products ||
        dropdowns.solutions ||
        dropdowns.company ||
        dropdowns.resources) && (
        <NavbarDropdown
          lhead={dropdownDetails.lhead}
          rhead={dropdownDetails.rhead}
          loptions={dropdownDetails.loptions}
          rsubhead={dropdownDetails.rhead}
          rdesc={dropdownDetails.rdesc}
          closeDropdowns={closeAllDropdowns}
        />
      )}
    </>
  );
}
