import cl from "classnames";
import styles from "./style.module.scss";
import { useState } from "react";
import { ANIMATED_MENU_ITEMS } from "@/src/constants/constants";

interface AnimatedMenuProps {
  className?: string;
}

export const AnimatedMenu: React.FC<AnimatedMenuProps> = ({ className }) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <>
      <div className={cl(styles.animatedMenu, className)}>
        {ANIMATED_MENU_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className={cl(
              styles.animatedMenu__item,
              activeItem === index && styles.animatedMenu__item_active
            )}
          >
            <span
              className={styles.animatedMenu__decor}
              onClick={() => setActiveItem(index)}
            />
            <div
              className={cl(
                styles.animatedMenu__itemWrap,
                activeItem === 0 && styles.animatedMenu__itemWrap_pink
              )}
              onClick={() => setActiveItem(index)}
            >
              <div className={styles.animatedMenu__content}>
                <span className={styles.animatedMenu__number}>{item.id}</span>
                <h4 className={styles.animatedMenu__title}>{item.title}</h4>
                {item.text && (
                  <p className={styles.animatedMenu__text}>{item.text}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.animatedMenu__bg}>
        {ANIMATED_MENU_ITEMS.map((item, index) => (
          <div
            key={item.id}
            style={{ backgroundImage: `url('${item.imageUrl}')` }}
            className={cl(
              styles.animatedMenu__image,
              activeItem === index && styles.animatedMenu__image_active
            )}
          ></div>
        ))}
      </div>
    </>
  );
};
