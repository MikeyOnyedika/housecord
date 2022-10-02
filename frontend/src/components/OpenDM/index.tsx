import React from 'react';
import { useDMContext } from '../../contexts/DMProvider';
import { Status } from '../../contexts/DMProvider';
import Styles from './styles.module.css';
import Message from '../Message';
import { MessageType } from '../../types/MessageType';
import { FaPaperPlane } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function OpenDM() {
  const { dm } = useDMContext();

  console.log(dm.status);

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <section className={Styles.Panel}>
      <div className={Styles.Titlebar}>
        <div className={Styles.Name}>
          <h2 className={Styles.NameText}>{dm.name}</h2>
          <div
            className={`${Styles.Status} ${
              dm.status === Status.ONLINE
                ? Styles.Status___online
                : Styles.Status___offline
            }`}
          ></div>
        </div>

        {dm.status === Status.OFFLINE && (
          <div className={Styles.OfflineText}>
            <span>Last Seen: </span>
            <span>{dm.lastSeen}</span>
          </div>
        )}
      </div>
      <div className={Styles.Messages}>
        {dm.conversations.map((message: MessageType) => (
          <Message {...message} />
        ))}
      </div>
      <div>
        <form className={Styles.Messagebar} onSubmit={handleSubmit}>
          <input type="text" className={Styles.Messagebar__TextField} placeholder="Message" />
          <button type="submit" className={Styles.Messagebar__Send}>
            <IconContext.Provider value={{ size: '1.2rem' , className: Styles.SendIcon}}>
              <FaPaperPlane />
            </IconContext.Provider>
          </button>
        </form>
      </div>
    </section>
  );
}

export default OpenDM;
