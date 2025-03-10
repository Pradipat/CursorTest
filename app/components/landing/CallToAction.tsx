export const CallToAction = () => {
  return (
    <section className="items-center bg-[#F5F7FA] flex w-full flex-col text-center py-8 max-md:max-w-full">
      <h2 className="text-[#263238] text-[64px] font-semibold leading-[76px] w-[887px] max-md:max-w-full max-md:text-[40px] max-md:leading-[52px]">
        Pellentesque suscipit fringilla libero eu.
      </h2>
      <button className="justify-center items-center rounded bg-[#4CAF4F] flex gap-2 text-base text-white font-medium mt-8 px-8 py-3.5 max-md:px-5">
        <span className="self-stretch my-auto">Get a Demo</span>
        <div className="rotate-[3.1415925661670165rad] self-stretch flex w-4 shrink-0 h-4 my-auto" />
      </button>
    </section>
  );
}; 