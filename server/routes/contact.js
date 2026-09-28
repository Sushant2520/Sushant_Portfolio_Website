import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message, roleInterest } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required fields.' 
      });
    }

    console.log(`[CONTACT FORM RECEIVED] From: ${name} (${email}), Role: ${roleInterest || 'General'}, Subject: ${subject}`);
    console.log(`[MESSAGE CONTENT]: ${message}`);

    // If SMTP credentials exist in env, attempt real email delivery via Nodemailer
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${name} via Portfolio" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFICATION_EMAIL || 'sushant.tripathi2000.st@gmail.com',
        replyTo: email,
        subject: `[Portfolio Inquiry] ${subject || 'New Message from ' + name}`,
        text: `Name: ${name}\nEmail: ${email}\nRole Interest: ${roleInterest || 'N/A'}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0f172a; color: #f8fafc;">
            <h2 style="color: #38bdf8;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #818cf8;">${email}</a></p>
            <p><strong>Interested Role:</strong> ${roleInterest || 'General Inquiry'}</p>
            <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <hr style="border-color: #334155; margin: 15px 0;" />
            <p><strong>Message:</strong></p>
            <blockquote style="background: #1e293b; padding: 15px; border-left: 4px solid #38bdf8; margin: 0;">
              ${message.replace(/\n/g, '<br>')}
            </blockquote>
          </div>
        `
      });
      console.log('[EMAIL SENT SUCCESSFULLY via Nodemailer]');
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully to Sushant Tripathi.',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('[CONTACT FORM ERROR]:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process message submission. Please try contacting directly via email or WhatsApp.'
    });
  }
});

export default router;
