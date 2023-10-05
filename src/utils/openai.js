import OpenAI from 'openai';

import { OPEN_AI } from './constants';

const openai = new OpenAI({
  apiKey: OPEN_AI, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});

export default openai;
