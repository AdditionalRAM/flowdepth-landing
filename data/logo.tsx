import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <img
      src="/static/flowdepth.svg"
      alt="Flowdepth"
      style={{
        height: '32px',
        transition: 'all 0.2s ease',
        ...(isHovered && { filter: 'brightness(1.2)' }) // Example hover effect
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}
