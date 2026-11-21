import PartnerCard from "@/components/molecules/PartnerCard";
import SectionTitle from "@/components/molecules/SectionTitle";
import styles from "./PartnerSection.module.css";

export default function PartnerSection({ subtitle, title, description, partners = [] }) {
  return (
    <section id="partners" className={styles.section}>
      <header className={styles.header}>
        <SectionTitle subtitle={subtitle} h2={title} p={description} />
      </header>

      <ul className={styles.cards}>
        {partners.map((card) => (
          <li key={card.title}>
            <PartnerCard label={card.title} icon={card.image} text={card.description} />
          </li>
        ))}
      </ul>
    </section>
  );
}
