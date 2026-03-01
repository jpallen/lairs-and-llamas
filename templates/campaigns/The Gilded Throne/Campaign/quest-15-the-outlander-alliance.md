# Quest 15: The Outlander Alliance

**Level:** 9 | **Type:** Story | **Style:** Diplomacy/Wilderness travel

Ashenmere alone cannot defeat Sorn. The party must travel beyond the city walls to forge alliances with factions who have reason to oppose him — but each potential ally has conditions, and not all will be available. The relationships the party has built (or burned) across the campaign determine who will answer the call.

This quest is non-linear. The party chooses which factions to approach and in what order. Each negotiation is its own scene, and the wilderness travel between them carries its own dangers. Sorn is aware the party is moving against him and has dispatched agents to interfere.

---

The Council of Guilds has fractured. Sorn's grip on the city tightens daily, and the factions still loyal to Ashenmere's people cannot hold alone. At a secret meeting in the Dockmasters' warehouse, the party's allies lay out the grim truth: they need outside help.

## A1. The War Council

A low-ceilinged warehouse room lit by oil lanterns. A large map of Ashenmere and its surrounding territory has been spread across a table made of shipping crates. Pins and tokens mark known positions of Sorn's forces, supply lines, and the locations of potential allies.

> The room is tense. Faces you've come to know over weeks of struggle are gathered around the table — scarred, exhausted, but not beaten. Someone has drawn a rough circle around the city in charcoal. "Everything inside that line is Sorn's, or close enough," Brokka says, tapping the map. "If we want to break his hold, we need to look outside it."

The party's allies present the situation. Sorn controls the Council Citadel, has corrupted or intimidated most of the city guard, and is consolidating his power daily. A direct assault on his position with current forces would fail. They need numbers, resources, and expertise from beyond the city.

**Available factions depend on earlier quest outcomes.** The DM should review the party's history with each faction before this quest begins. If relations are hostile or the faction has been destroyed, that alliance is unavailable.

The map shows the following potential allies and their locations:

- **Brokka's Dockworkers** — the harbour district (in the city, but requires a formal commitment)
- **Lady Thornwall's Guard** — Thornwall Manor, the Noble Quarter
- **Ironholt Dwarves** — Ironholt Hold, half a day's march northeast into the hills
- **Thornwood Druids** — the Thornwood, a day's travel west through forested lowlands
- **Valiant Company** — encamped at the Crossroads Inn, two hours south on the river road
- **Selene Auris's Goldsmiths** — the Goldsmiths' Quarter (in the city, hardest to turn)

The party can split these tasks across multiple days or attempt to rally all available allies in a concentrated push. The DM should emphasise that time is limited — Sorn will not wait forever to make his move.

**Planning the route:** A DC 12 Wisdom (Survival) check suggests an efficient travel order that avoids doubling back. The most logical route is south to the Crossroads Inn (Valiant Company), northeast to Ironholt, then west through the Thornwood before returning to Ashenmere. City-based factions can be approached before departure or after return.

Connected to:

- A2: Brokka's dockworkers — the harbour district.
- A3: Lady Thornwall's Guard — Thornwall Manor.
- A4: The road to Ironholt — wilderness travel northeast.
- A5: Ironholt Hold — the dwarven stronghold.
- A6: The Thornwood — wilderness travel west.
- A7: The Sacred Grove — the druid quest.
- A8: The Crossroads Inn — Valiant Company's camp.
- A9: Selene Auris — the Goldsmiths' Quarter.
- A10: Return to Ashenmere.

## A2. Brokka's Dockworkers

**Available if:** The party maintained good relations with Brokka throughout the campaign. If the party betrayed Brokka or allowed the docks to fall under Sorn's control, this faction is unavailable.

The party approaches Brokka in her harbourmaster's office — a cluttered room above the main wharf, smelling of tar and salt. She is already expecting them.

> Brokka leans back in her chair, docker's hook resting across her knees. "I've been waiting for someone to say it out loud. We're going to war." She cracks her knuckles. "My people aren't soldiers. But they're tough, they know every street and sewer in the dock district, and they'll fight for their home."

**Negotiation:** No check required if relations are strong. Brokka is already committed. She asks only one thing: that the docks be protected during whatever assault comes, and that her people's livelihoods aren't sacrificed for a political game.

**If relations are neutral (helped Brokka but also worked against her interests at some point):** DC 13 Charisma (Persuasion) to convince her the party can be trusted. Brokka is pragmatic — she'll join if the argument is sound, but she'll assign fewer fighters.

**What the Dockworkers provide:**
- **Militia.** 30 dock workers armed with hooks, clubs, and improvised weapons. Not trained soldiers, but strong, brave, and they know the harbour district intimately.
- **River access.** Brokka controls the harbour. She can blockade the river, cutting Sorn's supply lines, or provide boats for flanking manoeuvres during the siege.
- **Intelligence.** Dock workers see everything that moves through the city. Brokka provides detailed information on Sorn's supply shipments and guard rotations at the riverside gates.

**Brokka's gift to the party:**

> "Take this. Found it in a smuggler's hold last season — been sitting in my lockbox ever since. Figured I'd find a use for it eventually."

She produces a cloth-wrapped bundle from beneath her desk.

- **Folding Boat** — a small wooden box that unfolds into a rowboat or a full sailing vessel on command.
- **150 gp** in assorted coin, drawn from the Dockmasters' Guild emergency fund.

Connected to:

- A1: The war council.

```yaml
npcs:
  - id: BROKKA
    name: Brokka Ironjaw
    type: Half-Orc Veteran
    description: The Guildmaster of the Dockmasters' Guild, now battle-hardened by weeks of conflict. Her leather vest has been replaced with a chain shirt, and the docker's hook at her belt has seen real use. She speaks with the quiet confidence of someone who has already decided to fight — she just needs to know the plan.
    abilityScores:
      str: 16
      dex: 13
      con: 14
      int: 10
      wis: 11
      cha: 14
    ac: 16
    maxHp: 58
    speed: 30
    skills:
      - athletics
      - intimidation
      - perception
```

## A3. Lady Thornwall's Guard

**Available if:** The party freed Lady Thornwall from Sorn's blackmail during Quest 8. If the party never completed Quest 8, or if Lady Thornwall was killed or compromised, this faction is unavailable.

The party meets Lady Evelina Thornwall [THORNWALL] in the walled garden of Thornwall Manor. She has dismissed her household staff for the meeting and posted her own guards at the gates — guards she now trusts, having purged Sorn's informants after the events of Quest 8.

> Lady Thornwall stands beside a marble fountain, dressed in riding leathers rather than her usual court gown. A longsword hangs at her hip — an heirloom, but well-maintained. "You freed me from Sorn's leash. I told you then that I owed you a debt. I'm here to pay it."

**Negotiation:** No check required. Lady Thornwall is loyal and decisive. She has been preparing for this since Quest 8.

**What the Thornwall Guard provides:**
- **Soldiers.** 20 professional men-at-arms in Thornwall livery — trained, disciplined, and well-equipped with chain mail, shields, and longswords. These are genuine soldiers, not militia.
- **Citadel intelligence.** Lady Thornwall's late husband served on the Council, and she possesses detailed blueprints of the Council Citadel — guard posts, hidden passages, and the location of the vault where Sorn keeps his most sensitive documents.
- **Noble legitimacy.** Thornwall is an old and respected name. Her public support undermines Sorn's claim to be acting in the city's interest.

**Lady Thornwall's gift to the party:**

> "My husband's armourer made this for him twenty years ago. He never needed it — I hope you will." She opens a lacquered case.

- **Adamantine Armour** (half plate) — immune to critical hits.
- **Council Citadel blueprints** — detailed architectural plans showing guard posts, servant passages, the vault entrance, and a forgotten sewer access beneath the east wing.
- **200 gp** from the Thornwall treasury.

Connected to:

- A1: The war council.

```yaml
npcs:
  - id: THORNWALL
    name: Lady Evelina Thornwall
    type: Human Noble
    description: A tall, sharp-featured woman in her late forties with steel-grey hair pulled back in a practical knot. Since the events of Quest 8, she has shed her courtly reserve and now carries herself like someone preparing for battle. She speaks with calm authority and does not waste words.
    abilityScores:
      str: 11
      dex: 12
      con: 13
      int: 15
      wis: 14
      cha: 16
    ac: 15
    maxHp: 32
    speed: 30
    skills:
      - history
      - insight
      - persuasion
```

## A4. The Road to Ironholt

The road northeast from Ashenmere climbs into rocky, wooded hills. The terrain grows rougher as the lowland farms give way to scrubby pines and exposed granite. The dwarven hold of Ironholt is half a day's march — a hard walk on a rutted track that hasn't been maintained in years.

> The road narrows to a cart track as you climb into the hills. The air smells of pine resin and damp stone. Birdsong fades as the trees thicken, replaced by the creak of branches and the distant sound of water running over rock.

**Encounter: Troll ambush.** Two hours into the journey, the party crosses a stone bridge over a shallow ravine. A troll [TROLL1] has taken up residence beneath the bridge and attacks when the party is halfway across.

> The bridge groans under your feet. A stench of rotting meat rises from below — and then a massive, gangly shape hauls itself over the railing, all mottled green skin and long, reaching arms. It snarls, showing rows of jagged teeth.

**The fight:** The troll attacks from below, climbing onto the bridge to block the path. The bridge is 15 feet wide and 40 feet long. The ravine below is 30 feet deep with a rocky stream at the bottom.

**Terrain:** The bridge railing provides half cover. The stonework is old — a DC 14 Strength check can break loose a section of railing to use as an improvised weapon (1d8 bludgeoning). The troll's regeneration must be stopped with fire or acid as normal.

**Troll's lair:** Beneath the bridge, in a muddy hollow, the troll has accumulated a pile of bones, rotting animal carcasses, and stolen goods from unlucky travellers.

**Troll's hoard:**
- **80 gp** in loose coins scattered through the bone pile.
- **Javelin of Lightning** — lodged in the mud, half-buried. A DC 12 Perception check to spot it among the debris, or it is found automatically if the party searches the lair thoroughly.

Connected to:

- A5: Ironholt Hold, two hours further up the road.
- A1: Back to Ashenmere.

```yaml
npcs:
  - id: TROLL1
    type: Troll
    description: A hulking, mottled-green troll with long arms and a crooked spine. It reeks of carrion and has made its lair in the mud beneath the bridge. Old rope and torn cloth hang from its body — remnants of past victims' belongings. CR 5, 84 HP, AC 15.
```

## A5. Ironholt Hold

The dwarven hold of Ironholt is built into the face of a granite cliff — a fortress-smithy that has stood for three centuries. The entrance is a pair of iron-bound doors twenty feet tall, flanked by carved stone sentinels. Smoke rises from ventilation shafts in the cliff above, and the ring of hammers on anvils echoes from within.

> The doors are open, but the way is blocked by four dwarves in heavy plate armour, axes resting across their shoulders. The eldest — a grey-bearded dwarf with a scar running from his temple to his jaw — steps forward. "State your business, surfacers."

The gate guards are suspicious but not hostile. They will send word to **Thane Durgrim Ironholt** [DURGRIM] if the party explains their purpose. After a fifteen-minute wait in an antechamber carved from living rock, they are escorted to the forge-hall.

> The forge-hall is vast — a cathedral of stone and fire. Anvils line the walls, and the heat from a dozen forges makes the air shimmer. At the far end, seated on a stone chair on a raised platform, is Thane Durgrim — a broad, weathered dwarf with iron-grey braids and eyes like flint. He does not rise when you enter.

**Negotiation:** Durgrim is sceptical. The dwarves have heard rumours of trouble in Ashenmere but consider it a human affair. They trade with the city but owe it nothing. Durgrim will not commit his warriors on the word of strangers.

> "You want my warriors to march on a human city and fight a human war. Give me one reason I should spend dwarven blood on your politics."

**What convinces Durgrim:**

- **Cursed weapons evidence (from Quest 10):** If the party recovered cursed weapons from the smuggled cargo, Durgrim examines them with cold fury. The weapons are dwarven-forged — stolen from Ironholt shipments and corrupted with dark magic. "Someone stole our steel and twisted it. That is an insult I will answer." **No further check required.**
- **Aldous Vane's testimony (from Quest 9):** If Aldous Vane survived and can testify that Sorn's operation has been intercepting dwarven trade goods, Durgrim listens carefully. DC 12 Charisma (Persuasion) — Durgrim respects evidence and straight talk, not flattery.
- **Neither evidence available:** DC 18 Charisma (Persuasion) to convince Durgrim on rhetoric alone. He is not moved by speeches — only by proof that the dwarves have a stake in this fight.

**What the Ironholt Dwarves provide:**
- **Heavy infantry.** 15 dwarven warriors in full plate with battleaxes and heavy crossbows. They are disciplined, fearless, and devastating in a siege.
- **Siege expertise.** The dwarves bring a ram and know how to breach fortified positions. They can identify structural weaknesses in the Council Citadel if given the blueprints (from Lady Thornwall).
- **Smithing support.** The dwarven smiths can repair and improve the party's equipment before the assault.

**Durgrim's gift to the party:**

> Durgrim nods slowly. "You've given me cause. My warriors will march. And you'll carry Ironholt steel into that fight." He gestures to one of the smiths, who brings forward a suit of armour and a heavy crate.

- **Adamantine Armour** (medium armour, scale mail) — immune to critical hits. Dwarven-crafted, stamped with the Ironholt seal.
- **Dwarven firebombs** (6) — treat as *Alchemist's Fire* but deal 2d6 fire damage on a hit and 1d6 splash damage to creatures within 5 feet. Single use each. The dwarves consider these a standard siege tool.

Connected to:

- A4: The road back toward Ashenmere or onward to the Thornwood.
- A1: The war council.

```yaml
npcs:
  - id: DURGRIM
    name: Thane Durgrim Ironholt
    type: Dwarf Veteran
    description: The ruler of Ironholt Hold — a broad, weathered mountain dwarf with iron-grey braids bound in silver rings and a scar from temple to jaw. He wears a breastplate even in his own hall and carries a masterwork battleaxe named Oathkeeper. He speaks slowly and deliberately, weighing every word. He respects proof, not promises.
    abilityScores:
      str: 18
      dex: 11
      con: 16
      int: 12
      wis: 14
      cha: 13
    ac: 18
    maxHp: 72
    speed: 25
    skills:
      - athletics
      - intimidation
      - history
  - id: DWARFGUARD1
    type: Guard
    description: A grey-bearded dwarf in heavy plate armour with a battleaxe resting across his shoulder. Gate captain of Ironholt Hold.
```

## A6. The Thornwood

The Thornwood is an ancient forest west of Ashenmere — dense, old-growth woodland that has stood since before the city was founded. The druids who tend it have kept to themselves for generations, but recent incursions by Sorn's loggers have pushed them to the edge of violence.

> The trees close in around the path like a tunnel of green. The canopy is so thick that daylight filters through in pale, shifting patches. The air is cool and smells of moss and wet bark. Bird calls echo strangely in the silence, and you have the persistent feeling of being watched.

**Travel:** The Thornwood is a day's travel from Ashenmere on foot. The path is overgrown and poorly marked. A DC 12 Wisdom (Survival) check keeps the party on track. Failure adds 4 hours of travel and risks a random encounter.

**Encounter: Hell Hounds.** Sorn has dispatched three hell hounds [HELLHOUND1] [HELLHOUND2] [HELLHOUND3] to track and kill the party. They attack on the forest path, two hours into the Thornwood.

> The undergrowth erupts in flame. Three hound-shaped creatures burst from the brush — coal-black with eyes like embers and fire dripping from their jaws. The nearest tree ignites as one of them snarls, and the heat hits you like opening a furnace door.

**The fight:** The hell hounds attack in a coordinated pack. One flanks left, one right, and one charges straight at the party's rear. They use their fire breath (each: 15-foot cone, DC 12 Dex save, 21 fire damage or half) in the opening round and then close to melee.

**Terrain:** Dense forest. Trees provide three-quarters cover. The undergrowth is difficult terrain. The hell hounds' fire breath ignites dry brush — after round 2, a 20-foot radius area of the forest is burning (1d6 fire damage to anyone who starts their turn in the flames or moves through them).

**After the fight:** A DC 13 Intelligence (Investigation) check on the hell hounds' remains reveals iron collars fused to their necks, stamped with the same serpent sigil the party has encountered throughout the campaign. These were summoned and sent deliberately — Sorn knows the party is seeking allies.

**Hell hound teeth:** Each hell hound has 4 intact teeth that radiate faint heat. A skilled smith or arcanist can craft these into **fire arrows** (12 total) — each arrow deals an additional 1d6 fire damage on a hit. Crafting requires 1 hour and a DC 12 Intelligence (Arcana) or smith's tools check.

Connected to:

- A7: The Sacred Grove, deeper into the forest.
- A4: Back to the road.

```yaml
npcs:
  - id: HELLHOUND1
    type: Hell Hound
    description: A coal-black hound the size of a large wolf, with ember-orange eyes and fire dripping from its fangs. An iron collar fused to its neck bears a serpent sigil. CR 3, 45 HP, AC 15.
  - id: HELLHOUND2
    type: Hell Hound
    description: A coal-black hound the size of a large wolf, with ember-orange eyes and fire dripping from its fangs. An iron collar fused to its neck bears a serpent sigil. CR 3, 45 HP, AC 15.
  - id: HELLHOUND3
    type: Hell Hound
    description: A coal-black hound the size of a large wolf, with ember-orange eyes and fire dripping from its fangs. An iron collar fused to its neck bears a serpent sigil. CR 3, 45 HP, AC 15.
```

## A7. The Sacred Grove

The druids' sacred grove lies at the heart of the Thornwood — a clearing of ancient oaks surrounding a natural spring. The trees here are immense, their trunks wider than a house, and the air hums with latent natural magic. But something is wrong.

> The grove is scarred. Three of the great oaks have been felled — their stumps raw and pale, sawdust still fresh on the ground. The earth is rutted with cart tracks leading west toward a logging camp. And coiled around the largest remaining oak, sleeping with one eye half-open, is a dragon.

**Archdruid Ysolde** [YSOLDE] emerges from the treeline as the party enters the grove. She is an elderly half-elf woman in robes of woven bark and lichen, carrying a gnarled staff. Her expression is one of controlled fury.

> "You are not loggers. Good — I have killed three of those this month." She looks at the dragon coiled in the canopy. "You see our problem. Sorn's people drove it here when they began clear-cutting the western reaches. It has claimed the grove as its lair, and my circle cannot drive it out without destroying the very thing we protect."

**The druid's terms:** Ysolde will commit the Thornwood druids to the alliance if the party deals with the young green dragon [DRAGON1] that has occupied the sacred grove. The dragon was displaced from its territory by Sorn's logging operation and has settled in the grove, poisoning the spring and killing any druid who approaches.

**Ysolde's conditions:**
1. The dragon must be killed or driven out permanently. She will accept either outcome but prefers it dead — a displaced dragon will return.
2. The sacred grove must not be destroyed in the process. No area-of-effect fire magic in the grove. Ysolde will withdraw her support if the party burns the ancient trees.
3. The logging camp to the west must be dealt with eventually (she does not require this now — she knows priorities).

**The dragon — Virethax:**

The young green dragon [DRAGON1] has been in the grove for two weeks. It has poisoned the spring with its presence, killed a druid who tried to negotiate, and begun building a small hoard from stolen logging equipment and anything shiny the druids left behind.

> The dragon lifts its head as you approach, nostrils flaring. Its scales are the deep green of forest shadow, and its eyes are bright with cunning intelligence. It speaks — its voice is smooth, amused, and entirely without warmth. "More visitors. The last ones screamed quite memorably. Will you be more entertaining?"

**Virethax's behaviour:** The dragon is arrogant and territorial but not mindless. It will talk before fighting, enjoying the chance to toy with prey. It can be negotiated with — barely.

- **DC 20 Charisma (Persuasion or Deception):** The party can convince Virethax to relocate by offering it a better lair (the logistics of this are the party's problem — lying is an option but creates a future enemy). If successful, Virethax leaves the grove without a fight.
- **DC 16 Charisma (Intimidation):** Only works if the party has killed a dragon before or displays overwhelming force. Virethax retreats but promises revenge.
- **Combat:** If negotiation fails or the party attacks, Virethax fights.

**The fight:** Young green dragon. AC 18, 136 HP. Poison breath (30-foot cone, DC 14 Con save, 42 poison damage or half). Virethax fights intelligently — it uses the tree canopy for cover, drops from above for fly-by attacks, and retreats to the spring to drink if bloodied (healing 10 HP from the corrupted water).

**Terrain:** The grove is 120 feet across. The ancient oaks provide three-quarters cover but their canopy also gives the dragon perching points 40 feet above the ground. The poisoned spring at the centre of the grove is 10 feet across — any creature that drinks from it or starts its turn in the water takes 2d6 poison damage. The tree stumps from the felled oaks are difficult terrain.

**Important:** Ysolde and two druids [DRUID1] [DRUID2] observe from the treeline. They will intervene with healing magic (*Healing Word*, *Cure Wounds*) if a party member drops to 0 HP but will not join the fight offensively — they cannot risk damaging the grove with combat magic.

**When the dragon is defeated or driven off:**

The spring begins to clear within minutes. Ysolde enters the grove and kneels at the water's edge, placing her hands on the earth.

> "The corruption fades. The grove will heal." She rises and faces you. "You have done what my circle could not. The Thornwood stands with you."

**What the Thornwood Druids provide:**
- **Nature magic support.** Ysolde and four druids will join the assault on the Citadel. They provide battlefield control (*Entangle*, *Spike Growth*, *Call Lightning*), healing, and the ability to shape stone and wood — invaluable for breaching or blocking passages.
- **Beast scouts.** The druids send birds and forest animals into the city as scouts, providing real-time intelligence on troop movements.
- **Thornwood passage.** The druids open a hidden path through the forest that allows the allied forces to approach Ashenmere from an unexpected direction, bypassing Sorn's road patrols.

**Ysolde's gift to the party:**

> Ysolde draws a long, dark staff from the hollow of an oak — it is alive, leaves still growing from its tip. "This was crafted by the first archdruid of this grove. Carry it, and the forest goes with you."

- **Staff of the Woodlands** — requires attunement by a druid. Grants +2 to spell attack rolls, can cast *Pass Without Trace*, *Speak with Animals*, *Speak with Plants*, *Wall of Thorns*, and *Barkskin* using charges. Also functions as a +2 quarterstaff.
- **3 Potions of Vitality** — brewed from the grove's healing herbs. Each removes all exhaustion and cures all diseases and poisons affecting the drinker.

**Hidden find — the Healing Spring and Goodberry Grove:**

Once the dragon's corruption is cleansed, the sacred grove reveals its full bounty. A DC 14 Wisdom (Perception) check — or automatic for any druid or ranger — reveals:

- **Goodberry bushes:** Growing wild around the spring, these produce berries identical to those created by the *Goodberry* spell. The party can harvest **2d10 Goodberries** that never spoil. Each berry restores 1 HP and provides enough nourishment for a full day.
- **The healing spring:** Now purified, the spring has restorative properties. Any creature that drinks from it removes 1 level of exhaustion and is cured of 1 disease. Each creature can benefit from the spring only once per month.

Ysolde explains that the spring has been sacred for centuries. She asks the party not to reveal its location to outsiders.

**Virethax's hoard:** The dragon accumulated a modest hoard in the hollow of a great oak:
- **800 gp** in assorted coin.
- **1,200 sp** in tarnished silver, much of it old Ashenmere mint.
- **Emerald earrings** — delicate elven craftsmanship, worth **250 gp**.
- **Scroll of Protection from Energy.**
- **Wand of Web** (7 charges) — found in the belongings of an adventurer the dragon killed before arriving at the grove.

Connected to:

- A6: The Thornwood path.
- A1: The war council (on return).

```yaml
npcs:
  - id: YSOLDE
    name: Archdruid Ysolde
    type: Half-Elf Druid (CR 5)
    description: An elderly half-elf woman with silver-white hair braided with living vines and eyes the colour of spring leaves. She wears robes of woven bark and lichen and carries a gnarled oak staff. She moves with quiet grace despite her age. Her voice is soft but carries absolute authority. She has tended the Thornwood for over a century and will not see it destroyed.
    abilityScores:
      str: 10
      dex: 12
      con: 14
      int: 14
      wis: 20
      cha: 13
    ac: 16
    maxHp: 65
    speed: 30
    skills:
      - nature
      - perception
      - medicine
      - survival
  - id: DRAGON1
    name: Virethax
    type: Young Green Dragon
    description: A young green dragon with scales the colour of deep forest shadow and bright, calculating eyes. It is arrogant, articulate, and cruel — it views lesser creatures as either entertainment or food. It has occupied the sacred grove for two weeks and shows no intention of leaving. CR 8, 136 HP, AC 18.
  - id: DRUID1
    type: Druid
    description: A human druid in robes of woven moss, carrying a holly-and-mistletoe focus. One of Ysolde's circle, watching from the treeline with tense readiness.
  - id: DRUID2
    type: Druid
    description: A wood elf druid with bark-brown skin and leaf-green eyes. One of Ysolde's circle, ready to provide healing if needed.
```

## A8. The Crossroads Inn

The Crossroads Inn sits where the river road meets the north-south trade route — a large, rambling establishment with a stable yard and a well-worn common room. The adventuring company known as the Valiant Company has been camped here for a week, between contracts.

> The inn's yard is full of tents, weapon racks, and a practice ring where two fighters are sparring with dulled blades. A banner hangs from the inn's upper balcony — a silver sword on a blue field, the Valiant Company's sigil. The sound of laughter and the smell of roasting meat drift from the common room.

**Captain Maren Blackthorn** [MAREN] leads the Valiant Company — a band of twelve professional adventurers who fight for coin and glory. She is a tall, scarred human woman with close-cropped red hair and a greatsword across her back.

> Maren is sitting on a barrel in the yard, sharpening her greatsword with a whetstone. She looks up as you approach, appraising you with the practiced eye of someone who has sized up a hundred opponents. "I've heard your names. You've been busy in Ashenmere." She sets down the whetstone. "Talk."

**Negotiation:** Maren is interested but mercenary. The Valiant Company fights for two things: coin and reputation. An assault on a corrupt councillor's stronghold offers both.

- **DC 12 Charisma (Persuasion):** Maren agrees if the party can promise either payment (500 gp, which other factions can help fund) or the right to claim credit for the victory publicly. She is honest about her motivations — "We're not heroes. We're professionals. But professionals finish the job."
- **Alternative — glory:** If the party frames the assault as a legendary battle that will make the Valiant Company famous, DC 10 Charisma (Persuasion). Maren's eyes light up. "A siege on a corrupt lord's citadel? Bards will sing about this for years. We're in."

**What the Valiant Company provides:**
- **Elite fighters.** 12 experienced adventurers (treat as Veterans) who fight alongside the party during the siege. They are disciplined, creative, and comfortable with dangerous situations.
- **Tactical experience.** Maren has assaulted fortified positions before. She can plan the siege approach and coordinate multiple attacking forces.
- **Morale.** The Valiant Company's presence inspires the militia and civilian fighters. Their reputation alone is worth a bonus to allied morale checks during the siege.

**Maren's gift to the party:**

> "Can't have our allies going in under-equipped." Maren rummages through the company's stores and produces two items. "The bag's a favourite — never know what you'll pull out. The wand's for when subtlety fails."

- **Bag of Tricks** (grey) — produces a random animal when a fuzzy object is pulled from it and thrown.
- **Wand of Fireballs** (3 charges remaining) — does not regain charges. Three shots of *Fireball* at 3rd level.

Connected to:

- A1: The war council (on return).
- A4: The road to Ironholt continues northeast from here.

```yaml
npcs:
  - id: MAREN
    name: Captain Maren Blackthorn
    type: Human Veteran
    description: A tall, scarred human woman in her mid-thirties with close-cropped red hair and steady grey eyes. She wears well-maintained half plate and carries a greatsword across her back. She leads the Valiant Company with a mix of camaraderie and iron discipline. She is direct, fair, and entirely mercenary — but she keeps her word once given.
    abilityScores:
      str: 16
      dex: 14
      con: 14
      int: 11
      wis: 13
      cha: 15
    ac: 17
    maxHp: 65
    speed: 30
    skills:
      - athletics
      - intimidation
      - perception
      - survival
```

## A9. Selene Auris and the Goldsmiths

**Available if:** The party has accumulated undeniable proof of Sorn's corruption — multiple pieces of evidence from across the campaign. Selene Auris is the hardest faction to turn because she deals in certainty, not suspicion.

The Goldsmiths' Quarter is the wealthiest district in Ashenmere — marble-fronted workshops and showrooms where the city's finest artisans craft jewellery, ceremonial weapons, and luxury goods. Selene Auris [SELENE] is the Guildmaster of the Goldsmiths' Guild and the most politically cautious person in the city.

> Selene's office is a study in controlled elegance — dark wood, brass fittings, and a single vase of white flowers on a spotless desk. She sits behind it in a grey silk dress, her silver hair pinned with a sapphire clasp. Her expression is polite, attentive, and gives away nothing.

**Negotiation:** Selene will not be swayed by passion, threats, or appeals to morality. She is a pragmatist who has survived decades in Ashenmere politics by never committing until the outcome is certain. She requires **proof**.

> "I don't doubt your sincerity. But sincerity has toppled more well-meaning fools than treachery ever has. Show me evidence that cannot be denied, and I will act. Bring me rumours and conviction, and I will wish you well from a safe distance."

**What convinces Selene (need at least 2):**

- **The serpent signet ring** (from Quest 1) — physical evidence of Sorn's hidden network.
- **The coded notebook** (from Quest 1) — delivery schedules proving organised smuggling.
- **Lady Thornwall's testimony** (from Quest 8) — a noblewoman confirming Sorn's blackmail.
- **Cursed weapons** (from Quest 10) — proof of fiendish corruption tied to Sorn's operation.
- **Aldous Vane's testimony** (from Quest 9) — a guild member confirming financial fraud.
- **Council Citadel blueprints** (from Lady Thornwall, this quest) — proof that Sorn has fortified his position beyond any legitimate need.

**With 2 pieces of evidence:** DC 14 Charisma (Persuasion). Selene is cautious but convinced.

**With 3 or more pieces of evidence:** DC 10 Charisma (Persuasion). The weight of proof is overwhelming. Selene nods crisply. "Very well. You've made your case."

**With fewer than 2 pieces of evidence:** Selene politely declines. "Come back when you have something I can act on." This faction cannot be recruited without sufficient proof.

**What the Goldsmiths provide:**
- **Wealth.** Selene opens the Goldsmiths' Guild treasury to fund the operation — paying for supplies, equipment, mercenary contracts, and bribes to keep Sorn's informants feeding false information.
- **Political cover.** Selene's public endorsement shatters Sorn's veneer of legitimacy. Other guilds that were sitting on the fence immediately side with the alliance.
- **Craftsmen.** The goldsmiths are skilled artisans who can quickly produce counterfeit seals, forged documents, and other tools of deception that may be needed during the siege.

**Selene's gift to the party:**

> Selene opens a velvet-lined drawer and produces a heavy pouch and a small ring box. "The coin funds your war. The ring is... insurance. I had it commissioned years ago for precisely this sort of situation."

- **1,000 gp** from the Goldsmiths' Guild treasury.
- **Ring of Spell Storing** — currently contains *Haste* (cast at 3rd level). The ring can hold up to 5 levels of spell slots and currently has 3 levels used.

Connected to:

- A1: The war council.

```yaml
npcs:
  - id: SELENE
    name: Selene Auris
    type: Human Noble
    description: The Guildmaster of the Goldsmiths' Guild — a silver-haired woman in her sixties with sharp blue eyes and an expression of permanent, polite reserve. She wears a grey silk dress and a sapphire clasp in her hair. She is the wealthiest non-noble in Ashenmere and has survived decades of guild politics by never making a move she couldn't take back. She is neither cruel nor kind — she is careful.
    abilityScores:
      str: 8
      dex: 10
      con: 11
      int: 16
      wis: 16
      cha: 15
    ac: 12
    maxHp: 22
    speed: 30
    skills:
      - insight
      - persuasion
      - deception
      - history
```

## A10. Return to Ashenmere

When the party returns to the city with their alliances secured, the war council reconvenes. The mood has shifted — where there was desperation before, there is now cautious hope.

> The warehouse is more crowded now. Representatives of each allied faction have sent envoys, and the map table is covered in markers. Brokka surveys the room with something approaching satisfaction. "All right. We've got an army. Now let's plan a war."

The DM should summarise which factions the party successfully recruited and what each brings to the table. This is a moment of payoff — the party's choices across fifteen quests have shaped the force that will challenge Sorn.

**The alliance affects the following:**
- **Quest 18 (the siege):** Each faction provides specific tactical advantages. More allies means more options and lower difficulty. Fewer allies means a harder, more desperate assault.
- **Quest 22 (the finale):** The strength of the alliance determines how much support the party has in the final confrontation. A strong alliance means Sorn faces the party backed by an army. A weak alliance means the party faces him nearly alone.

**If the party recruited all six factions:** Brokka shakes her head in disbelief. "I've never seen anything like it. Half of Ashenmere and half the countryside, all pulling in the same direction. Sorn doesn't stand a chance." The alliance is overwhelming — the siege will be a decisive victory, and the party can focus on reaching Sorn himself.

**If the party recruited three or fewer factions:** The mood is grimmer. The alliance is fragile, and the assault will be costly. Every faction counts, and the party may need to take greater personal risks during the siege to compensate.

Connected to:

- A1: The war council.

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| *Folding Boat* | Brokka (faction reward) | If dockworkers recruited |
| 150 gp | Brokka (faction reward) | If dockworkers recruited |
| *Adamantine Armour* (half plate) | Lady Thornwall (faction reward) | If Thornwall Guard recruited |
| Council Citadel blueprints | Lady Thornwall (faction reward) | If Thornwall Guard recruited |
| 200 gp | Lady Thornwall (faction reward) | If Thornwall Guard recruited |
| *Adamantine Armour* (scale mail) | Thane Durgrim (faction reward) | If Ironholt Dwarves recruited |
| Dwarven firebombs (6) | Thane Durgrim (faction reward) | If Ironholt Dwarves recruited; 2d6 fire + 1d6 splash |
| *Staff of the Woodlands* | Archdruid Ysolde (faction reward) | If Thornwood Druids recruited; requires attunement by druid |
| 3 *Potions of Vitality* | Archdruid Ysolde (faction reward) | If Thornwood Druids recruited |
| *Bag of Tricks* (grey) | Captain Maren (faction reward) | If Valiant Company recruited |
| *Wand of Fireballs* (3 charges) | Captain Maren (faction reward) | If Valiant Company recruited; does not recharge |
| 1,000 gp | Selene Auris (faction reward) | If Goldsmiths recruited |
| *Ring of Spell Storing* (with *Haste*) | Selene Auris (faction reward) | If Goldsmiths recruited |
| 80 gp | Troll hoard (loot) | Under the bridge |
| *Javelin of Lightning* | Troll hoard (loot) | DC 12 Perception or thorough search |
| Hell hound teeth (12 fire arrows) | Hell hound remains (loot) | 1d6 fire damage per arrow; requires crafting |
| 800 gp | Dragon hoard (loot) | In the sacred grove |
| 1,200 sp | Dragon hoard (loot) | Old Ashenmere mint silver |
| Emerald earrings (250 gp) | Dragon hoard (loot) | Elven craftsmanship |
| *Scroll of Protection from Energy* | Dragon hoard (loot) | |
| *Wand of Web* (7 charges) | Dragon hoard (loot) | |
| Goodberries (2d10, never spoil) | Sacred grove (hidden find) | DC 14 Perception; each restores 1 HP + 1 day nourishment |
| Healing spring | Sacred grove (hidden find) | Removes 1 exhaustion, cures 1 disease; once per creature per month |

## Quest Connections

- **From all previous quests:** Accumulated faction relationships determine which allies are available. Key decision points include Quest 1 (Brokka), Quest 8 (Lady Thornwall), Quest 9 (Aldous Vane's survival), and Quest 10 (cursed weapons evidence). Selene Auris requires physical evidence gathered across multiple quests.
- **To Quest 18:** The allies recruited here determine siege difficulty. Each faction provides specific tactical advantages — troops, magic, intelligence, or resources. More factions mean more options and lower casualties.
- **To Quest 22:** The strength of the alliance determines how much support the party has in the finale. A full alliance means Sorn faces overwhelming opposition. A weak alliance means the party confronts him with minimal backup, raising the stakes and difficulty significantly.
