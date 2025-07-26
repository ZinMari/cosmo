import Image from "next/image";
import cl from "classnames";
import styles from "./style.module.scss";
import { ArtButton, TypeArtButton } from "../ArtButton";

interface ArtMenuItemProps {
  id: number;
  href: string;
  image: string;
  title: string;
  isOpened: boolean;
  onClick: (event: React.MouseEvent) => void;
  onClickButton: () => void;
}

const getTypeById = (id: number): TypeArtButton => {
  if (id === 1) {
    return "yellowPink";
  }

  if (id === 2) {
    return "blue";
  }

  if (id === 3) {
    return "bluePurple";
  }

  return "greenYellow";
};

export const ArtMenuItem: React.FC<ArtMenuItemProps> = ({
  id,
  image,
  title,
  isOpened,
  onClick,
  onClickButton,
}) => {
  return (
    <div
      onClick={onClick}
      className={cl(styles.artMenuItem, isOpened && styles.artMenuItem_active)}
    >
      <h3 className={styles.artMenuItem__title}>{title}</h3>
      <div className={cl(styles.artMenuItem__card)}>
        <ArtButton
          type={getTypeById(id)}
          onClick={onClickButton}
          className={styles.artMenuItem__button}
        >
          More
        </ArtButton>
        <Image
          className={styles.artMenuItem__image}
          src={image}
          alt={title}
          width="271"
          height="184"
        />
      </div>
      <span className={styles.artMenuItem__decorator} />
    </div>
  );
};
