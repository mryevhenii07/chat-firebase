export default function Statistics(data) {
  //   random color:
  // const getRandomHexColor = () => {
  //   return #${Math.floor(Math.random() * 16777215).toString(16)};
  // };

  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {data.stats.map((item) => (
          <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
