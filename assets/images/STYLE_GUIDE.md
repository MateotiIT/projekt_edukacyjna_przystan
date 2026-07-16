# Styl zdjęć AI — Edukacyjna Przystań

Ten dokument opisuje kierunek stylistyczny dla zdjęć generowanych przez AI (np. w ChatGPT) oraz
zawiera gotowe prompty do wklejenia — po jednym na każde miejsce na stronie, wraz z proporcjami
obrazu i nazwą pliku do zapisania.

## Kierunek: fotorealistyczne, ciepłe, edytorialne

Marka ma już swój płaski, ilustrowany akcent (maskotka-stworek, kolorowe „bloby" w hero). Zdjęcia
mają być tego świadomym przeciwieństwem — **prawdziwie wyglądającą fotografią**, nie kolejną
ilustracją. To standardowe podejście w edukacji: ilustracja buduje charakter marki, zdjęcia budują
zaufanie.

**Zasady, których trzymać się w każdym prompt-cie:**

- **Światło**: naturalne, ciepłe (złota godzina / miękkie światło z okna), nigdy zimne/fluorescencyjne biurowe.
- **Kolorystyka**: stonowana, ciepła paleta neutralna (drewno, kremowe ściany) z delikatnymi akcentami
  kolorów marki przez rekwizyty/ubiór — niebieski (`#2F6FED`), koralowy (`#FF6F59`), żółty (`#FFC93C`).
  Nie wymuszać kolorów na całym kadrze, wystarczy jeden akcent.
- **Kompozycja**: kadry „w trakcie działania" (dziecko coś robi, wskazuje, śmieje się), nie sztywne
  pozowane „patrz w obiektyw jak do dowodu".
- **Twarze**: unikać bardzo bliskich, wyostrzonych zbliżeń na twarze dzieci — to miejsce, w którym
  generatory AI najczęściej „się psują" (uncanny valley). Wolisz plan średni, ujęcia z boku, od tyłu,
  dłonie na materiałach, kontekst otoczenia.
- **Wiek**: dopasowany do faktycznej grupy wiekowej kursu (patrz prompty niżej).
- **Miejsce**: to ma być sala/placówka zajęć pozalekcyjnych, nie mieszkanie ani salon w domu. Każdy
  prompt zawiera wprost frazę „at a children's after-school activity center" i „not a home setting" -
  bez tego generator domyślnie robi wnętrza domowe.
- **Wygląd**: jasna karnacja („light skin tone") - dopisane w każdym prompt-cie, w którym pojawiają
  się osoby.
- **Spójność**: to samo ciepłe wnętrze (drewniane tony, rośliny, jasne ściany) w każdym zdjęciu, żeby
  całość wyglądała jak jedna sesja zdjęciowa w placówce, a nie zbiór przypadkowych stocków.
- **Zajęcia wrażliwe** (terapia): nigdy nie portretować dziecka „w trakcie terapii" wprost — to może
  wyglądać nachalnie nawet jako wygenerowane zdjęcie. Zamiast tego: kojące wnętrze, przedmioty, dłonie.

## Jak używać promptów w ChatGPT

Każdy prompt niżej ma na końcu w nawiasie informację o proporcjach, np. `(kwadrat 1:1)` lub
`(poziomy 3:2)`. ChatGPT w oknie czatu generuje obrazy w tych trzech formatach: **kwadrat (1:1)**,
**poziomy/landscape (3:2)** i **pionowy/portrait (2:3)**. Wklejając prompt, po prostu dopisz na
końcu wiadomości np. „Wygeneruj w formacie kwadratowym" albo „w formacie poziomym" — ChatGPT
respektuje to polecenie.

Po wygenerowaniu zapisz plik dokładnie pod nazwą podaną przy każdym prompt-cie (patrz też sekcja
„Konwencja plików" na końcu).

## Gotowe prompty

### 1. Hero (strona główna)

- **Plik:** `assets/images/hero.jpg`
- **Proporcje:** kwadrat (1:1)

```
a smiling 8-year-old child, light skin tone, holding an open picture book, sitting
by a sunlit window in a classroom at a children's after-school activity center, warm golden light,
candid editorial photography style, genuine joyful expression, shallow depth of
field, shot on 50mm lens, warm color grade, high detail, no text overlays, no logos,
educational center setting, not a home setting
(square image, 1:1 aspect ratio)
```

### 2. Nauka czytania (5-6 lat)

- **Plik:** `assets/images/courses/nauka-czytania.jpg`
- **Proporcje:** poziomy (3:2)

```
a 5-year-old child, light skin tone, pointing at letters in a colorful picture book,
sitting on a rug in a cozy reading corner of a classroom at a children's after-school activity center,
warm wooden shelving with books in the background, natural window light, candid
editorial photography style, genuine curious expression, shallow depth of field,
shot on 50mm lens, warm golden color grade, high detail, no text overlays, no logos,
educational center setting, not a home setting
(landscape image, 3:2 aspect ratio)
```

### 3. Zajęcia z Gemini AI (5-14 lat)

- **Plik:** `assets/images/courses/gemini-ai.jpg`
- **Proporcje:** poziomy (3:2)

```
an 8-year-old child, light skin tone, looking curiously at a tablet screen with a
friendly young teacher, also light skin tone, pointing something out beside them, in a bright classroom at a children's after-school
activity center, warm sunlit room with plants, candid editorial photography style,
genuine curious smile, shallow depth of field, shot on 50mm lens, warm golden color
grade, high detail, no text overlays, no logos, no visible screen content,
educational center setting, not a home setting
(landscape image, 3:2 aspect ratio)
```

### 4. Język niemiecki (6-14 lat)

- **Plik:** `assets/images/courses/niemiecki-sp.jpg`
- **Proporcje:** poziomy (3:2)

```
two children around 9 years old, light skin tone, sitting across a wooden table with
flashcards and an open notebook, mid-conversation, in a warm sunlit classroom corner with plants at a
children's after-school activity center, candid editorial photography style, genuine
engaged expressions, shallow depth of field, shot on 50mm lens, warm golden color
grade, high detail, no text overlays, no logos, educational center setting, not a
home setting
(landscape image, 3:2 aspect ratio)
```

### 5. Zajęcia wyrównawcze - język polski (7-9 lat)

- **Plik:** `assets/images/courses/wyrownawcze-polski.jpg`
- **Proporcje:** poziomy (3:2)

```
a 7-year-old child, light skin tone, writing carefully in a notebook at a wooden desk
in a classroom at a children's after-school activity center, close on hands and notebook with the
child's smiling face softly out of focus behind, warm natural light, candid
editorial photography style, shallow depth of field, shot on 50mm lens, warm golden
color grade, high detail, no text overlays, no logos, educational center setting,
not a home setting
(landscape image, 3:2 aspect ratio)
```

### 6. Zajęcia wyrównawcze - matematyka (7-9 lat)

- **Plik:** `assets/images/courses/wyrownawcze-matematyka.jpg`
- **Proporcje:** poziomy (3:2)

```
an 8-year-old child, light skin tone, arranging colorful counting blocks on a wooden
table in a classroom at a children's after-school activity center, focused and smiling, warm
sunlit room, candid editorial photography style, genuine engaged expression,
shallow depth of field, shot on 50mm lens, warm golden color grade, high detail,
no text overlays, no logos, educational center setting, not a home setting
(landscape image, 3:2 aspect ratio)
```

### 7. TUS - trening umiejętności społecznych (5-14 lat)

- **Plik:** `assets/images/courses/tus.jpg`
- **Proporcje:** poziomy (3:2)

```
a small group of four children, light skin tone, sitting in a circle on a rug in a
classroom at a children's after-school activity center, laughing together during a cooperative
game, warm sunlit room, candid editorial photography style, genuine joyful
expressions, shallow depth of field, shot on 35mm lens, warm golden color grade,
high detail, no text overlays, no logos, educational center setting, not a home
setting
(landscape image, 3:2 aspect ratio)
```

### 8. Zajęcia matematyczne z elementami programowania (5-9 lat)

- **Plik:** `assets/images/courses/matematyka-programowanie.jpg`
- **Proporcje:** poziomy (3:2)

```
a 6-year-old child, light skin tone, playing with a simple colorful coding toy
(wooden blocks with directional arrows), sitting on the floor in a classroom at a children's
after-school activity center, curious smile, warm sunlit room, candid editorial
photography style, shallow depth of field, shot on 50mm lens, warm golden color
grade, high detail, no text overlays, no logos, educational center setting, not a
home setting
(landscape image, 3:2 aspect ratio)
```

### 9. Terapia psychologiczna

*Bez dosłownego portretu dziecka - patrz zasady wyżej.*

- **Plik:** `assets/images/courses/terapia-psychologiczna.jpg`
- **Proporcje:** poziomy (3:2)

```
a cozy counseling room corner at a children's after-school activity center, soft
armchair, warm blanket, a plush toy and a small potted plant, soft natural window
light, warm and calming atmosphere, editorial interior photography style, shallow
depth of field, warm golden color grade, high detail, no people, no text overlays,
no logos, educational center setting, not a home setting
(landscape image, 3:2 aspect ratio)
```

### 10. Terapia rodzinna

*Bez dosłownego portretu dziecka - patrz zasady wyżej.*

- **Plik:** `assets/images/courses/terapia-rodzinna.jpg`
- **Proporcje:** poziomy (3:2)

```
a parent and child, light skin tone, sitting side by side on a cozy sofa in a warm
counseling room at a children's after-school activity center, hands gently clasped, warm natural light,
soft focus on a shared moment rather than faces, editorial photography style, warm
golden color grade, shallow depth of field, high detail, no text overlays, no logos,
educational center setting, not a home setting
(landscape image, 3:2 aspect ratio)
```

### 11. Strona Misja — zdjęcie placówki (NIE zdjęcie „zespołu")

Świadomie unikamy promptu w stylu „nasz zespół" — wygenerowany fałszywy „zespół" ludzi, którzy
nie istnieją, byłby wprowadzający w błąd. Zamiast tego pokazujemy samą przestrzeń:

- **Plik:** `assets/images/misja-przestrzen.jpg`
- **Proporcje:** poziomy (3:2)

```
a warm, inviting empty classroom corner at a children's after-school activity center,
wooden shelves full of books, a reading rug, soft natural window light, plants,
colorful but tasteful details, no people, editorial interior photography style,
warm golden color grade, shallow depth of field, high detail, no text overlays,
no logos, educational center setting, not a home setting
(landscape image, 3:2 aspect ratio)
```

## Konwencja plików

Docelowe zdjęcia zapisuj lokalnie (nie hotlinkuj z zewnętrznych serwisów) dokładnie pod nazwami
podanymi przy każdym prompt-cie powyżej, czyli w strukturze:

```
assets/images/hero.jpg
assets/images/misja-przestrzen.jpg
assets/images/courses/nauka-czytania.jpg
assets/images/courses/gemini-ai.jpg
assets/images/courses/niemiecki-sp.jpg
assets/images/courses/wyrownawcze-polski.jpg
assets/images/courses/wyrownawcze-matematyka.jpg
assets/images/courses/tus.jpg
assets/images/courses/matematyka-programowanie.jpg
assets/images/courses/terapia-psychologiczna.jpg
assets/images/courses/terapia-rodzinna.jpg
```

Przed dodaniem do repo: skompresuj (np. do ok. 150-300 KB przy szerokości ~1200 px) i zapisz jako
`.jpg` lub `.webp`. Nazwy plików odpowiadają `id` każdego kursu w `js/data.js`, dzięki czemu podmiana
w kodzie to tylko zmiana pola `image` z adresu Unsplash na lokalną ścieżkę. Zobacz `README.md` w tym
folderze po dalsze instrukcje.
