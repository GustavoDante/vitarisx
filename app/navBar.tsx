'use client'

import { CircleIcon } from "@/assets/icons/circle";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <nav className={`fixed top-0 left-0 py-6 right-0 w-full z-50 transition-all duration-300 ${
                scrolled 
                ? "bg-blue-700 shadow-md" 
                : "bg-gray-100"
            }`}>
                <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-24">
                    <div className="flex items-center">
                        <CircleIcon 
                            color={scrolled ? '#ffffff' : '#1342F7'} 
                            className="w-6 h-6 mr-4" 
                        />
                    </div>
                    
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-4">
                        <li>
                            <a
                                href="#inicio"
                                className={`px-4 py-2 rounded-full font-medium transition ${
                                    scrolled
                                    ? "text-white hover:bg-blue-800"
                                    : "text-blue-700 hover:bg-blue-100"
                                }`}
                            >
                                Início
                            </a>
                        </li>
                        <li>
                        <a
                                href="https://wa.me/5581996597835"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-4 py-2 rounded-full font-medium transition ${
                                    scrolled
                                    ? "bg-white text-blue-700 hover:bg-gray-100"
                                    : "bg-blue-700 text-white hover:bg-blue-800"
                                }`}
                            >
                                Agende Agora
                            </a>
                        </li>
                        <li>
                            <a
                                href="#quem-somos"
                                className={`px-4 py-2 rounded-full font-medium transition ${
                                    scrolled
                                    ? "text-white hover:bg-blue-800"
                                    : "text-blue-700 hover:bg-blue-100"
                                }`}
                            >
                                Quem somos
                            </a>
                        </li>
                        <li>
                            <a
                                href="#como-funciona"
                                className={`px-4 py-2 rounded-full font-medium transition ${
                                    scrolled
                                    ? "text-white hover:bg-blue-800"
                                    : "text-blue-700 hover:bg-blue-100"
                                }`}
                            >
                                Como funciona?
                            </a>
                        </li>
                    </ul>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X 
                                size={24} 
                                className={scrolled ? "text-white" : "text-blue-700"} 
                            />
                        ) : (
                            <Menu 
                                size={24} 
                                className={scrolled ? "text-white" : "text-blue-700"} 
                            />
                        )}
                    </button>
                </div>
                
                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className={`md:hidden absolute top-full left-0 w-full p-5 ${
                        scrolled ? "bg-blue-700" : "bg-gray-100"
                    } shadow-lg transition-all duration-300 ease-in-out`}>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a
                                    href="#inicio"
                                    onClick={closeMenu}
                                    className={`block px-4 py-2 rounded-full font-medium transition ${
                                        scrolled
                                        ? "text-white hover:bg-blue-800"
                                        : "text-blue-700 hover:bg-blue-100"
                                    }`}
                                >
                                    Início
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/5581996597835"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeMenu}
                                    className={`block px-4 py-2 rounded-full font-medium transition ${
                                        scrolled
                                        ? "bg-white text-blue-700 hover:bg-gray-100"
                                        : "bg-blue-700 text-white hover:bg-blue-800"
                                    }`}
                                >
                                    Agende Agora
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#quem-somos"
                                    onClick={closeMenu}
                                    className={`block px-4 py-2 rounded-full font-medium transition ${
                                        scrolled
                                        ? "text-white hover:bg-blue-800"
                                        : "text-blue-700 hover:bg-blue-100"
                                    }`}
                                >
                                    Quem somos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#como-funciona"
                                    onClick={closeMenu}
                                    className={`block px-4 py-2 rounded-full font-medium transition ${
                                        scrolled
                                        ? "text-white hover:bg-blue-800"
                                        : "text-blue-700 hover:bg-blue-100"
                                    }`}
                                >
                                    Como funciona?
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* Espaço para compensar a navbar fixa */}
            <div className={`${scrolled ? "pt-16" : "pt-24"}`}></div>
        </>
    );
}