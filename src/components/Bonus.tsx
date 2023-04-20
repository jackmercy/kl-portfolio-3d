import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { FrenchieCanvas } from './canvas';
import { fadeIn } from '../utils/motion';

const Bonus = () => {
  return <>
    <motion.div
      variants={fadeIn('', '', 0.1, 1)}
      className='flex-1 xl:h-auto md:h-[550px] h-[350px]'
    >
      <FrenchieCanvas />
    </motion.div>
  </>
};

export default SectionWrapper(Bonus, '');