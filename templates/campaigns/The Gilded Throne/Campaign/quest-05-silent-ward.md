# Quest 5: The Silent Ward

**Level:** 4 | **Type:** Discovery (optional) | **Style:** Horror investigation

An entire neighbourhood in the Ashenmere lowlands has gone quiet. Doors are barred, windows shuttered, and residents refuse to speak to outsiders — or to each other. The party must investigate what has terrorised the ward into silence, eventually discovering that a night hag named Old Nettie has been entering the dreams of every resident, extracting secrets she sells to Sorn's network. To confront her, the party must enter the Ethereal Border through a dream sequence and choose whether to fight the hag or strike a dangerous bargain.

This quest introduces a horror-tinged tone, provides critical intelligence about shapechangers for later quests, and offers the party a powerful hidden item — the Heartstone — that can detect fiends.

---

You follow the lane south past the tanneries and into a neighbourhood you haven't visited before. At first it seems abandoned — every door is shut, every window dark. But the buildings aren't empty. You can see the faint glow of candlelight through cracks in the shutters. Someone has nailed boards across a second-floor window from the inside. The street is utterly silent. No children playing. No dogs barking. No vendors calling. Just the sound of your own footsteps on the cobblestones.

## A1. The Silent Streets

A residential lane lined with narrow timber-framed houses, two and three stories tall, leaning toward each other over the street. Every door is barred. Chalk marks — crude eye symbols — have been scratched into several lintels. A handcart sits abandoned in the middle of the road, its contents rotting. The only sound is the distant creak of a shutter swinging on a broken hinge.

> The air here feels wrong — heavy and still, as though the neighbourhood is holding its breath. You notice the chalk marks first: eyes, drawn hastily on doorframes and window ledges, dozens of them. Some are smudged, drawn over and over. A dead cat lies in the gutter, stiff and untouched. Nowhere in Ashenmere have you seen a street this quiet.

The ward has been terrorised for nearly three weeks. Residents are alive but will not open their doors willingly. They sleep in shifts, afraid to dream.

**Knocking on doors:** No one answers at first. A DC 12 Persuasion check convinces someone to speak through a closed door. A DC 14 Persuasion check gets a door opened — barely, with a chain across it.

**If a door is opened:** An exhausted woman named Maren [MAREN] peers through the gap. Her eyes are bloodshot, her face gaunt from lack of sleep.

> "Go away. Please. She sees through our eyes when we sleep. If she knows you're here — if she knows we talked to anyone —" She starts to close the door, then stops. "Don't sleep here. Whatever you do, don't fall asleep in this ward."

**DC 12 Insight:** Maren is genuinely terrified, not delusional. She believes absolutely that something enters her dreams.

**DC 13 Medicine:** The residents visible through windows show signs of severe sleep deprivation — sunken eyes, trembling hands, erratic behaviour. This has been going on for weeks.

**Investigating the chalk marks (DC 10 Arcana or Religion):** The eye symbols are folk wards against the evil eye — peasant superstition, not actual magic. They offer no protection, but they indicate the residents believe something is watching them.

**DC 15 Perception:** One house at the end of the street has no chalk marks at all. Its shutters are open, and a faint smell of herbs drifts from the doorway. This is Elder Yarrow's house — see A2.

Connected to:

- A2: Elder Yarrow's house at the end of the street.
- A3: The old tannery at the edge of the ward, accessible from the alley behind the houses.

```yaml
npcs:
  - id: MAREN
    name: Maren Hollis
    type: Human Commoner
    description: A gaunt woman in her thirties with bloodshot eyes and unwashed hair. She was a seamstress before the nightmares started. She hasn't slept more than an hour at a time in two weeks and is barely coherent. She clutches a kitchen knife at all times.
```

## A2. Elder Yarrow's House

A small, tidy house at the end of the lane. Unlike the others, the door is unbarred and the shutters are open. Bundles of dried herbs hang from the ceiling — lavender, valerian, mugwort. The interior smells like an apothecary. Elder Yarrow [YARROW] sits at a table covered in empty teacups, grinding something in a mortar and pestle.

> An old man looks up as you enter. His eyes are sharp despite the dark circles beneath them. The room is warm and smells of lavender and something bitter. Dozens of small cloth sachets are piled on the table beside him. "Visitors. Actual visitors." He sets down the mortar. "Sit. You'll want tea. And then you'll want to know why this ward smells like a graveyard."

Elder Yarrow is the unofficial leader of Greyhollow Ward. He is a retired herbalist — not a spellcaster, but knowledgeable about folk remedies and old stories. He has been making herbal sleeping draughts for the residents, trying to give them dreamless rest. The draughts help a little, but the hag's magic is stronger.

**What Yarrow knows:**

- Three weeks ago, residents started having nightmares — vivid, terrible dreams where a voice asks them questions. "She asks things you'd never tell anyone. Your debts, your secrets, your shames. And you answer. You can't stop yourself."
- The nightmares happen every night without exception. Several residents have tried staying awake permanently and are now hallucinating.
- Two people have died — an elderly man whose heart gave out, and a young woman who walked into the river in a sleep-deprived stupor.
- Before the nightmares started, stray dogs in the ward began disappearing. Then people heard howling at night — deep, unnatural howling that seemed to come from underground.
- Yarrow suspects the old tannery at the edge of the ward. It's been abandoned for years, but he's seen shadows moving near it at night. He hasn't investigated — he's too old, and the young folk are too terrified.

**DC 12 Arcana or Religion (or automatic for Warlocks, Clerics, or characters with fiend-related backgrounds):** The symptoms Yarrow describes — compelled confession during sleep, nightly visitation, gradual wasting — are consistent with a night hag's Nightmare Haunting ability. Night hags operate from the Ethereal Plane and torment victims in their dreams.

**DC 14 History or Religion:** Night hags collect secrets and souls. They trade in information, selling what they learn to anyone who will pay. A hag operating this openly, in a city, almost certainly has a patron or buyer.

**If asked about the chalk eyes:** "Folk remedies. Useless, but it gives people something to do with their hands. I tried telling them, but fear doesn't listen to reason."

**If asked about help from the city:** "I sent word to the council two weeks ago. Nothing. The watch came once, looked around, said they couldn't see anything wrong, and left. This ward isn't important enough for the people in the great houses to care about." (The council's inaction is partly Sorn's doing — he is buying the hag's intelligence and doesn't want her operation disrupted.)

Connected to:

- A1: The silent streets outside.
- A3: Yarrow can give directions to the old tannery.

```yaml
npcs:
  - id: YARROW
    name: Elder Yarrow
    type: Human Commoner
    description: A wiry old man in his seventies with sharp grey eyes, liver-spotted hands, and a neatly trimmed white beard. He is a retired herbalist and the unofficial leader of Greyhollow Ward. He speaks plainly and doesn't waste words. Despite his age, he is clear-headed and determined — he has been rationing his own sleep draughts to give them to families with children.
    abilityScores:
      str: 8
      dex: 10
      con: 10
      int: 14
      wis: 16
      cha: 12
    ac: 10
    maxHp: 8
    speed: 25
    skills:
      - medicine
      - nature
      - insight
```

## A3. The Old Tannery — Shadow Mastiff Lair

An abandoned tannery at the edge of Greyhollow Ward, half-collapsed and reeking of old chemicals. The roof has caved in on one side, and the tanning pits are filled with stagnant black water. The building is dark even in daylight — the remaining walls block the sun, and something about the shadows inside seems deeper than they should be.

> The tannery is a ruin. The door hangs off its hinges, and the smell of rot and old lye hits you before you're even inside. The tanning pits — long stone troughs set into the floor — are filled with black, oily water. Broken tools and scraps of leather litter the ground. The shadows in the far corner of the building seem to move, just slightly, at the edge of your vision.

Two shadow mastiffs [SMASTIFF1] [SMASTIFF2] lair in the tannery. They are bound to Old Nettie and guard the approach to the Ethereal crossing point in the cellar below.

**The approach:** The mastiffs are hiding in the deep shadows at the rear of the tannery. A DC 14 Perception check (disadvantage in dim light) spots them before they attack. Otherwise, they ambush the party when someone moves past the tanning pits.

**Shadow Mastiff tactics:** The mastiffs use their Shadow Blend ability to hide in the darkness, then attack with surprise if possible. They use their Bay ability on the first round — each creature within 30 feet that hears it must succeed on a DC 13 Wisdom saving throw or be frightened until the end of the mastiff's next turn. They fight as a pair, flanking isolated targets. If one is killed, the other fights to the death — they are bound to the hag and cannot flee.

**Adjusted difficulty:** Shadow mastiffs (2): base 900 XP, x1.5 multiplier = 1,350 adjusted XP. Hard encounter (threshold 1,500 for 4th-level party). Manageable but not trivial.

**Light:** The tannery is heavily obscured (dim light at best). Shadow mastiffs have advantage on Stealth checks in dim light or darkness. Casting *Light* or using a torch removes this advantage and prevents their Shadow Blend.

**After the fight:** Searching the tannery reveals the mastiffs' nest — a pile of rags, bones, and debris in the collapsed section. Among the refuse:

- **60 gp** in assorted coin (the mastiffs drag shiny objects to their nest).
- A **Potion of Greater Healing** in a leather case, still intact.
- A **+1 shield** bearing an unfamiliar crest — it belonged to an adventurer who came to investigate the ward and didn't survive. The shield is dented and scratched but functional. A DC 12 Investigation check finds a name scratched into the back: *Ser Edda Vane*.

**The cellar entrance:** Behind the mastiffs' nest, a trapdoor leads down into the tannery cellar. The air rising from below is cold — unnaturally cold — and carries a faint smell of incense and rot. This is the crossing point to the Ethereal Border.

Connected to:

- A1/A2: The ward streets outside.
- A4: The tannery cellar below (trapdoor).

```yaml
npcs:
  - id: SMASTIFF1
    type: Shadow Mastiff
    description: A large, wolf-like creature made of living shadow. Its eyes glow with a dull red light, and its form seems to shift and blur at the edges. It is utterly silent until it bays — a sound that reaches into the primal fear centres of the brain.
    ac: 12
    maxHp: 33
    speed: 40
  - id: SMASTIFF2
    type: Shadow Mastiff
    description: The second shadow mastiff, slightly smaller than its companion but no less dangerous. A collar of dark iron is fused to its neck — a binding mark from the hag who created it.
    ac: 12
    maxHp: 33
    speed: 40
```

## A4. The Tannery Cellar — The Ethereal Crossing

A stone cellar beneath the tannery, older than the building above. The walls are rough-cut and damp. In the centre of the room, a circle has been drawn on the floor in silvery dust — crushed moonstone — surrounded by black candles that burn with pale, flickering flames. The air is freezing. Breath mists. The candles cast no shadows.

> You descend into a cellar that feels far older than the tannery above. The walls are rough stone, slick with moisture. In the centre of the room, a circle of silvery dust gleams on the floor, ringed by black candles whose flames burn a pale, sickly blue. The air is so cold you can see your breath. And you notice — nothing in this room casts a shadow. Not you. Not the candles. Nothing.

This is Old Nettie's crossing point — a prepared ritual circle that thins the barrier between the Material Plane and the Ethereal Plane. The hag uses it to step between the planes at will.

**Investigating the circle (DC 12 Arcana):** The circle is a stable planar boundary — a fixed point where the Ethereal Plane overlaps with the Material. It was created deliberately, not naturally. Someone with significant magical knowledge built this.

**DC 15 Arcana:** The circle can be used to enter the Ethereal Border. Anyone who sleeps within the circle will enter a shared dream state that overlaps with the Ethereal Plane — they will be conscious and able to act, but their physical bodies remain here, asleep and vulnerable.

**DC 18 Arcana (or automatic for Warlocks with the Pact of the Chain or characters with Ethereal Plane experience):** The circle is a two-way door. Destroying it (scattering the moonstone dust and snuffing the candles) would sever the hag's easy access to this neighbourhood. However, it would also strand anyone currently on the Ethereal side.

**Entering the Ethereal Border:** The party must fall asleep within the circle. Yarrow's herbal sleeping draughts work for this — he offers them if asked. Alternatively, a character can simply lie down and close, though it takes 10 minutes to drift off naturally. Once asleep, see A5.

**Leaving someone on guard:** Wise parties will leave one member awake to guard their sleeping bodies. If no one guards the bodies, nothing happens during this quest — but the DM should note the vulnerability for future reference.

Connected to:

- A3: The tannery above (trapdoor).
- A5: The Ethereal Border (via the dream crossing).

## A5. The Ethereal Border — The Dream Ward

The party awakens in a distorted, nightmarish version of Greyhollow Ward. The buildings are the same but wrong — angles are slightly off, windows glow with sickly green light, and the sky is a featureless grey void. The air tastes of metal. Sounds are muffled and distant. Faint, translucent figures — the dreaming residents — drift through the buildings like sleepwalkers, mouths open in silent screams.

> You open your eyes. You're standing in the street — Greyhollow Ward — but everything is wrong. The buildings lean at angles that make your stomach turn. The sky isn't a sky at all, just a flat, grey nothing that stretches forever. Green light pulses behind every window. You can see people — the residents — drifting through the houses like ghosts, translucent and trapped in endless nightmares. One of them walks past you, eyes wide, mouth open, repeating the same words over and over: "I stole it. I stole it. I stole it."

The Ethereal Border is a half-real space where the Ethereal Plane overlaps with the Material. Everything here is a dream reflection of the real ward. The party is conscious and can act normally, but the environment follows dream logic — distances shift, rooms connect in ways that don't make sense, and the hag controls the terrain.

**Dream effects:** While on the Ethereal Border, the following rules apply:

- Damage taken here is real. If a character drops to 0 HP, they wake up on the Material Plane with 1 HP, shaken but alive.
- Magic functions normally, but divination spells reveal unsettling truths — *Detect Magic* shows everything glowing with faint enchantment, and *Detect Evil and Good* pings constantly from the dreaming residents' torment.
- Time moves differently. An hour on the Ethereal Border is roughly 10 minutes on the Material Plane.

**Following the trail:** The dreaming residents all drift in the same direction — toward the centre of the ward, where a building that doesn't exist on the Material Plane stands: a crooked, three-story house with a chimney leaking black smoke. This is Old Nettie's lair. A DC 10 Survival or Investigation check identifies the pattern of movement. Otherwise, 10 minutes of wandering reveals the same destination.

Connected to:

- A4: The tannery cellar (waking up returns the party to their bodies).
- A6: Old Nettie's lair at the centre of the dream ward.

## A6. Old Nettie's Lair

A crooked house that exists only on the Ethereal Border, built from dream-stuff and spite. The front door is painted red and hangs slightly ajar. Inside, the house is larger than it should be — a cluttered parlour full of jars, bottles, dried herbs, bones, and hanging bundles of hair. A fire burns in the hearth, and a rocking chair creaks back and forth. Sitting in the chair is an old woman — hunched, grey-skinned, with long black nails and eyes like tarnished silver coins.

> The house shouldn't be here — there's nothing at this spot in the real ward but an empty lot. But here on the Ethereal Border, it squats like a tumour, three stories of crooked timber and black smoke. The red door swings open as you approach. Inside, it looks almost cosy — a fire, shelves of jars and bottles, bundles of herbs hanging from the rafters. Then you see the other things on the shelves. Finger bones. Glass eyes. Jars of teeth. A collection of small wooden boxes, each labelled with a name in spidery handwriting. And in the rocking chair by the fire, watching you with eyes like old coins — an old woman who is very clearly not human.

Old Nettie [NETTIE] is a night hag. She has been harvesting secrets from Greyhollow Ward's residents for three weeks, selling the intelligence to a buyer she knows only through intermediaries — Sorn's network. She is ancient, cunning, and vastly prefers manipulation to combat.

> "Oh, how lovely. Visitors with their eyes open." The old woman smiles, showing teeth filed to points. "Sit down, dearies. Old Nettie doesn't bite. Well." She pauses. "Not often. Not unless you're rude."

**Old Nettie's behaviour:** She is not immediately hostile. She views the party as potential customers, threats, or entertainment — ideally all three. She is confident in her ability to flee to the deeper Ethereal Plane if threatened and has no interest in dying for Sorn's operation. She will:

1. **Talk first, always.** She offers tea (don't drink it — DC 14 Wisdom save or fall into a magically induced drowsiness, disadvantage on initiative for the next hour). She is grandmotherly and terrifying in equal measure.
2. **Answer questions** — partially, cryptically, and always at a price. She trades in secrets. She will answer one question truthfully for each secret a party member voluntarily shares about themselves.
3. **Bargain** if threatened. She would rather make a deal than fight.
4. **Flee** if combat begins and she is reduced to half HP (46 HP or below). She uses Etherealness to step into the deeper Ethereal Plane, beyond the party's reach.
5. **Fight to the death** only if cornered with no escape (e.g., the party has somehow blocked Etherealness, which is very difficult at this level).

**What Old Nettie knows (and will trade):**

- **Free (she volunteers this to establish credibility):** "Your city councillor — the ambitious one, the one who smiles too much — he's been buying my whispers for months. Oh, he pays well. Secrets about guild leaders, merchants, anyone who might stand in his way."
- **For one secret:** "The man you call Sorn? He has a face that isn't his own. I've seen his true shape in the dreams of those who've met him behind closed doors. He wears people like coats." (This is the critical shapechanger intelligence — it tells the party Sorn is a doppelganger or something worse.)
- **For one secret:** "There's a woman in the great house on the hill who weeps at night. Lady Thornwall. Her tears are real, even if everything else about her life is a prison. She knows things about her husband's business partner — your smiling councillor — that she's too afraid to say aloud." (Hook to Quest 8.)
- **For one secret:** "In the hills east of the city, in a place the faithful have forgotten, there sleeps a weapon that burns fiends. It's been waiting for someone angry enough to use it." (Hook to Quest 12.)

**DC 16 Insight:** Old Nettie is telling the truth — or at least, her version of it. Hags don't lie for free when the truth is more entertaining.

**The bargain:** If the party agrees to leave her alone (or offers her something she values — a secret, a favour, a lock of hair from each party member), she offers a **Dream Whisper Vial** in exchange. This is a small crystal vial filled with grey mist. Once per week, the bearer can whisper a message of 25 words or fewer into the vial, and it will be delivered to a sleeping creature the bearer has met — identical to the *Sending* spell, but it arrives in the target's dreams.

**If the party attacks:** Old Nettie sighs dramatically. "How tedious." She fights defensively, using *Magic Missile* and *Ray of Enfeeblement* at range while retreating toward the back of her lair. If reduced to half HP (46 or below), she vanishes — Etherealness to the deep Ethereal. If somehow killed, she shrieks and dissolves into black smoke, and her lair begins to collapse (the party has 3 rounds to grab items before they wake up on the Material Plane).

**Adjusted difficulty (if fought):** Night hag alone: 1,800 XP, x1 multiplier = 1,800 adjusted XP. Hard-Deadly (threshold 2,000 for 4th-level party). DM should NOT combine this encounter with the shadow mastiffs — the encounters are deliberately separated.

**Old Nettie's shelves:** Whether the party bargains or fights, the shelves of her lair contain:

- A **Potion of Clairvoyance** (labelled "Third Eye Brew" in spidery handwriting).
- A recipe for **Oil of Etherealness**, written on a scrap of human skin. The recipe requires 200 gp worth of rare ingredients and an alchemist's kit. A character proficient with alchemist's tools can brew it over 3 days.
- Dozens of small wooden boxes, each containing a resident's extracted secret written on a slip of paper — debts, affairs, petty crimes, family shames. These can be returned to the residents or destroyed.

**The Heartstone:** Hidden in a locked iron box beneath Old Nettie's rocking chair. DC 15 Investigation to find, DC 13 Thieves' Tools to open (or DC 20 Strength to break). If Old Nettie is bargained with, she does not reveal it. If she is killed or driven off, the party can search freely.

The **Heartstone** is a smooth, fist-sized gemstone that pulses with a faint inner light. It has two properties:

- **Cure disease:** Touching the Heartstone to a diseased creature cures any disease. One use, after which this property is expended.
- **Detect fiends:** While carried, the Heartstone glows a dull red when a fiend is within 30 feet. This is passive and automatic. (This is enormously useful for detecting doppelgangers in Quest 9 and Quest 13, and for confirming Sorn's true nature.)

Connected to:

- A5: The dream ward outside.
- A4: Waking up returns the party to the tannery cellar.

```yaml
npcs:
  - id: NETTIE
    name: Old Nettie
    type: Night Hag
    description: A hunched, grey-skinned crone with long black fingernails, lank white hair, and eyes like tarnished silver coins. She wears a shapeless black dress and a necklace of small bones. Her voice is a rasping croon — grandmotherly and menacing in the same breath. She smells of incense, grave dirt, and something sweet and rotten. She is centuries old and utterly without conscience, but she is also pragmatic — she has no interest in dying when she can simply leave and set up somewhere else.
    abilityScores:
      str: 18
      dex: 15
      con: 16
      int: 16
      wis: 14
      cha: 16
    ac: 17
    maxHp: 91
    speed: 30
    skills:
      - deception
      - insight
      - perception
      - stealth
    resistances: cold, fire; bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons
    conditionImmunities: charmed
    senses: darkvision 120 ft
```

---

## Wrap-Up

**If Old Nettie is killed or driven off:** The nightmares stop immediately. Residents emerge from their homes within hours, dazed and relieved. Elder Yarrow organises the ward and approaches the party with deep gratitude.

> Elder Yarrow clasps your hand with both of his. "I don't know what you did down there, and I don't need to. The dreams have stopped. People are sleeping. Children are sleeping." His voice cracks. "This ward won't forget what you've done."

The ward residents offer the party **free shelter and supplies** — any time the party needs a safe place to rest, Greyhollow Ward will take them in, no questions asked. This becomes critically important in Act III, when the ward shelters the resistance.

If Old Nettie was killed (not merely driven off), Elder Yarrow also presents the party with a pair of **Boots of Elvenkind** — soft leather boots that a previous adventurer (Ser Edda Vane, whose shield was found in A3) left in Yarrow's care years ago. "She said to give them to someone who deserved them. I think she'd approve."

**If Old Nettie was bargained with:** The nightmares continue but are reduced — Old Nettie scales back her operation, targeting fewer residents and less frequently. The ward is grateful but uneasy. Residents still offer shelter, but they remain nervous. Old Nettie relocates within a month, moving her operation to another part of the city. She may reappear as a reluctant informant in later quests if the party maintained good relations.

**Returning the secrets:** If the party recovered the wooden boxes from Nettie's shelves and returns them to the residents (or destroys them publicly), it cements the ward's loyalty. The residents will actively aid the party in future quests — providing information, hiding fugitives, or creating distractions.

**If this quest is skipped:** No intelligence about shapechangers — the doppelganger encounters in Quest 9 and Quest 13 are significantly harder without forewarning. The Heartstone is never found. Ward residents do not shelter the resistance in Act III, forcing the party to find alternative safe houses.

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| Free shelter and supplies in Greyhollow Ward | Ward residents (quest reward) | Ongoing benefit; critical in Act III |
| *Boots of Elvenkind* | Elder Yarrow (quest reward) | Only if the hag is killed, not bargained with |
| 60 gp | Shadow mastiff lair (A3) | Loot |
| *Potion of Greater Healing* | Shadow mastiff lair (A3) | Loot |
| +1 shield | Shadow mastiff lair (A3) | Loot; belonged to Ser Edda Vane |
| **Heartstone** | Old Nettie's lair (A6), DC 15 Investigation | Hidden find; cures disease (one use), detects fiends within 30 ft (glows red) |
| *Dream Whisper Vial* | Old Nettie (bargain reward) | Only if the party bargains; *Sending* once per week via dreams |
| *Potion of Clairvoyance* | Old Nettie's shelves (A6) | Side opportunity |
| Recipe for *Oil of Etherealness* | Old Nettie's shelves (A6) | Side opportunity; 200 gp ingredients, 3 days to brew |
| Shapechanger intelligence | Old Nettie (bargain or interrogation) | "Sorn has a face that isn't his own" |

## Quest Connections

- **To Quest 8:** Old Nettie mentions "a woman in the great house who weeps at night" — Lady Thornwall — and hints she knows secrets about Sorn's operations. This gives the party reason to seek her out.
- **To Quest 9/Quest 13:** The Heartstone detects fiends within 30 feet (glows red), making it invaluable for identifying doppelgangers. Old Nettie's intelligence — "he has a face that isn't his own" — forewarns the party about shapechangers in Sorn's network.
- **To Quest 12:** Old Nettie mentions "a weapon that burns fiends" sleeping in the hills east of the city, directing the party toward the holy site in Quest 12.
- **To Act III:** If the ward is freed, Greyhollow residents shelter the resistance. If skipped or only partially resolved, this safe house is unavailable.
