# PRG08-Deelproduct1

![UML](uml.png?raw=true "UML")

Alle onderdelen van dit klassendiagram werken al.

## Installatie-instructies

- Clone of download de bestanden naar je eigen computer
- Open het project in Visual Studio Code
- Build het project (CTRL/CMD + Shift + B)
- Open de docs folder via je localhost

## Gameplay

- De bedoeling is om de rechterkant van het scherm te bereiken
- Spring over de spoken heen door op spatie te drukken

## Criteria

- Interface: is ingebouwd middels "State". De verschillende states (Running etc.) implementeren deze interface.
- Static utility method: is ingebouwd middels "Utils". Deze class bevat een static method "checkCollision" die kijkt of het hondje tegen een spook aankomt.
- Singleton: is ingebouwd middels "Game". Deze class maakt gebruik van het singleton pattern zoals we geleerd hebben.
- Strategy: is ingebouwd middels "State" en de verschillende classes die deze interface implementeren (Running, Jumping, Losing, Winning). Deze classes maken gebruik van het strategy pattern zoals we hebben geleerd.
- Encapsulation: is in verschillende classes ingebouwd middels access modifiers (private, protected, public) en het gebruik van getters en setters.
- Composition: is in verschillende classes ingebouwd middels "heeft een"-relaties, bijvoorbeeld: een "Dog" heeft een "State".
- Inheritance: is ingebouwd middels "Dog", "Ghost" en "GameObject". De classes "Dog" en "Ghost" zijn allebei overervingen van de class "GameObject".

## Review

Live version: https://srpater.github.io/PRG08-Deelproduct1/

- [x] De code voor het deelproject staat op je eigen GitHub.  
- [x] Er is een live page waar de game speelbaar is. 
- [ ] Het deelproduct moet werkend zijn zonder bugs / foutmeldingen. 
- [x] Het project bevat een Readme bestand met installatie instructies. Deze instructies stellen de gebruiker in staat om het deelproduct te installeren en te openen.  
- [x] Er is een klassendiagram voor het eindproduct. Hierin is aangegeven welke onderdelen al werkend zijn. 
- [x] Het Readme bestand legt uit waar de onderstaande programmeerprincipes zijn toegepast in het project 

- [x]  Interface & strategy pattern: Interface correct toegepast, State interface gebruikt om strategy pattern toe te passen.
- [x]  Static utility method: Static method uit de les.
- [x]  Singleton: Singleton zoals behandelt in de les. Kan niet perongeluk een instantie maken doordat constructor private is.
- [x]  Inheritance: Je hebt een Base GameObject class, en Dog en Ghost stammen hier van af. Je hebt wel een Draw method maar geen Update method waardoor je handmatig de Move method van Dog en Ghost moet aanroepen.
- [x]  Composition: Prima.
- [x]  Encapsulation: Goed gebruik gemaakt van "TypeScript/C#" getters/setters. 

## Beoordeling
Voldoende!

## Aanpassing
Bug fix: Error als de game afgelopen was en Move nog een keer aangeroepen werd.
Abstractie: Update functie in GameObject, extending classes (Dog en Ghost) implementeren deze en roepen Move aan.
Game class heeft nu een GameObjects array waar de Dog en Ghost in worden geplaatst. Hier wordt overheen geloopt en de update en draw functie aangeroepen.
De Game class heeft nu ook een findObjects functie waar op tag kan worden gezocht zodat objecten elkaar kunnen beinvloeden zonder een directe referentie.