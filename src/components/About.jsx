import aboutImg from "../assets/aboutmeimg.png";
import { ABOUT_TEXT } from "../constants/index.js";
import { motion } from "framer-motion"; //https://framermotion.framer.website/documentation/introduction#installation

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items center justify-center">
            <img src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex items-center"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>{" "}
            {/* constants/index.js 內容 */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
