const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}[character]));

export const profileCreatedEmail = (name) => `
  <div style="font-family:Arial,sans-serif;max-width:500px;margin:auto;padding:24px;color:#0f172a;">
    <h2 style="color:#2563eb;">Docxio</h2>
    <h3>Hi Dr. ${escapeHtml(name || "Doctor")},</h3>
    <p>Your Docxio profile has been created successfully.</p>
    <p>You can now continue to your dashboard and build your professional online presence.</p>
    <a href="https://docxio.com/dashboard"
       style="display:inline-block;background:#2563eb;color:#fff;padding:12px 20px;text-decoration:none;border-radius:6px;">
      Go to Dashboard
    </a>
    <p style="margin-top:24px;color:#64748b;font-size:13px;">
      Need help? Contact us at info@docxio.com
    </p>
    <p>Best regards,<br/>Team Docxio</p>
  </div>
`;

export const websiteCreatedEmail = (name, websiteUrl) => `
  <div style="font-family:Arial,sans-serif;max-width:500px;margin:auto;padding:24px;color:#0f172a;">
    <h2 style="color:#2563eb;">Docxio</h2>
    <h3>Hi Dr. ${escapeHtml(name || "Doctor")},</h3>
    <p>Your doctor website has been created successfully. We are preparing its content now.</p>
    ${websiteUrl
      ? `<p><a href="${escapeHtml(websiteUrl)}">View your website</a></p>`
      : `<p>Visit your dashboard to check on your website.</p>`}
    <a href="https://docxio.com/dashboard/my-website"
       style="display:inline-block;background:#2563eb;color:#fff;padding:12px 20px;text-decoration:none;border-radius:6px;">
      Manage Your Website
    </a>
    <p style="margin-top:24px;color:#64748b;font-size:13px;">
      Need help? Contact us at info@docxio.com
    </p>
    <p>Best regards,<br/>Team Docxio</p>
  </div>
`;

export const trialEndingSoonEmail = (name) => `
  <div style="font-family:Arial,sans-serif;max-width:500px;margin:auto;padding:24px;color:#0f172a;">
    <h2 style="color:#2563eb;">Docxio</h2>
    <h3>Hi Dr. ${name || "Doctor"},</h3>
    <p>Your free trial will end in <strong>3 days</strong>.</p>
    <p>Upgrade your plan to continue using your professional doctor website without interruption.</p>
    <a href="https://docxio.com/dashboard/billing"
       style="display:inline-block;background:#2563eb;color:#fff;padding:12px 20px;text-decoration:none;border-radius:6px;">
      View Plans
    </a>
    <p style="margin-top:24px;color:#64748b;font-size:13px;">
      Need help? Contact us at info@docxio.com
    </p>
    <p>Best regards,<br/>Team Docxio</p>
  </div>
`;

export const trialEndedEmail = (name) => `
  <div style="font-family:Arial,sans-serif;max-width:500px;margin:auto;padding:24px;color:#0f172a;">
    <h2 style="color:#2563eb;">Docxio</h2>
    <h3>Hi Dr. ${name || "Doctor"},</h3>
    <p>Your 15-day free trial has ended.</p>
    <p>Choose a plan to continue using your professional doctor website.</p>
    <a href="https://docxio.com/dashboard/billing"
       style="display:inline-block;background:#2563eb;color:#fff;padding:12px 20px;text-decoration:none;border-radius:6px;">
      Choose a Plan
    </a>
    <p style="margin-top:24px;color:#64748b;font-size:13px;">
      Questions? Contact us at info@docxio.com
    </p>
    <p>Best regards,<br/>Team Docxio</p>
  </div>
`;

export const subscriptionEndingSoonEmail = (name, days) => `
  <div style="font-family:Arial,sans-serif;max-width:500px;margin:auto;padding:24px;color:#0f172a;">
    <h2 style="color:#2563eb;">Docxio</h2>
    <h3>Hi Dr. ${name || "Doctor"},</h3>
    <p>Your Docxio subscription will end in <strong>${days} days</strong>.</p>
    <p>Renew your subscription to keep your professional doctor website available to your patients.</p>
    <a href="https://docxio.com/dashboard/billing"
       style="display:inline-block;background:#2563eb;color:#fff;padding:12px 20px;text-decoration:none;border-radius:6px;">
      Renew Subscription
    </a>
    <p style="margin-top:24px;color:#64748b;font-size:13px;">
      Need help? Contact us at info@docxio.com
    </p>
    <p>Best regards,<br/>Team Docxio</p>
  </div>
`;


export const subscriptionEndedEmail = (name) => `
  <div style="font-family:Arial,sans-serif;max-width:500px;margin:auto;padding:24px;color:#0f172a;">
    <h2 style="color:#2563eb;">Docxio</h2>
    <h3>Hi Dr. ${name || "Doctor"},</h3>
    <p>Your Docxio subscription has ended.</p>
    <p>Renew your plan to continue using your professional doctor website and maintain your online presence.</p>
    <a href="https://docxio.com/dashboard/billing"
       style="display:inline-block;background:#2563eb;color:#fff;padding:12px 20px;text-decoration:none;border-radius:6px;">
      Renew Now
    </a>
    <p style="margin-top:24px;color:#64748b;font-size:13px;">
      Questions? Contact us at info@docxio.com
    </p>
    <p>Best regards,<br/>Team Docxio</p>
  </div>
`;