import { YearType } from "@/utils/types";
import * as SC from "./ConsoleStyled"

const Console: React.FC<YearType> = ({isYear, toggleYear}) => {
  return (
    <SC.ConsoleCon isYear={isYear}>
      <span>Annually</span>
      <button type="button" onClick={toggleYear} ></button>
      <span>Monthly</span>
    </SC.ConsoleCon>
  );
};

export default Console;
