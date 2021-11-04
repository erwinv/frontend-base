import React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material'

interface EndpointsDoc {
  docType: 'endpoints'
  code: string
}
interface SchemaDoc {
  docType: 'schema'
  name: string
  code: string
}
interface RequestDoc {
  docType: 'request'
  method: string
  path: string
  code: string
}
interface ResponseDoc {
  docType: 'response'
  code: string
}

export type ContentDoc = EndpointsDoc | SchemaDoc | RequestDoc | ResponseDoc

interface DocProps {
  doc: ContentDoc
}

const Doc: React.FC<DocProps> = ({ doc }) => {
  if (doc.docType === 'request') {
    return (
      <Card raised>
        <CardHeader subheader={doc.method + ' ' + doc.path} />
        <CardContent>
          <Typography component='div'>
            <Box
              sx={{ fontFamily: 'monospace' }}
              whiteSpace='pre'
              overflow='auto'
            >
              {doc.code}
            </Box>
          </Typography>
        </CardContent>
      </Card>
    )
  }

  if (doc.docType === 'response') {
    return (
      <Card raised>
        <CardHeader subheader='Response' />
        <CardContent>
          <Typography component='div'>
            <Box
              sx={{ fontFamily: 'monospace' }}
              whiteSpace='pre'
              overflow='auto'
            >
              {doc.code}
            </Box>
          </Typography>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
    </>
  )
}

export default Doc
