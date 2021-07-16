import { motion } from "framer-motion";
import SignUp from "../../components/SignUp/SignUp";
import {
  staggerOne,
  modalVariants,
  authPageFadeInVariants,
} from "../../motionUtils";

const PageSignUp = () => {
  return (
    <motion.div
      className="sign section--full-bg"
      style={{ backgroundImage: `url(img/bg.jpg)` }}
      data-bg="img/bg.jpg"
      variants={authPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div className="container" variants={modalVariants}>
        <motion.div className="row" variants={staggerOne}>
          <motion.div className="col-12">
            <motion.div className="sign__content">
              <SignUp />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PageSignUp;
