import {
  BoltIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  CogIcon,
  CreditCardIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Accounting/Finance",
    description: "100 open position",
    icon: CreditCardIcon,
  },
  {
    name: "Programmer",
    description: "200 open position",
    icon: CodeBracketIcon,
  },
  {
    name: "Production/Operation",
    description: "200 open position",
    icon: CogIcon,
  },
  {
    name: "Educator/Trainer",
    description: "200 open position",
    icon: AcademicCapIcon,
  },
  {
    name: "Engineering",
    description: "200 open position",
    icon: BoltIcon,
  },
  {
    name: "Consultant/Law",
    description: "200 open position",
    icon: BuildingOfficeIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-700">
            Jobs Category
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Your Dream Job is Here
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            There are several jobs Category that are open, you can choose below
          </p>
        </div>

        <div className="mt-10 ml-20">
          <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-10 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
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
