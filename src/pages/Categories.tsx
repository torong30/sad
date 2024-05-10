import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import styles from "./Categories.module.css";

const Categories: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPngaaa1IconClick = useCallback(() => {
    navigate("/weekly-sales");
  }, [navigate]);

  const onAdministratorXxl1IconClick = useCallback(() => {
    navigate("/user-management");
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

  const onImage7IconClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onImage40IconClick = useCallback(() => {
    navigate("/login1");
  }, [navigate]);

  return (
    <div className={styles.categories}>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <FrameComponent />
        <div className={styles.frameParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.pngholderWrapper}>
              <div className={styles.pngholder}>
                <div className={styles.imageContainerE}>
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
            <button className={styles.imageContainers}>
              <div className={styles.imageContainersChild} />
              <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
            </button>
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
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.categoriesWrapper}>
                <h3 className={styles.categories1}>Categories</h3>
              </div>
              <img
                className={styles.image35Icon}
                loading="lazy"
                alt=""
                src="/image-34@2x.png"
              />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.rectangleParent1}>
                    <div className={styles.frameChild1} />
                    <h3 className={styles.productCategories}>
                      Product Categories
                    </h3>
                    <div className={styles.isActiveIndicator}>
                      <h3 className={styles.isActive}>IS ACTIVE</h3>
                    </div>
                    <div className={styles.lowInventoryThresholdWrapper}>
                      <div className={styles.lowInventoryThreshold}>
                        LOW INVENTORY THRESHOLD
                      </div>
                    </div>
                  </div>
                  <div className={styles.category1}>Category 1</div>
                  <div className={styles.category2}>Category 2</div>
                  <div className={styles.frameParent1}>
                    <div className={styles.itemAParent}>
                      <div className={styles.itemA}>
                        <p className={styles.itemA1}>Item A</p>
                      </div>
                      <div className={styles.itemB}>Item B</div>
                      <div className={styles.itemC}>Item C</div>
                    </div>
                    <div className={styles.imageContainerF}>
                      <img
                        className={styles.image8Icon}
                        loading="lazy"
                        alt=""
                        src="/image-8@2x.png"
                      />
                      <img
                        className={styles.image9Icon}
                        loading="lazy"
                        alt=""
                        src="/image-8@2x.png"
                      />
                      <img
                        className={styles.image11Icon}
                        loading="lazy"
                        alt=""
                        src="/image-8@2x.png"
                      />
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>3.0</div>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.image14Parent}>
                        <img
                          className={styles.image14Icon}
                          loading="lazy"
                          alt=""
                          src="/image-14@2x.png"
                        />
                        <img
                          className={styles.image15Icon}
                          loading="lazy"
                          alt=""
                          src="/image-14@2x.png"
                        />
                        <img
                          className={styles.image16Icon}
                          loading="lazy"
                          alt=""
                          src="/image-14@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.itemAGroup}>
                        <div className={styles.itemA2}>
                          <p className={styles.itemA3}>Item A</p>
                        </div>
                        <div className={styles.itemB1}>
                          <p className={styles.itemB2}>Item B</p>
                        </div>
                        <div className={styles.itemCParent}>
                          <div className={styles.itemC1}>
                            <p className={styles.itemC2}>Item C</p>
                          </div>
                          <div className={styles.itemC3}>
                            <p className={styles.itemC4}>Item C</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.image10Parent}>
                        <img
                          className={styles.image10Icon}
                          alt=""
                          src="/image-8@2x.png"
                        />
                        <img
                          className={styles.image12Icon}
                          loading="lazy"
                          alt=""
                          src="/image-8@2x.png"
                        />
                        <img
                          className={styles.image13Icon}
                          loading="lazy"
                          alt=""
                          src="/image-8@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.shapeContainerB}>3.0</div>
                    <div className={styles.image17Parent}>
                      <img
                        className={styles.image17Icon}
                        loading="lazy"
                        alt=""
                        src="/image-14@2x.png"
                      />
                      <img
                        className={styles.image18Icon}
                        loading="lazy"
                        alt=""
                        src="/image-14@2x.png"
                      />
                      <img
                        className={styles.image19Icon}
                        loading="lazy"
                        alt=""
                        src="/image-14@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.lineDiv} />
                  <div className={styles.frameChild2} />
                  <div className={styles.frameChild3} />
                </div>
                <div className={styles.salesInventorySystemTitle}>
                  <div className={styles.image20Parent}>
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
              </div>
            </div>
            <img
              className={styles.image40Icon}
              loading="lazy"
              alt=""
              src="/image-38@2x.png"
              onClick={onImage40IconClick}
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

export default Categories;
