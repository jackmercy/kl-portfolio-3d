import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

  // HELLO FROM THE OTHER SIDE

const Contact = () => {
  const formRef = useRef<any>();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    msg: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e?.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formState.name === '' || formState.email === '' || formState.msg === '') {
      alert('Please fill in all fields!');
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        'service_ahmdi8n',
        'template_rc7gixu',
        {
          from_name: formState.name,
          to_name: 'Minh Khôi',
          from_email: formState.email,
          to_email: 'khoicaominh.mmt@gmail.com',
          message: formState.msg
        },
        'XJUlcoJkbHEGroCno'
      );
      setLoading(false);
      setFormState({
        name: '',
        email: '',
        msg: ''
      });
      alert('Email sent successfully! I will contact you asap!');
    } catch {
      setLoading(false);
      alert('Error sending email! Please try again later!');
    }
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 rounded-2xl p-8'
      >
        <p className={styles.sectionSubText}>Get in touch!</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={(e) => handleSubmit(e)}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name<span className="text-rose-600	">*</span></span>
            <input
              type="text"
              name='name'
              value={formState.name}
              onChange={(e) => handleChange(e)}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 outline-none placeholder:text-secondary text-white rounded-lg border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email<span className="text-rose-600	">*</span></span>
            <input
              type="email"
              name='email'
              value={formState.email}
              onChange={(e) => handleChange(e)}
              placeholder="hiring@company.com"
              className='bg-tertiary py-4 px-6 outline-none placeholder:text-secondary text-white rounded-lg border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message<span className="text-rose-600	">*</span></span>
            <textarea
              rows={4}
              name='msg'
              value={formState.msg}
              onChange={(e) => handleChange(e)}
              placeholder="Share your thougth with me"
              className='bg-tertiary py-4 px-6 outline-none placeholder:text-secondary text-white rounded-lg border-none font-medium' />
          </label>

          <button
            disabled={formState.name === '' || formState.email === '' || formState.msg === ''}
            type='submit'
            className='bg-cyan-700 hover:bg-cyan-900 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:bg-slate-600 disabled:cursor-not-allowed'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');