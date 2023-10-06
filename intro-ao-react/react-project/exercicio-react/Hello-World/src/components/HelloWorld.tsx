import Title from "./Title";
import ModuleDetails from "./ModuleDetails";
import calculateAge from "../utils/Age";

function HelloWorld() {
  const name = 'Pedro';
  const birth = '11/02/1990';
  const age = calculateAge(birth);
  
  return (
    <div>
      <h1>{name}</h1>
      <p>{`Age ${age}`}</p>
      <Title />
      <ModuleDetails />
    </div>
  );
}

export default HelloWorld;