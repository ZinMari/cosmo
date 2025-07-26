import { useEffect, ReactNode } from "react";
import { ArtButton } from "../ArtButton";
import { Text } from "../Text";

import styles from "./style.module.scss";
import { ModalInfo } from "@/src/constants/constants";
import { GlassCard } from "../GlassCard";

interface ModalProps {
  backgroundUrl: string;
  titleUrl: string;
  onClickClose: () => void;
  onClickNext: () => void;
  title: string;
  contentBlock: ReactNode;
  listImages: ModalInfo["listImages"];
  isNext: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  backgroundUrl,
  titleUrl,
  onClickClose,
  onClickNext,
  title,
  contentBlock,
  listImages,
  isNext,
}) => {
  useEffect(() => {
    document.body.classList.add("bodyOverflow");

    return () => {
      document.body.classList.remove("bodyOverflow");
    };
  }, []);

  return (
    <div
      className={styles.modal}
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className={styles.modal__container}>
        <header className={styles.modal__header}>
          <ArtButton
            onClick={onClickClose}
            type="transparent"
            className={styles.modal__button}
          >
            Close
          </ArtButton>
          {isNext && (
            <ArtButton
              onClick={onClickNext}
              type="white"
              className={styles.modal_button}
            >
              <span>Next</span>
              <svg
                width="26"
                height="12"
                viewBox="0 0 26 12"
                fill="none"
                className={styles.modal__arrow}
              >
                <path
                  d="M1 6H24.5M24.5 6L19.5 1M24.5 6L19.5 11"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </ArtButton>
          )}
        </header>
        <h2
          style={{
            backgroundImage: `url(${titleUrl})`,
          }}
          className={styles.modal__title}
        >
          {title}
        </h2>
        <Text className={styles.modal__text}>{contentBlock}</Text>
        <div className={styles.modal__content}>
          {/* <div className={styles.cardList}>{imageBlock}</div> */}
          <div className={styles.modal__images}>
            {listImages.map((item, id) => (
              <GlassCard
                key={id}
                imgNumber={id + 1}
                type={item.type}
                imageUrl={item.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
