import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

console.log("Partnership inquiry function loaded!")

interface PartnershipData {
  name: string
  email: string
  message: string
}

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const FROM_EMAIL = 'info@mattesoncm.org'
const TO_EMAIL = 'info@mattesoncm.org' // Production: Send to museum team

const getNotificationEmailHtml = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Partnership Inquiry</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #16a34a;
      color: white;
      padding: 30px;
      text-align: center;
      border-radius: 8px 8px 0 0;
    }
    .content {
      background-color: #f9fafb;
      padding: 30px;
      border-radius: 0 0 8px 8px;
    }
    .inquiry-details {
      background-color: white;
      padding: 20px;
      border-radius: 6px;
      margin: 20px 0;
      border-left: 4px solid #16a34a;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      color: #666;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>New Partnership Inquiry</h1>
  </div>
  <div class="content">
    <p>You have received a new partnership inquiry for the Matteson Children's Museum.</p>
    
    <div class="inquiry-details">
      <h3>Contact Information:</h3>
      <p><strong>Name/Organization:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    </div>
    
    <p><strong>Next Steps:</strong></p>
    <ul>
      <li>Reply to this inquiry within 24 hours</li>
      <li>Schedule a follow-up meeting if appropriate</li>
      <li>Add contact information to your CRM system</li>
    </ul>
    
    <p>Please respond directly to: <a href="mailto:${email}">${email}</a></p>
  </div>
  <div class="footer">
    <p>Matteson Children's Museum<br>
    Partnership Management System</p>
  </div>
</body>
</html>
`

const getAutoReplyEmailHtml = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Partnership Inquiry Received</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #16a34a;
      color: white;
      padding: 30px;
      text-align: center;
      border-radius: 8px 8px 0 0;
    }
    .content {
      background-color: #f9fafb;
      padding: 30px;
      border-radius: 0 0 8px 8px;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      color: #666;
      font-size: 14px;
    }
    .button {
      display: inline-block;
      background-color: #1e40af;
      color: white;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 6px;
      margin: 20px 0;
      font-weight: bold;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      border: 2px solid #1e40af;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Thank You for Your Partnership Inquiry!</h1>
  </div>
  <div class="content">
    <p>Dear ${name},</p>
    
    <p>Thank you for your interest in partnering with the Matteson Children's Museum! We have received your inquiry and are excited about the potential opportunity to work together.</p>
    
    <p><strong>What happens next:</strong></p>
    <ul>
      <li>Our team will review your inquiry within 24 hours</li>
      <li>A member of our partnership team will contact you to discuss opportunities</li>
      <li>We'll schedule a meeting to explore how we can collaborate</li>
    </ul>
    
    <p>In the meantime, we encourage you to:</p>
    <ul>
      <li>Visit our website to learn more about our mission and vision</li>
      <li>Follow our progress on social media</li>
      <li>Share our project with others who might be interested</li>
    </ul>
    
    <a href="https://mattesoncm.org" class="button">Visit Our Website</a>
    
    <p>If you have any immediate questions or need to reach us urgently, please don't hesitate to contact us directly at info@mattesoncm.org or reply to this email.</p>
    
    <p>Thank you for believing in our mission to create a space where children can learn, explore, and grow!</p>
    
    <p>Best regards,<br>
    The Matteson Children's Museum Partnership Team</p>
  </div>
  <div class="footer">
    <p>Matteson Children's Museum<br>
    Building Wonder, One Child at a Time<br>
    <a href="https://mattesoncm.org">mattesoncm.org</a></p>
  </div>
</body>
</html>
`

async function sendEmail(emailData: any) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`
    },
    body: JSON.stringify(emailData)
  })

  if (!response.ok) {
    const errorData = await response.text()
    console.error('Resend API error:', errorData)
    throw new Error('Failed to send email')
  }

  return await response.json()
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, message }: PartnershipData = await req.json()

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return new Response(
        JSON.stringify({ error: 'Email service configuration error' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Send notification email to museum team
    const notificationEmail = {
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: "New Partnership Inquiry - Matteson Children's Museum",
      html: getNotificationEmailHtml(name, email, message),
      replyTo: email
    }

    // Send auto-reply to inquirer
    const autoReplyEmail = {
      from: FROM_EMAIL,
      to: [email],
      subject: "Thank you for your partnership inquiry - Matteson Children's Museum",
      html: getAutoReplyEmailHtml(name)
    }

    // Send both emails
    const [notificationResult, autoReplyResult] = await Promise.all([
      sendEmail(notificationEmail),
      sendEmail(autoReplyEmail)
    ])

    console.log('Notification email sent:', notificationResult)
    console.log('Auto-reply email sent:', autoReplyResult)

    return new Response(
      JSON.stringify({ 
        success: true, 
        notificationId: notificationResult.id,
        autoReplyId: autoReplyResult.id 
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in partnership-inquiry function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
}) 