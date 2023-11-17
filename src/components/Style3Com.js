import React from "react";
import styled, { css } from "styled-components";

// ${props => props.props명 }
const Wrapper = styled.div`
  width: ${(props) => props.wt};
  border: 1px solid #000;
  margin: 20px auto;
  background-color: ${(props) => (props.bg ? props.bg : "orange")};
`;
const Title = styled.h2`
  text-align: center;
`;
const Box = styled.button`
  text-align: center;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "pink")};
  border: none;
  margin: 10px;
  padding: 5px 10px;
  width: ${(props) => (props.width ? props.width : "100px")};
  /* 조건부 스타일링  
    ${(props) => props.primary && css``}
    props.primary이 true일 때 적용
  */
  ${(props) =>
    props.primary &&
    css`
      background-color: #000;
      color: #fff;
      width: 80%;
      display: block;
      &:hover {
        background-color: maroon;
      }
    `}
`;

const Style3Com = () => {
  return (
    // 사용자 정의 props명 -> wt
    <Wrapper wt="70vw" bg="#ddd">
      <Title>styled-components</Title>
      <Box width="120px" bgcolor="tomato">
        box1
      </Box>
      <Box width="200px" bgcolor="lightblue">
        box2
      </Box>
      <Box>box3</Box>
      <Box primary>box4</Box>
    </Wrapper>
  );
};

export default Style3Com;
