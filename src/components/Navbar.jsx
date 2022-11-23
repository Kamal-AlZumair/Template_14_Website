import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<nav className="w-full h-[100px] bg-[var(--darkgrey)] ">
			<div className="navbar max-w-[1240px]  h-[100%] px-4 mx-auto overflow-hidden flex justify-between items-center text-[var(--lightgrey)]">
				<div className="logo flex items-center">
					<Link to={"/"}>
						<img src={logo} alt="" className="w-[80px] z-10" />
					</Link>
				</div>
				<ul className="hidden flex-col md:flex md:flex-row">
					<li className=" px-4">
						<Link to={"/"}>Home</Link>
					</li>
					<li className=" px-4">
						<Link to={"/pricing"}>Pricing</Link>
					</li>
					<li className=" px-4">
						<Link to={"/faq"}>FAQ</Link>
					</li>
					<li className=" px-4">
						<Link to={"/contact"}>Contact</Link>
					</li>
				</ul>
				<div className="md:hidden z-10 text-white" onClick={handleClick}>
					{!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
				</div>
			</div>
      <nav onClick={handleClick} 
        className={!nav ? ' absolute bg-[var(--darkgrey)]  w-full h-[90vh] top-[12vh] left-[-100%] transition-all duration-300 ease-in  flex flex-col items-center  text-center justify-center md:hidden':' absolute bg-[var(--darkgrey)] text-[var(--lightgrey)]  w-full h-[90vh] top-[12vh] left-[0] transition-all duration-300 ease-in  flex flex-col items-center text-center justify-center md:hidden'}>
        <ul>
        <li className=" py-4 text-2xl">
						<Link to={"/"}>Home</Link>
					</li>
					<li className=" py-4 text-2xl">
						<Link to={"/pricing"}>Pricing</Link>
					</li>
					<li className=" py-4 text-2xl">
						<Link to={"/faq"}>FAQ</Link>
					</li>
					<li className=" py-4 text-2xl">
						<Link to={"/contact"}>Contact</Link>
					</li>
        </ul>
      </nav>
		</nav>
	);
};

export default Navbar;
