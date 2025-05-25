
import showcase from '@/assets/product-image.png'
import pyramid from '@/assets/pyramid.png'
import tube from '@/assets/tube.png'
import Image from 'next/image';

export const ProductShowcase = () => {
  return (
    <section className='overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24 '>
      <div className="container  px-8 md:px-12 lg:px-14">
        <div className="section-heading">
          <div className="flex justify-center">
            <span className="tag">Boost your productivity</span>
          </div>
          <h1 className='section-title mt-5'>
            A more effective way to track progress
          </h1>
          <p className="section-desc mt-5  ">
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
