import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import styles from "./InStocks.module.css";

const InStocks: FunctionComponent = () => {
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

  const onImage5IconClick = useCallback(() => {
    navigate("/inventory");
  }, [navigate]);

  const onImage6IconClick = useCallback(() => {
    navigate("/sales");
  }, [navigate]);

  const onImage7IconClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onImage42IconClick = useCallback(() => {
    navigate("/login1");
  }, [navigate]);

  return (
    <div className={styles.inStocks}>
      <section className={styles.salesAndInventorySystemParent}>
        <h2 className={styles.salesAndInventoryContainer}>
          <p className={styles.salesAnd}>SALES AND</p>
          <p className={styles.inventorySystem}> INVENTORY SYSTEM</p>
        </h2>
        <div className={styles.serial}>Serial #</div>
        <div className={styles.name}>Name</div>
        <div className={styles.expDate}>Exp. Date</div>
        <div className={styles.retailPrice}>Retail Price</div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <FrameComponent mRBAKERDebugCommit="unset" />
          <div className={styles.frameParent}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <div className={styles.productImageWrapper}>
                <div className={styles.productImage}>
                  <div className={styles.pngaaa1Wrapper}>
                    <img
                      className={styles.pngaaa1Icon}
                      loading="lazy"
                      alt=""
                      src="/pngaaa-1@2x.png"
                      onClick={onPngaaa1IconClick}
                    />
                  </div>
                  <img
                    className={styles.administratorXxl1Icon}
                    loading="lazy"
                    alt=""
                    src="/administratorxxl-1@2x.png"
                    onClick={onAdministratorXxl1IconClick}
                  />
                </div>
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
              <div className={styles.addButton}>
                <div className={styles.secondImage}>
                  <div className={styles.secondImageChild} />
                  <img
                    className={styles.image3Icon}
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
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
              <div className={styles.image7Wrapper}>
                <img
                  className={styles.image7Icon}
                  loading="lazy"
                  alt=""
                  src="/image-7@2x.png"
                  onClick={onImage7IconClick}
                />
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.itemsListParent}>
                <div className={styles.itemsList}>
                  <div className={styles.inStocksParent}>
                    <div className={styles.inStocks1}>In Stocks</div>
                    <div className={styles.itemsWrapper}>
                      <div className={styles.items}>Items:</div>
                    </div>
                  </div>
                  <div className={styles.itemsListInner}>
                    <div className={styles.frameGroup}>
                      <div className={styles.frameContainer}>
                        <div className={styles.image22Parent}>
                          <img
                            className={styles.image22Icon}
                            alt=""
                            src="/image-22@2x.png"
                          />
                          <img
                            className={styles.image23Icon}
                            loading="lazy"
                            alt=""
                            src="/image-23@2x.png"
                          />
                        </div>
                      </div>
                      <img
                        className={styles.image25Icon}
                        loading="lazy"
                        alt=""
                        src="/image-25@2x.png"
                      />
                      <div className={styles.frameDiv}>
                        <div className={styles.rectangleContainer}>
                          <div className={styles.rectangleDiv} />
                          <div className={styles.add}>Add</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.fourthImage}>
                  <img
                    className={styles.image32Icon}
                    loading="lazy"
                    alt=""
                    src="/image-32@2x.png"
                  />
                </div>
                <img
                  className={styles.image37Icon}
                  loading="lazy"
                  alt=""
                  src="/image-34@2x.png"
                />
              </div>
            </div>
          </div>
          <img
            className={styles.image42Icon}
            loading="lazy"
            alt=""
            src="/image-38@2x.png"
            onClick={onImage42IconClick}
          />
        </div>
      </section>
    </div>
  );
};

export default InStocks;
