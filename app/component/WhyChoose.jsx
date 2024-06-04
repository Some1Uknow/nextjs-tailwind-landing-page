function NotificationItem({ src, text }) {
  return (
    <div className="flex gap-4 self-start mt-8 text-3xl font-semibold">
      <img
        loading="lazy"
        src={src}
        alt=""
        className="shrink-0 w-12 aspect-square"
      />
      <div className="flex-auto my-auto">{text}</div>
    </div>
  );
}
export default function MyComponent() {
  const notificationItems = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b77fcba72221c052587c2d858c174a36b319e95184592c88db6b475cfa54854d?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&",
      text: "clever notifications",
    },
  ];
  return (
    <div>
      <section className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:items-center justify-center">
        <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <header className="flex flex-col self-stretch px-5 my-auto text-lg font-medium leading-5 text-black capitalize max-md:mt-10 max-md:max-w-full">
            <h1 className="text-rose-500 uppercase leading-[156%] tracking-[2.88px] max-md:max-w-full">
              advatnages
            </h1>
            <h2 className="mt-5 text-5xl font-bold max-md:max-w-full max-md:text-4xl">
              why choose Uifry?
            </h2>
            {notificationItems.map((item, index) => (
              <NotificationItem key={index} src={item.src} text={item.text} />
            ))}
            <p className="mt-8 leading-7 max-md:max-w-full">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </header>
        </article>

        <div class="w-full lg:w-1/3">
          <img
            loading="lazy"
            src="/iphone-13-pro-front-1.png"
            alt="iPhone 13 Pro"
            class="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
