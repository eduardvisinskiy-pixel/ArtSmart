const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const langBtn = document.getElementById("langBtn");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const galleryBtn = document.getElementById("galleryBtn");
const galleryModal = document.getElementById("galleryModal");
const galleryClose = document.getElementById("galleryClose");

const translations = {
  uk: {
    metaTitle: "ART SMART Aalborg | Творча студія для дітей",
    description:
      "ART SMART Aalborg — творча студія для дітей в Ольборзі. Арт-терапія, творчі заняття, майстер-класи та розвиток дітей.",

    navAbout: "Про нас",
    navServices: "Заняття",
    navReviews: "Відгуки",
    navNews: "Новини",
    navContact: "Контакти",
    navButton: "Записатися",
    galleryButton: "Галерея",
galleryTitle: "Галерея",

    heroBadge: "Creative Studio in Aalborg",
    heroTitle: "Творча студія для дітей в Ольборзі",
    heroText:
      "ART SMART Aalborg — це теплий простір для дитячої творчості, розвитку, арт-терапії та веселих майстер-класів.",
    heroPrimary: "Записатися на заняття",
    heroSecondary: "Наші заняття",

    aboutBadge: "Про студію",
    aboutTitle: "Місце, де діти розкривають свою творчість, уяву та впевненість",
aboutText:
  "ART SMART Aalborg — це творча студія для дітей в Ольборзі, де творчість поєднується з турботою, розвитком і теплою атмосферою. Ми створюємо простір, у якому дитина може вільно малювати, експериментувати з кольорами, пробувати нові матеріали, спілкуватися з іншими дітьми та поступово відкривати власні таланти. Наші заняття допомагають розвивати фантазію, дрібну моторику, уважність, емоційність, впевненість у собі та любов до творчості. Ми віримо, що мистецтво — це не лише красивий результат, а й важливий процес, у якому дитина вчиться виражати себе, приймати рішення, помилятися без страху та радіти власним досягненням.",

    servicesBadge: "Заняття",
    servicesTitle: "Що ми пропонуємо",
    serviceOneTitle: "🎨 Творчі заняття",
    serviceOneText:
      "Малювання, аплікації, сенсорні активності та handmade-проєкти.",
    serviceTwoTitle: "💜 Арт-терапія",
    serviceTwoText:
      "М’який творчий підхід для розвитку емоційності та впевненості.",
    serviceThreeTitle: "⭐ Майстер-класи",
    serviceThreeText:
      "Святкові події, суботні заняття та тематичні творчі зустрічі.",

    reviewsBadge: "Відгуки",
    reviewsTitle: "Що кажуть батьки",
    reviewTextOne:
  "“Дуже тепла атмосфера, дитина із задоволенням приходить на заняття. Рекомендуємо ART SMART!”",
reviewTextTwo:
  "“Чудові творчі заняття! Дитина стала більш впевненою та дуже чекає кожної нової зустрічі.”",
reviewTextThree:
  "“Дуже подобається індивідуальний підхід і спокійна атмосфера. Видно, що дітям тут комфортно.”",

    newsBadge: "Новини",
    newsTitle: "Останні події",
    newsText:
      "Тут можна буде додавати новини, майстер-класи та анонси занять.",

    contactBadge: "Контакти",
    contactTitle: "Запишіться на заняття",
    contactText:
      "Напишіть нам, і ми відповімо щодо розкладу, цін та пробного заняття.",

    namePlaceholder: "Ваше ім’я",
    gallerySubtitle: "Більше фото та відео шукайте в наших соцмережах.",
    emailPlaceholder: "Email",
    messagePlaceholder: "Ваше повідомлення",
    formButton: "Надіслати",
    formSuccess: "Дякуємо! Повідомлення готове до відправки.",
  },

  en: {
    metaTitle: "ART SMART Aalborg | Creative Studio for Kids",
    description:
      "ART SMART Aalborg is a creative studio for children in Aalborg with art therapy, creative classes, workshops and child development.",

    navAbout: "About",
    galleryButton: "Gallery",
galleryTitle: "Gallery",
    navServices: "Classes",
    navReviews: "Reviews",
    navNews: "News",
    navContact: "Contact",
    navButton: "Book now",
    gallerySubtitle: "Find more photos and videos on our social media.",

    heroBadge: "Creative Studio in Aalborg",
    heroTitle: "Creative studio for children in Aalborg",
    heroText:
      "ART SMART Aalborg is a warm space for children’s creativity, development, art therapy and joyful workshops.",
    heroPrimary: "Book a class",
    heroSecondary: "Our classes",

    aboutBadge: "About us",
    aboutTitle: "A place where children develop creativity, imagination and confidence",
aboutText:
  "ART SMART Aalborg is a creative studio for children in Aalborg, where creativity is combined with care, development and a warm atmosphere. We create a space where every child can freely paint, explore colours, try new materials, communicate with other children and gradually discover their own talents. Our classes help develop imagination, fine motor skills, focus, emotional expression, self-confidence and a love for creativity. We believe that art is not only about the final result, but also about the process, where children learn to express themselves, make decisions, make mistakes without fear and enjoy their own achievements.",

    servicesBadge: "Classes",
    servicesTitle: "What we offer",
    serviceOneTitle: "🎨 Creative classes",
    serviceOneText:
      "Painting, crafts, sensory activities and handmade creative projects.",
    serviceTwoTitle: "💜 Art therapy",
    serviceTwoText:
      "A gentle creative approach for emotional growth and confidence.",
    serviceThreeTitle: "⭐ Workshops",
    serviceThreeText:
      "Seasonal events, Saturday classes and themed creative meetings.",

    reviewsBadge: "Reviews",
    reviewsTitle: "What parents say",
   reviewTextOne:
  "“A very warm atmosphere. My child enjoys every class. We highly recommend ART SMART!”",
reviewTextTwo:
  "“Wonderful creative classes! My child has become more confident and looks forward to every session.”",
reviewTextThree:
  "“We really like the individual approach and calm atmosphere. Children feel comfortable here.”",

    newsBadge: "News",
    newsTitle: "Latest events",
    newsText:
      "Here you can add news, workshops and class announcements.",

    contactBadge: "Contact",
    contactTitle: "Book a class",
    contactText:
      "Send us a message and we will reply about schedule, prices and trial classes.",

    namePlaceholder: "Your name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Your message",
    formButton: "Send",
    formSuccess: "Thank you! Your message is ready to be sent.",
  },
};

let currentLang = localStorage.getItem("artsmartLang") || "uk";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("artsmartLang", lang);

  document.documentElement.lang = lang;
  langBtn.textContent = lang === "uk" ? "EN" : "UA";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-meta]").forEach((element) => {
    const key = element.dataset.i18nMeta;

    if (translations[lang][key]) {
      element.setAttribute("content", translations[lang][key]);
    }
  });

  document.title = translations[lang].metaTitle;
  document.querySelectorAll(".news-card img").forEach((image) => {
  image.src = lang === "uk" ? image.dataset.ua : image.dataset.en;
});
}

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

langBtn.addEventListener("click", () => {
  const nextLang = currentLang === "uk" ? "en" : "uk";
  setLanguage(nextLang);
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  formMessage.textContent =
    currentLang === "uk" ? "Відправляємо..." : "Sending...";

  const formData = new FormData(contactForm);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      formMessage.textContent =
        currentLang === "uk"
          ? "Дякуємо! Повідомлення успішно відправлено."
          : "Thank you! Your message has been sent successfully.";

      contactForm.reset();
    } else {
      formMessage.textContent =
        currentLang === "uk"
          ? "Помилка. Спробуйте ще раз."
          : "Something went wrong. Please try again.";
    }
  } catch (error) {
    formMessage.textContent =
      currentLang === "uk"
        ? "Помилка з’єднання. Спробуйте пізніше."
        : "Connection error. Please try again later.";
  }
});

setLanguage(currentLang);
galleryBtn.addEventListener("click", () => {
  galleryModal.classList.add("active");
});

galleryClose.addEventListener("click", () => {
  galleryModal.classList.remove("active");
});

galleryModal.addEventListener("click", (event) => {
  if (event.target === galleryModal) {
    galleryModal.classList.remove("active");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    galleryModal.classList.remove("active");
  }
});
