import SkillProgress from "../SkillProgress/SkillProgress";
import "./Skills.css"
function Skills(){
    return(
        <div className="cont">
            <div className="top">
                <h1>Skills</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nemo omnis voluptates et, magnam ipsam provident fugit ipsum iusto, vero rerum autem impedit sapiente odio! Esse non officiis nobis accusamus.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nemo omnis voluptates et, magnam ipsam provident fugit ipsum iusto, vero rerum autem impedit sapiente odio! Esse non officiis nobis accusamus.
                </p>
            </div>
            <div className="bottom">
                <div className="left">
                    <h2>My Focus</h2>
                    <hr />
                    <p>UI/UX</p>
                    <p>Frontend</p>
                    <p>Backend</p>
                    <p>Full stack</p>
                </div>
                <div className="right">
                    <SkillProgress score={"95"} skill={"html"}/>
                    <SkillProgress score={"85"} skill={"css"}/>
                    <SkillProgress score={"75"} skill={"js"}/>
                    <SkillProgress score={"70"} skill={"react"}/>
                    <SkillProgress score={"65"} skill={"django"}/>
                    <SkillProgress score={"97"} skill={"python"}/>
                </div>
            </div>
        
        </div>
    )
}
export default Skills;
