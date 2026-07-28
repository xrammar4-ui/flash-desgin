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

/* =========================================================
   SUPABASE — ضع بياناتك هنا
   =========================================================
   1. روح https://supabase.com → اعمل مشروع جديد
   2. من Table Editor → New table → اسمها: store
      - id          → int8  → Primary Key + Is Identity
      - data        → jsonb
      - updated_at  → timestamptz → default: now()
   3. بعد ما تعمل الجدول: Settings → API
      انسخ Project URL و anon public key وحطهم تحت
   4. مهم: روح Authentication → Policies أو SQL Editor وشغّل:
      ALTER TABLE store ENABLE ROW LEVEL SECURITY;
      CREATE POLICY "Allow public access" ON store FOR ALL USING (true) WITH CHECK (true);
   (ده مؤقت عشان يشتغل بسهولة، تقدر تقفل بعدين)
*/
const SUPABASE_URL = "https://rwvrhzkpdlghfxnnxlmj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_0UznKlUIBleaYElHnNoTQA_Ky5c39MB";

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
const STORE_KEY = 'flash_desgin_store_v1'; // لم يعد يُستخدم للتخزين الأساسي (بقي للتوافق)
const PENDING_ORDER_KEY = 'flash_pending_order_package';
const PRESENCE_TTL_MS = 45000;

/* ---------- Supabase Store (shared across all users) ---------- */
let supabaseClient = null;
let _storeCache = { chats: [], messages: [], presence: {} };
let _storeReady = false;
let _lastStoreHash = '';

function initSupabase(){
  if(typeof window.supabase === 'undefined'){
    console.error('Supabase JS library not loaded. Add this to your HTML before the main script:\n<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>');
    return false;
  }
  if(!SUPABASE_URL || SUPABASE_URL.includes('YOUR_') || !SUPABASE_ANON_KEY || SUPABASE_ANON_KEY.includes('YOUR_')){
    console.warn('Supabase URL / Key not set yet. Using empty local cache until you fill them.');
    _storeReady = true;
    return false;
  }
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return true;
}

// دمج آمن: الرسائل والشاتات تتضاف بالـ ID ومش بتتسمحش
function mergeStore(local, remote){
  const chatMap = new Map();
  (remote.chats || []).forEach(c => chatMap.set(c.id, c));
  (local.chats || []).forEach(c => {
    const existing = chatMap.get(c.id);
    if(!existing || (c.lastAt || 0) >= (existing.lastAt || 0)){
      chatMap.set(c.id, c);
    }
  });

  const msgMap = new Map();
  (remote.messages || []).forEach(m => msgMap.set(m.id, m));
  (local.messages || []).forEach(m => {
    if(!msgMap.has(m.id)) msgMap.set(m.id, m);
  });

  // presence: خذ الأحدث حسب lastSeen
  const presence = Object.assign({}, remote.presence || {});
  Object.keys(local.presence || {}).forEach(uid => {
    const lp = local.presence[uid];
    const rp = presence[uid];
    if(!rp || (lp.lastSeen || 0) >= (rp.lastSeen || 0)){
      presence[uid] = lp;
    }
  });

  return {
    chats: Array.from(chatMap.values()).sort((a,b) => (b.lastAt||0) - (a.lastAt||0)),
    messages: Array.from(msgMap.values()),
    presence
  };
}

async function fetchStoreFromServer(){
  if(!supabaseClient) return _storeCache;
  try{
    const { data, error } = await supabaseClient
      .from('store')
      .select('data')
      .eq('id', 1)
      .maybeSingle();

    if(error){
      console.warn('Supabase fetch error:', error.message);
      return _storeCache;
    }

    if(data && data.data){
      const incoming = data.data;
      const remote = {
        chats: Array.isArray(incoming.chats) ? incoming.chats : [],
        messages: Array.isArray(incoming.messages) ? incoming.messages : [],
        presence: (incoming.presence && typeof incoming.presence === 'object') ? incoming.presence : {}
      };
      // ادمج مع الكاش المحلي عشان الرسائل الجديدة متضيعش
      _storeCache = mergeStore(_storeCache, remote);
    } else {
      // أول مرة — أنشئ الصف
      await supabaseClient.from('store').upsert({
        id: 1,
        data: _storeCache,
        updated_at: new Date().toISOString()
      });
    }
    _storeReady = true;
    return _storeCache;
  }catch(err){
    console.warn('fetchStoreFromServer failed:', err);
    _storeReady = true;
    return _storeCache;
  }
}

function loadStore(){
  return {
    chats: _storeCache.chats || [],
    messages: _storeCache.messages || [],
    presence: _storeCache.presence || {}
  };
}

let _saveLock = false;
let _pendingSave = null;

async function saveStore(store){
  // حدّث الكاش المحلي فورًا
  _storeCache = {
    chats: Array.isArray(store.chats) ? store.chats : [],
    messages: Array.isArray(store.messages) ? store.messages : [],
    presence: (store.presence && typeof store.presence === 'object') ? store.presence : {}
  };

  if(!supabaseClient) return;

  // لو في حفظ شغال، نخزن الطلب الأخير وننفذه بعده
  if(_saveLock){
    _pendingSave = _storeCache;
    return;
  }

  _saveLock = true;
  try{
    // قبل الحفظ: جيب أحدث نسخة وادمج
    await fetchStoreFromServer();
    _storeCache = mergeStore(_storeCache, _storeCache);

    const { error } = await supabaseClient
      .from('store')
      .upsert({
        id: 1,
        data: _storeCache,
        updated_at: new Date().toISOString()
      });
    if(error) console.warn('Supabase save error:', error.message);
  }catch(err){
    console.warn('saveStore failed:', err);
  }finally{
    _saveLock = false;
    if(_pendingSave){
      const next = _pendingSave;
      _pendingSave = null;
      await saveStore(next);
    }
  }
}

// تحديث دوري من السيرفر (أقل عدوانية عشان الرسائل متختفيش)
async function refreshStoreAndRender(){
  const beforeHash = JSON.stringify({
    msgCount: (_storeCache.messages || []).length,
    chatCount: (_storeCache.chats || []).length,
    lastMsg: (_storeCache.messages || []).slice(-1)[0]?.id,
    presenceKeys: Object.keys(_storeCache.presence || {}).sort().join(',')
  });

  await fetchStoreFromServer();

  const afterHash = JSON.stringify({
    msgCount: (_storeCache.messages || []).length,
    chatCount: (_storeCache.chats || []).length,
    lastMsg: (_storeCache.messages || []).slice(-1)[0]?.id,
    presenceKeys: Object.keys(_storeCache.presence || {}).sort().join(',')
  });

  if(beforeHash !== afterHash){
    if(activeChatId){
      renderChatMessages();
      renderChatPresence();
      markChatRead(activeChatId); // stay marked while open
    }
    if(currentUser){
      renderUserTickets();
      if(currentUser.isAdmin) renderAdminTickets();
    }
  }
  updateNavUnreadDots();
}

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
  updateNavUnreadDots();

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

document.getElementById('orderForm').addEventListener('submit', async (e)=>{
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

  // جيب أحدث نسخة من السيرفر قبل ما نضيف
  await fetchStoreFromServer();

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
  await saveStore(store);

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

async function deleteChat(chatId){
  if(!currentUser) return;
  if(!currentUser.isAdmin || !ADMIN_IDS.includes(String(currentUser.id))) return;

  await fetchStoreFromServer();
  const store = loadStore();
  const chat = store.chats.find(c => c.id === chatId);
  if(!chat || !canDeleteChat(chat)) return;

  const confirmMsg = currentLang === 'ar'
    ? 'هل أنت متأكد من حذف هذا الشات نهائياً؟'
    : 'Are you sure you want to permanently delete this chat?';
  if(!confirm(confirmMsg)) return;

  store.chats = store.chats.filter(c => c.id !== chatId);
  store.messages = store.messages.filter(m => m.chatId !== chatId);
  await saveStore(store);

  if(activeChatId === chatId) closeChat();
  renderUserTickets();
  if(currentUser.isAdmin) renderAdminTickets();
}

function renderTicketCard(chat, opts){
  opts = opts || {};
  const isAdminView = !!opts.isAdminView;
  const card = document.createElement('div');
  const unread = chatHasUnread(chat) && activeChatId !== chat.id;
  card.className = 'ticket-card' + (chat.status === 'closed' ? ' ticket-closed' : '') + (unread ? ' ticket-unread' : '');
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
      <div class="ticket-title">${unread ? '<span class="ticket-unread-dot"></span>' : ''}${escapeHtml(chat.serverName)} · ${escapeHtml(chat.package)}</div>
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
  updateNavUnreadDots();
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

  updateNavUnreadDots();
}

/* ---------- Chat ---------- */
function canAccessChat(chat){
  if(!currentUser || !chat) return false;
  if(currentUser.isAdmin) return true;
  return chat.clientId === currentUser.id;
}

async function openChat(chatId){
  await fetchStoreFromServer();
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
  applyChatTheme(getSavedChatTheme());
  closeChatThemePanel();
  markChatRead(chatId);
  bumpPresence(chatId);
}

async function toggleChatClosedStatus(){
  if(!currentUser || !currentUser.isAdmin || !activeChatId) return;
  if(!ADMIN_IDS.includes(String(currentUser.id))) return;

  await fetchStoreFromServer();
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
  await saveStore(store);

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

async function sendChatMessage(){
  if(!currentUser || !activeChatId) return;
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text && !pendingImageData) return;

  await fetchStoreFromServer();
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
  await saveStore(store);

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
async function bumpPresence(chatId){
  if(!currentUser) return;
  await fetchStoreFromServer();
  const store = loadStore();
  store.presence[currentUser.id] = {
    id: currentUser.id,
    name: currentUser.global_name,
    avatar: currentUser.avatarUrl,
    chatId: chatId || activeChatId || null,
    lastSeen: Date.now(),
    isAdmin: currentUser.isAdmin
  };
  await saveStore(store);
  if(activeChatId) renderChatPresence();
}

async function setPresenceOffline(userId){
  await fetchStoreFromServer();
  const store = loadStore();
  if(store.presence[userId]){
    store.presence[userId].lastSeen = 0;
    await saveStore(store);
  }
}

function startPresence(){
  stopPresence();
  bumpPresence(activeChatId);
  presenceTimer = setInterval(()=> bumpPresence(activeChatId), 20000);
  // كل 3 ثواني نجيب التحديثات من السيرفر (زي القديم)
  storePollTimer = setInterval(()=>{
    refreshStoreAndRender();
  }, 5000);
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

// لم نعد نحتاج storage event لأن التخزين أصبح مشترك عبر السيرفر
// window.addEventListener('storage' ... ) تم إزالته



/* ---------- Unread notifications ---------- */
const READ_KEY = 'flash_chat_read_v1';

function loadReadMap(){
  try{ return JSON.parse(localStorage.getItem(READ_KEY) || '{}'); }catch(e){ return {}; }
}
function saveReadMap(map){
  try{ localStorage.setItem(READ_KEY, JSON.stringify(map)); }catch(e){}
}
function getChatLastRead(chatId){
  const map = loadReadMap();
  const uid = currentUser ? currentUser.id : 'guest';
  return (map[uid] && map[uid][chatId]) || 0;
}
function markChatRead(chatId){
  if(!chatId) return;
  const map = loadReadMap();
  const uid = currentUser ? currentUser.id : 'guest';
  if(!map[uid]) map[uid] = {};
  map[uid][chatId] = Date.now();
  saveReadMap(map);
  updateUnreadIndicators();
}
function chatHasUnread(chat){
  if(!chat || !currentUser) return false;
  // system-only chats for the client who just created may count; use lastAt
  const last = chat.lastAt || chat.createdAt || 0;
  if(!last) return false;
  // don't show unread for messages you just sent if lastAt is yours — still ok to use lastAt vs read
  const readAt = getChatLastRead(chat.id);
  return last > readAt;
}
function countUnreadForUser(){
  if(!currentUser) return 0;
  const store = loadStore();
  let n = 0;
  store.chats.forEach(c=>{
    if(currentUser.isAdmin || c.clientId === currentUser.id){
      if(activeChatId === c.id) return; // currently open
      if(chatHasUnread(c)) n++;
    }
  });
  return n;
}
function updateUnreadIndicators(){
  // nav badges
  const supportBtn = document.getElementById('navSupport');
  const adminBtn = document.getElementById('navAdmin');
  const n = countUnreadForUser();
  [supportBtn, adminBtn].forEach(btn=>{
    if(!btn) return;
    let badge = btn.querySelector('.nav-unread-dot');
    if(n > 0 && ((btn.id === 'navSupport' && currentUser && !currentUser.isAdmin) || (btn.id === 'navAdmin' && currentUser && currentUser.isAdmin) || (btn.id === 'navSupport' && currentUser))){
      // show on support for everyone logged in who has unread in their chats; admin on admin tab
      const show = (btn.id === 'navAdmin' && currentUser.isAdmin) || (btn.id === 'navSupport');
      if(show && ((btn.id === 'navSupport' && countUnreadForUser() > 0) || (btn.id === 'navAdmin' && currentUser.isAdmin && countUnreadForUser() > 0))){
        if(!badge){
          badge = document.createElement('span');
          badge.className = 'nav-unread-dot';
          btn.style.position = 'relative';
          btn.appendChild(badge);
        }
        badge.style.display = '';
      } else if(badge){
        badge.style.display = 'none';
      }
    } else if(badge){
      badge.style.display = 'none';
    }
  });
  // simpler dedicated update
  updateNavUnreadDots();
}

function updateNavUnreadDots(){
  const nUser = (()=>{
    if(!currentUser) return 0;
    const store = loadStore();
    return store.chats.filter(c => c.clientId === currentUser.id && activeChatId !== c.id && chatHasUnread(c)).length;
  })();
  const nAdmin = (()=>{
    if(!currentUser || !currentUser.isAdmin) return 0;
    const store = loadStore();
    return store.chats.filter(c => activeChatId !== c.id && chatHasUnread(c)).length;
  })();

  function setDot(btn, count){
    if(!btn) return;
    let badge = btn.querySelector('.nav-unread-dot');
    if(count > 0){
      if(!badge){
        badge = document.createElement('span');
        badge.className = 'nav-unread-dot';
        btn.appendChild(badge);
      }
      badge.style.display = '';
    } else if(badge){
      badge.style.display = 'none';
    }
  }
  setDot(document.getElementById('navSupport'), nUser > 0 || (currentUser && currentUser.isAdmin && nAdmin > 0) ? (nUser || nAdmin) : 0);
  // Support shows user's own unread; Admin shows all unread for admins
  setDot(document.getElementById('navSupport'), nUser);
  setDot(document.getElementById('navAdmin'), nAdmin);
}


/* ---------- Chat Themes ---------- */
const CHAT_THEMES = [
  { id: 'default', label: { en: 'Default', ar: 'افتراضي' }, preview: 'linear-gradient(160deg,#1a0808,#0a0202)' },
  { id: 'embers',  label: { en: 'Embers', ar: 'جمر' }, preview: 'radial-gradient(ellipse at 30% 20%, rgba(255,60,20,.35), transparent 50%), #120404' },
  { id: 'smoke',   label: { en: 'Smoke', ar: 'دخان' }, preview: 'radial-gradient(circle at 30% 40%, rgba(180,30,30,.25), transparent 55%), #0a0303' },
  { id: 'grid',    label: { en: 'Grid', ar: 'شبكة' }, preview: 'linear-gradient(rgba(255,40,40,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,40,40,.15) 1px, transparent 1px), #0a0303', previewSize: '12px 12px' },
  { id: 'dots',    label: { en: 'Dots', ar: 'نقاط' }, preview: 'radial-gradient(rgba(255,60,60,.35) 1.2px, transparent 1.2px), #0b0303', previewSize: '10px 10px' },
  { id: 'waves',   label: { en: 'Waves', ar: 'موجات' }, preview: 'repeating-linear-gradient(-12deg, transparent, transparent 6px, rgba(255,40,40,.12) 6px, rgba(255,40,40,.12) 7px), #100404' },
  { id: 'aurora',  label: { en: 'Aurora', ar: 'شفق' }, preview: 'radial-gradient(ellipse at 20% 40%, rgba(255,40,80,.35), transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(120,20,180,.25), transparent 45%), #0c0410' },
  { id: 'carbon',  label: { en: 'Carbon', ar: 'كربون' }, preview: 'linear-gradient(45deg, rgba(255,255,255,.06) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,.06) 25%, transparent 25%), #0a0404', previewSize: '8px 8px' },
  { id: 'night',   label: { en: 'Night', ar: 'ليل' }, preview: 'radial-gradient(1.5px 1.5px at 30% 40%, rgba(255,220,200,.7), transparent), radial-gradient(1px 1px at 70% 60%, rgba(255,200,180,.5), transparent), #0a0512' },
  { id: 'mesh',    label: { en: 'Mesh', ar: 'شبكة لونية' }, preview: 'radial-gradient(at 0% 0%, rgba(180,20,40,.45) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(160,30,20,.35) 0, transparent 50%), #0a0204' },
  { id: 'silk',    label: { en: 'Silk', ar: 'حرير' }, preview: 'repeating-linear-gradient(90deg, transparent 0, transparent 2px, rgba(255,255,255,.04) 2px, rgba(255,255,255,.04) 3px), linear-gradient(135deg, #140606, #0a0303)' }
];

const CHAT_THEME_KEY = 'flash_chat_theme';

function getSavedChatTheme(){
  try{ return localStorage.getItem(CHAT_THEME_KEY) || 'default'; }catch(e){ return 'default'; }
}

function applyChatTheme(themeId){
  const box = document.getElementById('chatMessages');
  if(!box) return;
  // remove old theme-* classes
  box.className = box.className
    .split(/\s+/)
    .filter(c => c && !c.startsWith('theme-'))
    .join(' ');
  box.classList.add('chat-messages');
  box.classList.add('theme-' + (themeId || 'default'));
  try{ localStorage.setItem(CHAT_THEME_KEY, themeId || 'default'); }catch(e){}

  // update active state in grid
  document.querySelectorAll('.chat-theme-item').forEach(el=>{
    el.classList.toggle('active', el.dataset.theme === themeId);
  });
}

function renderChatThemeGrid(){
  const grid = document.getElementById('chatThemeGrid');
  if(!grid) return;
  const current = getSavedChatTheme();
  grid.innerHTML = '';
  CHAT_THEMES.forEach(t=>{
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'chat-theme-item' + (t.id === current ? ' active' : '');
    el.dataset.theme = t.id;
    el.style.backgroundImage = t.preview;
    if(t.previewSize) el.style.backgroundSize = t.previewSize;
    const label = (t.label && t.label[currentLang]) || t.label.en;
    el.innerHTML = `<span>${label}</span>`;
    el.addEventListener('click', ()=>{
      applyChatTheme(t.id);
    });
    grid.appendChild(el);
  });
}

function openChatThemePanel(){
  renderChatThemeGrid();
  const panel = document.getElementById('chatThemePanel');
  const btn = document.getElementById('chatThemeBtn');
  if(panel) panel.classList.add('open');
  if(btn) btn.classList.add('active');
}
function closeChatThemePanel(){
  const panel = document.getElementById('chatThemePanel');
  const btn = document.getElementById('chatThemeBtn');
  if(panel) panel.classList.remove('open');
  if(btn) btn.classList.remove('active');
}
function toggleChatThemePanel(){
  const panel = document.getElementById('chatThemePanel');
  if(panel && panel.classList.contains('open')) closeChatThemePanel();
  else openChatThemePanel();
}

(function initChatThemes(){
  const btn = document.getElementById('chatThemeBtn');
  const closeBtn = document.getElementById('chatThemeClose');
  if(btn) btn.addEventListener('click', toggleChatThemePanel);
  if(closeBtn) closeBtn.addEventListener('click', closeChatThemePanel);
  // apply saved theme on load
  applyChatTheme(getSavedChatTheme());
})();


/* ---------- بدء التشغيل ---------- */
(async function bootstrap(){
  initSupabase();
  await fetchStoreFromServer();   // أول تحميل من السيرفر
  initDiscordLogin();
  applyLanguage('en');
  loadDiscordWidget();
})();
