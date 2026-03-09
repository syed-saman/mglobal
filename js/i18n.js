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
  },

  /* ────────────── HINGLISH — TEMPLATE-SPECIFIC ────────────── */
  /* These keys are only used in the 8 template pages */

};

// ── Merge template-specific translations ──
(function() {
  const tEn = {
    // ═══ HEALTHCARE ═══
    't.hc.hero.h1':    'Patna\'s Trusted Doctor — Dr. Ramesh Kumar',
    't.hc.hero.p':     '20+ years of experience. General medicine, fever, diabetes, BP, and child health. Trust us with your family\'s health.',
    't.hc.hero.card':  '📊 Results After Website',
    't.hc.hero.btn':   '📅 Book Appointment',
    't.hc.svc.title':  'Our Services',
    't.hc.svc.sub':    'Complete family healthcare in Patna',
    't.hc.svc.1':      'Fever, cold and flu treatment',
    't.hc.svc.3':      'Sugar level control and diet guidance',
    't.hc.svc.4':      'Child health, vaccination',
    't.hc.svc.6':      'Tooth pain, cleaning, filling',
    't.hc.svc.7':      'Eye checkup, spectacle prescription',
    't.hc.svc.8':      'Medicines available directly from clinic',
    't.hc.doc.title':  'Our Doctors',
    't.hc.doc.sub':    'The best of experience and expertise',
    't.hc.book.h2':    'Book Your Appointment Today',
    't.hc.book.p':     'Online booking available 24/7. No waiting.',
    't.hc.nav.btn':    'Book Appointment',

    // ═══ ELECTRICIAN ═══
    't.elec.hero.h1':   'Patna\'s Most Trusted Electrician',
    't.elec.hero.p':    'Home, shop, or factory — any electrical work, do it with Ravi Electricals. Same-day service available. 500+ satisfied customers.',
    't.elec.nav.btn':   'Get Free Quote',
    't.elec.hero.btn1': '📋 Get Free Quote',
    't.elec.svc.title': 'Our Electrical Services',
    't.elec.svc.sub':   'From residential to commercial — everything',
    't.elec.svc.1':     'New wiring for home or shop',
    't.elec.svc.2':     'Fix any electrical problem',
    't.elec.why.title': 'Why Choose Ravi Electricals?',
    't.elec.why.1':     'Available same day for emergencies. Any area in Patna.',
    't.elec.why.2':     'Fully licensed and insured. Your home is in safe hands.',
    't.elec.why.3':     'No hidden charges. Quote first, work after.',
    't.elec.why.4':     '15+ years working in Patna. Full understanding of local requirements.',
    't.elec.why.5':     'ISI marked materials, proper earthing, and long-lasting solutions.',
    't.elec.why.6':     'Helpline after the work too. Any problem — call us.',
    't.elec.book.h2':   'Need a Free Quote? Book Now',
    't.elec.book.p':    'Fill the form, we\'ll call within 2 hours and do a site visit.',
    't.elec.book.btn':  '📋 Book Free Quote',

    // ═══ RESTAURANT ═══
    't.rest.hero.h1':   'Authentic Bihar Flavour — Patna Rasoi',
    't.rest.hero.p':    'Litti Chokha, Dal Puri, Sattu Paratha, Makhana Kheer — real home-cooked Bihari food. Patna\'s most beloved restaurant.',
    't.rest.nav.btn':   'Reserve Table',
    't.rest.hero.btn1': '🪑 Reserve a Table',
    't.rest.stats.1':   'on Bailey Road',
    't.rest.menu.title':'Our Menu',
    't.rest.menu.sub':  'Pure Bihari recipes, made with homestyle spices',
    't.rest.sp1.p':     '4 people — Bihari Thali + Litti Chokha + Makhana Kheer. Only ₹599. Reservation required.',
    't.rest.sp2.p':     'Free delivery to Bailey Road, Boring Road, Kankarbagh, Fraser Road on orders above ₹399.',
    't.rest.sp3.p':     'Book the private dining room. Special arrangements for 10+ people.',
    't.rest.sp4.p':     'Catering for office lunches, events, and functions. Per-head pricing available.',
    't.rest.book.h2':   'Reserve a Table — Now',
    't.rest.book.p':    'Reserve online, skip the walk-in wait.',

    // ═══ RETAIL ═══
    't.ret.hero.badge': '🛍 Patna City · Bihar\'s Shopping Destination Since 1990',
    't.ret.hero.h1':    'Bihar\'s Best Sarees & Clothing — Maurya Emporium',
    't.ret.hero.p':     'Banarasi saree, silk, cotton, lehenga — everything available. Stores in Patna City and Boring Road. Home delivery across Bihar.',
    't.ret.hero.btn1':  '🛒 Order Online',
    't.ret.cat.title':  'Our Categories',
    't.ret.cat.sub':    'Patna\'s largest textile collection',
    't.ret.del.h3':     '🚚 Bihar-Wide Home Delivery',
    't.ret.del.p':      'Delivery to Patna, Muzaffarpur, Gaya, Bhagalpur, Darbhanga — all of Bihar. Free delivery above ₹999.',

    // ═══ GYM ═══
    't.gym.hero.h1':    'Transform Your Body — With Patna\'s Best',
    't.gym.hero.p':     'Chandragupta Fitness — Patna\'s most complete gym. Personal training, yoga, zumba, and boxing. 800+ members. Expert trainers.',
    't.gym.hero.btn1':  '🆓 Book Free Trial',
    't.gym.stats.4':    'on Fraser Road',
    't.gym.cls.title':  'Our Classes',
    't.gym.cls.sub':    'Choose according to your fitness goal',
    't.gym.mem.sub':    'Choose the right plan for your budget and goal',
    't.gym.cls.incl':   'Included in membership',
    't.gym.trn.title':  'Our Expert Trainers',
    't.gym.book.h2':    'Want a Free Trial?',
    't.gym.book.p':     'Book a free trial session. No commitment.',
    't.gym.book.btn':   '🆓 Book Free Trial',

    // ═══ SALON ═══
    't.sal.hero.badge': '💅 Boring Road, Patna · Bihar\'s #1 Beauty Parlour Since 2008',
    't.sal.hero.h1':    'Looking Beautiful is Your Right — Shringar Beauty Parlour',
    't.sal.hero.p':     'Hair, skin, nails, bridal makeup — everything in one place. Patna\'s trusted beauty parlour with certified stylists. 15+ years of experience.',
    't.sal.nav.btn':    'Book Appointment',
    't.sal.hero.btn1':  '📅 Book Appointment',
    't.sal.svc.title':  'Our Beauty Services',
    't.sal.bridal.p':   'Your wedding is special. Our bridal makeup artists have prepared 500+ brides. Mehendi, sangeet, wedding — special packages for all three.',
    't.sal.bridal.btn': '💍 Book Bridal Package',
    't.sal.styl.title': 'Our Expert Stylists',
    't.sal.book.h2':    'Book Your Appointment — Now',
    't.sal.book.p':     'Online booking available 24/7. No waiting.',

    // ═══ REAL ESTATE ═══
    't.re.hero.h1':     'Find Your Home in Patna — Bihar Griha Properties',
    't.re.hero.p':      'Flats, plots, commercial spaces — in every area of Patna. 10+ years of trust. 500+ properties sold. Expert guidance at every step.',
    't.re.hero.btn1':   '📅 Book Free Site Visit',
    't.re.stats.2':     'in Patna',
    't.re.book.h2':     'Book a Free Site Visit',
    't.re.book.p':      'We\'ll personally show you the property — no commitment.',
    't.re.book.btn':    '📅 Book Free Visit',

    // ═══ LAW ═══
    't.law.hero.h1':    'Fighting for Your Rights — Sharma & Associates',
    't.law.hero.p':     'Property dispute or family matter, criminal case or corporate — experienced advocates at Patna High Court are with you. 25+ years of legal experience.',
    't.law.hero.btn1':  '🆓 Book Free Consultation',
    't.law.hero.card':  '📊 Results After Website',
    't.law.prac.title': 'Our Practice Areas',
    't.law.prac.sub':   'Expertise in Bihar and Jharkhand courts',
    't.law.adv.title':  'Our Advocates',
    't.law.why.title':  'Why Sharma & Associates?',
    't.law.why.1':      'First meeting completely free. Discuss your case, understand the right path.',
    't.law.why.2':      '25+ years of practice at Patna High Court. Deep understanding of Bihar\'s legal system.',
    't.law.why.3':      'Not in legal jargon, explained in plain language. No confusion.',
    't.law.why.4':      'Case status on WhatsApp. You\'ll never be left in the dark.',
    't.law.why.5':      'Clear pricing upfront. No hidden charges. Written agreement provided.',
    't.law.why.6':      '1000+ cases. 95% success rate. Among Bihar\'s top lawyers.',
    't.law.book.h2':    'Book Free Legal Consultation',
    't.law.book.p':     'Tell us your case — we\'ll show you the right path. No commitment.',
    't.law.book.btn':   '🆓 Book Free Consultation',
  };

  const tHi = {
    // ═══ HEALTHCARE ═══
    't.hc.hero.h1':    'Patna ke Bharose ka Doctor — Dr. Ramesh Kumar',
    't.hc.hero.p':     '20+ saal ka anubhav. General medicine, fever, diabetes, BP, aur child health. Apne parivaar ki sehat humpar chhodein.',
    't.hc.hero.card':  '📊 Website ke Baad Results',
    't.hc.hero.btn':   '📅 Appointment Book Karein',
    't.hc.svc.title':  'Hamari Services',
    't.hc.svc.sub':    'Hum provide karte hain complete family healthcare — Patna mein',
    't.hc.svc.1':      'Bukhaar, khaansi, sard-jukaam ka ilaaj',
    't.hc.svc.3':      'Sugar level control aur diet guidance',
    't.hc.svc.4':      'Bacchon ki sehat, vaccination',
    't.hc.svc.6':      'Daant ka dard, cleaning, filling',
    't.hc.svc.7':      'Aankhon ki jaanch, chasma prescription',
    't.hc.svc.8':      'Dawai seedha clinic se milegi',
    't.hc.doc.title':  'Hamare Doctors',
    't.hc.doc.sub':    'Experience aur expertise ka best combination',
    't.hc.book.h2':    'Aaj Hi Appointment Book Karein',
    't.hc.book.p':     'Online booking 24/7 available hai. Koi waiting nahi.',
    't.hc.nav.btn':    'Appointment Book Karein',

    // ═══ ELECTRICIAN ═══
    't.elec.hero.h1':   'Patna ka Sabse Bharosemand Electrician',
    't.elec.hero.p':    'Ghar, dukaan, ya factory — bijli ka koi bhi kaam Ravi Electricals se karo. Same-day service available. 500+ satisfied customers.',
    't.elec.nav.btn':   'Free Quote Lo',
    't.elec.hero.btn1': '📋 Free Quote Lo',
    't.elec.svc.title': 'Hamari Electrical Services',
    't.elec.svc.sub':   'Residential se leke commercial tak — sab kuch',
    't.elec.svc.1':     'Ghar ya dukaan ki nayi wiring',
    't.elec.svc.2':     'Koi bhi bijli ki problem theek karein',
    't.elec.why.title': 'Ravi Electricals Kyun Chunein?',
    't.elec.why.1':     'Emergency kaam ke liye usi din available hain. Patna ke kisi bhi area mein.',
    't.elec.why.2':     'Fully licensed aur insured. Aapka ghar safe hands mein hai.',
    't.elec.why.3':     'Koi hidden charge nahi. Quote pehle, kaam baad mein.',
    't.elec.why.4':     '15+ saal Patna mein kaam kiya hai. Local requirements ki poori samajh hai.',
    't.elec.why.5':     'ISI marked materials, proper earthing, aur long-lasting solutions.',
    't.elec.why.6':     'Kaam ke baad bhi helpline. Koi bhi problem — call karein.',
    't.elec.book.h2':   'Free Quote Chahiye? Abhi Book Karein',
    't.elec.book.p':    'Form bharo, hum 2 ghante mein call karenge aur site visit karenge.',
    't.elec.book.btn':  '📋 Free Quote Book Karein',

    // ═══ RESTAURANT ═══
    't.rest.hero.h1':   'Asli Bihar ka Swad — Patna Rasoi',
    't.rest.hero.p':    'Litti Chokha, Dal Puri, Sattu Paratha, Makhana Kheer — Bihar ka asli ghar ka khaana. Patna ka sabse beloved restaurant.',
    't.rest.nav.btn':   'Table Reserve Karein',
    't.rest.hero.btn1': '🪑 Table Reserve Karein',
    't.rest.stats.1':   'Bailey Road pe',
    't.rest.menu.title':'Hamara Menu',
    't.rest.menu.sub':  'Pure Bihari recipes, ghar ke masalon se bane',
    't.rest.sp1.p':     '4 log — Bihari Thali + Litti Chokha + Makhana Kheer. Sirf ₹ 599. Reservation zaroori hai.',
    't.rest.sp2.p':     'Bailey Road, Boring Road, Kankarbagh, Fraser Road tak free delivery ₹399 ke order par.',
    't.rest.sp3.p':     'Private dining room book karein. 10+ log ke liye special arrangements available.',
    't.rest.sp4.p':     'Office lunches, events, aur functions ke liye catering. Per-head pricing available.',
    't.rest.book.h2':   'Table Reserve Karein — Abhi',
    't.rest.book.p':    'Online reservation kar lo, walk-in wait se bachenge.',

    // ═══ RETAIL ═══
    't.ret.hero.badge': '🛍 Patna City · Bihar ka Shopping Destination Since 1990',
    't.ret.hero.h1':    'Bihar ki Best Sarees & Clothing — Maurya Emporium',
    't.ret.hero.p':     'Banarasi saree, silk, cotton, lehenga — sab kuch milega. Patna City aur Boring Road pe hamare stores. Bihar bhar mein home delivery.',
    't.ret.hero.btn1':  '🛒 Online Order Karein',
    't.ret.cat.title':  'Hamari Categories',
    't.ret.cat.sub':    'Patna ka sabse bada textile collection',
    't.ret.del.h3':     '🚚 Bihar-Wide Home Delivery',
    't.ret.del.p':      'Patna, Muzaffarpur, Gaya, Bhagalpur, Darbhanga — poore Bihar mein delivery. ₹999 se upar free delivery.',

    // ═══ GYM ═══
    't.gym.hero.h1':    'Transform Karo Apni Body — Patna Ke Sath',
    't.gym.hero.p':     'Chandragupta Fitness — Patna ka sabse complete gym. Personal training, yoga, zumba, aur boxing. 800+ members. Expert trainers.',
    't.gym.hero.btn1':  '🆓 Free Trial Book Karein',
    't.gym.stats.4':    'Fraser Road pe',
    't.gym.cls.title':  'Hamare Classes',
    't.gym.cls.sub':    'Apni fitness goal ke according choose karein',
    't.gym.mem.sub':    'Apne budget aur goal ke liye sahi plan chunein',
    't.gym.cls.incl':   'Membership mein included',
    't.gym.trn.title':  'Hamare Expert Trainers',
    't.gym.book.h2':    'Free Trial Lena Chahte Hain?',
    't.gym.book.p':     'Ek free trial session book karein. Koi commitment nahi.',
    't.gym.book.btn':   '🆓 Free Trial Book Karein',

    // ═══ SALON ═══
    't.sal.hero.badge': '💅 Boring Road, Patna · Bihar ki #1 Beauty Parlour Since 2008',
    't.sal.hero.h1':    'Sundar Dikhna Aapka Haq Hai — Shringar Beauty Parlour',
    't.sal.hero.p':     'Hair, skin, nails, bridal makeup — sab kuch ek jagah. Patna ki trusted beauty parlour with certified stylists. 15+ saal ka experience.',
    't.sal.nav.btn':    'Appointment Lo',
    't.sal.hero.btn1':  '📅 Appointment Book Karein',
    't.sal.svc.title':  'Hamari Beauty Services',
    't.sal.bridal.p':   'Aapki shaadi special hai. Hamare bridal makeup artists ne 500+ brides ko taiyaar kiya hai. Mehendi, sangeet, wedding — teeno ke liye special packages.',
    't.sal.bridal.btn': '💍 Bridal Booking Karein',
    't.sal.styl.title': 'Hamare Expert Stylists',
    't.sal.book.h2':    'Appointment Book Karein — Abhi',
    't.sal.book.p':     'Online booking available 24/7. Koi waiting line nahi.',

    // ═══ REAL ESTATE ═══
    't.re.hero.h1':     'Patna Mein Apna Ghar Dhundho — Bihar Griha Properties',
    't.re.hero.p':      'Flats, plots, commercial spaces — Patna ke har area mein. 10+ saal ka trust. 500+ properties sold. Expert guidance at every step.',
    't.re.hero.btn1':   '📅 Free Site Visit Book Karein',
    't.re.stats.2':     'Patna mein',
    't.re.book.h2':     'Free Site Visit Book Karein',
    't.re.book.p':      'Hum aapko personally property dikhayenge — koi commitment nahi.',
    't.re.book.btn':    '📅 Free Visit Book Karein',

    // ═══ LAW ═══
    't.law.hero.h1':    'Aapke Haq Ki Ladaai Mein — Sharma & Associates',
    't.law.hero.p':     'Property dispute ho ya family matter, criminal case ho ya corporate — Patna High Court ke anubhavi advocates aapke saath hain. 25+ saal ka legal experience.',
    't.law.hero.btn1':  '🆓 Free Consultation Book Karein',
    't.law.hero.card':  '📊 Website ke Baad Results',
    't.law.prac.title': 'Hamare Practice Areas',
    't.law.prac.sub':   'Bihar aur Jharkhand ke courts mein expertise',
    't.law.adv.title':  'Hamare Advocates',
    't.law.why.title':  'Sharma & Associates Kyun?',
    't.law.why.1':      'Pehli meeting bilkul free. Apna case discuss karein, sahi raah samjhein.',
    't.law.why.2':      '25+ saal Patna High Court mein practice. Bihar ki legal system ki gehri samajh.',
    't.law.why.3':      'Legal jargon mein nahi, sadhi Hindi mein samjhaate hain. Koi confusion nahi.',
    't.law.why.4':      'Case ka status WhatsApp pe milega. Kabhi andheron mein nahi rahenge.',
    't.law.why.5':      'Pehle se clear pricing. Koi hidden charges nahi. Written agreement milega.',
    't.law.why.6':      '1000+ cases. 95% success rate. Bihar ke top lawyers mein shamil.',
    't.law.book.h2':    'Free Legal Consultation Book Karein',
    't.law.book.p':     'Apna case hume batao — hum aapko sahi raah dikhayenge. Koi commitment nahi.',
    't.law.book.btn':   '🆓 Free Consultation Book Karein',
  };

  Object.assign(TRANSLATIONS.en, tEn);
  Object.assign(TRANSLATIONS.hi, tHi);
})();

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
