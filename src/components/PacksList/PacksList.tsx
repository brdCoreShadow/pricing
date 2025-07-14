import * as SC from "./PackListStyled";

import {
  BASIC_MONTH,
  BASIC_YEAR,
  MASTER_MONTH,
  MASTER_YEAR,
  PROFESSIONAL_YEAR,
  PROFESSIONL_MONTH,
} from "../../utils/vars";
import { YearType } from "@/utils/types";

const PacksList: React.FC<Partial<YearType>> = ({ isYear }) => {
  return (
    <SC.PackListStyled>
      <SC.PackItem>
        <h3>Basic</h3>
        <SC.SubList>
          <SC.Tariff>
            <span>$ </span> {isYear ? BASIC_YEAR : BASIC_MONTH}
          </SC.Tariff>
          <li>500 GB Storage</li>
          <li>2 Users Allowed</li>
          <li>Send up to 3 GB</li>
        </SC.SubList>
        <SC.PackBtn type="button">learn more</SC.PackBtn>
      </SC.PackItem>
      <SC.PackItem>
        {" "}
        <h3>Professional</h3>
        <SC.SubList>
          <SC.Tariff even="even">
            <span>$</span> {isYear ? PROFESSIONAL_YEAR : PROFESSIONL_MONTH}
          </SC.Tariff>
          <li>1 TB Storage</li>
          <li>5 Users Allowed</li>
          <li>Send up to 10 GB</li>
        </SC.SubList>
        <SC.PackBtn type="button" even="even">
          learn more
        </SC.PackBtn>
      </SC.PackItem>
      <SC.PackItem>
        {" "}
        <h3>Master</h3>
        <SC.SubList>
          <SC.Tariff>
            <span>$</span> {isYear ? MASTER_YEAR : MASTER_MONTH}
          </SC.Tariff>
          <li>2 TB Storage</li>
          <li>10 Users Allowed</li>
          <li>Send up to 20 GB</li>
        </SC.SubList>
        <SC.PackBtn type="button">learn more</SC.PackBtn>
      </SC.PackItem>
    </SC.PackListStyled>
  );
};

export default PacksList;
