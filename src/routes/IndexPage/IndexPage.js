import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage';
import FooterPage from '../FooterPage/FooterPage.js';
function IndexPage()  {
  return (
    <div className={styles.normal}>
      首页
      <FooterPage/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
