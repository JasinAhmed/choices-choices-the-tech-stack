import { Fragment } from "react";
import SectionTitle from "@/components/molecules/SectionTitle";
import styles from "./WhyPrologg.module.css";

export default function WhyPrologg({ subtitle, title, reasons = [] }) {
  return (
    <section id="waarom-prologg" className={styles.section}>
      <div className={styles.content}>
        <header>
          <SectionTitle subtitle={subtitle} h2={title} />
        </header>

        <dl className={styles.reasons}>
          {reasons.map(({ title, description }) => (
            <Fragment key={title}>
              <dt>{title}</dt>
              <dd>{description}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
}
