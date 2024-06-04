import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4">
        <div className="max-w-xl w-full">
          <div className="md:hidden">
            <MobileMenu />
          </div>
          <main className="mt-10 lg:mt-20">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
                <span className="block mb-2">Make The Best</span>
                <span className="block">
                  Financial Decisions
                </span>
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Aliquipiscing Sociis Arcu Lorem
                Porttitor.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="w-full  sm:w-auto px-6 py-3 text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 text-center"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="w-full  sm:w-auto px-6 py-3 text-base font-medium rounded-md text-black bg-indigo-100 hover:bg-indigo-200 text-center"
                >
                  Watch Video
                </a>
              </div>
              <figure className="mt-12 mx-auto lg:mx-0 w-full max-w-md aspect-[1.64]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b08a4913fde89e4de601ed6322d68e3179afec6e036af99f77702bd7dc5589e2?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&"
                  alt="Financial Graph"
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>
            </div>
          </main>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Image
          height={800}
          width={800}
          alt="iPhone"
          className="rounded-2xl w-full max-w-lg"
          src="/iphone-1.png"
        />
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div className="px-5 pt-4 flex items-center justify-between">
        <img alt="iphones" className="h-8 w-auto" src="/iphone-1.png" />
        <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Close main menu</span>
          <XIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="px-2 pt-2 pb-3 space-y-1">
        {["Home", "About Us", "Pricing", "Features"].map((item) => (
          <a
            key={item}
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            {item}
          </a>
        ))}
        <a
          href="#"
          className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:text-indigo-500"
        >
          Download
        </a>
      </div>
    </div>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}