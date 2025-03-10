import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-[#F5F7FA] flex w-full flex-col overflow-hidden items-center justify-center px-[70px] py-[22px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1215px] items-center gap-5 flex-wrap justify-between max-md:max-w-full">
        <div className="self-stretch flex items-center gap-2 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/1f43ffdfd27e07697827c2dd20a8e13b24bbc36b967389f50e6ca565185d0745?placeholderIfAbsent=true"
            alt="Nexcent logo icon"
            className="aspect-[1.46] object-contain w-[35px] self-stretch shrink-0 my-auto"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/b3e032e9a0a1deb74a3719f292846278c263a88d25b0ef14bd72dd44ce917bc5?placeholderIfAbsent=true"
            alt="Nexcent logo text"
            className="aspect-[5.56] object-contain w-[111px] fill-[#263238] self-stretch shrink-0 my-auto"
          />
        </div>
        <nav className="self-stretch flex items-center gap-[40px_50px] overflow-hidden text-base text-[#18191F] font-normal whitespace-nowrap justify-center flex-wrap my-auto max-md:max-w-full">
          <Link href="/" className="self-stretch gap-2.5 font-medium my-auto">
            Home
          </Link>
          <Link href="#service" className="self-stretch gap-2.5 my-auto">
            Service
          </Link>
          <Link href="#feature" className="self-stretch gap-2.5 my-auto">
            Feature
          </Link>
          <Link href="#product" className="self-stretch gap-2.5 my-auto">
            Product
          </Link>
          <Link href="#testimonial" className="self-stretch gap-2.5 my-auto">
            Testimonial
          </Link>
          <Link href="#faq" className="self-stretch gap-2.5 my-auto">
            FAQ
          </Link>
        </nav>
        <div className="self-stretch flex gap-3.5 overflow-hidden text-sm font-medium text-center leading-none">
          <button className="self-stretch bg-[#F5F7FA] gap-2.5 text-[#4CAF4F] whitespace-nowrap px-5 py-2.5 rounded-md">
            Login
          </button>
          <button className="self-stretch bg-[#4CAF4F] gap-2.5 text-white px-5 py-2.5 rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}; 