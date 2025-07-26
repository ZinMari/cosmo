import styles from "./style.module.scss";
import cl from "classnames";
import React, { ReactNode } from "react";

interface TitleProps {
  size?: "medium" | "large" | "small";
  children: ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({
  size = "medium",
  children,
  className,
}) => {
  return (
    <h2 className={cl(styles.title, styles[`title_size_${size}`], className)}>
      {children}
    </h2>
  );
};
