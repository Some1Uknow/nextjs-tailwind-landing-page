export default function Testimonial() {
  return (
    <div className="flex flex-col items-center px-5 mt-10">
      <div className="text-lg font-medium leading-7 text-center text-black uppercase tracking-[2.88px]">
        testimonial
      </div>
      <div className="mt-5 text-5xl font-bold leading-10 text-center text-black capitalize w-[455px] max-md:text-4xl max-md:leading-10">
        what our users say about us?
      </div>
      <div className="self-stretch w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f624580a765503cc309003513cf77b88aba67cc4ee373c8f2b936bde27c92f2?"
              className="w-full aspect-square max-md:mt-8 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-lg font-semibold leading-7 text-black capitalize max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl max-md:max-w-full">
                the best financial accounting app ever!
              </div>
              <div className="mt-8 font-medium max-md:max-w-full">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/743521430564210cd41ffea4f8471459c594aa0241aeba1ddfb4bc82242f3ed3?"
                className="mt-7 w-48 max-w-full aspect-[4.76]"
              />
              <div className="mt-8 leading-[156%] max-md:max-w-full">
                nick jonas
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
