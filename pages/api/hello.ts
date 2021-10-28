import { NextApiHandler } from 'next'

interface HelloResp {
  message: string
}

const hello: NextApiHandler<HelloResp> = (req, res) => {
  res.status(200).json({ message: 'Hello, World!' })
}

export default hello
