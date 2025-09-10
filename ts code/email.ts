import type { VercelRequest, VercelResponse } from '@vercel/node';
// @ts-ignore
import MailerSend from '@mailersend/mailersend';

const mailerSend = new MailerSend({
apiKey: process.env.MAILERSEND_API_KEY || "mlsn.4523d7b242cc0de4a0de6285d0219f27f6bf6e9e3717669c815f855c916a54b8",
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  const msg = {
    to: 'noobability21@gmail.com',
    from: 'no-reply@freestorenwhs.dpdns.org',
    subject: `Question about the Free Store from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await mailerSend.send(msg);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
}

