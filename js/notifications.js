// ================================================================
// MGlobal — Notification Service (Email + SMS)
// ================================================================
// PLACEHOLDERS: Replace API keys before going live.
// EmailJS: https://www.emailjs.com  (free tier: 200 emails/month)
// Fast2SMS: https://www.fast2sms.com (India SMS, cheap rates)
// ================================================================

// ── EMAILJS CONFIGURATION ──────────────────────────────────────
const EMAILJS_CONFIG = {
  publicKey:        'QCB6qZK75yxK-FBkv',   // EmailJS public key
  serviceId:        'service_2yi2dsa',       // EmailJS service ID
  templateCustomer: 'template_mglobalcs',    // template sent to customer
  templateOwner:    'template_mglobalcs'     // using same template for now — update if you create a separate owner template
};

// ── FAST2SMS CONFIGURATION ─────────────────────────────────────
const FAST2SMS_CONFIG = {
  apiKey: 'YOUR_FAST2SMS_API_KEY',   // from fast2sms.com dashboard
  // NOTE: Fast2SMS free sender ID is "FSTSMS"
  // For custom sender ID you need DLT registration (TRAI requirement)
};

// ── OWNER NOTIFICATION EMAIL ───────────────────────────────────
const OWNER_EMAIL = 'smurtuza@enderacorp.com'; // MGlobal owner notification email

// ──────────────────────────────────────────────────────────────

/**
 * Send booking confirmation email to the customer.
 * @param {Object} data - appointment data
 */
async function sendCustomerEmail(data) {
  if (!window.emailjs) {
    console.warn('EmailJS not loaded. Skipping email.');
    return;
  }
  try {
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateCustomer,
      {
        to_name:       data.name,
        to_email:      data.email,
        service:       data.service,
        business_name: data.businessName,
        date:          data.date,
        time_slot:     data.timeSlot || 'Flexible',
        booking_id:    data.bookingId
      },
      EMAILJS_CONFIG.publicKey
    );
    console.log('Customer email sent to:', data.email);
  } catch (err) {
    console.error('Customer email failed:', err);
  }
}

/**
 * Send new lead notification email to the business owner.
 * @param {Object} data - appointment data
 */
async function sendOwnerEmail(data) {
  if (!window.emailjs) {
    console.warn('EmailJS not loaded. Skipping email.');
    return;
  }
  try {
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateOwner,
      {
        to_email:      OWNER_EMAIL,
        customer_name: data.name,
        customer_email:data.email,
        customer_phone:data.phone,
        service:       data.service,
        date:          data.date,
        time_slot:     data.timeSlot || 'Flexible',
        notes:         data.notes || 'None',
        booking_id:    data.bookingId
      },
      EMAILJS_CONFIG.publicKey
    );
    console.log('Owner notification sent to:', OWNER_EMAIL);
  } catch (err) {
    console.error('Owner email failed:', err);
  }
}

/**
 * Send SMS confirmation to customer via Fast2SMS.
 * NOTE: Due to CORS, this should ideally go through a proxy/Cloud Function.
 * For now it makes a direct API call (works on some browsers).
 * @param {Object} data - appointment data
 */
async function sendCustomerSMS(data) {
  const message =
    `Namaste ${data.name}! Aapka appointment request ${data.businessName} mein ` +
    `${data.date} ke liye successfully receive ho gaya hai. ` +
    `Booking ID: ${data.bookingId}. Hum jald hi confirm karenge. -MGlobal`;

  const phone = data.phone.replace(/\D/g, ''); // strip non-digits

  try {
    const response = await fetch('https://www.fast2sms.com/dev/bulkV2', {
      method: 'POST',
      headers: {
        'authorization': FAST2SMS_CONFIG.apiKey,
        'Content-Type':  'application/json'
      },
      body: JSON.stringify({
        route:    'q',         // quick SMS route
        message:  message,
        language: 'english',
        flash:    0,
        numbers:  phone
      })
    });
    const result = await response.json();
    console.log('SMS result:', result);
  } catch (err) {
    console.error('SMS failed (may need CORS proxy):', err);
    // Non-critical — booking is still saved to Firestore
  }
}

/**
 * Trigger all notifications for a new booking.
 * Called after appointment is saved to Firestore.
 * @param {Object} data - appointment data including bookingId
 */
async function sendAllNotifications(data) {
  await Promise.allSettled([
    sendCustomerEmail(data),
    sendOwnerEmail(data),
    sendCustomerSMS(data)
  ]);
}
