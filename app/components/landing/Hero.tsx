export const Hero = () => {
  return (
    <section className="items-center bg-[#F5F7FA] flex w-full gap-[40px_104px] flex-wrap px-36 py-24 max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h1 className="text-[#4d4d4d] text-[64px] font-semibold leading-[76px] max-md:max-w-full max-md:text-[40px] max-md:leading-[52px]">
            Lessons and insights{" "}
            <span className="text-[#4CAF4F]">from 8 years</span>
          </h1>
          <p className="text-[#717171] text-base font-normal mt-4 max-md:max-w-full">
            Where to grow your business as a photographer: site or social media?
          </p>
        </div>
        <button className="rounded bg-[#4CAF4F] gap-2.5 text-base text-white font-medium whitespace-nowrap text-center mt-8 px-8 py-3.5 max-md:px-5 w-fit">
          Register
        </button>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/a24db6d9178fe8a8e1851864ecadceca383f3b5f50328847c5cc3b68e2914258?placeholderIfAbsent=true"
        alt="Hero illustration"
        className="aspect-[0.96] object-contain w-[391px] self-stretch min-w-60 my-auto"
      />
    </section>
  );
}; 