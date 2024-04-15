import { Fragment, useState } from "react";
import './style.css';

interface buttonProp {
  event?: () => void,
  children?: React.ReactNode;
}

function Button({children, event} : buttonProp) {
  return (
    <button onClick={event}>
      {children}
    </button>
  )
}

function EasyThermometer() {
  let [number, isNumber] = useState(11);
  let [color, isColor] = useState('hot');

  return (
  <Fragment>
    <div className={`thermometer ${color}`}>
        <div className="indicator">{number}</div>
        <div>
            <Button event={() => {
              if (number === 9) isColor('hot');
              isNumber(number + 1);
            }}>{'+'}</Button>
            <Button event={() => {
              if (number === 10) isColor('cold');
              isNumber(number - 1);
            }}>{'-'}</Button>
        </div>
    </div>
  </Fragment>
  );
}

export default EasyThermometer;