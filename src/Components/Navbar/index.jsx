// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useContext } from "react";
// import { ShoppingCartContext } from "../../Context";
// const [isMenuOpen, setIsMenuOpen] = useState(false);

// const Navbar = () => {
//   const context = useContext(ShoppingCartContext);
//   const activeStyle = "underline underline-offset-4";
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-teal-500">
//       <ul className="flex items-center gap-3">
//         <li className="font-semibold text-lg">
//           <NavLink to="/">ShopiX</NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/all"
//             className={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             All
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/clothes"
//             className={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             Clothes
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/electronics"
//             className={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             Electronics
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/toys"
//             className={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             Toys
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/fornitues"
//             className={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             Fornitues
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/others"
//             className={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             Others
//           </NavLink>
//         </li>
//       </ul>
//       <ul className="flex items-center gap-3">
//         <li className="text-black/60">fabricioDaT@gmail.com</li>
//         <li>
//           <NavLink
//             to="/my-orders"
//             className={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             My Orders
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/my-account"
//             className={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             My Account
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/sign-in"
//             className={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             Sign In
//           </NavLink>
//         </li>
//         <li className="flex justify-center items-start ">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="size-6"
//           >
//             <path
//               fillRule="evenodd"
//               d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
//               clipRule="evenodd"
//             />
//           </svg>

//           {context.cartProducts.length}
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeStyle = "underline underline-offset-4";

  // Contenido del menú de categorías
  const categoriesMenu = (
    <>
      <li>
        <NavLink
          to="/all"
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setIsMenuOpen(false)}
        >
          All
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/clothes"
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setIsMenuOpen(false)}
        >
          Clothes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/electronics"
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setIsMenuOpen(false)}
        >
          Electronics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/toys"
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setIsMenuOpen(false)}
        >
          Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/fornitues"
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setIsMenuOpen(false)}
        >
          Fornitues
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/others"
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setIsMenuOpen(false)}
        >
          Others
        </NavLink>
      </li>
    </>
  );



  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full p-5 text-sm font-light bg-teal-500">


      <div className="w-1/2 flex items-center gap-3">
        {/* Logo */}
        <NavLink to="/" className="font-semibold text-2xl text-center">
          ShopiX
        </NavLink>
        {/* Menú Hamburguesa */}
        <div className="flex items-center text-center gap-4 lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Menú lateral móvil */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-teal-500 transform transition-transform duration-300 ease-in-out z-20 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div className="p-4">
            <ul className="space-y-4 mt-8">{categoriesMenu}</ul>
          </div>
        </div>

        {/* Fondo oscuro cuando el menú está abierto */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-10 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Categorías en desktop (ocultas en móvil) */}
        <ul className="hidden lg:flex items-center gap-3 w-1/2">
          {categoriesMenu}
        </ul>
      </div>

      <div className="w-1/2 flex justify-end items-center gap-3">
        {/* Parte derecha (iconos de usuario/carrito) */}
        <ul className="flex items-center gap-3">
          <li className="hidden lg:block text-black/60">
            fabricioDaT@gmail.com
          </li>
          <li className="hidden lg:block">
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li className="hidden lg:block">
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li className="hidden lg:block">
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign In
            </NavLink>
          </li>
          <li className="flex justify-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
            {context.cartProducts.length}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
