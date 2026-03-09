// ================================================================
// MGlobal — Authentication (Google Sign-In via Firebase)
// ================================================================

/**
 * Sign in with Google popup.
 * On first login → creates user document in Firestore.
 * On subsequent logins → updates lastSeen timestamp.
 * After login → redirects to intended destination (or dashboard).
 */
async function signInWithGoogle() {
  try {
    const result = await auth.signInWithPopup(googleProvider);
    const user   = result.user;

    // Check if this user already exists in Firestore
    const userRef  = db.collection('users').doc(user.uid);
    const userSnap = await userRef.get();

    if (!userSnap.exists) {
      // First-time login — create user document
      await userRef.set({
        uid:       user.uid,
        name:      user.displayName || '',
        email:     user.email || '',
        phone:     '',            // collected on first booking
        photoURL:  user.photoURL || '',
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastSeen:  firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log('New user created:', user.email);
    } else {
      // Returning user — update lastSeen
      await userRef.update({
        lastSeen: firebase.firestore.FieldValue.serverTimestamp()
      });
    }

    // Redirect: go to intended page or dashboard
    const redirect = localStorage.getItem('mglobal_redirect') || '../pages/dashboard.html';
    localStorage.removeItem('mglobal_redirect');
    window.location.href = redirect;

  } catch (error) {
    console.error('Google Sign-In error:', error);
    const msg = document.getElementById('auth-error');
    if (msg) {
      msg.textContent = 'Login failed. Please try again.';
      msg.style.display = 'block';
    }
  }
}

/**
 * Sign out current user and redirect to home.
 */
async function signOut() {
  await auth.signOut();
  window.location.href = '../index.html';
}

/**
 * Listen to auth state changes.
 * Updates nav UI (show/hide login button, user avatar).
 * @param {Function} onLogin  - called when user is logged in
 * @param {Function} onLogout - called when user is logged out
 */
function onAuthStateChange(onLogin, onLogout) {
  auth.onAuthStateChanged(user => {
    if (user) {
      onLogin(user);
    } else {
      onLogout();
    }
  });
}

/**
 * Gate a function behind login.
 * If the user is not logged in → save intended destination and redirect to login.
 * If logged in → run the callback.
 * @param {string}   intendedUrl  - URL to return to after login
 * @param {Function} callback     - function to run if already logged in
 */
function requireLogin(intendedUrl, callback) {
  const user = auth.currentUser;
  if (!user) {
    localStorage.setItem('mglobal_redirect', intendedUrl || window.location.href);
    window.location.href = '../pages/login.html';
    return;
  }
  if (callback) callback(user);
}

/**
 * Update the navbar based on auth state.
 * Looks for elements with id="nav-login-btn" and id="nav-user-area".
 */
function bindNavAuth() {
  onAuthStateChange(
    (user) => {
      const loginBtn  = document.getElementById('nav-login-btn');
      const userArea  = document.getElementById('nav-user-area');
      const userName  = document.getElementById('nav-user-name');
      const userPhoto = document.getElementById('nav-user-photo');

      if (loginBtn)  loginBtn.style.display  = 'none';
      if (userArea)  userArea.style.display  = 'flex';
      if (userName)  userName.textContent    = user.displayName?.split(' ')[0] || 'Account';
      if (userPhoto && user.photoURL) userPhoto.src = user.photoURL;
    },
    () => {
      const loginBtn = document.getElementById('nav-login-btn');
      const userArea = document.getElementById('nav-user-area');
      if (loginBtn) loginBtn.style.display = 'inline-flex';
      if (userArea) userArea.style.display = 'none';
    }
  );
}

// Auto-bind nav on every page load
document.addEventListener('DOMContentLoaded', bindNavAuth);
