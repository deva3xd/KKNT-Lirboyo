import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <nav className="fixed top-0 left-0 w-screen z-50 border-b-2 rounded-b-lg text-white custom-nav">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#beranda" className="self-center font-semibold whitespace-nowrap text-base">
                    WAYANG JEMBLUNG
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d={isOpen ? "M1 13l15-12M1 1l15 12" : "M1 1h15M1 7h15M1 13h15"}
                        />
                    </svg>
                </button>
                <div
                    className={`w-full md:block md:w-auto text-base ${isOpen ? 'block' : 'hidden'}`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse">
                        <li>
                            <a
                                href="#beranda"
                                className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 hover:text-yellow-300"
                            >
                                Beranda
                            </a>
                        </li>
                        <li>
                            <a
                                href="#sejarah"
                                className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 hover:text-yellow-300"
                            >
                                Sejarah
                            </a>
                        </li>
                        <li>
                            <a
                                href="#kegiatan"
                                className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 hover:text-yellow-300"
                            >
                                Kegiatan
                            </a>
                        </li>
                        <li>
                            <a
                                href="#galeri"
                                className="block py-2 px-3 rounded-sm md:bg-transparent md:p-0 hover:text-yellow-300"
                            >
                                Galeri
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
