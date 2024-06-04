const ContactBlock = ({ imgSrc, text, altText }) => (
  <div className="flex gap-2 mt-4 capitalize">
    <img
      loading="lazy"
      src={imgSrc}
      alt={altText}
      className="shrink-0 w-6 aspect-square fill-black fill-opacity-0"
    />
    <div className="flex-auto my-auto">{text}</div>
  </div>
);

const LinkBlock = ({ title, links }) => (
  <section className="flex flex-col mt-2.5 text-black capitalize">
    <h2 className="text-3xl leading-10">{title}</h2>
    {links.map((link, index) => (
      <p className={`mt-${index === 0 ? "4" : "3"}`} key={index}>
        {link}
      </p>
    ))}
  </section>
);

function MyComponent() {
  return (
    <div className="flex flex-col text-base font-medium leading-7 px-10">
      <div className="flex gap-5 justify-between items-start px-5 w-full max-md:flex-wrap max-md:max-w-full">
        <section className="flex flex-col text-black">
          <div className="flex gap-0.5 text-xs whitespace-nowrap text-neutral-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a4d2a1ea1dc096d24804e10b7d7d58275afc15af7fb227542141317025732b5?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&"
              alt="Company Logo"
              className="shrink-0 max-w-full aspect-[3.13] w-[106px]"
            />
            <div className="my-auto">TM</div>
          </div>
          <ContactBlock
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e02ad1dc55e79fc7d485df8603dfb68e311a4aa0b150d3e3dd243a17bf67789c?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&"
            text="help@frybix.com"
            altText="Email Icon"
          />
          <ContactBlock
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f506da62bbbddd662bfed18e00c1374f36e0f691f2cfdb728c9bc2242ccc72f1?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&"
            text="+1 234 456 678 89"
            altText="Phone Icon"
          />
        </section>

        <LinkBlock
          title="Links"
          links={["home", "about us", "bookings", "blog"]}
        />
        <LinkBlock
          title="Legal"
          links={["terms of use", "privacy policy", "cookie policy"]}
        />
        <LinkBlock
          title="Product"
          links={["take tour", "live chat", "reviews"]}
        />

        <form className="flex flex-col mt-2.5">
          <label className="text-3xl leading-10 text-black capitalize">
            Newsletter
          </label>
          <p className="mt-9 text-black capitalize">Stay up to date</p>
          <div className="flex gap-5 justify-between mt-8 max-md:pr-5">
            <label htmlFor="emailInput" className="sr-only">
              Your email
            </label>
            <input
              type="email"
              id="emailInput"
              placeholder="Your email"
              aria-label="Your email"
              className="my-auto text-zinc-500"
            />
            <button
              type="submit"
              className="justify-center px-10 py-6 text-white capitalize whitespace-nowrap bg-black rounded max-md:px-5"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <footer className="flex justify-center items-center px-16 py-11 mt-24 w-full text-black capitalize max-md:px-5 max-md:mt-10 max-md:max-w-full">
        Copyright 2022 uifry.com all rights reserved
      </footer>
    </div>
  );
}

export default MyComponent;
