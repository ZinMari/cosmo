import cl from "classnames";

import styles from "./style.module.scss";
import React from "react";
import Image from "next/image";

interface GlassCardProps {
  imageUrl: string;
  className: string;
  type: "color" | "dark";
}

export const GlassCard: React.FC<GlassCardProps> = ({
  imageUrl,
  type,
  className,
}) => {
  return (
    <div
      className={cl(
        className,
        styles.glassCard,
        styles[`glassCard_type_${type}`]
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
