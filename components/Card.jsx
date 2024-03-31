"use client";

import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CardBody, CardContainer, CardItem } from "./CardContainer";
import Link from "next/link";

export default function Card() {
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(".card-1", {opacity: 0, x: "-100%", duration: 1.1})
    tl.from(".card-2", {opacity: 0, x: "100%", duration: 1.1, delay: 1})
    // tl.from(".card-3", {opacity: 0, x: "-100%", duration: 1.1, delay: 1.1})
  },[])

  return (
    <div className="grid grid-cols-auto gap-0 lg:grid-cols-2">
    <div className="card-1">
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          SE03 Lite
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Fire-Safe Advance LFP Battery
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/s23.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="/SE03Lite"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <a href="/prebook">Buy Now</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>

    <div className="card-2">
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          SE03
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          With 2000W Motor Enjoy Thrilling Ride 
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/s23lite.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="SE03"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <a href="/prebook">Buy Now</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>

    <CardContainer className="inter-var card-3">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          SE03 Max
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Exclusive For Long Drive Peoples
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/s23max.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="/SE23Max"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            View →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <a href="/prebook">Buy Now</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>
  );
}
