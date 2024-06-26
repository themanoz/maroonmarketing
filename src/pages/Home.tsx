import { Button } from "@/components/ui/button";
import victory from "../assets/victory.svg";

export const Home = () => {
  return (
    <>
      <section className="w-full py-4 sm:py-12 md:py-24 lg:py-30 xl:py-10">
      <div className="container px-4 lg:px-20 md:px-32">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-14 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4 pt-3 lg:pl-10">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  We help you stand out in a crowded market.
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our team of experts is dedicated to creating marketing
                  strategies that drive results. Let us help you tell your
                  story.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-gradient-to-r from-red-900 to-red-900 w-full md:w-4/5 lg:w-auto">
                    {" "}
                    Book a Call
                  </Button>
                </div>
              </div>
            </div>
            <div className="pt-4 lg:pt-0 lg:pl-12">
              <img src={victory} width={550} height={550} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
