export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    return res.status(500).json({ ok: false, error: "Missing GHL_WEBHOOK_URL env var" });
  }

  try {
    const ghlRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await ghlRes.text().catch(() => "");

    // IMPORTANT: if webhook fails, return an error so you know
    if (!ghlRes.ok) {
      return res.status(502).json({
        ok: false,
        error: "GHL webhook failed",
        status: ghlRes.status,
        body: text,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
}
