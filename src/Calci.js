import React, { useState } from "react";
import {evaluate} from "mathjs";

export default function Calci() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const hClick = (value) => {
    	if (value === "Clear") {
      		setExpression("");
      		setResult("");
    	} 
	else if (value === "Delete") {
      		setExpression(expression.slice(0, -1));
    	} 
	else if (value === "=") {
      	try {
		const evalResult = evaluate(expression);
      		setResult("Ans: " + evalResult);
             } 
	catch (error) {
        	setResult("Error");
        	setExpression("");
        	}
    	} 

else {
      setExpression(expression + value);
    }
  };

  return (
      <center>
        <h1>Calculator</h1>
	<div class="card">
  	<div class="card-overlay"><br/>
          <input type="text" readOnly value={expression} /><br/>
          <input type="text" readOnly value={result} /><br/><br/>
          <div className="button-row">
	    <button value="Clear" onClick={() => hClick("Clear")} id="yl">AC </button>
            <button value="Delete" onClick={() => hClick("Delete")} id="yl">Del </button>            
            <button value="." onClick={() => hClick(".")} id="pk" ><strong>.</strong></button>
            <button value="/" onClick={() => hClick("/")} id="pk">/</button>
          </div>
          <div className="button-row">
            <button value="7" onClick={() => hClick("7")}>7</button>
            <button value="8" onClick={() => hClick("8")}>8</button>
            <button value="9" onClick={() => hClick("9")}>9</button>
            <button value="*" onClick={() => hClick("*")} id="pk">x</button>
          </div>
          <div className="button-row">
            <button value="4" onClick={() => hClick("4")}>4</button>
            <button value="5" onClick={() => hClick("5")}>5</button>
            <button value="6" onClick={() => hClick("6")}>6</button>
            <button value="-" onClick={() => hClick("-")} id="pk">-</button>
          </div>
          <div className="button-row">
            <button value="1" onClick={() => hClick("1")}>1</button>
            <button value="2" onClick={() => hClick("2")}>2</button>
            <button value="3" onClick={() => hClick("3")}>3</button>
            <button value="+" onClick={() => hClick("+")} id="pk">+</button>
          </div>
          <div className="button-row">
            <button value="0" onClick={() => hClick("0")}>0</button>
	    <button value="(" onClick={() => hClick("(")} id="pk">(</button>
  	    <button value=")" onClick={() => hClick(")")} id="pk">)</button>
            <button value="=" onClick={() => hClick("=")} id="is">=</button>
          </div><br/>
	</div>
	</div>
      </center>
  );
}
