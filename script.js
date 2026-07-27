/* =========================================================
   إعدادات قابلة للتعديل — Editable settings
   ========================================================= */

// رابط سيرفر الديسكورد حقك — يفتح لما تنضغط اطلب الآن / انضم
const DISCORD_LINK = "https://discord.gg/GQx6kBQws9";

// آيدي ديسكورد حق المالك — يُستخدم مع Lanyard عشان تجيب الحالة والصورة لايف
// لازم تكون عضو بسيرفر Lanyard: https://discord.gg/lanyard حتى تشتغل الخدمة
const LANYARD_USER_ID = "1350283008896401449";

/* ---------- Discord OAuth2 Login (real login, client-side implicit flow) ----------
   خطوات التفعيل (لازم تسويها انت مرة وحدة):
   1) روح https://discord.com/developers/applications وسوي تطبيق جديد.
   2) من تبويب OAuth2 خذ الـ CLIENT ID وحطه تحت في DISCORD_CLIENT_ID.
   3) بنفس تبويب OAuth2 -> Redirects: ضيف رابط صفحتك بالضبط (نفس الرابط اللي هيفتح عليه الموقع)
      مثال: https://yourdomain.com/  أو  https://yourdomain.com/index.html
      لازم يكون مطابق 100% (بدون سلاش زيادة أو ناقص) لنفس الرابط اللي حاططه تحت بمتغير DISCORD_REDIRECT_URI،
      أو خليه فاضي "" وهو هياخده تلقائي من رابط الصفحة الحالي.
*/
const DISCORD_CLIENT_ID = "1530280446171287775";
// سيب الاتنين دول زي ما هما، بيتحسبوا لوحدهم من رابط الصفحة نفسها
const DISCORD_REDIRECT_URI = window.location.origin + window.location.pathname;
const DISCORD_OAUTH_SCOPE = "identify";

// بيانات المالك — تُستخدم كقيم مبدئية/احتياطية، وبيتم تحديث الاسم/التاق/الصورة/الحالة تلقائياً من Lanyard إذا نجح الاتصال
const OWNER = {
  name: "ABUALSOOF",
  username: "@xg9r",
  avatar: "https://cdn.discordapp.com/attachments/1379961963664375940/1530995013004169396/d8be15f0ebac237cee195eeeec21bc10.jpg?ex=6a6799b7&is=6a664837&hm=2ad49a26fd7e7a1ce4316ed2fd4171700d0130325b5aca22910a55da2d39a7a4&",
  status: "offline" // online / idle / dnd / offline — يتحدث تلقائي من Lanyard
};

// بروفايل المالك اللي يظهر لما تنضغط صورته — نسخة مصغّرة على شكل ديسكورد
const OWNER_PROFILE = {
  tag: "xg9r",
  statusText: {
    en: "Willpower without determination",
    ar: "الارادة تكون بلا عزيمة"
  },
  // البنر: ديسكورد ما يسمح بجلب بنر أي حساب تلقائياً بدون بوت خاص + توكن سري،
  // فحط رابط صورة هنا يدوي (ارفعها على ibb.co مثلاً) وبيظهر بالبروفايل. اتركه فاضي لتدرج لوني افتراضي.
  bannerUrl: "",
  // النوت: مو بيانات ديسكورد، هذا نص تكتبه انت بنفسك عن نفسك
  note: {
    en: "",
    ar: ""
  }
  // الشارات ما عادت يدوية — دلوقتي بتنجلب حقيقية من حساب ديسكورد نفسه عبر Lanyard (public_flags)
};

// صور الأعمال — أضف روابط صورك هنا بالترتيب اللي تريده
const PORTFOLIO_IMAGES = [
  "https://i.ibb.co/9kScN65f/20260307-203411.png",
  "https://i.ibb.co/ZRMLD1f5/20260306-145911.png",
  "https://i.ibb.co/pryGc7xQ/20260308-193954.jpg",
  "https://i.ibb.co/qYk7wmRW/20260307-212916.jpg",
  "https://i.ibb.co/DHX5NwXr/20260312-213202.jpg",
  "https://i.ibb.co/TMPJNQhv/20260310-132255.jpg",
  "https://i.ibb.co/Xrw9MBgJ/20260305-175206.jpg",
  "https://i.ibb.co/C3cDbhGr/20260305-173732.jpg",
  "https://i.ibb.co/Gvd7qfH3/20260305-174232.jpg",
  "https://i.ibb.co/1f6BJTDM/20260305-174435.png",
  "https://i.ibb.co/v0FDYgR/20260308-013340.png",
  "https://i.ibb.co/C358MFgB/20260305-175531.png",
  "https://i.ibb.co/XxVbc6wJ/20260305-204354.png",
  "https://i.ibb.co/LzGVv1wt/20260725-203026.jpg",
];

/* ========================================================= */

/* ---------- Translations ---------- */
const ADMIN_IDS = [
  "1350283008896401449",
  "1282471121043718236"
];

// أسماء وصور الأدمن الثابتة (تظهر حتى لو مش متصلين / ما عندهم presence)
// حدّث الاسم والصورة لثاني أدمن لو حابب
const ADMIN_PROFILES = {
  "1350283008896401449": {
    name: "ABUALSOOF",
    username: "xg9r",
    // الصورة تتحدث تلقائي من Lanyard/OWNER — هنا fallback
    avatar: ""
  },
  "1282471121043718236": {
    name: "Admin",
    username: "",
    // ضع رابط صورة ديسكورد أو أي صورة هنا عشان ما تطلع فاضية
    avatar: ""
  }
};

// استرجاع أسماء/صور الأدمن المحفوظة من تسجيل دخول سابق
try{
  const saved = JSON.parse(localStorage.getItem('flash_admin_profiles') || '{}');
  Object.keys(saved).forEach(id => {
    if(ADMIN_PROFILES[id] && saved[id]){
      if(saved[id].name) ADMIN_PROFILES[id].name = saved[id].name;
      if(saved[id].avatar) ADMIN_PROFILES[id].avatar = saved[id].avatar;
      if(saved[id].username) ADMIN_PROFILES[id].username = saved[id].username;
    }
  });
}catch(e){}

function getAdminDisplay(aid){
  const id = String(aid);
  const profile = ADMIN_PROFILES[id] || {};
  let p = null;
  try{ p = loadStore().presence[id]; }catch(e){}
  // أولوية: presence حيّة → بروفايل المالك (لو نفس الـ ID) → ADMIN_PROFILES المحفوظ
  let name = (p && p.name) || profile.name || "Admin";
  let avatar = (p && p.avatar) || profile.avatar || "";
  if(id === String(LANYARD_USER_ID)){
    if(OWNER.name) name = OWNER.name;
    if(OWNER.avatar) avatar = OWNER.avatar;
  }
  return { name, avatar, username: profile.username || "" };
}

// Current Discord user (set after OAuth) — declared early for nav guards
let currentUser = null;
let activeChatId = null;
let pendingImageData = null;
let presenceTimer = null;
let storePollTimer = null;

const translations = {
  en: {
    nav_home: "Overview",
    nav_pricing: "Pricing",
    nav_portfolio: "Works",
    nav_support: "Support",
    nav_admin: "Admin",
    tagline: "Design isn't just an image — it's a meaning only designers understand.",
    owner_placeholder: "Owner Name",
    pricing_title: "Our Pricing",
    pricing_sub: "Choose the package that fits your server",
    badge_popular: "Most Popular",
    order_now: "Order Now",
    portfolio_title: "Works",
    portfolio_sub: "A collection of previous designs",
    car_placeholder: "Add your image links to PORTFOLIO_IMAGES in the code",
    pl_logo: "Server logo",
    pl_banner: "Server banner",
    pl_line: "Line",
    pl_info_normal: "Info × 3",
    pl_info_prime: "Info × 10",
    pl_info_medium: "Info × 6",
    pl_bot_normal: "Bot × 1",
    pl_bot_prime: "Bot × 6",
    pl_bot_medium: "Bot × 3",
    pl_welcome: "Welcome",
    pl_invite: "Invite banner",
    discord_online: "Online",
    discord_offline: "Offline",
    discord_join: "Join Server",
    discord_login_btn: "Login with Discord",
    profile_brand: "Flash x design",
    support_title: "My Support",
    support_sub: "Your private design order chats",
    admin_title: "Admin Panel",
    admin_sub: "All design order chats",
    order_form_title: "New Design Order",
    order_package_label: "Package",
    order_type_label: "Design type",
    order_type_placeholder: "Select type…",
    order_type_package: "Package",
    order_type_profile: "Profile",
    order_type_single: "Individual design",
    order_server_label: "Server name",
    order_logo_label: "Server logo (2 letters)",
    order_details_label: "Design details",
    order_submit: "Submit Order",
    chat_members: "Members",
    chat_placeholder: "Type a message…",
    chat_send: "Send",
    tickets_empty_user: "No orders yet. Order a package to start a private chat.",
    tickets_empty_admin: "No orders yet.",
    login_required: "Please login with Discord to place an order.",
    order_created: "Order submitted — private chat opened.",
    system_order_created: "New design order created",
    open_chat: "Open chat",
    details_btn: "details",
    open_chats: "Open chats",
    closed_chats: "Closed chats",
    chat_closed: "Chat closed",
    chat_reopened: "Chat reopened",
    status_closed: "Closed"
  },
  ar: {
    nav_home: "التعريف",
    nav_pricing: "اسعار الاعمال",
    nav_portfolio: "Works",
    nav_support: "الدعم",
    nav_admin: "الإدارة",
    tagline: "التصميم هو ليس صورة و بس، هو معنى لا يعرفه الا مصممين",
    owner_placeholder: "اسم المالك",
    pricing_title: "اسعار الاعمال",
    pricing_sub: "اختر الباقة التي تناسب سيرفرك",
    badge_popular: "الأكثر طلباً",
    order_now: "اطلب الآن",
    portfolio_title: "Works",
    portfolio_sub: "مجموعة من التصاميم السابقة",
    car_placeholder: "أضف روابط صورك في PORTFOLIO_IMAGES بالكود",
    pl_logo: "شعار السيرفر",
    pl_banner: "بنر السيرفر",
    pl_line: "لاين",
    pl_info_normal: "معلومات × 3",
    pl_info_prime: "معلومات × 10",
    pl_info_medium: "معلومات × 6",
    pl_bot_normal: "بوت × 1",
    pl_bot_prime: "بوت × 6",
    pl_bot_medium: "بوت × 3",
    pl_welcome: "Welcome",
    pl_invite: "بنر الدعوة",
    discord_online: "متصل",
    discord_offline: "غير متصل",
    discord_join: "انضم للسيرفر",
    discord_login_btn: "سجل دخول بديسكورد",
    profile_brand: "Flash x design",
    support_title: "دعم الطلبات",
    support_sub: "محادثاتك الخاصة لطلبات التصميم",
    admin_title: "لوحة الإدارة",
    admin_sub: "جميع محادثات الطلبات",
    order_form_title: "طلب تصميم جديد",
    order_package_label: "الباقة",
    order_type_label: "نوع التصميم",
    order_type_placeholder: "اختر النوع…",
    order_type_package: "بكج",
    order_type_profile: "بروفايل",
    order_type_single: "تصميم فردي",
    order_server_label: "اسم السيرفر",
    order_logo_label: "شعار السيرفر (حرفين)",
    order_details_label: "تفاصيل التصميم",
    order_submit: "إرسال الطلب",
    chat_members: "الأعضاء",
    chat_placeholder: "اكتب رسالة…",
    chat_send: "إرسال",
    tickets_empty_user: "لا توجد طلبات بعد. اطلب باقة لفتح شات خاص.",
    tickets_empty_admin: "لا توجد طلبات بعد.",
    login_required: "سجّل الدخول بديسكورد لإتمام الطلب.",
    order_created: "تم إرسال الطلب — تم فتح الشات الخاص.",
    system_order_created: "تم إنشاء طلب تصميم جديد",
    open_chat: "فتح الشات",
    details_btn: "details",
    open_chats: "الشاتات المفتوحة",
    closed_chats: "الشاتات المقفلة",
    chat_closed: "تم قفل الشات",
    chat_reopened: "تم إعادة فتح الشات",
    status_closed: "مقفل"
  }
};

let currentLang = 'en';

const flagSVG = {
  en: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#B22234"/><g fill="#ffffff"><rect y="1.23" width="24" height="1.23"/><rect y="3.69" width="24" height="1.23"/><rect y="6.15" width="24" height="1.23"/><rect y="8.61" width="24" height="1.23"/><rect y="11.08" width="24" height="1.23"/><rect y="13.54" width="24" height="1.23"/></g><rect width="10" height="8.6" fill="#3C3B6E"/></svg>',
  ar: '<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="16" fill="#ffffff"/><rect width="24" height="5.33" fill="#000000"/><rect y="10.67" width="24" height="5.33" fill="#149954"/><polygon points="0,0 0,16 9,8" fill="#E4312b"/></svg>'
};

function applyLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key] !== undefined){
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.dataset.i18nPlaceholder;
    if(translations[lang][key] !== undefined){
      el.placeholder = translations[lang][key];
    }
  });

  // Refresh select option labels
  const typeSelect = document.getElementById('orderDesignType');
  if(typeSelect){
    const map = {
      '': 'order_type_placeholder',
      package: 'order_type_package',
      profile: 'order_type_profile',
      single: 'order_type_single'
    };
    Array.from(typeSelect.options).forEach(opt=>{
      const k = map[opt.value];
      if(k && translations[lang][k]) opt.textContent = translations[lang][k];
    });
  }

  document.getElementById('langBadgeCurrent').innerHTML = flagSVG[lang];
  document.querySelectorAll('.lang-option').forEach(opt=>{
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  if(!OWNER.name){
    document.getElementById('ownerName').textContent = translations[lang].owner_placeholder;
  }

  renderCarousel();
  renderProfileModal();
  if(typeof renderUserTickets === 'function') renderUserTickets();
  if(typeof renderAdminTickets === 'function') renderAdminTickets();
}

/* Owner setup (initial paint with fallback values, before Lanyard responds) */
function updateOwnerDisplay(){
  if(OWNER.name){
    document.getElementById('ownerName').textContent = OWNER.name;
  }
  if(OWNER.avatar){
    document.getElementById('ownerAvatar').src = OWNER.avatar;
    document.getElementById('ownerAvatar').style.display = '';
  } else {
    document.getElementById('ownerAvatar').style.display = 'none';
  }
  if(OWNER.username){
    document.getElementById('ownerUsername').textContent = OWNER.username;
  }
  const dot = document.getElementById('ownerStatusDot');
  dot.className = 'owner-status-dot status-' + (OWNER.status || 'offline');
}
updateOwnerDisplay();

/* ---------- Lanyard live status/avatar sync ---------- */
function lanyardAvatarUrl(user){
  if(!user || !user.avatar) return null;
  const ext = user.avatar.startsWith('a_') ? 'gif' : 'png';
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=256`;
}

async function fetchLanyardData(){
  if(!LANYARD_USER_ID) return;
  try{
    const res = await fetch(`https://api.lanyard.rest/v1/users/${LANYARD_USER_ID}`);
    if(!res.ok) throw new Error('bad response');
    const json = await res.json();
    if(!json.success) throw new Error('lanyard error');
    const data = json.data;
    const user = data.discord_user || {};

    const avatarUrl = lanyardAvatarUrl(user);
    if(avatarUrl) OWNER.avatar = avatarUrl;

    if(user.global_name) OWNER.name = user.global_name.toUpperCase();
    else if(user.username) OWNER.name = user.username.toUpperCase();

    if(user.username){
      OWNER.username = '@' + user.username;
      OWNER_PROFILE.tag = user.username;
    }

    if(data.discord_status) OWNER.status = data.discord_status;

    // شارات حقيقية من نفس حساب ديسكورد (public_flags) — مو وهمية
    OWNER.realBadges = decodeDiscordBadges(user.public_flags);

    // الأكتفتي — سبوتيفاي له أولوية، بعدها أي أكتفتي أخرى (لعبة، تطبيق...) غير "Custom Status"
    OWNER.activity = null;
    if(data.listening_to_spotify && data.spotify){
      OWNER.activity = {
        type: 'spotify',
        text: { en: `Listening to ${data.spotify.song}`, ar: `يسمع ${data.spotify.song}` },
        sub: `${data.spotify.artist}`
      };
    } else if(Array.isArray(data.activities)){
      const act = data.activities.find(a => a.type !== 4); // type 4 = Custom Status text, skip it
      if(act){
        const typeLabel = { 0:{en:'Playing',ar:'يلعب'}, 1:{en:'Streaming',ar:'يبث'}, 2:{en:'Listening to',ar:'يسمع'}, 3:{en:'Watching',ar:'يشاهد'}, 5:{en:'Competing in',ar:'يتنافس في'} }[act.type] || {en:'',ar:''};
        OWNER.activity = {
          type: 'activity',
          text: { en: `${typeLabel.en} ${act.name}`.trim(), ar: `${typeLabel.ar} ${act.name}`.trim() },
          sub: act.details || ''
        };
      }
    }

    // حدّث بروفايل الأدمن الرئيسي من بيانات Lanyard
    if(ADMIN_PROFILES[LANYARD_USER_ID]){
      ADMIN_PROFILES[LANYARD_USER_ID].name = OWNER.name || ADMIN_PROFILES[LANYARD_USER_ID].name;
      ADMIN_PROFILES[LANYARD_USER_ID].avatar = OWNER.avatar || ADMIN_PROFILES[LANYARD_USER_ID].avatar;
      if(user.username) ADMIN_PROFILES[LANYARD_USER_ID].username = user.username;
    }

    updateOwnerDisplay();
    renderProfileModal();
  }catch(err){
    // إذا فشل الاتصال (مثلاً مو عضو بسيرفر Lanyard) بتفضل القيم الاحتياطية بالأعلى
    console.warn('Lanyard fetch failed, using fallback OWNER data.', err);
  }
}

fetchLanyardData();
setInterval(fetchLanyardData, 60000); // تحديث كل دقيقة

/* ---------- Profile popout (Discord-style) ---------- */
// شارات ديسكورد الحقيقية — تُفكّ من public_flags (bitfield) اللي يرجعه Lanyard من حساب ديسكورد نفسه
// إذا حسابك ما فيه شارات رسمية، الصف بيطلع فاضي — لأنه صار حقيقي 100% مو وهمي
const DISCORD_BADGE_FLAGS = [
  { bit: 1<<0,  key:'staff',      label:{en:'Discord Staff',ar:'موظف ديسكورد'},        color:'#5865F2', svg:'<path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2Z" fill="#fff"/>' },
  { bit: 1<<1,  key:'partner',    label:{en:'Partnered Server Owner',ar:'مالك سيرفر بارتنر'}, color:'#5865F2', svg:'<path d="M12 2l3 5 5.5.8-4 3.9 1 5.5L12 14.8 6.5 17.2l1-5.5-4-3.9L9 7Z" fill="#fff"/>' },
  { bit: 1<<2,  key:'hypesquad',  label:{en:'HypeSquad Events',ar:'HypeSquad Events'}, color:'#f4b30d', svg:'<path d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7Z" fill="#fff"/>' },
  { bit: 1<<3,  key:'bughunter1', label:{en:'Bug Hunter',ar:'صائد أخطاء'},             color:'#3ba55d', svg:'<path d="M9 12.5l2 2 4-5" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>' },
  { bit: 1<<6,  key:'bravery',    label:{en:'HypeSquad Bravery',ar:'HypeSquad Bravery'}, color:'#9b59b6', svg:'<path d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7Z" fill="#fff"/>' },
  { bit: 1<<7,  key:'brilliance', label:{en:'HypeSquad Brilliance',ar:'HypeSquad Brilliance'}, color:'#e67e22', svg:'<path d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7Z" fill="#fff"/>' },
  { bit: 1<<8,  key:'balance',    label:{en:'HypeSquad Balance',ar:'HypeSquad Balance'}, color:'#2ecc71', svg:'<path d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7Z" fill="#fff"/>' },
  { bit: 1<<9,  key:'early',      label:{en:'Early Supporter',ar:'داعم مبكر'},          color:'#ff73fa', svg:'<path d="M12 2c3 4 7 7 7 12a7 7 0 1 1-14 0c0-5 4-8 7-12Z" fill="#fff"/>' },
  { bit: 1<<14, key:'bughunter2', label:{en:'Bug Hunter Gold',ar:'صائد أخطاء ذهبي'},    color:'#f1c40f', svg:'<path d="M9 12.5l2 2 4-5" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>' },
  { bit: 1<<16, key:'verifiedbot',label:{en:'Verified Bot',ar:'بوت موثّق'},             color:'#5865F2', svg:'<path d="M9 12l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' },
  { bit: 1<<17, key:'earlydev',   label:{en:'Early Verified Bot Developer',ar:'مطور بوت موثق مبكر'}, color:'#5865F2', svg:'<path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" stroke="#fff" stroke-width="1.7"/><path d="M19.4 13.5a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V19.5a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H4.5a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H10.5a1.65 1.65 0 0 0 1-1.51V4.5a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V10.5a1.65 1.65 0 0 0 1.51 1H19.5a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>' },
  { bit: 1<<18, key:'certmod',    label:{en:'Certified Moderator',ar:'مشرف معتمد'},     color:'#5865F2', svg:'<path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7Z" fill="#fff"/>' },
  { bit: 1<<22, key:'activedev',  label:{en:'Active Developer',ar:'مطوّر نشط'},         color:'#3ba55d', svg:'<path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' }
];

function decodeDiscordBadges(publicFlags){
  if(!publicFlags || typeof publicFlags !== 'number') return [];
  return DISCORD_BADGE_FLAGS.filter(b => (publicFlags & b.bit) === b.bit);
}

const STATUS_BADGE_ICON = {
  online:  '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="6" fill="#fff"/></svg>',
  idle:    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="10" r="7" fill="#0e0e10"/><circle cx="10" cy="12" r="7" fill="#fff"/></svg>',
  dnd:     '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12h12" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>',
  offline: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5" fill="#fff" fill-opacity=".9"/></svg>'
};

function renderProfileModal(){
  document.getElementById('profileAvatar').src = OWNER.avatar || '';
  document.getElementById('profileName').textContent = OWNER.name || '';
  document.getElementById('profileTag').textContent = OWNER_PROFILE.tag || '';
  document.getElementById('profileStatusText').textContent = (OWNER_PROFILE.statusText && OWNER_PROFILE.statusText[currentLang]) || '';

  const statusBadge = document.querySelector('.profile-status-badge');
  const status = OWNER.status || 'offline';
  statusBadge.className = 'profile-status-badge status-' + status;
  statusBadge.innerHTML = STATUS_BADGE_ICON[status] || STATUS_BADGE_ICON.offline;

  const bannerEl = document.getElementById('profileBanner');
  if(OWNER_PROFILE.bannerUrl){
    bannerEl.style.backgroundImage = `url(${OWNER_PROFILE.bannerUrl})`;
  } else {
    bannerEl.style.backgroundImage = 'none';
  }

  const badgesWrap = document.getElementById('profileBadges');
  badgesWrap.innerHTML = '';
  (OWNER.realBadges || []).forEach(b=>{
    const el = document.createElement('span');
    el.className = 'profile-badge crown-wrap';
    el.dataset.tooltip = b.label[currentLang] || b.label.en;
    el.style.background = b.color;
    el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${b.svg}</svg>`;
    badgesWrap.appendChild(el);
  });

  const activityWrap = document.getElementById('profileActivity');
  if(OWNER.activity){
    activityWrap.style.display = 'flex';
    document.getElementById('profileActivityMain').textContent = OWNER.activity.text[currentLang] || OWNER.activity.text.en;
    document.getElementById('profileActivitySub').textContent = OWNER.activity.sub || '';
  } else {
    activityWrap.style.display = 'none';
  }

  const noteWrap = document.getElementById('profileNoteWrap');
  const noteText = (OWNER_PROFILE.note && OWNER_PROFILE.note[currentLang]) || '';
  if(noteText){
    noteWrap.style.display = 'block';
    document.getElementById('profileNote').textContent = noteText;
  } else {
    noteWrap.style.display = 'none';
  }
}

function openProfileModal(){
  renderProfileModal();
  document.getElementById('profileModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProfileModal(){
  document.getElementById('profileModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('ownerAvatar').addEventListener('click', openProfileModal);
document.getElementById('profileClose').addEventListener('click', closeProfileModal);
document.getElementById('profileModal').addEventListener('click', (e)=>{
  if(e.target.id === 'profileModal') closeProfileModal();
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeProfileModal();
});

/* ---------- Language switch dropdown ---------- */
const langSwitch = document.getElementById('langSwitch');
const langBtn = document.getElementById('langBtn');
langBtn.addEventListener('click', (e)=>{
  e.stopPropagation();
  langSwitch.classList.toggle('open');
});
document.querySelectorAll('.lang-option').forEach(opt=>{
  opt.addEventListener('click', ()=>{
    applyLanguage(opt.dataset.lang);
    langSwitch.classList.remove('open');
  });
});
document.addEventListener('click', ()=>{ langSwitch.classList.remove('open'); });

/* ---------- Loader ---------- */
const bar = document.getElementById('loaderBar');
let pct = 0;
const loadInterval = setInterval(()=>{
  pct += 5 + Math.random()*5;
  if(pct >= 100){
    pct = 100;
    clearInterval(loadInterval);
    setTimeout(()=>{
      document.getElementById('loader').classList.add('hide');
      document.getElementById('app').classList.add('show');
    }, 350);
  }
  bar.style.width = pct + '%';
}, 150);

/* ---------- Nav page switching ---------- */
function goToPage(pageId, updateHash){
  if(pageId === 'support' && typeof currentUser !== 'undefined' && !currentUser){
    if(typeof requireLogin === 'function') requireLogin();
    return;
  }
  if(pageId === 'admin' && (typeof currentUser === 'undefined' || !currentUser || !currentUser.isAdmin)){
    return;
  }

  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));

  const navBtn = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
  if(navBtn){
    navBtn.classList.add('active');
  }
  const pageEl = document.getElementById(pageId);
  if(pageEl) pageEl.classList.add('active');

  if(updateHash !== false){
    if(location.hash !== '#' + pageId){
      history.pushState(null, '', '#' + pageId);
    }
  }

  if(pageId === 'support' && typeof renderUserTickets === 'function') renderUserTickets();
  if(pageId === 'admin' && typeof renderAdminTickets === 'function') renderAdminTickets();
}

document.querySelectorAll('.nav-btn').forEach(btn=>{
  btn.addEventListener('click', ()=> goToPage(btn.dataset.page));
});

/* React to back/forward navigation and direct #hash links */
const VALID_PAGES = ['home','pricing','works','support','admin'];
function pageFromHash(){
  const id = location.hash.replace('#','');
  return VALID_PAGES.includes(id) ? id : 'home';
}
window.addEventListener('popstate', ()=> goToPage(pageFromHash(), false));

/* Open the page matching the URL hash on first load (e.g. site.html#pricing) */
if(location.hash && VALID_PAGES.includes(location.hash.replace('#',''))){
  goToPage(pageFromHash(), false);
}

/* ---------- Background floating sparkles ---------- */
const sparkPath = 'M40,50 C25,50 20,35 17,12 C30,32 42,44 58,50 C98,60 152,20 188,4 C150,46 88,56 58,60 C43,63 33,78 28,98 C31,74 34,58 40,50 Z';
const bgSparks = document.getElementById('bgSparks');
for(let i=0;i<7;i++){
  const size = 20 + Math.random()*50;
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS,'svg');
  svg.setAttribute('viewBox','0 0 200 100');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size*0.5);
  svg.style.top = Math.random()*100 + '%';
  svg.style.left = Math.random()*100 + '%';
  svg.style.animationDelay = (Math.random()*5) + 's';
  svg.style.animationDuration = (7+Math.random()*6) + 's';
  const path = document.createElementNS(svgNS,'path');
  path.setAttribute('d', sparkPath);
  path.setAttribute('fill', '#ff3333');
  svg.appendChild(path);
  bgSparks.appendChild(svg);
}

/* ---------- Carousel (3D coverflow) ---------- */
const stage = document.getElementById('carStage');
const dotsWrap = document.getElementById('carDots');
let carIndex = 0;

function placeholderSlide(){
  const div = document.createElement('div');
  div.className = 'car-slide active';
  div.innerHTML = `<div class="car-placeholder">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M3 16l5-4 4 3 4-5 5 6" stroke="currentColor" stroke-width="1.5"/>
    </svg>
    <span>${translations[currentLang].car_placeholder}</span>
  </div>`;
  return div;
}

function renderCarousel(){
  stage.innerHTML = '';
  dotsWrap.innerHTML = '';

  if(PORTFOLIO_IMAGES.length === 0){
    stage.appendChild(placeholderSlide());
    return;
  }

  const total = PORTFOLIO_IMAGES.length;
  const isMobile = window.innerWidth <= 720;
  const step = isMobile ? 46 : 58;
  const scaleStep = 0.17;
  const rotateStep = 34;

  PORTFOLIO_IMAGES.forEach((src, i)=>{
    let diff = i - carIndex;
    if(diff > total/2) diff -= total;
    if(diff < -total/2) diff += total;

    const absDiff = Math.abs(diff);
    const slide = document.createElement('div');
    slide.className = 'car-slide' + (diff === 0 ? ' is-center' : '');

    const img = document.createElement('img');
    img.src = src;
    img.loading = 'lazy';
    img.alt = 'Portfolio work';
    img.referrerPolicy = 'no-referrer';
    img.onerror = function(){
      // Broken/unreachable link — show a clear placeholder instead of a blank tile
      this.onerror = null;
      this.replaceWith(placeholderSlide().firstChild);
      console.warn('Failed to load portfolio image:', src);
    };
    slide.appendChild(img);

    if(absDiff > 2){
      slide.style.display = 'none';
    } else {
      slide.style.display = 'flex';
      const translateX = diff * step;
      const scale = 1 - absDiff * scaleStep;
      const rotate = -diff * rotateStep;
      const z = 10 - absDiff;
      const opacity = absDiff === 0 ? 1 : (absDiff === 1 ? 0.85 : 0.5);
      const brightness = absDiff === 0 ? 1 : (absDiff === 1 ? 0.55 : 0.32);
      const blur = absDiff === 0 ? 0 : (absDiff === 1 ? 2.5 : 5); // side slides blurred, clears at center

      slide.style.transform = `translate(-50%, -50%) translateX(${translateX}%) scale(${scale}) rotateY(${rotate}deg)`;
      slide.style.zIndex = z;
      slide.style.opacity = opacity;
      slide.style.filter = `brightness(${brightness}) blur(${blur}px)`;

      if(diff !== 0){
        slide.style.cursor = 'pointer';
        slide.addEventListener('click', ()=>{
          carIndex = i;
          renderCarousel();
        });
      }
    }

    stage.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = 'car-dot' + (diff === 0 ? ' active' : '');
    dot.addEventListener('click', ()=>{ carIndex = i; renderCarousel(); });
    dot.style.cursor = 'pointer';
    dotsWrap.appendChild(dot);
  });
}

let resizeTimer;
window.addEventListener('resize', ()=>{
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(renderCarousel, 150);
});

document.getElementById('carPrev').addEventListener('click', ()=>{
  if(PORTFOLIO_IMAGES.length === 0) return;
  carIndex = (carIndex - 1 + PORTFOLIO_IMAGES.length) % PORTFOLIO_IMAGES.length;
  renderCarousel();
});
document.getElementById('carNext').addEventListener('click', ()=>{
  if(PORTFOLIO_IMAGES.length === 0) return;
  carIndex = (carIndex + 1) % PORTFOLIO_IMAGES.length;
  renderCarousel();
});

/* ---------- Discord live widget ---------- */
function formatCount(n){
  if(n >= 1000) return (n/1000).toFixed(1).replace(/\.0$/,'') + 'K';
  return String(n);
}

const DISCORD_INVITE_CODE = DISCORD_LINK.split('/').filter(Boolean).pop();

async function loadDiscordWidget(){
  const nameEl = document.getElementById('discordName');
  const descEl = document.getElementById('discordDesc');
  const iconEl = document.getElementById('discordIcon');
  const onlineEl = document.getElementById('discordOnline');
  const offlineEl = document.getElementById('discordOffline');
  const joinEl = document.getElementById('discordJoin');

  joinEl.href = DISCORD_LINK;

  try{
    const res = await fetch(`https://discord.com/api/v10/invites/${DISCORD_INVITE_CODE}?with_counts=true&with_expiration=true`);
    if(!res.ok) throw new Error('bad response');
    const data = await res.json();
    const guild = data.guild || {};

    if(guild.name) nameEl.textContent = guild.name;
    descEl.textContent = guild.description || '';

    if(guild.icon){
      const ext = guild.icon.startsWith('a_') ? 'gif' : 'png';
      iconEl.src = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.${ext}?size=128`;
    }

    const total = data.approximate_member_count ?? 0;
    const online = data.approximate_presence_count ?? 0;
    onlineEl.textContent = formatCount(online);
    offlineEl.textContent = formatCount(Math.max(total - online, 0));
  }catch(err){
    onlineEl.textContent = '—';
    offlineEl.textContent = '—';
  }
}

/* Join server still opens Discord invite */
document.querySelectorAll('.discord-join').forEach(el=>{
  el.href = DISCORD_LINK;
  el.target = '_blank';
  el.rel = 'noopener noreferrer';
  el.addEventListener('click', (e)=>{
    e.preventDefault();
    const win = window.open(DISCORD_LINK, '_blank', 'noopener,noreferrer');
    if(!win) window.location.href = DISCORD_LINK;
  });
});

/* =========================================================
   DISCORD LOGIN + ORDER / CHAT SYSTEM
   ========================================================= */
const DISCORD_TOKEN_STORAGE_KEY = 'discord_access_token';
const STORE_KEY = 'flash_desgin_store_v1';
const PENDING_ORDER_KEY = 'flash_pending_order_package';
const PRESENCE_TTL_MS = 45000;

function getDiscordAvatarUrl(user){
  if(user.avatar){
    const ext = user.avatar.startsWith('a_') ? 'gif' : 'png';
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=128`;
  }
  const idx = user.discriminator && user.discriminator !== '0'
    ? Number(user.discriminator) % 5
    : Number((BigInt(user.id) >> 22n) % 6n);
  return `https://cdn.discordapp.com/embed/avatars/${idx}.png`;
}

function isAdminId(id){
  return ADMIN_IDS.includes(String(id));
}

function loadStore(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(!raw) return { chats: [], messages: [], presence: {} };
    const data = JSON.parse(raw);
    return {
      chats: Array.isArray(data.chats) ? data.chats : [],
      messages: Array.isArray(data.messages) ? data.messages : [],
      presence: data.presence && typeof data.presence === 'object' ? data.presence : {}
    };
  }catch(e){
    return { chats: [], messages: [], presence: {} };
  }
}

function saveStore(store){
  localStorage.setItem(STORE_KEY, JSON.stringify(store));
  // Notify other tabs
  try{ localStorage.setItem(STORE_KEY + '_ping', String(Date.now())); }catch(e){}
}

function uid(){
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}

function formatMsgTime(ts){
  try{
    const d = new Date(ts);
    return d.toLocaleString(currentLang === 'ar' ? 'ar' : 'en', {
      month:'short', day:'numeric', hour:'2-digit', minute:'2-digit'
    });
  }catch(e){ return ''; }
}

function showLoggedOutUI(){
  currentUser = null;
  document.getElementById('discordLoginBtn').style.display = 'flex';
  document.getElementById('discordUserChip').classList.remove('show');
  document.getElementById('navSupport').style.display = 'none';
  document.getElementById('navAdmin').style.display = 'none';
  stopPresence();
}

function showLoggedInUI(user){
  const avatarUrl = getDiscordAvatarUrl(user);
  currentUser = {
    id: String(user.id),
    username: user.username,
    global_name: user.global_name || user.username,
    avatar: user.avatar,
    avatarUrl,
    isAdmin: isAdminId(user.id)
  };
  // لو الأدمن سجّل دخول — احفظ اسمه وصورته الحقيقية عشان تظهر حتى وهو offline
  if(currentUser.isAdmin && ADMIN_PROFILES[currentUser.id]){
    ADMIN_PROFILES[currentUser.id].name = currentUser.global_name;
    ADMIN_PROFILES[currentUser.id].avatar = avatarUrl;
    ADMIN_PROFILES[currentUser.id].username = currentUser.username;
    try{
      localStorage.setItem('flash_admin_profiles', JSON.stringify(ADMIN_PROFILES));
    }catch(e){}
  }
  document.getElementById('discordLoginBtn').style.display = 'none';
  const chip = document.getElementById('discordUserChip');
  document.getElementById('discordUserAvatar').src = avatarUrl;
  document.getElementById('discordUserName').textContent = currentUser.global_name;
  chip.classList.add('show');
  document.getElementById('navSupport').style.display = '';
  document.getElementById('navAdmin').style.display = currentUser.isAdmin ? '' : 'none';
  startPresence();
  renderUserTickets();
  if(currentUser.isAdmin) renderAdminTickets();

  // Resume pending order after OAuth redirect
  const pendingPkg = localStorage.getItem(PENDING_ORDER_KEY);
  if(pendingPkg){
    localStorage.removeItem(PENDING_ORDER_KEY);
    setTimeout(()=> openOrderModal(pendingPkg), 400);
  }
}

function discordLogout(){
  if(currentUser) setPresenceOffline(currentUser.id);
  localStorage.removeItem(DISCORD_TOKEN_STORAGE_KEY);
  showLoggedOutUI();
  closeChat();
  if(document.getElementById('support').classList.contains('active') ||
     document.getElementById('admin').classList.contains('active')){
    goToPage('home');
  }
}

async function fetchDiscordMe(token){
  const res = await fetch('https://discord.com/api/users/@me', {
    headers: { Authorization: `Bearer ${token}` }
  });
  if(!res.ok) throw new Error('token invalid or expired');
  return res.json();
}

function getAuthUrl(){
  return `https://discord.com/api/oauth2/authorize` +
    `?client_id=${encodeURIComponent(DISCORD_CLIENT_ID)}` +
    `&redirect_uri=${encodeURIComponent(DISCORD_REDIRECT_URI)}` +
    `&response_type=token` +
    `&scope=${encodeURIComponent(DISCORD_OAUTH_SCOPE)}`;
}

function requireLogin(thenAction){
  if(currentUser){
    if(typeof thenAction === 'function') thenAction();
    return true;
  }
  alert(translations[currentLang].login_required);
  // Save intent and redirect to Discord login
  if(typeof thenAction === 'string'){
    localStorage.setItem(PENDING_ORDER_KEY, thenAction);
  }
  if(!DISCORD_CLIENT_ID || DISCORD_CLIENT_ID === 'YOUR_DISCORD_CLIENT_ID_HERE'){
    alert('DISCORD_CLIENT_ID is not set in script.js');
    return false;
  }
  window.location.href = getAuthUrl();
  return false;
}

async function initDiscordLogin(){
  const loginBtn = document.getElementById('discordLoginBtn');

  if(!DISCORD_CLIENT_ID || DISCORD_CLIENT_ID === 'YOUR_DISCORD_CLIENT_ID_HERE'){
    loginBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      alert('لازم تحط DISCORD_CLIENT_ID في الكود الأول عشان زر تسجيل الدخول يشتغل.\nYou need to set DISCORD_CLIENT_ID in the code first.');
    });
    showLoggedOutUI();
    return;
  }

  const authUrl = getAuthUrl();
  loginBtn.href = authUrl;
  loginBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href = authUrl;
  });

  let token = null;
  if(location.hash && location.hash.includes('access_token')){
    const params = new URLSearchParams(location.hash.substring(1));
    token = params.get('access_token');
    if(token){
      localStorage.setItem(DISCORD_TOKEN_STORAGE_KEY, token);
      history.replaceState(null, '', location.pathname + location.search);
    }
  }
  if(!token) token = localStorage.getItem(DISCORD_TOKEN_STORAGE_KEY);

  if(!token){
    showLoggedOutUI();
    return;
  }

  try{
    const user = await fetchDiscordMe(token);
    showLoggedInUI(user);
  }catch(err){
    localStorage.removeItem(DISCORD_TOKEN_STORAGE_KEY);
    showLoggedOutUI();
  }
}

document.getElementById('discordLogoutBtn').addEventListener('click', (e)=>{
  e.stopPropagation();
  discordLogout();
});

/* ---------- Order form ---------- */
function openOrderModal(packageName){
  document.getElementById('orderPackage').value = packageName || '';
  document.getElementById('orderPackageLabel').textContent = packageName || '—';
  document.getElementById('orderForm').reset();
  document.getElementById('orderPackage').value = packageName || '';
  document.getElementById('orderModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeOrderModal(){
  document.getElementById('orderModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('orderModalClose').addEventListener('click', closeOrderModal);
document.getElementById('orderModal').addEventListener('click', (e)=>{
  if(e.target.id === 'orderModal') closeOrderModal();
});

document.querySelectorAll('.order-btn').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const pkg = btn.dataset.package || 'Custom';
    requireLogin(pkg);
    if(currentUser) openOrderModal(pkg);
  });
});

// Logo letters: force max 2 letters, uppercase
document.getElementById('orderLogoLetters').addEventListener('input', (e)=>{
  let v = e.target.value.replace(/[^a-zA-Z\u0600-\u06FF]/g, '').slice(0, 2);
  e.target.value = v.toUpperCase();
});

document.getElementById('orderForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  if(!currentUser){
    requireLogin();
    return;
  }
  const packageName = document.getElementById('orderPackage').value || 'Custom';
  const designType = document.getElementById('orderDesignType').value;
  const serverName = document.getElementById('orderServerName').value.trim();
  const logoLetters = document.getElementById('orderLogoLetters').value.trim().toUpperCase();
  const details = document.getElementById('orderDetails').value.trim();

  if(!designType || !serverName || !logoLetters || !details) return;
  if(logoLetters.length > 2) return;

  const chatId = uid();
  const now = Date.now();
  const typeLabel = {
    package: translations[currentLang].order_type_package,
    profile: translations[currentLang].order_type_profile,
    single: translations[currentLang].order_type_single
  }[designType] || designType;

  const chat = {
    id: chatId,
    package: packageName,
    designType,
    serverName,
    logoLetters,
    details,
    clientId: currentUser.id,
    clientName: currentUser.global_name,
    clientUsername: currentUser.username,
    clientAvatar: currentUser.avatarUrl,
    status: 'open',
    createdAt: now,
    lastAt: now,
    lastMessage: translations[currentLang].system_order_created
  };

  const systemMsg = {
    id: uid(),
    chatId,
    type: 'system',
    text: `${translations[currentLang].system_order_created}\n` +
      `• ${translations[currentLang].order_package_label}: ${packageName}\n` +
      `• ${translations[currentLang].order_type_label}: ${typeLabel}\n` +
      `• ${translations[currentLang].order_server_label}: ${serverName}\n` +
      `• ${translations[currentLang].order_logo_label}: ${logoLetters}\n` +
      `• ${translations[currentLang].order_details_label}: ${details}`,
    createdAt: now
  };

  const store = loadStore();
  store.chats.unshift(chat);
  store.messages.push(systemMsg);
  saveStore(store);

  closeOrderModal();
  renderUserTickets();
  if(currentUser.isAdmin) renderAdminTickets();
  openChat(chatId);
});

/* ---------- Tickets lists ---------- */
function escapeHtml(s){
  return String(s || '').replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

function getDesignTypeLabel(designType){
  const map = {
    package: translations[currentLang].order_type_package,
    profile: translations[currentLang].order_type_profile,
    single: translations[currentLang].order_type_single
  };
  return map[designType] || designType || '—';
}

function canDeleteChat(chat){
  // فقط الأدمن (الـ IDs المحددة) يقدروا يحذفوا — العميل ما يقدر
  if(!currentUser || !chat) return false;
  return !!currentUser.isAdmin && ADMIN_IDS.includes(String(currentUser.id));
}

function deleteChat(chatId){
  if(!currentUser) return;
  if(!currentUser.isAdmin || !ADMIN_IDS.includes(String(currentUser.id))) return;
  const store = loadStore();
  const chat = store.chats.find(c => c.id === chatId);
  if(!chat || !canDeleteChat(chat)) return;

  const confirmMsg = currentLang === 'ar'
    ? 'هل أنت متأكد من حذف هذا الشات نهائياً؟'
    : 'Are you sure you want to permanently delete this chat?';
  if(!confirm(confirmMsg)) return;

  store.chats = store.chats.filter(c => c.id !== chatId);
  store.messages = store.messages.filter(m => m.chatId !== chatId);
  saveStore(store);

  if(activeChatId === chatId) closeChat();
  renderUserTickets();
  if(currentUser.isAdmin) renderAdminTickets();
}

function renderTicketCard(chat, opts){
  opts = opts || {};
  const isAdminView = !!opts.isAdminView;
  const card = document.createElement('div');
  card.className = 'ticket-card' + (chat.status === 'closed' ? ' ticket-closed' : '');
  card.dataset.chatId = chat.id;

  const closedBadge = chat.status === 'closed'
    ? `<span class="ticket-badge ticket-badge-closed">${translations[currentLang].status_closed}</span>`
    : '';

  const detailsBtn = isAdminView
    ? `<button type="button" class="ticket-details-btn" data-chat-id="${escapeHtml(chat.id)}">${translations[currentLang].details_btn}</button>`
    : '';

  const showDelete = canDeleteChat(chat);
  const deleteBtn = showDelete
    ? `<button type="button" class="ticket-delete-btn" title="${currentLang === 'ar' ? 'حذف' : 'Delete'}" aria-label="Delete">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>`
    : '';

  card.innerHTML = `
    ${deleteBtn}
    <img class="ticket-avatar" src="${escapeHtml(chat.clientAvatar || '')}" alt="">
    <div class="ticket-body">
      <div class="ticket-title">${escapeHtml(chat.serverName)} · ${escapeHtml(chat.package)}</div>
      <div class="ticket-meta">
        ${closedBadge}
        <span>${escapeHtml(chat.clientName || '')}</span>
        <span class="ticket-time">${formatMsgTime(chat.lastAt || chat.createdAt)}</span>
        ${detailsBtn}
      </div>
      <div class="ticket-details-panel" id="details-${escapeHtml(chat.id)}" style="display:none;">
        <div class="ticket-details-row"><b>${escapeHtml(translations[currentLang].order_package_label)}:</b> ${escapeHtml(chat.package || '—')}</div>
        <div class="ticket-details-row"><b>${escapeHtml(translations[currentLang].order_type_label)}:</b> ${escapeHtml(getDesignTypeLabel(chat.designType))}</div>
        <div class="ticket-details-row"><b>${escapeHtml(translations[currentLang].order_server_label)}:</b> ${escapeHtml(chat.serverName || '—')}</div>
        <div class="ticket-details-row"><b>${escapeHtml(translations[currentLang].order_logo_label)}:</b> ${escapeHtml(chat.logoLetters || '—')}</div>
        <div class="ticket-details-row"><b>${escapeHtml(translations[currentLang].order_details_label)}:</b> <span class="ticket-details-text">${escapeHtml(chat.details || '—')}</span></div>
      </div>
    </div>
  `;

  card.addEventListener('click', (e)=>{
    if(e.target.closest('.ticket-details-btn') || e.target.closest('.ticket-details-panel') || e.target.closest('.ticket-delete-btn')) return;
    openChat(chat.id);
  });

  if(isAdminView){
    const btn = card.querySelector('.ticket-details-btn');
    if(btn){
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        const panel = card.querySelector('.ticket-details-panel');
        if(!panel) return;
        const isOpen = panel.style.display !== 'none';
        panel.style.display = isOpen ? 'none' : 'block';
        btn.classList.toggle('active', !isOpen);
      });
    }
  }

  const delBtn = card.querySelector('.ticket-delete-btn');
  if(delBtn){
    delBtn.addEventListener('click', (e)=>{
      e.stopPropagation();
      deleteChat(chat.id);
    });
  }

  return card;
}

function renderUserTickets(){
  const list = document.getElementById('userTicketsList');
  if(!list) return;
  list.innerHTML = '';
  if(!currentUser){
    list.innerHTML = `<div class="tickets-empty">${translations[currentLang].tickets_empty_user}</div>`;
    return;
  }
  const store = loadStore();
  const mine = store.chats.filter(c => c.clientId === currentUser.id);
  if(mine.length === 0){
    list.innerHTML = `<div class="tickets-empty">${translations[currentLang].tickets_empty_user}</div>`;
    return;
  }
  mine.forEach(c => list.appendChild(renderTicketCard(c, { isAdminView: false })));
}

function renderAdminTickets(){
  const list = document.getElementById('adminTicketsList');
  if(!list) return;
  list.innerHTML = '';
  if(!currentUser || !currentUser.isAdmin){
    list.innerHTML = `<div class="tickets-empty">${translations[currentLang].tickets_empty_admin}</div>`;
    return;
  }
  const store = loadStore();
  if(store.chats.length === 0){
    list.innerHTML = `<div class="tickets-empty">${translations[currentLang].tickets_empty_admin}</div>`;
    return;
  }

  const openChats = store.chats.filter(c => c.status !== 'closed');
  const closedChats = store.chats.filter(c => c.status === 'closed');

  if(openChats.length > 0){
    const head = document.createElement('div');
    head.className = 'tickets-section-title';
    head.textContent = translations[currentLang].open_chats;
    list.appendChild(head);
    openChats.forEach(c => list.appendChild(renderTicketCard(c, { isAdminView: true })));
  }

  if(closedChats.length > 0){
    const head = document.createElement('div');
    head.className = 'tickets-section-title tickets-section-closed';
    head.textContent = translations[currentLang].closed_chats;
    list.appendChild(head);
    closedChats.forEach(c => list.appendChild(renderTicketCard(c, { isAdminView: true })));
  }

  if(openChats.length === 0 && closedChats.length === 0){
    list.innerHTML = `<div class="tickets-empty">${translations[currentLang].tickets_empty_admin}</div>`;
  }
}

/* ---------- Chat ---------- */
function canAccessChat(chat){
  if(!currentUser || !chat) return false;
  if(currentUser.isAdmin) return true;
  return chat.clientId === currentUser.id;
}

function openChat(chatId){
  const store = loadStore();
  const chat = store.chats.find(c => c.id === chatId);
  if(!chat || !canAccessChat(chat)) return;

  activeChatId = chatId;
  document.getElementById('chatTopTitle').textContent =
    `${chat.serverName} · ${chat.package}`;
  const statusNote = chat.status === 'closed' ? ` · ${translations[currentLang].status_closed}` : '';
  document.getElementById('chatTopSub').textContent =
    `${chat.clientName} (@${chat.clientUsername || ''})${statusNote}`;

  renderChatMessages();
  renderChatPresence();
  document.getElementById('chatOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  bumpPresence(chatId);
}

function toggleChatClosedStatus(){
  if(!currentUser || !currentUser.isAdmin || !activeChatId) return;
  if(!ADMIN_IDS.includes(String(currentUser.id))) return;

  const store = loadStore();
  const chat = store.chats.find(c => c.id === activeChatId);
  if(!chat) return;

  const now = Date.now();
  const wasClosed = chat.status === 'closed';
  chat.status = wasClosed ? 'open' : 'closed';
  chat.lastAt = now;

  const systemMsg = {
    id: uid(),
    chatId: activeChatId,
    type: 'system',
    text: wasClosed
      ? translations[currentLang].chat_reopened
      : translations[currentLang].chat_closed,
    createdAt: now
  };
  store.messages.push(systemMsg);
  chat.lastMessage = systemMsg.text;
  saveStore(store);

  renderChatMessages();
  renderUserTickets();
  if(currentUser.isAdmin) renderAdminTickets();

  // Update header status text
  document.getElementById('chatTopSub').textContent =
    `${chat.clientName} (@${chat.clientUsername || ''})` +
    (chat.status === 'closed' ? ` · ${translations[currentLang].status_closed}` : '');

  // Close the chat overlay after locking (park it); reopen stays open
  if(!wasClosed){
    closeChat();
  }
}

/* Tab + Q — admins only: toggle close / reopen the active chat */
let _tabHeld = false;
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Tab') _tabHeld = true;
  if(_tabHeld && (e.key === 'q' || e.key === 'Q') && currentUser && currentUser.isAdmin && activeChatId){
    e.preventDefault();
    e.stopPropagation();
    toggleChatClosedStatus();
  }
});
document.addEventListener('keyup', (e)=>{
  if(e.key === 'Tab') _tabHeld = false;
});
document.addEventListener('blur', ()=>{ _tabHeld = false; });

function closeChat(){
  document.getElementById('chatOverlay').classList.remove('open');
  document.body.style.overflow = '';
  activeChatId = null;
  pendingImageData = null;
  document.getElementById('chatImagePreview').style.display = 'none';
  document.getElementById('chatInput').value = '';
}

document.getElementById('chatCloseBtn').addEventListener('click', closeChat);
document.getElementById('chatBackBtn').addEventListener('click', closeChat);

function renderChatMessages(){
  const box = document.getElementById('chatMessages');
  box.innerHTML = '';
  if(!activeChatId) return;
  const store = loadStore();
  const msgs = store.messages
    .filter(m => m.chatId === activeChatId)
    .sort((a,b) => a.createdAt - b.createdAt);

  msgs.forEach(m => {
    if(m.type === 'system'){
      const el = document.createElement('div');
      el.className = 'msg-system';
      el.textContent = m.text;
      box.appendChild(el);
      return;
    }
    const mine = currentUser && m.senderId === currentUser.id;
    const el = document.createElement('div');
    el.className = 'msg' + (mine ? ' mine' : '');
    el.innerHTML = `
      <img class="msg-avatar" src="${escapeHtml(m.senderAvatar || '')}" alt="">
      <div class="msg-bubble">
        <div class="msg-author">${escapeHtml(m.senderName || '')}</div>
        ${m.text ? `<div class="msg-text">${escapeHtml(m.text)}</div>` : ''}
        ${m.image ? `<img class="msg-img" src="${m.image}" alt="attachment">` : ''}
        <div class="msg-time">${formatMsgTime(m.createdAt)}</div>
      </div>
    `;
    box.appendChild(el);
  });
  box.scrollTop = box.scrollHeight;
}

function sendChatMessage(){
  if(!currentUser || !activeChatId) return;
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text && !pendingImageData) return;

  const store = loadStore();
  const chat = store.chats.find(c => c.id === activeChatId);
  if(!chat || !canAccessChat(chat)) return;

  const msg = {
    id: uid(),
    chatId: activeChatId,
    type: 'user',
    senderId: currentUser.id,
    senderName: currentUser.global_name,
    senderAvatar: currentUser.avatarUrl,
    text: text || '',
    image: pendingImageData || null,
    createdAt: Date.now()
  };
  store.messages.push(msg);
  chat.lastAt = msg.createdAt;
  chat.lastMessage = text || '[image]';
  saveStore(store);

  input.value = '';
  pendingImageData = null;
  document.getElementById('chatImagePreview').style.display = 'none';
  renderChatMessages();
  renderUserTickets();
  if(currentUser.isAdmin) renderAdminTickets();
  bumpPresence(activeChatId);
}

document.getElementById('chatSendBtn').addEventListener('click', sendChatMessage);
document.getElementById('chatInput').addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' && !e.shiftKey){
    e.preventDefault();
    sendChatMessage();
  }
});

document.getElementById('chatImageInput').addEventListener('change', (e)=>{
  const file = e.target.files && e.target.files[0];
  e.target.value = '';
  if(!file) return;
  if(file.size > 1.5 * 1024 * 1024){
    alert('Max image size: 1.5 MB');
    return;
  }
  const reader = new FileReader();
  reader.onload = ()=>{
    pendingImageData = reader.result;
    document.getElementById('chatPreviewImg').src = pendingImageData;
    document.getElementById('chatImagePreview').style.display = 'flex';
  };
  reader.readAsDataURL(file);
});
document.getElementById('chatPreviewClear').addEventListener('click', ()=>{
  pendingImageData = null;
  document.getElementById('chatImagePreview').style.display = 'none';
});

/* ---------- Presence ---------- */
function bumpPresence(chatId){
  if(!currentUser) return;
  const store = loadStore();
  store.presence[currentUser.id] = {
    id: currentUser.id,
    name: currentUser.global_name,
    avatar: currentUser.avatarUrl,
    chatId: chatId || activeChatId || null,
    lastSeen: Date.now(),
    isAdmin: currentUser.isAdmin
  };
  saveStore(store);
  if(activeChatId) renderChatPresence();
}

function setPresenceOffline(userId){
  const store = loadStore();
  if(store.presence[userId]){
    store.presence[userId].lastSeen = 0;
    saveStore(store);
  }
}

function startPresence(){
  stopPresence();
  bumpPresence(activeChatId);
  presenceTimer = setInterval(()=> bumpPresence(activeChatId), 15000);
  storePollTimer = setInterval(()=>{
    if(activeChatId){
      renderChatMessages();
      renderChatPresence();
    }
    if(currentUser){
      renderUserTickets();
      if(currentUser.isAdmin) renderAdminTickets();
    }
  }, 3000);
}

function stopPresence(){
  if(presenceTimer) clearInterval(presenceTimer);
  if(storePollTimer) clearInterval(storePollTimer);
  presenceTimer = null;
  storePollTimer = null;
}

function renderChatPresence(){
  const onlineList = document.getElementById('chatOnlineList');
  const offlineList = document.getElementById('chatOfflineList');
  onlineList.innerHTML = '';
  offlineList.innerHTML = '';
  if(!activeChatId) return;

  const store = loadStore();
  const chat = store.chats.find(c => c.id === activeChatId);
  if(!chat) return;

  // Members: client + all admins (بأسمائهم وصورهم الحقيقية) + أي حضور حالي
  const members = {};
  members[chat.clientId] = {
    id: chat.clientId,
    name: chat.clientName,
    avatar: chat.clientAvatar
  };
  ADMIN_IDS.forEach(aid => {
    const disp = getAdminDisplay(aid);
    members[aid] = {
      id: aid,
      name: disp.name,
      avatar: disp.avatar
    };
  });
  // Also include anyone currently present in this chat (overrides with live presence)
  Object.values(store.presence).forEach(p => {
    if(p.chatId === activeChatId){
      members[p.id] = { id: p.id, name: p.name, avatar: p.avatar };
    }
  });

  const now = Date.now();
  let onlineCount = 0, offlineCount = 0;
  Object.values(members).forEach(m => {
    const p = store.presence[m.id];
    const isOnline = p && p.chatId === activeChatId && (now - (p.lastSeen || 0) < PRESENCE_TTL_MS);
    const el = document.createElement('div');
    el.className = 'presence-user';
    const avatarSrc = m.avatar || 'https://cdn.discordapp.com/embed/avatars/0.png';
    el.innerHTML = `
      <img src="${escapeHtml(avatarSrc)}" alt="" onerror="this.onerror=null;this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
      <span>${escapeHtml(m.name || 'User')}</span>
    `;
    if(isOnline){
      onlineList.appendChild(el);
      onlineCount++;
    } else {
      offlineList.appendChild(el);
      offlineCount++;
    }
  });
  if(onlineCount === 0){
    onlineList.innerHTML = `<div class="presence-empty">—</div>`;
  }
  if(offlineCount === 0){
    offlineList.innerHTML = `<div class="presence-empty">—</div>`;
  }
}

// Cross-tab sync
window.addEventListener('storage', (e)=>{
  if(e.key === STORE_KEY || e.key === STORE_KEY + '_ping'){
    if(activeChatId){
      renderChatMessages();
      renderChatPresence();
    }
    if(currentUser){
      renderUserTickets();
      if(currentUser.isAdmin) renderAdminTickets();
    }
  }
});

initDiscordLogin();
applyLanguage('en');
loadDiscordWidget();
