import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-white py-12 px-6 lg:px-24">
      <div className="container mx-auto">
        <section className="text-center mb-12">
          <h1 className="uppercase text-4xl font-bold text-black mb-4">
            Who We Are
          </h1>
          <p className="text-lg text-gray-700">
            At Cosmo-Clo, we believe that fashion is more than just clothing and
            accessories. It's about expressing yourself with confidence and
            embracing your unique style.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80"
                alt="Our Journey"
                className="rounded-lg shadow-lg w-full object-cover h-80 transition-transform duration-500 transform hover:scale-105"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-semibold text-pink-600 mb-4">
                Our Journey
              </h2>
              <p className="text-gray-700">
                Founded with a passion for modern fashion, Cosmo-Clo was born
                from the idea that everyone should feel stylish and confident,
                no matter where they are or what they do. We started with a
                small collection of thoughtfully designed pieces and have grown
                into a diverse line of clothing, bags, and accessories that
                cater to every cosmopolitan lifestyle.
              </p>
              <p className="mt-4 text-gray-700">
                Today, Cosmo-Clo is more than just a fashion brand – we are a
                community. We believe in empowering our customers with fashion
                choices that reflect their individuality, whether it's a casual
                day out or a special occasion.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-600 text-center mb-6">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap items-center justify-center space-x-0 space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="w-48">
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80"
                alt="Founder"
                className="rounded-full shadow-md w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-black mt-4 text-center">
                Sam White
              </h3>
              <p className="text-gray-600 text-center">Founder & CEO</p>
            </div>

            <div className="w-48">
              <img
                src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=400&q=80"
                alt="Designer"
                className="rounded-full shadow-md w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-black mt-4 text-center">
                Alice Green
              </h3>
              <p className="text-gray-600 text-center">Head Designer</p>
            </div>

            <div className="w-48">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
                alt="Marketing"
                className="rounded-full shadow-md w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-black mt-4 text-center">
                Carrie Anderson
              </h3>
              <p className="text-gray-600 text-center">Marketing Director</p>
            </div>
          </div>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our mission at Cosmo-Clo is to provide high-quality, stylish
            clothing and accessories that make you feel confident, chic, and
            ready for anything. We aim to create a seamless shopping experience,
            combining modern design with affordability and versatility.
          </p>
        </section>

        <section className="bg-pink-50 py-12 px-6 lg:px-16 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-pink-600 text-center mb-8">
            Our Values
          </h2>
          <div className="flex flex-col lg:flex-row justify-around space-y-8 lg:space-y-0 lg:space-x-6">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=100&q=80"
                alt="Quality & Craftsmanship"
                className="mx-auto mb-4 w-16 h-16 object-cover"
              />
              <h3 className="text-xl font-semibold text-black mb-2">
                Quality & Craftsmanship
              </h3>
              <p className="text-gray-700">
                Every piece is designed with care and crafted from the finest
                materials to ensure it lasts.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=100&q=80"
                alt="Style & Versatility"
                className="mx-auto mb-4 w-16 h-16 object-cover"
              />
              <h3 className="text-xl font-semibold text-black mb-2">
                Style & Versatility
              </h3>
              <p className="text-gray-700">
                Our collections are inspired by global trends, making sure you
                stay ahead of the curve, effortlessly.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=100&q=80"
                alt="Sustainability"
                className="mx-auto mb-4 w-16 h-16 object-cover"
              />
              <h3 className="text-xl font-semibold text-black mb-2">
                Sustainability
              </h3>
              <p className="text-gray-700">
                We are committed to ethical sourcing and sustainable practices,
                ensuring fashion doesn’t come at the cost of the planet.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Join Our Journey
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Explore our latest collections and be a part of the Cosmo-Clo
            community. We are constantly evolving, just like your style.
          </p>
          <Link
            to="/products"
            className="inline-block bg-pink-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-pink-800 transition-all duration-500"
          >
            Shop Now
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
