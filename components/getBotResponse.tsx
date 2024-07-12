import axios from 'axios';
// TypeScript interface to define the structure of the expected bot response
interface BotResponse {
  candidates?: {
    content: {
      parts: {
        text: string | null;
      }[];
    };
  }[];
}
// Function to get the bot response from the API
  const getBotResponse = async (input: string): Promise<BotResponse | null> => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;
  // Create the request payload with the user's input
  const data = {
    contents: [
      {
        role: 'user',
        parts: [{ text: input }],
      },
    ],
  };
// Send a POST request to the API endpoint with the request payload and headers
  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Return the response data cast to the BotResponse type
    return response.data as BotResponse;
  } catch (error) {
    console.error('Error fetching response:', error);
    return null;
  }
};

export default getBotResponse;
