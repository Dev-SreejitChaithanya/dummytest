// ============================================================
//  Amaizing Taste – V4 Wayanad Luxury Storefront
//  app.js – Data Layer, SPA Routing & UI Logic
// ============================================================

'use strict';

// ── Internationalization (i18n) & Currency Config ──────────
const TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_collections: "Collections",
    nav_about: "About Us",
    nav_contact: "Contact",
    hero_label: "Wayanad(Vayal Nadu) · Artisan Store",
    hero_title: "The Taste of<br><span>Wayanad's Finest</span>",
    hero_subtitle: "Amaizing Taste — Fresh from the Hills of Wayanad to Your Doorstep.",
    hero_cta: "Shop Collections",
    motto_text: "Sourced from the finest Wayanadan farms to the world",
    about_label: "About Us",
    about_title: "Preserving Heritage, Empowering Communities",
    about_desc: "Amaizing Taste is dedicated to celebrating the rich, unadulterated flavors of Wayanad. We partner directly with local farmers across Wayanad(Vayal Nadu) to bring you fresh spices, sun-dried delicacies, and luxury gift hampers, straight from the heart of the plantations to your doorstep.",
    feature_sourcing_title: "Farm-Direct Sourcing",
    feature_sourcing_desc: "We partner directly with small-hold farmers across Wayanad's spice belts — no middlemen, maximum freshness.",
    feature_artisan_title: "Small-Batch Artisan Production",
    feature_artisan_desc: "Every jar, pouch, and hamper is made in carefully controlled small batches to preserve quality.",
    feature_gift_title: "Signature Gift Packaging",
    feature_gift_desc: "Our luxury gift hampers are hand-packed with gold silk ribbon — perfect for premium gifting.",
    contact_label: "Contact Us",
    contact_title: "Let's Connect",
    contact_desc: "Have queries or wholesale orders? Reach out via WhatsApp, Call, or email, or drop by our Wayanad store.",
    contact_btn: "Send Enquiry",
    footer_desc: "Amaizing Taste — Fresh from the Hills of Wayanad to Your Doorstep. Handpacked with passion, packaged with luxury.",
    footer_cols: "Collections",
    footer_contact: "Contact",
    footer_address: "Wayanad, Kerala",
    whatsapp_order: "WhatsApp Order",
    cart_title: "Your Bag",
    cart_empty: "Your bag is empty",
    cart_total_label: "Subtotal",
    cart_btn_checkout: "Proceed to WhatsApp Checkout",
    checkout_title: "Delivery Details",
    checkout_btn_submit: "Place Order via WhatsApp",
    back_to_collections: "All Collections",
    back_to_collections_btn: "Back to All Collections",
    back_to_bag: "Back to Bag",
    col_pickles: "Pickles & Preserves",
    col_spices: "Exotic Spices",
    col_sundried: "Sun-Cured Delicacies",
    col_snacks: "Gourmet Snacks",
    col_hampers: "Luxury Hampers",
    col_harvest: "Fresh Harvest",
    col_ecoliving: "Eco-Luxury Living",
    col_fruits: "Premium Exotic Fruits",
    collections_label: "Our Collections",
    collections_title: "Explore Wayanad's Finest",
    collections_desc: "Each collection is a chapter of Wayanad's rich culinary and artisan heritage — handpicked, small-batch, and delivered with care.",
    input_enquiry: "Your Enquiry",
    enquiry_btn_submit: "Send via WhatsApp →",
    input_name_placeholder: "e.g. Rahul Menon",
    input_address_placeholder: "House No., Street, City, State, PIN Code",
    input_phone_placeholder: "+91 XXXXX XXXXX",
    input_enquiry_placeholder: "Tell us what you're looking for…",
    input_notes: "Special Notes (Optional)"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_collections: "المجموعات",
    nav_about: "من نحن",
    nav_contact: "اتصل بنا",
    hero_label: "أمايزينج تيست · متجر منتجات واياناد التقليدية",
    hero_title: "مذاق أفضل<br><span>منتجات واياناد</span>",
    hero_subtitle: "أمايزينج تيست - طازج من تلال واياناد إلى عتبة داركم.",
    hero_cta: "تسوق المجموعات",
    motto_text: "مصدرها من أفضل مزارع واياناد إلى العالم",
    about_label: "من نحن",
    about_title: "الحفاظ على التراث وتمكين المجتمعات",
    about_desc: "أمايزينج تيست مكرس للاحتفال بالنكهات الغنية غير المغشوشة لـ واياناد. نحن نتشارك مباشرة مع المزارعين المحليين في جميع أنحاء واياناد (فايال نادو) لنقدم لكم التوابل الطازجة والمخللات المجففة بالشمس وسلال الهدايا الفاخرة، مباشرة من قلب المزارع إلى عتبة داركم.",
    feature_sourcing_title: "المصادر المباشرة من المزرعة",
    feature_sourcing_desc: "نتشارك مباشرة مع صغار المزارعين عبر أحزمة التوابل في واياناد - بدون وسطاء، أقصى درجات الطزاجة.",
    feature_artisan_title: "إنتاج حرفي على دفعات صغيرة",
    feature_artisan_desc: "يتم تصنيع كل جرة وكيس وسلة في دفعات صغيرة خاضعة للرقابة بعناية للحفاظ على الجودة.",
    feature_gift_title: "تغليف هدايا مميز",
    feature_gift_desc: "سلال الهدايا الفاخرة لدينا معبأة يدوياً بشريط حريري ذهبي - مثالية للإهداء الراقي.",
    contact_label: "اتصل بنا",
    contact_title: "دعنا نتواصل",
    contact_desc: "هل لديك استفسارات أو طلبات بالجملة؟ تواصل معنا عبر واتساب أو الهاتف أو البريد الإلكتروني، أو قم بزيارة متجرنا في واياناد.",
    contact_btn: "إرسال استفسار",
    footer_desc: "أمايزينج تيست - طازج من تلال واياناد إلى عتبة داركم. معبأ يدوياً بشغف، ومغلف بفخامة.",
    footer_cols: "المجموعات",
    footer_contact: "اتصل بنا",
    footer_address: "واياناد، كيرالا",
    whatsapp_order: "طلب واتساب",
    cart_title: "حقيبتك",
    cart_empty: "حقيبتك فارغة",
    cart_total_label: "المجموع الفرعي",
    cart_btn_checkout: "المتابعة للدفع عبر واتساب",
    checkout_title: "تفاصيل التوصيل",
    checkout_btn_submit: "إرسال الطلب عبر واتساب",
    back_to_collections: "كل المجموعات",
    back_to_collections_btn: "العودة إلى كل المجموعات",
    back_to_bag: "العودة للحقيبة",
    col_pickles: "مخللات ومربيات",
    col_spices: "توابل نادرة",
    col_sundried: "أطباق مجففة بالشمس",
    col_snacks: "وجبات خفيفة فاخرة",
    col_hampers: "سلال هدايا",
    col_harvest: "محاصيل طازجة",
    col_ecoliving: "حياة صديقة للبيئة",
    col_fruits: "فواكه استوائية ممتازة",
    collections_label: "مجموعاتنا",
    collections_title: "استكشف أفضل منتجات واياناد",
    collections_desc: "كل مجموعة هي فصل من تراث الطهي والحرف الغني في واياناد - مختارة يدوياً، على دفعات صغيرة، ومسلمة بكل عناية.",
    input_enquiry: "استفسارك",
    enquiry_btn_submit: "إرسال عبر واتساب ←",
    input_name_placeholder: "مثال: أحمد محمد",
    input_address_placeholder: "رقم المنزل، الشارع، المدينة، الولاية، الرمز البريدي",
    input_phone_placeholder: "+91 XXXXX XXXXX",
    input_enquiry_placeholder: "أخبرنا بما تبحث عنه...",
    input_notes: "ملاحظات خاصة (اختياري)"
  },
  fr: {
    nav_home: "Accueil",
    nav_collections: "Collections",
    nav_about: "À Propos",
    nav_contact: "Contact",
    hero_label: "Wayanad(Vayal Nadu) · Boutique Artisanale",
    hero_title: "Le Goût du Meilleer de<br><span>Wayanad</span>",
    hero_subtitle: "Amaizing Taste — Frais depuis les collines de Wayanad jusqu'à votre porte.",
    hero_cta: "Découvrir les Collections",
    motto_text: "Issu des meilleurs fermiers de Wayanad pour le monde entier",
    about_label: "À Propos",
    about_title: "Préserver l'Héritage, Soutenir les Communautés",
    about_desc: "Amaizing Taste se consacre à célébrer les saveurs riches et authentiques de Wayanad. Nous collaborons directement avec les agriculteurs locaux de Wayanad(Vayal Nadu) pour vous proposer des épices fraîches, des délices séchés au soleil et des coffrets cadeaux de luxe, directement de la plantation à votre porte.",
    feature_sourcing_title: "Directement du Producteur",
    feature_sourcing_desc: "Nous collaborons directement avec les petits agriculteurs des régions d'épices de Wayanad — sans intermédiaires, fraîcheur maximale.",
    feature_artisan_title: "Production Artisanale en Petites Lots",
    feature_artisan_desc: "Chaque pot, sachet et panier est fabriqué en petites quantités soigneusement contrôlées pour préserver la qualité.",
    feature_gift_title: "Emballage Cadeau Signature",
    feature_gift_desc: "Nos corbeilles cadeaux de luxe sont emballées à la main avec un ruban de soie dorée — idéal pour un cadeau raffiné.",
    contact_label: "Contactez-nous",
    contact_title: "Discutons ensemble",
    contact_desc: "Des questions ou des commandes en gros ? Contactez-nous par WhatsApp, téléphone ou email, ou visitez notre boutique à Wayanad.",
    contact_btn: "Envoyer une Demande",
    footer_desc: "Amaizing Taste — Frais depuis les collines de Wayanad jusqu'à votre porte. Emballé à la main avec passion, présenté avec luxe.",
    footer_cols: "Collections",
    footer_contact: "Contact",
    footer_address: "Wayanad, Kerala",
    whatsapp_order: "Commande WhatsApp",
    cart_title: "Votre Panier",
    cart_empty: "Votre panier est vide",
    cart_total_label: "Sous-total",
    cart_btn_checkout: "Passer commande via WhatsApp",
    checkout_title: "Détails de Livraison",
    checkout_btn_submit: "Commander via WhatsApp",
    back_to_collections: "Toutes les Collections",
    back_to_collections_btn: "Retour à toutes les collections",
    back_to_bag: "Retour au Panier",
    col_pickles: "Pickles & Conserves",
    col_spices: "Épices Exotiques",
    col_sundried: "Délices Séchés au Soleil",
    col_snacks: "Snacks Gourmets",
    col_hampers: "Paniers de Luxe",
    col_harvest: "Récolte Fraîche",
    col_ecoliving: "Vie Éco-Luxe",
    col_fruits: "Fruits Exotiques Premium",
    collections_label: "Nos Collections",
    collections_title: "Découvrez le meilleur de Wayanad",
    collections_desc: "Chaque collection est un chapitre du riche patrimoine culinaire et artisanal de Wayanad — sélectionné à la main, en petites quantités et livré avec soin.",
    input_enquiry: "Votre Demande",
    enquiry_btn_submit: "Envoyer via WhatsApp →",
    input_name_placeholder: "ex. Rahul Menon",
    input_address_placeholder: "Numéro de maison, rue, ville, département, code postal",
    input_phone_placeholder: "+91 XXXXX XXXXX",
    input_enquiry_placeholder: "Dites-nous ce que vous recherchez...",
    input_notes: "Notes Spéciales (Optionnel)"
  },
  de: {
    nav_home: "Startseite",
    nav_collections: "Kollektionen",
    nav_about: "Über Uns",
    nav_contact: "Kontakt",
    hero_label: "Wayanad(Vayal Nadu) · Kunsthandwerksladen",
    hero_title: "Der Geschmack von<br><span>Wayanads Feinstem</span>",
    hero_subtitle: "Amaizing Taste — Frisch von den Hügeln von Wayanad direkt vor Ihre Haustür.",
    hero_cta: "Kollektionen Durchsuchen",
    motto_text: "Von den besten Bauern Wayanads für die ganze Welt bezogen",
    about_label: "Über Uns",
    about_title: "Erbe bewahren, Gemeinschaften stärken",
    about_desc: "Amaizing Taste widmet sich dem Feiern der reichen, unverfälschten Aromen von Wayanad. Wir arbeiten direkt mit lokalen Bauern in ganz Wayanad(Vayal Nadu) zusammen, um Ihnen frische Gewürze, sonnengetrocknete Köstlichkeiten und luxuriöse Geschenkkörbe direkt von den Plantagen nach Hause zu bringen.",
    feature_sourcing_title: "Direkt vom Bauernhof",
    feature_sourcing_desc: "Wir arbeiten direkt mit Kleinbauern in Wayanads Gewürzgürteln zusammen — keine Zwischenhändler, maximale Frische.",
    feature_artisan_title: "Traditionelle Herstellung",
    feature_artisan_desc: "Jedes Glas, jeder Beutel und jeder Geschenkkorb wird in sorgfältig kontrollierten kleinen Chargen hergestellt, um die Qualität zu bewahren.",
    feature_gift_title: "Exquisite Geschenkverpackung",
    feature_gift_desc: "Unsere luxuriösen Geschenkkörbe werden von Hand mit goldenem Seidenband verpackt — perfekt für erstklassige Geschenke.",
    contact_label: "Kontaktieren Sie uns",
    contact_title: "Lassen Sie uns sprechen",
    contact_desc: "Haben Sie Fragen oder Großhandelsbestellungen? Kontaktieren Sie uns per WhatsApp, Telefon oder E-Mail, oder besuchen Sie unser Geschäft in Wayanad.",
    contact_btn: "Anfrage Senden",
    footer_desc: "Amaizing Taste — Frisch von den Hügeln von Wayanad direkt vor Ihre Haustür. Mit Leidenschaft handverpackt, luxuriös präsentiert.",
    footer_cols: "Kollektionen",
    footer_contact: "Kontakt",
    footer_address: "Wayanad, Kerala",
    whatsapp_order: "WhatsApp-Bestellung",
    cart_title: "Ihr Warenkorb",
    cart_empty: "Ihr Warenkorb ist leer",
    cart_total_label: "Zwischensumme",
    cart_btn_checkout: "Zur WhatsApp-Kasse gehen",
    checkout_title: "Lieferdetails",
    checkout_btn_submit: "Bestellung per WhatsApp aufgeben",
    back_to_collections: "Alle Kollektionen",
    back_to_collections_btn: "Zurück zu allen Kollektionen",
    back_to_bag: "Zurück zum Warenkorb",
    col_pickles: "Pickles & Konserven",
    col_spices: "Exotische Gewürze",
    col_sundried: "Sonnengereifte Delikatessen",
    col_snacks: "Gourmet-Snacks",
    col_hampers: "Luxus-Geschenkkörbe",
    col_harvest: "Frische Ernte",
    col_ecoliving: "Öko-Luxus Leben",
    col_fruits: "Exotische Früchte Premium",
    collections_label: "Unsere Kollektionen",
    collections_title: "Erkunden Sie Wayanads Feinstes",
    collections_desc: "Jede Kollektion ist ein Kapitel des reichen kulinarischen und handwerklichen Erbes von Wayanad — handverlesen, in kleinen Chargen hergestellt und mit Sorgfalt geliefert.",
    input_enquiry: "Ihre Anfrage",
    enquiry_btn_submit: "Per WhatsApp senden →",
    input_name_placeholder: "z.B. Rahul Menon",
    input_address_placeholder: "Hausnummer, Straße, Ort, Bundesland, PLZ",
    input_phone_placeholder: "+91 XXXXX XXXXX",
    input_enquiry_placeholder: "Teilen Sie uns mit, was Sie suchen...",
    input_notes: "Besondere Anmerkungen (Optional)"
  }
};

const DB_TRANSLATIONS = {
  ar: {
    'Artisan Pickles & Preserves': 'مخللات ومربيات حرفية',
    'Exotic Spice Collection': 'مجموعة التوابل النادرة',
    'Sun-Cured Delicacies': 'أطباق مجففة بالشمس',
    'Gourmet Snack Selection': 'وجبات خفيفة فاخرة',
    'Luxury Gift Hampers': 'سلال هدايا فاخرة',
    'Fresh Harvest Selection': 'محاصيل طازجة',
    'Eco-Luxury Living': 'حياة صديقة للبيئة',
    'Premium Exotic Fruits': 'فواكه استوائية ممتازة',
    'Age-old Wayanad recipes, preserved with love': 'وصفات واياناد القديمة، محفوظة بحب',
    'From the spice gardens of Wayanad & Idukki': 'من حدائق التوابل في واياناد وإيدوكي',
    'Preserved by the Wayanad sun, eaten through the year': 'محفوظة بأشعة شمس واياناد، تؤكل طوال العام',
    'Wayanad\'s beloved snacks, elevated for the connoisseur': 'وجبات واياناد الخفيفة المحبوبة، لمتذوقي الطعام',
    'Curated Wayanad gifting for those who appreciate the finest': 'هدايا واياناد المنسقة لمن يقدرون الأفضل',
    'From Wayanad\'s groves to your home, farm-fresh': 'من بساتين واياناد إلى منزلك، طازجة من المزرعة',
    'Bamboo & vetiver craftsmanship from Wayanad artisans': 'حرفية الخيزران والنجيل الهندي من حرفيي واياناد',
    'Hand-plucked from the mist-covered orchards of Wayanad': 'مقطوفة يدوياً من بساتين واياناد المغطاة بالضباب',
    'Mango Preserves': 'مربى المانجو',
    'Veg Pickle\'s': 'مخلل خضار',
    'Traditional Wayanad Preserves': 'مربى واياناد التقليدي',
    'Green Cardamom [8mm+]': 'هيل أخضر [٨ ملم+]',
    'Black Pepper': 'فلفل أسود',
    'Curry Spice Blend': 'بهارات الكاري المشكلة',
    'Microgreens Powder': 'مسحوق خضار المايكرو',
    'Sun-Dried Jackfruit': 'جاكفروت مجفف بالشمس',
    'Sun-Dried Tapioca': 'تابيوكا مجففة بالشمس',
    'Sun-Dried Mango': 'مانجو مجفف بالشمس',
    'Banana Chips': 'رقائق الموز',
    'Tapioca Chips': 'رقائق التابيوكا',
    'Avalose Powder': 'مسحوق أفالوس',
    'Spice Collection Box': 'صندوق التوابل الفاخر',
    'Snack Combo Box': 'صندوق وجبات خفيفة مشكلة',
    'Premium Wayanad Hamper': 'سلة واياناد الفاخرة',
    'Cold Pressed Coconut Oil': 'زيت جوز الهند المعصور على البارد',
    'Fresh Fruits': 'فواكه طازجة',
    'Herbal Plants': 'نباتات عشبية',
    'Vetiver [Ramacham] Products': 'منتجات النجيل الهندي (راماشام)',
    'Bamboo Handcrafted Items': 'منتجات الخيزران اليدوية',
    'Premium Avocado': 'أفوكادو ممتاز',
    'Fresh Rambutan': 'رامبوتان طازج',
    'Sweet Lychee': 'ليتشي وارد',
    'Caramel Sapodilla [Chikoo]': 'سابوديلا الكراميل (تشيكو)',
    'Bestseller': 'الأكثر مبيعاً',
    'Heritage': 'تراثي',
    'Grade A': 'درجة أولى',
    'Exclusive': 'حصري',
    'Superfood': 'غذاء خارق',
    'Traditional': 'تقليدي',
    'Seasonal': 'موسمي',
    'Gift Ready': 'جاهز للإهداء',
    'Luxury': 'فاخر',
    'Pure': 'نقي',
    'Artisan': 'حرفي',
    'Eco': 'صديق للبيئة',
    'Farm Fresh': 'طازج من المزرعة',
    'Fresh Crop': 'محصول طازج',
    'Set of 4': 'طقم من ٤',
    '5 items': '٥ قطع',
    '12 items': '١٢ قطعة',
    '3 plants': '٣ نباتات',
    'Assorted': 'تشكيلة',
    'Raw Wayanad mango slow-cured in aromatic spice brine': 'مانجو واياناد الخام المعالج ببطء في محلول توابل عطري',
    'Mixed seasonal vegetables pickled in mustard oil & spices': 'خضار موسمية مشكلة مخللة في زيت الخردل والتوابل',
    'Authentic thokku-style preserve using heirloom varieties': 'مربى على طريقة الثوكو الأصيلة باستخدام سلالات متوارثة',
    'Premium large-pod cardamom, hand-sorted from Idukki': 'هيل فاخر ذو قرون كبيرة، مفرز يدوياً من إيدوكي',
    'Tellicherry pepper — bold, pungent, earthy': 'فلفل تيليشيري - جريء، حار، ترابي',
    'House-ground Wayanad curry masala with 14 spices': 'ماسالا كاري واياناد مطحونة منزلياً مع ١٤ نوع بهارات',
    'Freeze-dried moringa & spirulina microgreens blend': 'مزيج المورينجا والسبيرولينا المجفف بالتجميد',
    'Slow solar-dried chakka — chewy, caramel-sweet, tropical': 'جاكفروت (تشاكا) مجفف ببطء بالشمس - مطاطي، حلو الكراميل، استوائي',
    'Crispy kappa chips, sun-dried and spice dusted': 'رقائق كابا مقرمشة، مجففة بالشمس ومرشوشة بالبهارات',
    'Tart Alphonso mango slices dried in tropical sunlight': 'شرائح مانجو ألفونسو اللاذعة مجففة تحت شمس استوائية',
    'Wafer-thin Nendran banana chips fried in coconut oil': 'رقائق موز نيندران رقيقة جداً مقلية في زيت جوز الهند',
    'Crispy kappa chips seasoned with rock salt & chilli': 'رقائق كابا مقرمشة متبلة بملح الصخر والفلفل الحار',
    'Roasted rice-coconut powder, a traditional Wayanad sweet': 'مسحوق الأرز وجوز الهند المحمص، حلوى واياناد التقليدية',
    'Curated set of 4 premium single-estate spices': 'مجموعة منسقة من ٤ توابل فاخرة من مزارع فردية',
    'Assorted Wayanad snack collection in a signature box': 'مجموعة وجبات خفيفة مشكلة من واياناد في علبة خاصة',
    'The ultimate Wayanad luxury hamper — 12 curated items': 'سلة واياناد الفاخرة المطلقة - ١٢ قطعة منسقة',
    'Wood-pressed virgin coconut oil from Thrissur farms': 'زيت جوز الهند البكر المعصور على البارد من مزارع تريشور',
    'Seasonal rambutan & avocado from high-altitude gardens': 'رامبوتان وأفوكادو موسمي من حدائق مرتفعة',
    'Curated medicinal herb saplings — tulsi, moringa, curry leaf': 'شتلات أعشاب طبية منسقة - تولسي، مورينجا، ورق كاري',
    'Hand-crafted Ramacham mats, sachets, and bath products': 'حصير وسلال ومنتجات استحمام مصنوعة يدوياً من الراماشام',
    'Sustainable hand-woven bamboo baskets & utility items': 'سلال وأدوات خيزران مستدامة منسوجة يدوياً',
    'Buttery, rich Wayanad avocados, perfect for spreads and shakes': 'أفوكادو واياناد الزبدي الغني، مثالي للدهن والعصائر',
    'Juicy, sweet rambutans with a tender, translucent pulp': 'رامبوتان حلو وعصير مع لب طري وشفاف',
    'Fragrant and luscious pink lychees, handpicked at dawn': 'ليتشي وردي عطري ولذيذ، مقطوف يدوياً عند الفجر',
    'Sweet, malty sapodillas with a smooth caramel texture': 'سابوديلا حلوة وعسلية مع ملمس كراميل ناعم',
    'Handcrafted in small batches using traditional recipes passed down through generations of Wayanad households.': 'محضرة يدوياً على دفعات صغيرة باستخدام وصفات تقليدية متوارثة عبر أجيال من عائلات واياناد.',
    'Single-estate spices, hand-selected from the high-altitude gardens of Wayanad. Pure, potent, and unblended.': 'توابل من مزرعة واحدة، مختارة يدوياً من حدائق واياناد المرتفعة. نقية وقوية وغير مخلوطة.',
    'Traditional sun-drying is an ancient Wayanad art. Each piece retains the full depth of tropical flavour — naturally concentrated.': 'التجفيف الشمسي التقليدي هو فن قديم في واياناد. تحتفظ كل قطعة بالعمق الكامل للنكهة الاستوائية - المركزة بشكل طبيعي.',
    'Classic Wayanad snacks crafted with heritage ingredients. Each bite carries the warmth of a traditional Wayanad kitchen.': 'وجبات واياناد الخفيفة الكلاسيكية المحضرة بمكونات تراثية. تحمل كل قضمة دفء مطبخ واياناد التقليدي.',
    'Elegantly curated hampers celebrating the richness of Wayanad. Each box is handpacked and tied with signature gold silk ribbon.': 'سلال هدايا منسقة بأناقة تحتفي بغنى واياناد. يتم تعبئة كل صندوق يدوياً وربطه بشريط حريري ذهبي مميز.',
    'Seasonal harvests from our partner farms in Thrissur and Ernakulam, delivered with care and minimal processing.': 'المحاصيل الموسمية من مزارعنا الشريكة في تريشور وإرناكولام، تقدم إليكم بكل عناية وبأقل معالجة.',
    'Artisan-made products from sustainable bamboo and Ramacham vetiver, crafted by master weavers in rural Wayanad.': 'منتجات يدوية من الخيزران المستدام وعشب نجيل الهند (الراماشام)، من صنع نساجين خبراء في ريف واياناد.',
    'Farm-fresh, chemical-free exotic fruits grown in high-altitude orchards, harvested at peak maturity and packed carefully to preserve freshness.': 'فواكه استوائية طازجة وخالية من المواد الكيميائية مزروعة في بساتين مرتفعة، يتم حصادها عند ذروة النضج وتعبئتها بعناية للحفاظ على الطزاجة.'
  },
  fr: {
    'Artisan Pickles & Preserves': 'Pickles & Conserves Artisanales',
    'Exotic Spice Collection': 'Collection d\'Épices Exotiques',
    'Sun-Cured Delicacies': 'Délices Séchés au Soleil',
    'Gourmet Snack Selection': 'Sélection de Snacks Gourmets',
    'Luxury Gift Hampers': 'Paniers Cadeaux de Luxe',
    'Fresh Harvest Selection': 'Sélection Récolte Fraîche',
    'Eco-Luxury Living': 'Vie Éco-Luxe',
    'Premium Exotic Fruits': 'Fruits Exotiques Premium',
    'Age-old Wayanad recipes, preserved with love': 'Vieilles recettes de Wayanad, préservées avec amour',
    'From the spice gardens of Wayanad & Idukki': 'Des jardins d\'épices de Wayanad & Idukki',
    'Preserved by the Wayanad sun, eaten through the year': 'Préservé par le soleil de Wayanad, consommé toute l\'année',
    'Wayanad\'s beloved snacks, elevated for the connoisseur': 'Snacks bien-aimés de Wayanad, élevés pour le connaisseur',
    'Curated Wayanad gifting for those who appreciate the finest': 'Cadeaux de Wayanad pour ceux qui apprécient le meilleur',
    'From Wayanad\'s groves to your home, farm-fresh': 'Des vergers de Wayanad à votre maison, frais de la ferme',
    'Bamboo & vetiver craftsmanship from Wayanad artisans': 'Artisanat du bambou & du vétiver par les artisans de Wayanad',
    'Hand-plucked from the mist-covered orchards of Wayanad': 'Cueillis à la main dans les vergers brumeux de Wayanad',
    'Mango Preserves': 'Conserve de Mangue',
    'Veg Pickle\'s': 'Pickles de Légumes',
    'Traditional Wayanad Preserves': 'Conserves Traditionnelles de Wayanad',
    'Green Cardamom [8mm+]': 'Cardamome Verte [8mm+]',
    'Black Pepper': 'Poivre Noir',
    'Curry Spice Blend': 'Mélange d\'Épices pour Curry',
    'Microgreens Powder': 'Poudre de Micro-pousses',
    'Sun-Dried Jackfruit': 'Jacquier Séché au Soleil',
    'Sun-Dried Tapioca': 'Manioc Séché au Soleil',
    'Sun-Dried Mango': 'Mangue Séchée au Soleil',
    'Banana Chips': 'Chips de Banane',
    'Tapioca Chips': 'Chips de Manioc',
    'Avalose Powder': 'Poudre d\'Avalose',
    'Spice Collection Box': 'Coffret Collection d\'Épices',
    'Snack Combo Box': 'Coffret Assortiment de Snacks',
    'Premium Wayanad Hamper': 'Corbeille Premium Wayanad',
    'Cold Pressed Coconut Oil': 'Huile de Coco Pressée à Froid',
    'Fresh Fruits': 'Fruits Frais',
    'Herbal Plants': 'Plantes Herbacées',
    'Vetiver [Ramacham] Products': 'Produits en Vétiver [Ramacham]',
    'Bamboo Handcrafted Items': 'Objets Artisanaux en Bambou',
    'Premium Avocado': 'Avocat Premium',
    'Fresh Rambutan': 'Ramboutan Frais',
    'Sweet Lychee': 'Letchi Doux',
    'Caramel Sapodilla [Chikoo]': 'Sapotille Caramel [Chikoo]',
    'Bestseller': 'Meilleure Vente',
    'Heritage': 'Héritage',
    'Grade A': 'Qualité A',
    'Exclusive': 'Exclusif',
    'Superfood': 'Superaliment',
    'Traditional': 'Traditionnel',
    'Seasonal': 'Saisonnier',
    'Gift Ready': 'Prêt à Offrir',
    'Luxury': 'Luxe',
    'Pure': 'Pur',
    'Artisan': 'Artisan',
    'Eco': 'Éco',
    'Farm Fresh': 'Frais de la Ferme',
    'Fresh Crop': 'Nouvelle Récolte',
    'Set of 4': 'Lot de 4',
    '5 items': '5 articles',
    '12 items': '12 articles',
    '3 plants': '3 plantes',
    'Assorted': 'Assorti',
    'Raw Wayanad mango slow-cured in aromatic spice brine': 'Mangue brute de Wayanad marinée dans une saumure d\'épices aromatiques',
    'Mixed seasonal vegetables pickled in mustard oil & spices': 'Légumes de saison confits dans l\'huile de moutarde et les épices',
    'Authentic thokku-style preserve using heirloom varieties': 'Conserve de style thokku authentique avec des variétés anciennes',
    'Premium large-pod cardamom, hand-sorted from Idukki': 'Cardamome à grandes gousses premium de Idukki, triée à la main',
    'Tellicherry pepper — bold, pungent, earthy': 'Poivre de Tellicherry — audacieux, piquant, terreux',
    'House-ground Wayanad curry masala with 14 spices': 'Masala de curry de Wayanad moulu maison avec 14 épices',
    'Freeze-dried moringa & spirulina microgreens blend': 'Mélange de micro-pousses de moringa et spiruline lyophilisées',
    'Slow solar-dried chakka — chewy, caramel-sweet, tropical': 'Jacquier séché lentement au soleil — moelleux, sucré au caramel, tropical',
    'Crispy kappa chips, sun-dried and spice dusted': 'Chips de manioc croustillantes, séchées au soleil et épicées',
    'Tart Alphonso mango slices dried in tropical sunlight': 'Tranches de mangue Alphonso séchées sous le soleil tropical',
    'Wafer-thin Nendran banana chips fried in coconut oil': 'Chips de banane Nendran extra-fines frites à l\'huile de coco',
    'Crispy kappa chips seasoned with rock salt & chilli': 'Chips de manioc croustillantes assaisonnées de sel de roche et piment',
    'Roasted rice-coconut powder, a traditional Wayanad sweet': 'Poudre de riz et noix de coco grillée, douceur traditionnelle de Wayanad',
    'Curated set of 4 premium single-estate spices': 'Coffret de 4 épices premium de plantations uniques',
    'Assorted Wayanad snack collection in a signature box': 'Assortiment de snacks de Wayanad dans une boîte signature',
    'The ultimate Wayanad luxury hamper — 12 curated items': 'Le panier de luxe ultime de Wayanad — 12 articles de choix',
    'Wood-pressed virgin coconut oil from Thrissur farms': 'Huile de coco vierge pressée sur bois des fermes de Thrissur',
    'Seasonal rambutan & avocado from high-altitude gardens': 'Ramboutan et avocat de saison des vergers d\'altitude',
    'Curated medicinal herb saplings — tulsi, moringa, curry leaf': 'Jeunes plants d\'herbes médicinales — tulsi, moringa, feuille de curry',
    'Hand-crafted Ramacham mats, sachets, and bath products': 'Tapis, sachets et produits de bain en vétiver faits main',
    'Sustainable hand-woven bamboo baskets & utility items': 'Paniers en bambou tissés main durables et articles utilitaires',
    'Buttery, rich Wayanad avocados, perfect for spreads and shakes': 'Avocats riches et crémeux de Wayanad, parfaits pour tartines et jus',
    'Juicy, sweet rambutans with a tender, translucent pulp': 'Ramboutans juteux et sucrés avec une pulpe tendre et translucide',
    'Fragrant and luscious pink lychees, handpicked at dawn': 'Letchis roses parfumés et délicieux, cueillis à l\'aube',
    'Sweet, malty sapodillas with a smooth caramel texture': 'Sapotilles sucrées et maltées avec une texture de caramel lisse',
    'Handcrafted in small batches using traditional recipes passed down through generations of Wayanad households.': 'Fabriqué à la main en petites quantités selon des recettes traditionnelles transmises de génération en génération par les familles de Wayanad.',
    'Single-estate spices, hand-selected from the high-altitude gardens of Wayanad. Pure, potent, and unblended.': 'Épices de plantation unique, sélectionnées à la main dans les vergers d\'altitude de Wayanad. Pures, puissantes et non mélangées.',
    'Traditional sun-drying is an ancient Wayanad art. Each piece retains the full depth of tropical flavour — naturally concentrated.': 'Le séchage solaire traditionnel est un art ancien à Wayanad. Chaque morceau conserve toute la richesse de la saveur tropicale — naturellement concentrée.',
    'Classic Wayanad snacks crafted with heritage ingredients. Each bite carries the warmth of a traditional Wayanad kitchen.': 'Snacks classiques de Wayanad préparés avec des ingrédients hérités. Chaque bouchée porte la chaleur d\'une cuisine traditionnelle de Wayanad.',
    'Elegantly curated hampers celebrating the richness of Wayanad. Each box is handpacked and tied with signature gold silk ribbon.': 'Coffrets élégamment sélectionnés célébrant la richesse de Wayanad. Chaque boîte est emballée à la main et nouée avec un ruban de soie dorée signature.',
    'Seasonal harvests from our partner farms in Thrissur and Ernakulam, delivered with care and minimal processing.': 'Récoltes saisonnières de nos fermes partenaires à Thrissur et Ernakulam, livrées avec soin et un traitement minimal.',
    'Artisan-made products from sustainable bamboo and Ramacham vetiver, crafted by master weavers in rural Wayanad.': 'Produits artisanaux en bambou durable et vétiver Ramacham, confectionnés par des maîtres tisseurs du Wayanad rural.',
    'Farm-fresh, chemical-free exotic fruits grown in high-altitude orchards, harvested at peak maturity and packed carefully to preserve freshness.': 'Fruits exotiques frais et sans produits chimiques cultivés dans des vergers de haute altitude, récoltés à maturité optimale et emballés avec soin pour préserver leur fraîcheur.'
  },
  de: {
    'Artisan Pickles & Preserves': 'Handwerkliche Pickles & Konserven',
    'Exotic Spice Collection': 'Exotische Gewürzsammlung',
    'Sun-Cured Delicacies': 'Sonnengereifte Köstlichkeiten',
    'Gourmet Snack Selection': 'Feinschmecker-Snacks',
    'Luxury Gift Hampers': 'Luxus-Geschenkkörbe',
    'Fresh Harvest Selection': 'Frische Ernteauswahl',
    'Eco-Luxury Living': 'Öko-Luxus Leben',
    'Premium Exotic Fruits': 'Premium Exotische Früchte',
    'Age-old Wayanad recipes, preserved with love': 'Alte Rezepte aus Wayanad, mit Liebe zubereitet',
    'From the spice gardens of Wayanad & Idukki': 'Aus den Gewürzgärten von Wayanad & Idukki',
    'Preserved by the Wayanad sun, eaten through the year': 'Von der Sonne Wayanads konserviert, das ganze Jahr genossen',
    'Wayanad\'s beloved snacks, elevated for the connoisseur': 'Beliebte Snacks aus Wayanad, veredelt für Genießer',
    'Curated Wayanad gifting for those who appreciate the finest': 'Exquisite Geschenke aus Wayanad für Kenner des Feinen',
    'From Wayanad\'s groves to your home, farm-fresh': 'Aus den Hainen Wayanads frisch auf Ihren Tisch',
    'Bamboo & vetiver craftsmanship from Wayanad artisans': 'Bambus- & Vetiverhandwerk von Kunsthandwerkern aus Wayanad',
    'Hand-plucked from the mist-covered orchards of Wayanad': 'Handgepflückt in den nebligen Obstgärten Wayanads',
    'Mango Preserves': 'Mangokonserve',
    'Veg Pickle\'s': 'Gemüse-Pickles',
    'Traditional Wayanad Preserves': 'Traditionelle Wayanad-Konserven',
    'Green Cardamom [8mm+]': 'Grüner Kardamom [8mm+]',
    'Black Pepper': 'Schwarzer Pfeffer',
    'Curry Spice Blend': 'Curry-Gewürzmischung',
    'Microgreens Powder': 'Mikrogrün-Pulver',
    'Sun-Dried Jackfruit': 'Sonnengetrocknete Jackfrucht',
    'Sun-Dried Tapioca': 'Sonnengetrockneter Maniok',
    'Sun-Dried Mango': 'Sonnengetrocknete Mango',
    'Banana Chips': 'Bananenchips',
    'Tapioca Chips': 'Maniokchips',
    'Avalose Powder': 'Avalose-Pulver',
    'Spice Collection Box': 'Gewürz-Kollektionsbox',
    'Snack Combo Box': 'Snack-Kombibox',
    'Premium Wayanad Hamper': 'Premium Wayanad Geschenkkorb',
    'Cold Pressed Coconut Oil': 'Kaltgepresstes Kokosnussöl',
    'Fresh Fruits': 'Frische Früchte',
    'Herbal Plants': 'Kräuterpflanzen',
    'Vetiver [Ramacham] Products': 'Vetiver- [Ramacham] Produkte',
    'Bamboo Handcrafted Items': 'Handgefertigte Bambusartikel',
    'Premium Avocado': 'Premium-Avocado',
    'Fresh Rambutan': 'Frischer Rambutan',
    'Sweet Lychee': 'Süße Litschi',
    'Caramel Sapodilla [Chikoo]': 'Karamell-Sapotille [Chikoo]',
    'Bestseller': 'Bestseller',
    'Heritage': 'Traditionell',
    'Grade A': 'Klasse A',
    'Exclusive': 'Exklusiv',
    'Superfood': 'Superfood',
    'Traditional': 'Klassisch',
    'Seasonal': 'Saisonal',
    'Gift Ready': 'Geschenkfertig',
    'Luxury': 'Luxus',
    'Pure': 'Rein',
    'Artisan': 'Handwerklich',
    'Eco': 'Öko',
    'Farm Fresh': 'Frisch vom Hof',
    'Fresh Crop': 'Neue Ernte',
    'Set of 4': '4er-Set',
    '5 items': '5 Artikel',
    '12 items': '12 Artikel',
    '3 plants': '3 Pflanzen',
    'Assorted': 'Sortiert',
    'Raw Wayanad mango slow-cured in aromatic spice brine': 'Rohe Mango aus Wayanad, langsam in aromatischer Gewürzlake gereift',
    'Mixed seasonal vegetables pickled in mustard oil & spices': 'Saisonales Gemüse, eingelegt in Senföl und Gewürzen',
    'Authentic thokku-style preserve using heirloom varieties': 'Authentische Konserve nach Thokku-Art aus alten Sorten',
    'Premium large-pod cardamom, hand-sorted from Idukki': 'Erstklassiger Kardamom aus Idukki, von Hand verlesen',
    'Tellicherry pepper — bold, pungent, earthy': 'Schwarzer Pfeffer aus Tellicherry — intensiv, scharf, erdig',
    'House-ground Wayanad curry masala with 14 spices': 'Hausgemahlenes Wayanad-Curry-Masala mit 14 Gewürzen',
    'Freeze-dried moringa & spirulina microgreens blend': 'Gefriergetrocknete Mischung aus Moringa- und Spirulina-Mikrogrün',
    'Slow solar-dried chakka — chewy, caramel-sweet, tropical': 'Langsam sonnengetrocknete Jackfrucht — kaubar, karamellsüß, tropisch',
    'Crispy kappa chips, sun-dried and spice dusted': 'Knusprige Maniokchips, sonnengetrocknet und gewürzt',
    'Tart Alphonso mango slices dried in tropical sunlight': 'Saure Alphonso-Mangoscheiben, in tropischer Sonne getrocknet',
    'Wafer-thin Nendran banana chips fried in coconut oil': 'Hauchdünne Nendran-Bananenchips, in Kokosnussöl frittiert',
    'Crispy kappa chips seasoned with rock salt & chilli': 'Knusprige Maniokchips, mit Steinsalz und Chili gewürzt',
    'Roasted rice-coconut powder, a traditional Wayanad sweet': 'Geröstetes Reis-Kokos-Pulver, eine traditionelle Süßigkeit aus Wayanad',
    'Curated set of 4 premium single-estate spices': 'Erlesenes Set mit 4 Premium-Gewürzen aus Einzellagen',
    'Assorted Wayanad snack collection in a signature box': 'Sortierte Snack-Kollektion aus Wayanad in einer exklusiven Box',
    'The ultimate Wayanad luxury hamper — 12 curated items': 'Der ultimative Luxus-Geschenkkorb aus Wayanad — 12 erlesene Artikel',
    'Wood-pressed virgin coconut oil from Thrissur farms': 'Holzgepresstes Kokosnussöl nativ von Höfen in Thrissur',
    'Seasonal rambutan & avocado from high-altitude gardens': 'Saisonale Rambutan & Avocado aus Höhenlagen',
    'Curated medicinal herb saplings — tulsi, moringa, curry leaf': 'Erlesene Heilkräutersetzlinge — Tulsi, Moringa, Curryblatt',
    'Hand-crafted Ramacham mats, sachets, and bath products': 'Handgefertigte Matten, Duftsäckchen und Badeprodukte aus Vetiver',
    'Sustainable hand-woven bamboo baskets & utility items': 'Nachhaltige, handgewobene Bambuskörbe & Gebrauchsartikel',
    'Buttery, rich Wayanad avocados, perfect for spreads and shakes': 'Butterzarte, reichhaltige Avocados aus Wayanad, ideal für Aufstriche und Shakes',
    'Juicy, sweet rambutans with a tender, translucent pulp': 'Saftige, süße Rambutans mit zartem, glasigem Fruchtfleisch',
    'Fragrant and luscious pink lychees, handpicked at dawn': 'Duftende und köstliche rosa Litschis, im Morgengrauen gepflückt',
    'Sweet, malty sapodillas with a smooth caramel texture': 'Süße, malzige Sapotillen mit einer feinen Karamelltextur',
    'Handcrafted in small batches using traditional recipes passed down through generations of Wayanad households.': 'In kleinen Chargen handgefertigt nach traditionellen Rezepten, die über Generationen in Wayanad-Haushalten weitergegeben wurden.',
    'Single-estate spices, hand-selected from the high-altitude gardens of Wayanad. Pure, potent, and unblended.': 'Gewürze aus Einzellagen, handverlesen aus den Höhenlagen Wayanads. Rein, kraftvoll und unverfälscht.',
    'Traditional sun-drying is an ancient Wayanad art. Each piece retains the full depth of tropical flavour — naturally concentrated.': 'Die traditionelle Sonnentrocknung ist eine alte Kunst in Wayanad. Jedes Stück bewahrt das volle Aroma der Tropen — natürlich konzentriert.',
    'Classic Wayanad snacks crafted with heritage ingredients. Each bite carries the warmth of a traditional Wayanad kitchen.': 'Klassische Wayanad-Snacks, hergestellt aus traditionellen Zutaten. Jeder Bissen trägt die Wärme einer traditionellen Küche aus Wayanad.',
    'Elegantly curated hampers celebrating the richness of Wayanad. Each box is handpacked and tied with signature gold silk ribbon.': 'Elegant zusammengestellte Geschenkkörbe, die den Reichtum Wayanads feiern. Jede Box wird von Hand verpackt und mit einem charakteristischen goldenen Seidenband gebunden.',
    'Seasonal harvests from our partner farms in Thrissur and Ernakulam, delivered with care and minimal processing.': 'Saisonale Ernten von unseren Partnerbetrieben in Thrissur und Ernakulam, sorgfältig geliefert und minimal verarbeitet.',
    'Artisan-made products from sustainable bamboo and Ramacham vetiver, crafted by master weavers in rural Wayanad.': 'Handgefertigte Produkte aus nachhaltigem Bambus und Ramacham-Vetiver, hergestellt von Meisterwebern im ländlichen Wayanad.',
    'Farm-fresh, chemical-free exotic fruits grown in high-altitude orchards, harvested at peak maturity and packed carefully to preserve freshness.': 'Hoffrische, chemiefreie exotische Früchte aus Höhenlagen, bei optimaler Reife geerntet und sorgfältig verpackt, um die Frische zu bewahren.'
  }
};

const CURRENCY_CONVERSION = {
  INR: { symbol: '₹', rate: 1.0 },
  USD: { symbol: '$', rate: 0.012 },
  EUR: { symbol: '€', rate: 0.011 },
  AED: { symbol: 'AED', rate: 0.044 },
  SAR: { symbol: 'SAR', rate: 0.045 },
  QAR: { symbol: 'QAR', rate: 0.044 },
  KWD: { symbol: 'KWD', rate: 0.0037 },
  OMR: { symbol: 'OMR', rate: 0.0046 },
  BHD: { symbol: 'BHD', rate: 0.0045 },
  EGP: { symbol: 'EGP', rate: 0.37 }
};

// ── Translation & Currency Helpers ───────────────────────────
function t(str) {
  const lang = localStorage.getItem('site-lang') || 'en';
  if (lang === 'en') return str;
  return (DB_TRANSLATIONS[lang] && DB_TRANSLATIONS[lang][str]) || str;
}

function formatPrice(inrPrice) {
  const curr = localStorage.getItem('site-currency') || 'INR';
  const conf = CURRENCY_CONVERSION[curr] || CURRENCY_CONVERSION.INR;
  const converted = Math.round(inrPrice * conf.rate);
  
  if (curr === 'INR') {
    return `₹${converted.toLocaleString('en-IN')}`;
  } else if (curr === 'USD') {
    return `$${converted.toLocaleString('en-US')}`;
  } else if (curr === 'EUR') {
    return `€${converted.toLocaleString('de-DE')}`;
  } else {
    return `${conf.symbol} ${converted.toLocaleString()}`;
  }
}

function translateStaticElements() {
  const lang = localStorage.getItem('site-lang') || 'en';
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      if (TRANSLATIONS[lang][key].indexOf('<') !== -1) {
        el.innerHTML = TRANSLATIONS[lang][key];
      } else {
        el.textContent = TRANSLATIONS[lang][key];
      }
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
    }
  });
}

window.changeLanguage = function(langCode) {
  localStorage.setItem('site-lang', langCode);
  const ids = ['lang-select', 'lang-select-mobile', 'lang-select-footer', 'lang-select-footer-2'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = langCode;
  });
  translateStaticElements();
  renderHomepage();
  if (currentCollection) {
    openCollection(currentCollection.id);
  }
  renderCart();
};

window.changeCurrency = function(currencyCode) {
  localStorage.setItem('site-currency', currencyCode);
  const ids = ['currency-select', 'currency-select-mobile', 'currency-select-footer', 'currency-select-footer-2'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = currencyCode;
  });
  renderHomepage();
  if (currentCollection) {
    openCollection(currentCollection.id);
  }
  renderCart();
};

async function initCurrencyAndLocation() {
  let lang = localStorage.getItem('site-lang');
  let curr = localStorage.getItem('site-currency');

  if (lang) {
    window.changeLanguage(lang);
  } else {
    lang = 'en';
    window.changeLanguage(lang);
  }

  if (curr) {
    window.changeCurrency(curr);
  } else {
    try {
      const res = await fetch('https://freeipapi.com/api/json');
      if (res.ok) {
        const data = await res.json();
        const country = data.countryCode;
        const apiCurrency = data.currency ? data.currency.code : '';
        let detected = 'USD';
        if (country === 'IN') {
          detected = 'INR';
        } else if (['DE', 'FR'].includes(country) || apiCurrency === 'EUR') {
          detected = 'EUR';
        } else if (['AE', 'SA', 'QA', 'KW', 'OM', 'BH', 'EG'].includes(country) || ['AED', 'SAR', 'QAR', 'KWD', 'OMR', 'BHD', 'EGP'].includes(apiCurrency)) {
          if (CURRENCY_CONVERSION[apiCurrency]) {
            detected = apiCurrency;
          } else if (country === 'AE') {
            detected = 'AED';
          } else if (country === 'SA') {
            detected = 'SAR';
          } else {
            detected = 'AED';
          }
        }
        window.changeCurrency(detected);
      } else {
        window.changeCurrency('USD');
      }
    } catch (e) {
      window.changeCurrency('USD');
    }
  }
}

// ── Product Database ─────────────────────────────────────────
const COLLECTIONS = [
  {
    id: 'pickles',
    name: 'Artisan Pickles & Preserves',
    tagline: 'Age-old Wayanad recipes, preserved with love',
    icon: '🫙',
    image: 'assets/images/mango_pickle_jar.png',
    description: 'Handcrafted in small batches using traditional recipes passed down through generations of Wayanad households.',
    products: [
      { id: 'p1', name: 'Mango Preserves', price: 320, image: 'assets/images/v4_mango_pickle.png', desc: 'Raw Wayanad mango slow-cured in aromatic spice brine', weight: '250g', badge: 'Bestseller' },
      { id: 'p2', name: "Veg Pickle's", price: 280, image: 'assets/images/v4_luxury_box.png', desc: 'Mixed seasonal vegetables pickled in mustard oil & spices', weight: '300g', badge: '' },
      { id: 'p3', name: 'Traditional Wayanad Preserves', price: 350, image: 'assets/images/v4_luxury_box.png', desc: 'Authentic thokku-style preserve using heirloom varieties', weight: '200g', badge: 'Heritage' }
    ]
  },
  {
    id: 'spices',
    name: 'Exotic Spice Collection',
    tagline: 'From the spice gardens of Wayanad & Idukki',
    icon: '🌿',
    image: 'assets/images/v4_spices.png',
    description: 'Single-estate spices, hand-selected from the high-altitude gardens of Wayanad. Pure, potent, and unblended.',
    products: [
      { id: 'p4', name: 'Green Cardamom [8mm+]', price: 890, image: 'assets/images/spice_packaging.png', desc: 'Premium large-pod cardamom, hand-sorted from Idukki', weight: '100g', badge: 'Grade A' },
      { id: 'p5', name: 'Black Pepper', price: 420, image: 'assets/images/v4_luxury_box.png', desc: 'Tellicherry pepper — bold, pungent, earthy', weight: '200g', badge: '' },
      { id: 'p6', name: 'Curry Spice Blend', price: 360, image: 'assets/images/v4_luxury_box.png', desc: 'House-ground Wayanad curry masala with 14 spices', weight: '150g', badge: 'Exclusive' },
      { id: 'p7', name: 'Microgreens Powder', price: 480, image: 'assets/images/v4_luxury_box.png', desc: 'Freeze-dried moringa & spirulina microgreens blend', weight: '80g', badge: 'Superfood' }
    ]
  },
  {
    id: 'sundried',
    name: 'Sun-Cured Delicacies',
    tagline: 'Preserved by the Wayanad sun, eaten through the year',
    icon: '☀️',
    image: 'assets/images/sundried_packaging.png',
    description: 'Traditional sun-drying is an ancient Wayanad art. Each piece retains the full depth of tropical flavour — naturally concentrated.',
    products: [
      { id: 'p8', name: 'Sun-Dried Jackfruit', price: 380, image: 'assets/images/v4_jackfruit.png', desc: 'Slow solar-dried chakka — chewy, caramel-sweet, tropical', weight: '200g', badge: 'Traditional' },
      { id: 'p9', name: 'Sun-Dried Tapioca', price: 220, image: 'assets/images/v4_luxury_box.png', desc: 'Crispy kappa chips, sun-dried and spice dusted', weight: '250g', badge: '' },
      { id: 'p10', name: 'Sun-Dried Mango', price: 340, image: 'assets/images/v4_mango_pickle.png', desc: 'Tart Alphonso mango slices dried in tropical sunlight', weight: '150g', badge: 'Seasonal' }
    ]
  },
  {
    id: 'snacks',
    name: 'Gourmet Snack Selection',
    tagline: 'Wayanad\'s beloved snacks, elevated for the connoisseur',
    icon: '🍌',
    image: 'assets/images/v4_banana_chips.png',
    description: 'Classic Wayanad snacks crafted with heritage ingredients. Each bite carries the warmth of a traditional Wayanad kitchen.',
    products: [
      { id: 'p11', name: 'Banana Chips', price: 260, image: 'assets/images/v4_banana_chips.png', desc: 'Wafer-thin Nendran banana chips fried in coconut oil', weight: '300g', badge: 'Bestseller' },
      { id: 'p12', name: 'Tapioca Chips', price: 220, image: 'assets/images/v4_luxury_box.png', desc: 'Crispy kappa chips seasoned with rock salt & chilli', weight: '300g', badge: '' },
      { id: 'p13', name: 'Avalose Powder', price: 290, image: 'assets/images/v4_luxury_box.png', desc: 'Roasted rice-coconut powder, a traditional Wayanad sweet', weight: '250g', badge: 'Heritage' }
    ]
  },
  {
    id: 'hampers',
    name: 'Luxury Gift Hampers',
    tagline: 'Curated Wayanad gifting for those who appreciate the finest',
    icon: '🎁',
    image: 'assets/images/v4_hamper.png',
    description: 'Elegantly curated hampers celebrating the richness of Wayanad. Each box is handpacked and tied with signature gold silk ribbon.',
    products: [
      { id: 'p14', name: 'Spice Collection Box', price: 1890, image: 'assets/images/v4_spices.png', desc: 'Curated set of 4 premium single-estate spices', weight: 'Set of 4', badge: 'Gift Ready' },
      { id: 'p15', name: 'Snack Combo Box', price: 1490, image: 'assets/images/v4_banana_chips.png', desc: 'Assorted Wayanad snack collection in a signature box', weight: '5 items', badge: '' },
      { id: 'p16', name: 'Premium Wayanad Hamper', price: 3490, image: 'assets/images/v4_luxury_box.png', desc: 'The ultimate Wayanad luxury hamper — 12 curated items', weight: '12 items', badge: 'Luxury' }
    ]
  },
  {
    id: 'harvest',
    name: 'Fresh Harvest Selection',
    tagline: 'From Wayanad\'s groves to your home, farm-fresh',
    icon: '🥥',
    image: 'assets/images/v4_oil.png',
    description: 'Seasonal harvests from our partner farms in Thrissur and Ernakulam, delivered with care and minimal processing.',
    products: [
      { id: 'p17', name: 'Cold Pressed Coconut Oil', price: 680, image: 'assets/images/v4_oil.png', desc: 'Wood-pressed virgin coconut oil from Thrissur farms', weight: '500ml', badge: 'Pure' },
      { id: 'p18', name: 'Fresh Fruits', price: 580, image: 'assets/images/v4_luxury_box.png', desc: 'Seasonal rambutan & avocado from high-altitude gardens', weight: '1kg', badge: 'Seasonal' },
      { id: 'p19', name: 'Herbal Plants', price: 390, image: 'assets/images/v4_luxury_box.png', desc: 'Curated medicinal herb saplings — tulsi, moringa, curry leaf', weight: '3 plants', badge: '' }
    ]
  },
  {
    id: 'ecoliving',
    name: 'Eco-Luxury Living',
    tagline: 'Bamboo & vetiver craftsmanship from Wayanad artisans',
    icon: '🌾',
    image: 'assets/images/ecoliving_packaging.png',
    description: 'Artisan-made products from sustainable bamboo and Ramacham vetiver, crafted by master weavers in rural Wayanad.',
    products: [
      { id: 'p20', name: 'Vetiver [Ramacham] Products', price: 520, image: 'assets/images/v4_vetiver.png', desc: 'Hand-crafted Ramacham mats, sachets, and bath products', weight: 'Assorted', badge: 'Artisan' },
      { id: 'p21', name: 'Bamboo Handcrafted Items', price: 680, image: 'assets/images/v4_luxury_box.png', desc: 'Sustainable hand-woven bamboo baskets & utility items', weight: 'Assorted', badge: 'Eco' }
    ]
  },
  {
    id: 'fruits',
    name: 'Premium Exotic Fruits',
    tagline: 'Hand-plucked from the mist-covered orchards of Wayanad',
    icon: '🥑',
    image: 'assets/images/v4_exotic_fruits.png',
    description: 'Farm-fresh, chemical-free exotic fruits grown in high-altitude orchards, harvested at peak maturity and packed carefully to preserve freshness.',
    products: [
      { id: 'p22', name: 'Premium Avocado', price: 380, image: 'assets/images/v4_avocado.png', desc: 'Buttery, rich Wayanad avocados, perfect for spreads and shakes', weight: '1kg', badge: 'Farm Fresh' },
      { id: 'p23', name: 'Fresh Rambutan', price: 290, image: 'assets/images/v4_rambutan.png', desc: 'Juicy, sweet rambutans with a tender, translucent pulp', weight: '500g', badge: 'Seasonal' },
      { id: 'p24', name: 'Sweet Lychee', price: 320, image: 'assets/images/v4_lychee.png', desc: 'Fragrant and luscious pink lychees, handpicked at dawn', weight: '500g', badge: 'Fresh Crop' },
      { id: 'p25', name: 'Caramel Sapodilla [Chikoo]', price: 240, image: 'assets/images/v4_sapodilla.png', desc: 'Sweet, malty sapodillas with a smooth caramel texture', weight: '1kg', badge: '' }
    ]
  }
];

// ── State ────────────────────────────────────────────────────
let cart = [];
let currentCollection = null;

// ── DOM References ───────────────────────────────────────────
const homeView = () => document.getElementById('home-view');
const collectionView = () => document.getElementById('collection-view');
const cartDrawer = () => document.getElementById('cart-drawer');
const cartOverlay = () => document.getElementById('cart-overlay');
const cartItemsEl = () => document.getElementById('cart-items');
const cartCountEl = () => document.querySelectorAll('.cart-count');
const cartTotalEl = () => document.getElementById('cart-total');
const enquiryModal = () => document.getElementById('enquiry-modal');

function renderHomepage() {
  const grid = document.getElementById('collections-grid');
  if (!grid) return;

  grid.innerHTML = COLLECTIONS.map(col => `
    <div class="collection-card" onclick="openCollection('${col.id}')" role="button" tabindex="0" aria-label="Open ${t(col.name)}" onkeydown="if(event.key==='Enter')openCollection('${col.id}')">
      <div class="card-image-wrap">
        <img src="${col.image}" alt="${t(col.name)}" loading="lazy" onerror="this.src='assets/images/v4_luxury_box.png'">
      </div>
      <div class="card-body">
        <h3 class="card-name">${t(col.name)}</h3>
        <p class="card-tagline">${t(col.tagline)}</p>
        <div class="card-cta">
          <span class="card-count">${col.products.length} ${t('products')}</span>
          <span class="card-arrow">${t('Explore →')}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Open Collection Page (SPA Route) ────────────────────────
function openCollection(id) {
  const col = COLLECTIONS.find(c => c.id === id);
  if (!col) return;
  currentCollection = col;

  // Switch views
  homeView().style.display = 'none';
  const cv = collectionView();
  cv.style.display = 'block';
  cv.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Render breadcrumb header
  document.getElementById('collection-header-name').textContent = t(col.name);
  document.getElementById('collection-header-desc').textContent = t(col.description);
  document.getElementById('collection-header-icon').textContent = col.icon;

  // Render sub-products
  const grid = document.getElementById('products-grid');
  grid.innerHTML = col.products.map(p => `
    <div class="product-card">
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${t(p.name)}" loading="lazy" onerror="this.src='assets/images/v4_luxury_box.png'">
        ${p.badge ? `<span class="product-badge">${t(p.badge)}</span>` : ''}
      </div>
      <div class="product-body">
        <h4 class="product-name">${t(p.name)}</h4>
        <p class="product-desc">${t(p.desc)}</p>
        <div class="product-meta">
          <span class="product-weight">${t(p.weight)}</span>
          <span class="product-price">${formatPrice(p.price)}</span>
        </div>
        <div class="product-actions">
          <button class="btn-add-cart btn-add-cart--full" onclick="addToCart('${p.id}')">${t('Add to Cart')}</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Close Collection Page / Go Back ─────────────────────────
function closeCollection() {
  collectionView().style.display = 'none';
  homeView().style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  currentCollection = null;
}

// Expose globally for inline onclick and keyboard handlers
window.openCollection = openCollection;
window.closeCollection = closeCollection;

// ── Cart Logic ───────────────────────────────────────────────
const MAX_QTY = 10;

function addToCart(productId) {
  const product = COLLECTIONS.flatMap(c => c.products).find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    if (existing.qty >= MAX_QTY) {
      showToast(`Max ${MAX_QTY} units allowed per item`);
      return;
    }
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  openCart();
  showToast(`${product.name} added to cart`);
}
window.addToCart = addToCart;

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}
window.removeFromCart = removeFromCart;

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  if (delta > 0 && item.qty >= MAX_QTY) {
    showToast(`Max ${MAX_QTY} units allowed per item`);
    return;
  }
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else updateCartUI();
}
window.changeQty = changeQty;

function updateCartUI() {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = cart.reduce((sum, i) => sum + i.qty, 0);

  cartCountEl().forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });

  if (cartTotalEl()) cartTotalEl().textContent = formatPrice(total);
  const t2 = document.getElementById('cart-total-2');
  if (t2) t2.textContent = formatPrice(total);

  const cartItemsContainer = cartItemsEl();
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍️</div>
        <p>${t('cart_empty')}</p>
        <span>${t("Discover Wayanad's finest produce")}</span>
      </div>`;
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${t(item.name)}" onerror="this.src='assets/images/v4_luxury_box.png'">
      <div class="cart-item-info">
        <span class="cart-item-name">${t(item.name)}</span>
        <span class="cart-item-price">${formatPrice(item.price * item.qty)}</span>
        <div class="cart-qty">
          <button onclick="changeQty('${item.id}', -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty('${item.id}', 1)" ${item.qty >= MAX_QTY ? 'disabled' : ''}>+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">✕</button>
    </div>
  `).join('');
}

function openCart() {
  cartDrawer().classList.add('open');
  cartOverlay().classList.add('open');
  document.body.classList.add('no-scroll');
}
window.openCart = openCart;

function closeCart() {
  cartDrawer().classList.remove('open');
  cartOverlay().classList.remove('open');
  document.body.classList.remove('no-scroll');
  // Always reset to step 1 when closing
  goToCartStep1();
}
window.closeCart = closeCart;

// ── Checkout Step Navigation ────────────────────────────────────
function goToCheckoutStep2() {
  if (cart.length === 0) {
    showToast('Add items to your bag first');
    return;
  }
  document.getElementById('cart-step-1').style.display = 'none';
  const step2 = document.getElementById('cart-step-2');
  step2.style.display = 'flex';
  // Update step indicators
  document.getElementById('step-dot-1').classList.remove('active');
  document.getElementById('step-dot-2').classList.add('active');
  document.getElementById('cart-title').textContent = '📦 ' + t('checkout_title');
}
window.goToCheckoutStep2 = goToCheckoutStep2;

function goToCartStep1() {
  document.getElementById('cart-step-2').style.display = 'none';
  document.getElementById('cart-step-1').style.display = 'block';
  // Reset step indicators
  document.getElementById('step-dot-1').classList.add('active');
  document.getElementById('step-dot-2').classList.remove('active');
  document.getElementById('cart-title').textContent = '🛍 ' + t('cart_title');
}
window.goToCartStep1 = goToCartStep1;

// ── WhatsApp Enquiry ─────────────────────────────────────────
function whatsappEnquiry(name, price) {
  const msg = encodeURIComponent(`Hi Amaizing Taste! I'm interested in ordering *${t(name)}* (${formatPrice(price)}). Please share more details.`);
  window.open(`https://wa.me/918078020806?text=${msg}`, '_blank');
}
window.whatsappEnquiry = whatsappEnquiry;

// -- WhatsApp Order (with delivery details) ----------------------------
function placeWhatsAppOrder() {
  var name    = document.getElementById('co-name').value.trim();
  var address = document.getElementById('co-address').value.trim();
  var phone   = document.getElementById('co-phone').value.trim();
  if (!name || !address || !phone) { showToast('Please fill in all delivery details'); return; }
  if (cart.length === 0) { showToast('Your bag is empty'); return; }
  var items = cart.map(function(i) {
    return '   ' + t(i.name) + ' (x' + i.qty + ') = ' + formatPrice(i.price * i.qty);
  }).join('\n');
  var total = cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
  var msg = '*New Order - Amaizing Taste*' + '\n\n' +
    '*Customer Details*' + '\n' +
    'Name    : ' + name + '\n' +
    'Phone   : ' + phone + '\n' +
    'Address : ' + address + '\n\n' +
    '*Order Summary*' + '\n' +
    items + '\n\n' +
    '*Total  : ' + formatPrice(total) + '*' + '\n\n' +
    'Please confirm my order. Thank you!';
  window.open('https://wa.me/918078020806?text=' + encodeURIComponent(msg), '_blank');
  closeCart();
  showToast('Order sent! We will confirm shortly.');
}
window.placeWhatsAppOrder = placeWhatsAppOrder;
window.placeWhatsAppOrder = placeWhatsAppOrder;

// ── Enquiry Modal ────────────────────────────────────────────
function openEnquiryModal() {
  enquiryModal().classList.add('open');
  document.body.classList.add('no-scroll');
}
window.openEnquiryModal = openEnquiryModal;

function closeEnquiryModal() {
  enquiryModal().classList.remove('open');
  document.body.classList.remove('no-scroll');
}
window.closeEnquiryModal = closeEnquiryModal;

function submitEnquiry(e) {
  e.preventDefault();
  const name = document.getElementById('eq-name').value;
  const phone = document.getElementById('eq-phone').value;
  const msg = document.getElementById('eq-message').value;
  const wa = encodeURIComponent(`New Enquiry from ${name} (${phone}):\n\n${msg}`);
  window.open(`https://wa.me/918078020806?text=${wa}`, '_blank');
  closeEnquiryModal();
}
window.submitEnquiry = submitEnquiry;

// ── Toast Notification ───────────────────────────────────────
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Mobile Menu ──────────────────────────────────────────────
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
window.toggleMobileMenu = toggleMobileMenu;


// ── Scroll effects ───────────────────────────────────────────
function handleScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Add common database translations
  DB_TRANSLATIONS.ar = DB_TRANSLATIONS.ar || {};
  DB_TRANSLATIONS.ar['Explore →'] = 'استكشف ←';
  DB_TRANSLATIONS.ar['products'] = 'منتجات';
  DB_TRANSLATIONS.ar['Add to Cart'] = 'إضافة إلى السلة';
  DB_TRANSLATIONS.ar['Discover Wayanad\'s finest produce'] = 'اكتشف أفضل منتجات واياناد';

  DB_TRANSLATIONS.fr = DB_TRANSLATIONS.fr || {};
  DB_TRANSLATIONS.fr['Explore →'] = 'Explorer →';
  DB_TRANSLATIONS.fr['products'] = 'produits';
  DB_TRANSLATIONS.fr['Add to Cart'] = 'Ajouter au Panier';
  DB_TRANSLATIONS.fr['Discover Wayanad\'s finest produce'] = 'Découvrez le meilleur de Wayanad';

  DB_TRANSLATIONS.de = DB_TRANSLATIONS.de || {};
  DB_TRANSLATIONS.de['Explore →'] = 'Erkunden →';
  DB_TRANSLATIONS.de['products'] = 'Produkte';
  DB_TRANSLATIONS.de['Add to Cart'] = 'In den Warenkorb';
  DB_TRANSLATIONS.de['Discover Wayanad\'s finest produce'] = 'Entdecken Sie die feinsten Produkte aus Wayanad';

  initCurrencyAndLocation();
  updateCartUI();

  // Ensure home visible, collection hidden on load
  homeView().style.display = 'block';
  collectionView().style.display = 'none';

  // Scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true });


  // Close cart on overlay click
  document.getElementById('cart-overlay').addEventListener('click', closeCart);

  // Keyboard: close drawers on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeCart();
      closeEnquiryModal();
    }
  });
});
