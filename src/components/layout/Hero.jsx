import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { textVariants } from "../../utils/variants";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-end px-7 h-full">
        <motion.div
          variants={textVariants}
          className="flex flex-col justify-center"
        >
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            SPRING SALE <br />
            <span className="font-semibold">STYLISH WOMEN</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 p-2 rounded-md border-primary transition-all duration-500 hover:bg-black  hover:text-white "
          >
            Discover More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
