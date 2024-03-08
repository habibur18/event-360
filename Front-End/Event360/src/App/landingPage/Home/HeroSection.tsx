export default function HeroSection() {
  return (
    <section className="max-w-[1095px] custom-padding text-center my-[62px]">
      <div className="space-y-2">
        <h1 className="text-6xl py-3 font-extrabold">Brand New event Packages</h1>
        <h2 className="text-3xl py-2 md:text-6xl font-extrabold">
          <span style={{ backgroundClip: "text" }} className="bg-gradient-to-r text-transparent from-yellow-400 to-purple-600">
            For Winter
          </span>
        </h2>

        <p className="text-[18px] pb-5 text-[#000000]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. <br /> Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>
      <div>
        <figure>
          <img src="https://i.postimg.cc/GtPSxktV/hero.png" alt="" />
        </figure>
      </div>
    </section>
  );
}
