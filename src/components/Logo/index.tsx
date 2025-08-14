import Link from "next/link";
import cl from "classnames";
import styles from "./style.module.scss";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <h1 className={cl(styles.logo, className)}>
      <Link href="/">Dusktopia</Link>
    </h1>
  );
};
