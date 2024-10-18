import { motion } from "framer-motion";
import { textVariants } from "../../utils/variants";

const HeroSmall = ({ heroTitle }) => {
  return (
    <section className="h-[700px] bg-hero bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <motion.div
          variants={textVariants}
          className="flex flex-col justify-center"
        >
          <h1 className="text-[50px] md:text-[70px] leading-[1.1] font-light mb-4">
            {heroTitle}
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSmall;
