import type { VercelRequest, VercelResponse } from '@vercel/node';
// @ts-ignore
import MailerSend from '@mailersend/mailersend';

MailerSend .setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  const msg = {
    to: 'noobability21@gmail.com',
    from: 'no-reply@freestorenwhs.dpdns.org', // must be verified in SendGrid
    subject: `Question about the Free Store from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await MailerSend.send(msg);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
}
