// ================================================================
// MGlobal — User Dashboard Logic
// ================================================================

const STATUS_CONFIG = {
  pending:   { label: 'Pending',   color: '#f59e0b', bg: '#fffbeb', icon: '🕐' },
  confirmed: { label: 'Confirmed', color: '#1a73e8', bg: '#eff6ff', icon: '✅' },
  completed: { label: 'Completed', color: '#16a34a', bg: '#f0fdf4', icon: '🎉' },
  cancelled: { label: 'Cancelled', color: '#dc2626', bg: '#fef2f2', icon: '❌' }
};

let allAppointments = [];

/**
 * Load appointments for the currently logged-in user.
 */
async function loadAppointments(user) {
  const grid    = document.getElementById('appointments-grid');
  const empty   = document.getElementById('empty-state');
  const loading = document.getElementById('loading-state');

  if (loading) loading.style.display = 'block';
  if (grid)    grid.innerHTML        = '';

  try {
    // Note: No orderBy here to avoid needing a Firestore composite index.
    // We sort client-side by createdAt instead.
    const snap = await db.collection('appointments')
      .where('userId', '==', user.uid)
      .get();

    allAppointments = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Sort newest first client-side
    allAppointments.sort((a, b) => {
      const aTime = a.createdAt?.seconds || 0;
      const bTime = b.createdAt?.seconds || 0;
      return bTime - aTime;
    });

    if (loading) loading.style.display = 'none';

    if (allAppointments.length === 0) {
      if (empty) empty.style.display = 'block';
      return;
    }

    updateSummaryStats(allAppointments);
    renderAppointments(allAppointments);

  } catch (err) {
    console.error('Error loading appointments:', err);
    if (loading) loading.style.display = 'none';
    if (grid) grid.innerHTML = '<p style="color:#dc2626;padding:20px;">Data load karne mein dikkat hui. Please refresh karein.</p>';
  }
}

/**
 * Render appointment cards to the grid.
 */
function renderAppointments(appointments) {
  const grid = document.getElementById('appointments-grid');
  if (!grid) return;

  grid.innerHTML = '';

  appointments.forEach(apt => {
    const status  = STATUS_CONFIG[apt.status] || STATUS_CONFIG.pending;
    const dateObj = apt.date ? new Date(apt.date + 'T00:00:00') : null;
    const dateStr = dateObj
      ? dateObj.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
      : 'Date not set';

    const card = document.createElement('div');
    card.className = 'apt-card reveal';
    card.innerHTML = `
      <div class="apt-card-header">
        <div class="apt-status-badge" style="background:${status.bg};color:${status.color};">
          ${status.icon} ${status.label}
        </div>
        <div class="apt-booking-id">#${apt.bookingId || apt.id}</div>
      </div>
      <div class="apt-card-body">
        <div class="apt-service">${apt.service || 'Service'}</div>
        <div class="apt-business">${apt.businessName || ''}</div>
        <div class="apt-meta">
          <span>📅 ${dateStr}</span>
          ${apt.timeSlot ? `<span>🕐 ${apt.timeSlot}</span>` : ''}
        </div>
        ${apt.notes ? `<div class="apt-notes">📝 ${apt.notes}</div>` : ''}
      </div>
      <div class="apt-card-footer">
        <span class="apt-category-tag">${formatCategory(apt.category)}</span>
        <button class="apt-cancel-btn" onclick="cancelAppointment('${apt.id || apt.bookingId}')"
          ${apt.status !== 'pending' ? 'disabled title="Cannot cancel"' : ''}>
          Cancel
        </button>
      </div>
    `;
    grid.appendChild(card);

    // Trigger scroll reveal with slight delay per card
    setTimeout(() => card.classList.add('visible'), 80 * grid.children.length);
  });
}

/**
 * Update summary stats at top of dashboard.
 */
function updateSummaryStats(appointments) {
  const total     = appointments.length;
  const pending   = appointments.filter(a => a.status === 'pending').length;
  const confirmed = appointments.filter(a => a.status === 'confirmed').length;
  const completed = appointments.filter(a => a.status === 'completed').length;

  setText('stat-total',     total);
  setText('stat-pending',   pending);
  setText('stat-confirmed', confirmed);
  setText('stat-completed', completed);
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

/**
 * Cancel a pending appointment.
 */
async function cancelAppointment(bookingId) {
  const confirmed = window.confirm('Kya aap is appointment ko cancel karna chahte hain?');
  if (!confirmed) return;

  try {
    await db.collection('appointments').doc(bookingId).update({ status: 'cancelled' });
    // Refresh the list
    const user = auth.currentUser;
    if (user) loadAppointments(user);
  } catch (err) {
    console.error('Cancel error:', err);
    alert('Cancel karne mein dikkat hui. Please dobara try karein.');
  }
}

/**
 * Filter appointments by status.
 */
function filterByStatus(status) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const filtered = status === 'all'
    ? allAppointments
    : allAppointments.filter(a => a.status === status);

  renderAppointments(filtered);
}

function formatCategory(cat) {
  const map = {
    healthcare: '🩺 Healthcare', electrician: '⚡ Electrician',
    restaurant: '🍽 Restaurant', retail: '🛍 Retail',
    gym: '💪 Gym', realestate: '🏠 Real Estate',
    salon: '💅 Salon', law: '⚖ Law'
  };
  return map[cat] || cat;
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  auth.onAuthStateChanged(user => {
    if (user) {
      // Show user name / photo
      const nameEl  = document.getElementById('dashboard-user-name');
      const photoEl = document.getElementById('dashboard-user-photo');
      if (nameEl)  nameEl.textContent = `Namaste, ${user.displayName?.split(' ')[0] || 'User'}! 👋`;
      if (photoEl && user.photoURL) photoEl.src = user.photoURL;

      loadAppointments(user);
    } else {
      // Not logged in → redirect to login
      localStorage.setItem('mglobal_redirect', window.location.href);
      window.location.href = '../pages/login.html';
    }
  });
});
