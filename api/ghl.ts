import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "POST only" });

  try {
    const webhookUrl = process.env.GHL_WEBHOOK_URL; // set in Vercel env vars
    if (!webhookUrl) return res.status(500).json({ ok: false, error: "Missing GHL_WEBHOOK_URL" });

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    // Make payload flat and predictable for mapping:
    const payload = {
      first_name: body.name || "",
      phone: body.phone || "",
      email: body.email || "",
      description: body.description || "",
      page: body.page || "",
      source: "Website Quote Form",
      timestamp: new Date().toISOString(),
    };

    const r = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await r.text();
    return res.status(200).json({ ok: true, ghl_status: r.status, ghl_response: text });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message || "Server error" });
  }
}
