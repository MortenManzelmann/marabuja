import * as React from "react";

interface OverviewProps{ compiler: string; framework: string; }

const Overview = (props: OverviewProps) => <h1>Overview from {props.compiler} and {props.framework}!</h1>;

export default Overview;
