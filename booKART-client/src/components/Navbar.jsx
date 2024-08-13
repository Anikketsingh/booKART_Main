import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBlog, FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contacts/AuthProvider';


function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const [navbarColor, setNavbarColor] = useState('bg-transparent');
    const {user}=useContext(AuthContext);
    console.log(user);
    
    const sectionsRef = useRef([]);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }

            sectionsRef.current.forEach(section => {
                const { offsetTop, clientHeight, dataset } = section;
                if (window.scrollY >= offsetTop - 100 && window.scrollY < offsetTop + clientHeight) {
                    setNavbarColor(dataset.navcolor);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: 'Home', path: '/', navColor: 'bg-blue-300' },
        { link: 'About', path: '/about', navColor: 'bg-red-300' },
        { link: 'Shop', path: '/shop', navColor: 'bg-green-300' },
        { link: 'Sell Your Book', path: '/admin/dashboard', navColor: 'bg-yellow-300' },
        { link: 'Blog', path: '/blog', navColor: 'bg-purple-300' },
    ];

    return (
        <header className='w-full bg-transparent bg-[#e2e6ff] transition-all ease-in duration-300'>
            <nav className={` py-4 lg:px-24 bg-[#f2f4ff] rounded-lg' }`}>
                <div className='flex justify-between items-center text-base gap-8 '>
                    <Link to='/' className='text-2xl font-bold text-blue-700 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="150" height="40" viewBox="0 0 1500 329"><g transform="matrix(1,0,0,1,-0.9090909090911055,0.7464203943567611)"><svg viewBox="0 0 396 87" data-background-color="#ffffff" preserveAspectRatio="xMidYMid meet" height="329" width="1500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="tight-bounds" transform="matrix(1,0,0,1,0.24000000000003752,-0.1973816848299066)"><svg viewBox="0 0 395.5199999999999 87.3947633696598" height="87.3947633696598" width="395.5199999999999"><g><svg viewBox="0 0 484.56658812507374 107.07064701161566" height="87.3947633696598" width="395.5199999999999"><g transform="matrix(1,0,0,1,0,14.797752228088711)"><svg viewBox="0 0 395.52 77.47514255543824" height="77.47514255543824" width="395.52"><g id="textblocktransform"><svg viewBox="0 0 395.52 77.47514255543824" height="77.47514255543824" width="395.52" id="textblock"><g><svg viewBox="0 0 395.52 77.47514255543824" height="77.47514255543824" width="395.52"><g transform="matrix(1,0,0,1,0,0)"><svg width="395.52" viewBox="3.2 -36.3 189.38000000000002 37.099999999999994" height="77.47514255543824" data-palette-color="#289494"><path d="M14.85-24.2Q18.2-24.2 20.83-22.6 23.45-21 24.93-18.18 26.4-15.35 26.4-11.75L26.4-11.75Q26.4-8.1 24.9-5.25 23.4-2.4 20.75-0.8 18.1 0.8 14.75 0.8L14.75 0.8Q12.25 0.8 10.15-0.33 8.05-1.45 6.6-3.45L6.6-3.45 6.6 0 3.2 0 3.2-36.3 6.6-36.3 6.6-19.9Q8.05-21.95 10.18-23.08 12.3-24.2 14.85-24.2L14.85-24.2ZM14.85-2.3Q17.2-2.3 19.05-3.5 20.9-4.7 21.95-6.85 23-9 23-11.75L23-11.75Q23-14.45 21.95-16.57 20.9-18.7 19.05-19.9 17.2-21.1 14.85-21.1L14.85-21.1Q12.45-21.1 10.58-19.9 8.7-18.7 7.65-16.55 6.6-14.4 6.6-11.7L6.6-11.7Q6.6-9 7.65-6.85 8.7-4.7 10.58-3.5 12.45-2.3 14.85-2.3L14.85-2.3ZM41.4 0.8Q38.05 0.8 35.4-0.8 32.75-2.4 31.25-5.28 29.75-8.15 29.75-11.75L29.75-11.75Q29.75-15.35 31.22-18.18 32.7-21 35.32-22.6 37.95-24.2 41.3-24.2L41.3-24.2Q44.65-24.2 47.3-22.6 49.95-21 51.45-18.15 52.95-15.3 52.95-11.7L52.95-11.7Q52.95-8.1 51.47-5.25 50-2.4 47.37-0.8 44.75 0.8 41.4 0.8L41.4 0.8ZM41.3-2.3Q43.7-2.3 45.57-3.5 47.45-4.7 48.5-6.85 49.55-9 49.55-11.7L49.55-11.7Q49.55-14.4 48.5-16.55 47.45-18.7 45.57-19.9 43.7-21.1 41.3-21.1L41.3-21.1Q38.95-21.1 37.1-19.9 35.25-18.7 34.2-16.57 33.15-14.45 33.15-11.75L33.15-11.75Q33.15-9 34.2-6.85 35.25-4.7 37.1-3.5 38.95-2.3 41.3-2.3L41.3-2.3ZM67.94 0.8Q64.59 0.8 61.95-0.8 59.3-2.4 57.8-5.28 56.3-8.15 56.3-11.75L56.3-11.75Q56.3-15.35 57.77-18.18 59.24-21 61.87-22.6 64.5-24.2 67.84-24.2L67.84-24.2Q71.19-24.2 73.84-22.6 76.5-21 78-18.15 79.5-15.3 79.5-11.7L79.5-11.7Q79.5-8.1 78.02-5.25 76.55-2.4 73.92-0.8 71.3 0.8 67.94 0.8L67.94 0.8ZM67.84-2.3Q70.25-2.3 72.12-3.5 74-4.7 75.05-6.85 76.09-9 76.09-11.7L76.09-11.7Q76.09-14.4 75.05-16.55 74-18.7 72.12-19.9 70.25-21.1 67.84-21.1L67.84-21.1Q65.5-21.1 63.64-19.9 61.8-18.7 60.74-16.57 59.7-14.45 59.7-11.75L59.7-11.75Q59.7-9 60.74-6.85 61.8-4.7 63.64-3.5 65.5-2.3 67.84-2.3L67.84-2.3ZM108.39 0L104.14 0 92.44-16.4 88.84-12.15 88.84 0 85.09 0 85.09-34.1 88.84-34.1 88.84-16.85 103.24-34.1 107.39-34.1 94.64-19 108.39 0ZM137.04 0L133.54 0 130.04-9.55 115.89-9.55 112.74 0 108.99 0 121.09-34.1 124.59-34.1 137.04 0ZM122.79-29.2L117.04-12.65 128.89-12.65 122.79-29.2ZM164.69 0L160.74 0 152.09-15.05 145.34-15.05 145.34 0 141.59 0 141.59-34.1 152.99-34.1Q156.09-34.1 158.44-32.9 160.79-31.7 162.04-29.53 163.29-27.35 163.29-24.55L163.29-24.55Q163.29-21.15 161.24-18.73 159.19-16.3 155.79-15.45L155.79-15.45 164.69 0ZM145.34-31L145.34-18.15 152.49-18.15Q155.79-18.15 157.56-19.9 159.34-21.65 159.34-24.55L159.34-24.55Q159.34-27.45 157.56-29.23 155.79-31 152.49-31L152.49-31 145.34-31ZM181.83 0L178.13 0 178.13-31 167.38-31 167.38-34.1 192.58-34.1 192.58-31 181.83-31 181.83 0Z" opacity="1" transform="matrix(1,0,0,1,0,0)" fill="#289494" class="wordmark-text-0" data-fill-palette-color="primary" id="text-0"></path></svg></g></svg></g></svg></g></svg></g><g transform="matrix(1,0,0,1,413.8100217539176,0)"><svg viewBox="0 0 70.7565663711561 107.07064701161566" height="107.07064701161566" width="70.7565663711561"><g><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 66.084 100" enable-background="new 0 0 66.084 100" xml:space="preserve" width="70.7565663711561" height="107.07064701161566" class="icon-icon-0" data-fill-palette-color="accent" id="icon-0"><path d="M19.354 0L0 6.911v66.004L47.722 100l4.081-1.458V95.92l10.201-3.644v2.623l4.08-1.457V26.551L19.354 0zM62.003 87.944l-10.2 3.643-0.001-59.936L9.755 7.761l9.209-3.29 43.039 24.455V87.944z" fill="#fb9134" data-fill-palette-color="accent"></path></svg></g></svg></g></svg></g><defs></defs></svg><rect width="395.5199999999999" height="87.3947633696598" fill="none" stroke="none" visibility="hidden"></rect></g></svg></g></svg></Link>
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-[#683ee6]'>
                                {link}
                            </Link>
                        ))}
                    </ul>
                    <div className='space-x-12 hidden lg:flex item-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
                        {
                            user? user.email:""
                        }
                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />}
                        </button>
                    </div>
                </div>
                <div className={`space-y-4 px-4 mt-16 py-7  bg-[rgba(56,29,191,0.9)]  ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
