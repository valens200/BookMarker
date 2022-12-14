import React from 'react'
import { footerLInks } from '../assets/data'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import logoo from "../assets/images/logo.png"
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs"
function Footer() {
    return (
        <div className='w-[100%] flex md:flex-row flex-col-reverse items-center bottom-0 relative   bg-black'>
            <div className=''>
                <img className='w-[60%]' src={logoo} alt="" />
            </div>
            <div className='w-[80%]'>
                <div className='flex items-center justify-between  flex-row  justify-between w-[100%] mx-auto items-center p-4'>
                    <div className='w-[80%]  mx-auto text-white md:justify-between md:space-y-0 space-y-9  md:items-center  flex flex-col md:flex-row '>
                        {footerLInks.map((link, index) => (
                            <div className='' key={index}>
                                <h1 className='font-bold'>{link.title}</h1>
                                <ul className='flex text-[0.80rem] mt-4  flex-col space-y-2'>
                                    {link.links.map((link, index) => (
                                        <Link to={"/" + link.link}>
                                            <li className='hover:underline hover:text-[grey]' key={index}>{link.name}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <svg className="animate-bounce w-[20%] h-[100%]   flex items-center mt-10...">
                        <BsFillArrowUpCircleFill className='text-[4rem] float-right  h-[20%] text-white ' />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Footer