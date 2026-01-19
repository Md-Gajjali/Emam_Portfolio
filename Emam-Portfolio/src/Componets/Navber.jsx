import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiHome } from "react-icons/hi2";
import { FaUser } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { MdSms } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FloatingDock } from './floating-dock';
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";


const Navber = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];


  return (
    < >
      <Container>

        <div className="flex fixed items-center justify-center   bottom-10 right-0 text-center h-35rem w-full">
          <FloatingDock
            mobileClassName="translate-y-20 " // only for demo, remove for production
            items={links}
          />
        </div>

      </Container>

    </>
  )
}

export default Navber
