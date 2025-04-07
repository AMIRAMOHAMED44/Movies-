import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SkillProgress.css"
function SkillProgress({score,skill}){
    return <ProgressBar variant='danger' now={score} label={skill} className="progressbar"/>;
}
export default SkillProgress;

