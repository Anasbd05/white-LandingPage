import {pricingPlans} from "@/assets/assets"
import {Check} from "lucide-react"

export const Pricing = () => {
  return (
    <section className="py-24 ">
      <div className="container px-8 md:px-12 lg:px-14">
        <div className="section-heading ">
          <h2 className="section-title">Pricing</h2>
          <p className="section-desc mt-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingPlans.map((pricing,index) => (
            <div className={`p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full  ${pricing.inverse && 'bg-black text-white/70 border-black'} `} key={index}>
              <div className="flex justify-between">
                <h3 className={`text-lg font-bold text-black/50 ${pricing.inverse && "text-white/60"}`}>{pricing.title}</h3>
                {pricing.popular &&
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className="bg-[linear-gradient(to_right,#DD7DD7,#31CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] font-medium bg-clip-text text-transparent ">Popular</span>
                  </div>
                }
              </div>
              <div className="flex gap-1 items-baseline mt-[30px]">
                <span className={` text-4xl font-bold tracking-tighter leading-none ${pricing.inverse && "text-white"}`}>${pricing.monthlyPrice}</span>
                <span className={` tracking-tight font-bold text-black/50 ${pricing.inverse && "text-white/60"}`}>/month</span>
              </div>
              <button className={`btn w-full mt-[30px] ${pricing.inverse && "bg-white text-black"} `}>{pricing.buttonText}</button>
              <ul className="flex flex-col gap-5 mt-8">
                {pricing.features.map((feature,index) => (
                  <li key={index} className="flex text-sm gap-4 items-center">
                    <Check className="h-6 w-6" /> <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
