import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  const navigate = useNavigate();

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
    const anchor = document.querySelector("[data-scroll-to='rectangle4']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle4Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRectangle10Click = useCallback(() => {
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

  const onRectangle2Click = useCallback(() => {
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

  const onRectangleClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRectangle11Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <img
        className={styles.signUpChild}
        alt=""
        src="/rectangle-5.svg"
        onClick={onRectangle8Click}
      />
      <div
        className={styles.signUpItem}
        data-scroll-to="rectangle7"
        onClick={onRectangle7Click}
      />
      <div
        className={styles.signUpInner}
        data-scroll-to="rectangle6"
        onClick={onRectangle6Click}
      />
      <div
        className={styles.rectangleDiv}
        data-scroll-to="rectangle5"
        onClick={onRectangle5Click}
      />
      <div
        className={styles.signUpChild1}
        data-scroll-to="rectangle4"
        onClick={onRectangle4Click}
      />
      <div className={styles.signUpChild2} onClick={onRectangle9Click} />
      <b className={styles.signUp1}>Sign Up</b>
      <b className={styles.back}>Back</b>
      <section className={styles.signUpButton}>
        <img className={styles.bake2Icon} alt="" src="/bake-2@2x.png" />
        <img className={styles.bake3Icon} alt="" src="/bake-2@2x.png" />
      </section>
      <div className={styles.welcomeToParent}>
        <h1 className={styles.welcomeTo}>WELCOME TO</h1>
        <h1 className={styles.welcomeTo1}>WELCOME TO</h1>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.mrbaker2Parent}>
              <img
                className={styles.mrbaker2Icon}
                alt=""
                src="/mrbaker-2@2x.png"
              />
              <img
                className={styles.mrbaker3Icon}
                loading="lazy"
                alt=""
                src="/mrbaker-2@2x.png"
              />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.mrbakerParent}>
                    <h1 className={styles.mrbaker}>
                      <span>MR</span>
                      <span className={styles.baker}>BAKER</span>
                    </h1>
                    <h1 className={styles.mrbaker1}>
                      <span>MR</span>
                      <span className={styles.baker1}>BAKER</span>
                    </h1>
                  </div>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.culinaryAndBakerySuppliesParent}>
                    <b className={styles.culinaryAndBakery}>
                      CULINARY AND BAKERY SUPPLIES
                    </b>
                    <b className={styles.culinaryAndBakery1}>
                      CULINARY AND BAKERY SUPPLIES
                    </b>
                  </div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.signUpParent}>
                      <b className={styles.signUp2}>Sign Up</b>
                      <b className={styles.signUp3}>Sign Up</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameParent3}>
              <div className={styles.frameWrapper4}>
                <div className={styles.usernameParent}>
                  <div className={styles.username}>Username:</div>
                  <div className={styles.username1}>Username:</div>
                </div>
              </div>
              <div className={styles.emailAddressParent}>
                <div className={styles.emailAddress}>Email Address:</div>
                <div className={styles.emailAddress1}>Email Address:</div>
              </div>
              <div className={styles.frameWrapper5}>
                <div className={styles.passwordParent}>
                  <div className={styles.password}>Password:</div>
                  <div className={styles.password1}>Password:</div>
                </div>
              </div>
              <div className={styles.frameWrapper6}>
                <div className={styles.confirmPasswordParent}>
                  <div className={styles.confirmPassword}>
                    Confirm Password:
                  </div>
                  <div className={styles.confirmPassword1}>
                    Confirm Password:
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className={styles.frameForm}>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/rectangle-5.svg"
                onClick={onRectangle10Click}
              />
              <div
                className={styles.frameItem}
                data-scroll-to="rectangle3"
                onClick={onRectangle3Click}
              />
              <div
                className={styles.frameInner}
                data-scroll-to="rectangle2"
                onClick={onRectangle2Click}
              />
              <div
                className={styles.frameChild1}
                data-scroll-to="rectangle1"
                onClick={onRectangle1Click}
              />
            </div>
            <div className={styles.frameWrapper7}>
              <div className={styles.frameParent4}>
                <button className={styles.rectangleParent}>
                  <div
                    className={styles.frameChild2}
                    data-scroll-to="rectangle"
                    onClick={onRectangleClick}
                  />
                  <b className={styles.signUp4}>Sign Up</b>
                </button>
                <button className={styles.rectangleGroup}>
                  <div
                    className={styles.frameChild3}
                    onClick={onRectangle11Click}
                  />
                  <b className={styles.back1}>Back</b>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
