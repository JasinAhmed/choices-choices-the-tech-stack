import { Fragment } from "react";
import SectionTitle from "@/components/molecules/SectionTitle";
import styles from "./Value.module.css";

export default function Value({ subtitle, title, image, values = [] }) {
  return (
    <section id="waarde-levering" className={styles.value}>
      <SectionTitle subtitle={subtitle} h2={title} />

      <dl>
        {values.map((value) => (
          <Fragment key={value.title}>
            <dt>{value.title}</dt>
            <dd>{value.description}</dd>
          </Fragment>
        ))}
      </dl>

      <picture>
        <img src={image} alt="" />
      </picture>
    </section>
  );
}
