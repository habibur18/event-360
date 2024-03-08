import Marquee from "react-fast-marquee";
export default function PartnerMarquee() {
  const data = [
    { id: 1, src: "https://i.postimg.cc/RFd0rPsW/wpengine.png" },
    { id: 2, src: "https://i.postimg.cc/L8J2C4Fg/acquia.png" },
    { id: 3, src: "https://i.postimg.cc/v8SQWxpw/aws.png" },
    { id: 4, src: "https://i.postimg.cc/7Yky11mc/albion.png" },
    { id: 5, src: "https://i.postimg.cc/ncc3tCzr/ict.png" },
    { id: 6, src: "https://i.postimg.cc/RFd0rPsW/wpengine.png" },
    { id: 7, src: "https://i.postimg.cc/L8J2C4Fg/acquia.png" },
    { id: 8, src: "https://i.postimg.cc/v8SQWxpw/aws.png" },
    { id: 9, src: "https://i.postimg.cc/7Yky11mc/albion.png" },
    { id: 10, src: "https://i.postimg.cc/ncc3tCzr/ict.png" },
  ];

  return (
    <section className="overflow-hidden pb-[60px]">
      <div className="relative  2xl:px-0 mx-auto">
        <h1 className="text-4xl font-bold text-center my-[44px]">Our Partners</h1>
        <article>
          <Marquee gradient={false} speed={50} play={true} pauseOnHover={true} direction="left" gradientWidth={200}>
            {data.map((item) => (
              <figure key={item.id} className="px-10 w-full">
                <img className="w-full h-[70px]" src={item.src} alt="" />
              </figure>
            ))}
          </Marquee>
        </article>
      </div>
    </section>
  );
}
