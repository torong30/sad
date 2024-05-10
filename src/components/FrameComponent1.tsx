import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponentType = {
  /** Style props */
  mRBAKERDebugCommit?: CSSProperties["debugCommit"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  mRBAKERDebugCommit,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: mRBAKERDebugCommit,
    };
  }, [mRBAKERDebugCommit]);

  return (
    <div className={styles.rectangleParent} style={frameDivStyle}>
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
        <div className={styles.nbpBuilding38AuroraBlvdWrapper}>
          <div className={styles.nbpBuilding38}>
            NBP Building, 38 Aurora Blvd, San Juan, 1500 Metro Manila
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
