import React from "react";

export default function Contact() {
    return (
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
    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
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

    )
  }
  