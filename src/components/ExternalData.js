import React, { useState } from "react";
// 외부 스타일 문서 적용
import "../assets/style/ExternalStyle.css";
// 외부 coffeeList.js 문서 적용
import coffeeList from "../assets/DB/coffeeList";

const ExternalData = () => {
  const [coffee, setCoffee] = useState(coffeeList);

  return (
    <section>
      <h2>외부 데이터 불러오기</h2>
      <table className="cafe">
        <caption>카페 메뉴</caption>
        <thead>
          <tr>
            <th>커피</th>
            <th>차</th>
            <th>음료</th>
            <th>기타</th>
          </tr>
        </thead>
        <tbody>
          {/* {coffee.map((data) => (
            <tr key={data.id}>
              <td>{data.coffee}</td>
              <td>{data.tea}</td>
              <td>{data.drinks}</td>
              <td>{data.others}</td>
            </tr>
          ))} */}
          {coffee.map(({ id, coffee, tea, drinks, others }) => (
            <tr key={id}>
              <td>{coffee}</td>
              <td>{tea}</td>
              <td>{drinks}</td>
              <td>{others}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ExternalData;
