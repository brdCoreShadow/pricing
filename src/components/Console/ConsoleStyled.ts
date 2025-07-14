import styled from "@emotion/styled";

import switchRight from "../../assets/images/switchRight.png"

export const ConsoleCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

margin-bottom: 80px;

&>button{
    width: 56px;
    height: 32px;

    margin-right: 24px;

    background-image: url(${switchRight});
}

& > span{
    font-size: 15px;
    line-height: 1.9;
    font-weight: 700;

    color: #6E728E;

    &:not(:last-of-type){
        margin-right: 24px;
    }
}
`