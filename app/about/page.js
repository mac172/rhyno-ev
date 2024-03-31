"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/Lamp";
import { TextGenerateEffect } from "@/components/ui/TextGen";

const words = `
Established in 2019 by an automotive engineer with a vision for sustainable and robust
mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
of young individuals passionately driving innovation in the electric vehicle industry. We
believe in engineering solutions that solve problems.
With our first product, we've taken a bold step to create something more than just a vehicle;
it's a unique experience of elegance, comfort and style, addressing the pitfalls of
conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and
ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet
operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically
appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new
era in sustainable and dependable electric transportation.
`
export default function About() {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <motion.span
            initial="hidden"
            whileInView="visible"
          >
            About Us
          </motion.span>
        </motion.h1>
      </LampContainer>

      <motion.div className="lg:p-10 lg:m-10 border rounded-3xl"
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
      >
        <motion.span>
          <TextGenerateEffect words={words} />
        </motion.span>
      </motion.div>
    </div>
  );
}
