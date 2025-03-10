import { BlogCard } from "./BlogCard";

export const BlogSection = () => {
  return (
    <section className="flex w-full max-w-[1440px] flex-col items-center mt-12 max-md:max-w-full max-md:mt-10">
      <div className="flex w-[1110px] max-w-full flex-col items-stretch text-center">
        <h2 className="text-[#4D4D4D] text-4xl font-semibold leading-none max-md:max-w-full">
          Caring is the new marketing
        </h2>
        <p className="text-[#717171] text-base font-normal leading-6 self-center w-[628px] mt-2 max-md:max-w-full">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="flex w-full items-center gap-6 text-xl font-semibold justify-between flex-wrap mt-4 pl-36 pr-[143px] max-md:px-5">
        <BlogCard
          image="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/79550188e0fb2fb4e46cce03c9b663d0a9e72f936f04c2157e7e9a5ee3f7335b?placeholderIfAbsent=true"
          title="Creating Streamlined Safeguarding Processes with OneRen"
        />
        <BlogCard
          image="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/19f56fc2b6e28b2f7c9f012bc60252c4b1b23662d358b66a3035fc36ece33f60?placeholderIfAbsent=true"
          title="What are your safeguarding responsibilities and how can you manage them?"
        />
        <BlogCard
          image="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/81460a09b313d5b00a286f9da7fbf4e9511ace2bab0d48bf7ae901dd4ce08137?placeholderIfAbsent=true"
          title="Revamping the Membership Model with Triathlon Australia"
        />
      </div>
    </section>
  );
}; 