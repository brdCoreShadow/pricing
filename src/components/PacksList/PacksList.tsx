import * as SC from "./PackListStyled"

import { BASIC_MONTH, MASTER_MONTH, PROFESSIONL_MONTH } from "../../utils/vars";

const PacksList:React.FC = () => {
  return (
    <SC.PackListStyled>
      <SC.PackItem>
        <h3>Basic</h3>
        <SC.SubList>
          <SC.Tariff ><span>$ </span> {BASIC_MONTH}</SC.Tariff>
          <li>500 GB Storage</li>
          <li>2 Users Allowed</li>
          <li>Send up to 3 GB</li>
        </SC.SubList>
        <button type="button">learn more</button>
      </SC.PackItem>
      <SC.PackItem>
        {" "}
        <h3>Professional</h3>
        <SC.SubList>
          <SC.Tariff even="even"><span>$</span> {PROFESSIONL_MONTH}</SC.Tariff>
          <li>1 TB Storage</li>
          <li>5 Users Allowed</li>
          <li>Send up to 10 GB</li>
        </SC.SubList>
        <button type="button">learn more</button>
      </SC.PackItem>
      <SC.PackItem>
        {" "}
        <h3>Master</h3>
        <SC.SubList>
          <SC.Tariff ><span>$</span> {MASTER_MONTH}</SC.Tariff>
          <li>2 TB Storage</li>
          <li>10 Users Allowed</li>
          <li>Send up to 20 GB</li>
        </SC.SubList>
        <button type="button">learn more</button>
      </SC.PackItem>
    </SC.PackListStyled>
  );
};

export default PacksList;
