import Button from "@/components/atoms/Button";
import styles from "./DemoSection.module.css";

export default function DemoSection({ subtitle, title, description, items = [] }) {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className={styles.label}>{subtitle}</span>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
        <ol>
          {items.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ol>

        <Button
          href="mailto:frank.kloos@fonetic.studio"
          classes="footer demo-contact"
          content="frank.kloos@fonetic.studio"
        />

        <p className={styles.note}>
          Prologg for Legal · Forensische Keten van Bewijs · Ontwikkeld voor
          gespecialiseerde rechtspraktijken
        </p>
      </div>
    </section>
  );
}
