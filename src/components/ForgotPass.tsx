import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ForgotPass.module.css";

const ForgotPass: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cancelButton']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCancelButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <form className={styles.forgotPass}>
      <img className={styles.bake2Icon} alt="" src="/bake-2@2x.png" />
      <h1 className={styles.welcomeTo}>WELCOME TO</h1>
      <h1 className={styles.mrbaker}>
        <span className={styles.mr}>MR</span>
        <span className={styles.baker}>BAKER</span>
      </h1>
      <div className={styles.username}>Username:</div>
      <div className={styles.emailAddress}>Email Address:</div>
      <div className={styles.culinarySuppliesLabelParent}>
        <div className={styles.culinarySuppliesLabel}>
          <b className={styles.culinaryAndBakery}>
            CULINARY AND BAKERY SUPPLIES
          </b>
        </div>
        <b className={styles.signUp}>Sign Up</b>
      </div>
      <img className={styles.bake3Icon} alt="" src="/bake-2@2x.png" />
      <div className={styles.mrbaker2Parent}>
        <img className={styles.mrbaker2Icon} alt="" src="/mrbaker-2@2x.png" />
        <img
          className={styles.mrbaker3Icon}
          loading="lazy"
          alt=""
          src="/mrbaker-2@2x.png"
        />
      </div>
      <img
        className={styles.forgotPassChild}
        alt=""
        src="/rectangle-5.svg"
        onClick={onRectangle2Click}
      />
      <div
        className={styles.forgotPassItem}
        data-scroll-to="rectangle1"
        onClick={onRectangle1Click}
      />
      <b className={styles.pleaseChangeYour}>Please change your password.</b>
      <div className={styles.newSuppliesLabel}>
        <div className={styles.mrbakerWrapper}>
          <h1 className={styles.mrbaker1}>
            <span className={styles.mr1}>MR</span>
            <span className={styles.baker1}>BAKER</span>
          </h1>
        </div>
        <b className={styles.culinaryAndBakery1}>
          CULINARY AND BAKERY SUPPLIES
        </b>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.newPasswordInputParent}>
          <div className={styles.newPasswordInput}>
            <div className={styles.newPassword}>New Password:</div>
          </div>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/rectangle-5.svg"
              onClick={onRectangle3Click}
            />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.newPasswordLabelParent}>
            <div className={styles.newPasswordLabel}>
              <div className={styles.confirmPassword}>Confirm Password:</div>
            </div>
            <div className={styles.frameItem} data-scroll-to="rectangle" />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.passwordParent}>
              <div className={styles.password}>Password:</div>
              <div className={styles.frameContainer}>
                <div className={styles.cancelButtonParent}>
                  <div
                    className={styles.cancelButton}
                    data-scroll-to="cancelButton"
                    onClick={onCancelButtonClick}
                  />
                  <div className={styles.confirm}>Confirm</div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <button className={styles.rectangleParent}>
                  <div
                    className={styles.frameInner}
                    onClick={onRectangleClick}
                  />
                  <div className={styles.cancel}>Cancel</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ForgotPass;
