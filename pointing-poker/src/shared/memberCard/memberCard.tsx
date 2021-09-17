import React from 'react';
import './memberCard.scss'
import '@fontsource/roboto';
import { Avatar, Card, Typography, IconButton } from '@material-ui/core';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import { ICardSize } from '../../interfaces/card';
import { useTypedSelector } from '../../store/hooks/hooks';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import {Transformation} from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";

export const MemberCard: React.FC<ICardSize> = ({isSmall = false}) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'pointingpoker'
    }
  }); 
  const {lastName, name, observer, position, avatar} = useTypedSelector(state => state.player);
  console.log(lastName, name, observer, position, avatar);
  const avatarImage = cld.image(avatar);
  if (isSmall) {
    avatarImage
  .resize(thumbnail()
  .width(30)
  .height(30))
  .roundCorners(byRadius(20));
  } else {
    avatarImage
  .resize(thumbnail()
  .width(48)
  .height(48))
  .roundCorners(byRadius(20));
  }
  
    return (
      <>
      <Card className = {"member-card " + (isSmall ? 'member-card__small' : '')} >
        {avatar && <AdvancedImage cldImg={avatarImage}/>}
        { !avatar  && <Avatar className = "avatar" 
            style={
            {color: '#ffffff',  
            backgroundColor: '#60DABF', 
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            width: (isSmall ? '30px' : '48px'), 
            height: (isSmall ? '30px' : '48px')}
            } >OP</Avatar>}
            
            <div>{ !isSmall &&
              <Typography variant="subtitle1">
              {lastName}
              </Typography>}
              <Typography variant="h5">
              {name}
              </Typography>
              <Typography variant="caption">
              {position}
              </Typography>
            </div>
            <IconButton aria-label="delete" className = "delete">
              <BlockOutlinedIcon style={{ fontSize: (isSmall ? 26 : 56) }}/>
            </IconButton>
      </Card>
      </>
    );
}