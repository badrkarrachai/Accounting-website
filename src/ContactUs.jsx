import React, { useEffect } from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { Select, Option } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  ListItem,
} from "@material-tailwind/react";
import { InputGroup, ListGroup } from "react-bootstrap";
import MapsAarab from "./Components/MapsAarab";
export default function ContactUs() {
  useEffect(() => {
    document.title = "Aarab Rachid - Contactez-nous"; // Change this to whatever title you want
  }, []);

  return (
    <>
      <div className="flex flex-col gap-16 mt-[-144px] justify-center items-center">
        <div className="bg-[url(https://sab2.kamandcogroup.com/wp-content/uploads/2023/06/Contact-Slider.webp)] bg-center bg-cover w-full h-[27rem]  flex justify-center items-center">
          <div className="font-extrabold text-4xl mt-14 text-center sm:text-5xl md:text-7xl text-white">
            Contactez-Nous
          </div>
        </div>
        <div className="flex w-[90%] justify-center gap-y-8 lg:flex-row flex-col">
          <div className="w-full lg:w-[614px]  h-auto  flex flex-col gap-5 lg:p-11 ">
            <div className="font-Poppins font-bold text-3xl sm:text-4xl md:text-5xl">
              Nos coordonnées
            </div>
            <div className="text-base font-Poppins text-gray-700 h-auto">
              Si vous avez besoin d’aide ou de plus d’informations, nous sommes
              là pour vous. Voici nos coordonnées :
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-5">
                <div>
                  <div className="w-14 h-14 rounded-full bg-white shadow-xl  flex  items-center justify-center hover:bg-black">
                    <GrLocation color="#1E8FFE" size={"2rem"} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-Poppins text-lg   font-bold w-full ">
                    Adresse :
                  </div>
                  <div className="text-base sm:text-lg font-Poppins text-gray-700 h-auto">
                    Bureau N 30, 1ème Étage, Immeuble ERia Barreau Est-Ouest,
                    Haut Founty Bensergao Guelmim – Maroc
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <div className="w-14 h-14 rounded-full bg-white shadow-xl  flex  items-center justify-center hover:bg-black">
                    <MdOutlineAlternateEmail color="#1E8FFE" size={"2rem"} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-Poppins text-lg   font-bold w-full ">
                    Email :
                  </div>
                  <div className="text-base sm:text-lg font-Poppins text-gray-700 h-auto">
                    hananebouzaga38@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <div className="w-14 h-14 rounded-full bg-white shadow-xl  flex  items-center justify-center hover:bg-black">
                    <BiPhoneCall color="#1E8FFE" size={"2rem"} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-Poppins text-base sm:text-lg   font-bold w-full ">
                    Téléphone :
                  </div>
                  <div className="text-lg font-Poppins text-gray-700 h-auto">
                    06 06 67 62 03
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[614px] h-[464px] lg:h-auto ">
            <MapsAarab />
          </div>
        </div>

        <Card
          className="flex flex-col gap-5 p-4 justify-center items-center"
          color="transparent"
          shadow={false}
        >
          <div className="w-auto h-auto p-5 sm:p-10 lg:p-20 max-w-[1170px] bg-[#131E2A] rounded-2xl flex flex-col gap-8">
            <Typography className="font-Poppins font-bold  text-3xl sm:text-4xl md:text-5xl text-white">
              Contactez nos experts
            </Typography>
            <Typography
              color="gray"
              className="text-base lg:text-xl font-Poppins text-white h-auto"
            >
              Si vous souhaitez en savoir plus sur le CABINET Aarab Rachid, ses
              services et solutions, ou si vous voulez des renseignements
              spécifiques, nous vous invitons à remplir le formulaire
              ci-dessous, nous vous recontacterons avec plaisir.
            </Typography>
            <form className="mt-8 mb-2 w-auto h-auto ">
              <div className="mb-1 flex flex-col gap-9">
                <div className="flex flex-col w-1/2 items-start lg:gap-9 gap-9">
                  <div>
                    <Typography className="-mb-3 font-Poppins text-white font-medium text-xl flex gap-3">
                      Ma civilité{" "}
                      <div className="text-[#1E8FFE] font-medium text-2xl">
                        *
                      </div>
                    </Typography>
                  </div>
                  <div className="flex gap-10">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center p-3 rounded-full cursor-pointer"
                        htmlFor="html"
                      >
                        <input
                          name="type"
                          type="radio"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-[#1E8FFE] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#1E8FFE] checked:before:bg-[#1E8FFE] hover:before:opacity-10"
                          id="html"
                        />
                        <span className="absolute text-[#1E8FFE] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle
                              data-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"
                            ></circle>
                          </svg>
                        </span>
                      </label>
                      <label
                        className="mt-px font-normal text-white cursor-pointer select-none"
                        htmlFor="html"
                      >
                        M.
                      </label>
                    </div>
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center p-3 rounded-full cursor-pointer"
                        htmlFor="html"
                      >
                        <input
                          name="type"
                          type="radio"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-[#1E8FFE] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#1E8FFE] checked:before:bg-[#1E8FFE] hover:before:opacity-10"
                          id="html"
                        />
                        <span className="absolute text-[#1E8FFE] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle
                              data-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"
                            ></circle>
                          </svg>
                        </span>
                      </label>
                      <label
                        className="mt-px font-normal text-white cursor-pointer select-none"
                        htmlFor="html"
                      >
                        Mme
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:gap-9 gap-9 w-full">
                  <div className="flex flex-col lg:w-1/2 w-full items-start  gap-5">
                    <Typography className="-mb-3 font-Poppins text-white font-medium text-xl flex gap-3 justify-center">
                      Nom{" "}
                      <div className="text-[#1E8FFE] font-medium text-2xl">
                        *
                      </div>
                    </Typography>
                    <Input
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-[#1E8FFE] h-[70px] rounded-xl text-white text-xl"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="flex flex-col lg:w-1/2 w-full items-start gap-5">
                    <Typography className="-mb-3 font-Poppins text-white font-medium text-xl flex gap-3">
                      Prénom{" "}
                      <div className="text-[#1E8FFE] font-medium text-2xl">
                        *
                      </div>
                    </Typography>
                    <Input
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-[#1E8FFE] h-[70px] rounded-xl text-white text-xl"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                </div>
                <div className="flex  lg:flex-row flex-col lg:gap-9 gap-9 w-full">
                  <div className="flex flex-col lg:w-1/2 w-full items-start  gap-5">
                    <Typography className="-mb-3 font-Poppins text-white font-medium text-xl flex gap-3 justify-center">
                      Adresse e-mail{" "}
                      <div className="text-[#1E8FFE] font-medium text-2xl">
                        *
                      </div>
                    </Typography>
                    <Input
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-[#1E8FFE] h-[80px] rounded-xl text-white text-xl"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="flex flex-col lg:w-1/2 w-full items-start gap-5">
                    <Typography className="-mb-3 font-Poppins text-white font-medium text-xl flex gap-3 lg:w-auto w-full">
                      De quoi aimeriez-vous discuter
                      <div className="text-[#1E8FFE] font-medium text-2xl">
                        *
                      </div>
                    </Typography>

                    <div className="w-full h-auto">
                      <Select
                        label=""
                        className="focus:!border-[#1E8FFE] h-[44px] rounded-xl text-lg font-normal text-white flex items-center justify-center"
                      >
                        <Option className="text-black text-lg font-normal -hover:bg-[#1E8FFE]">
                          Audit
                        </Option>
                        <Option className="text-black text-lg font-normal -hover:bg-[#1E8FFE]">
                          Expertive-comptable
                        </Option>
                        <Option className="text-black text-lg font-normal -hover:bg-[#1E8FFE]">
                          Droits des affaires
                        </Option>
                        <Option className="text-black text-lg font-normal -hover:bg-[#1E8FFE]">
                          Conseils
                        </Option>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="flex  lg:flex-row flex-col gap-5 w-full">
                  <div className="flex flex-col w-full h-60 items-start  gap-5">
                    <Typography className="-mb-3 font-Poppins text-white font-medium text-xl flex gap-3 justify-center">
                      Commentaires / Questions{" "}
                      <div className="text-[#1E8FFE] font-medium text-2xl">
                        *
                      </div>
                    </Typography>
                    <div className="w-full h-96">
                      <Textarea className="focus:!border-[#1E8FFE] text-white text-xl h-52 rounded-xl" />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <Button className="bg-[#1E8FFE] w-[176px] h-[65px] text-white font-medium text-xl lg:text-2xl hover:bg-blue-gray-300 ">
                    Envoyer ↗
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
}
