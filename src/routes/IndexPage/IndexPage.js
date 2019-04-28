import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage';
import FooterPage from '../FooterPage/FooterPage.js';
function IndexPage()  {
  return (
    <div className={styles.normal}>
      首页
      <FooterPage src={'1542445952383_104_104.jpg'}/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
