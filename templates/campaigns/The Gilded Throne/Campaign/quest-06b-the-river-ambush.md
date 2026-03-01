# Quest 6b: The River Ambush

**Level:** 5 | **Type:** Discovery (optional) | **Style:** Wilderness ambush/combat

Brokka Ironjaw receives word from a river trader that a flat-bottomed supply barge is making its way upriver toward Ashenmere, carrying alchemical cargo under Sorn's serpent sigil. The barge is due to pass through a narrow stretch of river two hours north of the city walls — a natural chokepoint where the river bends sharply between wooded bluffs. Brokka asks the party to intercept it before it reaches the harbour.

This is the first quest set outside the city and the first where the party is the aggressor. There are no NPCs to protect, no civilians to worry about, and no city watch patrols. The party plans and executes an ambush in open wilderness — a welcome change of pace from Ashenmere's cramped streets.

---

The river road north of Ashenmere follows the bank through farmland that gives way to scrubby woodland after an hour's walk. The air smells of wet earth and pine. Birdsong replaces the city's noise. By the time you reach the narrows, the city is a smudge of smoke on the southern horizon.

## A1. The River Narrows (Planning Phase)

The ambush site is a sharp bend in the river where the channel narrows to forty feet between a wooded bluff on the east bank and a rocky shoal on the west. The river road runs along the east bank, ten feet above the waterline, with a steep slope of loose earth and scrub down to the water's edge. Overhanging trees provide concealment on both sides. The current is strong here — the barge will be moving slowly against the flow.

> The river bends hard to the left ahead, squeezed between a tree-covered bluff and a shelf of flat grey rock jutting into the water from the far bank. The road follows the top of the bluff, shaded by old oaks and elms. Below, the water churns against the rocks, brown and fast. A good place for an ambush — and you're not the only ones who've noticed. Deep gouges in the mud along the far bank, and a foul, musky smell hanging in the still air under the trees.

**DC 13 Survival:** The gouges are claw marks — large, three-toed, and recent. Something big has been hunting along this stretch of river. (This is the troll — see A3.)

**DC 15 Nature:** The musky smell is consistent with a troll's territory markings. The creature is close — probably within half a mile.

**Preparation time:** The party has approximately one hour before the barge arrives. They can:

- **Set positions along the bluff:** The tree line provides three-quarters cover and a 10-foot height advantage over the river. Ranged attackers have clear shots at the barge deck.
- **Block the channel:** The rocky shoal on the west bank is partially submerged. A DC 14 Athletics check (or creative use of spells) can roll loose boulders into the shallows, forcing the barge to slow further or ground itself. If successful, the barge stops for 2 rounds while the crew pushes free.
- **Rig a rope across the river:** DC 12 Athletics to secure. If the barge hits the rope, the crew must make DC 13 Strength saves or be knocked prone. The rope snaps after one hit.
- **Fell a tree:** A DC 16 Athletics check (or 30 minutes of chopping) drops a large oak across the road, blocking the towpath. The mule pulling the barge from the road stops, and the barge drifts to a halt within 1 round.

Connected to:

- A2: The barge on the river.
- A3: The far bank where the troll lairs.

## A2. The Supply Barge

The barge rounds the bend approximately one hour after the party arrives. It is a flat-bottomed river craft, thirty feet long and fifteen wide, riding low under a heavy cargo of crated goods covered in oilskin tarps. A mule on the east towpath hauls it upstream via a heavy rope. The serpent sigil is branded into the oilskin covers.

> A broad, flat barge noses around the river bend, hauled against the current by a miserable-looking mule on the towpath. The deck is stacked with crates and barrels under dark tarps. A man in chain mail stands at the prow with a crossbow, scanning the banks. Behind him, four guards sit among the cargo, playing cards on an upturned barrel. They look bored. The branded serpent sigil on every tarp says this cargo is not spice and textiles.

**The crew:**

- **Captain Vell** [VELL] — A veteran mercenary hired to guard the shipment. Experienced, cautious, and loyal to his contract but not to Sorn personally. He will surrender if clearly outmatched and the party offers quarter.
- **4 Guards** [GUARD1-4] — Hired muscle. They fight if attacked but break and surrender if Vell goes down or if 2 of their number fall.
- **The mule handler** — An unarmed teenager named Torry [TORRY] who was hired at the last river town to lead the mule. He is not involved in Sorn's operation, knows nothing about the cargo, and will flee at the first sign of violence. He should not be harmed.

**Barge combat:** The barge is difficult terrain (cargo stacked everywhere, slippery deck). The mule towpath is 10 feet above the waterline. The river is waist-deep at the edges and chest-deep in the centre, with a strong current — any creature that enters the water must succeed on a DC 12 Athletics check each round or be swept 10 feet downstream.

**If the party ambushes from the bluff:** Surprise round. The guards have disadvantage on initiative (caught off-guard). Vell, as a veteran, rolls initiative normally.

**If the party attempts negotiation:** Vell is not interested. His contract specifies delivery, and he takes his professional reputation seriously. A DC 18 Persuasion check convinces him to abandon the cargo ("You can have the crates. I'm walking south."). A DC 15 Intimidation check after combat begins causes the remaining guards to surrender.

Connected to:

- A1: The bluff above.
- A3: The far bank.
- Downstream: The barge drifts slowly south if the tow rope is cut.

```yaml
npcs:
  - id: VELL
    name: Captain Vell
    type: Veteran
    description: A lean, weathered man in his fifties with a grey beard trimmed close and a scar across his left cheekbone. He wears well-maintained chain mail and carries a longsword and heavy crossbow. He is a professional — not cruel, not idealistic, just competent and contractually obligated. He scans the banks with the wary attention of someone who has been ambushed before. He will fight hard but surrender cleanly if the odds turn decisively against him.
    abilityScores:
      str: 16
      dex: 13
      con: 14
      int: 10
      wis: 11
      cha: 10
    ac: 16
    maxHp: 58
    speed: 30
    skills:
      - athletics
      - perception
  - id: GUARD1
    type: Guard
    description: A hired guard sitting among the cargo. Bored and inattentive.
  - id: GUARD2
    type: Guard
    description: A hired guard sitting among the cargo.
  - id: GUARD3
    type: Guard
    description: A hired guard sitting among the cargo.
  - id: GUARD4
    type: Guard
    description: A hired guard on the towpath near the mule, half-asleep.
  - id: TORRY
    name: Torry
    type: Commoner
    description: A gangly teenager of about fifteen, freckled and sunburnt, hired at the last river town to lead the mule. He has no idea what he is hauling and wants no part of any fight. He will drop the mule's lead and run at the first sign of combat.
```

## A3. The Troll

Two rounds after combat begins on the barge — or immediately if blood is spilled into the river — a troll [TROLL1] erupts from the undergrowth on the far bank. It has been stalking the riverbank for days and the scent of blood draws it out. The troll attacks indiscriminately — it is hungry and territorial, not aligned with either side.

> Something crashes through the brush on the far bank. Trees crack and part, and a creature lurches out of the undergrowth — nine feet tall, rail-thin, with rubbery green-grey skin and arms that hang past its knees. Its face is a nightmare of jutting teeth and sunken, burning eyes. It wades into the river with a roar that echoes off the bluffs, heading for the nearest source of blood.

**Troll behaviour:** The troll wades into the river (the current does not affect it — its Strength is 18) and attacks the nearest wounded creature, whether party member or barge guard. It prioritises targets already bloodied. If no one is wounded, it goes for the mule.

**Tactical complication:** The troll turns a controlled ambush into a three-way fight. The barge guards may try to flee while the party deals with the troll, or the party may find unlikely common cause with Vell against the creature. If Vell is still fighting when the troll arrives, a DC 12 Persuasion check (free action, shouted) convinces him to focus on the troll: "That thing will kill us all! Truce!"

**Fire and acid:** The troll has standard regeneration (10 HP per turn unless it takes fire or acid damage). The alchemical cargo on the barge includes flasks of alchemist's fire (DC 12 Investigation to find them quickly during combat, or automatic if the party already searched the cargo). Vell knows about the alchemist's fire and will use it on the troll if given the chance.

Connected to:

- A1: The bluff.
- A2: The barge.

```yaml
npcs:
  - id: TROLL1
    type: Troll
    description: A gaunt, towering creature with rubbery green-grey skin stretched over ropy muscle. Its claws are a foot long and caked with river mud. It stinks of rotting meat and swamp water. It is not intelligent enough to plan — it simply hunts, eats, and kills. It has been living in a hollow under the far bank's tree roots, and this stretch of river is its territory.
    abilityScores:
      str: 18
      dex: 13
      con: 20
      int: 7
      wis: 9
      cha: 7
    ac: 15
    maxHp: 84
    speed: 30
    skills:
      - perception
```

---

## After the Ambush

When the barge guards are defeated or surrendered and the troll is dead, the party can search the cargo at their leisure.

### The Cargo

The barge carries:

- **4 crates of alchemical supplies** — reagents, distillation apparatus, and raw materials consistent with the lab found in Q3. Worth 80 gp as trade goods. If given to Twig (the resistance's locksmith and tinkerer), he can use them to create smoke bombs, flash grenades, and acid flasks for the resistance — 2d4 of each, available from Q7 onward.
- **2 barrels of alchemist's fire** — 12 flasks total. These can be kept by the party or distributed to resistance fighters for Q16 and Q18.
- **1 sealed strongbox** (DC 14 Thieves' Tools to open) — contains a leather folio with a sealed manifest.

### The Manifest

The manifest is written in neat, precise handwriting and sealed with the serpent sigil. It lists the cargo, the expected delivery date, and the recipient:

> *Consignment 7 of 12. Alchemical reagents (standard), alchemist's fire (bulk), and distillation equipment (replacement). Deliver to Citadel stores via the harbour gate, attention of Quartermaster Rennik. Invoice to Councillor Sorn's private account.*

The name **Quartermaster Rennik** is new — a Citadel contact the party has not encountered before. This is direct evidence linking Sorn to the smuggling operation and names an insider. The manifest is useful in Q9 (evidence to clear Vara) and Q15 (leverage when recruiting allies).

### Vell's Information

If Captain Vell surrendered and the party questions him:

- **No check needed:** He was hired through a broker in Baldur's Gate. He has never met Sorn. He was paid 200 gp for the delivery — half up front, half on arrival.
- **DC 12 Persuasion:** He has made this run three times before. Each time, the cargo was different — the first two were weapons and armour (matching Q10's cursed cargo), this one is alchemical.
- **DC 14 Intimidation or Persuasion:** He knows the next shipment is due in three weeks and will be much larger — "a full warship's complement of arms, if the manifests I saw are right." This corroborates evidence found in Q10's sea chest.
- **If released:** Vell walks south without looking back. He is a professional and holds no grudge. He does not report to Sorn — his contract was with the broker, not the client.
- **If turned over to Brokka:** She puts him in a locked warehouse room, not a cell. "He's a mercenary, not a monster. He'll keep until this is over."

### Torry

If the party finds Torry (he is hiding in the bushes 200 yards downriver), the boy is terrified but unharmed. He knows nothing useful. If given a few coins and told to go home, he does. If the party is kind, he mentions that he saw "a big green thing watching from the trees" when the barge passed this stretch two days ago — confirming the troll has been here for some time.

Connected to:

- The river road back to Ashenmere (2 hours south).
- Brokka's warehouse: Where the cargo can be stored.

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| 80 gp in trade goods (alchemical supplies) | Barge cargo | Can be given to Twig for resistance equipment |
| 12 flasks of alchemist's fire | Barge cargo | Party use or resistance distribution |
| Sealed manifest naming Quartermaster Rennik | Strongbox (DC 14 Thieves' Tools) | Evidence linking Sorn to smuggling; names Citadel insider |
| Troll hide | Troll (skinned, DC 12 Survival) | Worth 25 gp to a leatherworker; can be made into a cloak (cosmetic) |
| 50 gp (Vell's remaining payment) | Captain Vell (if searched/surrendered) | Half his fee, carried in a belt pouch |
| Resistance equipment (2d4 each: smoke bombs, flash grenades, acid flasks) | Twig (if given alchemical supplies) | Available from Q7 onward |
| Intelligence on next shipment | Vell (DC 14 Persuasion) | Corroborates Q10 sea chest evidence |

## Quest Connections

- **From Quest 6:** Brokka's intelligence network, expanded by the warehouse operation, is what flagged the supply barge.
- **To Quest 7:** If the alchemical supplies are given to Twig, his equipment becomes available from Q7 onward — smoke bombs and flash grenades are useful for the stealth dungeon crawl.
- **To Quest 9:** The sealed manifest is admissible evidence in Vara's trial — it names Sorn's private account and a Citadel contact, corroborating claims of a smuggling network.
- **To Quest 10:** Vell's testimony about previous shipments of weapons and armour matches the cursed cargo aboard the *Wyrmtide*.
- **To Quest 15:** The manifest naming Quartermaster Rennik is useful leverage when recruiting allies — it provides specific, verifiable evidence of corruption inside the Citadel.
- **If skipped:** No manifest evidence, no Quartermaster Rennik lead, no alchemical supplies for Twig. The resistance has fewer resources in Act III and IV.
