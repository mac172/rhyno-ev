// import { useRef } from "react"
// import gsap from "gsap"
// import { useGSAP } from "@gsap/react"
// import { cn } from "@/utils/cn"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { SplitText } from "gsap/SplitText"
// gsap.registerPlugin(ScrollTrigger);

// export function StickyScroll({content, contentClassName}) {
//   const title = useRef();
//   useGSAP(() => {
//     gsap.from(".usp", {translateX: 120, rotate: -20, opacity: 0.25, duration: 2,}),
//     gsap.to(".usp", {
//       rotate: 120,
//       opacity: 1,
//       scrollTrigger: {
//         trigger: ".usp",
//         start: "100px center",
//         end: "700px center",
//         scrub: 0.6,
//         markers: true,
//       }
//     })
//   }, {scope: title})
//   return (
//     <div className="h-[30rem] relative space-x-10 flex justify-center items-center translate-x-1/4 p-10 ">
//       <div className="title origin-right" ref={title}>
//         {
//           content.map((el, idx) => (
//             <div key={idx} className={
//               cn("usp origin-right text-sm md:text-2xl w-full ", contentClassName)
//             }>{el.content}</div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }






"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const ro = useTransform(scrollYProgress, [0,1], [-100,0])

  const cardLength = content.length;


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  

  return (
    <motion.div
    //   animate={{
    //     backgroundColor: backgroundColors[activeCard % backgroundColors.length],
    //   }}
      className="h-[30rem] overflow-y-auto no-scrollbar flex relative lg:space-x-10  rounded-md lg:p-10 block"
      ref={ref}
    >
      <div className="lg:left-28 m-auto left-0 right-0 top-0 bottom-0 relative flex justify-center lg:justify-start  px-4">
        <div className="lg:w-full w-full overflow-hidden">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 mb-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="lg:text-2xl text-sm text-center  font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="lg:text-lg text-xs  text-center text-slate-300 max-w-sm mt-10 mb-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        className={cn(
          "hidden lg:block float-right lg:left-[40rem] lg:w-2/4 sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        <motion.div className="origin-right  " 
          style={{rotate: ro}}
        >
            {/* {content[activeCard].content ?? null} */}
            {content.map((item, index) => (
              <motion.div
                key={item.title + index}
                animate={{
                    opacity: activeCard === index ? "1" : "0",
                    // scale: activeCard === index ? "2rem" : "0"
                    rotate: [0,90]

                }}
                className={cn(
                  "bg-black z-10 origin-right text-white ",
                  activeCard === index ? "opacity-1" : "opacity-25",
                )}
              >
                {item.content}
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
