
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const getAutomationAdvice = async (sectorName: string, prompt: string) => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Ești un expert în automatizare AI pentru business-uri. 
      Sector: ${sectorName}
      Cerință utilizator: ${prompt}
      Te rugăm să oferi o strategie de automatizare folosind API-uri precum OpenAI, Google Maps, Weather APIs, etc. 
      Răspunde în limba română, într-un mod profesional și orientat spre ROI.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ne pare rău, asistentul AI este momentan indisponibil. Vă rugăm să încercați mai târziu.";
  }
};
