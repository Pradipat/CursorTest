export const Footer = () => {
  return (
    <footer className="bg-[#263238] flex gap-[40px_125px] flex-wrap px-[165px] py-16 max-md:max-w-full max-md:px-5">
      <div className="flex min-w-60 flex-col overflow-hidden w-[350px]">
        <div className="flex items-center gap-2.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/d55a773763833d64462c8a3dcdc6b7703a49c67b25d55c034282e91f9756eccf?placeholderIfAbsent=true"
            alt="Nexcent logo"
            className="aspect-[1.43] object-contain w-[43px] self-stretch shrink-0 my-auto"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/72c42506fb918aeeea1ef906eee0d51fd32012956b9a18b75b8f535c82dd29de?placeholderIfAbsent=true"
            alt="Nexcent"
            className="aspect-[5.32] object-contain w-[138px] fill-white self-stretch shrink-0 my-auto"
          />
        </div>
        <div className="self-stretch flex w-full flex-col overflow-hidden items-center text-sm text-[#F5F7FA] font-normal leading-none mt-10">
          <div>Copyright © 2020 Nexcent ltd.</div>
          <div className="mt-2">All rights reserved</div>
        </div>
        <div className="flex gap-4 overflow-hidden mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/98011fa7b6954b38308ac43b77bed6671caff34918de459957ce80f3efc56180?placeholderIfAbsent=true"
            alt="Social media"
            className="aspect-[1] object-contain w-8 shrink-0"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/37c6c258905673ae11392618a6790b21163a2915c34073a534cb62ad5074a0c5?placeholderIfAbsent=true"
            alt="Social media"
            className="aspect-[1] object-contain w-8 shrink-0"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/918f0713b545abd86ca478c16ba5246d9f6d11b1c6a754deab189831102a7a6e?placeholderIfAbsent=true"
            alt="Social media"
            className="aspect-[1] object-contain w-8 shrink-0"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/b7b22d30d1243051bb008c93f600436e6fa895ad14f6cd9d77c46259d2d84d3a?placeholderIfAbsent=true"
            alt="Social media"
            className="aspect-[1] object-contain w-8 shrink-0"
          />
        </div>
      </div>
      <div className="flex min-w-60 gap-[30px] overflow-hidden flex-wrap max-md:max-w-full">
        <div className="overflow-hidden w-40">
          <h3 className="text-white text-xl font-semibold leading-[1.4]">
            Company
          </h3>
          <div className="max-w-full w-40 overflow-hidden text-sm text-[#F5F7FA] font-normal leading-none mt-6">
            <div>About us</div>
            <div className="mt-3">Blog</div>
            <div className="mt-3">Contact us</div>
            <div className="mt-3">Pricing</div>
            <div className="mt-3">Testimonials</div>
          </div>
        </div>
        <div className="overflow-hidden w-40">
          <h3 className="text-white text-xl font-semibold leading-[1.4]">
            Support
          </h3>
          <div className="max-w-full w-40 overflow-hidden text-sm text-[#F5F7FA] font-normal leading-none mt-6">
            <div>Help center</div>
            <div className="mt-3">Terms of service</div>
            <div className="mt-3">Legal</div>
            <div className="mt-3">Privacy policy</div>
            <div className="mt-3">Status</div>
          </div>
        </div>
        <div className="min-w-60 overflow-hidden w-[255px]">
          <h3 className="text-white text-xl font-semibold leading-[1.4]">
            Stay up to date
          </h3>
          <form className="w-full max-w-[255px] text-sm text-[#D9DBE1] font-normal mt-6 rounded-[0px_0px_0px_0px]">
            <div className="bg-[rgba(255,255,255,0.2)] flex items-stretch gap-5 justify-between px-3 py-2.5 rounded-lg">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent outline-none w-full"
                required
              />
              <button type="submit">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/11878b3ad0fd4cabaf3c7b3e8154f7bc/724ca793173f9f71075b2b87b2508e28939fb977f18ccdefa3e308c9972ddcf6?placeholderIfAbsent=true"
                  alt="Submit"
                  className="aspect-[1] object-contain w-[18px] shrink-0"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}; 