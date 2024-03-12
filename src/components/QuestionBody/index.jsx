import { Icon } from '../Icon/index';
import './style.css';

export const QuestionBody = ({ text, answer }) => {
  const iconType = answer ? answer : "symbolQuestion";
/*answer bylo dříve answered */

  return (
    <div className="question__body">
      <p className="question__text">
        {text}
      </p>
      <Icon type={iconType} />
    </div>
  );
};
