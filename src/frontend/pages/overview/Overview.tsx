import React, { FunctionComponent } from 'react';
import style from './style.less';

interface OverviewProps { compiler: string; framework: string; }

const Overview: FunctionComponent<OverviewProps> = ({ compiler, framework }) => <div className={style.component}><h1>Overview from {compiler} and {framework}!</h1></div>;

export default Overview;
