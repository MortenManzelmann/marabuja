import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import style from './style.less';


const Navigation = () => {
  return (
    <div className={style.component}>
      <nav>
        <ul>
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/board">Board</Link>
          </li>
          <li>
            <Link to="/proposals">Proposals</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Navigation;