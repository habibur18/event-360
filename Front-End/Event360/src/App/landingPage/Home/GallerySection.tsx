import checkMark from "/check-mark.svg";
export default function GallerySection() {
  return (
    <main className="relative">
      <figure className="absolute top-[calc(10%-100px)] left-[calc(44%-100px)] hidden lg:block">
        <img src="https://i.postimg.cc/MGJMYmJW/sun.png" alt="" />
      </figure>
      <figure className="absolute bottom-[calc(10%-100px)] right-[calc(14%-100px)] hidden lg:block">
        <img src="https://i.postimg.cc/L8CQY5cB/star.png" alt="" />
      </figure>

      <section className="max-w-[1278px] custom-padding">
        <article className="flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[100px]">
          <div className="flex-[0.5]">
            <h1 className="text-6xl font-extrabold">Gallery</h1>
            <p className="text-[18px] py-[35px] text-justify">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem. </p>
            <div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="p-2 bg-gray-200 rounded-full">
                    <img className="w-3 h-3" src={checkMark} alt="" />
                  </span>
                  <p>One day pas access all lecture</p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="p-2 bg-gray-200 rounded-full">
                    <img className="w-3 h-3" src={checkMark} alt="" />
                  </span>
                  <p>Lunch and Snack</p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="p-2 bg-gray-200 rounded-full">
                    <img className="w-3 h-3" src={checkMark} alt="" />
                  </span>
                  <p>Meet Event Speaker</p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="p-2 bg-gray-200 rounded-full">
                    <img className="w-3 h-3" src={checkMark} alt="" />
                  </span>
                  <p>Front Seat</p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="p-2 bg-gray-200 rounded-full">
                    <img className="w-3 h-3" src={checkMark} alt="" />
                  </span>
                  <p>One day pas access all lecture</p>
                </li>
              </ul>
            </div>
          </div>
          {/* image gallery */}
          <div className="grid grid-cols-4 flex-[0.6]">
            <div className="col-span-1">
              <img className="mt-24 w-full" src="https://i.postimg.cc/3N4JFkJQ/1.png" alt="" />
              <img className="w-full" src="https://i.postimg.cc/85hVpL55/2.png" alt="" />
            </div>
            <div className="col-span-1">
              <img className="w-full" src="https://i.postimg.cc/J7vFhPvz/3.png" alt="" />
              <img className="w-full" src="https://i.postimg.cc/dt9Gf02c/4.png" alt="" />
              <img className="w-full" src="https://i.postimg.cc/tgFqrs6h/5.png" alt="" />
            </div>
            <div className="col-span-1">
              <img className="w-full" src="https://i.postimg.cc/3JPQPKY9/6.png" alt="" />
              <img className="w-full" src="https://i.postimg.cc/fyJ1rPP6/7.png" alt="" />
              <img className="w-full" src="https://i.postimg.cc/wjQHJCYV/8.png" alt="" />
            </div>
            <div className="col-span-1 mt-14">
              <img className="w-full" src="https://i.postimg.cc/y8sCVL3S/9.png" alt="" />
              <img className="w-full" src="https://i.postimg.cc/2yQ9Mfw9/10.png" alt="" />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
