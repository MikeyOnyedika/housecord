import React from 'react';
import Styles from './styles.module.css';
import { MessageType } from '../../types/MessageType';
import { useMeContext } from '../../contexts/MeProvider';

function Message({
  senderName,
  timeStamp,
  img,
  messageText,
  senderId,
}: MessageType) {
  const { id } = useMeContext();

  return (
    <div
      className={
        senderId === id
          ? `${Styles.Message} ${Styles.Message___right}`
          : `${Styles.Message}`
      }
    >
      <div className={Styles.Left}>
        {img ? <img src={img} alt="" /> : <p>{senderName[0]}</p>}
      </div>
      <div className={Styles.Right}>
        <div className={Styles.Message__Head}>
          <h3 className={Styles.Message__Sender}>{senderName}</h3>
          <p className={Styles.Message__Timestamp}>{timeStamp}</p>
        </div>
        <div className={Styles.Message__BodyWrapper}>
          <div className={Styles.Message}>
            <p>{messageText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
