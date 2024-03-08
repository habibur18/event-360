import useItemsEventData from "../../../Hook/common/useItemsEventData";

export default function EventItems() {
  const { data, isLoading, error } = useItemsEventData();
  if (error) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  interface EventData {
    _id: string;
    title: string;
    image: string;
  }
  return (
    <>
      <main className="relative ">
        <div className="absolute top-[calc(-0%-100px)] hidden lg:block left-0 bg-[#5FD47940]/[25%] w-[530px] h-[720px] blur-[244px] rotate-45 -z-10"></div>
        <div className="absolute bottom-[calc(-20%-100px)] hidden lg:block right-0 bg-[#F41D8459]/[35%] w-[530px] h-[620px] blur-[244px] rotate-[22deg] -z-10"></div>
        <section className="max-w-[1210px] custom-padding py-[143px] ">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold py-3">Event Items</h1>
            <p className="text-[18px] mb-[54px] mt-[12px] max-w-[75ch] mx-auto">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
          </div>
          <main className="grid grid-cols-12 gap-6">
            {data.map((item: EventData, index: number) => (
              <article key={item._id} className={`${index === 0 || index === 1 ? "col-span-12 md:col-span-6" : "col-span-12 md:col-span-4"} w-full md:max-w-[595px] md:max-h-[418px] mx-auto bg-[#6E8CF933]/[20%] rounded-md p-[24px]`}>
                <figure>
                  <img className="rounded-xl w-full" src={item.image} alt="" />
                </figure>
                <h3 className="capitalize pt-[12px] text-[24px] font-medium">{item.title}</h3>
              </article>
            ))}
          </main>
        </section>
      </main>
    </>
  );
}
