"use client"
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const data = [
  {
    title: "SE03",
    desc: "Enjoy Thrilling Ride",
    img: "/images/s23.png",
    link: "https://buy.stripe.com/test_28o7woegAcHm3KgbII"
  },
  {
    title: "SE23 Lite",
    desc: "Assure Saftey For You",
    img: "/images/s23lite.png",
    link: "https://buy.stripe.com/test_eVa6sk5K4aze6Ws9AB"
  },
  {
    title: "SE23 Max",
    desc: "Discover Long Routes",
    img: "/images/s23max.png",
    link: "https://buy.stripe.com/test_14k03W2xSazebcIcMO"
  }
]

export function DirectionAwareHover() {
  const container = useRef();
  useGSAP(() => {
    gsap.fromTo(container.current,
      {opacity: 0, scale: 0},
      {opacity: 1, scale: 1},
      {duration: 10, delay: 1.2}
      )
  })           
  
  return (
    <div className="grid grid-cols-auto lg:grid-cols-3 md:grid-cols-2 gap-4"
      initial="hidden"
      animate="show"
      ref={container}
    >
      {
        data.map((item, index) => (
          <div 
            className="card card-bordered w-96 bg-base-100 shadow-xl  border rounded-2xl hover:" 
            key={index}
            // ref={container}
          >
            <figure><img src={item.img} alt="Shoes" /></figure>
            <div className="card-body" >
              <h2 className="card-title">{item.title}</h2>
              <p>{item.desc}</p>
              <div className="card-actions justify-end">
                <a href={item.link}>
                  <button className="btn bg-teal-700 rounded-full">Book Now</button>
                </a>
              </div>
            </div>
          </div>
        ))
      }
      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="/images/s23.png" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
