import * as React from "react";

interface ProposalProps { compiler: string; framework: string; }

const Proposals = (props: ProposalProps) => <h1>Proposals from {props.compiler} and {props.framework}!</h1>;

export default Proposals;
