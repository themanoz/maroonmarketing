// import email from "../assets/email.svg";
import victory from "../assets/victory.svg"

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
                We offer a range of services to help your brand stand out in a
                crowded market.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 pt-5">
              <div className="grid gap-1">
                <div className="flex justify-center items-center">
                  <img src={victory} alt="email" width={100} height={100} />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold">Email Marketing</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Reach your audience with targeted campaigns that drive
                    results.
                  </p>
                </div>
              </div>
              <div className="grid gap-1">
                <div className="flex justify-center items-center">
                  <img src={victory} alt="email" width={100} height={100} />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold">Paid Advertising</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Elevate customer engagement and foster a thriving community
                    through captivating content.
                  </p>
                </div>
              </div>
              <div className="grid gap-1">
                <div className="flex justify-center items-center">
                  <img src={victory} alt="email" width={100} height={100} />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold">Email Marketing</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Reach your audience with targeted campaigns that drive
                    results.
                  </p>
                </div>
              </div>
              <div className="grid gap-1">
                <div className="flex justify-center items-center">
                  <img src={victory} alt="email" width={100} height={100} />
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold">Email Marketing</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Reach your audience with targeted campaigns that drive
                    results.
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
