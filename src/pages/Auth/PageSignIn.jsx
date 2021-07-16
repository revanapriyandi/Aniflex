import { motion } from "framer-motion";
import SignIn from "../../components/SignIn/SignIn";
import {
  staggerOne,
  modalVariants,
  authPageFadeInVariants,
} from "../../motionUtils";

const PageSignIn = () => {
  return (
    <motion.div
      className="sign section--full-bg"
      data-bg="img/bg.jpg"
      style={{ backgroundImage: `url(img/bg.jpg)` }}
      variants={authPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div className="container" variants={modalVariants}>
        <motion.div className="row" variants={staggerOne}>
          <motion.div className="col-12">
            <motion.div className="sign__content">
              <SignIn />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PageSignIn;
