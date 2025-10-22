
## <span style="background-color: yellow; padding: 10px; width: 51px; height: 20px; border-radius: .5rem; margin-right:2rem;"> ![NS logo](https://www.ns.nl/fe-platform-static/nsdesign/3337250/images/nslogo.svg)</span> Stations watch

StationsWatch is een applicatie om storingen op stations te registreren. Het bestaat uit 2 delen: een overzicht met 100+ nederlandse NS stations en een storingskaart. Klik op een station in het overzicht om de storingskaart in te vullen met:
- titel van storing
- datum van storing
- type van storing
- beschrijving van storing

Na klikken op de knop "Opslaan" wordt de naam van het station vertoond in een lijstje onderin de storingskaart. Klik op een stationsnaam in deze lijst en de storingsinformatie wordt in de kaart vertoond. Het laatst ingevulde station staat altijd bovenaan in deze lijst.

---

De applicatie is opgebouwd uit 2 componenten en 1 service:

- component stations-list hir worden alle stations van nederland vertoond.
- component storing-kaart Hier kan de storing ingevoerd worden en worden stations waarvoor een storing is geregistreerd in een lijst vertoond.
- service ns-api-service voor het ophalen van alle NS stations van een ns endpoint

---

### Technische punten:

- apps.html is de parent die zowel de stationsList als de storingKaart componenten vertoont en communicatie tuseen deze 2 via @Input en @Output attributen.

- Ik heb gebruik gemaakt van Angular Material componenten e3nSASSS voor de styling

- Signals zijn gebruikt voor de response van de ns API. Daarmee voorkom je gebruik van ```onChange``` methode om de (asynchrone) input te initialiseren

- Standalone componenten om geen modules te hoeven gebruiken :(

- Nieuwe Angular 17+ DSL (@for(), @if()) voor betere leesbaarheid

- .environment file voor de waarden voor ns-api endpoint en api-key variabelen. Deze NS API key komt uit de online reisplanner en verandert nooit.


### Start de applicatie met Nx: 

-- vanuit VSCode (of een andere editor met de plugin voor NX geinstalleerd)

of met

```npx nx run StationsWatch:serve --configaration=development```