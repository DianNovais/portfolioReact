import * as C from './TopConfigs.styles';

import { IoMdSunny } from 'react-icons/io'

import useData from '../../hooks/useData';
import { FaMoon } from 'react-icons/fa';



const TopConfigs = () => {

  const {themeDark, setThemeDark} = useData();

  const setTheme = (): void => {
    if(themeDark){
      setThemeDark(false);
    }else{
      setThemeDark(true);
    }
  }

  

  return (
    <C.Container themeDark={themeDark}>
      <div onClick={() => setTheme()}>
        {themeDark ? <IoMdSunny/> : <FaMoon/>}
      </div>
       
    </C.Container>
  )
}

export default TopConfigs