'use client'
import acme from "@/assets/logo-acme.png"
import quatum from "@/assets/logo-quantum.png"
import apex from "@/assets/logo-apex.png"
import pulse from "@/assets/logo-pulse.png"
import celestial from "@/assets/logo-celestial.png"
import echo from "@/assets/logo-echo.png"
import Image from "next/image"
import {motion} from "framer-motion"

export const LogoTicker = () => {
  return (
    <div className="px-8 md:py-12 md:px-12 lg:px-14 py-8 bg-white ">
      <div className="container">
        <div className="flex  overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            animate={{
              translateX: '-50%',
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex justify-center gap-14 flex-none pr-14">
            <Image src={quatum} className="logo-ticker" alt="quantum logo" />
            <Image src={acme} className="logo-ticker" alt="acme logo" />
            <Image src={apex} className="logo-ticker" alt="apex logo" />
            <Image src={echo} className="logo-ticker" alt="echo logo" />
            <Image src={pulse} className="logo-ticker" alt="pulse logo" />
            <Image src={celestial} className="logo-ticker" alt="celestial logo" />

            {/* Second set og logos for animation */}

            <Image src={quatum} className="logo-ticker" alt="quantum logo" />
            <Image src={acme} className="logo-ticker" alt="acme logo" />
            <Image src={apex} className="logo-ticker" alt="apex logo" />
            <Image src={echo} className="logo-ticker" alt="echo logo" />
            <Image src={pulse} className="logo-ticker" alt="pulse logo" />
            <Image src={celestial} className="logo-ticker" alt="celestial logo" />
          </motion.div >
        </div>
      </div>
    </div >
  );
};
