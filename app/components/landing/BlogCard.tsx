interface BlogCardProps {
  image: string;
  title: string;
}

export const BlogCard = ({ image, title }: BlogCardProps) => {
  return (
    <div className="self-stretch flex min-w-60 flex-col items-center w-[368px] my-auto">
      <img
        src={image}
        alt={title}
        className="aspect-[1.29] object-contain w-[368px] max-w-full rounded-lg"
      />
      <div className="items-stretch shadow-[0px_8px_16px_0px_rgba(171,190,209,0.40)] bg-[#F5F7FA] flex w-[317px] max-w-full flex-col p-4 rounded-lg">
        <div className="text-[#717171] text-center leading-7 self-center">
          {title}
        </div>
        <div className="flex w-full items-center gap-2 text-[#4CAF4F] whitespace-nowrap leading-[1.4] justify-center mt-4 p-2">
          <div className="self-stretch my-auto">Readmore</div>
          <div className="rotate-[3.1415925661670165rad] self-stretch flex w-6 shrink-0 h-6 my-auto" />
        </div>
      </div>
    </div>
  );
}; 