import { FeatureCard } from "./FeatureCard";

export const Community = () => {
  return (
    <section className="w-full text-center mt-10 max-md:max-w-full">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <h2 className="text-[#4D4D4D] text-4xl font-semibold leading-[44px] self-center w-[542px] max-md:max-w-full">
          Manage your entire community in a single system
        </h2>
        <p className="text-[#717171] text-base font-normal mt-2 max-md:max-w-full">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap mt-4 px-36 max-md:max-w-full max-md:px-5">
        <FeatureCard
          icon="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/ee200b345a09767d1a7b0bc873133cdf68b6fe3ac4cc5b7f0fae00f9ce7dbc94?placeholderIfAbsent=true"
          title="Membership Organisations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <FeatureCard
          icon="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/aa334ae778df9c62ef6e21d016b0c1a39f17e11f7eec571f16da72732387fadc?placeholderIfAbsent=true"
          title="National Associations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <FeatureCard
          icon="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/b769e9ec4749cd6f9c3871f67d842624240abbd336e919ff19ec22e2392039b6?placeholderIfAbsent=true"
          title="Clubs And Groups"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
      </div>
    </section>
  );
}; 