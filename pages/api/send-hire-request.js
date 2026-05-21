import nodemailer from 'nodemailer';

// Configure your email service credentials
// You can use Gmail, SendGrid, or any SMTP service
const transporter = nodemailer.createTransport({
	service: process.env.EMAIL_SERVICE || 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD,
	},
});

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const { name, email, subject, message } = req.body;

	// Validate input
	if (!name || !email || !subject || !message) {
		return res.status(400).json({ error: 'All fields are required' });
	}

	try {
		// Email to you (portfolio owner)
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: process.env.RECEIVE_EMAIL || process.env.EMAIL_USER,
			subject: `New Hire Request: ${subject}`,
			html: `
				<h2>New Hire Request</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Position:</strong> ${subject}</p>
				<p><strong>Message:</strong></p>
				<p>${message.replace(/\n/g, '<br>')}</p>
			`,
		});

		// Confirmation email to the requester
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: email,
			subject: 'We received your hire request',
			html: `
				<h2>Thank you for your request!</h2>
				<p>Hi ${name},</p>
				<p>We have received your hire request for the position of <strong>${subject}</strong>.</p>
				<p>We will review your request and get back to you as soon as possible.</p>
				<br>
				<p>Best regards,</p>
				<p>Your Portfolio Team</p>
			`,
		});

		res.status(200).json({ message: 'Request sent successfully' });
	} catch (error) {
		console.error('Email error:', error);
		res.status(500).json({ error: 'Failed to send email' });
	}
}
