// Dane kursów, opinii i FAQ - edycja tych tablic wystarczy, by zaktualizować treść strony.
// Każdy kurs ma "id", które w przyszłości może posłużyć do wygenerowania osobnej podstrony.

const COURSES = [
  {
    id: "nauka-czytania",
    track: "podstawowa",
    title: "Nauka czytania",
    description: "Wsparcie w nauce czytania i pisania dla najmłodszych, w przyjaznej i cierpliwej atmosferze.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=450&q=80",
  },
  {
    id: "angielski-sp",
    track: "podstawowa",
    title: "Język angielski",
    description: "Zajęcia językowe dopasowane do wieku - nauka przez zabawę, piosenki i gry.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&h=450&q=80",
  },
  {
    id: "niemiecki-sp",
    track: "podstawowa",
    title: "Język niemiecki",
    description: "Pierwszy kontakt z językiem niemieckim w małych grupach rówieśniczych.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&h=450&q=80",
  },
  {
    id: "matematyka-sp",
    track: "podstawowa",
    title: "Matematyka",
    description: "Zajęcia wyrównawcze i rozwijające zainteresowania matematyczne - bez stresu i presji.",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&h=450&q=80",
  },
  {
    id: "robotyka",
    track: "podstawowa",
    title: "Koło robotyki",
    description: "Pierwsze kroki w programowaniu i robotyce - budowanie, testowanie, wspólna zabawa.",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=600&h=450&q=80",
  },
  {
    id: "matura",
    track: "liceum",
    title: "Przygotowanie do matury",
    description: "Matematyka, polski i angielski w małych grupach - solidne przygotowanie do egzaminu.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=450&q=80",
  },
  {
    id: "konwersacje",
    track: "liceum",
    title: "Konwersacje językowe",
    description: "Praktyczna nauka mówienia w języku obcym - pewność siebie w realnych rozmowach.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&h=450&q=80",
  },
  {
    id: "korepetycje",
    track: "liceum",
    title: "Korepetycje przedmiotowe",
    description: "Indywidualne wsparcie z wybranych przedmiotów, dopasowane do tempa nauki ucznia.",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=600&h=450&q=80",
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
