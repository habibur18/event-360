import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { useEffect, useState } from "react";
export default function Reviews() {
  const [sliderPerView, setSliderPerView] = useState({ sliderPerView: 3, centeredSlides: true });
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1536) {
        setSliderPerView({ sliderPerView: 4, centeredSlides: true });
      } else if (windowWidth >= 1280) {
        setSliderPerView({ sliderPerView: 3, centeredSlides: false });
      } else if (windowWidth >= 868) {
        setSliderPerView({ sliderPerView: 3, centeredSlides: false });
      } else if (windowWidth >= 630) {
        setSliderPerView({ sliderPerView: 2, centeredSlides: false });
      } else {
        setSliderPerView({ sliderPerView: 1, centeredSlides: false });
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="bg-gradient-to-r from-purple-700 to-purple-900 shadow-md h-[620px] mb-16">
      <main className="ml-[40px] lg:ml-[80px]">
        <div className="my-[80px] pt-[80px]">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">What eveyone says</h1>
        </div>
        {/* <article className="p-[32px] bg-[#A1B5CC]/[30%] rounded-lg md:max-w-[412px]">
          <div className="text-[#FFF]">
            <p>Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
            <div className="flex items-center gap-4 mt-[32px]">
              <figure>
                <img src="https://i.postimg.cc/9fLp3rgz/1.png" alt="" />
              </figure>
              <div>
                <h4 className="text-[18px]">Jane Doe</h4>
                <p className="text-[#8190A6]">Financial Counselor</p>
              </div>
            </div>
          </div>
        </article> */}
        <Swiper
          slidesPerView={sliderPerView.sliderPerView}
          spaceBetween={30}
          //   centeredSlides={sliderPerView.centeredSlides}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <SwiperSlide key={index} className="mine">
              <article className="p-[32px] bg-[#A1B5CC]/[30%] rounded-lg md:max-w-[412px] cursor-pointer">
                <div className="text-[#FFF]">
                  <p>Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
                  <div className="flex items-center gap-4 mt-[32px]">
                    <figure>
                      <img src="https://i.postimg.cc/9fLp3rgz/1.png" alt="" />
                    </figure>
                    <div>
                      <h4 className="text-[18px]">Jane Doe</h4>
                      <p className="text-[#8190A6]">Financial Counselor</p>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
}
