import Button from "@/components/atoms/Button";
import styles from "./Hero.module.css";

export default function Hero({
  title,
  description,
  imageWebpFallback,
  imageWebp,
  imageAvif,
  buttons = [],
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h1>{title}</h1>
          <div>
            <p>{description}</p>
            <div className={styles.buttons}>
              {buttons.map((button) => (
                <Button
                  key={button.href}
                  href={button.href}
                  classes={button.variant}
                  content={button.content}
                />
              ))}
            </div>
          </div>
        </div>
        <picture className={styles.picture}>
          <source srcSet={imageAvif} type="image/avif" sizes="(max-width: 600px) 400px, 700px" />
          <source srcSet={imageWebp} type="image/webp" sizes="(max-width: 600px) 400px, 700px" />
          <img src={imageWebpFallback} alt="person logging using prologg webapp" />
        </picture>
      </div>
    </section>
  );
}
