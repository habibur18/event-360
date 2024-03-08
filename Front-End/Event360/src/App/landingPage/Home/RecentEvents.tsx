import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { useEffect, useState } from "react";
import { Keyboard, Navigation } from "swiper/modules";
import useRecentEventData from "../../../Hook/common/useRecentEventData";
interface EventData {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
}
export default function RecentEvents() {
  const [sliderPerView, setSliderPerView] = useState(3);
  const { data, error, isLoading } = useRecentEventData();

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1536) {
        setSliderPerView(4);
      } else if (windowWidth >= 1280) {
        setSliderPerView(3);
      } else if (windowWidth >= 868) {
        setSliderPerView(3);
      } else if (windowWidth >= 630) {
        setSliderPerView(2);
      } else {
        setSliderPerView(1);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (error) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <section className="max-w-[1295px] custom-padding my-20 ">
      <main>
        <article className="bg-[#000000]/[5%] w-full  mx-auto rounded-md hidden">
          <figure>
            <img className="rounded-md" src="https://i.postimg.cc/Px56fg02/1.png" alt="" />
          </figure>
          <div className="p-3">
            <h4 className="text-lg font-semibold">Flower Decorations</h4>
            <p className="text-[#475569]">by Melvina Spring</p>
          </div>
        </article>
        <div className="text-center space-y-3 mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold">Recent Events</h1>
          <p className="text-[18px] max-w-[85ch] mx-auto">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
        </div>
        <Swiper
          slidesPerView={sliderPerView}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Navigation]}
          className="mySwiper"
        >
          {data?.map((item: EventData) => (
            <SwiperSlide key={item._id}>
              <article className="bg-[#000000]/[5%] w-full lg:max-w-[286px] xl:max-w-[330px] mx-auto rounded-md cursor-pointer">
                <figure>
                  <img className="rounded-md w-full h-[200px] object-cover" src={item.imageUrl} alt={item.title} />
                </figure>
                <div className="p-3">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-[#475569]">by {item.author}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
}
