import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { cn } from "@/utils/cn"

export function StickyScroll({content, contentClassName}) {
  // useGSAP(() => {
  //   gsap.to(".title", {rotate: "90deg", duration: 2, repeat: -1})
  // })
  return (
    <div className="h-[30rem] relative space-x-10 flex justify-center items-center">
      <div>
        {
          content.map((el, idx) => (
            <div key={idx} className={
              cn("title origin-right", contentClassName)
            }>{el.content}</div>
          ))
        }
      </div>
    </div>
  )
}






// "use client";
// import React, { useRef } from "react";
// import { useMotionValueEvent, useScroll } from "framer-motion";
// import { motion } from "framer-motion";
// import { cn } from "@/utils/cn";

// export const StickyScroll = ({
//   content,
//   contentClassName,
// }) => {
//   const [activeCard, setActiveCard] = React.useState(0);
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
//     // target: ref
//     container: ref,
//     offset: ["start start", "end start"],
//   });
//   const cardLength = content.length;

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const cardsBreakpoints = content.map((_, index) => index / cardLength);
//     const closestBreakpointIndex = cardsBreakpoints.reduce(
//       (acc, breakpoint, index) => {
//         const distance = Math.abs(latest - breakpoint);
//         if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
//           return index;
//         }
//         return acc;
//       },
//       0
//     );
//     setActiveCard(closestBreakpointIndex);
//   });

//   return (
//     <motion.div
//     //   animate={{
//     //     backgroundColor: backgroundColors[activeCard % backgroundColors.length],
//     //   }}
//       className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
//       ref={ref}
//     >
//       <div className="div relative flex items-start px-4">
//         <div className="max-w-2xl">
//           {content.map((item, index) => (
//             <div key={item.title + index} className="my-20">
//               <motion.h2
//                 initial={{
//                   opacity: 0,
//                 }}
//                 animate={{
//                   opacity: activeCard === index ? 1 : 0.3,
//                 }}
//                 className="text-2xl font-bold text-slate-100"
//               >
//                 {item.title}
//               </motion.h2>
//               <motion.p
//                 initial={{
//                   opacity: 0,
//                 }}
//                 animate={{
//                   opacity: activeCard === index ? 1 : 0.3,
//                 }}
//                 className="text-kg text-slate-300 max-w-sm mt-10"
//               >
//                 {item.description}
//               </motion.p>
//             </div>
//           ))}
//           <div className="h-40" />
//         </div>
//       </div>
//       <motion.div
//         animate={{
//         //   background: linearGradients[activeCard % linearGradients.length],
//             // rotateX: activeCard % 2 === 0 ? 0 : 180,
//             // translate: activeCard % 2 === 0 ? "-100%" : "100%",
//         }}
//         className={cn(
//           " lg:block origin-left lg:w-2/4 sticky top-10 overflow-hidden",
//           contentClassName
//         )}
//       >
//         <div className="">
//             {/* {content[activeCard].content ?? null} */}
//             {content.map((item, index) => (
//               <motion.div
//                 key={item.title + index}
//                 animate={{
//                     rotate: activeCard == index ? "0deg" : "180deg",
//                     opacity: activeCard === index ? "1" : "0.4"
                   
//                 }}
//                 className={cn(
//                   "bg-black  text-white",
//                   activeCard === index ? "opacity-1" : "opacity-25",
//                 )}
//               >
//                 {item.content}
//               </motion.div>
//             ))}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };