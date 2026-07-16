# Zdjęcia

Zdjęcia na stronie to obrazy wygenerowane przez AI (zgodnie z kierunkiem stylu opisanym w
`STYLE_GUIDE.md`), zapisane lokalnie w tym folderze:

| Plik | Miejsce użycia |
| --- | --- |
| `hero.webp` | Strona główna - zdjęcie w hero (kadr kołowy) |
| `misja-przestrzen.webp` | Podstrona Misja - zdjęcie placówki |
| `nauka-czytania.webp` | Kurs: Nauka czytania |
| `gemini-ai.webp` | Kurs: Zajęcia z Gemini AI |
| `niemiecki-sp.webp` | Kurs: Język niemiecki |
| `wyrownawcze-polski.webp` | Kurs: Zajęcia wyrównawcze - język polski |
| `wyrownawcze-matematyka.webp` | Kurs: Zajęcia wyrównawcze - matematyka |
| `tus.webp` | Kurs: TUS - trening umiejętności społecznych |
| `matematyka-programowanie.webp` | Kurs: Zajęcia matematyczne z elementami programowania |
| `terapia-psychologiczna.webp` | Kurs: Terapia psychologiczna |
| `terapia-rodzinna.webp` | Kurs: Terapia rodzinna |

Zdjęcia kursów są referencjonowane w `js/data.js` (pole `image` każdego kursu, ścieżka bezwzględna
od korzenia domeny, np. `/assets/images/nauka-czytania.webp`) i automatycznie trafiają na kartę
kursu, stronę `/kursy.html` oraz odpowiednią podstronę w `kursy/`. Zdjęcie hero jest wpięte wprost
w `index.html` (oraz jako domyślny `og:image`/`twitter:image` na wszystkich stronach).

## Podmiana / dodanie nowego zdjęcia kursu

1. Wygeneruj obraz wg promptu ze `STYLE_GUIDE.md` (lub dopisz nowy prompt, jeśli to nowy kurs).
2. Zapisz plik w tym folderze pod nazwą odpowiadającą `id` kursu z `js/data.js`.
3. Jeśli to zdjęcie kursu: uaktualnij pole `image` w `js/data.js`, jeśli trzeba (nazwa pliku powinna
   się już zgadzać), i przegeneruj podstrony w `kursy/` (patrz `scripts/generate-course-pages.mjs`
   lub aktualny generator, jeśli został przeniesiony do repo).
4. Jeśli to zdjęcie hero: podmień `<img>` w `index.html` oraz `og:image`/`twitter:image` na
   wszystkich stronach (obecnie wszystkie wskazują na `hero.webp`).

## Uwagi

- Trzymamy się stylu opisanego w `STYLE_GUIDE.md` (ciepłe, fotorealistyczne, edytorialne zdjęcia,
  w placówce, nie w domu) - nowe zdjęcia powinny wyglądać jak część tej samej sesji.
- Rozmiar plików: obecne wahają się między ~30 a ~65 KB - to dobry punkt odniesienia dla kolejnych.
