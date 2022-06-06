import React from 'react'
import { useSpring, animated } from 'react-spring'

function LoopTrue() {
    const styles = useSpring({
      loop: false,
      from: { rotateZ: 100 },
      to: { rotateZ: 280 },
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
export default LoopTrue;