import { PROJECTS } from "../constants";
import { motion } from "framer-motion"; //https://framermotion.framer.website/documentation/introduction#installation
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 flex items-center justify-center"
            >
              <a
                href={project.link}
                target="_blank"
                className="block w-[150px] "
              >
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded hover:scale-220"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                <a
                  href={project.link}
                  target="_blank"
                  className="hover:underline underline-offset-3"
                >
                  {project.title}
                </a>
              </h6>

              <p className="mb-2 text-neutral-400">{project.description}</p>

              <a
                href={project.live}
                target="_blank"
                className="block hover:underline underline-offset-3 mb-2"
              >
                Live Web
              </a>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900   py-1 text-sm font-medium text-sky-600"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
