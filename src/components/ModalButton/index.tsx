import cl from "classnames";
import { ArtButton } from "../ArtButton";

import styles from "./style.module.scss";

interface ModalButtonProps {
  className?: string;
  type: "next" | "close";
  onClick: () => void;
}

export const ModalButton: React.FC<ModalButtonProps> = ({
  className,
  onClick,
  type,
}) => {
  return (
    <div className={cl(styles.modalButton, className)}>
      {type === "close" ? (
        <>
          <ArtButton
            className={cl(styles.modalButton_type_max, styles.closeButtonMax)}
            onClick={onClick}
            type="transparent"
          >
            Close
          </ArtButton>
          <button
            className={cl(styles.modalButton_type_min, styles.closeButtonMin)}
            onClick={onClick}
          ></button>
        </>
      ) : (
        <>
          <ArtButton
            onClick={onClick}
            type="white"
            className={cl(styles.modalButton_type_max, styles.nextButtonMax)}
          >
            <span>Next</span>
            <svg
              width="26"
              height="12"
              viewBox="0 0 26 12"
              fill="none"
              className={styles.nextButtonMax__arrow}
            >
              <path
                d="M1 6H24.5M24.5 6L19.5 1M24.5 6L19.5 11"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </ArtButton>
          <button
            className={cl(styles.modalButton_type_min, styles.nextButtonMin)}
            onClick={onClick}
          >
            <svg viewBox="0 0 26 12" className={styles.nextButtonMin__arrow}>
              <path
                d="M1 6H24.5M24.5 6L19.5 1M24.5 6L19.5 11"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};
