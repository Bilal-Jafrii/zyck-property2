import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

type Props = {
  isAuthenticated: boolean;
};

interface ILinks {
  name: string;
  link: string;
}

const pages: ILinks[] = [
  { name: "About", link: "/about" },
  { name: "Contact us", link: "/contact" },
  { name: "FAQs", link: "/faqs" },
  { name: "Terms & Condition", link: "/terms" },
];

const listing: ILinks[] = [
  { name: "Featured", link: "/featured" },
  { name: "Rent", link: "/rent" },
  { name: "Sale", link: "/sale" },
];

const DropdownMenu = ({ isAuthenticated }: Props) => {
  return (
    <div className="flex gap-4">
      <Link className="text-green-500" href="/">
        Home
      </Link>
      <HoverCard>
        <HoverCardTrigger className="text-medium text-white cursor-pointer hover:text-green-600 transition-colors">
          Listings
        </HoverCardTrigger>
        <HoverCardContent className="bg-black bg-opacity-75">
          <ul className="flex flex-col gap-1 p-1">
            {listing.map((item, index) => (
              <li
                className="p-2 border rounded-md shadow-md hover:bg-green-400 transition-colors text-white"
                key={index}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger className="text-medium text-white hover:text-green-600 cursor-pointer transition-colors">
          Pages
        </HoverCardTrigger>
        <HoverCardContent className="bg-black bg-opacity-75">
          <ul className="flex flex-col gap-1 p-1">
            {pages.map((item, index) => (
              <li
                className="p-2 border rounded-md shadow-md hover:bg-green-400 transition-colors text-white"
                key={index}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default DropdownMenu;
