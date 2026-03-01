import { GoogleGenAI, Type, Schema } from "@google/genai";
import type { AiConsultationResponse } from "../types";

const consultationSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    summary: { type: Type.STRING },
    estimatedTier: { type: Type.STRING, enum: ["Budget", "Standard", "Premium", "Luxury"] },
    recommendation: { type: Type.STRING },
  },
  required: ["summary", "estimatedTier", "recommendation"],
};

export async function analyzeProjectRequest(
  description: string,
  type: "renovation" | "ev"
): Promise<AiConsultationResponse> {
  // ✅ Vite env (must start with VITE_)
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

  // ✅ HARD fallback: never throw
  if (!apiKey) {
    return {
      summary: "AI estimate is temporarily unavailable.",
      estimatedTier: "Standard",
      recommendation: "Submit the form and we’ll follow up ASAP.",
    };
  }

  try {
    // ✅ Only create the client when we have a key
    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction =
      type === "renovation"
        ? "You are a senior construction estimator for Aviel Management Inc. Analyze the user's renovation request."
        : "You are a specialist electrician for EZ EV Installations. Analyze the user's EV charger installation request.";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: description,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: consultationSchema,
        temperature: 0.2,
      },
    });

    const text = response.text;
    if (!text) throw new Error("Empty Gemini response");

    return JSON.parse(text) as AiConsultationResponse;
  } catch (err) {
    console.error("Gemini failed, returning fallback:", err);
    return {
      summary: "AI estimate is temporarily unavailable.",
      estimatedTier: "Standard",
      recommendation: "Submit the form and we’ll follow up ASAP.",
    };
  }
}
