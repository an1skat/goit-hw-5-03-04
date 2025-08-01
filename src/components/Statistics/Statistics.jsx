import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
  const genRandColor = () =>
    "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            style={{ backgroundColor: genRandColor() }}
            className={css.item}
            key={id}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
