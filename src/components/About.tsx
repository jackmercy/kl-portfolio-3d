import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import ServiceCard from "./ServiceCard";
import { SectionWrapper } from '../hoc';


const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software engineer with experience in Typescript and Javascript, and experties in framework like Angular, React and NodeJS.
        I'm a quick leaner and a team player, working with critical thinking and problem solving skills that solve real world problems.
        Let's work together to build something great!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');