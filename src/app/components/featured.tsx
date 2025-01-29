import {
  TruckIcon,
  WrenchScrewdriverIcon,
  KeyIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "24/7 Roadside Assistance",
    description:
      "We offer 24/7 towing services to ensure you're never left stranded. Whether it's day or night, our team is ready to assist you promptly and professionally.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Automobile wrecking services",
    description:
      "We pride ourselves on providing fast, friendly, and efficient towing services to get you back on the road as soon as possible.",
    icon: ClockIcon,
  },
  {
    name: "Help with vehicle unlocking ",
    description:
      'With a commitment to "Do What is Right," we provide reliable and efficient towing services around the clock.',
    icon: KeyIcon,
  },
  {
    name: "Towing services",
    description:
      "Our professional drivers are trained to handle every situation with care and precision, ensuring your vehicle is towed securely and without damage.",
    icon: ExclamationTriangleIcon,
  },
  {
    name: "Heavy duty towing services",
    description:
      "Our tow trucks is equipped to handle almost any towing job, big or small. From cars and motorcycles to trucks, we have the right equipment and expertise to transport your vehicle safely.",
    icon: TruckIcon,
  },
];

export default function Featured() {
  return (
    <div className="bg-background text-foreground py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-semibold text-primary">Towing you can rely on</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl lg:text-balance">
            When reliability is important
          </p>
          <p className="mt-6 text-lg/8 ">
            Don&apos;t let a breakdown or accident ruin your day. Our team of
            experts can help you get back on the road quickly and safely. We
            offer a range of towing services to meet your needs, from 24/7
            roadside assistance to heavy-duty towing. When you need help, you
            can count on us to be there for you.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className=" font-semibold">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 ">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
