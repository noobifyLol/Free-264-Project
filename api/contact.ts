//Maybe used later on

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MailerSend, EmailParams, Recipient, Sender } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY!,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const emailParams = new EmailParams()
      .setFrom(new Sender("no-reply@freestorenwhs.dpdns.org", "NWHS Free Store"))
      .setTo([new Recipient("noobability21@gmail.com", "Person")])
      .setSubject(`Question about the Free Store from ${name}`)
      .setText(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    await mailerSend.email.send(emailParams);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: String(err) });
  }
}
