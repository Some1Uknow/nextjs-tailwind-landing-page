import * as React from "react";

function CustomizableFeature({ imgSrc, imgAlt, title, description }) {
  return (
    <div className="flex flex-col self-stretch px-5 my-auto text-black capitalize max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-4 self-start text-3xl font-semibold leading-7">
        <img loading="lazy" src={imgSrc} alt={imgAlt} className="shrink-0 w-12 aspect-square" />
        <div className="flex-auto my-auto">{title}</div>
      </div>
      <div className="mt-8 text-lg font-medium leading-7 max-md:max-w-full">
        {description}
      </div>
    </div>
  );
}

function MyComponent() {
  return (
    <div>
      <section className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div class="w-full lg:w-1/2"><img loading="lazy" src="/iphone-13-pro-front.png" alt="iPhone 13 Pro" class="w-full h-auto max-w-md mx-auto"/></div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <CustomizableFeature
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/25704caef77206d03beb43dd5f29e6e1c8476b6abd788ecd662608917b9e60aa?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&"
            imgAlt="Icon for fully customizable feature"
            title="fully customizable"
            description="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
          />
        </div>
      </section>
    </div>
  );
}

export default MyComponent;