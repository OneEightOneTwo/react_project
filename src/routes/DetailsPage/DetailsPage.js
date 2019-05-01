import React from 'react';
import { connect } from 'dva';
import Content from '../../components/Details/Content';

function DetailsPage()  {
  return (
    <div >
      <Content></Content>
    </div>
  );
}

DetailsPage.propTypes = {
};
export default connect()(DetailsPage);
