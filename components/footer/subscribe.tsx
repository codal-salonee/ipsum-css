import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Subscribe() {
  return (
    <div className="py-10 md:flex md:justify-between md:py-14">
      <div className="mb-4 md:mb-0">
        <p className="text-lg">Join our newsletter</p>
        <p className="text-muted-foreground">
          We&apos;ll send you a nice letter once per week. No spam.
        </p>
      </div>
      <form className="mt-2 md:mt-0 md:flex md:w-[422px] md:items-center">
        <Input
          className="h-12 w-full bg-white text-black"
          placeholder="Email address*"
        />
        <Button
          className="mt-2 h-12 w-full md:mt-0 md:ml-2 md:w-auto"
          type="submit"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
}
