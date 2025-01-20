import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "24/7 Roadside Assistance",
    description:
      "We offer 24/7 towing services to ensure you're never left stranded. Whether it's day or night, our team is ready to assist you promptly and professionally.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Automobile wrecking services",
    description:
      "We pride ourselves on providing fast, friendly, and efficient towing services to get you back on the road as soon as possible.",
    icon: LockClosedIcon,
  },
  {
    name: "Help with vehicle unlocking ",
    description:
      'With a commitment to "Do What is Right," we provide reliable and efficient towing services around the clock.',
    icon: ArrowPathIcon,
  },
  {
    name: "Towing services",
    description:
      "Our professional drivers are trained to handle every situation with care and precision, ensuring your vehicle is towed securely and without damage.",
    icon: FingerPrintIcon,
  },
  {
    name: "Heavy duty towing services",
    description:
      "Our tow trucks is equipped to handle almost any towing job, big or small. From cars and motorcycles to trucks, we have the right equipment and expertise to transport your vehicle safely.",
    icon: FingerPrintIcon,
  },
];

export default function Featured() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Deploy faster
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
