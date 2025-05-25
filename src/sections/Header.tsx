import {ArrowRightIcon,Menu} from 'lucide-react';
import Image from 'next/image';
import logo from '@/assets/logosaas.png'
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-40">
      <div className="flex gap-3  items-center justify-center  py-3 text-white bg-black text-sm  ">
        <p className='text-white/60 hidden md:block '>Streamline your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center ">
          <p>Get started for free</p>
          <ArrowRightIcon className='h-4 w-4 inline-flex justify-center text-white items-center ' />
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <Image alt='saas logo' height={40} width={40} src={logo} className='' />
          <Menu className='h-5 w-5 md:hidden' />
          <nav className='hidden md:flex gap-6 text-black/60 items-center'>
            <Link href={"#about"}>About</Link>
            <Link href={"#features"}>features</Link>
            <Link href={"#about"}>customers</Link>
            <Link href={"#about"}>Updates</Link>
            <Link href={"#about"}>Pricing</Link>
            <button className='bg-black text-white py-2 px-4 rounded-lg font-medium tracking-tight'>Get for free</button>
          </nav>
        </div>
      </div>
    </header>
  )
};
