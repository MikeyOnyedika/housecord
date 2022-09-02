import { Link } from 'react-router-dom';
import { DM } from '../MyDMListings';
import './styles.css';
import ImageHolder from '../ImageHolder'

interface DMLinkType {
  dm: DM;
}

const DMLink = (props: DMLinkType) => {
  return (
    <Link to={`/rooms/@me/${props.dm.id}`}>
      <span className="dm-link">
        <ImageHolder url={props.dm.url} />
        <span className="dm-link__name">{props.dm.name}</span>
      </span>
    </Link>
  );
};

export default DMLink;
