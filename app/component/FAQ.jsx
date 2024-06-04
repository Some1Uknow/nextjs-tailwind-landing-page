
function Testimonial({ textColor, title, content }) {
  return (
    <article className={`flex flex-col grow leading-7 ${textColor} capitalize max-md:mt-10 max-md:max-w-full`}>
      <h3 className="text-3xl font-semibold max-md:max-w-full">{title}</h3>
      <p className="mt-4 text-lg font-medium text-justify max-md:max-w-full">{content}</p>
    </article>
  );
}

function MyComponent() {
  const faqList = [
    {
      textColor: "text-white",
      title: "the best financial accounting app ever!",
      content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      textColor: "text-black",
      title: "the best financial accounting app ever!",
      content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      textColor: "text-black",
      title: "the best financial accounting app ever!",
      content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      textColor: "text-white",
      title: "the best financial accounting app ever!",
      content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      textColor: "text-white",
      title: "the best financial accounting app ever!",
      content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
    {
      textColor: "text-black",
      title: "the best financial accounting app ever!",
      content: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    },
  ];

  return (
    <section className="flex flex-col px-5">
      <header className="w-full text-lg font-medium leading-7 text-rose-500 uppercase tracking-[2.88px] max-md:max-w-full">faq</header>
      <h2 className="mt-4 w-full text-5xl font-bold leading-10 text-black capitalize max-md:max-w-full max-md:text-4xl max-md:leading-10">Frequently asked questions</h2>
      
      <section className="flex flex-col pl-8 mt-20 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        {faqList.slice(0, 2).map(({ textColor, title, content }, index) => (
          <div key={index} className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <Testimonial textColor={textColor} title={title} content={content} />
            </div>
          </div>
        ))}
      </section>

      <section className="mt-24 max-md:mt-10 max-md:max-w-full">
        {faqList.slice(2, 4).map(({ textColor, title, content }, index) => (
          <div key={index} className="flex gap-5 max-md:flex-col max-md:gap-0">
            <Testimonial textColor={textColor} title={title} content={content} />
          </div>
        ))}
      </section>

      <section className="mt-24 max-md:mt-10 max-md:max-w-full">
        {faqList.slice(4, 6).map(({ textColor, title, content }, index) => (
          <div key={index} className="flex gap-5 max-md:flex-col max-md:gap-0">
            <Testimonial textColor={textColor} title={title} content={content} />
          </div>
        ))}
      </section>
    </section>
  );
}

export default MyComponent;