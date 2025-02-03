import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-6 divide-y divide-foreground md:divide-none">
      <div>
        <h2 className="text-center text-4xl font-bold text-primary pb-2">
          Affordable Wrecker Service, LLC
        </h2>
      </div>
      <div className="flex flex-col items-center text-center justify-evenly py-2 text-lg md:flex-row md:py-8 md:text-2xl">
        <div className="flex flex-col flex-col gap-3">
          <h3>2537 S. State Hwy 23</h3>
          <h3>Booneville, AR 72927</h3>
        </div>
        <div className="flex flex-col flex-col gap-3">
          <h3>1750 Rice Street</h3>
          <h3>Waldron, AR 72958</h3>
        </div>
      </div>
      <div className="flex flex-col flex-col items-center text-center gap-3 text-lg pt-2 md:text-2xl">
        <a href="tel:+14796751865">479-675-1865</a>
        <a
          className="underline"
          href="mailto:affordablewreckerservice@yahoo.com"
        >
          affordablewreckerservice@yahoo.com
        </a>
        <a href="https://www.facebook.com/people/Affordable-Wrecker-Service-LLC">
          <Image
            className="border rounded-full bg-foreground"
            src="/icons8-facebook.svg"
            alt="Facebook"
            width={50}
            height={50}
          />
        </a>
      </div>
    </footer>
  );
}
