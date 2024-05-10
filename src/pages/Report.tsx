import { FunctionComponent, useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent11";
import { useNavigate } from "react-router-dom";
import styles from "./Report.module.css";

const Report: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPngaaa1IconClick = useCallback(() => {
    navigate("/weekly-sales");
  }, [navigate]);

  const onAdministratorXxl1IconClick = useCallback(() => {
    navigate("/user-management");
  }, [navigate]);

  const onImage2IconClick = useCallback(() => {
    navigate("/categories");
  }, [navigate]);

  const onImage3IconClick = useCallback(() => {
    navigate("/in-stocks");
  }, [navigate]);

  const onImage5IconClick = useCallback(() => {
    navigate("/inventory");
  }, [navigate]);

  const onImage6IconClick = useCallback(() => {
    navigate("/sales");
  }, [navigate]);

  const onImage44IconClick = useCallback(() => {
    navigate("/login1");
  }, [navigate]);

  return (
    <div className={styles.report}>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <FrameComponent1 />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <div className={styles.pngaaa1Wrapper}>
                <img
                  className={styles.pngaaa1Icon}
                  loading="lazy"
                  alt=""
                  src="/pngaaa-1@2x.png"
                  onClick={onPngaaa1IconClick}
                />
              </div>
              <div className={styles.administratorXxl1Wrapper}>
                <img
                  className={styles.administratorXxl1Icon}
                  loading="lazy"
                  alt=""
                  src="/administratorxxl-1@2x.png"
                  onClick={onAdministratorXxl1IconClick}
                />
              </div>
              <div className={styles.image2Wrapper}>
                <img
                  className={styles.image2Icon}
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                  onClick={onImage2IconClick}
                />
              </div>
              <div className={styles.image3Wrapper}>
                <img
                  className={styles.image3Icon}
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                  onClick={onImage3IconClick}
                />
              </div>
              <div className={styles.image5Wrapper}>
                <img
                  className={styles.image5Icon}
                  loading="lazy"
                  alt=""
                  src="/image-5@2x.png"
                  onClick={onImage5IconClick}
                />
              </div>
              <div className={styles.image6Wrapper}>
                <img
                  className={styles.image6Icon}
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                  onClick={onImage6IconClick}
                />
              </div>
              <button className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.image7Icon}
                  alt=""
                  src="/image-7@2x.png"
                />
              </button>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.inventoryReportParent}>
                <div className={styles.inventoryReport}>Inventory Report</div>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <button className={styles.image35Parent}>
                      <img
                        className={styles.image35Icon}
                        alt=""
                        src="/image-35@2x.png"
                      />
                      <img
                        className={styles.image37Icon}
                        alt=""
                        src="/image-37@2x.png"
                      />
                    </button>
                    <img
                      className={styles.image36Icon}
                      loading="lazy"
                      alt=""
                      src="/image-36@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.image37Icon1} alt="" src="/image-34@2x.png" />
          <img
            className={styles.image44Icon}
            loading="lazy"
            alt=""
            src="/image-38@2x.png"
            onClick={onImage44IconClick}
          />
        </div>
      </section>
      <section className={styles.salesAndInventoryContainer}>
        <p className={styles.salesAnd}>SALES AND</p>
        <p className={styles.inventorySystem}> INVENTORY SYSTEM</p>
      </section>
    </div>
  );
};

export default Report;
