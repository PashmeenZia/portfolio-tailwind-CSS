'use client'

import Typewriter from 'typewriter-effect';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import Link from "next/link"


export default function Nav(){
  return(
    <main>
      <title> Pashmeen Zia Portfolio </title>
      
      {/* Header */}
      <header className="text-gray-400  bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    {/*<nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">*/}
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-grey-400 flex flex-wrap items-center text-base justify-center">
      {/*<a className="mr-5 hover:text-red-700">Home</a>
      <a className="mr-5 hover:text-blue-700">About Us</a>
      <a className="mr-5 hover:text-green-700">Contact Us</a>
      <a className="hover:text-purple-700">Privacy Policy</a>*/}
      
      <Link className="mr-5 hover:text-red-900" href={"http://localhost:3000/"}> Home </Link>
      <Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/aboutus"}> About Us </Link>
      <Link className="mr-5 hover:text-green-900" href={"http://localhost:3000/contactus"}> Contact Us</Link>
      <Link className="mr-5 hover:text-purple-900" href={"http://localhost:3000/privacypolicy"}> Privacy Policy</Link>
    </nav>
    {/*<a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl xl:block lg:hidden">Pashmeen Zia</span>
    </a>*/}
    <a className="flex titlefont font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img
                  src="https://c8.alamy.com/comp/2H97KE0/initial-letter-p-modern-shape-logo-design-template-monogram-p-logo-with-creative-curved-vector-illustration-2H97KE0.jpg"
                  alt="p logo"
                  className="w-10 h-10 rounded-full"
                />
                <span className="ml-3 text-xl text-white"> Pashmeen Zia </span>
              </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-white mt-4 md:mt-0">Github
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</header>

{/*Hero section*/}

<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="image/logo.jpg"/>
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"><Typewriter
  options={{
    strings: ['Html', 'CSS','JavaScript','TypeScript','Web-Developer'],
    autoStart: true,
    loop: true,
  }}
/></h1>

      <p className="mb-8 leading-relaxed">I am housewife and have studied B.COM at Karachi University. Currently I study at Governor House. I have successfully completed course Html Css and Typescript and now I am preparing Next.js.Having successfull finished my first quarter.I continue to grow my journey as a Frontend Development.</p>
      <div className="flex w-full justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label htmlFor="hero-field" className="leading-7 text-sm text-gray-400">Newsletter</label>
          <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700  focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Subscribe Now</button>
      </div>
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
      <div className="flex text-gray-500">
        <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-indigo-600 hover:text-white focus:outline-none">
          {/*
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>*/}
          <img className="w-15 h-10 " src="image/github.png"
          alt=""/>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-300 mb-1">Connect with</span>
            <span className="title-font font-medium">Github</span>
          </span>
        </button>
        <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-sky-700 hover:text-white focus:outline-none">
          {/*
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>*/}
          <img className="w-15 h-10" src="image/download.png"
          alt=""/>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-300 mb-1">Connect with</span>
            <span className="title-font font-medium">LinkedIn</span>
          
          </span>
        </button>
      </div>
    </div>
  </div>
</section>


{/*Imagecard */}

<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-4 mx-auto">
    <div className="flex flex-col  text-center mx-auto ">
      <h1 className="text-4xl font-serif font-extrabold px-2 py-2 rounded-full bg-transparent text-white border border-white mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
        <span className="block bg-[#121212] rounded-full px-5 py-2">GIAIC ID CARD</span></h1>
       <p className="lg:w--2/3 mx-auto leading-relaxed text-base py-10">Entry card for governor house </p>
    </div>
    
  </div>

  <section className="text-black bg-gray-900 body-font">
<div className="bg-white shadow-[0_4px_25px_-5px_rgba(0,0,0,4)] border p-2 w-full max-w-sm rouneded-lg font-sans overflow-hidden mx-auto mt-4">
<div className="min-h-[245px]">
<img
src="image/giaiccard.png"
alt="image"
className="w-full rounded-lg"
/>
</div>
{/*text and button alignment */}
<div className="p-b text-center">
<h3 className="text-xl font-black"> GIAIC CARD </h3>
<p className="mt-3 text-sm text-grey-500 leading-relaxed"> I developed a streamlined ID card management system for GIAIC using Next.js and Tailwind CSS. This project allows for real-time ID card generation with modern responsive design principles. </p>

<button className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-blue-600 hover:bg-indigo-900"> Read More</button>
</div>
</div>

 </section>
 
</section>

{/* Feature Section */}

<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="text-center mb-20">
      <h1 className="text-4xl font-serif font-extrabold px-2 py-2 rounded-full bg-transparent text-white border border-white mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <span className="block bg-[#121212] rounded-full px-5 py-2">Project Features & Commands</span></h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto py-10">Explore the essential features of each Typescript project and easily see my Github account provided below:</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">npm i p6u1i5-simple-calculator</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">npm i s2i5z3-cli-guessing-game</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">npm i 2z3p5i-atm-machine</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">npm i 3z75-to-do-list-</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">npm i mer_currency_converter</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">npm i izhaan05-word-counter</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">npm i iz21-adventure-game</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">npm i pz87-project07_student_management</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">npm i mjj-quiz-system</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">npm i pz-countdown-timer</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">npm i objoripro_project10_oop</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-black">npm i p11-oop-my-bank</span>
        </div>
      </div>
    </div>

    <a href="https://github.com/PashmeenZia">
    <button className="flex mx-auto py-3 px-5 rounded-lg items-center hover:from-pink-700 hover:to-purple-600 focus:outline-none mt-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ">
          {/*
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>*/}
          <img className="w-15 h-10 " src="image/github.png"
          alt=""/>
          <span className="ml-2 flex items-start flex-col leading-none">
            <span className="text-xs mb-1 text-white">GIT HUB</span>
            <span className="title-font font-bold text-black">@PashmeenZia</span>
          </span>
        </button></a>
  
  </div>
</section>


{/*Skills */}

<section className="text-gray-600 bg-gray-900 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className=" flex flex-col  text-center ">
    {/*<div className="lg:w-1/2 w-full mb-6 lg:mb-0">*/}<h1 className="text-4xl font-serif font-extrabold px-2 py-2 rounded-full bg-transparent text-white border border-white mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <span className="block bg-[#121212] rounded-full px-2 py-2">Unlocking My Skill Sets The Hidden Talents!</span></h1>
      
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white py-10 "> Highlights the range of skills and expertise emphasizing the impact and value brought to my projects.</p>
      </div>
    </div>
{/*</div>*/}
<div className="container px-2 py-4 mx-auto flex-wrap flex justify-center items-center space-x-6 text-2xl">
        
{/*Typewriter Effect*/}
 <h2 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-purple-500"> 
 <Typewriter
  options={{
    strings: ['Programming Languages'],
    autoStart: true,
    loop: true,
  }}
/></h2>  

        {/*Icons*/}
        
        <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            
            <FaHtml5  className="text-red-500 text text-6xl"/>
            <span className="mt-2 text-lg text-black">HTML</span>
        </div>
        <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            
            <FaCss3Alt  className="text-blue-800 text text-6xl"/>
            <span className="mt-2 text-lg text-black">CSS</span>
        </div>
        <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            
            <TbBrandJavascript  className="text-yellow-500 text text-6xl"/>
            <span className="mt-2 text-lg text-black">JavaScript</span>
        </div>    
        <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
            
            <SiTypescript  className="text-blue-500 text text-6xl"/>
            <span className="mt-2 text-lg text-black">TypeScript</span>
        </div>

        <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
       
            < FaReact  className="text-sky-500 text text-6xl"/>
            
            <span className="mt-2 text-lg text-black">React</span>
        </div>

        <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
       
            < BiLogoVisualStudio   className="text-blue-500 text text-6xl"/>
            <span className="mt-2 text-lg text-black">VisualStudio</span>
        </div>
        <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
       
            < AiOutlineGithub  className="text-black text text-6xl"/>
            <span className="mt-2 text-lg text-black">Github</span>
        </div>
        <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
       
            <  FaLinkedin  className="text-blue-800 text text-6xl"/>
            <span className="mt-2 text-lg text-black">Linkedin</span>
        </div>
        <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
       
            < RiTailwindCssFill  className="text-sky-500 text text-6xl"/>
            <span className="mt-2 text-lg text-black">TailwindCSS</span>
        </div>
        <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
       
       < RiNextjsFill  className="text-black text text-6xl"/>
       <span className="mt-2 text-lg text-black">Next js</span>
   </div>
        
        <h2 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-pink-500">   
 <Typewriter
  options={{
    strings: ['Development Tools And Frame'],
    autoStart: true,
    loop: true,
  }}
/></h2>  
</div>    
</section>  

{/*our team */}
<section className="text-gray-600 bg-gray-900 body-font">
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <h1 className="text-4xl font-serif font-extrabold px-2 py-2 rounded-full bg-transparent text-white border border-white mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
    <span className="block bg-[#121212] rounded-full px-5 py-2">Creative Innovators</span></h1> 
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white py-10">The Creative Innovators are a dynamic team of passionate professionals dedicated to delivering cutting-edge solutions with a perfect blend of creativity technology and precision. Comparising two talented developers a visionary designer and a meticulous quality assurrance specialist this team collaborates seamlessly to bring innovative ideas of life. With a commitment to excellence and a shared goal of exceeding client expectations the Creative Innovators are at the forefront of delivering top-lier products that are both functional and visually stunning.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-pink-500 hover:grayscale" src="image/mehak.jfif"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-pink-600">Mehak Alamgir</h2>
            <h3 className="text-purple-500 mb-3"><Typewriter
  options={{
    strings: ['Electronic Engineer/Character Animation'],
    autoStart: true,
    loop: true,
  }}
/></h3>
            <p className="mb-4 text-white">Hybird Engineer at Ministry of Federal Education and Professional Training Pakistan.</p>
            <span className="inline-flex">
              <a className="text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-yellow-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2  border-pink-500 hover:grayscale" src="image/daniyal1.jfif"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-pink-600">Daniyal Nagori</h2>
            <h3 className="text-purple-500 mb-3"><Typewriter
  options={{
    strings: ['Daniyal Nagori, leader of the Governor Sindh IT Initiative and PIAIC'],
    autoStart: true,
    loop: true,
  }}
/></h3>
            <p className="mb-4 text-white">I m a tech enthusaist ever ready to transform the conventinal ideas into an array of digital one!.</p>
            <span className="inline-flex">
              <a className="text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-yellow-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-pink-500 hover:grayscale" src="image/Ali.jfif"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-pink-600">Ali Jawwad</h2>
            <h3 className="text-purple-500 mb-3"><Typewriter
  options={{
    strings: ['Full Stack Developer'],
    autoStart: true,
    loop: true,
  }}
/></h3>
            <p className="mb-4 text-white">I help to create the best solution using software technology.
            .</p>
            <span className="inline-flex">
              <a className="text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-yellow-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-pink-500 hover:grayscale" src="image/ameen1.jfif"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-pink-600">Ammen Alam</h2>
            <h3 className="text-purple-500 mb-3"><Typewriter
  options={{
    strings: ['Cloud & Develops Architect'],
    autoStart: true,
    loop: true,
  }}
/></h3>
            <p className="mb-4 text-white">Goal to help improve the quality of education for everyone.</p>
            <span className="inline-flex">
              <a className="text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-yellow-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-sky-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/*Testimonial*/}
<section className="text-gray-300 bg-gray-900 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col mx-auto text-center">
    <h1 className="text-4xl font-serif font-extrabold px-2 py-2 rounded-full bg-transparent text-white border border-white mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
        <span className="block bg-[#121212] rounded-full px-5 py-2">Testimonials</span></h1>
      {/*<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-pink-600 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>*/}
      <p className="leading-relaxed text-lg py-10 px-10">Here I am share with my special mentor Miss Mehak Alamgir:
      Your wisdom and guidance have been the foundation upon which I have built my confidence. Thank you for being a constant source of inspiration .You are the epitome of grace and knowledge.Your mentorship has shaped not just my skills but my outlook on life. Miss Mehak has been a stepping stone toward my dreams. I am always grateful to you unwavering support.Your dedication to my growth is truly remarkable. You have not just been a mentor but a guiding star in my journey. Your ability to see potential in me when I doubted myself has changed my life. Your mentorship is a gift.Thank you for being more than a mentor. You have been a friend a guide and a beacon of positivity in my life. Your wisdom has been like a light in the dark guiding me through challenges and helping me see the possibilities ahead. I am impressed awe of your strength and compassion .Your guidance has been a transformative force in my life.The trust and belief you have with me Miss Mehak has empowered me to push beyond my limits.</p>
      <span className="inline-block h-1 w-10 px-10 text-base mx-auto rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 className="text-pink-600 font-extrabold font-serif title-font tracking-wider text-xl">Mehak Alamgir</h2>
      <p className="text-pink-500"></p>
    </div>
  </div>
</section>

    
      
{/*Contact */}

<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col  text-center mx-auto ">
      <h1 className="text-4xl font-serif font-extrabold px-2 py-2 rounded-full bg-transparent text-white border border-white mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
        <span className="block bg-[#121212] rounded-full px-5 py-2">Contact Us</span></h1>
       <p className="lg:w--2/3 mx-auto leading-relaxed text-base py-10">Fill the form below for any queries</p>
    </div>
    
  </div>

<section className="text-gray-600 bg-gray-900 body-font relative">
  <div className="absolute inset-0 bg-gray-900">
    <iframe width="100%" height="100%" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" />
  </div>
  <div className="container px-5 py-2 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-gray-900  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-sky-500 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-300">Please fill this form if you have any queries or complains or if you have any message for us</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-300">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-300">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-400 mt-3">Read our privacy policy for any issues.</p>
    </div>
  </div>
</section>
</section>

{/*Footer */}

<footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-4 mx-auto">

   </div>

  <div className="border-t border-gray-200">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label htmlFor="footer-field" className="leading-7 text-sm text-gray-300">Newsletter</label>
          <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">SubscribeNow</button>
        <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
          <br className="lg:block hidden"/>
        </p>
      </div>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-sky-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-sky-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-pink-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-sky-700">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-300 text-sm text-center sm:text-left">© 2024 Pashmeen Zia —
        <a href="" className="text-gray-300 ml-1" target="_blank" rel="noopener noreferrer">@Portfolio</a>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm">Copyright@ All Rights Reserved.</span>
    </div>
  </div>
</footer>
    </main>
  )
} 