import { MaterialTailwindTheme } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import SmartSlider from "react-smart-slider";
import { PiPhoneCallLight } from "react-icons/pi";
import CarouselSimple from "./Components/CarouselSimple";
import Footer from "./Components/Footer";

function ChoseCard({ titre, textContenu, imgContenu }) {
  return (
    <>
      <div className="w-full lg:w-[79%] rounded-xl bg-white shadow-2xl animate-DownToUp">
        <div className="p-10">
          <div className="flex gap-8 items-center flex-col lg:flex-row">
            <div className="flex flex-col gap-8 w-full lg:w-1/2">
              <div className="font-Poppins text-3xl sm:text-4xl lg:text-5xl  font-bold w-full flex  justify-left text-[#1E8FFE]">
                {titre}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: textContenu }}
                className="w-full h-full font-Poppins  text-[#616161] text-base sm:text-xl"
              ></div>
            </div>
            <div className=" h-full w-full lg:w-1/2 ">
              <img src={imgContenu} alt="logo" className="rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const AnimatedNumber = ({ targetValue, animationDuration, steps }) => {
    const [value, setValue] = useState(0);
    const step = targetValue / steps;

    useEffect(() => {
      let count = 0;

      const interval = setInterval(() => {
        setValue((prevValue) => {
          count++;
          const newValue = count * step;
          if (newValue >= targetValue) {
            clearInterval(interval);
            return targetValue;
          }
          return newValue;
        });
      }, animationDuration / steps);

      return () => clearInterval(interval);
    }, [targetValue, animationDuration, steps, step]);

    return (
      <div className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-[#1E8FFE]">
        {Math.round(value)}
        <sup className="text-4xl font-bold left-[0.5rem] md:top-[-2.75rem] text-white">
          +
        </sup>
      </div>
    );
  };
  useEffect(() => {
    document.title = "Aarab Rachid - Accueil"; // Change this to whatever title you want
  }, []);

  const ClickableCards = (title, caption, image) => (
    <div className={image}>
      <div className="group-hover:bg-white w-full h-full pl-10 pr-8 rounded-3xl duration-300 text-white">
        <div className="bg-white rounded-full h-20 w-20 mt-[-2.5rem] absolute shadow-lg flex justify-center items-center group-hover:bg-[#1E8FFE] duration-300">
          <div
            className={
              "bg-[url('src/assets/report.png')] h-10 w-10 bg-center bg-contain group-hover:bg-[url('src/assets/report-1.png')]  "
            }
          />
        </div>
        <div className="pt-16 font-Poppins text-[20pt] font-bold  flex  flex-col gap-5 group-hover:text-[#1E8FFE] duration-300">
          <h1>{title}</h1>
          <div className="text-[16px] font-normal text-black group-hover:animate-DownToUp invisible group-hover:visible">
            <p dangerouslySetInnerHTML={{ __html: caption }}></p>
          </div>
          <div className="bg-[url('src/assets/right-arrow.png')] bg-center bg-contain h-12 w-12"></div>
        </div>
      </div>
    </div>
  );

  const [visibleSet, setVisibleSet] = useState(1);
  const handleToggle = (set) => {
    visibleSet !== set ? setVisibleSet(set === visibleSet ? null : set) : null;
  };
  const imagesChnage = {
    0: "bg-[url('src/assets/excellence.svg')] bg-center bg-contain w-12 h-12 sm:h-14 sm:w-14",
    1: "bg-[url('src/assets/CONFIDENTIALITÉ.svg')] bg-center bg-contain w-12 h-12 sm:h-14 sm:w-14",
    2: "bg-[url('src/assets/PROFESSIONNALISME.svg')] bg-center bg-contain w-12 h-12 sm:h-14 sm:w-14",
    3: "bg-[url('src/assets/DISPONIBILITÉ.svg')] bg-center bg-contain w-12 h-12 sm:h-14 sm:w-14",
  };
  const renderSet = (setNumber, imgCenter, title) => (
    <div
      className="flex items-end justify-center group w-40 sm:w-60"
      key={setNumber}
    >
      <div
        className={`duration-300  hover:text-[white] hover:bg-[#14212B] ${
          visibleSet === setNumber
            ? "bg-[#14212B] text-white"
            : " bg-white text-black"
        } bg-cover bg-center border border-gray-300 h-40 lg:w-72 w-full rounded-md cursor-pointer flex justify-center items-center ${
          visibleSet === setNumber ? "border-[#14212B]" : ""
        }`}
        onClick={() => handleToggle(setNumber)}
      >
        <div className="flex flex-col gap-6 p-6 justify-center items-center">
          <div className={imagesChnage[imgCenter]}></div>
          <div className="text-center text-xs sm:text-sm md:text-base font-extrabold">
            {title}
          </div>
        </div>
      </div>
      <div
        className={` w-[2.31rem] h-[2.31rem] opacity-0 bg-[#14212B] absolute rounded-md z-30 rotate-45 mb-[-1rem] ${
          visibleSet === setNumber ? "sm:opacity-100" : "sm:opacity-0"
        }`}
      ></div>
    </div>
  );

  return (
    <>
      <div className=" mt-[-144px]  z-0">
        <CarouselSimple />
      </div>
      <div className="bg-[#14212B] w-full py-14 mt-[-2px] flex justify-center items-center ">
        <div className="flex items-start gap-10 flex-wrap justify-center  px-4">
          <div className="group flex gap-6 w-auto max-w-[369px]  cursor-text">
            <img className={" h-10 w-10 "} src="src/assets/report.png" />
            <div className="flex flex-col gap-1">
              <h3 className="text-white duration-500 group-hover:text-[#1E8FFE] font-bold font-Poppins text-xl">
                Audit
              </h3>
              <p className="text-gray-400 text-sm ffont-Poppins">
                Un audit approfondi et rigoureux pour vous fournir une analyse
                précise de votre entreprise.
              </p>
            </div>
          </div>

          <div className="group flex gap-6 w-auto cursor-text max-w-[369px]">
            <img className={" h-10 w-10 "} src="src/assets/stats.png" />
            <div className="flex flex-col gap-1">
              <h3 className="text-white duration-500 group-hover:text-[#1E8FFE] font-bold font-Poppins text-xl">
                Expertise comptable
              </h3>
              <p className="text-gray-400  text-sm  ffont-Poppins">
                Notre expertise comptable fiable et précise vous aide à gérer
                efficacement vos finances.
              </p>
            </div>
          </div>

          <div className="group flex gap-6 w-auto cursor-text max-w-[369px]">
            <img className={" h-10 w-10 "} src="src/assets/dashboard.png" />
            <div className="flex flex-col gap-1">
              <h3 className="text-white duration-500 group-hover:text-[#1E8FFE] font-bold font-Poppins text-xl">
                Droit des affaires
              </h3>
              <p className="text-gray-400  text-sm  ffont-Poppins">
                Des conseils juridiques spécialisés en droit des affaires pour
                garantir la sécurité et la conformité de votre entreprise.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 lg:gap-44  flex-col">
        <div className="bg-white h-[950px] lg:h-screen  p-7 flex gap-3 justify-between shadow-sm">
          <div className="flex  justify-center items-center">
            <div className="flex w-full items-center  lg:w-4/5 flex-col lg:flex-row gap-10 h-[75%]">
              <div className="flex flex-col gap-4 w-full lg:w-1/2">
                <div className="font-extrabold text-[#1E8FFE] text-xl">
                  FONDATEUR _
                </div>
                <div className=" font-Poppins text-3xl sm:text-5xl font-semibold">
                  L'expert-comptable
                </div>
                <p className="sm:text-lg text-base font-Poppins text-[#616161]  line-clamp-12 sm:line-clamp-none ">
                  <strong>RACHID AARAB</strong> , Expert-Comptable et
                  Commissaire aux Comptes, inscrit à l’ordre des
                  Experts-comptables du Maroc et de Paris en France. Il a
                  commencé sa carrière en 2009 au sein du cabinet CDA à
                  Saint-Germain en Laye dans les Yvelines, puis il a travaillé
                  au sein de plusieurs cabinets de différentes tailles en FRANCE
                  (MAZARS, BDO ARRAOU…) où il a gravi les échelons jusqu’à
                  l’obtention de son DEC (Diplôme d’expertise comptable). Il
                  crée alors son premier cabinet d’Expertise-Comptable et
                  d’Audit: CORSO (TOULOUSE-FRANCE) dès l’obtention de son DEC .
                  En 2015, il crée le CABINET SAB CONSULTING à Agadir au Maroc.
                  Aujourd’hui, le CABINET SAB CONSULTING s’expand à
                  l’international avec l’ouverture d’un nouveau bureau à NOISY
                  LE GRAND (Ile de France).
                </p>
              </div>
              <img
                className="  rounded-3xl w-[100%] md:w-[60%] sm:w-[70%] lg:w-1/2 h-auto object-cover "
                src="src/assets/business-finance.jpg"
              ></img>
            </div>
          </div>
        </div>
        <div className="h-auto flex flex-col gap-16 items-center justify-center">
          <div className="flex flex-col gap-7">
            <div className="w-full flex  justify-center">
              <div className="font-Poppins font-bold  text-4xl md:text-5xl">
                Nos services
              </div>
            </div>
            <div className="w-full flex justify-center ">
              <div className="text-lg font-Poppins text-gray-500 h-auto line-clamp-12 text-center ps-4 sm:px-12">
                La qualité de l’offre développée par l’Expert-Comptable Aarab
                Rachid s’articule autour des prestations suivantes :
              </div>
            </div>
          </div>
          <div className="flex gap-8 gap-y-16 justify-center flex-wrap mt-4 px-12">
            {ClickableCards(
              "Audit",
              "Avez vous besoin d'un commissariat aux comptes ou d'un audit contractuel ? Souhaitez vous évaluer, gérer et atténuer ....",
              "group bg-[url('src/assets/Audit-1.webp')]  duration-300 hover:text-[#1E8FFE] bg-white bg-cover bg-center shadow-sm h-96 lg:w-72 w-full rounded-3xl cursor-pointer"
            )}
            {ClickableCards(
              "Expertise comptable",
              "Vous cherchez un Cabinet pour vous accompagner sur les problématiques liées à la gestion ...",
              "group bg-[url('src/assets/Expert.webp')]  duration-300 hover:text-[#1E8FFE] bg-white bg-cover bg-center shadow-sm h-96 lg:w-72 w-full rounded-3xl cursor-pointer"
            )}
            {ClickableCards(
              "Droit des affaires",
              "Vous souhaitez optimiser le coût de votre fiscalité ? <br />Vous souhaitez confier vos formalités ...",
              "group bg-[url('src/assets/Droit-Daffaires.webp')]  duration-300 hover:text-[#1E8FFE] bg-white bg-cover bg-center shadow-sm h-96 lg:w-72 w-full rounded-3xl cursor-pointer"
            )}
            {ClickableCards(
              "Conseils et stratégies",
              "Vous souhaitez optimiser le coût de votre fiscalité ? <br />Vous souhaitez confier vos formalités ... ",
              "group bg-[url('src/assets/Strategies.webp')]  duration-300 hover:text-[#1E8FFE] bg-white bg-cover bg-center shadow-sm h-96 lg:w-72 w-full rounded-3xl cursor-pointer"
            )}
          </div>
        </div>
        <div className="flex flex-col gap-16 h-auto pb-52 bg-[#FEFEFF] pt-20">
          <div className="font-Poppins text-3xl sm:text-5xl text-center font-bold w-full flex  justify-center">
            Pourquoi nous choisir ?
          </div>
          <div className="flex flex-row gap-4 sm:gap-8  justify-center flex-wrap mt-4 ">
            {renderSet(1, 0, "EXCELLENCE")}
            {renderSet(2, 1, "CONFIDENTIALITÉ")}
            {renderSet(3, 2, "PROFESSIONNALISME")}
            {renderSet(4, 3, "DISPONIBILITÉ")}
            {visibleSet === 1 && (
              <ChoseCard
                titre={"EXELLENCE"}
                imgContenu={"src/assets/excellence.jpg"}
                textContenu={
                  "<b>Aarab Rachid</b> s'est érigé en véritable modèle d'excellence dans le monde des affaires. La fondation même de l'entreprise repose sur une quête incessante de supériorité technique, imprégnant chaque facette de ses opérations. Cet engagement va au-delà de simples critères de performance, revêtant une importance stratégique qui garantit la préservation essentielle de son indépendance."
                }
              />
            )}
            {visibleSet === 2 && (
              <ChoseCard
                titre={"CONFIDENTIALITÉ"}
                imgContenu={"src/assets/CONFIDENTIALITÉ.jpg"}
                textContenu={
                  "<b>Aarab Rachid</b> s'oblige à respecter le secret professionnel et démontre une grande prudence et discrétion dans l'utilisation des informations transmises dans le cadre de ses missions. Les renseignements que nous détenons ne sont divulgués qu'aux individus légalement autorisés à en avoir connaissance."
                }
              />
            )}
            {visibleSet === 3 && (
              <ChoseCard
                titre={"PROFESSIONNALISME"}
                imgContenu={"src/assets/PROFESSIONNALISME.jpg"}
                textContenu={
                  "Le professionnalisme est une valeur centrale chez Aarab Rachid, se manifestant par une approche méticuleuse dans toutes les facettes de ses opérations. L'équipe démontre un engagement et une compétence élevés, offrant un service fiable et efficace aux clients. Cette culture du professionnalisme, couplée à un accent sur le développement continu en interne, renforce la réputation d'<b>Aarab Rachid</b> en tant qu'acteur majeur et fiable dans le domaine des affaires."
                }
              />
            )}
            {visibleSet === 4 && (
              <ChoseCard
                titre={"DISPONIBILITÉ"}
                imgContenu={"src/assets/DISPONIBILITÉ.jpg"}
                textContenu={
                  "<b>Aarab Rachid</b> se distingue par sa disponibilité constante, offrant une réactivité rapide, un support client attentif et une flexibilité dans la gestion des projets. Cette approche renforce les relations avec la clientèle, contribuant à la réussite continue de l'entreprise."
                }
              />
            )}
            <div className="w-full max-w-6xl flex justify-center">
              <div className="w-full absolute mt-14 flex justify-center items-center">
                <div className="w-10/12 h-auto bg-[#14212B] text-white rounded-[3rem] grid grid-cols-2 lg:grid-cols-4  gap-2 md:gap-8 items-center p-10  md:p-16 ">
                  <div className="flex flex-col gap-10 justify-center items-center">
                    <AnimatedNumber
                      targetValue={14}
                      animationDuration={2000}
                      steps={50}
                    />
                    <div className="sm:text-base text-sm text-center md:text-lg font-bold">
                      ANNEES D'EXPÉRIENCE
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 justify-center items-center">
                    <AnimatedNumber
                      targetValue={30}
                      animationDuration={2000}
                      steps={50}
                    />
                    <div className="sm:text-base text-sm text-center md:text-lg font-bold">
                      ANNEES D'EXPÉRIENCE
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 justify-center items-center">
                    <AnimatedNumber
                      targetValue={10}
                      animationDuration={2000}
                      steps={50}
                    />
                    <div className="sm:text-base text-sm text-center md:text-lg font-bold">
                      ANNEES D'EXPÉRIENCE
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 justify-center items-center">
                    <AnimatedNumber
                      targetValue={30}
                      animationDuration={2000}
                      steps={50}
                    />
                    <div className="sm:text-base text-sm text-center md:text-lg font-bold">
                      ANNEES D'EXPÉRIENCE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col bg-[#EFF4F2]  h-[115vh] mt-36  ">
        <div className="bg-[url('https://www.sabconsulting.ma/wp-content/uploads/2023/06/Ayoub-Contact.webp')] bg-bottom bg-no-repeat w-full h-full flex items-center justify-center">
          <div className=" lg:w-[598px] lg:h-[566px] h-[466px] w-[80%]   absolute mr-0 2xl:mr-[-27rem]  rounded-[3rem]  border-white">
            <div className="absolute flex w-full h-full justify-between  border border-white bg-white/75  shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm rounded-3xl"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start p-10 gap-12">
              <img
                src="src/assets/logoAarab.png"
                className="b bg-no-repeat w-[205px] h-[100px] left-0"
              ></img>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#232223]">
                BESOIN D'UN PARTENAIRE STRATÉGIQUE POUR VOTRE ENTREPRISE ?
              </div>
              <div className="bg-[#1E8FFE]  rounded-full w-52 h-14 lg:w-64 lg:h-16  flex justify-center items-center hover:bg-[#232223]">
                <div className="w-auto h-auto text-white font-semibold text-lg lg:text-2xl ">
                  Contactez nous
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-16.75rem] lg:bottom-[-12rem] right-0  lg:right-[-7rem] lg:w-80 lg:h-80 w-72 h-72 flex flex-col">
              <img src="src/assets/phone.png" alt="" />
              <div className="w-16 h-16 rounded-full bg-[#1E8FFE] shadow absolute flex left-[6rem] items-center justify-center">
                <PiPhoneCallLight color="white" size={"2.4rem"} />
              </div>
              <div className="absolute top-20  left-12 w-auto h-auto text-white font-bold text-xl">
                (+212)6 06 67 62 03
              </div>
              <div className="absolute top-32 left-24 w-auto h-auto text-white font-bold text-sm">
                APPLEZ-NOUS
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
