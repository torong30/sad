import { FunctionComponent } from "react";
import styles from "./FrameComponent11.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <img
        className={styles.mrbaker3Icon}
        loading="lazy"
        alt=""
        src="/mrbaker-3@2x.png"
      />
      <div className={styles.mrbakerParent}>
        <h1 className={styles.mrbaker}>
          <span>MR</span>
          <span className={styles.baker}>BAKER</span>
        </h1>
        <div className={styles.mRBAKERLabel}>
          <div className={styles.nbpBuilding38}>
            NBP Building, 38 Aurora Blvd, San Juan, 1500 Metro Manila
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
