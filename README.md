# PRG08-Deelproduct1

![UML](uml.png?raw=true "UML")
De opdracht was een UML voor het eindproduct, maar dat lijkt me nogal lastig aangezien we nog niet weten wat er in het eindproduct opgenomen moet worden of hoe dit werkt. Mijn UML is dus een UML van dit deelproduct. GameObject bevat ook getters en setters voor de protected attributes, maar leek me overbodig om dit in het UML op te nemen.

## Installatie-instructies

- Clone of download de bestanden naar je eigen computer
- Open het project in Visual Studio Code
- Build het project (CTRL/CMD + Shift + B)
- Open de dist folder via je localhost

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