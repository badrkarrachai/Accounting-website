import { Carousel } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function CarouselSimple() {
  useEffect(() => {
    AOS.init({ delay: 300, duration: 1500 });
  }, []);
  const DummyCaption = ({ caption }) => (
    <>
      <div className="flex h-full w-full inset-0 absolute" data-aos="fade-up">
        <div className="bg-[#00000075] brightness-50 w-full h-full inset-0"></div>
        <div className="flex justify-center items-center w-full h-full absolute">
          <div className="flex flex-col items-center text-center gap-3 sm:gap-10 px-4  justify-between text-2xl sm:text-5xl md:text-6xl font-Poppins xl:text-7xl">
            <div className="w-full font-semibold text-white">
              Aarab Rachid <br />
              <span className="w-full ">
                {" "}
                Cabinet de <span className="text-[#1E8FFE] ">Comptabilité</span>
              </span>
            </div>
            <div className="w-4/5 flex justify-between items-center  flex-col py-2 gap-5 sm:gap-10">
              <div className="md:text-lg text-sm sm:text-base font-normal text-[#ffffff] font-Poppins ">
                {caption}
              </div>
              <div className="text-lg gap-4 flex flex-col sm:flex-row ">
                <a
                  href="#_"
                  className=" w-44 sm:w-56 box-border relative z-30 inline-flex items-center justify-center px-5 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-[#1E8FFE] rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-[#93c9ff] hover:ring-offset-[#1E8FFE] ease focus:outline-none"
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="relative z-20 flex items-center text-xs sm:text-base">
                    CONTACTEZ-NOUS
                  </span>
                </a>
                <a
                  href="#_"
                  className=" w-44 sm:w-56  box-border relative z-30 inline-flex items-center justify-center  px-5 sm:px-8 py-3 overflow-hidden font-bold text-[#2D4070] transition-all duration-300 bg-[#ffff] rounded-md cursor-pointer group ring-offset-2 ring-1 ring-[#f8f8f8] ring-offset-[#f8f8f8] hover:ring-offset-[#1E8FFE] ease focus:outline-none"
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-[#e6e6e6] opacity-10 group-hover:translate-x-0"></span>
                  <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-[#e6e6e6] opacity-10 group-hover:translate-x-0"></span>
                  <span className="relative z-20 flex items-center text-xs sm:text-base">
                    À PROPOS DE NOUS
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <Carousel
      autoplay={true}
      loop={true}
      className="h-screen"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative h-full w-full">
        <img
          src="src/assets/bg1.jpg"
          alt="image 1"
          className="brightness-75 h-full w-full object-cover"
        />
        <DummyCaption
          caption="Votre partenaire de confiance pour tous vos besoins en Cabinet
      de Comptabilité. Nous sommes là pour vous accompagner avec
      expertise et dévouement."
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="src/assets/bg2.jpg"
          alt="image 2"
          className="brightness-75 h-full w-full object-cover"
        />
        <DummyCaption caption="Comptez sur nous en tant que partenaire fiable pour tous vos besoins en cabinet comptable. Notre engagement est de vous soutenir avec professionnalisme et dévouement." />
      </div>
      <div className="relative h-full w-full">
        <img
          src="src/assets/bg3.jpg"
          alt="image 3"
          className="brightness-75 h-full w-full object-cover"
        />
        <DummyCaption caption="Votre allié de confiance pour chaque exigence en cabinet comptable. Reposez-vous sur notre expertise et notre dévouement inébranlable alors que nous sommes là pour vous aider." />
      </div>
    </Carousel>
  );
}
