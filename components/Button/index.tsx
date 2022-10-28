import React from "react";
import styles from "./button.module.scss";
export  function Button({
  text,
  icon,
  onClick,
  type,
}: {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "primary" | "secondary";
}) {
  return (
    <button onClick={onClick} className={`btn ${styles[type]}`}>
      {icon}
      {text}
    </button>
  );
}