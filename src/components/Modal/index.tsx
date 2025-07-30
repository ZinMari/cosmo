import { useEffect, ReactNode } from "react";
import { Text } from "../Text";
import cl from "classnames";

import styles from "./style.module.scss";
import { ModalInfo } from "@/src/constants/constants";
import { GlassCard } from "../GlassCard";
import { ModalButton } from "../ModalButton";

interface ModalProps {
  backgroundUrl: string;
  titleUrl: string;
  titleUrl2?: string;
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
  titleUrl2,
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
          <ModalButton type="close" onClick={onClickClose} />
          {isNext && <ModalButton type="next" onClick={onClickNext} />}
        </header>
        <h2 className={styles.modal__title}>
          <span>
            <img
              className={cl({
                [styles.modal__title_type_single]: !titleUrl2,
                [styles.modal__title_type_first]: titleUrl2,
              })}
              src={titleUrl}
              alt={title}
            />
          </span>
          {titleUrl2 && (
            <span>
              <img
                className={styles.modal__title_type_last}
                src={titleUrl2}
                alt=""
              />
            </span>
          )}
        </h2>
        <Text className={styles.modal__text}>{contentBlock}</Text>
        <div className={styles.modal__content}>
          <div className={styles.modal__images}>
            {listImages.map((item, id) => (
              <GlassCard
                key={id}
                type={item.type}
                imageUrl={item.src}
                className={styles[`modal__image${id + 1}`]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
