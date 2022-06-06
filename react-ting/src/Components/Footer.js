import React from 'react'
import { useSpring, animated } from 'react-spring'


function LoopObject() {
    const styles = useSpring({
      loop: { reverse: false },
      from: { x: 8 },
      to: { x: 1000 },
    })
  
    return (
      <animated.div
        style={{
          width: 180,
          height: 180,
          backgroundColor: '#46e891',
          borderRadius: 16,
          ...styles,
        }}
      />
    )
  }
  export default LoopObject 
