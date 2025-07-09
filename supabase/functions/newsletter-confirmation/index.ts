import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

console.log("Newsletter confirmation function loaded!")

interface NewsletterData {
  name: string
  email: string
}

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const FROM_EMAIL = 'info@mattesoncm.org'

const getWelcomeEmailHtml = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to MCM Newsletter</title>
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
      background-color: #2563eb;
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
      background-color: #16a34a;
      color: white;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 6px;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Welcome to the Matteson Children's Museum Newsletter!</h1>
  </div>
  <div class="content">
    <p>Dear ${name},</p>
    
    <p>Thank you for subscribing to our newsletter! We're excited to keep you updated on our progress as we work to bring the Matteson Children's Museum to life.</p>
    
    <p>You'll receive regular updates about:</p>
    <ul>
      <li>Construction progress and milestones</li>
      <li>Community events and fundraising activities</li>
      <li>Volunteer opportunities</li>
      <li>Educational programs and exhibits</li>
      <li>Ways to get involved and support our mission</li>
    </ul>
    
    <p>We're building more than just a museum – we're creating a space where children can learn, explore, and grow in a safe, nurturing environment.</p>
    
    <a href="https://mattesoncm.org" class="button">Visit Our Website</a>
    
    <p>If you have any questions or would like to get more involved, please don't hesitate to reach out to us at info@mattesoncm.org.</p>
    
    <p>Thank you for being part of our journey!</p>
    
    <p>Best regards,<br>
    The Matteson Children's Museum Team</p>
  </div>
  <div class="footer">
    <p>Matteson Children's Museum<br>
    Building Wonder, One Child at a Time<br>
    <a href="https://mattesoncm.org">mattesoncm.org</a></p>
  </div>
</body>
</html>
`

const getWelcomeEmailText = (name: string) => `
Welcome to the Matteson Children's Museum Newsletter!

Dear ${name},

Thank you for subscribing to our newsletter! We're excited to keep you updated on our progress as we work to bring the Matteson Children's Museum to life.

You'll receive regular updates about:
- Construction progress and milestones
- Community events and fundraising activities
- Volunteer opportunities
- Educational programs and exhibits
- Ways to get involved and support our mission

We're building more than just a museum – we're creating a space where children can learn, explore, and grow in a safe, nurturing environment.

Visit our website: https://mattesoncm.org

If you have any questions or would like to get more involved, please don't hesitate to reach out to us at info@mattesoncm.org.

Thank you for being part of our journey!

Best regards,
The Matteson Children's Museum Team

---
Matteson Children's Museum
Building Wonder, One Child at a Time
mattesoncm.org
`

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email }: NewsletterData = await req.json()

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required' }),
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

    const emailData = {
      from: FROM_EMAIL,
      to: [email],
      subject: "Welcome to the Matteson Children's Museum Newsletter!",
      html: getWelcomeEmailHtml(name),
      text: getWelcomeEmailText(name)
    }

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
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    const result = await response.json()
    console.log('Email sent successfully:', result)

    return new Response(
      JSON.stringify({ success: true, id: result.id }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in newsletter-confirmation function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
}) 