import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage';
import FooterPage from '../../components/public/FooterPage';
import Header from '../../components/Index/Header';
import Banner from '../../components/public/Banner';
import ListBox from '../../components/Index/ListBox';

function IndexPage()  {
  return (
    <div className={styles.normal} style={{"paddingTop":"45px","paddingBottom":"60px"}}>
      <Header></Header>
      <Banner></Banner>
      <ListBox></ListBox>
      <FooterPage src={'1542445952383_104_104.jpg'}/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
