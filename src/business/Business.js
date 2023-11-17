import BusinessList from "./BusinessList";

// 최상위 컴포넌트: section
const Business = () => {
  return (
    <section>
      <h2>BUSINESS</h2>
      <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
      <BusinessList />
      <a href="#">view more</a>
    </section>
  );
};

export default Business;
