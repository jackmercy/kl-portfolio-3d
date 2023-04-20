import { motion } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

interface FeedBackCardProps {
  index: number;
  data: {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
  }
}

const FeedBackCard = ({ data, index }: FeedBackCardProps) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='text-white font-black text-[48px]'>''</p>
      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{data.testimonial}</p>

        <div>
          <div className='mt-7 flex justify-between items-center gap-1'>
            <div className='flex-1 flex flex-col'>
              <p className='text-white font-medium text-[16px]'>
                <span className='blue-text-gradient'>@</span> {data.name}
              </p>
              <p className='mt-1 text-secondary text-[12px]'>{data.designation} of {data.company}</p>
            </div>

            <img src={data.image} alt="avatar" className='w-10 h-10 rounded-full object-cover'/>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-300px`}>
        <motion.div variants={textVariant(0)}>
          <p className={styles.sectionSubText}>
            What others say
          </p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-12 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedBackCard key={index} index={index} data={testimonial}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')