import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="overflow-hidden wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]" data-wow-delay=".15s">
      <div className="container">

        <div className="-mx-4 flex justify-between flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px]">
                <span className="header-logo w-full text-3xl text-white font-semibold">
                  MeetWise
                </span>
              </Link>
              <p className="mb-8 max-w-[270px] text-base text-gray-7">
                Transforming meetings into productive, actionable insights with AI-powered technology.
              </p>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                About Us
              </h4>
              <ul>
                <li>
                  <a
                    href="/about"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Explore
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Pricing
              </h4>
              <ul>
                <li>
                  <a
                    href="/pricing"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Starter Plan
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Professional Plan
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Enterprise Plan
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Useful Links
              </h4>
              <ul>
                <li>
                  <a
                    href="/"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/signup"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Regiser
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <span className="absolute left-0 top-0 z-[-1] aspect-[95/82] w-full max-w-[570px]">
          <Image src="/images/footer/shape-1.svg" alt="shape" fill />
        </span>

        <span className="absolute bottom-0 right-0 z-[-1] aspect-[31/22] w-full max-w-[372px]">
          <Image src="/images/footer/shape-3.svg" alt="shape" fill />
        </span>

      </div>

    </footer>
  );
};

export default Footer;
