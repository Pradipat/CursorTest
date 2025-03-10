interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="items-center shadow-[0px_2px_4px_0px_rgba(171,190,209,0.20)] bg-white self-stretch flex min-w-60 flex-col w-[299px] my-auto px-4 py-6 rounded-lg">
      <div className="flex max-w-full w-[267px] flex-col items-center text-[28px] text-[#4D4D4D] font-bold leading-9">
        <img
          src={icon}
          alt={`${title} icon`}
          className="aspect-[1.16] object-contain w-[65px]"
        />
        <h3 className="mt-4">{title}</h3>
      </div>
      <p className="w-[251px] max-w-full gap-2 text-sm text-[#717171] font-normal leading-5 mt-2">
        {description}
      </p>
    </div>
  );
}; 