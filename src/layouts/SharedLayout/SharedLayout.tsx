import * as SC from "./SharedLayoutStyled"

import { ChildProps } from "@/utils/types";

const SharedLayout:React.FC<ChildProps> = ({children}) => {
    return ( 
        <SC.SharedLayoutCon>{children}</SC.SharedLayoutCon>
     );
}
 
export default SharedLayout;