import * as C from "./Skills.styles";
import * as jqueryAnimation from "../../helpers/jqueryAnimations";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { Data } from "../../data/UserData";

import SkillItem from "../../components/SkillItem/SkillItem";

// hook context
import useData from "../../hooks/useData";

const Skills = () => {
  const skill = Data;

  //Chart Configs removed
  /*
  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: mainColor 
        }
      },
      x: {
        ticks: {
          color: mainColor 
        }
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const [data, setData] = useState({
    labels: Data.map((data) => data.name),
    datasets: [
      {
        label: "Estrelas",
        data: Data.map((item) => item.stars),
        backgroundColor: lightMain,
      },
    ],
  });*/

  jqueryAnimation.fadeInConatiner("#skillContainer");

  const {themeDark} = useData();

  return (
    <C.Container id="skillContainer">
      <C.Title themeDark={themeDark}>Habilidades</C.Title>
      <C.Content>
        {/*<C.GraphContainer>
          <div
            style={{ width: "90%", display: "flex", justifyContent: "center" }}
          >
            <Bar options={options} data={data} />
          </div>
        </C.GraphContainer>*/}
        <C.SkillContainer>
          {skill.map((item) => {
            return (
              <SkillItem
                key={item.id}
                name={item.name}
                description={item.description}
                link={item.svg}
                stars={item.stars}
              />
            );
          })}
        </C.SkillContainer>
      </C.Content>
    </C.Container>
  );
};

export default Skills;
