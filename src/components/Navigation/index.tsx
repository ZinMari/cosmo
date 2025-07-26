import Link from "next/link";
import cl from "classnames";
import styles from "./style.module.scss";
import { Fragment } from "react";
import { NAVIGATION_LINKS } from "@/src/constants/constants";

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      {NAVIGATION_LINKS.map((link, id) => (
        <Fragment key={link.id}>
          <Link
            href={link.href}
            className={cl(
              styles.navigation__link,
              link.active && styles.navigation__link_active
            )}
          >
            {link.title}
          </Link>
          {id < NAVIGATION_LINKS.length - 1 && (
            <span className={styles.navigation__star} />
          )}
        </Fragment>
      ))}
    </nav>
  );
};
