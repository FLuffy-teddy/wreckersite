import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-background text-foreground">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-36 sm:py-48 lg:py-56">
          <div className="text-center rounded-lg py-8 px-8 sm:px-8 lg:px-16 backdrop-blur-sm bg-black/20">
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              Wrecker Services Any Time
            </h1>
            <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
              <a
                href="tel:+14796751865"
                className="rounded-md bg-button px-12 py-2.5 text-xl font-semibold text-foreground"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <Image
            src="/wrecker_home_bg.webp"
            alt="Background Image"
            className="absolute inset-0 object-cover object-center md:object-right"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
