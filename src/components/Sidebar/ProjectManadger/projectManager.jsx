import { VectorDownSvg } from "image/vector-down";
import Avatar from '../../../image/main-avatar.jpg'

const ProjectManager = () => {
    return (
      <div>
        <img src={Avatar} alt="Project Manager" />

        <h2 className="title-avatar">Evano</h2>
            <p className="desc-avatar">Project Manager</p>
            
            <VectorDownSvg/>
      </div>
    );
}

export default ProjectManager