import { FunctionComponent, useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent11";
import { useNavigate } from "react-router-dom";
import styles from "./Sales.module.css";

const Sales: FunctionComponent = () => {
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

  const onImage7IconClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onImage45IconClick = useCallback(() => {
    navigate("/login1");
  }, [navigate]);

  return (
    <div className={styles.sales}>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <FrameComponent1 />
        <div className={styles.frameParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
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
                <img
                  className={styles.image3Icon}
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                  onClick={onImage3IconClick}
                />
                <div className={styles.image5Wrapper}>
                  <img
                    className={styles.image5Icon}
                    loading="lazy"
                    alt=""
                    src="/image-5@2x.png"
                    onClick={onImage5IconClick}
                  />
                </div>
              </div>
            </div>
            <button className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
            </button>
            <div className={styles.emptyImage}>
              <img
                className={styles.image7Icon}
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
                onClick={onImage7IconClick}
              />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.salesRecordsWrapper}>
                <div className={styles.salesRecords}>Sales Records</div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.frameWrapper1}>
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
                <div className={styles.frameWrapper2}>
                  <div className={styles.groupDiv}>
                    <div className={styles.frameChild1} />
                    <div className={styles.byCategoryLabel}>
                      <div className={styles.byCategory}>By Category</div>
                    </div>
                    <div className={styles.image25Parent}>
                      <img
                        className={styles.image25Icon}
                        alt=""
                        src="/image-25@2x.png"
                      />
                      <img
                        className={styles.clipart539437Icon}
                        alt=""
                        src="/clipart53943-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.image37Wrapper}>
                  <img
                    className={styles.image37Icon}
                    loading="lazy"
                    alt=""
                    src="/image-34@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.rectangleParent1}>
                <div className={styles.frameChild2} />
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild3} />
                  <div className={styles.productNameWrapper}>
                    <div className={styles.productName}>Product Name</div>
                  </div>
                  <div className={styles.productCodeWrapper}>
                    <div className={styles.productCode}>Product Code</div>
                  </div>
                  <div className={styles.quantityWrapper}>
                    <div className={styles.quantity}>Quantity</div>
                  </div>
                  <div className={styles.returnWrapper}>
                    <div className={styles.return}>Return</div>
                  </div>
                  <div className={styles.totalSalesWrapper}>
                    <div className={styles.totalSales}>Total Sales</div>
                  </div>
                </div>
                <div className={styles.lineDiv} />
                <div className={styles.frameChild4} />
                <div className={styles.frameChild5} />
                <div className={styles.frameChild6} />
              </div>
            </div>
            <div className={styles.productImage}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.image20Icon}
                  loading="lazy"
                  alt=""
                  src="/image-20@2x.png"
                />
                <img
                  className={styles.image21Icon}
                  loading="lazy"
                  alt=""
                  src="/image-21@2x.png"
                />
              </div>
            </div>
            <img
              className={styles.image45Icon}
              loading="lazy"
              alt=""
              src="/image-38@2x.png"
              onClick={onImage45IconClick}
            />
          </div>
        </div>
      </section>
      <section className={styles.salesAndInventoryContainer}>
        <p className={styles.salesAnd}>SALES AND</p>
        <p className={styles.inventorySystem}> INVENTORY SYSTEM</p>
      </section>
    </div>
  );
};

export default Sales;
