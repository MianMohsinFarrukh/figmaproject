import React from 'react'
import Image from 'next/image'
export default function Hero() {
    return (
        <div>
            {/* HERO SECTION 1 */}
            <section className='ml-16' >
                <div className='container mx-auto flex px-5 py-2 md:flex-row flex-col items-center'>
                    <div className=' mt-24'>
                        <h1 className='	text-gray-500 text-5xl font-roboto'>PROJECT</h1>
                        <h2 className='text-5xl font-bold w-7'>Lorum</h2>

                        <div className='flex'>
                            <div className='bg-slate-200 w-8 h-8 mt-8'> <a href=""><Image width={40} height={40} src="/images/leftarow.png" alt='image'></Image></a></div>

                            <div className='bg-slate-200 w-8 h-8 ml-8 mt-8'> <a href=""><Image width={40} height={40} src="/images/rightarow.png" alt='image'></Image></a></div>

                        </div>

                        <div className='mt-8'>
                            <Image width={130} height={40} src="/images/slide.png" alt='image'></Image>
                        </div>
                    </div>

                    <br></br>

                    <div className='ml-24'>
                        <Image width={600} height={400} src="/images/home.png" alt='image'></Image>

                    </div>
                </div>
            </section>





            {/* SECTION 2 */}
            <section className="bg-slate-50 body-font flex ml-24 mr-32 mt-52 mb-32 h-72">

                {/* left sec */}
                <div className=' w-3/6 h-80  flex'>

                    <div className='ml-20 mt-6'>
                        <Image width={200} height={100} src="/images/ffgh.png" alt='image'></Image>
                        <Image className='mt-6' width={200} height={200} src="/images/ongg.png" alt='image'></Image>
                    </div>

                    <div className=' ml-6 mt-10'>
                        <Image width={200} height={80} src="/images/jjkl.png" alt='image'></Image>
                    </div>

                </div>




                {/* right sec */}
                <div className='w-5/12 h-64 ml-6'>


                    <h2 className='	text-gray-300 text-5xl font-roboto ml-4 mt-6 underline'>About</h2>
                    <div className='w-96 h-68 flex'>
                        <p className='text-sm ml-4 mt-4  underline w-18'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum atque consequatur doloribus deleniti porro, veniam asperiores blanditiis quisquam ullam ad laudantium ab! Asperiores neque unde magnam rem magni non  Asperiores neque unde magnam rem magni non .</p></div>


                    <button className='bg-white p-1 ml-4 mt-4 underline flex'><p className='mt-2 font-roboto'>READ MORE</p> <a href=""><Image className='ml-1 mt-1 ' width={30} height={30} src="/images/rightarow.png" alt='image'></Image></a></button>

                </div>
            </section>






            {/* section 3 */}
            <section className='body-font  ml-24 mr-32 mt-52 mb-32 h-72'>
                <h2 className='text-5xl text-gray-500 font-roboto mb-5'>Main Focus/Mission Statement </h2>

                <div className='flex'>
                    <div className=' w-screen h-48 flex '><h1 className='font-bold text-9xl mt-4 text-gray-500 font-roboto'>1</h1>
                        <p className='w-64 mt-7'>Lorem ipsum dolor sit, amet, consectetur adipisicing elit, provident consequatur repellat inventore Ea, ipsa.</p>
                    </div>

                    <div className=' w-screen h-48 flex'>
                        <h1 className='font-bold text-9xl mt-4 text-gray-500 font-roboto'>2</h1>
                        <p className='w-64 mt-7 ml-5'>Lorem ipsum dolor sit, amet, consectetur adipisicing elit, provident consequatur repellat inventore Ea, ipsa.</p>
                    </div>
                </div>

            </section>




            {/* section 4 */}
            <section className='body-font ml-24 mr-32 mt-36 mb-32 h-max'>
                <h2 className='text-5xl text-gray-500 font-roboto mb-5 ml-10'>Our Projects</h2>
                <div className=''>
                    <div className='flex ml-10'>
                        <Image width={400} height={200} src="/images/rect.png" alt='image'></Image>
                        <Image className='ml-10' width={400} height={200} src="/images/rw.png" alt='image'></Image>
                    </div>
                    <div className='flex mt-10'>
                        <Image className='ml-10' width={200} height={200} src="/images/yt.png" alt='image'></Image>
                        <Image className='ml-10' width={360} height={200} src="/images/kl.png" alt='image'></Image>
                        <Image className='ml-10' width={200} height={200} src="/images/ps.png" alt='image'></Image>
                    </div>

                    <div className='float-end mr-10'>
                        <button className='bg-black p-1 ml-4 mt-4 flex'><p className='mt-2 font-roboto text-gray-50'>ALL PROJECTS</p> <a href=""><Image className='ml-1 mt-1' width={30} height={30} src="/images/rightarow.png" alt='image'></Image></a></button>

                    </div>
                </div>
            </section>





            {/* sectio 5 */}
            <section className='body-font  ml-24 mr-32 mt-52 mb-32 h-96' >
                <h2 className='text-5xl text-gray-500 font-roboto ml-10 mb-5'>Contact Us</h2>
                <div className='flex'>
                    <div className=' w-screen h-56 '>
                        <form className='ml-10' action="">
                            <input className='w-96 mb-1 pl-5 h-8 bg-slate-50' type="name" placeholder='Name' />
                            <input className='w-96  mb-1 pl-5 h-8   bg-slate-50' type="number" placeholder='Phone Number' />
                            <input className='w-96 mb-1 pl-5 h-8 bg-slate-50' type="email" placeholder='Email' />
                            <input className='w-96 mb-1 pl-5 h-8 bg-slate-50' type="text" placeholder='Intersted In' />
                            <input className='w-96 mb-1 pl-5 pb-10 h-20 bg-slate-50' type="text" placeholder='Message' />
                        </form>
                    </div>

                    <div className='bg-orange-100 w-screen h-56'><Image width={459} height={200} src="/images/ios.png" alt='image'></Image></div>
                </div>

                <div className=' mt-10 ml-6'>
                    <button className='bg-black p-1 ml-4 mt-4 flex'><p className='mt-2 font-roboto text-gray-50'>ALL PROJECTS</p> <a href=""><Image className='ml-1 mt-1' width={30} height={30} src="/images/rightarow.png" alt='image'></Image></a></button>

                </div>




            </section>

















        </div>
    )
}
