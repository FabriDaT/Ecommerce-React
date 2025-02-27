import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbShoppingCartHeart } from "react-icons/tb"

const Footer = () => {
  return (
    <footer className='w-full h-full flex flex-col items-center justify-evenly bg-teal-500 text-black mt-8'>
        <span className='font-semibold text-xl flex items-center justify-center gap-4 py-2'>

            <TbShoppingCartHeart />ShopiX All Rights Reserved <TbShoppingCartHeart />
            
            </span>
        <ul className='flex items-center justify-between gap-8 text-3xl py-4'>
            <li> <a href=""> <FaInstagram /> </a> </li>
            <li><a href=""><FaFacebook /></a></li>
            <li> <a href=""><FaLinkedin /></a>  </li>
            <li>  <a href="">  <FaSquareXTwitter /> </a></li>
        </ul>
    </footer>
  )
}

export default Footer