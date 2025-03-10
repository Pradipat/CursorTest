interface FeatureSectionProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  imageLeft?: boolean;
}

export const FeatureSection = ({
  image,
  title,
  description,
  buttonText,
  imageLeft = true,
}: FeatureSectionProps) => {
  return (
    <section className="overflow-x-auto flex w-full max-w-[1440px] mt-12 max-md:max-w-full max-md:mt-10">
      <div className="flex w-[1440px] items-center gap-[40px_49px] justify-between flex-wrap px-36 max-md:max-w-full max-md:px-5">
        {imageLeft ? (
          <>
            <img
              src={image}
              alt={title}
              className="aspect-[1.02] object-contain w-[442px] self-stretch min-w-60 my-auto max-md:max-w-full"
            />
            <div className="self-stretch flex min-w-60 flex-col w-[661px] my-auto max-md:max-w-full">
              <div className="w-[601px] max-w-full">
                <h2 className="text-[#4D4D4D] text-4xl font-semibold leading-[44px] max-md:max-w-full">
                  {title}
                </h2>
                <p className="text-[#717171] text-sm font-normal leading-5 mt-4 max-md:max-w-full">
                  {description}
                </p>
              </div>
              <button className="self-stretch rounded bg-[#4CAF4F] gap-2.5 text-base text-white font-medium text-center mt-8 px-8 py-3.5 max-md:px-5 w-fit">
                {buttonText}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="self-stretch flex min-w-60 flex-col w-[661px] my-auto max-md:max-w-full">
              <div className="w-[601px] max-w-full">
                <h2 className="text-[#4D4D4D] text-4xl font-semibold leading-[44px] max-md:max-w-full">
                  {title}
                </h2>
                <p className="text-[#717171] text-sm font-normal leading-5 mt-4 max-md:max-w-full">
                  {description}
                </p>
              </div>
              <button className="self-stretch rounded bg-[#4CAF4F] gap-2.5 text-base text-white font-medium text-center mt-8 px-8 py-3.5 max-md:px-5 w-fit">
                {buttonText}
              </button>
            </div>
            <img
              src={image}
              alt={title}
              className="aspect-[1.02] object-contain w-[442px] self-stretch min-w-60 my-auto max-md:max-w-full"
            />
          </>
        )}
      </div>
    </section>
  );
}; 