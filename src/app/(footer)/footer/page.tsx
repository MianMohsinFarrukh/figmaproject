import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <div>
            <footer className='body-font bg-black  h-96'>
                <div className='flex' >
                    <div className=' '>
                        <Image className='ml-28 pt-10   ' width={100} height={100} src="/images/flo.png" alt='image'></Image>
                    </div>

                    <div>

                        <div className='ml-20 pt-10 '>
                            <h3 className='text-gray-50 mb-4' >Information</h3>
                            <h3 className='text-gray-50 mb-4' >Main</h3>
                            <h3 className='text-gray-50 mb-4' >Gallery</h3>
                            <h3 className='text-gray-50 mb-4' >Projects</h3>
                            <h3 className='text-gray-50 mb-4' >Certifications</h3>
                            <h3 className='text-gray-50 mb-4' >Contacts</h3>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-gray-50 pt-10 ml-20 mb-3'>Contacts</h3>
                        <p className='text-slate-50 ml-20' >1234 Sample Street</p>
                        <p className='text-slate-50 ml-20' >Austin Texas 78704</p>

                        <div className='flex'>
                            <Image className='ml-20 pt-10' width={20} height={20} src="/images/phone.png" alt='image'></Image>
                            <h3 className='text-gray-50 pt-10 ml-4 '>512.333.2222</h3>
                        </div>

                        <div className='flex'>
                            <Image className='ml-20 pt-10' width={25} height={25} src="/images/ms.png" alt='image'></Image>
                            <h3 className='text-gray-50 pt-12 ml-4 '>sampleemail@gmail.com</h3>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-gray-50 mb-4 ml-20 pt-10' >Social Media</h3>
                        <div className='flex'>
                            <Image className='ml-20 pt-3' width={10} height={10} src="/images/fb.png" alt='image'></Image>
                            <Image className='ml-6 pt-3' width={20} height={20} src="/images/tw.png" alt='image'></Image>
                            <Image className='ml-6 pt-3' width={20} height={20} src="/images/ln.png" alt='image'></Image>
                            <Image className='ml-6 pt-3' width={25} height={25} src="/images/p.png" alt='image'></Image>


                        </div>

                    </div>
                </div>

                <hr className='bg-white mt-12'></hr>
                <h3 className='text-gray-50 text-center mt-3 ' >© 2021 All Rights Reserved</h3>
            </footer>










        </div>
    )
}
