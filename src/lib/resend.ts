import { Resend } from 'resend';

export const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

// Email addresses
export const FROM_EMAIL = 'info@mattesoncm.org';
export const TO_EMAIL = 'info@kenctures.com'; // Temporary: Using personal email for testing

// Email templates
export const NEWSLETTER_CONFIRMATION_TEMPLATE = {
  subject: 'Welcome to the Matteson Children\'s Museum Newsletter!',
  getHtml: (name: string) => `
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
  `,
  getText: (name: string) => `
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
};

export const PARTNERSHIP_INQUIRY_NOTIFICATION = {
  subject: 'New Partnership Inquiry - Matteson Children\'s Museum',
  getHtml: (name: string, email: string, message: string) => `
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
  `,
  getText: (name: string, email: string, message: string) => `
    New Partnership Inquiry - Matteson Children's Museum
    
    You have received a new partnership inquiry for the Matteson Children's Museum.
    
    Contact Information:
    Name/Organization: ${name}
    Email: ${email}
    
    Message:
    ${message}
    
    Next Steps:
    - Reply to this inquiry within 24 hours
    - Schedule a follow-up meeting if appropriate
    - Add contact information to your CRM system
    
    Please respond directly to: ${email}
    
    ---
    Matteson Children's Museum
    Partnership Management System
  `
}; 