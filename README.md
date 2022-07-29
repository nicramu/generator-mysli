<p align="center">
<img src="https://github.com/nicramu/generator-mysli/blob/master/data/mockup full.png">
</p>

# [wersja web do testowania](https://nicramu.github.io/generator-mysli/) (APK jest za duże dla githuba(33,6MB))

# Generator myśli – o projekcie
Czyli projekt-eksperyment-żart który miał na celu generowanie losowych zdań przypominających cytaty/złote myśli. W myśl zasady – im bardziej abstrakcyjnie, tym śmieszniej. Pierwsza wersja opierała się na predefiniowanych ręcznie fragmentach tekstu (wersja dostępna po ustawieniu przełącznika na „semi random”). Ta wersja złożona była z jednego obiektu, skonstruowanego w następujący sposób:
```
{
"podmiot": ["najstarsi górale", "pamiętaj", "mój ojciec", "miłość", "mądrość", "stare chińskie przysłowie"],
"orzeczenie1": ["wiedzą", "wie", "mówią", "mówi", "zawsze powtarza"],
"łącznik": ["że", "-"],
"dookreślenie": ["wszystko", "życie", "szczęście", "dobro", "zło", "ludzie"],
"orzeczenie2": ["płynie", "gówno", "warte jest poświęceń", "nie warte jest poświęceń", "to nie wszystko", "to wszystko", "bywa różne"]
}
```
Nie dawało to jednak wiele kombinacji, a dodawanie kolejnych możliwości ręcznie nie miało sensu. Potrzebny był element chaosu.
## Element chaosu
Od razu wpadłem na pomysł wykorzystania słownika. Okazało się jednak że ciężko znaleźć taki słownik w internecie. Spodziewałem się pliku JSON z podziałem na czasowniki z deklinacją, rzeczowniki z rodzajami, przymiotniki z rodzajami itd., ale okazało się że coś takiego nie istnieje, albo nie jest ogólnie dostępne. Niemniej jednak podjąłem próbę okiełznania [tego pliku](https://sjp.pl/sl/odmiany/). Ale mimo wielu prób z regexami nie udało mi się uzyskać odpowiednio ustrukturyzowanych danych. Myślę że skomplikowane zasady języka polskiego i liczne wyjątki wykluczają możliwość stworzenia takiej bazy słownikowej zupełnie automatycznie – wymagałoby to dużo manualnej pracy. Do tego słownik zawiera mnóstwo słów które w codziennym życiu nie są używane. Są to zapożyczenia, terminologia fachowa, archaizmy itp.
## Walka z entropią
Natrafiłem jeszcze na coś takiego jak listy frekwencyjne – czyli zbiór najpopularniejszych słów z danego języka. Na przykład dostępne [tutaj](https://pl.wiktionary.org/wiki/Kategoria:Listy_frekwencyjne). Ja użyłem listy autorstwa Jerzego Kazojća (na licencji CC BY SA – [plik dołączam do wglądu)](data/lista-frekwencyjna.pdf). Wciąż jednak musiałem wyfiltrować poszczególne części zdania, co jak już wspomniałem nie jest łatwe, dlatego czasem (często) przymiotniki nie mają uzgodnionych rodzajów do podmiotu. Ale przecież absurdalne = śmieszne, więc tak już zostało. 

Ostatecznie baza słów wygląda następująco:
- Przymiotniki rodzaju męskiego: 311 słów
- Przymiotniki rodzaju żeńskiego: 311
- Podmioty: 178
- Orzeczenia: 2534
# Użyte technologie:
React native (aplikacja działa na Androidzie, iOS i w przeglądarce)
- expo
- eas build
- hooki: useRef, useState, useEffect
- react-native-view-shot
- expo-sharing
- react-navigation
