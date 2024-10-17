import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
    return (
        <div>
            {/* HEADER  */}
            <header className="text-gray-600 body-font 
            ">
                <div className="container mx-24 flex flex-wrap p-5 flex-col md:flex-row items-center ">


                    {/* logo */}

                    <a href="/"><Image width={70} height={60} src="/images/logo.png" alt='image'></Image></a>

                    <br></br>

                    {/* NAVBAR */}

                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <ul className="flex font-style: Roboto font-size: 1.5rem" >
                            <li className='font-roboto font text-base'><Link className="mr-5 hover:text-gray-500" href="/">MAIN</Link></li>
                            <li className='font-roboto font text-base'><Link className="mr-5 hover:text-gray-500" href="/about">GALLERY</Link></li>
                            <li className='font-roboto font text-base'><Link className="mr-5 hover:text-gray-500" href="/services">PROJECTS</Link></li>
                            <li className='font-roboto font text-base'><Link className="mr-5 hover:text-gray-500" href="/contact">CERTIFICATIONS</Link></li>
                            <li className='font-roboto font text-base'><Link className="mr-5 hover:text-gray-500" href="/contact">CONTATS</Link></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </div>
    )
}
