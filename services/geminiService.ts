
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development and will show a clear error in the console.
  // In a real production environment, the build process should fail if the API key is missing.
  console.error("Gemini API key not found. Please set the process.env.API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const systemInstruction = `You are a friendly and helpful virtual assistant for Jordan Plumbing, a professional plumbing company.
Your goal is to understand a user's plumbing issue based on their description and suggest the most likely service they might need from the list of available services.
You must not give DIY repair advice, instructions, or suggestions. Your purpose is to diagnose the potential problem and guide the user to seek professional help.
Always end your response by strongly and clearly recommending they call Jordan Plumbing at (931) 526-9318 for a professional inspection and a precise quote.
Do not make up services. The available services are: Drain Cleaning, Water Heater Repair & Install, Leak Detection & Repair, Sewer Line Services, Fixture Installation, Gas Piping & Lines.
Keep your response concise, helpful, and easy for a non-expert to understand. Format the suggested service in bold.`;

export const getPlumbingAdvice = async (problemDescription: string): Promise<string> => {
  if (!API_KEY) {
    return "The AI assistant is currently unavailable. Please call us directly for assistance.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `The user's problem is: "${problemDescription}"`,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.5,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I encountered an error while analyzing your problem. It's best to speak with one of our experts directly. Please call Jordan Plumbing at (931) 526-9318 for immediate assistance.";
  }
};
