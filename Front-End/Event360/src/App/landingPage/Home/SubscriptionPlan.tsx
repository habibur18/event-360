import checkMarkBlue from "/check-mark-blue.svg";
import checkMarkWhite from "/check-mark-white.svg";
export default function SubscriptionPlan() {
  return (
    <main className="my-[150px]">
      <div className="relative">
        <div className="bg-gradient-to-l from-[rgba(206,237,255,0)] to-[#CEEDFF] h-[464px] shadow-lg">
          <div className="space-y-3 text-center h-full flex flex-col ">
            <h1 className="font-semibold text-4xl mt-28">Ready to get started?</h1>
            <p className="text-[18px]">14 days unlimited free trial. No contract or credit card required.</p>
          </div>
        </div>
        <section className=" -mt-[200px] grid sm:grid-cols-2 lg:grid-cols-3 gap-[35px] max-w-[1181px]  custom-padding ">
          <article style={{ boxShadow: "-1px 4px 5px 0px rgba(0,0,0,0.36)" }} className="flex flex-col w-full md:min-w-[300px] lg:min-w-[270px] xl:min-w-[335px] 2xl:min-w-[350px] lg:max-w-[445px] max-h-[585px] mx-auto bg-[#FFFFFF] pt-[44px] pb-[25px] px-[51px] rounded-lg">
            <div>
              <h4 className="text-2xl font-semibold">Starter Plan</h4>
              <h2>
                <span className="text-5xl font-bold">$11 </span> <span className="text-[#656565] font-semibold">/month</span>
              </h2>
            </div>
            <div className="flex-grow mt-[47px] mb-[50px]">
              <ul className="font-semibold space-y-[25px]">
                {Array.from({ length: 4 }).map((_, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span>
                      <img className="w-4 h-4" src={checkMarkBlue} alt="" />
                    </span>{" "}
                    <span>20,000 Visitors</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-[#5A01CB] text-white w-full border py-4 rounded-md font-semibold">Get this package</button>
          </article>
          <article style={{ boxShadow: "-1px 4px 5px 0px rgba(0,0,0,0.36)" }} className="flex flex-col w-full md:min-w-[300px] lg:min-w-[270px] xl:min-w-[335px] 2xl:min-w-[350px] lg:max-w-[445px]  max-h-[585px] mx-auto bg-[#FFFFFF] pt-[44px] pb-[25px] px-[51px] rounded-lg">
            <div>
              <h4 className="text-2xl font-semibold">Starter Plan</h4>
              <h2>
                <span className="text-5xl font-bold">$11 </span> <span className="text-[#656565] font-semibold">/month</span>
              </h2>
            </div>
            <div className="flex-grow mt-[47px] mb-[50px]">
              <ul className="font-semibold space-y-[25px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span>
                      <img className="w-4 h-4" src={checkMarkBlue} alt="" />
                    </span>{" "}
                    <span>20,000 Visitors</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-[#5A01CB] text-white w-full border py-4 rounded-md font-semibold">Get this package</button>
          </article>
          <article style={{ boxShadow: "-1px 4px 5px 0px rgba(0,0,0,0.36)" }} className="flex flex-col w-full md:min-w-[300px] lg:min-w-[270px] xl:min-w-[335px] 2xl:min-w-[350px] lg:max-w-[445px] max-h-[585px] mx-auto bg-[#5A01CB] text-white pt-[44px] pb-[25px] px-[51px] rounded-lg">
            <div>
              <h4 className="text-2xl font-semibold">Starter Plan</h4>
              <h2>
                <span className="text-5xl font-bold">$11 </span> <span className="font-semibold">/month</span>
              </h2>
            </div>
            <div className="flex-grow mt-[47px] mb-[50px]">
              <ul className="font-semibold space-y-[25px]">
                {Array.from({ length: 6 }).map((_, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span>
                      <img className="w-4 h-4" src={checkMarkWhite} alt="" />
                    </span>{" "}
                    <span>20,000 Visitors</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-white text-[#5A01CB] w-full border py-4 rounded-md font-semibold">Get this package</button>
          </article>
        </section>
      </div>
    </main>
  );
}
