import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import ScrollAnimation from "./animation/ScrollAnimation";

const ContactUs = () => {
  return (
    <div className="bg-white py-12 px-6 lg:px-24">
      <div className="container mx-auto px-10">
        <section className="text-center mb-12">
          <p className="text-lg text-gray-700">
            We'd love to hear from you! Whether you have a question about our
            products, need assistance with your order, or just want to share
            your feedback, our team is here to help.
          </p>
        </section>
        <ScrollAnimation>
          <section className="mb-12 flex items-center flex-col lg:flex-row lg:space-x-12">
            {/* Form */}
            <div className="lg:w-2/3 mb-12 lg:mb-0">
              <form className="bg-pink-50 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Subject"
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="mt-1 block w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    className="inline-block bg-pink-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-pink-800 transition-all duration-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-pink-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-pink-600 mb-6 text-center">
                  Get in Touch
                </h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Address
                  </h3>
                  <p className="text-gray-700">
                    Binaghady dist,
                    <br />
                    Baku, AZ 1000,
                    <br />
                    Azerbaijan
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-700">+994707007707</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Email
                  </h3>
                  <p className="text-gray-700">info@cosmo-clo.com</p>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                  >
                    <FaFacebookF size={24} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                  >
                    <FaLinkedinIn size={24} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-600 text-center mb-6">
            Our Location
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl h-64 rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Cosmo-Clo Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.98126800142!2d49.86451747584057!3d40.40926575609388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d20b7caa16b%3A0x8e745b995ad5b88d!2sIcherisheher!5e0!3m2!1sen!2saz!4v1728508076887!5m2!1sen!2saz"
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
