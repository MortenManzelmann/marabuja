import React, { FunctionComponent } from "react";
import { Helmet } from 'react-helmet';
import style from './style.less';

import PageInterface from '../../interfaces/page.interface';

interface Props {
  page: PageInterface;
}

const Proposals: FunctionComponent<Props> = ({
  page
}) => {
  return (
    <section>
      <Helmet>
        <title>
          {page.title}
          </title>
      </Helmet>
      <h1> {page.title}</h1>
      <h3>{page.subTitle}</h3>
    </section>
  );
};


export default Proposals;
