import cl from "classnames";
import styles from "./style.module.scss";

interface BurgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const Burger: React.FC<BurgerProps> = ({
  className,
  onClick,
  isOpen,
}) => {
  return (
    <button
      onClick={onClick}
      className={cl(styles.burger, { [styles.burger_open]: isOpen }, className)}
    >
      <span className={cl(styles.burger__line)}></span>
    </button>
  );
};
