import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "./assets/HomeLogo.svg";
import { CgClose } from "react-icons/cg";
import Footer from "./Components/Footer";

export default function Layout() {
  const location = useLocation();
  const curPath = location.pathname.split("/")[1];
  const [leftMenu, setLeftMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {leftMenu && (
        <>
          <div
            className="w-full h-full fixed blur-3xl bg-[#0000009d] z-40 duration-500 animate-popOutArow "
            onClick={() => {
              setLeftMenu(!leftMenu);
            }}
          ></div>
          <div className="flex z-50 h-full fixed gap-4 animate-LeftToRight">
            <div
              onClick={() => navigate("/")}
              className=" bg-white w-[302px] flex flex-col items-ce left-0 h-full gap-12 z-50  px-9 py-8"
            >
              <img
                onClick={() => navigate("/")}
                className="h-14 w-14 sm:h-16 sm:w-16 mt"
                src={Logo}
                alt="Logo"
              />

              <nav className="ml-[-24px]">
                <ul
                  className="flex flex-col gap-8"
                  onClick={() => {
                    setLeftMenu(!leftMenu);
                  }}
                >
                  <NavItem to="/" curPath={curPath}>
                    Accueil
                  </NavItem>
                  <NavItem to="/about" curPath={curPath}>
                    À propos de nous
                  </NavItem>
                  <NavItem to="/services" curPath={curPath}>
                    Nos services
                  </NavItem>
                  <NavItem to="/contact" curPath={curPath}>
                    Contactez-nous
                  </NavItem>
                </ul>
              </nav>
            </div>
            <div
              className="mt-4  z-50"
              onClick={() => {
                setLeftMenu(!leftMenu);
              }}
            >
              <CgClose size={"1.85rem"} color="#ffff" />
            </div>
          </div>
        </>
      )}
      <div className="flex justify-center px-5 sm:px-10 md:px-20 py-8 items-center absolute w-full z-10">
        <nav className="bg-white p-1 rounded-full w-full flex justify-between px-9 items-center shadow-sm">
          <img className="h-14 w-14 sm:h-16 sm:w-16" src={Logo} alt="Logo" />
          <div
            className="group flex lg:hidden flex-col gap-[0.4rem] items-end"
            onClick={() => {
              setLeftMenu(!leftMenu);
            }}
          >
            <div className="bg-[#8b8b8b] rounded-full w-8 h-[2px] group-hover:bg-gray-400 group-active:bg-slate-950"></div>
            <div className="bg-[#8b8b8b] rounded-full w-8 h-[2px] group-hover:bg-gray-400 group-active:bg-slate-950"></div>
            <div className="bg-[#8b8b8b] rounded-full w-5 h-[2px] group-hover:bg-gray-400 group-active:bg-slate-950"></div>
          </div>
          <ul className=" gap-1 lg:flex hidden">
            <NavItem to="/" curPath={curPath}>
              Accueil
            </NavItem>
            <NavItem to="/about" curPath={curPath}>
              À propos de nous
            </NavItem>
            <NavItem to="/services" curPath={curPath}>
              Nos services
            </NavItem>
            <NavItem to="/contact" curPath={curPath}>
              Contactez-nous
            </NavItem>
          </ul>
        </nav>
      </div>
      <div className="py-36   ">
        <Outlet />
      </div>
      <div className="mt-[-9rem]">
        <Footer />
      </div>
    </>
  );
}

// Component to handle the navigation item and its active state
const NavItem = ({ to, curPath, children }) => {
  const isActive = curPath === to.slice(1); // Checking if the current path matches the link
  const activeClass = isActive
    ? "text-[#1d91fe] hover:text-[#1d91fe]"
    : "text-[#8b8b8b] hover:text-[#1d91fe]";
  return (
    <li className="relative">
      <Link
        to={to}
        className={`font-semibold relative z-30 px-6 py-2 rounded-full ${activeClass}`}
      >
        {children}
      </Link>
    </li>
  );
};
