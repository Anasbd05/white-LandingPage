import {testimonials} from "@/assets/assets";
import Image from "next/image";

export const Testimonials = () => {

  const Firstcol = testimonials.slice(0,3)
  const Secondcol = testimonials.slice(3,6)
  const Thirdcol = testimonials.slice(6,9)


  return (
    <section className="bg-white  ">
      <div className="container px-8 mx-auto md:px-12 lg:px-14">
        <div className="flex section-heading flex-col items-center">
          <span className="tag">Testimonials</span>
          <h2 className="section-title mt-5">What our users said</h2>
          <p className="section-desc mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            S            rem minus sed voluptas numquam amet.
          </p>
        </div>
        <div className="flex justify-center gap-6 ">
          <div className="flex flex-col [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] gap-6 mt-10">
            {Firstcol.map((testi) => (
              <div className="card" key={testi.text}>
                <h3>{testi.text} </h3>
                <div className="flex gap-2 mt-5 items-center">
                  <Image alt="" src={testi.imageSrc}
                    className="h-10 w-10 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-medium tracking-tight leading-5">{testi.name} </p>
                    <span className="leading-5 text-sm">{testi.username} </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:flex flex-col [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] gap-6 mt-10">
            {Secondcol.map((testi) => (
              <div className="card" key={testi.text}>
                <h3>{testi.text} </h3>
                <div className="flex gap-2 mt-5 items-center">
                  <Image alt="" src={testi.imageSrc}
                    className="h-10 w-10 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-medium tracking-tight leading-5">{testi.name} </p>
                    <span className="leading-5 text-sm">{testi.username} </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" hidden lg:flex flex-col [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] gap-6 mt-10">
            {Thirdcol.map((testi) => (
              <div className="card" key={testi.text}>
                <h3>{testi.text} </h3>
                <div className="flex gap-2 mt-5 items-center">
                  <Image alt="" src={testi.imageSrc}
                    className="h-10 w-10 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-medium tracking-tight leading-5">{testi.name} </p>
                    <span className="leading-5 text-sm">{testi.username} </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
