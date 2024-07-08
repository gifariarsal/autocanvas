import { footerLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <Image
          src="/logo.svg"
          alt="logo"
          width={200}
          height={42}
          className="object-contain"
        />
      </div>

      <div className="footer__links">
        {footerLinks.map(({ title, links }) => (
          <div key={title} className="footer__link">
            <h3 className="font-bold">{title}</h3>
            <div className="flex flex-col gap-5">
              {links.map(({ item, url }) => (
                <Link key={item} href={url} className="text-gray-500 hover:underline">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="footer__copyrights">
      <p>&copy;{new Date().getFullYear()} CarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500 hover:underline">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500 hover:underline">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
