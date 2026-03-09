/* ================================================================
   MGlobal — Internationalization (i18n)
   Languages: en = English (default) | hi = Hinglish
   ================================================================ */

const TRANSLATIONS = {

  /* ────────────── ENGLISH (default) ────────────── */
  en: {
    'page.title': 'MGlobal — Bihar\'s Web Development Agency',

    // NAV
    'nav.templates':    'Templates',
    'nav.process':      'Process',
    'nav.results':      'Results',
    'nav.contact':      'Contact',
    'nav.book':         '📅 Book a Call',
    'nav.login':        '🔐 Login',
    'nav.dashboard':    '📅 My Appointments',
    'nav.signout':      '🚪 Sign Out',
    'nav.my.requests':  'My Requests',

    // HERO
    'hero.badge':       '🌐 Bihar\'s #1 Web Development Agency',
    'hero.h1':          'Bring Your Business <span class="highlight">Online</span> — In Bihar',
    'hero.p':           'MGlobal builds professional websites that attract customers, boost traffic, and increase sales. Serving Patna and all of Bihar.',
    'hero.btn1':        '📅 Book Free Consultation',
    'hero.btn2':        'See Templates →',

    // STATS
    'stats.lbl1':       'Websites Delivered',
    'stats.lbl2':       'Avg. Traffic Growth',
    'stats.lbl3':       'Avg. Sales Growth',
    'stats.lbl4':       'Industries Served',
    'stats.lbl5':       'Client Satisfaction',

    // TEMPLATES SECTION
    'tmpl.tag':         'Template Showcase',
    'tmpl.h2':          'Websites for Every Business in Bihar',
    'tmpl.sub':         'Every template is specifically designed for your profession — keeping Patna and Bihar\'s local customers in mind.',

    // Tab buttons
    'tab.healthcare':   '🩺 Healthcare',
    'tab.elec':         '⚡ Electrician',
    'tab.rest':         '🍽 Restaurant',
    'tab.retail':       '🛍 Retail',
    'tab.gym':          '💪 Gym',
    'tab.realty':       '🏠 Real Estate',
    'tab.salon':        '💅 Salon',
    'tab.law':          '⚖ Law',

    // HEALTHCARE panel
    'hc.h3':    'Healthcare & Medical',
    'hc.p':     'Professional websites for Patna doctors, clinics, and hospitals. Patients can book appointments online, view services, and contact you 24/7.',
    'hc.r3':    'New Patients/Month',
    'hc.book':  '📅 Book for Your Clinic',

    // ELECTRICIAN panel
    'elec.h3':  'Electricians & Tradespeople',
    'elec.p':   'Bold websites for Bihar electricians, plumbers, and AC technicians. Customers can request quotes or call you in one click.',
    'elec.book':'📅 Book for Your Business',

    // RESTAURANT panel
    'rest.h3':  'Restaurants & Dhaba',
    'rest.p':   'Appetising websites for Patna restaurants, dhabas, and catering businesses. Show your menu, take reservations, and accept online orders.',
    'rest.book':'📅 Book for Your Restaurant',

    // RETAIL panel
    'ret.h3':   'Retail & E-commerce',
    'ret.p':    'Powerful online stores for Patna shops and retailers. Display products, take orders, and grow your business across Bihar.',
    'ret.book': '📅 Book for Your Shop',

    // GYM panel
    'gym.h3':   'Gym & Fitness',
    'gym.p':    'High-energy websites for Patna gyms, yoga centres, and fitness trainers. Show classes, sell memberships, and build your community online.',
    'gym.book': '📅 Book for Your Gym',

    // REAL ESTATE panel
    're.h3':    'Real Estate',
    're.p':     'Professional websites for Bihar property dealers, agents, and builders. Showcase listings, capture buyers, and book viewings.',
    're.book':  '📅 Book for Your Agency',

    // SALON panel
    'sal.h3':   'Salon & Beauty Parlour',
    'sal.p':    'Elegant websites for Patna salons, beauty parlours, and spas. Show your portfolio, take appointments, and attract customers 24/7.',
    'sal.book': '📅 Book for Your Salon',

    // LAW panel
    'law.h3':   'Law Firms & Advocates',
    'law.p':    'Authoritative websites for Patna High Court advocates and law firms. Showcase expertise, capture clients, and offer free consultations.',
    'law.book': '📅 Book for Your Firm',

    // RESULT labels (shared across panels)
    'res.bookings':     'Patient Bookings',
    'res.traffic':      'Website Traffic',
    'res.calls':        'Calls Per Month',
    'res.revenue':      'Revenue Growth',
    'res.orders':       'Online Orders',
    'res.reservations': 'Table Reservations',
    'res.monthly':      'Monthly Traffic',
    'res.sales':        'Online Sales',
    'res.products':     'Product Views',
    'res.visitors':     'Monthly Visitors',
    'res.memberships':  'Memberships',
    'res.classes':      'Class Sign-ups',
    'res.enquiries':    'Enquiries',
    'res.listings':     'Listing Views',
    'res.properties':   'Properties Sold',
    'res.appts':        'Appointments',
    'res.portfolio':    'Portfolio Views',
    'res.consult':      'Consultations',
    'res.cases':        'Case Enquiries',
    'res.clients':      'Client Growth',
    'res.quotes':       'Quote Requests',

    // HOW IT WORKS
    'how.tag':      'Our Process',
    'how.h2':       'From Idea to Live Website — In Just a Few Days',
    'how.sub':      'We have made our process simple and stress-free.',
    'step1.h4':     'Free Consultation',
    'step1.p':      'We talk about your goals and vision. No pressure, no jargon.',
    'step2.h4':     'Custom Design',
    'step2.p':      'We prepare a tailored mockup for your brand and industry.',
    'step3.h4':     'Build & Revise',
    'step3.p':      'We build the website and do unlimited revisions based on your feedback.',
    'step4.h4':     'Launch & Grow',
    'step4.p':      'We go live, handle the technical setup, and provide ongoing support.',

    // TESTIMONIALS
    'test.tag':     'Client Results',
    'test.h2':      'Bihar Businesses — Real Growth',
    'test.sub':     'Our work speaks for itself. Here are stories from our Bihar clients.',
    'test.1.quote': '"Within 3 months of the website launch, patient bookings doubled. MGlobal understood exactly what a medical practice needs — clean, professional, and trustworthy."',
    'test.1.role':  'City Medical Clinic · Boring Road, Patna',
    'test.2.quote': '"Before, I only got work by word of mouth. Now I get 10–15 quote requests every week from the website. Investing in MGlobal was the best decision I made."',
    'test.2.role':  'Ravi Electricals · Kankarbagh, Patna',
    'test.3.quote': '"Online orders grew 165% in just two months. MGlobal made the whole process seamless — from design to going live in one week."',
    'test.3.role':  'Patna Rasoi · Bailey Road, Patna',
    'test.4.quote': '"Our shop\'s online presence finally looks the way we always wanted. 40% of our revenue now comes through the website. Incredible work by MGlobal."',
    'test.4.role':  'Maurya Emporium · Patna City',
    'test.5.quote': '"Gym memberships grew 200% after the website launched. The online booking system also saved us hours of admin work every day. Very happy."',
    'test.5.role':  'Chandragupta Fitness · Fraser Road, Patna',
    'test.6.quote': '"Consultation requests grew 160% in the first three months. MGlobal built a website that communicates authority and trust — exactly what a law firm needs."',
    'test.6.role':  'Sharma & Associates · Patna High Court',

    // CTA SECTION
    'cta.tag':  'Free Consultation',
    'cta.h2':   'Ready to Bring Your Business Online?',
    'cta.p':    'Book a free consultation — no commitment, no payment. Just a friendly conversation.',
    'cta.btn':  '📅 Book Free Consultation',
    'cta.note': 'Or call us directly:',

    // FOOTER
    'footer.brand.p':       'Bihar\'s professional web development agency. We build websites that work — from Patna to all of Bihar.',
    'footer.industries':    'Industries',
    'footer.quicklinks':    'Quick Links',
    'footer.contact':       'Contact',
    'footer.lnk.templates': 'Templates',
    'footer.lnk.process':   'Our Process',
    'footer.lnk.results':   'Results',
    'footer.lnk.book':      'Book Consultation',
    'footer.lnk.appts':     'My Appointments',

    // BOOK PAGE
    'book.tag':     'Free Consultation',
    'book.h1':      '🚀 Book a Free Website Consultation',
    'book.subhead': 'Fill in your business details below. We will call or email you within 24 hours.',
    'book.name':        'Your Name',
    'book.email':       'Email Address',
    'book.phone':       'WhatsApp / Phone Number',
    'book.business':    'Business Name',
    'book.category':    'Business Category',
    'book.cat.select':  '-- Select your category --',
    'book.cat.hc':      'Healthcare / Clinic',
    'book.cat.elec':    'Electrician / Plumber / AC',
    'book.cat.rest':    'Restaurant / Dhaba',
    'book.cat.retail':  'Retail / Shop',
    'book.cat.gym':     'Gym / Fitness',
    'book.cat.re':      'Real Estate',
    'book.cat.salon':   'Salon / Beauty Parlour',
    'book.cat.law':     'Law Firm / Advocate',
    'book.cat.other':   'Other',
    'book.service':     'Service Package',
    'book.msg':         'Tell us about your business (optional)',
    'book.acct.chk':    'Create an account to track your request',
    'book.pwd':         'Password',
    'book.pwd.confirm': 'Confirm Password',
    'book.submit':      '🚀 Submit Consultation Request',
    'book.or':          'OR',
    'book.google':      'Sign In with Google',
    'book.success.h2':  'Request Submitted Successfully!',
    'book.success.p1':  'Your consultation request has reached us.',
    'book.success.p2':  'A confirmation will arrive on your email. We will contact you soon.',
    'book.next.title':  '✅ What Happens Next?',
    'book.next.1':      'We will call/email you within 24 hours.',
    'book.next.2':      'We will show you a free demo website.',
    'book.next.3':      'Track all your requests in the',
    'book.next.dashboard': 'Dashboard',
  },

  /* ────────────── HINGLISH ────────────── */
  hi: {
    'page.title': 'MGlobal — Bihar ka Web Development Agency',

    // NAV
    'nav.templates':    'Templates',
    'nav.process':      'Process',
    'nav.results':      'Results',
    'nav.contact':      'Contact',
    'nav.book':         '📅 Call Book Karein',
    'nav.login':        '🔐 Login',
    'nav.dashboard':    '📅 Mere Appointments',
    'nav.signout':      '🚪 Sign Out',
    'nav.my.requests':  'Mere Requests',

    // HERO
    'hero.badge':   '🌐 Bihar ka #1 Web Development Agency',
    'hero.h1':      'Apna Business <span class="highlight">Online Laao</span> — Bihar Mein',
    'hero.p':       'MGlobal banata hai professional websites jo aapke customers attract karein, traffic badhayein, aur sales increase karein. Patna se poore Bihar tak.',
    'hero.btn1':    '📅 Free Consultation Book Karein',
    'hero.btn2':    'Templates Dekho →',

    // STATS
    'stats.lbl1':   'Websites Deliver Kin',
    'stats.lbl2':   'Avg. Traffic Growth',
    'stats.lbl3':   'Avg. Sales Growth',
    'stats.lbl4':   'Industries Serve Kin',
    'stats.lbl5':   'Client Satisfaction',

    // TEMPLATES SECTION
    'tmpl.tag': 'Template Showcase',
    'tmpl.h2':  'Bihar ke Har Business ke Liye Website',
    'tmpl.sub': 'Har template specifically aapke profession ke liye design kiya gaya hai — Patna aur Bihar ke local customers ko dhyan mein rakh ke.',

    // Tab buttons
    'tab.healthcare':   '🩺 Healthcare',
    'tab.elec':         '⚡ Electrician',
    'tab.rest':         '🍽 Restaurant',
    'tab.retail':       '🛍 Retail',
    'tab.gym':          '💪 Gym',
    'tab.realty':       '🏠 Real Estate',
    'tab.salon':        '💅 Salon',
    'tab.law':          '⚖ Law',

    // HEALTHCARE panel
    'hc.h3':    'Healthcare & Medical',
    'hc.p':     'Patna ke doctors, clinics, aur hospitals ke liye professional websites. Patients online appointment book kar sakein, services dekh sakein, aur aapko 24/7 contact kar sakein.',
    'hc.r3':    'Naye Patients/Maah',
    'hc.book':  '📅 Apne Clinic ke Liye Book Karein',

    // ELECTRICIAN panel
    'elec.h3':  'Electricians & Tradespeople',
    'elec.p':   'Bihar ke electricians, plumbers, AC technicians ke liye bold websites. Customers ek click mein quote maang sakein ya seedha call kar sakein.',
    'elec.book':'📅 Apne Business ke Liye Book Karein',

    // RESTAURANT panel
    'rest.h3':  'Restaurants & Dhaba',
    'rest.p':   'Patna ke restaurants, dhabas, aur catering ke liye appetizing websites. Menu dikhao, reservations lo, aur online orders accept karo.',
    'rest.book':'📅 Apne Restaurant ke Liye Book Karein',

    // RETAIL panel
    'ret.h3':   'Retail & E-commerce',
    'ret.p':    'Patna ke shops, boutiques, aur retailers ke liye powerful online stores. Products dikhao, orders lo, aur Bihar bhar mein apna business faelao.',
    'ret.book': '📅 Apne Shop ke Liye Book Karein',

    // GYM panel
    'gym.h3':   'Gym & Fitness',
    'gym.p':    'Patna ke gyms, yoga centers, aur fitness trainers ke liye high-energy websites. Classes dikhao, memberships lo, aur community online banao.',
    'gym.book': '📅 Apne Gym ke Liye Book Karein',

    // REAL ESTATE panel
    're.h3':    'Real Estate',
    're.p':     'Bihar ke property dealers, agents, aur builders ke liye professional websites. Listings dikhao, buyers capture karo, aur viewings book karo.',
    're.book':  '📅 Apne Agency ke Liye Book Karein',

    // SALON panel
    'sal.h3':   'Salon & Beauty Parlour',
    'sal.p':    'Patna ke salons, beauty parlours, aur spas ke liye elegant websites. Portfolio dikhao, appointments lo, aur online booking se 24/7 customers aao.',
    'sal.book': '📅 Apne Salon ke Liye Book Karein',

    // LAW panel
    'law.h3':   'Law Firms & Advocates',
    'law.p':    'Patna High Court ke advocates aur law firms ke liye authoritative websites. Expertise dikhao, clients capture karo, aur free consultation offer karo.',
    'law.book': '📅 Apne Firm ke Liye Book Karein',

    // RESULT labels
    'res.bookings':     'Patient Bookings',
    'res.traffic':      'Website Traffic',
    'res.calls':        'Calls Per Month',
    'res.revenue':      'Revenue Growth',
    'res.orders':       'Online Orders',
    'res.reservations': 'Table Reservations',
    'res.monthly':      'Monthly Traffic',
    'res.sales':        'Online Sales',
    'res.products':     'Product Views',
    'res.visitors':     'Monthly Visitors',
    'res.memberships':  'Memberships',
    'res.classes':      'Class Sign-ups',
    'res.enquiries':    'Enquiries',
    'res.listings':     'Listing Views',
    'res.properties':   'Properties Sold',
    'res.appts':        'Appointments',
    'res.portfolio':    'Portfolio Views',
    'res.consult':      'Consultations',
    'res.cases':        'Case Enquiries',
    'res.clients':      'Client Growth',
    'res.quotes':       'Quote Requests',

    // HOW IT WORKS
    'how.tag':      'Hamara Process',
    'how.h2':       'Idea Se Live Website — Sirf Kuch Dino Mein',
    'how.sub':      'Hamne apna process simple aur stress-free banaya hai.',
    'step1.h4':     'Free Consultation',
    'step1.p':      'Aapke goals aur vision ke baare mein baat karte hain. Koi pressure nahi, koi jargon nahi.',
    'step2.h4':     'Custom Design',
    'step2.p':      'Aapke brand aur industry ke liye tailored mockup ready karte hain.',
    'step3.h4':     'Build & Revise',
    'step3.p':      'Website banate hain, aur aapka feedback leke unlimited revisions karte hain.',
    'step4.h4':     'Launch & Grow',
    'step4.p':      'Live karte hain, technical setup karte hain, aur ongoing support dete hain.',

    // TESTIMONIALS
    'test.tag':     'Client Results',
    'test.h2':      'Bihar ke Businesses — Real Growth',
    'test.sub':     'Humara kaam bolega. Yeh hain hamare Bihar ke clients ki kahani.',
    'test.1.quote': '"Website launch hone ke 3 mahine mein patient bookings double ho gayin. MGlobal ne samjha ki ek medical practice ke liye kya zaroori hai — clean, professional, aur trustworthy."',
    'test.1.role':  'City Medical Clinic · Boring Road, Patna',
    'test.2.quote': '"Pehle sirf munh-zubaani kaam aata tha. Ab website se 10–15 quote requests har hafte aate hain. MGlobal mein invest karna sabse accha faisla tha."',
    'test.2.role':  'Ravi Electricals · Kankarbagh, Patna',
    'test.3.quote': '"Online orders 2 mahine mein 165% badh gaye. MGlobal ne poora process seamless bana diya — design se le ke live hone tak ek hafte mein."',
    'test.3.role':  'Patna Rasoi · Bailey Road, Patna',
    'test.4.quote': '"Hamari dukaan ka online presence finally waise dikh raha hai jaisa hum chahte the. Website se ab 40% revenue aata hai. Incredible kaam kiya MGlobal ne."',
    'test.4.role':  'Maurya Emporium · Patna City',
    'test.5.quote': '"Gym memberships 200% badh gayin website launch ke baad. Online booking system ne hamare ghanton ki admin work bhi bachai. Bahut khush hain."',
    'test.5.role':  'Chandragupta Fitness · Fraser Road, Patna',
    'test.6.quote': '"Pehle teenmahine mein consultation requests 160% badh gayin. MGlobal ne aisi website banayi jo authority aur trust communicate kare — bilkul waisa jo ek law firm chahta hai."',
    'test.6.role':  'Sharma & Associates · Patna High Court',

    // CTA SECTION
    'cta.tag':  'Free Consultation',
    'cta.h2':   'Apna Business Online Laane ke Liye Ready Hain?',
    'cta.p':    'Free consultation book karein — koi commitment nahi, koi payment nahi. Sirf ek friendly conversation.',
    'cta.btn':  '📅 Free Consultation Book Karein',
    'cta.note': 'Ya seedha call karein:',

    // FOOTER
    'footer.brand.p':       'Bihar ka professional web development agency. Hum banate hain websites jo kaam karti hain — Patna se poore Bihar tak.',
    'footer.industries':    'Industries',
    'footer.quicklinks':    'Quick Links',
    'footer.contact':       'Contact',
    'footer.lnk.templates': 'Templates',
    'footer.lnk.process':   'Our Process',
    'footer.lnk.results':   'Results',
    'footer.lnk.book':      'Book Consultation',
    'footer.lnk.appts':     'My Appointments',

    // BOOK PAGE
    'book.tag':     'Free Consultation',
    'book.h1':      '🚀 Free Website Consultation Book Karein',
    'book.subhead': 'Neeche apna business detail fill karein. Hum 24 ghante ke andar aapko call ya email karenge.',
    'book.name':        'Aapka Naam',
    'book.email':       'Email Address',
    'book.phone':       'WhatsApp / Phone Number',
    'book.business':    'Business ka Naam',
    'book.category':    'Business Category',
    'book.cat.select':  '-- Apni category chunein --',
    'book.cat.hc':      'Healthcare / Clinic',
    'book.cat.elec':    'Electrician / Plumber / AC',
    'book.cat.rest':    'Restaurant / Dhaba',
    'book.cat.retail':  'Retail / Dukaan',
    'book.cat.gym':     'Gym / Fitness',
    'book.cat.re':      'Real Estate',
    'book.cat.salon':   'Salon / Beauty Parlour',
    'book.cat.law':     'Law Firm / Advocate',
    'book.cat.other':   'Kuch aur',
    'book.service':     'Service Package',
    'book.msg':         'Apne business ke baare mein batayein (optional)',
    'book.acct.chk':    'Account banao apni request track karne ke liye',
    'book.pwd':         'Password',
    'book.pwd.confirm': 'Password dobara likho',
    'book.submit':      '🚀 Consultation Request Submit Karein',
    'book.or':          'YA',
    'book.google':      'Google se Sign In Karein',
    'book.success.h2':  'Request Successfully Submit Ho Gayi!',
    'book.success.p1':  'Aapki consultation request hum tak pahunch gayi hai.',
    'book.success.p2':  'Aapke email pe confirmation aa jaegi. Hum jald hi contact karenge.',
    'book.next.title':  '✅ Aage Kya Hoga?',
    'book.next.1':      'Hum 24 ghante mein aapko call/email karenge.',
    'book.next.2':      'Free demo website aapko dikhayenge.',
    'book.next.3':      'Apni saari requests track karein',
    'book.next.dashboard': 'Dashboard',
  }
};

/* ── Core i18n engine ── */

function getLanguage() {
  return localStorage.getItem('mglobal_lang') || 'en';
}

function setLanguage(lang) {
  localStorage.setItem('mglobal_lang', lang);
  applyTranslations(lang);
  updateLangButton(lang);
  // Update html[lang] attribute
  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
}

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Page title
  if (t['page.title']) document.title = t['page.title'];

  // Plain text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML content (headings with nested spans, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

function updateLangButton(lang) {
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    if (lang === 'en') {
      btn.innerHTML = `<span class="lang-pill lang-active">EN</span><span class="lang-pill lang-inactive">हिं</span>`;
      btn.title = 'Switch to Hinglish';
    } else {
      btn.innerHTML = `<span class="lang-pill lang-inactive">EN</span><span class="lang-pill lang-active">हिं</span>`;
      btn.title = 'Switch to English';
    }
  });
}

function toggleLanguage() {
  const current = getLanguage();
  setLanguage(current === 'en' ? 'hi' : 'en');
}

// Apply on every page load
document.addEventListener('DOMContentLoaded', () => {
  const lang = getLanguage();
  applyTranslations(lang);
  updateLangButton(lang);
});
