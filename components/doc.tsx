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
          <pre>{doc.code}</pre>
        </CardContent>
      </Card>
    )
  }

  if (doc.docType === 'response') {
    return (
      <Card raised>
        <CardHeader subheader='Response' />
        <CardContent>
          <pre>{doc.code}</pre>
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
