import React, { useState } from "react";
import Image from "next/image";
import cl from "classnames";

import styles from "./style.module.scss";

import { GALLERY_ITEMS } from "@/src/constants/constants";

interface GalleryProps {
  className?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cl(className, styles.gallery)}>
      <div className={styles.gallery__container}>
        {GALLERY_ITEMS.map((item, index) => (
          <div
            className={cl(
              styles.gallery__item,
              activeIndex === index && styles.gallery__item_active
            )}
            key={item.id}
            onClick={() => setActiveIndex(index)}
          >
            <div className={styles.gallery__card}>
              <div className={styles.gallery__image}>
                <Image src={item.imageUrl} alt={item.title} fill={true} />
              </div>
              <div className={styles.gallery__position}>{item.position}</div>
              <h4 className={styles.gallery__title}>{item.title}</h4>
            </div>
            <div className={styles.gallery__description}>
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                className={styles.galleryDescriptionStar}
              >
                <path
                  d="M32.0377 15.8232C32.7571 15.9876 32.7571 17.0124 32.0377 17.1768L20.3655 19.8433C20.1056 19.9027 19.9027 20.1056 19.8433 20.3655L17.1767 32.0377C17.0124 32.7571 15.9876 32.7571 15.8232 32.0377L13.1567 20.3655C13.0973 20.1056 12.8944 19.9027 12.6345 19.8433L0.962295 17.1767C0.242854 17.0124 0.242858 15.9876 0.962295 15.8232L12.6345 13.1567C12.8944 13.0973 13.0973 12.8944 13.1567 12.6345L15.8232 0.962294C15.9876 0.242855 17.0124 0.242856 17.1768 0.962295L19.8433 12.6345C19.9027 12.8944 20.1056 13.0973 20.3655 13.1567L32.0377 15.8232Z"
                  fill="white"
                />
              </svg>
              <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </div>
          </div>
        ))}
      </div>
      <Image
        className={styles.gallery__drag}
        src="/gallery/drag_drag_drag.png"
        alt="Drag Drag Drag"
        width={300}
        height={300}
      />
    </div>
  );
};
