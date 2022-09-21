import React from 'react';
import { useDMContext } from '../../contexts/DMProvider';
import { Status } from '../../contexts/DMProvider';
import Styles from './styles.module.css';
import ChatMessage from '../ChatMessage'

function OpenDM() {
  const { dm } = useDMContext();
  console.log(dm.status);

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
      <div className={Styles.Chat}>
        {dm.conversations.map((message) => (
          <ChatMessage {...message} />
        ))}
      </div>
      <div className={Styles.Message}></div>
    </section>
  );
}

export default OpenDM;
