export default function Premium() {
  const features = [
    {
      title: "Budgeting Intervals",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d28fa344de921596a75e2c610f36450e9379fdee6371ee191f787fa340379bfe?",
    },
    {
      title: "Advanced Analytics",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3522776b2568496c6e5efe46183a4788db97ebf8c24a3dab4b1a72b0059463a0?",
    },
    {
      title: "Personalized Insights",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/70593ba7dc16eab7690e8cb678c060453c15fd151151a6f1dc9dab3b02ffe880?",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:items-center justify-center">
        <div className="w-full lg:w-1/2">
          <img
            loading="lazy"
            src="/iphone-13-pro-front.png"
            alt="iPhone 13 Pro"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <p className="text-rose-500 uppercase tracking-wider font-medium">
              features
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              UIFry Premium
            </h2>
          </div>
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  loading="lazy"
                  src={feature.icon}
                  alt={feature.title}
                  className="w-6 h-6"
                />
                <p className="font-semibold">{feature.title}</p>
              </div>
              <p className="text-gray-700">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
