import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCancelButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forgot-pass");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='bake1Image']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNewEmployeeSignClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <section className={styles.login1}>
        <div className={styles.loginArea}>
          <img
            className={styles.bake1Icon}
            alt=""
            src="/bake-1@2x.png"
            data-scroll-to="bake1Image"
          />
          <div className={styles.menu}>MENU</div>
          <img
            className={styles.mrbaker3Icon}
            loading="lazy"
            alt=""
            src="/mrbaker-2@2x.png"
          />
        </div>
        <div className={styles.loginInner}>
          <div className={styles.frameParent}>
            <div className={styles.aboutWrapper}>
              <div className={styles.about}>ABOUT</div>
            </div>
            <div className={styles.forgotPasswordLink}>
              <div className={styles.company}>COMPANY</div>
            </div>
            <div className={styles.contact}>CONTACT</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.mrbakerWrapper}>
              <h1 className={styles.mrbaker}>
                <span>MR</span>
                <span className={styles.baker}>BAKER</span>
              </h1>
            </div>
            <b className={styles.culinaryAndBakery}>
              CULINARY AND BAKERY SUPPLIES
            </b>
          </div>
          <div className={styles.loginButton}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.loginWrapper}>
                  <b className={styles.login2}>Login</b>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.usernameWrapper}>
                    <div className={styles.username}>Username:</div>
                  </div>
                  <div
                    className={styles.cancelButton}
                    onClick={onCancelButtonClick}
                  />
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.passwordWrapper}>
                  <div className={styles.password}>Password:</div>
                </div>
                <div
                  className={styles.frameChild}
                  data-scroll-to="rectangle1"
                  onClick={onRectangle1Click}
                />
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent4}>
                  <div className={styles.forgotPasswordWrapper}>
                    <b
                      className={styles.forgotPassword}
                      onClick={onForgotPasswordTextClick}
                    >
                      Forgot Password?
                    </b>
                  </div>
                  <div className={styles.frameParent5}>
                    <div className={styles.rectangleParent}>
                      <div
                        className={styles.frameItem}
                        data-scroll-to="rectangle"
                        onClick={onRectangleClick}
                      />
                      <b className={styles.login3}>LOGIN</b>
                    </div>
                    <div className={styles.rectangleGroup}>
                      <div
                        className={styles.frameInner}
                        onClick={onRectangle2Click}
                      />
                      <b className={styles.cancel}>CANCEL</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.newEmployeeSignUpWrapper}>
                <div
                  className={styles.newEmployeeSignContainer}
                  onClick={onNewEmployeeSignClick}
                >
                  <span>{`New Employee? `}</span>
                  <b>Sign Up.</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
