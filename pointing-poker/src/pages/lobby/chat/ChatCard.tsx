import React, { useEffect } from 'react';
import '../../../shared/memberCard/memberCard.scss'
import '@fontsource/roboto';
import { Avatar, Card, Typography, IconButton } from '@material-ui/core';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import {Transformation} from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import { ChatMessageFromServer } from './chat';

export const ChatCard: React.FC<ChatMessageFromServer> = (props: ChatMessageFromServer) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'pointingpoker'
    }
  }); 
  const {lastName, name, isObserver, position, avatar} = props;
  console.log(props);
  console.log(lastName, name, isObserver, position, avatar);
  const avatarImage = cld.image(avatar);
  useEffect (() => {
    avatarImage
    .resize(thumbnail()
    .width(48)
    .height(48))
    .roundCorners(byRadius(20));
  }, [])  
  
    return (
      <>
      <Card className = {"member-card " + 'member-card__small'} >
        {avatar && <AdvancedImage cldImg={avatarImage}/>}
        { !avatar  && <Avatar className = "avatar" 
            style={
            {color: '#ffffff',  
            backgroundColor: '#60DABF', 
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            width: '30px', 
            height: '30px'}
            } >OP</Avatar>}
            
            <div>
              <Typography variant="h5">
              {name}
              </Typography>
              <Typography variant="caption">
              {position}
              </Typography>
            </div>
      </Card>
      </>
    );
}