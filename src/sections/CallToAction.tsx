'use client'
import {ArrowRight} from "lucide-react"
import star from "@/assets/star.png"
import spring from "@/assets/spring.png"
import {motion,useScroll,useTransform} from "framer-motion";
import {useRef} from "react";

export const CallToAction = () => {


  const actRef = useRef(null)

  const {scrollYProgress} = useScroll({
    target: actRef,
    offset: ['start end',"end start"]
  })

  const translateY = useTransform(scrollYProgress,[0,1],[150,-150])

  return (
    <section ref={actRef} className="bg-gradient-to-b overflow-x-clip from-white to-[#D2DCFF] py-24 ">
      <div className="container px-8 mx-auto md:px-12 lg:px-14">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-desc mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            excepturi molestiae, dicta non accusamus libero nisi?
          </p>
          <motion.img
            style={{
              translateY: translateY,
            }}
            alt="star image" src={star.src}
            className="absolute -left-[350px] -top-[137px] "
            width={300} height={300} />
          <motion.img
            style={{
              translateY: translateY,
            }}
            alt="spring image" src={spring.src}
            className="absolute -right-[331px] -top-[19px] "
            width={300} height={300} />
        </div>
        <div className="flex items-center gap-2 mt-10 justify-center">
          <button className="btn">Get for free</button>
          <button className="btn-primary flex gap-1 items-center">
            <span>Learn more</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
};
