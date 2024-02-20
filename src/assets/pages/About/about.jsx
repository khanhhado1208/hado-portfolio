import { useState } from 'react';
import { styles } from '../Home/styles';

const About = () => {
  const [rotation, setRotation] = useState(0);

  const rotateRobot = () => {
    setRotation(rotation + 360); 
  };

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
       
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Hà</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a final-year IT student at Metropolia, majoring <br className='sm:block hidden'/>in Smart IoT Systems. 
            I am interested in technology, <br className='sm:block hidden'/>especially robotics, 
            and enjoy reading great books<br className='sm:block hidden'/> to enhance my knowledge. 
            <br className='sm:block hidden'/>In my free time, I also like to learn new things, 
            such as<br className='sm:block hidden'/> new programming languages or AI, as well as delving <br className='sm:block hidden'/>into topics like kinematics of robotics or mathematics<br className='sm:block hidden'/> to improve my problem-solving skills, with the aim of <br className='sm:block hidden'/>
            making our world more convenient.
          </p>
        </div>
        <div 
          className='rotate-360 cursor-pointer w-1/5' 
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <img src="https://raw.githubusercontent.com/khanhhado1208/hado-portfolio/main/src/assets/photos/robot.png" alt="robot" style={{ width: '900px', height: '500px' }}/>
        </div>
      </div>
    </section>
  );
};

export default About;
