import { styles } from './styles';
import { RiRocketLine } from 'react-icons/ri';

const Home = () => {
  return (
    <section className="flex flex-wrap justify-between max-w-7xl mx-auto">
      <div className='md:flex-1'>
        <h2 className='text-lg md:text-xl font-bold uppercase flex items-center'>Hi 👋 I'm Hà Đỗ. Welcome to my portfolio website </h2>
        
        <h2 className={`${styles.heroSubText} text-white mt-8 mb-2 flex items-center`}>Key Qualities <RiRocketLine className="ml-2" /></h2>
        <ul className="text-white">
          <li className={`${styles.sectionSubText} mt-2`}>Self-motivated</li>
          <li className={`${styles.sectionSubText} mt-2`}>Responsible</li>
          <li className={`${styles.sectionSubText} mt-2`}>Teamwork</li>
          <li className={`${styles.sectionSubText} mt-2`}>Problem solving</li>
        </ul>

        <h2 className={`${styles.heroSubText} text-white mt-8 mb-2 flex items-center`}>Technical Skills <RiRocketLine className="ml-2" /></h2>
        <p className={`${styles.sectionSubText} mt-2`}>
          Programming languages: C, C++, C#, embedded C, Python, JavaScript, Node.js, HTML, CSS, React.js, Tailwind CSS
        </p>
        <p className={`${styles.sectionSubText} mt-2`}>
          Tools and Platforms: Microsoft Office, Jira, Jenkins, Confluence, Linux
        </p>
        <p className={`${styles.sectionSubText} mt-2`}>
          Other skills: Communication Skills, Customer Services, CI/CD, Scrum, Test Automation Frameworks, Agile Methodologies
        </p>

        <h2 className={`${styles.heroSubText} text-white mt-8 mb-2 flex items-center`}>Languages <RiRocketLine className="ml-2" /></h2>
        <p className={`${styles.sectionSubText} mt-2`}>
          Vietnamese (Native), English (Excellent)
        </p>
        
       
      </div>
      
      <div className="flex items-start">
        <img src="/src/assets/photos/Ha.png" alt="HaDo" style={{ width: '600px', height: '800px' }} />
      </div>
    </section>
  );
};

export default Home;
