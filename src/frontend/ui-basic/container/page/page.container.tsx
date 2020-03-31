import React, {FunctionComponent} from 'react';
import style from './style.less';

const Page: FunctionComponent = ({children}) => <div className={style.component}>{children}</div>

export default Page;