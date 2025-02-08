import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-custom-primary  rounded-lg shadow-sm dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 sm:py-8 text-white">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <div className='text-start sm:text-center'>
                            <h1 className='underline text-lg sm:text-2xl font-semibold'>WAYANG JEMBLUNG</h1>
                            <div className='text-base sm:text-xl font-light'>Lirboyo</div>
                        </div>
                    </div>
                    <div>
                        <h5 className='font-normal'>
                            Sosial Media
                        </h5>
                        <ul className="flex flex-wrap items-center mb-6 text-xs sm:text-sm font-light text-white sm:mb-0">
                            <li>
                                <a href="#home" className="hover:underline me-4 md:me-6">Instagram</a>
                            </li>
                            <li>
                                <a href="#home" className="hover:underline me-4 md:me-6">TikTok</a>
                            </li>
                            <li>
                                <a href="#home" className="hover:underline me-4 md:me-6">Youtube</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto" />
                <span className="block text-xs sm:text-sm sm:text-center font-extralightlight">Copyright © 2025 - KKNT Kelompok 8</span>
            </div>
        </footer>
    )
}

export default Footer;
