ِ/* ===========================
   Theme + i18n (Unified)
   =========================== */

/* -------- Theme -------- */
(function () {
  const THEME_KEY = "theme";
  const btn = document.getElementById("themeToggle");
  const saved = localStorage.getItem(THEME_KEY);

  if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");

  function updateBtnAria() {
    if (!btn) return;
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    btn.setAttribute("aria-pressed", String(isDark));
  }
  updateBtnAria();

  btn && btn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
    localStorage.setItem(THEME_KEY, isDark ? "light" : "dark");
    updateBtnAria();
  });
})();

/* -------- i18n -------- */
(function () {
  const LANG_KEY = "lang";
  const langBtn = document.getElementById("langToggle");

  // Helper: detect page id
  function detectPageId() {
    const p = (location.pathname || "").toLowerCase();
    if (p.endsWith("404.html")) return "not_found";
    if (p.includes("/services/")) {
      if (p.includes("powerpoint")) return "powerpoint";
      if (p.includes("social-posts")) return "social_posts";
      if (p.includes("portfolio-website")) return "portfolio_site";
      return "service_generic";
    }
    if (p.endsWith("portfolio.html")) return "portfolio";
    if (p.includes("contact")) return "contact";
    return "home";
  }
  const PAGE_ID = detectPageId();
  const IS_SERVICE =
    PAGE_ID === "powerpoint" ||
    PAGE_ID === "social_posts" ||
    PAGE_ID === "portfolio_site" ||
    PAGE_ID === "service_generic";

  /* ---------- Dictionary ---------- */
  const T = {
    common: {
      ar: {
        nav_about: "حول",
        nav_portfolio: "الأعمال",
        nav_contact: "تواصل",
        order: "اطلب عبر خمسات",
        theme: "الثيم",
        sec3_hint: "انقر على أي صورة لعرضها بحجم كامل.",
        footer_rights: "جميع الحقوق محفوظة.",
        skip: "تخطِّ إلى المحتوى",
        chat_whatsapp: "راسلني واتساب",
        email_me: "أرسل بريدًا",
        view_portfolio: "شاهد الأعمال",
        contact_me: "تواصل معي"
      },
      en: {
        nav_about: "About",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        order: "Order via Khamsat",
        theme: "Theme",
        sec3_hint: "Click any image to view full size.",
        footer_rights: "All rights reserved.",
        skip: "Skip to content",
        chat_whatsapp: "Chat on WhatsApp",
        email_me: "Send Email",
        view_portfolio: "View Portfolio",
        contact_me: "Contact Me"
      }
    },

    /* ----- Home (index) ----- */
    home: {
      ar: {
        title: "محمد خالد الشلول — بورتفوليو",
        meta_desc:
          "مصمم ومحتوى عربي — أعمال وخدمات وطرق تواصل. تصاميم بوستات، عروض PowerPoint، بطاقات أعمال، وشعارات.",
        home_h1: "Mohamad Khaled Al-Shlool",
        /* تم التحديث لإضافة مطوّر ويب */
        home_h2: "تخصص أمن سيبراني — مطوّر ويب — مصمم جرافيك وكاتب محتوى",
        about_h: "نبذة",
        /* تم التحديث لإضافة مطوّر ويب */
        about_p1:
          "أنا طالب أمن سيبراني ومطوّر ويب ومصمم جرافيك وكاتب محتوى عربي. أصنع تصاميم عصرية (شعارات، بوستات، عروض تقديمية) ونصوصًا واضحة تساعد العلامات على الظهور بثقة.",
        about_p2: "خلفيتي في الأمن تضيف وعيًا بالخصوصية والثقة والتواصل الآمن.",
        skills_h: "المهارات والأدوات",
        skills_tags:
          "تصميم شعارات • سوشيال ميديا • بطاقات أعمال • عروض PowerPoint • كتابة محتوى (عربي) • Photoshop • Illustrator • Security Awareness",
        timeline_h: "الخط الزمني",
        timeline_1_h: "2023 — الآن",
        timeline_1_p:
          "مصمم وكاتب مستقل — تنفيذ شعارات وبوستات وبطاقات أعمال ومقالات عربية.",
        timeline_2_h: "الجامعة",
        timeline_2_p:
          "بكالوريوس أمن سيبراني (قيد الدراسة) — بناء أساس قوي في الأمان والخصوصية والتواصل الآمن.",
        timeline_3_h: "ورش",
        timeline_3_p: "أساسيات الهوية والعروض التقديمية — تركيز على الوضوح والثبات البصري.",
        testimonials_h: "آراء مختصرة",
        t1: "تصاميم احترافية وملتزمة بالمواعيد — متوافقة مع الهوية.",
        t2: "تواصل واضح وتعديلات سريعة — زاد التفاعل على السوشيال.",
        t3: "المحتوى العربي مصقول وسهل القراءة — سنعاود العمل مجددًا.",
        cta_h: "لننجز شيئًا رائعًا",
        cta_p: "تبحث عن تصاميم عصرية ونصوص نظيفة مع وعي أمني؟"
      },
      en: {
        title: "Mohamad Khaled Al-Shlool — Portfolio",
        meta_desc:
          "Designer & Arabic copywriter — portfolio, services, and contact. Social posts, PowerPoint, business cards, and logos.",
        home_h1: "Mohamad Khaled Al-Shlool",
        /* تم التحديث لإضافة Web Developer */
        home_h2: "Cybersecurity student — Web Developer — Graphic Designer & Copywriter",
        about_h: "About",
        /* تم التحديث لإضافة Web Developer */
        about_p1:
          "I’m a cybersecurity student, web developer, graphic designer, and Arabic copywriter. I create modern visuals (logos, social posts, presentations) and clear copy that builds trust.",
        about_p2:
          "My security background adds privacy awareness, trust, and safe communication.",
        skills_h: "Skills & Tools",
        skills_tags:
          "Logo design • Social media • Business cards • PowerPoint • Arabic copywriting • Photoshop • Illustrator • Security awareness",
        timeline_h: "Timeline",
        timeline_1_h: "2023 — Present",
        timeline_1_p:
          "Freelance designer & writer — logos, posts, business cards, and Arabic articles.",
        timeline_2_h: "University",
        timeline_2_p:
          "BSc in Cybersecurity (in progress) — strong foundations in privacy and secure comms.",
        timeline_3_h: "Workshops",
        timeline_3_p:
          "Identity and presentation basics — focused on clarity and visual consistency.",
        testimonials_h: "Short Testimonials",
        t1: "Professional designs on time — aligned with brand identity.",
        t2: "Clear communication and quick edits — boosted social engagement.",
        t3: "Arabic copy is polished and easy to read — we’ll hire again.",
        cta_h: "Let’s build something great",
        cta_p: "Need clean visuals and copy with security awareness?"
      }
    },

    /* ----- Portfolio ----- */
    portfolio: {
      ar: { title: "الأعمال — محمد خالد الشلول", meta_desc: "نماذج من الأعمال المنفذة في التصميم والويب." },
      en: { title: "Portfolio — Mohamad Khaled Al-Shlool", meta_desc: "Selected work in design and web." }
    },

    /* ----- Contact ----- */
    contact: {
      ar: { title: "تواصل — محمد خالد الشلول", meta_desc: "راسلني عبر البريد أو واتساب أو لينكدإن." },
      en: { title: "Contact — Mohamad Khaled Al-Shlool", meta_desc: "Reach me via email, WhatsApp, or LinkedIn." }
    },

    /* ----- Services: PowerPoint ----- */
    powerpoint: {
      ar: {
        title: "تصميم عروض تقديمية PowerPoint — محمد خالد الشلول",
        meta_desc:
          "عروض تقديمية احترافية عبر PowerPoint — تصميم عصري ومنظم يبرز رسالتك بوضوح.",
        hero_h1: "تصميم عروض تقديمية PowerPoint",
        hero_h2: "تصميم عصري — تنظيم مرئي — إيصال أفكارك بوضوح",
        sec1_h: "وصف الخدمة",
        sec1_p:
          "هل لديك عرض تقديمي وتريد أن يظهر بشكل احترافي وجذاب؟ سأقوم بتصميم شرائح PowerPoint عصرية ومنظمة تساعدك على إيصال فكرتك بوضوح، سواء كان العرض لأغراض أكاديمية، اجتماعات عمل، ورش تدريبية أو فعاليات تسويقية.",
        sec1_li1: "الدراسات والبحوث الأكاديمية",
        sec1_li2: "العروض والاجتماعات الرسمية",
        sec1_li3: "الدورات التدريبية وبرامج العمل",
        sec1_li4: "الحملات التسويقية والإعلانية",
        sec2_h: "ما الذي ستستلمه",
        sec2_li1: "عرض تقديمي احترافي مصمم عبر PowerPoint بـ <strong>10 شرائح أساسية</strong>.",
        sec2_li2: "ملف <strong>PPTX</strong> مفتوح للتعديل والاستخدام المباشر.",
        sec2_li3: "تنظيم مرئي يسهل قراءة الأفكار ويجذب الانتباه.",
        sec2_li4: "تصميم متوافق مع مختلف الأجهزة وشاشات العرض.",
        sec2_li5: "إمكانية طلب المزيد من الشرائح أو المزايا عبر التطويرات.",
        sec3_h: "عينات من أعمال PowerPoint",
        g1: "شريحة افتتاحية أنيقة تُحدد هوية العرض",
        g2: "شريحة نصية منظمة لعرض الأفكار والاقتباسات",
        g3: "تصميم مخصص لعرض نبذة شخصية أو فريق العمل",
        g4: "شريحة خدمات تعرض النقاط الرئيسية بوضوح",
        g5: "أيقونات وعناصر بصرية تساعد على تبسيط المعلومات",
        g6: "شريحة تواصل أنيقة لعرض بيانات الاتصال"
      },
      en: {
        title: "PowerPoint Presentation Design — Mohamad Khaled Al-Shlool",
        meta_desc: "Clean, modern PowerPoint slides that communicate clearly.",
        hero_h1: "PowerPoint Presentation Design",
        hero_h2: "Modern design — Visual organization — Clear communication",
        sec1_h: "Service Description",
        sec1_p:
          "Do you want your presentation to look professional and engaging? I design modern, well-organized PowerPoint slides that clearly communicate your ideas—for academics, meetings, workshops, or marketing events.",
        sec1_li1: "Academic studies and research",
        sec1_li2: "Formal presentations and meetings",
        sec1_li3: "Training courses and programs",
        sec1_li4: "Marketing and advertising campaigns",
        sec2_h: "What You Will Receive",
        sec2_li1: "A professional presentation with <strong>10 core slides</strong>.",
        sec2_li2: "An editable <strong>PPTX</strong> file ready to use.",
        sec2_li3: "Clear visual hierarchy for readability and impact.",
        sec2_li4: "Compatible across devices and displays.",
        sec2_li5: "Option to request extra slides or features via add-ons.",
        sec3_h: "PowerPoint Work Samples",
        g1: "Elegant opening slide defining the presentation identity",
        g2: "Organized text slide for ideas and quotes",
        g3: "Tailored layout for a bio or team",
        g4: "Services slide highlighting key points",
        g5: "Icons and visuals that simplify information",
        g6: "Clean contact slide for your details"
      }
    },

    /* ----- Services: Social Posts ----- */
    social_posts: {
      ar: {
        title: "تصميم بوستات سوشيال ميديا — محمد خالد الشلول",
        meta_desc:
          "تصميم بوستات وإعلانات سوشيال ميديا بتصميمات عصرية وجذّابة تساعدك على الوصول لعملائك بشكل احترافي.",
        hero_h1: "تصميم بوستات سوشيال ميديا",
        hero_h2: "جودة عالية — ألوان متناسقة — تسليم سريع",
        sec1_h: "وصف الخدمة",
        sec1_p:
          "أقدّم خدمة تصميم بوستات وإعلانات للسوشيال ميديا (فيسبوك، إنستغرام، تويتر/إكس، لينكدإن) بتصميمات عصرية وجذّابة تساعدك على الوصول لعملائك بشكل احترافي.",
        sec1_h4: "ما يميّز الخدمة:",
        sec1_li1: "تصميم احترافي بألوان متناسقة.",
        sec1_li2: "وضوح وجودة عالية (1080×1080 بكسل).",
        sec1_li3: "مناسب للمنصات المختلفة.",
        sec1_li4: "إمكانية التعديل البسيط حتى ترضى تمامًا.",
        sec2_h: "ما الذي ستستلمه",
        sec2_li1: "صورة PNG أو JPG بجودة عالية.",
        sec2_li2: "تصميم واضح بدقة عالية يصلح للنشر المباشر أو الطباعة.",
        sec2_li3: "مقاسات إنستغرام 1080×1080 + نسخ لفيسبوك 1200×628 و لينكدإن 1200×627 عند الطلب.",
        sec2_li4: "بوست واحد احترافي (أو أكثر حسب الباقة).",
        sec3_h: "معرض الأعمال",
        g1: "بوستر ورشة أمن سيبراني بتنسيق داكن وحديث",
        g2: "إعلان وجبة برجر بإضاءة نيّونية تشوّق المشاهد",
        g3: "ملصق حفلة موسيقية بألوان حيوية وطاقة بصريّة",
        g4: "تصميم منتجات فاخرة بخلفية داكنة وإضاءة مركّزة",
        g5: "إعلان وجهة سياحية بأجواء صيفية مبهجة",
        g6: "عرض متجر أحذية بأسلوب جريء يبرز المنتج"
      },
      en: {
        title: "Social Media Post Design — Mohamad Khaled Al-Shlool",
        meta_desc:
          "Modern, eye-catching social media posts and ads to reach your audience professionally.",
        hero_h1: "Social Media Post Design",
        hero_h2: "High quality — Harmonized colors — Fast delivery",
        sec1_h: "Service Description",
        sec1_p:
          "I design social media posts and ads (Facebook, Instagram, Twitter/X, LinkedIn) with modern, eye-catching visuals that help you reach your audience professionally.",
        sec1_h4: "Highlights:",
        sec1_li1: "Professional design with consistent colors.",
        sec1_li2: "Clear, high resolution (1080×1080 px).",
        sec1_li3: "Optimized for multiple platforms.",
        sec1_li4: "Minor revisions until you’re fully satisfied.",
        sec2_h: "What You’ll Receive",
        sec2_li1: "High-quality PNG or JPG image.",
        sec2_li2: "Crisp design suitable for direct posting or print.",
        sec2_li3:
          "Instagram 1080×1080 + optional Facebook 1200×628 and LinkedIn 1200×627.",
        sec2_li4: "One professional post (or more depending on the package).",
        sec3_h: "Work Gallery",
        g1: "Cybersecurity workshop poster with modern dark styling",
        g2: "Burger meal promo with neon lighting to entice viewers",
        g3: "Music event poster with vivid colors and energy",
        g4: "Luxury product design with dark background and focused lighting",
        g5: "Tourism ad with cheerful summer vibes",
        g6: "Bold shoe shop showcase highlighting the product"
      }
    },

    /* ----- Services: Portfolio Website ----- */
    portfolio_site: {
      ar: {
        title: "إنشاء موقع شخصي / بورتفوليو — محمد خالد الشلول",
        meta_desc:
          "موقع شخصي متجاوب لعرض أعمالك ومهاراتك على الإنترنت بشكل احترافي مع نشر سريع.",
        hero_h1: "إنشاء موقع شخصي / بورتفوليو",
        hero_h2: "واجهة احترافية — تصميم متجاوب — إعداد ونشر سريع",
        sec1_h: "وصف الخدمة",
        sec1_p1: "امتلك موقعك الشخصي أو بورتفوليو احترافي يعرض أعمالك ومهاراتك على الإنترنت بشكل مميز.",
        sec1_p2: "الموقع سيكون بتصميم عصري وجذاب ومتجاوب مع جميع الأجهزة (كمبيوتر – موبايل – تابلت)، مما يمنحك حضورًا رقميًا يساعدك على جذب العملاء وإبراز خدماتك بشكل أنيق ومرتب.",
        sec1_p3: "هذه الخدمة مناسبة للمستقلين، المصممين، الكتّاب، المبرمجين، الطلاب، أو أي شخص يرغب بإنشاء واجهة تعريفية بسيطة واحترافية أونلاين.",
        sec1_p4: "كل ما عليك فعله هو تزويدي بمعلوماتك وصورك أو أعمالك، وسأتكفّل بإنشاء موقع يعكس شخصيتك ويُظهر أعمالك بأفضل شكل.",
        sec1_p5: "الخدمة الأساسية تشمل موقع صفحة واحدة، مع إمكانية إضافة مزايا أو صفحات إضافية عبر التطويرات المدفوعة.",
        demo: "مثال تطبيقي: https://mohamad-alshlool03.github.io/mohamadalshlool.github.io/",
        sec2_h: "ما الذي ستستلمه",
        sec2_li1: "<strong>موقع شخصي بسيط (صفحة واحدة)</strong> يحتوي على اسمك + نبذة تعريفية قصيرة، وصورة شخصية (اختيارية).",
        sec2_li2: "<strong>تصميم متجاوب</strong> يعمل بشكل ممتاز على الموبايل والكمبيوتر بدون مشاكل.",
        sec2_li3: "<strong>رفع الموقع على GitHub Pages</strong> لجعل موقعك متاحًا أونلاين مجانًا بدون تكلفة استضافة.",
        sec2_li4: "<strong>ملف كود منظم وسهل التعديل</strong> (HTML / CSS) مع إمكانية تعديل الألوان والنصوص لاحقًا بسهولة.",
        sec2_li5: "معرض الأعمال أو قسم التواصل يتم إضافتهما عبر التطويرات المدفوعة.",
        sec3_h: "معرض الأعمال",
        g1:"قسم التعريف — لقطة 1", g2:"قسم الأعمال — لقطة 1", g3:"قسم التعريف — لقطة 2", g4:"قسم الأعمال — لقطة 2",
        g5:"قسم التعريف — لقطة 3", g6:"قسم التواصل — لقطة 1", g7:"قسم التواصل — لقطة 3", g8:"قسم التواصل — لقطة 2",
        sec3_hint:"انقر على أي صورة لعرضها بالحجم الكامل."
      },
      en: {
        title: "Personal/Portfolio Website — Mohamad Khaled Al-Shlool",
        meta_desc:
          "Responsive personal/portfolio website to showcase your work online with quick setup.",
        hero_h1: "Personal / Portfolio Website",
        hero_h2: "Professional front — responsive design — quick setup & publish",
        sec1_h: "Service Description",
        sec1_p1: "Get a personal or portfolio website that showcases your work and skills beautifully.",
        sec1_p2: "Modern, responsive design across devices (desktop, mobile, tablet) to boost your online presence and attract clients.",
        sec1_p3: "Perfect for freelancers, designers, writers, developers, students, or anyone who needs a simple, professional intro online.",
        sec1_p4: "Send me your info, photos, and work — I’ll build a site that reflects you and highlights your work.",
        sec1_p5: "The base package includes a one-page site. Extra features/pages are available as add-ons.",
        demo: "Demo: https://mohamad-alshlool03.github.io/mohamadalshlool.github.io/",
        sec2_h: "What You’ll Receive",
        sec2_li1: "<strong>Simple one-page site</strong> with your name, short bio, and optional portrait.",
        sec2_li2: "<strong>Responsive layout</strong> that looks great on mobile and desktop.",
        sec2_li3: "<strong>Deployment to GitHub Pages</strong> so your site is online for free.",
        sec2_li4: "<strong>Clean, editable code</strong> (HTML/CSS) so you can tweak colors/text later.",
        sec2_li5: "Portfolio or Contact sections can be added as paid upgrades.",
        sec3_h: "Work Gallery",
        g1:"About section — shot 1", g2:"Work section — shot 1", g3:"About section — shot 2", g4:"Work section — shot 2",
        g5:"About section — shot 3", g6:"Contact section — shot 1", g7:"Contact section — shot 3", g8:"Contact section — shot 2",
        sec3_hint:"Click any image to view full size."
      }
    },

    /* ----- 404 ----- */
    not_found: {
      ar: {
        title: "الصفحة غير موجودة — محمد خالد الشلول",
        meta_desc: "عذراً، الصفحة التي تبحث عنها غير متاحة.",
        nf_h1: "الصفحة غير موجودة",
        nf_p: "يبدو أنك وصلت إلى رابط غير صحيح. استخدم الروابط بالأسفل للعودة."
      },
      en: {
        title: "Page Not Found — Mohamad Khaled Al-Shlool",
        meta_desc: "Sorry, the page you’re looking for doesn’t exist.",
        nf_h1: "Page Not Found",
        nf_p: "Looks like the link is incorrect. Use the links below to get back."
      }
    },

    service_generic: {
      ar: { title: "خدمة — محمد خالد الشلول", meta_desc: "صفحة خدمة." },
      en: { title: "Service — Mohamad Khaled Al-Shlool", meta_desc: "Service page." }
    }
  };

  function getBundle(lang) {
    const common = T.common?.[lang] || {};
    const page = (T[PAGE_ID] && T[PAGE_ID][lang]) ? T[PAGE_ID][lang] : {};
    return { ...common, ...page };
  }

  function updateMeta(bundle) {
    const metaDesc = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (bundle.title) document.title = bundle.title;
    if (bundle.meta_desc && metaDesc) metaDesc.setAttribute("content", bundle.meta_desc);
    if (ogTitle && bundle.title) ogTitle.setAttribute("content", bundle.title);
    if (ogDesc && bundle.meta_desc) ogDesc.setAttribute("content", bundle.meta_desc);
  }

  function setLang(l) {
    document.documentElement.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", l);
    const bundle = getBundle(l);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = bundle[key];
      if (val != null) el.innerHTML = val;
    });
    updateMeta(bundle);
    if (langBtn) {
      langBtn.setAttribute("aria-label", l === "ar" ? "التبديل إلى الإنجليزية" : "Switch to Arabic");
    }
  }

  // Initial language:
  // - If chosen before → use it
  // - Otherwise: services default AR, other pages default EN
  let lang = localStorage.getItem(LANG_KEY);
  if (!lang) {
    lang = IS_SERVICE ? "ar" : "en";
    localStorage.setItem(LANG_KEY, lang);
  }
  setLang(lang);

  langBtn &&
    langBtn.addEventListener("click", () => {
      lang = lang === "ar" ? "en" : "ar";
      localStorage.setItem(LANG_KEY, lang);
      setLang(lang);
    });
})();
