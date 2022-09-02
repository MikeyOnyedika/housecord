import React from 'react';
import HouseCordLogo from '../../assets/housecord.svg'

interface ImageProps{
    url: string
}

const ImageHolder = (props:ImageProps) => {
  return (
    <img
      src={props.url || HouseCordLogo}
      alt=""
      className="dm-link__image"
    />
  );
};

export default ImageHolder;
