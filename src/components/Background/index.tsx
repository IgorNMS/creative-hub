import React from "react";
import styles from "./background.module.css";

type BackgroundProps = {
  children: React.ReactNode;
};

const HEXAGONS_PER_ROW = 64;
const TOTAL_ROWS = 24;

export default function Background({ children }: BackgroundProps) {
  const renderHexagons = (count: number) =>
    Array.from({ length: count }, (_, index) => (
      <div key={index} className={styles.hexagon}></div>
    ));

  const renderRows = (rowCount: number, hexagonsPerRow: number) =>
    Array.from({ length: rowCount }, (_, rowIndex) => (
      <div key={rowIndex} className={styles.backgroundRow}>
        {renderHexagons(hexagonsPerRow)}
      </div>
    ));

  return (
    <div className={styles.generalContainer}>
      <div className={styles.containerChildren}>{children}</div>
      <div className={styles.backgroundContainer}>
        {renderRows(TOTAL_ROWS, HEXAGONS_PER_ROW)}
      </div>
    </div>
  );
}
