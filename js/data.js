// Dane kursów, opinii i FAQ - edycja tych tablic wystarczy, by zaktualizować treść strony.
// Każdy kurs ma "id", które w przyszłości może posłużyć do wygenerowania osobnej podstrony.

// Lista klas do wyboru w formularzu zapisu - "value" musi odpowiadać tagom w course.schedule[].classes.
const CHILD_CLASS_OPTIONS = [
  { value: "przedszkole-5", label: "5-latki (przedszkole)" },
  { value: "przedszkole-6", label: "6-latki / zerówka" },
  { value: "kl1", label: "Klasa 1" },
  { value: "kl2", label: "Klasa 2" },
  { value: "kl3", label: "Klasa 3" },
  { value: "kl4", label: "Klasa 4" },
  { value: "kl5", label: "Klasa 5" },
  { value: "kl6", label: "Klasa 6" },
  { value: "kl7", label: "Klasa 7" },
  { value: "kl8", label: "Klasa 8" },
];

// Każdy termin ma "classes": tablicę tagów klas (patrz CHILD_CLASS_OPTIONS), dla których jest dostępny,
// albo "all", jeśli termin nie jest przypisany do konkretnej klasy (np. zajęcia indywidualne).
const COURSES = [
  {
    id: "nauka-czytania",
    track: "podstawowa",
    title: "Nauka czytania",
    description: "Pomagamy przedszkolakom pokochać czytanie - w małych grupach, we własnym tempie, bez presji i porównywania z innymi dziećmi.",
    ageGroup: "5-6 lat",
    image: "/assets/images/nauka-czytania.webp",
    forWhom: [
      "Przedszkolaków w wieku 5-6 lat, którzy dopiero zaczynają przygodę z literami",
      "Dzieci, które potrzebują więcej czasu i cierpliwości w nauce czytania",
    ],
    whatTheyLearn: [
      "Rozpoznawanie liter i łączenie ich w sylaby",
      "Płynne czytanie prostych wyrazów i zdań",
      "Pewność siebie w kontakcie z tekstem",
    ],
    faq: [
      { question: "Czy moje dziecko musi już znać litery?", answer: "Nie, zajęcia są dopasowane do punktu startowego każdego dziecka - zaczynamy od podstaw, w tempie dopasowanym do przedszkolaka." },
      { question: "Ile trwają pojedyncze zajęcia?", answer: "Spotkania trwają 50-60 minut, w zależności od grupy wiekowej." },
      { question: "Co zabrać na pierwsze zajęcia?", answer: "Wystarczy dobry humor - książeczki i karty pracy przygotowujemy na miejscu." },
    ],
    schedule: [
      { time: "poniedziałek 16:40–17:40", classes: ["przedszkole-6"] },
      { time: "wtorek 16:00–17:00", classes: ["przedszkole-5"] },
    ],
  },
  {
    id: "gemini-ai",
    track: "podstawowa",
    title: "Zajęcia z Gemini AI",
    description: "Bezpieczne i świadome wprowadzenie w świat sztucznej inteligencji - dzieci uczą się korzystać z AI z ciekawością, a nie obawą.",
    ageGroup: "5-14 lat",
    image: "/assets/images/gemini-ai.webp",
    forWhom: [
      "Dzieci ciekawych nowych technologii, w wieku od przedszkola po klasę 8",
      "Uczniów, którzy chcą oswoić się ze sztuczną inteligencją w bezpieczny, kontrolowany sposób",
    ],
    whatTheyLearn: [
      "Podstawy działania narzędzi AI i sztucznej inteligencji",
      "Świadome i odpowiedzialne korzystanie z nowych technologii",
      "Kreatywne wykorzystanie AI do nauki i zabawy",
    ],
    faq: [
      { question: "Czy moje dziecko musi mieć wcześniejsze doświadczenie z komputerem?", answer: "Nie, zajęcia zaczynają się od podstaw i są dostosowane do wieku uczestnika." },
      { question: "Czy to są zajęcia grupowe, czy indywidualne?", answer: "Oferujemy oba warianty - grupę w poniedziałki oraz zajęcia indywidualne w czwartki, do wyboru podczas zapisu." },
      { question: "Co zabrać na pierwsze zajęcia?", answer: "Nic - sprzęt i materiały do zajęć zapewniamy na miejscu, dziecko przynosi tylko ciekawość." },
    ],
    schedule: [
      { time: "poniedziałek 15:30–16:30", note: "grupa", classes: "all" },
      { time: "czwartek 15:30–16:30", note: "indywidualnie", classes: "all" },
      { time: "czwartek 16:40–17:40", note: "indywidualnie", classes: "all" },
      { time: "czwartek 17:40–18:40", note: "indywidualnie", classes: "all" },
    ],
  },
  {
    id: "niemiecki-sp",
    track: "podstawowa",
    title: "Język niemiecki",
    description: "Nauka języka niemieckiego w małych grupach dopasowanych do wieku i poziomu - od zerówki po klasę 8, z możliwością zajęć indywidualnych.",
    ageGroup: "6-14 lat",
    image: "/assets/images/niemiecki-sp.webp",
    forWhom: [
      "Uczniów od zerówki po klasę 8, w grupach dopasowanych do wieku i poziomu",
      "Dzieci zaczynających naukę niemieckiego od podstaw oraz te, które chcą go rozwijać",
    ],
    whatTheyLearn: [
      "Podstawowe słownictwo i zwroty w języku niemieckim",
      "Swobodną komunikację dopasowaną do poziomu grupy",
      "Gramatykę wprowadzaną stopniowo, bez stresu",
    ],
    faq: [
      { question: "Jak dobierane są grupy?", answer: "Grupy są dopasowane do wieku i poziomu językowego - od grupy początkującej (zerówka i klasy 1-3) po zaawansowane klasy 7-8." },
      { question: "Co jeśli mój termin nie pasuje do żadnej z grup?", answer: "Oferujemy też zajęcia indywidualne w piątki, po wcześniejszym umówieniu terminu." },
      { question: "Co zabrać na pierwsze zajęcia?", answer: "Wystarczy zeszyt i długopis - resztę materiałów do nauki zapewniamy na miejscu." },
    ],
    schedule: [
      { time: "poniedziałek 17:50–18:50", classes: ["kl7"] },
      { time: "środa 17:50–18:50", classes: ["kl7"] },
      { time: "środa 17:50–18:50", note: "grupa początkująca", classes: ["przedszkole-6", "kl1", "kl2", "kl3"] },
      { time: "czwartek 17:50–18:50", classes: ["kl8"] },
      { time: "piątek 16:40–17:40", note: "grupa początkująca", classes: ["kl4", "kl5", "kl6"] },
      { time: "piątek 17:50–18:50", note: "indywidualnie, po wcześniejszym umówieniu", classes: "all" },
    ],
  },
  {
    id: "wyrownawcze-polski",
    track: "podstawowa",
    title: "Zajęcia wyrównawcze - język polski",
    description: "Dodatkowe wsparcie z języka polskiego dla uczniów klas 1-3 - nadrabiamy zaległości i budujemy pewność siebie w czytaniu i pisaniu.",
    ageGroup: "7-9 lat",
    image: "/assets/images/wyrownawcze-polski.webp",
    forWhom: [
      "Uczniów klas 1-3, którzy potrzebują dodatkowego wsparcia z języka polskiego",
      "Dzieci chcące nadrobić zaległości lub utrwalić materiał ze szkoły",
    ],
    whatTheyLearn: [
      "Poprawną pisownię i ortografię",
      "Czytanie ze zrozumieniem",
      "Pewność siebie w wypowiadaniu się i pisaniu",
    ],
    faq: [
      { question: "Czy zajęcia zastępują naukę w szkole?", answer: "Nie, to dodatkowe wsparcie uzupełniające materiał szkolny, dopasowane do klasy dziecka." },
      { question: "Jak długo trwają zajęcia?", answer: "Spotkania trwają 60 minut, raz w tygodniu." },
      { question: "Co zabrać na pierwsze zajęcia?", answer: "Wystarczy zeszyt szkolny i chęć do nauki - resztę materiałów zapewniamy na miejscu." },
    ],
    schedule: [
      { time: "środa 16:40–17:40", classes: ["kl3"] },
      { time: "środa 17:00–18:00", classes: ["kl1"] },
      { time: "czwartek 16:00–17:00", classes: ["kl2"] },
    ],
  },
  {
    id: "wyrownawcze-matematyka",
    track: "podstawowa",
    title: "Zajęcia wyrównawcze - matematyka",
    description: "Zajęcia wyrównawcze i rozwijające zainteresowania matematyczne dla uczniów klas 1-3 - bez stresu i presji.",
    ageGroup: "7-9 lat",
    image: "/assets/images/wyrownawcze-matematyka.webp",
    forWhom: [
      "Uczniów klas 1-3 potrzebujących wsparcia z matematyki",
      "Dzieci, które chcą rozwijać zainteresowania matematyczne bez presji i stresu",
    ],
    whatTheyLearn: [
      "Podstawowe działania matematyczne i logiczne myślenie",
      "Rozwiązywanie zadań tekstowych krok po kroku",
      "Pewność siebie w pracy z liczbami",
    ],
    faq: [
      { question: "Czy zajęcia są tylko dla uczniów mających trudności z matematyką?", answer: "Nie, są też dla dzieci, które chcą rozwijać swoje zainteresowania matematyczne - dopasowujemy poziom indywidualnie." },
      { question: "Jak liczna jest grupa?", answer: "Zajęcia prowadzimy w kameralnych grupach dopasowanych do klasy, dzięki czemu każde dziecko ma czas na zadawanie pytań." },
      { question: "Co zabrać na pierwsze zajęcia?", answer: "Wystarczy piórnik i zeszyt - resztę pomocy naukowych zapewniamy na miejscu." },
    ],
    schedule: [
      { time: "wtorek 16:40–17:40", classes: ["kl3"] },
      { time: "czwartek 16:40–17:40", classes: ["kl1"] },
      { time: "piątek 17:00–18:00", classes: ["kl2"] },
    ],
  },
  {
    id: "tus",
    track: "podstawowa",
    title: "TUS - trening umiejętności społecznych",
    description: "Dzieci uczą się współpracy, empatii i radzenia sobie z emocjami w grupie rówieśniczej - w praktyce, poprzez zabawę i wspólne ćwiczenia.",
    ageGroup: "5-14 lat",
    image: "/assets/images/tus.webp",
    forWhom: [
      "Dzieci w wieku 5-14 lat, które chcą rozwijać kompetencje społeczne",
      "Uczniów potrzebujących wsparcia w budowaniu relacji z rówieśnikami",
    ],
    whatTheyLearn: [
      "Rozpoznawanie i wyrażanie emocji",
      "Efektywną komunikację i współpracę w grupie",
      "Radzenie sobie w trudnych sytuacjach społecznych",
    ],
    faq: [
      { question: "Czym różnią się te zajęcia od zwykłych zajęć w szkole?", answer: "To zajęcia w małej grupie, skupione na praktycznych ćwiczeniach komunikacji, współpracy i radzenia sobie z emocjami." },
      { question: "Dla jakich dzieci są te zajęcia?", answer: "Dla wszystkich dzieci w wieku 5-14 lat, które chcą rozwijać kompetencje społeczne - nie tylko dla dzieci z trudnościami." },
      { question: "Co zabrać na pierwsze zajęcia?", answer: "Wystarczy dobry humor i otwartość na nowe znajomości - resztę materiałów zapewniamy na miejscu." },
    ],
    schedule: [
      { time: "wtorek 17:30–18:30", classes: "all" },
    ],
  },
  {
    id: "matematyka-programowanie",
    track: "podstawowa",
    title: "Zajęcia matematyczne z elementami programowania",
    description: "Nauka matematyki połączona z pierwszymi krokami w programowaniu - od przedszkola po klasę 3.",
    ageGroup: "5-9 lat",
    image: "/assets/images/matematyka-programowanie.webp",
    forWhom: [
      "Przedszkolaków w wieku 5-6 lat ciekawych matematyki i technologii",
      "Uczniów klas 1-3, którzy chcą rozwijać umiejętności matematyczne i pierwsze kroki w programowaniu",
    ],
    whatTheyLearn: [
      "Podstawy liczenia i logicznego myślenia",
      "Pierwsze, zabawowe kroki w programowaniu",
      "Rozwiązywanie prostych zagadek i łamigłówek",
    ],
    faq: [
      { question: "Czy dziecko musi umieć liczyć?", answer: "Nie, zajęcia wprowadzają podstawy liczenia i logicznego myślenia od zera, w formie zabawy." },
      { question: "Czy używacie komputerów?", answer: "Tak, w przystępnej, dopasowanej do wieku formie - pierwsze kroki w programowaniu wprowadzamy stopniowo, poprzez zabawę." },
      { question: "Co zabrać na pierwsze zajęcia?", answer: "Wystarczy dobry humor i ciekawość - resztę materiałów zapewniamy na miejscu." },
    ],
    schedule: [
      { time: "wtorek 17:10–18:10", classes: ["przedszkole-5", "przedszkole-6"] },
      { time: "czwartek 17:30–18:30", note: "grupa rozwijająca", classes: ["kl1", "kl2", "kl3"] },
    ],
  },
  {
    id: "terapia-psychologiczna",
    track: "podstawowa",
    title: "Terapia psychologiczna",
    description: "Indywidualne spotkania z psychologiem w bezpiecznej, przyjaznej atmosferze - wsparcie dopasowane do potrzeb dziecka lub nastolatka, po wcześniejszym umówieniu terminu.",
    ageGroup: "5-14 lat",
    image: "/assets/images/terapia-psychologiczna.webp",
    forWhom: [
      "Dzieci i młodzieży potrzebujących indywidualnego wsparcia psychologicznego",
      "Rodzin szukających profesjonalnej pomocy w rozwoju emocjonalnym dziecka",
    ],
    whatTheyLearn: [
      "Rozumienie i regulację własnych emocji",
      "Budowanie poczucia własnej wartości",
      "Strategie radzenia sobie ze stresem i trudnościami",
    ],
    faq: [
      { question: "Jak umówić termin spotkania?", answer: "Po zapisie skontaktujemy się, aby ustalić dogodny termin indywidualnej wizyty." },
      { question: "Czy spotkania są indywidualne?", answer: "Tak, to indywidualne spotkania dostosowane do potrzeb dziecka lub nastolatka." },
      { question: "Czy potrzebne jest skierowanie?", answer: "Nie, skierowanie nie jest wymagane - wystarczy zgłoszenie poprzez formularz zapisu." },
    ],
    schedule: [{ time: "czwartek 16:00–16:50", note: "po wcześniejszym umówieniu", classes: "all" }],
  },
  {
    id: "terapia-rodzinna",
    track: "podstawowa",
    title: "Terapia rodzinna",
    description: "Wsparcie terapeutyczne dla całej rodziny w trudnych momentach - pomagamy odbudować komunikację i wzajemne zrozumienie, po wcześniejszym umówieniu terminu.",
    ageGroup: "Cała rodzina",
    image: "/assets/images/terapia-rodzinna.webp",
    forWhom: [
      "Rodzin szukających wsparcia w rozwiązywaniu trudności i konfliktów",
      "Rodziców i dzieci, którzy chcą poprawić wzajemną komunikację",
    ],
    whatTheyLearn: [
      "Lepszą komunikację między członkami rodziny",
      "Sposoby rozwiązywania konfliktów",
      "Wzajemne zrozumienie i budowanie więzi",
    ],
    faq: [
      { question: "Czy na spotkanie musi przyjść cała rodzina?", answer: "Zakres uczestników ustalamy indywidualnie, w zależności od potrzeb - może to być cała rodzina lub wybrani jej członkowie." },
      { question: "Jak umówić termin spotkania?", answer: "Po zapisie skontaktujemy się, aby ustalić dogodny termin." },
      { question: "Ile trwa spotkanie?", answer: "Pojedyncza sesja trwa 50 minut - w razie potrzeby wspólnie ustalamy dalszy plan spotkań." },
    ],
    schedule: [{ time: "czwartek 17:00–17:50", note: "po wcześniejszym umówieniu", classes: "all" }],
  },
];

const TESTIMONIALS = [
  {
    quote: "Zosia w końcu polubiła czytanie - zajęcia są prowadzone z ogromną cierpliwością i ciepłem.",
    author: "Anna",
    role: "mama Zosi (6 lat)",
  },
  {
    quote: "Kuba nabrał pewności siebie w kontaktach z rówieśnikami - zajęcia TUS naprawdę mu w tym pomogły.",
    author: "Marek",
    role: "tata Kuby (9 lat)",
  },
  {
    quote: "Ola przełamała barierę i w końcu nie boi się mówić po niemiecku na zajęciach.",
    author: "Iwona",
    role: "mama Oli (klasa 5)",
  },
];

const FAQS = [
  {
    question: "Jak wygląda proces zapisu na zajęcia?",
    answer: "Wybierasz interesujące zajęcia, klikasz \"Zapisz się\" przy wybranej karcie i wypełniasz krótki formularz. Skontaktujemy się z Tobą, aby ustalić szczegóły.",
  },
  {
    question: "Dla jakich grup wiekowych prowadzicie zajęcia?",
    answer: "Obecnie prowadzimy zajęcia dla dzieci w wieku od 5 do 14 lat - od przedszkola po szkołę podstawową. Oferta dla uczniów liceum i technikum jest w przygotowaniu.",
  },
  {
    question: "Gdzie odbywają się zajęcia?",
    answer: "Zajęcia odbywają się stacjonarnie w naszej placówce przy ul. Zamkowej 39 w Pabianicach.",
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
