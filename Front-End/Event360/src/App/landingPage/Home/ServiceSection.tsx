import { Link } from "react-router-dom";
import useOurServices from "../../../Hook/common/useOurServices";
import checkMark from "/check-mark.svg";

interface ServiceItem {
  _id: string;
  title: string;
  image?: string;
  description?: string;
  features?: string[];
}
export default function ServiceSection() {
  const { data, isLoading, error } = useOurServices();
  if (error) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="max-w-[1165px] custom-padding  mx-auto">
      <div className="space-y-3 mb-14 text-center">
        <h1 className="text-6xl font-extrabold">Our Services</h1>
        <p className="text-[18px] max-w-[75ch] mx-auto">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
      </div>
      <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* 1st */}
        {data.map((item: ServiceItem) => (
          <article key={item._id} className={`flex flex-col p-[25px] ${item.description ? "bg-[#9701CB]/[15%]" : "bg-[#5A01CB]/[5%]"}  w-full md:max-w-[412px] mx-auto rounded-md`}>
            {item.image && (
              <figure>
                <img className="rounded-xl w-full" src="https://i.postimg.cc/3xqtMKyt/corporate-event.png" alt="" />
              </figure>
            )}
            <div className="flex-grow">
              {item.title && <h3 className="capitalize text-[32px] font-extrabold mt-3">{item.title}</h3>}
              {item.description && <p className="text-justify mb-[34px] mt-2 ">{item.description}</p>}
              <ul className="space-y-3 mt-3">
                {item.features &&
                  item.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="p-2 bg-white rounded-full">
                        <img className="w-3 h-3" src={checkMark} alt="" />
                      </span>
                      <p>{feature}</p>
                    </li>
                  ))}
              </ul>
            </div>
            {item.description && (
              <Link className="block py-[16px] text-center bg-[#9701CB] text-white rounded-md font-bold" to="#">
                Check it out
              </Link>
            )}
          </article>
        ))}
      </main>
    </section>
  );
}
