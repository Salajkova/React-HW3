import { Icon } from '../Icon/index';
import './style.css';

export const Option = ({ type, text, onSelected }) => {

  const buttonHandler = () => {
    console.log("spíše souhlasím");
    if (onSelected) {
      onSelected({ iconType : type});
    }
  };

  return (
    <div className="option" onClick={buttonHandler}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};
