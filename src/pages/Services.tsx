import email from "../assets/email.svg";
import web from "../assets/web.svg";
import ads from "../assets/ads.svg";
import sales from "../assets/sales.svg"

export const Services = () => {
  return (
    <>
      <section className="pt-32" id="services">
        <div className="w-full py-12 md:py-12 lg:py-2">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We offer a full suite of marketing services to help your brand shine.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 pt-12">
              <div className="grid gap-1 pt-20">
                <div className="flex justify-center items-center">
                  <img src={email} alt="email" width={200} height={200} />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold">Email Marketing</h3>
                  <p className="text-sm text-gray-500  max-w-[600px]">
                  Engage your audience with targeted email campaigns that deliver results.
                  </p>
                </div>
              </div>
              <div className="grid gap-1 pt-20">
                <div className="flex justify-center items-center">
                  <img src={web} alt="web" width={200} height={200} />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold">Web Development</h3>
                  <p className="text-sm text-gray-500 max-w-[600px]">
                  Comprehensive Website Services to Ignite Your Online Success
                  </p>
                </div>
              </div>
              <div className="grid gap-1">
                <div className="flex justify-center items-center">
                  <img src={sales} alt="email" width={200} height={200} />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold">Sales Funnel</h3>
                  <p className="text-sm text-gray-500 max-w-[600px]">
                  {/* Empower your organization with skillful sales funnels that ignite growth and deliver results. */}
                  Drive results with targeted campaigns and sales funnels.
                  </p>
                </div>
              </div>
              <div className="grid gap-1">
                <div className="flex justify-center items-center">
                  <img src={ads} alt="email" width={200} height={100} />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold">Paid Advertising</h3>
                  <p className="text-sm text-gray-500  max-w-[600px]">
                    {/* Elevate customer engagement and foster a thriving community
                    through captivating content. */}
                    Customize campaigns to achieve your goals and effectively engage your target audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
