import React from 'react'
import {
  Zoom,
  Fab,
  useScrollTrigger,
} from '@mui/material'
import {
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@mui/icons-material'

interface BackToTopProps {
  anchorId: string
}

const BackToTop: React.FC<BackToTopProps> = ({ anchorId }) => {
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
  })

  return (
    <Zoom in={scrollTrigger}>
      <Fab
        sx={{
          position: 'fixed',
          bottom: (theme) => theme.spacing(2),
          right: (theme) => theme.spacing(6),
        }}
        color='secondary'
        onClick={() => {
          document.querySelector(`#${anchorId}`)
            ?.scrollIntoView({
              behavior: 'smooth',
            })
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
  </Zoom>
  )
}

export default BackToTop
