const FAQ = () => {
  const faqItems = [
    {
      bgColor: "#ff5555",
      textColor: "#ffffff",
      textOpacity: 1,
      shadowColor: "rgba(161, 161, 161, 0.10)",
      quote:
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      title: "The Best Financial Accounting App Ever!",
    },
    {
      bgColor: "#ffffff",
      textColor: "#000000",
      textOpacity: 0.5,
      shadowColor: "rgba(161, 161, 161, 0.10)",
      quote:
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      title: "The Best Financial Accounting App Ever!",
    },
    {
      bgColor: "#ffffff",
      textColor: "#000000",
      textOpacity: 0.5,
      shadowColor: "rgba(161, 161, 161, 0.10)",
      quote:
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      title: "The Best Financial Accounting App Ever!",
    },
    {
      bgColor: "#ff5555",
      textColor: "#ffffff",
      textOpacity: 1,
      shadowColor: "rgba(161, 161, 161, 0.10)",
      quote:
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      title: "The Best Financial Accounting App Ever!",
    },
    {
      bgColor: "#ff5555",
      textColor: "#ffffff",
      textOpacity: 1,
      shadowColor: "rgba(161, 161, 161, 0.10)",
      quote:
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      title: "The Best Financial Accounting App Ever!",
    },
    {
      bgColor: "#ffffff",
      textColor: "#000000",
      textOpacity: 0.5,
      shadowColor: "rgba(161, 161, 161, 0.10)",
      quote:
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
      title: "The Best Financial Accounting App Ever!",
    },
  ];

  return (
    <div className="relative p-20 font-Montserrat">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-black">
          Frequently asked questions
        </h1>
        <h2
          className="text-lg font-medium font-Montserrat uppercase mt-2"
          style={{ letterSpacing: "0.16em" }}
        >
          faq
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="p-8  font-Montserrat rounded-lg shadow-lg"
            style={{
              backgroundColor: item.bgColor,
              boxShadow: `-13.01px 13.01px 104.09px 0px ${item.shadowColor}`,
            }}
          >
            <h3
              className="text-2xl  font-Montserrat font-semibold mb-4"
              style={{
                color: item.textColor,
                opacity: item.textOpacity,
              }}
            >
              {item.title}
            </h3>
            <p
              className="text-lg font-Montserrat"
              style={{
                color: item.textColor,
              }}
            >
              {item.quote}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
