import './Button.scss';
import { IButton } from '../../../types/ButtonInterface';




export default function Button({ children, isDisabled, clickFunction, typeButton, action }: IButton) {
  return (
    <>
      <button onClick={clickFunction} className={`button ${typeButton}`} disabled={isDisabled} type={action}>{children}</button>
    </>
  );
}
