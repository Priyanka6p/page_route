import React,{useState} from 'react'
import ProductCart from './productCart';

const Product:React.FC = () => {
  
  const [count, setCount] = useState<number>(0);
  const [showInc, setShowInc] = useState<boolean>(false);
  const [resetVisible, setResetVisible] = useState<boolean>(true);
  const [text] = useState<string>('');
  const [showText, setShowText] = useState<boolean>(false);

  const onIncrement = () => {
      if (count === 5) {
          setShowText(true);
          setShowInc(true);
          setResetVisible(false);
      }
      else {
          setCount(prev => prev + 1)
          setCount(count + 1);
      }
  };

  const reset = () => {
      setCount(0);
      setResetVisible(true);
      setShowInc(false);
      setShowText(true);
  }

  return (
      <div>
          <h1>Parent component</h1>
          <input className="childBtn" type='text' value={count} onChange={onIncrement} />
          <ProductCart onIncrement={onIncrement} disabled={showInc} show={resetVisible} reset={reset} showText={showText} text={text} />
          { count===5 && <><div id="red">Done</div> <div id="green">Start again</div></>}
      </div >
  );
};

export default Product;