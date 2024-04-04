import HeaderAR from "../componentsAR/1-HeaderAR/HeaderAR"
import FooterAR from "../componentsAR/FooterAR/FooterAR"
import HeroAR from "../componentsAR/2-Hero/HeroAR"
import LprojectsAR from "../componentsAR/3-Lprojects/LprojectsAR"
import SkillsAR from "../componentsAR/4-SkillsAR/SkillsAR"
import TalkAR from "../componentsAR/5-TalkAR/TalkAR"
function homeAR() {
  return (

    <div className="container" style={{direction:"ltr"}}>
      <HeaderAR/>
      <HeroAR/>
      <LprojectsAR/>
      <SkillsAR/>
      <TalkAR/>
      <FooterAR/>
    </div>
  )
}

export default homeAR
