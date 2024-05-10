import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import styles from "./UserManagement.module.css";

const UserManagement: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPngaaa1IconClick = useCallback(() => {
    navigate("/weekly-sales");
  }, [navigate]);

  const onImage2IconClick = useCallback(() => {
    // Please sync "Categories" to the project
  }, []);

  const onImage5IconClick = useCallback(() => {
    // Please sync "Inventory" to the project
  }, []);

  const onImage6IconClick = useCallback(() => {
    // Please sync "Sales" to the project
  }, []);

  const onImage7IconClick = useCallback(() => {
    // Please sync "report" to the project
  }, []);

  const onRectangleInput2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleInput1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleInput1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle8']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle8Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle7']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle7Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle6']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle6Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle5']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle5Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleInput']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleInputClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle4']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onImage41IconClick = useCallback(() => {
    navigate("/login1");
  }, [navigate]);

  return (
    <div className={styles.userManagement}>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <FrameComponent />
        <div className={styles.frameParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
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
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.administratorXxl1Icon}
                  loading="lazy"
                  alt=""
                  src="/administratorxxl-1@2x.png"
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
            <div className={styles.image3Wrapper}>
              <img
                className={styles.image3Icon}
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
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
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.usersManagementWrapper}>
                <h2 className={styles.usersManagement}>Users Management</h2>
              </div>
              <img
                className={styles.image35Icon}
                loading="lazy"
                alt=""
                src="/image-34@2x.png"
              />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent1}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.nameParent}>
                    <div className={styles.name}>Name:</div>
                    <div className={styles.nameLabel}>
                      <input
                        className={styles.nameLabelChild}
                        type="text"
                        onClick={onRectangleInput2Click}
                      />
                    </div>
                    <div className={styles.nameLabel1}>
                      <input
                        className={styles.nameLabelItem}
                        type="text"
                        data-scroll-to="rectangleInput1"
                        onClick={onRectangleInput1Click}
                      />
                    </div>
                    <div className={styles.rectangleParent1}>
                      <div
                        className={styles.frameChild1}
                        data-scroll-to="rectangle8"
                        onClick={onRectangle8Click}
                      />
                      <div className={styles.lineDiv} />
                      <img
                        className={styles.clipart539431Icon}
                        loading="lazy"
                        alt=""
                        src="/clipart53943-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.mILabelParent}>
                    <div className={styles.mILabel}>
                      <div className={styles.mILabelInner}>
                        <div className={styles.lastNameParent}>
                          <div className={styles.lastName}>Last Name</div>
                          <div className={styles.firstName}>First Name</div>
                        </div>
                      </div>
                      <div className={styles.saveButtonParent}>
                        <div className={styles.saveButton}>
                          <div className={styles.addressParent}>
                            <div className={styles.address}>Address:</div>
                            <div className={styles.rectangleParent2}>
                              <div
                                className={styles.frameChild2}
                                data-scroll-to="rectangle7"
                                onClick={onRectangle7Click}
                              />
                              <div className={styles.frameChild3} />
                              <img
                                className={styles.clipart539434Icon}
                                alt=""
                                src="/clipart53943-1@2x.png"
                              />
                            </div>
                          </div>
                          <div className={styles.rectangleParent3}>
                            <div
                              className={styles.frameChild4}
                              data-scroll-to="rectangle6"
                              onClick={onRectangle6Click}
                            />
                            <div className={styles.frameChild5} />
                            <img
                              className={styles.clipart539433Icon}
                              loading="lazy"
                              alt=""
                              src="/clipart53943-1@2x.png"
                            />
                          </div>
                          <div className={styles.rectangleParent4}>
                            <div
                              className={styles.frameChild6}
                              data-scroll-to="rectangle5"
                              onClick={onRectangle5Click}
                            />
                            <div className={styles.frameChild7} />
                            <img
                              className={styles.clipart539432Icon}
                              loading="lazy"
                              alt=""
                              src="/clipart53943-1@2x.png"
                            />
                          </div>
                        </div>
                        <div className={styles.positionLabelWrapper}>
                          <div className={styles.positionLabel}>
                            <div className={styles.salesSystemTitle}>
                              <div className={styles.region}>Region</div>
                            </div>
                            <div className={styles.citymunicipality}>
                              City/Municipality
                            </div>
                            <div className={styles.barangayWrapper}>
                              <div className={styles.barangay}>Barangay</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.userMgmtTitle}>
                          <div className={styles.frameParent3}>
                            <div className={styles.rectangleParent5}>
                              <input
                                className={styles.rectangleInput}
                                type="text"
                                data-scroll-to="rectangleInput"
                                onClick={onRectangleInputClick}
                              />
                              <div
                                className={styles.frameChild8}
                                data-scroll-to="rectangle4"
                                onClick={onRectangle4Click}
                              />
                            </div>
                            <div className={styles.frameWrapper2}>
                              <div className={styles.houseNoLotStreetParent}>
                                <div className={styles.houseNoLot}>
                                  House No. Lot Street
                                </div>
                                <div className={styles.zipCodeWrapper}>
                                  <div className={styles.zipCode}>Zip Code</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameParent4}>
                          <div className={styles.frameParent5}>
                            <div className={styles.positionWrapper}>
                              <div className={styles.position}>Position:</div>
                            </div>
                            <div className={styles.rectangleParent6}>
                              <div
                                className={styles.frameChild9}
                                data-scroll-to="rectangle3"
                                onClick={onRectangle3Click}
                              />
                              <div className={styles.frameChild10} />
                              <img
                                className={styles.clipart539435Icon}
                                alt=""
                                src="/clipart53943-1@2x.png"
                              />
                            </div>
                          </div>
                          <div className={styles.gondolaNoWrapper}>
                            <div className={styles.gondolaNo}>Gondola No.:</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.salesInvSystemTitleWrapper}>
                      <div className={styles.salesInvSystemTitle}>
                        <div className={styles.rectangleParent7}>
                          <div
                            className={styles.frameChild11}
                            data-scroll-to="rectangle"
                            onClick={onRectangleClick}
                          />
                          <div className={styles.addWrapper}>
                            <div className={styles.add}>Add</div>
                          </div>
                        </div>
                        <div className={styles.rectangleParent8}>
                          <div
                            className={styles.frameChild12}
                            data-scroll-to="rectangle1"
                          />
                          <div className={styles.save}>Save</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.frameParent6}>
                      <div className={styles.miWrapper}>
                        <div className={styles.mi}>M.I</div>
                      </div>
                      <div className={styles.rectangleParent9}>
                        <div
                          className={styles.frameChild13}
                          data-scroll-to="rectangle2"
                          onClick={onRectangle2Click}
                        />
                        <div className={styles.frameChild14} />
                        <img
                          className={styles.clipart539436Icon}
                          loading="lazy"
                          alt=""
                          src="/clipart53943-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.image41Icon}
              loading="lazy"
              alt=""
              src="/image-38@2x.png"
              onClick={onImage41IconClick}
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

export default UserManagement;
