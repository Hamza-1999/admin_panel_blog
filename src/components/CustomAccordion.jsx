import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import CustomExpandIcon from './CustomExpandIcon'

const CustomAccordion = ({heading, children}) => {
  return (
    <Accordion>
       <AccordionSummary expandIcon={<CustomExpandIcon />} sx={{fontSize:"1.5rem"}} aria-controls="panel1a-content"
            id="panel1a-header" >
              <Typography   className="accordianSummaryHeading"
              component="h4"
              fontWeight="600">
          {heading}
          </Typography>
       </AccordionSummary>

       <AccordionDetails>
        {children}
       </AccordionDetails>
    </Accordion>
  )
}

export default CustomAccordion
