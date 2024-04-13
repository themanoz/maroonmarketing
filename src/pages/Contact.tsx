import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Contact = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-48 min-h-full min-b" id="contact">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to elevate your brand?
            </h2>
            <p className="mx-auto max-w-[650px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Contact us to discuss how we can help you achieve your marketing
              goals.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2 flex-col md:flex-row items-center">
              <Input
                className="max-w-lg flex-1 w-full md:w-4/5 md:mt-2"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="bg-gradient-to-r from-red-900 to-red-900 w-full 
              md:full lg:w-auto mt-4 md:mt-2">
                {" "}
                Contact
              </Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch {" "}
              <a className="underline underline-offset-2" href="#">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
