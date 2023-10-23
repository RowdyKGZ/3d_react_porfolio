import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen m-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl m-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi i&apos;m <span className="text-[#915eff]">Eldiyar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I developer Javascript/Typescript/React/NextJS{" "}
            <br className="sm:block hidden" /> Redux/RTC Querry/ThreeJS and more
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-6 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              className="h-3 w-3 rounded-full bg-secondary mb-1"
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
