import * as nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, nickname } = body;

    if (!email || !nickname) {
      throw createError({ statusCode: 400, message: 'Missing email or nickname' });
    }

    // --- VARIABLES ---
    const baseUrl = "https://www.uhtcrypto.xyz/";
    const uhtLink = `${baseUrl}`; // Personalized link using the ID
    const supportEmail = "support@uhtcrypto.xyz";
    const brandName = "UHT Rewards";

    // --- CONFIGURE TRANSPORTER ---
    let transporter = nodemailer.createTransport({
        host: "mail.privateemail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'support@uhtcrypto.xyz', 
            pass: 'Cracker123' 
        }
    });

    // --- SEND EMAIL ---
    const mail_configs = {
        from: `"${brandName}" <${supportEmail}>`,
        to: email, 
        subject: `Welcome to Season 2, ${nickname}!`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #F6F6F6; font-family: 'Helvetica Neue', Arial, sans-serif; color: #333333;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; margin-top: 20px; border-radius: 12px; overflow: hidden; border: 1px solid #eeeeee;">
        <tr>
            <td align="center" bgcolor="#7C58F2" style="padding: 40px 0;">
                <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -1px;">UHT</h1>
                <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">Proof-of-Health Ecosystem</p>
            </td>
        </tr>

        <tr>
            <td style="padding: 40px 30px;">
                <h2 style="color: #7C58F2; font-size: 24px; margin: 0;">Welcome, ${nickname}!</h2>
                <p style="font-size: 16px; line-height: 1.6; color: #555555; margin-top: 20px;">
                    Your account has been successfully whitelisted for <b>UHT Season 2</b>. We've recorded your activity.
                </p>
                <p style="font-size: 16px; line-height: 1.6; color: #555555;">
                    Your journey to turning wellness into wealth starts now. Access your personalized allocation dashboard below:
                </p>
            </td>
        </tr>

        <tr>
            <td align="center" style="padding: 0 30px 40px 30px;">
                <a href="${uhtLink}" style="background-color: #0A70B8; color: #ffffff; padding: 18px 40px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 18px; display: inline-block;">
                    View My Allocation
                </a>
            </td>
        </tr>

        <tr>
            <td style="padding: 0 30px 30px 30px;">
                <div style="background-color: #F9F9F9; border-radius: 8px; padding: 20px; border: 1px dashed #7C58F2;">
                    <h4 style="margin: 0 0 10px 0; color: #7C58F2;">Season 2 Reminders:</h4>
                    <p style="margin: 0; font-size: 13px; color: #666; line-height: 1.4;">
                        • No ICO required — pure community distribution.<br>
                        • Treasure Hunt multipliers are active.<br>
                        • Final distribution occurs prior to Mainnet launch.
                    </p>
                </div>
            </td>
        </tr>

        <tr>
            <td bgcolor="#333333" style="padding: 30px; text-align: center;">
                <p style="color: #ffffff; font-size: 12px; margin: 0;">© 2026 UHT Foundation. All rights reserved.</p>
                <p style="color: #777777; font-size: 11px; margin-top: 10px;">
                    This email was sent to ${email} regarding your Proof-of-Health registration.
                </p>
            </td>
        </tr>
    </table>
</body>
</html>
`
    };

    await transporter.sendMail(mail_configs);
    return { success: true, message: 'Welcome email sent' };

  } catch (err) {
    console.error("Email Error:", err);
    throw createError({ statusCode: 500, message: err.message });
  }
});