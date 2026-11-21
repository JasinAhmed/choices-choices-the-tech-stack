import styles from "./PartnerCard.module.css";

export default function PartnerCard({ label, icon, text }) {
  return (
    <article className={styles.card}>
      <span className={styles.icon} style={{ "--icon": `url(${icon})` }}></span>
      <h3>{label}</h3>
      <p>{text}</p>
    </article>
  );
}
