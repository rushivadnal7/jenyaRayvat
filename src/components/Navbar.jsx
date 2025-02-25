import React, { useState } from "react";
import { NavbarWrapper, NavLinks, NavButtons, MenuIcon, MobileMenu } from "../wrappers/navbar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <NavbarWrapper>
            <div className="logo" onClick={() => navigate("/")}>jenya-rayvat</div>

            <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </MenuIcon>

            <NavLinks className={menuOpen ? "open" : ""}>
                <ul>
                    <li className="link" onClick={() => navigate("/")}>Home</li>
                    <li className="link" onClick={() => navigate("/products")}>Products</li>
                    <li className="link" >Contact</li>
                </ul>
            </NavLinks>

            <NavButtons>
                <svg onClick={() => navigate('/login')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </NavButtons>

            {menuOpen && (
                <MobileMenu>
                    <ul>
                        <li onClick={() => { setMenuOpen(false); navigate("/"); }}>Home</li>
                        <li onClick={() => { setMenuOpen(false); navigate("/products"); }}>Products</li>
                        <li >Contact</li>
                    </ul>
                </MobileMenu>
            )}
        </NavbarWrapper>
    );
};

export default Navbar;
