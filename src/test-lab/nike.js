import React from "react";

const nike = () => {
  const Hero = () => {
    return (
      <section className="h-3 w-full flex justify-center min-h-screen gap-10 ml-12 ">
        <div className="relative w-1/2 flex flex-col justify-center items-start w-full max-xl:p-10 pt-28">
          <p className="text-[#ff6452] font-montserrat text-xl">
            Our summer collection
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
            <span>The New Arrival</span>
            <br />
            <span>Nike</span>
            Shoes
          </h1>
          <p>
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <button className="px-7 py-4 bg-[#ff645d] rounded-full text-white font-bold text-slate-300 flex justify-center items-center gap-4">
            <span>Shop Now</span>
            <img src="https://nike-rosy.vercel.app/assets/arrow-right-cb678427.svg" />
          </button>
        </div>
      </section>
    );
  };
  const Nav = () => {
    return (
      <header className="px-10 py-8 fixed top-0 flex w-full justify-between ">
        <img
          src="https://nike-rosy.vercel.app/assets/header-logo-098c06bd.svg"
          alt="logo"
          width={130}
          height={29}
        />
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          <li>
            <a className="text-lg text-slate-gray" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-lg text-slate-gray" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="text-lg text-slate-gray" href="#">
              Products
            </a>
          </li>
          <li>
            <a className="text-lg text-slate-gray" href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a className="text-lg text-slate-gray" href="#">
              Explore now
            </a>
          </li>
          <li>
            <button className="btn-primary">
              <span>Sign In</span>
            </button>
          </li>
        </ul>
        <div className="bg-blue-200 hidden max-lg:block">
          <img
            src="https://nike-rosy.vercel.app/assets/hamburger-19c87d8f.svg"
            className="h-5 w-5"
          />
        </div>
      </header>
    );
  };

  const Stastics = () => {
    const arr = [
      { label: "Brands", value: "1k+" },
      { label: "Shops", value: "500+" },
      { label: "Customers", value: "250+" },
    ];
    return (
      <div className=" gap-8 items-center flex flex-row py-8 px-8 ">
        {arr.map((item) => {
          return (
            <div key={item.label} className=" items-center gap-2">
              <div>{item.value}</div>
              <div>{item.label}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <main className="relative">
      <Hero />
      <section>
        <Nav />
      </section>
      <section>
        <Stastics />
      </section>
      <section className="hero">Popular products</section>
      <section className="hero">super quality products</section>
      <section className="hero">services</section>
      <section className="hero">special offer</section>
      <section className="hero">Customer reviews</section>
      <section className="hero">subscribe</section>
      <section className="bg-black p-4 pb-8">footer</section>
    </main>
  );
};

export default nike;
