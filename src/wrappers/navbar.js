import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #111;
    color: white;
    position: relative;

    .logo {
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        flex-direction: row;
    }
`;

export const NavLinks = styled.div`
    ul {
        display: flex;
        gap: 2rem;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .link {
        cursor: pointer;
        transition: 0.3s;
    }

    .link:hover {
        color: #ffcc00;
    }

    @media (max-width: 768px) {
        display: none;
        &.open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 60px;
            right: 0;
            background: #222;
            width: 100%;
            padding: 1rem;
            text-align: center;
        }
    }
`;

export const NavButtons = styled.div`
    svg {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        position: absolute;
        right: 15px;
        top: 15px;
    }
`;

export const MenuIcon = styled.div`
    font-size: 2rem;
    cursor: pointer;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const MobileMenu = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #222;
    padding: 1rem;
    text-align: center;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        padding: 1rem;
        cursor: pointer;
    }

    li:hover {
        background: #333;
    }
`;
