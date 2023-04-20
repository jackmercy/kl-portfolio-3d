import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }: { index: number; title: string; icon: string; }) => {
  return (
    <>
    {/* options={{
          max: 45,
          scale: 1,
          speed: 450
        }} */}
      <Tilt
        className="parallax-effect-glare-scale xs:w-[250px] w-full"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
        transitionSpeed={450}
        tiltMaxAngleX={45}
        tiltMaxAngleY={25}
        // tiltReverse={true}
      >
        <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col inner-element'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className={`text-white text-[20px] font-bold text-center`}>{title}</h3>
          </div>
        </motion.div>
      </Tilt>


    </>
  );
};

export default ServiceCard;