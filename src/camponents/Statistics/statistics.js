import styles from "./Statistics.module.css";
export default function Statistics(data) {
  //   random color:
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statList}>
        {data.stats.map((item) => (
          <li
            className={styles.item}
            key={item.id}
            style={{ backgroundColor: `${getRandomHexColor()}` }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
