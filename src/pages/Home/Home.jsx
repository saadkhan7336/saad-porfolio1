import React from 'react'
import { RiFacebookBoxFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri'

function Home() {
    return (
        <section className="home ">
            <div className=" px-16  container  grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="ml-16  content relative md:top-32 md:left-0">
                    <h4 className="text-xl font-medium">Hey There!</h4>
                    <h1 className="text-4xl font-rubik md:text-5xl font-bold uppercase mt-2">I'm Saad Ahmad Khan</h1>
                    <p className="mt-8 text-base font-mulish text-gray-800  leading-relaxed">
                        I’m specialized in Front-End Development, where my skills encompass creating polished user interfaces through
                        meticulous HTML and CSS work. With a strong command of JavaScript, I bring interactivity to web applications,
                        ensuring a seamless user experience. My proficiency extends to responsive design.
                    </p>
                    <div className="home-btns flex gap-4 mt-10">
                        <button className="btn bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-900 hover:-translate-y-1 transition">
                            <a href="./cv/saad ahmad khancv.pdf" download="saad ahmad khancv.pdf">Download CV</a>
                        </button>
                        <button className="btn btn-2 border border-gray-600 text-gray-600 py-2 px-4 rounded-lg hover:-translate-y-1 hover:bg-gray-900 hover:text-white transition">
                            <a href="#contact">Hire me</a>
                        </button>
                    </div>
                    <div className="social-icons flex gap-4 mt-8">
                        <a
                            href=""
                            className="w-12 h-12 flex hover:animate-rotate-once items-center justify-center border border-blue-600 text-blue-600 rounded-full transition-transform hover:rotate-360 hover:-translate-y-1"
                        >
                            <RiFacebookBoxFill className='w-8 h-8  ' />
                        </a>
                        <a
                            href="https://wa.me/+923204077809"
                            target="_blank"
                            className="w-12 h-12 hover:animate-rotate-once flex items-center justify-center border border-green-500 text-green-500 rounded-full transition-transform hover:rotate-360 hover:-translate-y-1"
                        >
                            <RiWhatsappFill className='w-8 h-8  ' />
                        </a>
                        <a
                            href="https://github.com/saadkhan7336"
                            target="_blank"
                            className="w-12 hover:animate-rotate-once h-12 flex items-center justify-center border border-red-600 text-red-600 rounded-full transition-transform hover:rotate360 hover:-translate-y-1"
                        >
                            <RiGithubFill className='w-8 h-8  ' />
                        </a>
                        <a
                            href="www.linkedin.com/in/saad-ahmad-khan-6b5792211"
                            target="_blank"
                            className="w-12 h-12 hover:animate-rotate-once flex items-center justify-center border border-gray-600 text-gray-600 rounded-full transition-transform hover:rotate-360 hover:-translate-y-1"
                        >
                            <RiLinkedinFill className='w-8 h-8  ' />
                        </a>
                    </div>
                </div>
                <div className="image   flex items-center justify-center md:justify-start">
                    <img
                        src="./images/ag3.png"
                        alt=""
                        className="max-w-[520px] h-[550px] drop-shadow-lg "
                    />
                </div>
            </div>
        </section>
    )
}

export default Home
