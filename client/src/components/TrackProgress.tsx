import React, { FC } from 'react'
import { TimeCount } from '../../utils/time-count';

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e) => void
  audio?: boolean;
}

const TrackProgress:FC<TrackProgressProps> = ({left, right, onChange, audio = false}) => {
  let time;

  if(audio) {
    time = TimeCount(left, right)
  }

  return (
    <div style={{display: 'flex'}}>
      <input 
        type='range' 
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>{audio ? time : `${left} / ${right}`}</div>
    </div>
  )
}

export default TrackProgress