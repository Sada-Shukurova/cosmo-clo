const HeroSmall = ({ heroTitle }) => {
  return (
    <section className="h-[700px] bg-hero bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            {heroTitle}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSmall;
