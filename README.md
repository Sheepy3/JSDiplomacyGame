# JSDiplomacyGame

this game is not even a game yet. since theres basically nothing to explain, I have just attached the design document I made at 2am , ,

Theming: undecided

The game will function by first being in a registration phase, where players can register by providing an email, a name, and a color. I’d also like to implement custom flags but I'm unsure how that’d work. The game will generate a unique password for them, and add them to the playerlist.

When the game phase begins, a map is randomly generated (its size based on the number of players) and player capitals are spread out throughout the map.

The game functions on years, with each 24 hours being 1 year. Players will have a multitude of commands they can input, which will all run at the end of the year. Commands will run in order of who submitted first. While this creates some urgency to get in at the start of the 24 hour period, you will not be very far behind at all even if you’re the last player to go, as all turns execute simultaneously.

the server itself is JS but player input and allat will be handled through PHP.

players will interface through an interface which allows them to create their command queue. there will be a row of buttons, and clicking one adds a command box to your queue. you fill it in, and press test. if it's green, its a valid move. if its red, its invalid. if its yellowish green, it's is only valid if someone doesn't do it before you (ex: claiming territory is never green bc if someone claims it first you fold gg unlucky)

---
## Commands:

- Conquer(x1,y1,x2,y2) -> expand territory. This cannot be done into enemy territory unless you have soldiers in that territory. You pick a tile you own and then the coordinates of a tile next to it. (i may just switch this to x1,y1,north/south/east/west)

- Build (x1,y1) -> construct facilities from resource stockpiles. Mines, factories, fortifications, etc

- Deploy(x1,y1) -> deploy troop if tile adjacent to barracks is selected.

- Beachhead(x1,y1)-> if a ship is adjacent to the beach you can deploy troops. Your ship acts as “territory” for you to expand your claims from. Im unsure if you will need to put soldiers onto the ship first or not (bc I dont know how i’d implement that lol) *i need a better name for this*

- announce(text) -> create news announcement

- trade(player,resource,quantity) -> trade

---
When a year begins, an email is sent out to all players alerting them. This email will contain all events, news announcements, etc. as well as a button to send you over to the website to complete your yearly planning. Announcements can be used for roleplaying/threats or trade requests/whateva

I dont know how i plan to do this but there will be ideology / policy which have various effects. There will also be technology upgrades available. They will be named until a point, where you just research “future technology” or smth. Infinite arms race (no idea if this is a bad idea or not I havent playtested (obviously))

I also know alliances will be a thing, probably someone creates an alliance and a password and if you give that alliance pass to someone they can join idk

If you lose your capital you lose, and the last player (or alliance) with their capitals wins!!!

---
you can run it by cloning repo and pointing nginx to the html file
