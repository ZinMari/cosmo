import { ReactNode } from "react";
import cl from "classnames";

import styles from "./style.module.scss";

export type TypeArtButton =
  | "bluePurple"
  | "greenYellow"
  | "blue"
  | "yellowPink"
  | "transparent"
  | "white";

interface ArtButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  type?: TypeArtButton;
}

export const ArtButton: React.FC<ArtButtonProps> = ({
  onClick,
  children,
  className,
  type,
}) => {
  return (
    <button
      className={cl(
        styles.artButton,
        type && styles.artButton__type,
        type && styles[`artButton__type_${type}`],
        className
      )}
      onClick={onClick}
    >
      <span className={styles.artButton__text}>{children}</span>
      <span className={styles.artButton__angleLeft} />
      <span className={styles.artButton__angleRight} />
    </button>
  );
};
