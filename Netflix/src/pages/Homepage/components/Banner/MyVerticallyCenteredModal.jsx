import React from 'react'

import Modal from 'react-bootstrap/Modal';
import YouTube from 'react-youtube';



const MyVerticallyCenteredModal = (props) => {

  console.log(props.videoId)

 const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo(); // 자동 재생을 위해 이 라인을 제거합니다.
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.videoId ? 
          <YouTube videoId={props.videoId} opts={opts} onReady={onPlayerReady} className='youtubeWrap' /> : <div className='video'>예고편 정보가 없습니다.</div>
        }
      </Modal.Body>
    </Modal>
  )
}

export default MyVerticallyCenteredModal