import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: ${(props) => (props.size ? props.size : "70vw")};
  border: 1px solid #000;
  margin: 50px auto;
  padding: 20px;
`;
const Title = styled.h2`
  font-family: "나눔고딕", sans-serif;

  border-bottom: double 3px #000;
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
  margin: 10px 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
  &:hover {
    background-color: #83a2ff;
  }
  &.plus::after {
    content: "👍";
  }
  &.minus::after {
    content: "👎";
  }
  &:disabled {
    background-color: red;
    filter: grayscale(50%);
  }
`;

const Ex1Style = () => {
  const [count, setCount] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);

  const increment = () => {
    // setCount(count >= max ? max : count + 1);
    setCount((num) => (num >= max ? max : num + 1));
  };
  const decrement = () => {
    // setCount(count >= min ? min : count - 1);
    // setCount(count - 1);
    setCount((num) => (num === min ? min : num - 1));
  };

  return (
    <Box size="300px">
      {/* 0이하, 10이상으로 커지면 버튼 비활성화 */}
      <Title>count : {count}</Title>
      {/* 이 버튼을 클릭하면 1씩 증가 👍 */}
      <Button className="plus" onClick={increment} disabled={count === max} />
      {/* 이 버튼을 클릭하면 1씩 감소 👎 */}
      <Button className="minus" onClick={decrement} disabled={count === min} />
    </Box>
  );
};

export default Ex1Style;
