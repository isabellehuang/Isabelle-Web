import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
        <Hero />
      <Projects />
      <Experience />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
