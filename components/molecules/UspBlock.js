import styles from "./UspBlock.module.css";

export default function UspBlock({ count, subTitle, title, text }) {
  return (
    <article className={styles.usp}>
      <div className={styles.countCircle}>{count}</div>
      <section className={styles.body}>
        <div className={styles.wrapper}>
          <p className={styles.subTitle}>{subTitle}</p>
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </section>
    </article>
  );
}
