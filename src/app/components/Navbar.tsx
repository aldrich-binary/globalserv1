"use client";
import { Button } from "@/components/ui/button";
import { TextAlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  sideBar?: boolean;
}

export const Navbar = ({ sideBar = false }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {sideBar && (
        <div className="absolute z-10 hidden lg:block left-0 top-0 max-w-xs w-full h-full bg-[#0b2052] rounded-tr-xl "></div>
      )}

      <div className="container mx-auto overflow-hidden ">
        <div className="animate__animated animate__fadeInDown animate__delay-1s relative z-20 flex items-center justify-between px-4 py-5 bg-transparent">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto mr-14">
                <Button
                  asChild
                  variant={"default"}
                  className="bg-black text-white"
                >
                  <Link href="/">GLOBALSERV</Link>
                </Button>
              </div>
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-16">
                  <li className="mr-9 font-medium hover:text-gray-700">
                    <a href="#">Estadisticas</a>
                  </li>
                  <li className="mr-9 font-medium hover:text-gray-700">
                    <a href="#">Soluciones</a>
                  </li>
                  <li className="mr-9 font-medium hover:text-gray-700">
                    <a href="#">Servicios</a>
                  </li>
                  <li className="font-medium hover:text-gray-700">
                    <a href="#">Testimonios</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden mr-5 lg:block">
                <button
                  className="py-3 px-5 w-full hover:text-gray-700 font-medium rounded-xl bg-transparent transition ease-in-out duration-200"
                  type="button"
                >
                  <Link href={"/contact"}>Contáctanos</Link>
                </button>
              </div>
              <div className="w-auto hidden lg:block">
                <button
                  className="py-3 px-5 w-full font-semibold border hover:border-gray-300 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                  type="button"
                >
                  Deja tus datos
                </button>
              </div>
              <div className="w-auto lg:hidden">
                <Button
                  onClick={toggleMenu}
                  variant="outline"
                  className="cursor-pointer"
                >
                  <TextAlignJustify />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
            <div
              className="fixed inset-0 bg-gray-800 opacity-80"
              onClick={toggleMenu}
            ></div>
            <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
              <div className="flex flex-wrap justify-between h-full">
                <div className="w-full">
                  <div className="flex items-center justify-between -m-2">
                    <div className="w-auto p-2">
                      <Button asChild>
                        <Link href="/">GlobalServ</Link>
                      </Button>
                    </div>
                    <div className="w-auto p-2">
                      <Button onClick={toggleMenu} variant={"outline"}>
                        <X />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-16 w-full">
                  <ul>
                    <li className="mb-12">
                      <Button className="w-full" asChild variant={"link"}>
                        <Link href="/">Features</Link>
                      </Button>
                    </li>
                    <li className="mb-12">
                      <Button className="w-full" asChild variant={"link"}>
                        <Link href="/">Features</Link>
                      </Button>
                    </li>
                    <li className="mb-12">
                      <Button className="w-full" asChild variant={"link"}>
                        <Link href="/">Features</Link>
                      </Button>
                    </li>
                    <li>
                      <Button className="w-full" asChild variant={"link"}>
                        <Link href="/">Features</Link>
                      </Button>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-end w-full pb-8">
                  <div className="flex flex-wrap">
                    <div className="w-full mb-3">
                      <Button
                        className="w-full coursor-pointer"
                        variant="outline"
                      >
                        Servicios
                      </Button>
                    </div>
                    <div className="w-full cursor-pointer">
                      <Button className="w-full" variant="outline">
                        Contactanos
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};
