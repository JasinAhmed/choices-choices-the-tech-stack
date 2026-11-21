import SectionTitle from "@/components/molecules/SectionTitle";
import Button from "@/components/atoms/Button";
import styles from "./GetInvolved.module.css";

export default function GetInvolved({ subtitle, title, cards = [] }) {
  return (
    <section id="doe-mee" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle subtitle={subtitle} h2={title} />

        <ol className={styles.list}>
          {cards.map((card) => (
            <li key={card.number}>
              <article className={styles.card}>
                <p className={styles.number}>{card.number}</p>
                <h3>{card.title}</h3>
                <p className={styles.description}>{card.description}</p>
                {card.button && (
                  <div className={styles.cta}>
                    <Button href={card.button.href} classes="cta" content={card.button.content} />
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
