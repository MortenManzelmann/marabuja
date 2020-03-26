import * as React from "react";

interface BoardProps{ compiler: string; framework: string; }

const Board = (props: BoardProps) => <h1>Board from {props.compiler} and {props.framework}!</h1>;

export default Board;
