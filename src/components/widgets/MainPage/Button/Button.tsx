import React from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Button({
  children,
  className,
  style,
}: IButtonProps): JSX.Element {
  return (
    <button className={`${styles.button} ${className}`} style={style}>
      {children}
    </button>
  );
}
