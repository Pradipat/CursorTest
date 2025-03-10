interface StatItemProps {
  icon: string;
  number: string;
  label: string;
}

export const StatItem = ({ icon, number, label }: StatItemProps) => {
  return (
    <div className="self-stretch flex min-w-60 items-center gap-4 my-auto">
      <img
        src={icon}
        alt={`${label} icon`}
        className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto"
      />
      <div className="self-stretch overflow-hidden w-[191px] my-auto">
        <div className="text-[#4D4D4D] text-[28px] font-bold leading-none">
          {number}
        </div>
        <div className="text-[#717171] text-base font-normal">{label}</div>
      </div>
    </div>
  );
}; 