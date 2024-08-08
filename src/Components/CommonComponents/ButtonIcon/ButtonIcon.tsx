import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IIconButton } from '../../../types/ButtonInterface';
import './ButtonIcon.scss';



export default function ButtonIcon({ fontAwesome, isDisabled, clickFunction, hoverFunction, unhoverFunction, typeButton, titleButton }: IIconButton) {
  return (
    <>
      <button onClick={clickFunction} onMouseOver={hoverFunction} onMouseOut={unhoverFunction} className={`icon-button ${typeButton}`} disabled={isDisabled} title={titleButton}>
        <FontAwesomeIcon icon={fontAwesome} />
      </button>
    </>
  );
}
