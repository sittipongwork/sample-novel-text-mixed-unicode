import { NextApiRequest, NextApiResponse } from 'next'
import { rawText, sampleCode } from '../../lib/sample-text';

export default async function handler (req: NextApiRequest,
  res: NextApiResponse) {
    let result: string[] = []
    rawText.map(function(_v) {
      Object.entries(sampleCode).map(([k, v]) => {
        _v = _v.replaceAll(k, v)
      })
      return result.push(_v)
    });
    return res.json({
      data: result
    })
  }

