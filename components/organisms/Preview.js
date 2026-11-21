import SectionTitle from "@/components/molecules/SectionTitle";
import UspBlock from "@/components/molecules/UspBlock";
import PreviewBanner from "@/components/molecules/PreviewBanner";
import styles from "./Preview.module.css";

// In Svelte waren dit drie losse componenten (PreviewInfo, PreviewUsp, PreviewBanner).
// PreviewInfo en PreviewUsp waren zo klein dat ze hier samengevoegd zijn.
export default function Preview({ subtitle, title, description, usps = [] }) {
  return (
    <section id="hoe-het-werkt" className={styles.preview}>
      <div className={styles.grid}>
        <div className={styles.info}>
          <SectionTitle subtitle={subtitle} h2={title} p={description} />
        </div>

        <div className={styles.phone}>
          <img src="/assets/phone-preview.webp" alt="" />
        </div>

        <div>
          {usps.map((usp) => (
            <UspBlock
              key={usp.number}
              count={usp.number}
              subTitle={usp.subtitle}
              title={usp.title}
              text={usp.description}
            />
          ))}
        </div>

        <PreviewBanner />
      </div>
    </section>
  );
}
