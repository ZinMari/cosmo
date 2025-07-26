import cl from "classnames";

import styles from "./style.module.scss";
import React from "react";
import Image from "next/image";

interface GlassCardProps {
  imageUrl: string;
  type: "color" | "dark";
  imgNumber: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  imgNumber,
  imageUrl,
  type,
}) => {
  return (
    <div
      className={cl(
        styles.glassCard,
        styles[`glassCard_type_${type}`],
        styles[`glassCard__item${imgNumber}`]
      )}
    >
      <Image
        src={imageUrl}
        alt="Card"
        className={styles.glassCard__image}
        fill={true}
      />
    </div>
  );
};
