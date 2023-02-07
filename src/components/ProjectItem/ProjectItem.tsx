import { FaEye, FaGithub } from 'react-icons/fa';
import { mainColor } from '../../colors/colors';
import { ItemProject } from '../../data/ProjectsData'

import * as C from './ProjectItem.styles'

type Props = {
    title: string;
    link: string;
    linkGitHub: string;
    img: string;
    description: string;
}

const ProjectItem = ({title, link, linkGitHub, img, description}: Props) => {
    const color = (link.length < 5 ? "red" : mainColor);

  return (
    <C.Container>
        <img src={img} alt={title}/>
        <C.Content>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                <a target="_blank" href={linkGitHub} className="github"><span>GitHub</span><FaGithub /></a>
                <a target="_blank" style={{backgroundColor: color}} href={link} className="preview"><span>Preview</span><FaEye/></a>
            </div>
        </C.Content>
    </C.Container>
  )
}

export default ProjectItem