# Repositář s vyplněním zadaním (časově 3-4h):
## Output log:
====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        14.3.3                                                                         │
  │ Browser:        Chrome 136 (headless)                                                          │
  │ Node Version:   v22.15.1 (C:\Program Files\nodejs\node.exe)                                    │
  │ Specs:          1 found (testCases.cy.js)                                                      │
  │ Searched:       C:\Users\Tomas\Documents\Personal\zadani-tester\cypress\e2e\testCases.cy.js    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  testCases.cy.js                                                                 (1 of 1)


  Contact page
    √ Create contact on: Cz domain (13675ms)
    √ Create contact on: Com domain (13921ms)
    √ Create contact on: Sk domain (14063ms)


  3 passing (49s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     49 seconds                                                                       │
  │ Spec Ran:     testCases.cy.js                                                                  │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  testCases.cy.js                          00:49        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:49        3        3        -        -        -

Done in 58.54s.
-------------------------------------------------------------------------
# QA úkol – Testování sekce kontaktů napříč doménami

## 🧩 Intro

Tvým úkolem je připravit E2E testy pro **sekci kontaktů** v aplikaci, která běží na několika doménách.
Zadání není zaměřené na pokrytí celé funkčnosti kontaktů, ale spíše na to, **jak zvládneš vyřešit odlišnosti mezi doménami, strukturovat kód a pracovat s testovacími nástroji.**

## 🌍 Domény k testování

- `staging.fakturaonline.cz`
- `staging.invoiceonline.com`
- `staging.fakturaonline.sk`

Každá z těchto domén může mít **odlišné pole ve formuláři kontaktů**, a to je klíčová část zadání.

## ✅ Cíl úkolu

Cílem je ověřit, **jak přistupuješ ke cross-domain testování**, když se jednotlivé verze formuláře liší.
Nepotřebujeme plné pokrytí všech funkcionalit, ale chceme vidět:

- Jak strukturuješ testy, když se liší pole u kontaktů
- Jak odděluješ doménově specifickou logiku
- Jak používáš selektory a jak čteš HTML (bez test IDs)
- Jak přemýšlíš o znovupoužitelném kódu a čisté organizaci
- Jak používáš fixtures, config a page objekty

## 🧪 Zadání

- Forkni si projekt a začni pracovat. Výsledkem je repozitář s tvým řešením.
- Zaměř se na **vytvoření kontaktu napříč těmito doménami**. Ne všechny formuláře mají stejná pole.
- Ukaž, jak přistupuješ k rozdílným strukturám (např. některé domény mají „DIČ“, jiné ne).
- Použij vhodnou strukturu (např. page objekty), aby byl kód dobře čitelný a udržitelný.
- Využij fixtures a config k oddělení dat pro jednotlivé domény.
- Použij Cypress (TypeScript/JavaScript).
- Zajímá nás hlavně forma, ne rozsah.

## 💡 Bonus (nepovinné)

- Vytvoř i stručné poznámky, co by se případně dalo otestovat dál.
- Pokud máš zkušenosti s flaky testy nebo CI, klidně přidej poznámku, jak bys přistupoval k těmto věcem.

## 🧠 Co chceme vidět?

- DRY a čitelný kód
- Jasnou strukturu a rozdělení podle domén nebo specifik
- Dobrou práci se selektory
- Schopnost navrhnout přizpůsobitelné testy
- Udržitelnost a opakovatelnost testů

## 🕒 Časový limit

- Úkol omez na max. **4 hodiny práce**
- Není důležité vše „dodělat“, ale ukázat přístup, který bys použil
