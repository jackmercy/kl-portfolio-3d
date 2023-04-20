import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

interface ProjectCardProps {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
}

const ProjectCard = ({ project, index }: { project: ProjectCardProps; index: number }) => {
  return (
    <>
      <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
        <Tilt
          tiltMaxAngleX={45}
          tiltMaxAngleY={25}
          scale={1.02}
          transitionSpeed={450}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full '>
            <img src={project.image} alt={project.name} className='w-full h-full object-cover rounded-2xl' />
            <div className='absolute inset-0 justify-end m-3 card-img_hover flex'>
              <div
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open(project.source_code_link, '_blank')}
              >
                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
            <div className='mt-5'>
              <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
              <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              { project.tags.map((tag, index) => (
                <p key={index} className={`text-white text-[14px] ${tag.color}`}>
                  {tag.name}
                </p>
              )) }
            </div>
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects...
        </h2>
      </motion.div>

      <div className='w-full flext'>
        <motion.div variants={fadeIn('', '', 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          <div className='flex flex-wrap justify-center'>
            Following projects showcase my skills and knowledge in different technologies.
            It reflect my ability to learn new technologies and implement them in real world projects also solve complex problems.
          </div>

          <div className='mt-20 flex flex-wrap gap-7'>
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

    </>
  )
}

export default SectionWrapper(Works, '');