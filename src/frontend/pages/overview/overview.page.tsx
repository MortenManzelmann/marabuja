import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import style from './style.less';

import PageInterface from '../../interfaces/page.interface';

interface Props {
  page: PageInterface;
}

const OverviewPage: FunctionComponent<Props> = ({
  page
}) => {
  return (
    <section>
      <Helmet>
        <title>
          Overview
          </title>
      </Helmet>
      <h1>Overview</h1>
    </section>
  );
};

export default OverviewPage;
