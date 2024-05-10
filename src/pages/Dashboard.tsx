import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/weekly-sales");
  }, [navigate]);

  const onUserManagementTextClick = useCallback(() => {
    navigate("/user-management");
  }, [navigate]);

  const onCategoriesTextClick = useCallback(() => {
    // Please sync "Categories" to the project
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

  const onImage29Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='userManagementText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onImage38IconClick = useCallback(() => {
    navigate("/login1");
  }, [navigate]);

  return (
    <div className={styles.dashboard}>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
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
            <div className={styles.inventoryReportLabel}>
              <div className={styles.nbpBuilding38}>
                NBP Building, 38 Aurora Blvd, San Juan, 1500 Metro Manila
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mRBakerLabel}>
          <div className={styles.inventorySalesContainer}>
            <div className={styles.dashboardWrapper}>
              <div className={styles.dashboard1} onClick={onDashboardTextClick}>
                Dashboard
              </div>
            </div>
            <div className={styles.userManagementWrapper}>
              <div
                className={styles.userManagement}
                data-scroll-to="userManagementText"
                onClick={onUserManagementTextClick}
              >
                User Management
              </div>
            </div>
            <div className={styles.inventorySalesRecordWrapper}>
              <div className={styles.inventorySalesRecord}>
                <div
                  className={styles.categories}
                  onClick={onCategoriesTextClick}
                >
                  Categories
                </div>
                <div className={styles.inStocksWrapper}>
                  <div className={styles.inStocks}>In Stocks</div>
                </div>
              </div>
            </div>
            <div className={styles.inventorySalesOrderRecords}>
              <div className={styles.inventory} onClick={onInventoryTextClick}>
                Inventory
              </div>
              <div
                className={styles.salesOrder}
                onClick={onSalesOrderClick}
              >{`Sales & Order Records`}</div>
            </div>
            <div
              className={styles.inventoryReport}
              onClick={onInventoryReportTextClick}
            >
              Inventory Report
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
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
                className={styles.pngaaa1Icon}
                loading="lazy"
                alt=""
                src="/pngaaa-1@2x.png"
              />
              <img
                className={styles.administratorXxl1Icon}
                loading="lazy"
                alt=""
                src="/administratorxxl-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.image29Wrapper}>
            <img
              className={styles.image29Icon}
              loading="lazy"
              alt=""
              src="/image-29@2x.png"
              onClick={onImage29Click}
            />
          </div>
          <div className={styles.image30Wrapper}>
            <img
              className={styles.image30Icon}
              loading="lazy"
              alt=""
              src="/image-30@2x.png"
            />
          </div>
          <div className={styles.image31Parent}>
            <img className={styles.image31Icon} alt="" src="/image-31@2x.png" />
            <img
              className={styles.image34Icon}
              loading="lazy"
              alt=""
              src="/image-34@2x.png"
            />
          </div>
          <img
            className={styles.image38Icon}
            loading="lazy"
            alt=""
            src="/image-38@2x.png"
            onClick={onImage38IconClick}
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

export default Dashboard;
