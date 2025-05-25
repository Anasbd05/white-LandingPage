
import showcase from '@/assets/product-image.png'
import pyramid from '@/assets/pyramid.png'
import tube from '@/assets/tube.png'
import Image from 'next/image';

export const ProductShowcase = () => {
  return (
    <section className='overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24 '>
      <div className="container  px-8 md:px-12 lg:px-14">
        <div className="max-w-[540px] mx-auto ">
          <div className="flex justify-center">
            <span className="tag">Boost your productivity</span>
          </div>
          <h1 className='text-center text-3xl md:text-[54px] md:leading-[60px] lg: font-bold tracking-tighter mt-5 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent '>
            A more effective way to track progress
          </h1>
          <p className="text-center text-[#010D3E] mt-5 tracking-tight  text-[22px] leading-[30px] ">
            celebrate the joy of accomplishement   with an app designed
            to track your progress and motivate your efforts
          </p>
        </div>
        <div className='relative'>
          <Image src={showcase} alt='Product image' className='mt-10' />
          <Image src={pyramid} alt='pyramid image' height={262} width={262} className='absolute -right-36 -top-32 hidden md:block  ' />
          <Image src={tube} alt='tube image' height={248} width={248} className='absolute -left-36 bottom-24  hidden md:block ' />
        </div>
      </div>
    </section>
  );
};
