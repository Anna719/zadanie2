# Description

Vytváranie rôznych testovacích scenárov pre formulár webovej stránky [https://www.bart.sk/mam-zaujem-test](https://www.bart.sk/mam-zaujem-test).

## Installation

Na testovanie som použila framework [Cypress](https://www.cypress.io/).
Aplikáciu môžeme stiahnuť alebo nainštalovať do WebStormu (v mojom prípade) pomocou príkazu:

```bash
npm install cypress --save-dev
```

## Process

Najprv som vytvorila súbor s názvom : uloha2.spec.js.
Cesta k súboru:
```bash
Zadanie2/cypress/integration/examples/uloha2.spec.js
```
## Scenarios

Vytvorila som automatizované E2E testy, ktoré pokryjú nasledujúce scenáre:
- ako použivateľ môžem kontaktovať bart.sk prostredníctvom online formulára na: [https://www.bart.sk/mam-zaujem-test](https://www.bart.sk/mam-zaujem-test);
- ako používateľ po úspešnom odoslaní formulára sa mi o tom zobrazí informácia, aby som vedel, že moja požiadavka bola doručená do bart.sk;
- ako používateľ v prípade, že som nevyplnil niektorý údaj zobrazí sa mi o tom informácia aby som vedel údaj doplniť alebo upraviť.

Bolo vytvorených 11 testov(7 úspešných a 4 neúspešných), ktoré testovali slovenskú [https://www.bart.sk/mam-zaujem-test](https://www.bart.sk/mam-zaujem-test) aj anglickú [https://www.bart.sk/en/interested-in-test](https://www.bart.sk/en/interested-in-test) verziu webovej stránky.




