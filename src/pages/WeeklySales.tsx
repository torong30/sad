import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import styles from "./WeeklySales.module.css";

const WeeklySales: FunctionComponent = () => {
  const navigate = useNavigate();

  const onUserManagementTextClick = useCallback(() => {
    navigate("/user-management");
  }, [navigate]);

  const onCategoriesTextClick = useCallback(() => {
    // Please sync "Categories" to the project
  }, []);

  const onInStocksTextClick = useCallback(() => {
    // Please sync "In Stocks" to the project
  }, []);

  const onInventoryTextClick = useCallback(() => {
    // Please sync "Inventory" to the project
  }, []);

  const onSalesOrderClick = useCallback(() => {
    // Please sync "Sales" to the project
  }, []);

  const onInventoryReportTextClick = useCallback(() => {
    // Please sync "report" to the project
  }, []);

  const onAdministratorXxl1IconClick = useCallback(() => {
    navigate("/user-management");
  }, [navigate]);

  const onImage39IconClick = useCallback(() => {
    navigate("/login1");
  }, [navigate]);

  return (
    <div className={styles.weeklySales}>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <FrameComponent />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.dayWeekMonthParent}>
              <div className={styles.dayWeekMonth}>
                <button className={styles.rectangleGroup}>
                  <div className={styles.frameInner} />
                  <div className={styles.pngaaa1Wrapper}>
                    <img
                      className={styles.pngaaa1Icon}
                      alt=""
                      src="/pngaaa-1@2x.png"
                    />
                  </div>
                  <div className={styles.dashboard}>Dashboard</div>
                </button>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.userManagementWrapper}>
                  <div
                    className={styles.userManagement}
                    onClick={onUserManagementTextClick}
                  >
                    User Management
                  </div>
                </div>
                <div className={styles.categoriesWrapper}>
                  <div
                    className={styles.categories}
                    onClick={onCategoriesTextClick}
                  >
                    Categories
                  </div>
                </div>
                <div className={styles.inStocksWrapper}>
                  <div
                    className={styles.inStocks}
                    onClick={onInStocksTextClick}
                  >
                    In Stocks
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameDiv}>
                    <div className={styles.inventoryWrapper}>
                      <div
                        className={styles.inventory}
                        onClick={onInventoryTextClick}
                      >
                        Inventory
                      </div>
                    </div>
                    <div
                      className={styles.salesOrder}
                      onClick={onSalesOrderClick}
                    >{`Sales & Order Records`}</div>
                  </div>
                </div>
                <div
                  className={styles.inventoryReport}
                  onClick={onInventoryReportTextClick}
                >
                  Inventory Report
                </div>
              </div>
              <div className={styles.imageAdminImg}>
                <div className={styles.adminLabel} />
                <img
                  className={styles.image2Icon}
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
                <img
                  className={styles.image3Icon}
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
                <img
                  className={styles.image5Icon}
                  loading="lazy"
                  alt=""
                  src="/image-5@2x.png"
                />
                <img
                  className={styles.image6Icon}
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                />
                <img
                  className={styles.image7Icon}
                  loading="lazy"
                  alt=""
                  src="/image-7@2x.png"
                />
                <img
                  className={styles.administratorXxl1Icon}
                  loading="lazy"
                  alt=""
                  src="/administratorxxl-1@2x.png"
                  onClick={onAdministratorXxl1IconClick}
                />
              </div>
            </div>
            <div className={styles.financeSummaryContainer}>
              <div className={styles.dashboardParent}>
                <div className={styles.dashboard1}>Dashboard</div>
                <div className={styles.dayWeekMonth1}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.day}>Day</div>
                  </div>
                </div>
                <div className={styles.dayWeekMonth2}>
                  <div className={styles.rectangleParent1}>
                    <div className={styles.frameChild1} />
                    <div className={styles.week}>WEEK</div>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <button className={styles.frameButton}>
                    <div className={styles.frameChild2} />
                    <div className={styles.month}>MONTH</div>
                    <div className={styles.dashboardGroup}>
                      <div className={styles.dashboard2} />
                      <img
                        className={styles.image1Icon}
                        alt=""
                        src="/image-1@2x.png"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dashboardContainerParent}>
            <div className={styles.dashboardContainer}>
              <img
                className={styles.image35Icon}
                loading="lazy"
                alt=""
                src="/image-34@2x.png"
              />
              <div className={styles.dashboardContainerInner}>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild3} />
                  <div className={styles.totalIncome}>TOTAL INCOME</div>
                </div>
              </div>
            </div>
            <textarea
              className={styles.frameTextarea}
              placeholder="TOTAL EXPENSES"
              rows={5}
              cols={14}
            />
            <textarea
              className={styles.frameChild4}
              placeholder="INVESTMENTS"
              rows={5}
              cols={14}
            />
          </div>
          <img
            className={styles.image39Icon}
            loading="lazy"
            alt=""
            src="/image-38@2x.png"
            onClick={onImage39IconClick}
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

export default WeeklySales;
