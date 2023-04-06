import './PageTitle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileLines} from '@fortawesome/free-solid-svg-icons';

const PageTitle = ({ title }) => {
  return (
    <div className='PageTitle'>
      <FontAwesomeIcon icon={faFileLines} />
      <span>{title}</span>
    </div>
  );
}

export default PageTitle;
