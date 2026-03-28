/* ============================================================
   MAISON HÉRITAGE — Landing Page JavaScript
   Vanilla JS · No framework · No dependencies
   ============================================================ */

const page = document.body.dataset.page;

document.addEventListener('DOMContentLoaded', () => {

      /* ── Mobile menu ────────────────────────────────────────── */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    /* ── Navbar scroll effect ───────────────────────────────── */
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      navbar.classList.toggle('scrolled', scrollY > 50);
      lastScroll = scrollY;
    }, { passive: true });

    /* ── Scroll reveal ──────────────────────────────────────── */
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });


  if (page == "contact") {
    const dateInput = document.getElementById("date-form")
    var date = new Date().toISOString().slice(0,10);

    dateInput.setAttribute("min", date)


    dateInput.valueAsDate = new Date();
    
    const textarea = document.querySelector(".devis__form textarea");
    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  }
  if (page == "index") {


  /* ── i18n Translations ─────────────────────────────────── */
    const translations = {
      fr: {
        nav_accueil: 'Accueil',
        nav_prestations: 'Nos prestations',
        nav_evenements: 'Événements',
        nav_contact: 'Contact',
        nav_cta: 'Demander un devis',
        hero_badge: 'Traiteur haut de gamme',
        hero_title_prefix: 'L\'excellence culinaire<br>pour vos ',
        hero_subtitle: 'Pour nous, chaque geste porte du sens, chaque plat raconte une histoire, chaque rencontre est un acte d\'amour.',
        hero_btn1: 'Voir nos prestations',
        hero_btn2: 'Nous contacter',
        hero_scroll: 'Découvrir',
        prest_label: 'Ce que nous proposons',
        prest_title: 'Nos prestations',
        card1_title: 'Mariages',
        card1_text: 'Des menus sur mesure pour célébrer le plus beau jour de votre vie avec élégance et raffinement.',
        card2_title: 'Événements d\'entreprise',
        card2_text: 'Buffets, cocktails et repas d\'affaires conçus pour impressionner vos collaborateurs et clients.',
        card3_title: 'Cocktails & Réceptions',
        card3_text: 'Des créations culinaires originales servies avec art pour vos moments de convivialité.',
        card4_title: 'Dîners privés',
        card4_text: 'L\'intimité d\'un dîner chez vous, sublimée par le talent de nos chefs à domicile.',
        card5_title: 'Plateaux repas',
        card5_text: 'Des plateaux repas gourmets livrés dans vos locaux, alliant praticité et qualité premium.',
        card_btn: 'Consulter la page',
        sf_label: 'Notre philosophie',
        sf_title: 'Un savoir-faire transmis avec passion',
        sf_desc: 'Chez Maison Shewem, chaque plat raconte une histoire. Nos chefs sélectionnent les meilleurs produits du terroir et les transforment en créations culinaires d\'exception. De la conception du menu à la mise en scène de votre événement, nous mettons notre expertise au service de vos émotions.',
        sf_signature: '— L\'équipe Maison Shewem',
        sf_btn: 'En savoir plus',
        reviews_title: 'Avis clients',
        reviews_brand: 'Maison Shewem',
        reviews_write: 'Écrire un avis',
        reviews_date: 'il y a 8 mois',
        reviews_text: 'Excellente découverte culinaire ! Les saveurs caribéennes étaient délicieuses et j\'ai apprécié la pédagogie de Stéphie qui enrichit l\'expérience par ses explications passionnées. À recommander +++',
        reviews_date2: 'il y a 8 mois',
        reviews_text2: 'Une prestataire d’exception, des saveurs succulentes, bref foncez !!!!!',
        reviews_date3: 'il y a 8 mois',
        reviews_text3: 'Toute l\'équipe hyper sympa nous a préparé un déjeuner délicieux, encore merci !',
        reviews_readmore: 'Lire la suite',
        reviews_cert: 'Certifié par: Trustindex',
        pd_label: 'Des services sur mesure',
        pd_title: 'Nos prestations adaptées à chaque occasion',
        pd_desc: 'Que ce soit pour un mariage somptueux, un événement corporate ou un dîner intime, nous composons des menus uniques qui reflètent vos envies et subliment chaque instant.',
        pd_item1_title: 'Mariages',
        pd_item1_text: 'Menus gastronomiques conçus pour le plus beau jour de votre vie.',
        pd_item2_title: 'Événements d\'entreprise',
        pd_item2_text: 'Buffets et cocktails qui impressionnent collaborateurs et clients.',
        pd_item3_title: 'Cocktails & Réceptions',
        pd_item3_text: 'Créations originales servies avec art pour vos célébrations.',
        pd_item4_title: 'Dîners privés',
        pd_item4_text: 'Un chef à domicile pour une expérience intime et raffinée.',
        pd_item5_title: 'Plateaux repas',
        pd_item5_text: 'Gourmandise et praticité livrées directement dans vos locaux.',
        pd_btn: 'Demander un devis',
        gallery_label: 'Suivez-nous sur',
        gallery_title: 'Nos <span class="highlight">Créations</span>',
        gallery_handle: '@maisonshewem',
        footer_desc: 'Traiteur haut de gamme, depuis 1987. L\'art culinaire au service de vos plus beaux moments.',
        footer_h_links: 'Liens rapides',
        footer_h_contact: 'Contact',
        footer_h_social: 'Suivez-nous',
        footer_link1: 'Accueil',
        footer_link2: 'Nos prestations',
        footer_link3: 'Événements',
        footer_link4: 'Mentions légales',
        footer_addr: '38 Rue Saint-Saëns<br>91240 Saint-Michel-sur-Orge',
        footer_phone: '01 00 00 00 00',
        footer_email: 'contact@maisonshewem.fr',
        footer_copy: '© 2026 Maison Shewem. Tous droits réservés.',
      },
      en: {
        nav_accueil: 'Home',
        nav_prestations: 'Our Services',
        nav_evenements: 'Events',
        nav_contact: 'Contact',
        nav_cta: 'Request a Quote',
        hero_badge: 'Premium Catering',
        hero_title_prefix: 'Culinary Excellence<br>for Your ',
        hero_subtitle: 'For us, every gesture carries meaning, every dish tells a story, every encounter is an act of love.',
        hero_btn1: 'View our services',
        hero_btn2: 'Contact us',
        hero_scroll: 'Discover',
        prest_label: 'What we offer',
        prest_title: 'Our Services',
        card1_title: 'Weddings',
        card1_text: 'Bespoke menus to celebrate the most beautiful day of your life with elegance and refinement.',
        card2_title: 'Corporate Events',
        card2_text: 'Buffets, cocktails and business dinners designed to impress your colleagues and clients.',
        card3_title: 'Cocktails & Receptions',
        card3_text: 'Original culinary creations artfully served for your moments of celebration.',
        card4_title: 'Private Dinners',
        card4_text: 'The intimacy of dining at home, elevated by the talent of our private chefs.',
        card5_title: 'Meal Trays',
        card5_text: 'Gourmet meal trays delivered to your premises, combining practicality and premium quality.',
        card_btn: 'View page',
        sf_label: 'Our philosophy',
        sf_title: 'Craftsmanship Passed Down with Passion',
        sf_desc: 'At Maison Shewem, every dish tells a story. Our chefs select the finest local products and transform them into exceptional culinary creations. From menu design to event staging, we put our expertise at the service of your emotions.',
        sf_signature: '— The Maison Shewem Team',
        sf_btn: 'Learn more',
        reviews_title: 'Customer Reviews',
        reviews_brand: 'Maison Shewem',
        reviews_write: 'Write a review',
        reviews_date: '8 months ago',
        reviews_text: 'Excellent culinary discovery! The Caribbean flavors were delicious and I appreciated Stephie\'s pedagogy, which enriched the experience with her passionate explanations. Highly recommended +++',
        reviews_date2: '8 months ago',
        reviews_text2: 'An exceptional caterer, succulent flavors, in short, go for it!!!!!',
        reviews_date3: '8 months ago',
        reviews_text3: 'The super friendly team prepared a delicious lunch for us, thanks again!',
        reviews_readmore: 'Read more',
        reviews_cert: 'Certified by: Trustindex',
        pd_label: 'Tailored services',
        pd_title: 'Services adapted to every occasion',
        pd_desc: 'Whether it\'s a sumptuous wedding, a corporate event or an intimate dinner, we craft unique menus that reflect your desires and elevate every moment.',
        pd_item1_title: 'Weddings',
        pd_item1_text: 'Gourmet menus designed for the most beautiful day of your life.',
        pd_item2_title: 'Corporate Events',
        pd_item2_text: 'Buffets and cocktails that impress colleagues and clients.',
        pd_item3_title: 'Cocktails & Receptions',
        pd_item3_text: 'Original creations artfully served for your celebrations.',
        pd_item4_title: 'Private Dinners',
        pd_item4_text: 'A private chef for an intimate and refined experience.',
        pd_item5_title: 'Meal Trays',
        pd_item5_text: 'Gourmet convenience delivered directly to your premises.',
        pd_btn: 'Request a Quote',
        gallery_label: 'Follow us on',
        gallery_title: 'Our <span class="highlight">Creations</span>',
        gallery_handle: '@maisonshewem',
        footer_desc: 'Premium catering, since 1987. Culinary art at the service of your greatest moments.',
        footer_h_links: 'Quick Links',
        footer_h_contact: 'Contact',
        footer_h_social: 'Follow Us',
        footer_link1: 'Home',
        footer_link2: 'Our Services',
        footer_link3: 'Events',
        footer_link4: 'Legal Notice',
        footer_addr: '38 Rue Saint-Saëns<br>91240 Saint-Michel-sur-Orge',
        footer_phone: '01 00 00 00 00',
        footer_email: 'contact@maisonshewem.fr',
        footer_copy: '© 2026 Maison Shewem. All rights reserved.',
      }
    };

    let currentLang = 'fr';

    revealEls.forEach(el => revealObserver.observe(el));

    /* ── Smooth scroll on anchor clicks ─────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return; // placeholder links
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    /* ── Carousel arrows (desktop) ──────────────────────────── */
    const carouselTrack = document.querySelector('.carousel__track');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (carouselTrack && prevBtn && nextBtn) {
      // Scroll distance = one card width + gap
      function getScrollAmount() {
        const card = carouselTrack.querySelector('.card');
        if (!card) return 340;
        const style = window.getComputedStyle(carouselTrack);
        const gap = parseFloat(style.gap) || 24;
        return card.offsetWidth + gap;
      }

      // Update arrow disabled states
      function updateArrowStates() {
        const { scrollLeft, scrollWidth, clientWidth } = carouselTrack;
        prevBtn.classList.toggle('disabled', scrollLeft <= 5);
        nextBtn.classList.toggle('disabled', scrollLeft + clientWidth >= scrollWidth - 5);
      }

      prevBtn.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
      });

      nextBtn.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
      });

      carouselTrack.addEventListener('scroll', updateArrowStates, { passive: true });
      window.addEventListener('resize', updateArrowStates);

      // Initial state
      updateArrowStates();
    }

    /* ── Typewriter Effect for Hero ─────────────────────────── */
    const typewriterElement = document.querySelector('.typewriter');

    // French and English words dictionary
    const wordsDict = {
      fr: ['événements', 'célébrations', 'moments', 'souvenirs'],
      en: ['events', 'celebrations', 'moments', 'memories']
    };

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Timings matching the reference demo
    const TYPING_SPEED = 200;
    const DELETING_SPEED = 100;
    const PAUSE_END_OF_WORD = 1200;
    const PAUSE_EMPTY_WORD = 1200;

    function typeEffect() {
      const words = wordsDict[currentLang] || wordsDict['fr'];
      const currentWord = words[wordIndex];

      // Manage cursor blinking state (stop blinking while animating)
      typewriterElement.classList.add('stop-blinking');

      if (isDeleting) {
        // Deleting char by char
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        // Writing char by char
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      // Determine what to do next
      let timeoutLength = isDeleting ? DELETING_SPEED : TYPING_SPEED;

      if (!isDeleting && charIndex === currentWord.length) {
        // Word is fully typed - wait then delete
        timeoutLength = PAUSE_END_OF_WORD;
        isDeleting = true;
        typewriterElement.classList.remove('stop-blinking'); // let cursor blink while paused
      } else if (isDeleting && charIndex === 0) {
        // Word is fully deleted - next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        timeoutLength = PAUSE_EMPTY_WORD;
        typewriterElement.classList.remove('stop-blinking'); // let cursor blink while paused
      }

      setTimeout(typeEffect, timeoutLength);
    }

    // Start the effect after a brief delay
    setTimeout(typeEffect, 1200);
  }
});
