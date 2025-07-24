import { NextResponse } from 'next/server';
const brevo = require('@getbrevo/brevo');

let defaultClient = brevo.ApiClient.instance;
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY!;

let apiInstance = new brevo.TransactionalEmailsApi();

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, service, date, message } = data;

    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = `New Contact Form Submission from ${name}`;
    sendSmtpEmail.htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Preferred Date:</strong> ${date}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;
    sendSmtpEmail.sender = { name: name, email: email };
    sendSmtpEmail.to = [{ email: "info@agentic-ai.ltd" }];
    sendSmtpEmail.replyTo = { email: email };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
