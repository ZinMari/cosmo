import cl from "classnames";
import styles from "./style.module.scss";
import { LOGOS } from "@/src/constants/constants";

interface LogoListProps {
  className?: string;
}

export function LogoList({ className }: LogoListProps) {
  return (
    <ul className={cl(className, styles.logoList)}>
      {LOGOS.map(({ id, title }) => (
        <li key={id} className={styles.logoList__item}>
          <span className={styles.logoList__text}>{title}</span>
          <span className={styles.logoList__angleLeft} />
          <span className={styles.logoList__angleRight} />
        </li>
      ))}
    </ul>
  );
}
