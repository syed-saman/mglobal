// ================================================================
// MGlobal — Consultation Booking Logic
// Form is for businesses wanting to get a website made by MGlobal
// ================================================================

// Website packages per business type
const SERVICE_OPTIONS = {
  healthcare:  [
    'Basic Clinic Website (5 pages)',
    'Doctor Portfolio + Appointment Booking',
    'Hospital Full Website',
    'Pharmacy / Medical Store Website',
    'Not sure — chaliye baat karte hain'
  ],
  restaurant:  [
    'Basic Restaurant / Dhaba Website',
    'Menu Website + Online Enquiry',
    'Full Website + Table Reservation',
    'Food Ordering Website',
    'Not sure — chaliye baat karte hain'
  ],
  retail:      [
    'Basic Shop / Showroom Website',
    'Product Catalogue Website',
    'E-commerce Store (Buy Online)',
    'Wholesale Business Website',
    'Not sure — chaliye baat karte hain'
  ],
  realestate:  [
    'Basic Real Estate Agency Website',
    'Property Listing Website',
    'Builder / Developer Website',
    'Full Real Estate Portal',
    'Not sure — chaliye baat karte hain'
  ],
  gym:         [
    'Basic Gym / Fitness Website',
    'Fitness Website + Membership Form',
    'Yoga / Dance Studio Website',
    'Full Gym Website + Trainer Profiles',
    'Not sure — chaliye baat karte hain'
  ],
  salon:       [
    'Basic Salon / Beauty Parlour Website',
    'Salon Website + Online Booking',
    'Spa / Wellness Website',
    'Premium Salon Website + Gallery',
    'Not sure — chaliye baat karte hain'
  ],
  law:         [
    'Basic Law Firm Website',
    'Advocate Portfolio Website',
    'Full Legal Services Website',
    'Not sure — chaliye baat karte hain'
  ],
  electrician: [
    'Basic Service Business Website',
    'Service Portfolio + Contact / Lead Form',
    'Full Website + Service Area Map',
    'Not sure — chaliye baat karte hain'
  ],
  other:       [
    'Basic Business Website (5 pages)',
    'Landing Page Only',
    'Custom Website',
    'Website Redesign / Revamp',
    'Not sure — chaliye baat karte hain'
  ]
};

/**
 * Populate the Service / Package dropdown based on selected business type.
 */
function populateServices(category) {
  const select = document.getElementById('service');
  if (!select) return;
  select.innerHTML = '<option value="">-- Package chunein --</option>';
  const services = SERVICE_OPTIONS[category] || SERVICE_OPTIONS.other;
  services.forEach(svc => {
    const opt = document.createElement('option');
    opt.value = svc; opt.textContent = svc;
    select.appendChild(opt);
  });
}

/**
 * Pre-fill from URL params (e.g. ?category=restaurant&business=Patna+Rasoi)
 */
function prefillFromURL() {
  const params   = new URLSearchParams(window.location.search);
  const category = params.get('category') || '';

  const catSelect = document.getElementById('category');
  if (catSelect && category) {
    catSelect.value = category;
    populateServices(category);
  }

  // Set min date to today
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    // Default to 2 days from now
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 2);
    dateInput.value = defaultDate.toISOString().split('T')[0];
  }
}

/**
 * Generate a short readable booking/request ID.
 */
function generateBookingId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let id = 'MG-';
  for (let i = 0; i < 6; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

/**
 * Validate phone number (Indian mobile: 10 digits starting with 6-9).
 */
function validatePhone(phone) {
  return /^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''));
}

/**
 * Handle consultation form submission.
 * Supports three auth paths:
 *   1. Already signed in (Google or email) — use existing userId
 *   2. Checkbox checked — create email/password account then save
 *   3. Guest — save booking without userId (email only)
 */
async function handleBookingSubmit(e) {
  e.preventDefault();

  const btn = document.getElementById('submit-btn');
  btn.disabled    = true;
  btn.textContent = 'Submitting...';

  // Collect form values
  const name            = document.getElementById('name').value.trim();
  const email           = document.getElementById('email').value.trim();
  const phone           = document.getElementById('phone').value.trim();
  const businessName    = document.getElementById('business-name')?.value.trim() || '';
  const category        = document.getElementById('category')?.value || 'other';
  const service         = document.getElementById('service').value;
  const budget          = document.getElementById('budget')?.value || '';
  const currentWebsite  = document.getElementById('current-website')?.value.trim() || '';
  const date            = document.getElementById('date').value;
  const timeSlot        = document.getElementById('time-slot')?.value || '';
  const notes           = document.getElementById('notes')?.value.trim() || '';
  const createAcct      = document.getElementById('create-account')?.checked || false;
  const password        = document.getElementById('password')?.value || '';
  const confirmPwd      = document.getElementById('confirm-password')?.value || '';

  const resetBtn = () => {
    btn.disabled    = false;
    btn.textContent = '🚀 Free Consultation Book Karein';
  };

  // Basic validations
  if (!businessName) {
    showError('Kripya apne business / shop ka naam dalein.');
    resetBtn(); return;
  }
  if (!validatePhone(phone)) {
    showError('Kripya valid 10-digit mobile number dalein.');
    resetBtn(); return;
  }
  if (createAcct) {
    if (password.length < 6) {
      showError('Password kam se kam 6 characters ka hona chahiye.');
      resetBtn(); return;
    }
    if (password !== confirmPwd) {
      showError('Dono passwords match nahi kar rahe hain. Dobara check karein.');
      resetBtn(); return;
    }
  }

  // ── RESOLVE USER ID ────────────────────────────────────────
  let userId = auth.currentUser?.uid || null;

  if (!userId && createAcct) {
    // Path 2: Create email/password account
    try {
      const cred = await firebase.auth().createUserWithEmailAndPassword(email, password);
      userId = cred.user.uid;
      // Save user profile to Firestore
      await db.collection('users').doc(userId).set(
        { name, email, phone, createdAt: firebase.firestore.FieldValue.serverTimestamp() },
        { merge: true }
      );
    } catch (authErr) {
      if (authErr.code === 'auth/email-already-in-use') {
        // Account exists — try signing in
        try {
          const cred = await firebase.auth().signInWithEmailAndPassword(email, password);
          userId = cred.user.uid;
        } catch {
          showError('Is email se pehle se account hai aur password galat hai. Sahi password dalein ya Google se login karein.');
          resetBtn(); return;
        }
      } else {
        showError('Account create karne mein dikkat aayi: ' + authErr.message);
        resetBtn(); return;
      }
    }
  }
  // Path 3: Guest — userId stays null, booking saved with email only

  // ── SAVE BOOKING ───────────────────────────────────────────
  const bookingId = generateBookingId();

  const appointmentData = {
    bookingId,
    userId:        userId || null,
    isGuest:       !userId,
    name,
    email,
    phone,
    businessName,
    category,
    service,
    budget,
    currentWebsite,
    date,
    timeSlot,
    notes,
    status:        'pending',
    createdAt:     firebase.firestore.FieldValue.serverTimestamp()
  };

  try {
    await db.collection('appointments').doc(bookingId).set(appointmentData);

    // Update phone on user profile if logged in
    if (userId) {
      await db.collection('users').doc(userId).set({ phone }, { merge: true });
    }

    await sendAllNotifications({ ...appointmentData, bookingId });
    showSuccess(bookingId);

  } catch (err) {
    console.error('Booking error:', err);
    showError('Kuch galti ho gayi. Please dobara try karein.');
    btn.disabled    = false;
    btn.textContent = '🚀 Free Consultation Book Karein';
  }
}

function showError(msg) {
  const el = document.getElementById('form-error');
  if (el) {
    el.textContent   = msg;
    el.style.display = 'block';
    el.style.cssText += ';color:#dc2626;background:#fef2f2;padding:10px 14px;border-radius:8px;margin-bottom:12px;font-size:.9rem;';
  }
}

function showSuccess(bookingId) {
  const form    = document.getElementById('booking-form');
  const success = document.getElementById('booking-success');
  const bidEl   = document.getElementById('success-booking-id');
  if (form)    form.style.display    = 'none';
  if (success) success.style.display = 'block';
  if (bidEl)   bidEl.textContent     = bookingId;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Init on DOMContentLoaded ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  prefillFromURL();

  const form = document.getElementById('booking-form');
  if (form) form.addEventListener('submit', handleBookingSubmit);

  // Business type change → refresh package dropdown
  const catSelect = document.getElementById('category');
  if (catSelect) {
    catSelect.addEventListener('change', () => {
      populateServices(catSelect.value);
    });
  }
});
