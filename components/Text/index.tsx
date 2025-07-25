import cl from "classnames";
import styles from "./style.module.scss";
import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, className }) => {
  return <div className={cl(className, styles.text)}>{children}</div>;
};
