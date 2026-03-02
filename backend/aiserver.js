import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateSummary(reportText) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a medical AI assistant. Summarize lab reports clearly."
      },
      {
        role: "user",
        content: reportText
      }
    ]
  });

  return response.choices[0].message.content;
}
