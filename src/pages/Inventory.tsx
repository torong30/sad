import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent1";
import { useNavigate } from "react-router-dom";
import styles from "./Inventory.module.css";

const Inventory: FunctionComponent = () => {
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

  const onImage6IconClick = useCallback(() => {
    navigate("/sales");
  }, [navigate]);

  const onImage7IconClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onImage43IconClick = useCallback(() => {
    navigate("/login1");
  }, [navigate]);

  return (
    <div className={styles.inventory}>
      <section className={styles.salesAndInventorySystemParent}>
        <h2 className={styles.salesAndInventoryContainer}>
          <p className={styles.salesAnd}>SALES AND</p>
          <p className={styles.inventorySystem}> INVENTORY SYSTEM</p>
        </h2>
        <div className={styles.productCode}>Product Code</div>
        <div className={styles.supplier}>Supplier</div>
        <div className={styles.quantity}>Quantity</div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <FrameComponent mRBAKERDebugCommit="unset" />
          <div className={styles.userImage}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <div className={styles.productImage}>
                <div className={styles.frameParent}>
                  <div className={styles.pngaaa1Wrapper}>
                    <img
                      className={styles.pngaaa1Icon}
                      loading="lazy"
                      alt=""
                      src="/pngaaa-1@2x.png"
                      onClick={onPngaaa1IconClick}
                    />
                  </div>
                  <div className={styles.adminImage}>
                    <img
                      className={styles.administratorXxl1Icon}
                      loading="lazy"
                      alt=""
                      src="/administratorxxl-1@2x.png"
                      onClick={onAdministratorXxl1IconClick}
                    />
                  </div>
                  <div className={styles.adminImage1}>
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
                </div>
              </div>
              <div className={styles.additionalImages}>
                <div className={styles.additionalImagesChild} />
                <img
                  className={styles.image5Icon}
                  loading="lazy"
                  alt=""
                  src="/image-5@2x.png"
                />
              </div>
              <div className={styles.additionalImages1}>
                <img
                  className={styles.image6Icon}
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                  onClick={onImage6IconClick}
                />
              </div>
              <div className={styles.additionalImages2}>
                <img
                  className={styles.image7Icon}
                  loading="lazy"
                  alt=""
                  src="/image-7@2x.png"
                  onClick={onImage7IconClick}
                />
              </div>
            </div>
            <div className={styles.userImageInner}>
              <div className={styles.frameGroup}>
                <div className={styles.itemsListParent}>
                  <div className={styles.itemsList}>
                    <div className={styles.inventory1}>Inventory</div>
                    <div className={styles.itemsWrapper}>
                      <div className={styles.items}>Items:</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameContainer}>
                      <div className={styles.frameDiv}>
                        <div className={styles.image22Parent}>
                          <img
                            className={styles.image22Icon}
                            alt=""
                            src="/image-22@2x.png"
                          />
                          <img
                            className={styles.image23Icon}
                            alt=""
                            src="/image-23@2x.png"
                          />
                        </div>
                      </div>
                      <img
                        className={styles.image25Icon}
                        alt=""
                        src="/image-251@2x.png"
                      />
                      <div className={styles.add}>
                        <div className={styles.buttonLabel}>
                          <div className={styles.buttonLabelChild} />
                          <div className={styles.add1}>Add</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.images}>
                  <img
                    className={styles.image33Icon}
                    loading="lazy"
                    alt=""
                    src="/image-33@2x.png"
                  />
                </div>
                <img
                  className={styles.image36Icon}
                  loading="lazy"
                  alt=""
                  src="/image-34@2x.png"
                />
              </div>
            </div>
          </div>
          <img
            className={styles.image43Icon}
            loading="lazy"
            alt=""
            src="/image-38@2x.png"
            onClick={onImage43IconClick}
          />
        </div>
      </section>
    </div>
  );
};

export default Inventory;
