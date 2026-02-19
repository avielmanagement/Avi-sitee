import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AiConsultationResponse } from "./types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const consultationSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    summary: {
      type: Type.STRING,
      description: "A professional summary of the user's renovation or installation request.",
    },
    estimatedTier: {
      type: Type.STRING,
      enum: ['Budget', 'Standard', 'Premium', 'Luxury'],
      description: "The likely tier of the project based on description complexity.",
    },
    recommendation: {
      type: Type.STRING,
      description: "A strategic recommendation for the next step (e.g., site visit, blueprint review).",
    }
  },
  required: ["summary", "estimatedTier", "recommendation"],
};

export const analyzeProjectRequest = async (
  description: string,
  type: 'renovation' | 'ev'
): Promise<AiConsultationResponse | null> => {
  if (!apiKey) {
    console.warn("No API Key provided for Gemini.");
    return {
      summary: "API Key missing. Please provide details manually.",
      estimatedTier: "Standard",
      recommendation: "Contact us directly."
    };
  }

  try {
    const modelId = 'gemini-2.5-flash-preview-09-2025'; 
    
    const systemInstruction = type === 'renovation' 
      ? "You are a senior construction estimator for Aviel Management Inc. Analyze the user's renovation request."
      : "You are a specialist electrician for EZ EV Installations. Analyze the user's EV charger installation request.";

    const response = await ai.models.generateContent({
      model: modelId,
      contents: description,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: consultationSchema,
        temperature: 0.2, // Low temperature for consistent, professional output
      }
    });

    const text = response.text;
    if (text) {
      return JSON.parse(text) as AiConsultationResponse;
    }
    return null;

  } catch (error) {
    console.error("Gemini analysis failed:", error);
    return null;
  }
};
