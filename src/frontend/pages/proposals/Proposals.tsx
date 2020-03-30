import React, {FunctionComponent} from "react";
import style from './style.less';
interface ProposalProps { compiler: string; framework: string; }

const Proposals: FunctionComponent<ProposalProps> = ({compiler, framework}) => <div className={style.component}><h1>Proposals from {compiler} and {framework}!</h1></div>;

export default Proposals;
