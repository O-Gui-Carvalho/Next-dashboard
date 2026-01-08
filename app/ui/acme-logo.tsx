import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { inter } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p> */}

      <Image src={'/logo-quant.svg'} alt='Logo Quant' width={156} height={32}/>
    </div>
  );
}
