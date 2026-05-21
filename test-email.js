// Test email configuration
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function testEmail() {
	const transporter = nodemailer.createTransport({
		service: process.env.EMAIL_SERVICE || 'gmail',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	try {
		console.log('Testing email configuration...');
		console.log('Email:', process.env.EMAIL_USER);
		console.log('Service:', process.env.EMAIL_SERVICE);

		// Verify the connection
		await transporter.verify();
		console.log('✅ Email configuration is valid!');

		// Send a test email
		const info = await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: process.env.RECEIVE_EMAIL,
			subject: 'Email Configuration Test',
			html: `
				<h2>Email Configuration Test</h2>
				<p>If you received this email, your configuration is working correctly!</p>
				<p>Sent at: ${new Date().toLocaleString()}</p>
			`,
		});

		console.log('✅ Test email sent successfully!');
		console.log('Message ID:', info.messageId);
		process.exit(0);
	} catch (error) {
		console.error('❌ Email configuration error:');
		console.error(error.message);
		console.error('\nTroubleshooting tips:');
		console.error('1. Make sure you used an app password (not your regular password)');
		console.error('2. Verify the app password is correct (16 characters, with spaces)');
		console.error('3. Check that 2-Factor Authentication is enabled on your Google account');
		console.error('4. Ensure EMAIL_USER and EMAIL_PASSWORD are set in .env.local');
		process.exit(1);
	}
}

testEmail();
