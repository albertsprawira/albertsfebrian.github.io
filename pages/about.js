import ContentLayout from "../layouts/ContentLayout";
import Intro from '../components/Intro/Intro';
import Skills from '../components/Skills/Skills';
import Education from '../components/Education/Education';
import WorkExp from '../components/WorkExp/WorkExp';
import Awards from '../components/Awards/Awards';

export default function Projects() {
  return (
    <ContentLayout header={"About"}>
      <Intro/>
      <Skills/>
      <Education/>
      <WorkExp/>
      <Awards/>
    </ContentLayout>
  )
}
