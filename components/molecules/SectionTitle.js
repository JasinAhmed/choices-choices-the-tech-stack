import styles from "./SectionTitle.module.css";

export default function SectionTitle({ subtitle, h2, p }) {
  return (
    <hgroup className={styles.hgroup}>
      {subtitle && <span>{subtitle}</span>}
      {h2 && <h2>{h2}</h2>}
      {p && <p>{p}</p>}
    </hgroup>
  );
}
