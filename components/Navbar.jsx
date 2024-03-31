"use client"
import {FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import Image from 'next/image'
import {motion} from "framer-motion"

export default function Navbar() {
    return (
        <div>
        <motion.div className="navbar bg-base-100 z-20 w-[500px]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
            <motion.div className="navbar-start z-20 ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-10 lg:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                   
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li>
                            <details>
                            <summary>
                                Products
                            </summary>
                            <ul>
                                <li className="p-2"><a href="/SE03Lite">SE03 Lite</a></li>
                                <li className="p-2"><a href="SE03">SE03</a></li>
                                <li className="p-2"><a href="SE03Max">SE03 Max</a></li>
                                <li className="p-2"><a href="/compare">Compare All</a></li>
                            </ul>
                            </details>
                        </li>
                        <li><a href="/prebook">Pre-book Now</a></li>
                        <ul className="flex">
                        <li><a href="https://www.instagram.com/rhyno.in?igsh=NTc4MTIwNjQ2YQ=="><FaInstagram width={10} height={20} size={30}/></a></li>
                        <li><a href="https://www.linkedin.com/company/rhyno-wheels/"><FaLinkedinIn width={10} height={20} size={30}/></a></li>

                        </ul>
                    </ul>
                </div>
                <Image 
                    src="/images/logo.png"
                    width={100}
                    height={100}
                />
            </motion.div>
            <div className="navbar-center hidden lg:flex z-20">
                <div className="menu menu-horizontal px-1">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li>
                            <details>
                            <summary>
                                Products
                            </summary>
                            <ul>
                                <li className="p-2 w-52"><a href="/SE03Lite">SE03 Lite</a></li>
                                <li className="p-2 w-52"><a href="SE03">SE03</a></li>
                                <li className="p-2 w-52"><a href="SE03Max">SE03 Max</a></li>
                                <li className="p-2 w-52"><a href="/compare">Compare All</a></li>
                            </ul>
                            </details>
                        </li>
                        <li><a href="/prebook">Pre-book Now</a></li>
                        <li className='ml-[47rem] btn btn-ghost'><a href="https://www.instagram.com/rhyno.in?igsh=NTc4MTIwNjQ2YQ=="><FaInstagram width={10} height={20} size={28}/></a></li>
                        <li><a href="https://www.linkedin.com/company/rhyno-wheels/"><FaLinkedinIn width={10} height={20} size={28}/></a></li>
                </div>
            </div>
        </motion.div>
    </div>
    )
}