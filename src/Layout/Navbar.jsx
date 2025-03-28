import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header>
                <nav>
                    <img src="assets/logo-navbar.png" width={200} alt="" />
                    <i
                        className='bx bx-menu-alt-right icon-menu'
                        onClick={() => setMenuOpen(!menuOpen)}
                    ></i>
                    <div className="link-nav">
                        <a href="/" className={location.pathname === '/' ? 'active' : ''}>Artikel</a>
                        <a href="/kamus" className={location.pathname === '/kamus' ? 'active' : ''}>Kamus</a>
                        <a href="/tradisi" className={location.pathname === '/tradisi' ? 'active' : ''}>Tradisi</a>
                        <a href="/cerita-rakyat" className={location.pathname === '/cerita-rakyat' ? 'active' : ''}>Cerita Rakyat</a>
                    </div>
                    <div
                        className="link-nav-hp"
                        style={{ left: menuOpen ? "0" : "-100%" }}
                    >
                        <a href="/" className={location.pathname === '/' ? 'active' : ''}>Artikel</a>
                        <a href="/kamus" className={location.pathname === '/kamus' ? 'active' : ''}>Kamus</a>
                        <a href="/tradisi" className={location.pathname === '/tradisi' ? 'active' : ''}>Tradisi</a>
                        <a href="/cerita-rakyat" className={location.pathname === '/cerita-rakyat' ? 'active' : ''}>Cerita Rakyat</a>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
