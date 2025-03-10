import { StatItem } from "./StatItem";

export const Achievements = () => {
  return (
    <section className="justify-between items-center bg-[#F5F7FA] flex max-w-full w-[1440px] gap-[40px_70px] flex-wrap mt-12 pl-36 pr-[143px] py-16 max-md:mt-10 max-md:px-5">
      <div className="self-stretch min-w-60 overflow-hidden w-[540px] my-auto max-md:max-w-full">
        <h2 className="w-[408px] max-w-full overflow-hidden text-4xl text-[#4d4d4d] font-semibold leading-[44px]">
          Helping a local{" "}
          <span className="text-[#4CAF4F]">business reinvent itself</span>
        </h2>
        <p className="text-[#18191F] text-base font-normal mt-2 max-md:max-w-full">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="self-stretch flex min-w-60 flex-col overflow-hidden items-center my-auto max-md:max-w-full">
        <div className="flex items-center gap-[30px] overflow-hidden whitespace-nowrap flex-wrap max-md:max-w-full">
          <StatItem
            icon="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/fa8c7e7ac6d05a684c8c89629c9774fa24658d7b3a4df86fac4f48921d52766a?placeholderIfAbsent=true"
            number="2,245,341"
            label="Members"
          />
          <StatItem
            icon="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/4b081c75d377203c89d017354ec51d8df2227b7ded6a709df5dd7a2c36bc88b7?placeholderIfAbsent=true"
            number="46,328"
            label="Clubs"
          />
        </div>
        <div className="flex items-center gap-[30px] overflow-hidden flex-wrap mt-10 max-md:max-w-full">
          <StatItem
            icon="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/1b4ed6f6101ec71213f980ad4aa121f8c3d3097e5ae83780579749854a2b13c1?placeholderIfAbsent=true"
            number="828,867"
            label="Event Bookings"
          />
          <StatItem
            icon="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/722fbd87c1b2ca1f1b9dfcadf5d5e4bcfb0265069581864252df444bb8a7f7d8?placeholderIfAbsent=true"
            number="1,926,436"
            label="Payments"
          />
        </div>
      </div>
    </section>
  );
}; 