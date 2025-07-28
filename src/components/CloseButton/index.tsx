import { ReactNode } from "react";
import cl from "classnames";
import { ArtButton } from "../ArtButton";

import styles from "./style.module.scss";

interface CloseButtonProps {
  className?: string;
  onClick: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  className,
  onClick,
}) => {
  return (
    <div className={cl(className, styles.closeButton)}>
      <ArtButton
        className={styles.closeButton_type_max}
        onClick={onClick}
        type="transparent"
      >
        Close
      </ArtButton>
      <button
        className={styles.closeButton_type_min}
        onClick={onClick}
      ></button>
    </div>
  );
};
