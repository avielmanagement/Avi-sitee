export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const webhookUrl = process.env.GHL_WEBHOOK_URL;
    if (!webhookUrl) {
      return res.status(500).json({ ok: false, error: "Missing GHL_WEBHOOK_URL env var" });
    }

    const payload = req.body;

    const ghlRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await ghlRes.text();

    return res.status(200).json({
      ok: true,
      ghlStatus: ghlRes.status,
      ghlBody: text,
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
}
