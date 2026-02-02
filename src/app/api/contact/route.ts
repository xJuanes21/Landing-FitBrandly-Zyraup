import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, company, message, formType } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const isEarlyAccess = formType === "early_access";
    const subject = isEarlyAccess 
      ? `🚀 [Acceso Anticipado] Nuevo lead: ${name}` 
      : `📩 [Contacto] Mensaje de: ${name}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { 
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, Arial, sans-serif; 
              background-color: #050505; 
              color: #FFFFFF; 
              margin: 0; 
              padding: 40px 20px; 
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: #000000; 
              border: 1px solid rgba(255, 255, 255, 0.1); 
              border-radius: 32px; 
              overflow: hidden; 
              box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
            }
            .header { 
              background: #000000;
              padding: 50px 40px; 
              text-align: center;
              border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
            .logo-container {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 10px;
            }
            .logo-img {
              width: 50px;
              height: 50px;
              margin-right: 15px;
            }
            .brand-name {
              font-size: 32px;
              font-weight: 900;
              letter-spacing: -0.02em;
              margin: 0;
            }
            .brand-fit { color: #FFFFFF; }
            .brand-brandly { color: #00E5FF; }
            .content { padding: 40px; }
            .badge { 
              display: inline-block; 
              padding: 6px 16px; 
              border-radius: 12px; 
              font-size: 11px; 
              font-weight: 800; 
              text-transform: uppercase; 
              letter-spacing: 1px;
              margin-bottom: 30px; 
              background: #111111;
              border: 1px solid;
            }
            .badge-early { color: #00E5FF; border-color: rgba(0, 229, 255, 0.3); }
            .badge-contact { color: #3B82F6; border-color: rgba(59, 130, 246, 0.3); }
            
            .field-row { margin-bottom: 25px; }
            .label { 
              color: rgba(255, 255, 255, 0.4); 
              font-size: 11px; 
              font-weight: 700; 
              text-transform: uppercase; 
              letter-spacing: 2px; 
              margin-bottom: 8px; 
            }
            .value { 
              font-size: 18px; 
              color: #FFFFFF; 
              font-weight: 500; 
              padding-left: 5px;
              border-left: 2px solid #00E5FF;
            }
            .message-box {
              background: #111111;
              padding: 20px;
              border-radius: 16px;
              margin-top: 10px;
              border: 1px solid rgba(255, 255, 255, 0.05);
              font-style: italic;
              color: rgba(255, 255, 255, 0.8);
            }
            .footer { 
              padding: 30px; 
              text-align: center; 
              font-size: 11px; 
              color: rgba(255, 255, 255, 0.3); 
              background: #080808; 
              border-top: 1px solid rgba(255, 255, 255, 0.05); 
              letter-spacing: 1px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo-container">
                <img src="cid:logo_icon" class="logo-img" alt="FitBrandly" />
                <h1 class="brand-name"><span class="brand-fit">Fit</span><span class="brand-brandly">Brandly</span></h1>
              </div>
            </div>
            <div class="content">
              <div class="badge ${isEarlyAccess ? 'badge-early' : 'badge-contact'}">
                ${isEarlyAccess ? '🚀 Acceso Anticipado' : '📩 Contacto Directo'}
              </div>
              
              <div class="field-row">
                <div class="label">Perteneciente a</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field-row">
                <div class="label">Email de contacto</div>
                <div class="value"><a href="mailto:${email}" style="color: #00E5FF; text-decoration: none;">${email}</a></div>
              </div>
              
              ${whatsapp ? `
              <div class="field-row">
                <div class="label">Número WhatsApp</div>
                <div class="value">${whatsapp}</div>
              </div>
              ` : ''}
              
              <div class="field-row">
                <div class="label">Gimnasio / Marca</div>
                <div class="value">${company}</div>
              </div>
              
              ${message ? `
              <div class="field-row">
                <div class="label">Mensaje o Dudas</div>
                <div class="message-box">${message}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              © 2026 FitBrandly System • Cali, Colombia<br>
              Notificación automática para el equipo administrativo.
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Sistemas FitBrandly" <${process.env.EMAIL_USER}>`,
      to: "fitbrandly@gmail.com",
      subject: subject,
      html: htmlContent,
      attachments: [
        {
          filename: 'icon.png',
          path: process.cwd() + '/public/icons/icon.png',
          cid: 'logo_icon'
        }
      ]
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
