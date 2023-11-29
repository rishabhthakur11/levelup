import Image from "next/image";
import apple from "/public/assets/brands/Group 1.png";
import google from "/public/assets/brands/image 1.png";
import meta from "/public/assets/brands/image 2.png";
import microsoft from "/public/assets/brands/image 3.png";
import netflix from "/public/assets/brands/image 5.png";
import amazon from "/public/assets/brands/image 6.png";
import adobe from "/public/assets/brands/image 7.png";
import notion from "/public/assets/brands/image 8.png";
import wissen from "/public/assets/brands/image 10.png";

export default function LogoCloud() {
  return (
    <div className="pt-12 lg:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-textGray tracking-wider">
          POWERING PROPLE TO LAND THEIR DREAM JOB
        </h2>
        <div className="mx-auto mt-10 max-w-4xl  grid grid-cols-2 items-center gap-x-10 gap-y-10 lg:grid-cols-4">
          <Image
            className="col-span-1 max-h-12 w-full object-contain"
            src={apple}
            alt="Tuple"
            width={158}
            height={48}
          />
          <Image
            className="col-span-1 max-h-12 w-full object-contain"
            src={google}
            alt="Tuple"
            width={158}
            height={48}
          />
          <Image
            className="col-span-1 max-h-12 w-full object-contain "
            src={meta}
            alt="Tuple"
            width={108}
            height={28}
          />
          <Image
            className="col-span-1 max-h-12 w-full object-contain"
            src={microsoft}
            alt="Tuple"
            width={158}
            height={48}
          />
          <Image
            className="col-span-1 max-h-12 w-full object-contain"
            src={netflix}
            alt="Tuple"
            width={158}
            height={48}
          />
          <Image
            className="col-span-1 max-h-12 w-full object-contain"
            src={amazon}
            alt="Tuple"
            width={158}
            height={48}
          />
          <Image
            className="col-span-1 max-h-12 w-full object-contain"
            src={adobe}
            alt="Tuple"
            width={158}
            height={48}
          />
          <Image
            className="col-span-1 max-h-12 w-full object-contain"
            src={notion}
            alt="Tuple"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 lg:col-span-4 max-h-12 w-full object-contain"
            src={wissen}
            alt="Tuple"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
