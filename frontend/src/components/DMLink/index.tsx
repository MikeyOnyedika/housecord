import { NavLink } from 'react-router-dom';
// import { DM } from '../SideBarDMs';
import './styles.css';
import HouseCordLogo from '../../assets/housecord.svg';

// interface DMLinkType {
//   dm: DM;
// }

const DMLink = (props: any) => {
  return (
    <NavLink
      to={`/rooms/@me/${props.dm.id}`}
      className={({ isActive }) =>
        isActive ? 'dm-link dm-link--highlight' : 'dm-link'
      }
    >
      <div className="dm-link__image-wrapper">
        <div className="user-status user-status--offline">
          <div className="user-status__inside-bubble user-status__inside-bubble--offline"></div>
        </div>
        <img
          src={props.dm.url || HouseCordLogo}
          alt=""
          className="dm-link__image"
        />
      </div>
      <span className="dm-link__name">{props.dm.name}</span>
    </NavLink>
  );
};

export default DMLink;
