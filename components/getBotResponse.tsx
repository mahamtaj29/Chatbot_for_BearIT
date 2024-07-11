import axios from 'axios';

interface BotResponse {
  candidates?: {
    content: {
      parts: {
        text: string | null;
      }[];
    };
  }[];
}

const getBotResponse = async (input: string): Promise<BotResponse | null> => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  //console.log('API_KEY:', API_KEY);
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

  const data = {
    contents: [
      {
        role: 'user',
        parts: [{ text: input }],
      },
    ],
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data as BotResponse;
  } catch (error) {
    console.error('Error fetching response:', error);
    return null;
  }
};

export default getBotResponse;
