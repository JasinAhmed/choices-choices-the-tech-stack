import styles from "./Button.module.css";

// `classes` is een spatie-gescheiden lijst varianten, net als in de Svelte-versie
// (bijv. "footer demo-contact"). CSS Modules hashen classnames, dus we mappen ze.
export default function Button({ href, classes = "", content }) {
  const className = [styles.button, ...classes.split(" ").map((c) => styles[c])]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
