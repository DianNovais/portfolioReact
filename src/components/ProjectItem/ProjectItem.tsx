import { FaEye, FaGithub, FaYoutube } from 'react-icons/fa';
import { mainColor } from '../../colors/colors';
import { ItemProject } from '../../data/ProjectsData'

import * as C from './ProjectItem.styles'

type Props = {
    title: string;
    link: string | null;
    linkGitHub: string | null;
    img: string;
    video?: string | null;
    description: string;
    technologies?: string[];
    functions?: string; 
}

const ProjectItem = ({title, link, linkGitHub, img, video, description, technologies, functions}: Props) => {

  return (
    <C.Container>
        <img src={img} alt={title} className='imgProject'/>
        <C.Content>
            <h2>{title}</h2>
            <div>
                <h3>Tecnologias</h3>
                {technologies &&  <div className='technologies'>{technologies.length > 0 && technologies.map((item) => <img src={`/img/${item}.svg`} />)}</div>}
                <h3>Objetivos</h3>
                <p>{description}</p>
                {functions && <div>
                <h3>Funções:</h3>
                <p>{functions}</p>
            </div>
            }
            </div>
            
            <div className='containerLinks'>

                {linkGitHub && <a target="_blank" href={linkGitHub} className="github"><span>GitHub</span><FaGithub /></a>}
                {video && <a target="_blank" href={video} className="youtube"><span>Youtube</span><FaYoutube /></a>}
                {link && <a target="_blank" href={link} className="preview"><span>Preview</span><FaEye/></a>}
            </div>
            
        </C.Content>
    </C.Container>
  )
}

export default ProjectItem