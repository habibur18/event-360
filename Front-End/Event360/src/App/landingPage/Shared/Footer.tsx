import { Link } from "react-router-dom";

const navigationData = [
  {
    category: "Services",
    items: [
      { name: "Branding", path: "/branding" },
      { name: "Marketing", path: "/marketing" },
      { name: "Design", path: "/design" },
      { name: "Advertisement", path: "/advertisement" },
    ],
  },
  {
    category: "Company",
    items: [
      { name: "About us", path: "/about-us" },
      { name: "Contact us", path: "/contact-us" },
      { name: "Careers", path: "/careers" },
      { name: "Press kit", path: "/press-kit" },
    ],
  },
  {
    category: "Legal",
    items: [
      { name: "Terms of use", path: "/terms-of-use" },
      { name: "Privacy policy", path: "/privacy-policy" },
      { name: "Cookie policy", path: "/cookie-policy" },
    ],
  },
];
export default function Footer() {
  return (
    <footer className=" bg-[#010308]">
      <main className="max-w-[1350px] px-10 2xl:px-0 mx-auto">
        <div className="bg-[#FFFFFF]/20 w-full h-px"></div>
        <div className="flex justify-between flex-wrap my-10">
          {navigationData.map((categoryObj) => (
            <div key={categoryObj.category} className="my-5">
              <h2 className="text-[#F5F5F5] text-xl text-[18px] font-medium mb-5 uppercase">{categoryObj.category}</h2>
              <ul className="text-[#A3A3A3] capitalize">
                {categoryObj.items.map((item) => (
                  <li className="my-2" key={item.name}>
                    <Link
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      to={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="my-5">
            <h2 className="text-[#F5F5F5] text-xl text-[18px]  font-medium mb-5 uppercase">NEWSLETTER</h2>
            <input className="bg-[#262626] text-white/60 px-3 py-2 mb-5 rounded-md focus:placeholder:text-transparent" type="email" name="" id="" placeholder="Enter your email" />
            <br />
            <button className="bg-[#3B82F6] text-[#FFFFFF] px-[29px] my-2 py-[9px] rounded-3xl">Submit</button>
          </div>
        </div>
      </main>
      <div className="bg-[#0A1124]">
        <p className="text-[#D4D4D4] max-w-[1350px] px-10 2xl:px-0 mx-auto py-3">© Copyright{new Date().getFullYear()} | Odommo XYZ</p>
      </div>
    </footer>
  );
}
