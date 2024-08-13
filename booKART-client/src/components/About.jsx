import React from 'react';
import img from '../assets/logo-color.svg'
const About = () => {
  return (
    <div className="min-h-screen bg-[#f2f4ff] py-12 flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col sm:flex-row">
          {/* Placeholder for the image */}
          <div className="sm:w-1/3 w-full mb-6 sm:mb-0">
            <div className="w-full h-48 rounded-lg flex items-center justify-center">
              <span className="text-gray-500"><img className='p-3' src={img} alt="" /></span>
            </div>
          </div>

          {/* About content */}
          <div className="sm:w-2/3 w-full sm:pl-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">About booKART</h2>
            <p className="text-gray-700 mb-4">
              Welcome to <strong>booKART</strong> – your one-stop platform for buying and selling books online. Whether you’re looking to find your next favorite read or declutter your bookshelf by selling books you no longer need, booKART has got you covered.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              At booKART, we believe that books should be accessible to everyone. Our mission is to create a seamless and enjoyable experience for book lovers, connecting sellers and buyers in a community-driven marketplace.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">What We Offer</h3>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li><strong>Easy Listing:</strong> List your books online with just a few clicks.</li>
              <li><strong>Wide Selection:</strong> Browse through a diverse collection of books across various genres.</li>
         
            </ul>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Technologies We Use</h3>
            <p className="text-gray-700 mb-4">
              booKART is built using the latest web technologies including <strong>React</strong>, <strong>MongoDB</strong>, <strong>Node.js</strong>, <strong>Google Firebase</strong>, and is styled with <strong>Tailwind CSS</strong> and <strong>Flowbite</strong>.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose booKART?</h3>
            <p className="text-gray-700">
              We’re more than just an online bookstore; we’re a community of readers and learners. Whether you’re a student, a casual reader, or a book collector, booKART is designed to meet your needs and make your book trading experience enjoyable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
