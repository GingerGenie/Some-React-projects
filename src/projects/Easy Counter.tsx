import React, { Children, Fragment, useState } from "react";

interface buttonProp {
  event?: () => void,
  children?: React.ReactNode;
}

function Button ({event, children} : buttonProp) {
  return (
    <button onClick={event}>
      {children}
    </button>
  )
}

function EasyCounter() {
  let [number, isNumber] = useState(0);
  
  return (
  <Fragment>
    <div>{number}</div>
    <Button event={() => isNumber(number + 1)}>
      {"Increase"}
    </Button>
    <Button event={() => isNumber(number - 1)}>
      {"Decrease"}
    </Button>
  </Fragment>
  );
}

export default EasyCounter;
