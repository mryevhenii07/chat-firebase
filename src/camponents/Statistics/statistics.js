import styles from "./Statistics.module.css";
import PropTypes from "prop-types";
export default function Statistics({ title, stats }) {
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((item) => (
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
