// Dane kursów, opinii i FAQ - edycja tych tablic wystarczy, by zaktualizować treść strony.
// Każdy kurs ma "id", które w przyszłości może posłużyć do wygenerowania osobnej podstrony.

const COURSES = [
  {
    id: "nauka-czytania",
    track: "podstawowa",
    title: "Nauka czytania",
    description: "Wsparcie w nauce czytania dla przedszkolaków, w małych grupach i przyjaznej, cierpliwej atmosferze.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=450&q=80",
    schedule: ["poniedziałek 16:40–17:40 (6-latki)", "środa 16:40–17:30 (5-latki)"],
  },
  {
    id: "gemini-ai",
    track: "podstawowa",
    title: "Zajęcia z Gemini AI",
    description: "Pierwszy kontakt ze sztuczną inteligencją i nowymi technologiami - zajęcia grupowe i indywidualne.",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=600&h=450&q=80",
    schedule: [
      "poniedziałek 15:30–16:30 (grupa)",
      "czwartek 15:30–16:30 (indywidualnie)",
      "czwartek 16:40–17:40 (indywidualnie)",
      "czwartek 17:40–18:40 (indywidualnie)",
    ],
  },
  {
    id: "niemiecki-sp",
    track: "podstawowa",
    title: "Język niemiecki",
    description: "Nauka języka niemieckiego w grupach dopasowanych do wieku i poziomu - od zerówki po klasę 8.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&h=450&q=80",
    schedule: [
      "poniedziałek 17:50–18:50 (kl. 7)",
      "wtorek 17:50–18:50 (kl. 7)",
      "środa 17:50–18:50 (grupa początkująca: zerówka + kl. 1–3)",
      "czwartek 17:50–18:50 (kl. 8)",
      "piątek 16:40–17:40 (grupa początkująca: kl. 4–6)",
      "piątek 17:50–18:50 (indywidualnie, po wcześniejszym umówieniu)",
    ],
  },
  {
    id: "wyrownawcze-polski",
    track: "podstawowa",
    title: "Zajęcia wyrównawcze - język polski",
    description: "Dodatkowe wsparcie z języka polskiego dla uczniów klas 1-3.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&h=450&q=80",
    schedule: ["wtorek 16:30–17:30 (kl. 1)", "czwartek 16:40–17:40 (kl. 2)", "środa 16:40–17:40 (kl. 3)"],
  },
  {
    id: "wyrownawcze-matematyka",
    track: "podstawowa",
    title: "Zajęcia wyrównawcze - matematyka",
    description: "Zajęcia wyrównawcze i rozwijające zainteresowania matematyczne dla uczniów klas 1-3 - bez stresu i presji.",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&h=450&q=80",
    schedule: ["czwartek 16:40–17:40 (kl. 1)", "środa 17:40–18:40 (kl. 2)", "wtorek 16:40–17:40 (kl. 3)"],
  },
  {
    id: "tus",
    track: "podstawowa",
    title: "TUS - trening umiejętności społecznych",
    description: "Zajęcia rozwijające kompetencje społeczne i emocjonalne dzieci, w małych grupach.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&h=450&q=80",
    schedule: ["wtorek 17:40–18:40", "czwartek 17:50–18:50"],
  },
  {
    id: "matematyka-programowanie",
    track: "podstawowa",
    title: "Zajęcia matematyczne z elementami programowania",
    description: "Nauka matematyki połączona z pierwszymi krokami w programowaniu dla przedszkolaków.",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=600&h=450&q=80",
    schedule: ["piątek 16:40–17:40 (5-, 6-latki)"],
  },
  {
    id: "terapia-psychologiczna",
    track: "podstawowa",
    title: "Terapia psychologiczna",
    description: "Indywidualne spotkania z psychologiem dla dzieci i młodzieży, po wcześniejszym umówieniu terminu.",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=600&h=450&q=80",
    schedule: ["czwartek 16:00–16:50 (po wcześniejszym umówieniu)"],
  },
  {
    id: "terapia-rodzinna",
    track: "podstawowa",
    title: "Terapia rodzinna",
    description: "Wsparcie terapeutyczne dla całej rodziny, po wcześniejszym umówieniu terminu.",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=600&h=450&q=80",
    schedule: ["czwartek 17:00–17:50 (po wcześniejszym umówieniu)"],
  },
];

const TESTIMONIALS = [
  {
    quote: "Zosia w końcu polubiła czytanie - zajęcia są prowadzone z ogromną cierpliwością i ciepłem.",
    author: "Anna",
    role: "mama Zosi (7 lat)",
  },
  {
    quote: "Kuba przygotowuje się do matury z angielskiego i widać u niego dużo więcej pewności siebie.",
    author: "Marek",
    role: "tata Kuby (16 lat)",
  },
  {
    quote: "Konwersacje w małej grupie sprawiły, że w końcu nie boję się mówić po niemiecku na głos.",
    author: "Ola",
    role: "uczennica liceum",
  },
];

const FAQS = [
  {
    question: "Jak wygląda proces zapisu na zajęcia?",
    answer: "Wybierasz interesujące zajęcia, klikasz \"Zapisz się\" przy wybranej karcie i wypełniasz krótki formularz. Skontaktujemy się z Tobą, aby ustalić szczegóły.",
  },
  {
    question: "Dla jakich grup wiekowych prowadzicie zajęcia?",
    answer: "Prowadzimy zajęcia dla dzieci ze szkoły podstawowej oraz dla uczniów liceum i technikum - oferta jest dopasowana do każdej z tych grup.",
  },
  {
    question: "Gdzie odbywają się zajęcia?",
    answer: "Zajęcia odbywają się stacjonarnie w naszej placówce, a wybrane kursy dostępne są także online - szczegóły ustalamy indywidualnie po zapisie.",
  },
  {
    question: "Czy można zapisać się w trakcie roku szkolnego?",
    answer: "Tak, do naszych grup można dołączyć w dowolnym momencie roku szkolnego, w miarę dostępnych miejsc.",
  },
  {
    question: "Jak mogę skontaktować się z nauczycielem prowadzącym?",
    answer: "Po zapisie otrzymasz dane kontaktowe do prowadzącego. Możesz też napisać lub zadzwonić bezpośrednio do naszego sekretariatu - dane znajdziesz w sekcji Kontakt.",
  },
];
