function Hero2() {
  return (
    <div className="py">
      <div className="flex gap-5 max-md:flex-wrap">
        <div className="flex gap-0.5 px-5 my-auto text-xs font-extrabold text-black whitespace-nowrap">
          <img
            loading="lazy"
            alt="pic"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14479c4c45de02b03703187c82bb3fca68215d492c9d007134f6f70f78498ead?"
            className="shrink-0 max-w-full aspect-[3.13] w-[106px]"
          />
          <div className="my-auto">TM</div>
        </div>
        <div className="flex flex-auto gap-5 justify-between font-medium capitalize max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-center px-5 my-auto text-xl leading-7 text-black">
            <div className="font-bold text-rose-500">home</div>
            <div>about us</div>
            <div>pricing</div>
            <div>features</div>
          </div>
          <div className="justify-center px-12 py-6 text-lg leading-7 text-white whitespace-nowrap bg-black rounded max-md:px-5">
            download
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
