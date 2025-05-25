import {ArrowRight} from "lucide-react";
import cogImage from "@/assets/cog.png"
import cylinder from '@/assets/cylinder.png'
import noodle from '@/assets/noodle.png'
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 px-8 md:px-12 lg:px-14 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC3,#EAEEFE_100%)]  overflow-x-clip ">
      <div className="md:flex items-center">
        <div className="md:w-[478px] ">
          <span className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight ">Version 2.0 is here</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 ">
            Pathway to productivity
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Molestiae nostrum, dolore consequatur sapiente tempora
            commodi nemo in aliquid excepturi facere.
          </p>
          <div className="flex gap-2 items-center mt-[30px] ">
            <button className="btn">Get for free</button>
            <button className="border border-[#222]/10 px-3 py-2 rounded-lg flex items-center gap-1">
              <p>Learn more</p>
              <ArrowRight className="h-5 w-5 " />
            </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <Image src={cogImage} alt="Cog image" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-8 " />
          <Image src={cylinder} alt="cylinder image" width={220} height={220} className="hidden md:block -top-8 -left-32 md:absolute" />
          <Image src={noodle} alt="noodle image" width={220} height={220} className="hidden lg:block top-[524px] left-[488px] md:absolute  rotate-[30] " />
        </div>
      </div>

    </section>
  );
};
