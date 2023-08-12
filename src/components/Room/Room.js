import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { appid,secret } from '../helper';
const Room = () => {
       const { roomid }= useParams();

       //room preference
       const myLivestream=async (element)=>{
              const appID = appid;
              const serverSecret = secret;
              const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid,Date.now().toString(),"swaraj kumar");
              //createinstanceforliveroom
              const zc=ZegoUIKitPrebuilt.create(kitToken);

              //join function
              zc.joinRoom({
                     container: element,
                     scenario: {
                       mode: ZegoUIKitPrebuilt.LiveStreaming,
                     
                     },
                     showScreenSharingButton:true
                   })
       }
  return (
       <div>  <div ref={myLivestream}/></div>
     
  );
}

export default Room