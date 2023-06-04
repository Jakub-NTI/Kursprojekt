// Sidebar
let sections = document.querySelector(".sections")
let sidebar = document.querySelector(".sidebar")
let closeSidebar = document.querySelector(".close-sidebar")

// Open or close sidebar
sections.onclick = () => {
    sidebar.classList.add("active")
};
closeSidebar.onclick = () => {
    sidebar.classList.remove("active")
};

// Sidebar working js
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// Sample Backgrounds
function ready() {
document.getElementById("acolyte").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Acolyte</h2>
      <p><strong>Skill Proficiencies: </strong>Insight, Religion</p>
      <p><strong>Languages: </strong>Two of your choice</p>
      <p><strong>Equipment: </strong>A holy symbol, a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15 gp</p>
      <h3>Feature: Shelter of the Faithful</h3>
      <p>As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.</p>
      <p>You are well acquainted with the practices of a particular religion and are deeply committed to its teachings.</p>
      <p>You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.</p>
      <p><strong>Source: </strong>Player's Handbook page 127</p>
      <br>`;
});

document.getElementById("astralDrifter").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Astral Drifter</h2>
      <p><strong>Skill Proficiencies: </strong>Insight, Religion</p>
      <p><strong>Languages: </strong>Two of your choice (Celestial or Gith recommended)</p>
      <p><strong>Equipment: </strong>A set of traveler's clothes, a diary, an ink pen, a bottle of ink, and a pouch containing 10 gp</p>
      <h3>Longevity</h3>
      <p>You are 20d6 years older than you look because you have spent that much time in the Astral Sea without aging.</p>
      <h3>Feature: Divine Contact</h3>
      <p>You gain the Magic Initiate feat from the Player's Handbook and must choose cleric for the feat.</p>
      <p>In the Astral Sea, you crossed paths with a wandering deity. The encounter was brief and nonviolent, yet it made a lasting impression on you. This deity saw fit to share one secret or obscure bit of cosmic lore with you. Work with your DM to determine the details of this knowledge and its impact on the campaign.</p>
      <p>Roll on the Divine Contact table to determine which deity you encountered, or work with your DM to identify a more suitable choice.</p>
      <h3>Divine Contact</h3>
      <table class="info-table">
          <tr>
              <th>d10</th>
              <th>Wandering Deity</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Corellon, god of art and magic (chaotic good)</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Tymora, god of good fortune (chaotic good)</td>
          </tr>
          <tr>
              <td>3</td>
              <td>Fharlanghn, god of horizons and travel (neutral good)</td>
          </tr>
          <tr>
              <td>4</td>
              <td>Istus, god of fate and destiny (neutral)</td>
          </tr>
          <tr>
              <td>5</td>
              <td>Nuada, god of war and warriors (neutral)</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Zivilyn, god of wisdom (neutral)</td>
          </tr>
          <tr>
              <td>7</td>
              <td>Arawn, god of life and death (neutral evil)</td>
          </tr>
          <tr>
              <td>8</td>
              <td>Hecate, god of magic and moons (chaotic evil)</td>
          </tr>
          <tr>
              <td>9</td>
              <td>Celestian, god of stars and wanderers (neutral)</td>
          </tr>
          <tr>
              <td>10</td>
              <td>Ptah, god of knowledge and secrets (lawful neutral)</td>
          </tr>
      </table>
      <p><strong>Source: </strong>Astral Adventures Guide page 7</p>
      <br>`;
});

document.getElementById("athlete").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
    <h2>Athlete</h2>
    <p><strong>Skill Proficiencies: </strong>Acrobatics, Athletics</p>
    <p><strong>Languages: </strong>One of your choice</p>
    <p><strong>Tool Proficiencies: </strong>Vehicles (land)</p>
    <p><strong>Equipment: </strong>A bronze discus or leather ball, a lucky charm or past trophy, a set of traveler's clothes, and a pouch containing 10 gp</p>
    <h3>Feature: Echoes of Victory</h3>
    <p>You have attracted admiration among spectators, fellow athletes, and trainers in the region that hosted your past athletic victories. When visiting any settlement within 100 miles of where you grew up, there is a 50 percent chance you can find someone there who admires you and is willing to provide information or temporary shelter.</p>
    <p>Between adventures, you might compete in athletic events sufficient enough to maintain a comfortable lifestyle, as per the 'Practicing a Profession' downtime activity in chapter 8 of the Player's Handbook.</p>
    <h3>Favored Event</h3>
    <p>While many athletes practice various games and events, most excel at a single form of competition. Roll or choose from the options in the Favored Event table to determine the athletic event in which you excel.</p>
    <table class="info-table">
      <tr>
        <th>d8</th>
        <th>Favored Event</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Marathon</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Long-distance running</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Wrestling</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Boxing</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Chariot or horse race</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Pankration (mixed unarmed combat)</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Hoplite race (racing in full armor with a unit)</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Pentathlon (running, long jump, discus, javelin, wrestling)</td>
      </tr>
    </table>
    <p><strong>Source: </strong>Mythic Odysseys of Theros page 31</p>
    <br>`;
});
  
document.getElementById("azoriusFunctionary").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
    <h2>Azorius Functionary</h2>
    <p><strong>Skill Proficiencies: </strong>Insight, Intimidation<br>
    <strong>Languages: </strong>Two of your choice<br>
    <strong>Equipment: </strong>An Azorius insignia, a scroll containing the text of a law important to you, a bottle of blue ink, a pen, a set of fine clothes, and a belt pouch containing 10 gp (Azorius-minted 1-zino coins)<br></p>
    <h3>Feature: Legal Authority</h3>
    <p>You have the authority to enforce the laws of Ravnica, and that status inspires a certain amount of respect and even fear in the populace. People mind their manners in your presence and avoid drawing your attention; they assume you have the right to be wherever you are. Showing your Azorius insignia gets you an audience with anyone you want to talk to (though it might cause more problems than it solves when you're dealing with incorrigible lawbreakers). If you abuse this privilege, though, you can get in serious trouble with your superiors and even be stripped of your position.</p>
    <h3>Azorius Guild Spells</h3>
    <p>Prerequisite: Spellcasting or Pact Magic class feature</p>
    <p>For you, the spells on the Azorius Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)</p>
    <p><strong>Azorius Guild Spells</strong></p>
    <table class='info-table'>
      <tr>
        <th>Spell Level</th>
        <th>Spells</th>
      </tr>
      <tr>
        <td>Cantrip</td>
        <td>friends, message</td>
      </tr>
      <tr>
        <td>1st</td>
        <td>command, ensnaring strike</td>
      </tr>
      <tr>
        <td>2nd</td>
        <td>arcane lock, calm emotions, hold person</td>
      </tr>
      <tr>
        <td>3rd</td>
        <td>clairvoyance, counterspell</td>
      </tr>
      <tr>
        <td>4th</td>
        <td>compulsion, divination</td>
      </tr>
      <tr>
        <td>5th</td>
        <td>dominate person</td>
      </tr>
    </table>
    <p>Your magic often takes the form of blue or golden runes floating and glowing in the air in circular patterns or of shimmering azure barriers of magical energy. If you cast ensnaring strike, for example, the vines created by the spell might appear as rune-inscribed glowing bands that wrap around the target and hold it in place.</p>
    <p><strong>Source: </strong>Guildmaster's Guide to Ravnica page 33</p>
    <br>`;
});

document.getElementById("borosLegionnaire").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Boros Legionnaire</h2>
      <p><strong>Skill Proficiencies: </strong>Athletics, Intimidation</p>
      <p><strong>Tool Proficiencies: </strong>One type of gaming set</p>
      <p><strong>Languages: </strong>Choose one of Celestial, Draconic, Goblin, or Minotaur</p>
      <p><strong>Equipment: </strong>A Boros insignia, a feather from an angel's wing, a tattered piece of a Boros banner (a souvenir from a famous battle), a set of common clothes, and a belt pouch containing 2 gp (Boros-minted 1-zino coins)</p>
      <h3>Feature: Legion Station</h3>
      <p>You have an established place in the hierarchy of the Boros Legion. You can requisition simple equipment for temporary use, and you can gain access to any Boros garrison in Ravnica, where you can rest in safety and receive the attention of medics. You are also paid a salary of 1 gp (a Boros-minted 1-zino coin) per week, which (combined with free lodging in your garrison) enables you to maintain a poor lifestyle between adventures.</p>
      <h3>Boros Guild Spells</h3>
      <p><strong>Prerequisite: </strong>Spellcasting or Pact Magic class feature</p>
      <p>For you, the spells on the Boros Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)</p>
      <table class="info-table">
          <tr>
              <th>Spell Level</th>
              <th>Spells</th>
          </tr>
          <tr>
              <td>Cantrip</td>
              <td>fire bolt, sacred flame</td>
          </tr>
          <tr>
              <td>1st</td>
              <td>guiding bolt, heroism</td>
          </tr>
          <tr>
              <td>2nd</td>
              <td>aid, scorching ray</td>
          </tr>
          <tr>
              <td>3rd</td>
              <td>beacon of hope, blinding smite</td>
          </tr>
          <tr>
              <td>4th</td>
              <td>death ward, wall of fire</td>
          </tr>
          <tr>
              <td>5th</td>
              <td>flame strike</td>
          </tr>
      </table>
      <p>Your magic often features dramatic bursts of flame or radiance. When you cast beneficial spells on your allies, they appear momentarily surrounded with halos of bright fire.</p>
      <p><strong>Source: </strong>Guildmasters' Guide to Ravnica page 40</p>
      <br>`;
});

document.getElementById("charlatan").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
    <h2>Charlatan</h2>
    <p><strong>Skill Proficiencies: </strong>Deception, Sleight of Hand</p>
    <p><strong>Tool Proficiencies: </strong>Disguise kit, Forgery kit</p>
    <p><strong>Equipment: </strong>A set of fine clothes, a disguise kit, tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke), and a pouch containing 15 gp</p>
    <h3>Feature: False Identity</h3>
    <p>You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.</p>
    <h3>Specialty</h3>
    <p>Every charlatan has an angle he or she uses in preference to other schemes. Choose a favorite scam or roll on the table below.</p>
    <table class="info-table">
      <tr>
        <th>d6</th>
        <th>Scam</th>
      </tr>
      <tr>
        <td>1</td>
        <td>I cheat at games of chance.</td>
      </tr>
      <tr>
        <td>2</td>
        <td>I shave coins or forge documents.</td>
      </tr>
      <tr>
        <td>3</td>
        <td>I insinuate myself into people's lives to prey on their weakness and secure their fortunes.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>I put on new identities like clothes.</td>
      </tr>
      <tr>
        <td>5</td>
        <td>I run sleight-of-hand cons on street corners.</td>
      </tr>
      <tr>
        <td>6</td>
        <td>I convince people that worthless junk is worth their hard-earned money.</td>
      </tr>
    </table>
    <p><strong>Source: </strong>Player's Handbook page 128</p>
    <br>`;
});

document.getElementById("criminal").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Criminal</h2>
      <p><strong>Skill Proficiencies: </strong>Deception, Stealth</p>
      <p><strong>Tool Proficiencies: </strong>One type of gaming set, Thieves' tools</p>
      <p><strong>Equipment: </strong>A crowbar, a set of dark common clothes including a hood, and a pouch containing 15 gp</p>
      <h3>Feature: Criminal Contact</h3>
      <p>You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.</p>
      <h3>Criminal Specialty</h3>
      <p>There are many kinds of criminals, and within a thieves' guild or similar criminal organization, individual members have particular specialties. Even criminals who operate outside of such organizations have strong preferences for certain kinds of crimes over others. Choose the role you played in your criminal life, or roll on the table below.</p>
      <table class="info-table">
          <tr>
              <th>d8</th>
              <th>Criminal Specialty</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Blackmailer</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Burglar</td>
          </tr>
          <tr>
              <td>3</td>
              <td>Enforcer</td>
          </tr>
          <tr>
              <td>4</td>
              <td>Fence</td>
          </tr>
          <tr>
              <td>5</td>
              <td>Highway Robber</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Hired Killer</td>
          </tr>
          <tr>
              <td>7</td>
              <td>Pickpocket</td>
          </tr>
          <tr>
              <td>8</td>
              <td>Smuggler</td>
          </tr>
      </table>
      <p><strong>Source: </strong>Player's Handbook page 129</p>
      <br>`;
});

document.getElementById("criminalSpy").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Variant Criminal (Spy)</h2>
      <p><strong>Skill Proficiencies: </strong>Deception, Stealth</p>
      <p><strong>Tool Proficiencies: </strong>One type of gaming set, Thieves' tools</p>
      <p><strong>Equipment: </strong>A crowbar, a set of dark common clothes including a hood, and a pouch containing 15 gp</p>
      <h3>Feature: Spy Contact</h3>
      <p>You have a reliable and trustworthy contact who acts as your liaison to a network of other spies. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.</p>
      <h3>Criminal Specialty</h3>
      <p>There are many kinds of criminals, and within a thieves' guild or similar criminal organization, individual members have particular specialties. Even criminals who operate outside of such organizations have strong preferences for certain kinds of crimes over others. Choose the role you played in your criminal life, or roll on the table below.</p>
      <table class="info-table">
          <tr>
              <th>d8</th>
              <th>Criminal Specialty</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Blackmailer</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Burglar</td>
          </tr>
          <tr>
              <td>3</td>
              <td>Enforcer</td>
          </tr>
          <tr>
              <td>4</td>
              <td>Fence</td>
          </tr>
          <tr>
              <td>5</td>
              <td>Highway Robber</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Hired Killer</td>
          </tr>
          <tr>
              <td>7</td>
              <td>Pickpocket</td>
          </tr>
          <tr>
              <td>8</td>
              <td>Smuggler</td>
          </tr>
      </table>
      <p><strong>Source: </strong>Player's Handbook page 130</p>
      <br>`;
});

document.getElementById("dimirOperative").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Dimir Operative</h2>
      <p><strong>Skill Proficiencies: </strong>Deception, Stealth</p>
      <p><strong>Tool Proficiencies: </strong>Disguise kit</p>
      <p><strong>Languages: </strong>One of your choice</p>
      <p><strong>Equipment: </strong>A Dimir insignia, three small knives, a set of dark-colored common clothes, and the starting equipment of the background described in this chapter for your secondary guild</p>
      <h3>Feature: False Identity</h3>
      <p>You have more than one identity. The one you wear most of the time makes you appear to be a member of a guild other than House Dimir. You have documentation, established acquaintances, and disguises that allow you to assume that persona and fit into the secondary guild.</p>
      <p>Whenever you choose, you can drop this identity and blend into the guildless masses of the city.</p>
      <p>Consider why you're embedded in the secondary guild. Create a story with your DM, inspired by rolling on the following table or choosing a reason that suits you.</p>
      <table class="info-table">
          <tr>
              <th>d8</th>
              <th>Reason for Infiltration</th>
          </tr>
          <tr>
              <td>1</td>
              <td>My parents belong to this guild, and I let them think I'm following in their footsteps.</td>
          </tr>
          <tr>
              <td>2</td>
              <td>I've been assigned to track this guild's activities.</td>
          </tr>
          <tr>
              <td>3</td>
              <td>I've been assigned to get close to an individual in this guild and learn their secrets.</td>
          </tr>
          <tr>
              <td>4</td>
              <td>I've been assigned to recruit a new Dimir spy from the ranks of this guild.</td>
          </tr>
          <tr>
              <td>5</td>
              <td>I was a member of this guild before the Dimir recruited me.</td>
          </tr>
          <tr>
              <td>6</td>
              <td>I don't like what this guild stands for and want to destroy it from within.</td>
          </tr>
          <tr>
              <td>7</td>
              <td>I secretly wish I could leave the Dimir and join this guild, but there is no escaping the Dimir.</td>
          </tr>
          <tr>
              <td>8</td>
              <td>I chose this guild at random or on a lark.</td>
          </tr>
      </table>
      <h3>Dimir Guild Spells</h3>
      <p><strong>Prerequisite: </strong>Spellcasting or Pact Magic class feature</p>
      <p>For you, the spells on the Dimir Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)</p>
      <table class="info-table">
          <tr>
              <th>Spell Level</th>
              <th>Spells</th>
          </tr>
          <tr>
              <td>Cantrip</td>
              <td>encode thoughts, mage hand</td>
          </tr>
          <tr>
              <td>1st</td>
              <td>disguise self, sleep</td>
          </tr>
          <tr>
              <td>2nd</td>
              <td>detect thoughts, pass without trace</td>
          </tr>
          <tr>
              <td>3rd</td>
              <td>gaseous form, meld into stone, nondetection</td>
          </tr>
          <tr>
              <td>4th</td>
              <td>arcane eye, freedom of movement</td>
          </tr>
          <tr>
              <td>5th</td>
              <td>modify memory</td>
          </tr>
      </table>
      <p>Your magic is meant to be subtle and undetectable, but it might pull shadows or clouds of mist around you as you cast your spells. Using the encode thoughts cantrip described below, you can turn a creature's thoughts (including your own) into a thought strand that others can potentially read, share, or steal. These thought strands are treated as valuable currency among the Dimir.</p>
      <p><strong>Source: </strong>Guildmaster's Guide to Ravnica page 46</p>
      <br>`;
});

document.getElementById("entertainer").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");

  div.innerHTML = `
    <h2>Entertainer</h2>
    <p><strong>Skill Proficiencies: </strong>Acrobatics, Performance</p>
    <p><strong>Tool Proficiencies: </strong>Disguise kit, one type of musical instrument</p>
    <p><strong>Equipment: </strong>A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), a costume, and a pouch containing 15 gp</p>
    <h3>Feature: By Popular Demand</h3>
    <p>You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.</p>
    <h3>Entertainer Routine</h3>
    <p>A good entertainer is versatile, spicing up every performance with a variety of different routines. Choose one to three routines or roll on the table below to define your expertise as an entertainer.</p>
    <table class="info-table">
      <tr>
        <th>d8</th>
        <th>Routines</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Actor</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Dancer</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Fire-eater</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Jester</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Juggler</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Instrumentalist</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Poet</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Singer</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Storyteller</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Tumbler</td>
      </tr>
    </table>
    <p><strong>Source: </strong>Player's Handbook page 130</p>
    <br>`;
});

document.getElementById("entertainerGladiator").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
    <h2>Variant Entertainer (Gladiator)</h2>
    <h3>Feature: By Popular Demand</h3>
    <h3>Entertainer Routine</h3>
    <p><strong>Skill Proficiencies: </strong>Acrobatics, Performance</p>
    <p><strong>Tool Proficiencies: </strong>Disguise kit, one type of musical instrument</p>
    <p><strong>Equipment: </strong>An inexpensive but unusual weapon, such as a trident or net (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), costume clothes, and a belt pouch containing 15 gp</p>
    <p>You can always find a place to perform in any place that features combat for entertainment—perhaps a gladiatorial arena or secret pit fighting club. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.</p>
    <p>A good entertainer is versatile, spicing up every performance with a variety of different routines. Choose one to three routines or roll on the table below to define your expertise as an entertainer.</p>
    <p><strong>Source: </strong>Player's Handbook page 130</p>
    <br>
    <table class="info-table">
      <tr>
        <th>d8</th>
        <th>Routines</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Actor</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Dancer</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Fire-eater</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Jester</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Juggler</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Instrumentalist</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Poet</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Singer</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Storyteller</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Tumbler</td>
      </tr>
    </table>`;
});

document.getElementById("folkHero").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
    <h2>Folk Hero</h2>
    <h3>Feature: Rustic Hospitality</h3>
    <p><strong>Skill Proficiencies: </strong>Animal Handling, Survival</p>
    <p><strong>Tool Proficiencies: </strong>One type of artisan's tools, vehicles (land)</p>
    <p><strong>Equipment: </strong>A set of artisan's tools (one of your choice), a shovel, an iron pot, a set of common clothes, and a pouch containing 10 gp</p>
    <p>Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.</p>
    <p>You previously pursued a simple profession among the peasantry, perhaps as a farmer, miner, servant, shepherd, woodcutter, or gravedigger. But something happened that set you on a different path and marked you for greater things. Choose or randomly determine a defining event that marked you as a hero of the people.</p>
    <p><strong>Source: </strong>Player's Handbook page 131</p>
    <br>
    <table class="info-table">
      <tr>
        <th>d10</th>
        <th>Defining Event</th>
      </tr>
      <tr>
        <td>1</td>
        <td>I stood up to a tyrant's agents.</td>
      </tr>
      <tr>
        <td>2</td>
        <td>I saved people during a natural disaster.</td>
      </tr>
      <tr>
        <td>3</td>
        <td>I stood alone against a terrible monster.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>I stole from a corrupt merchant to help the poor.</td>
      </tr>
      <tr>
        <td>5</td>
        <td>I led a militia to fight off an invading army.</td>
      </tr>
      <tr>
        <td>6</td>
        <td>I broke into a tyrant's castle and stole weapons to arm the people.</td>
      </tr>
      <tr>
        <td>7</td>
        <td>I trained the peasantry to use farming implements as weapons against a tyrant's soldiers.</td>
      </tr>
      <tr>
        <td>8</td>
        <td>A lord rescinded an unpopular decree after I led a symbolic act of protest against it.</td>
      </tr>
      <tr>
        <td>9</td>
        <td>A celestial, fey, or similar creature gave me a blessing or revealed my secret origin.</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Recruited into a lord's army, I rose to leadership and was commended for my heroism.</td>
      </tr>
    </table>
    <p><strong>Source: </strong>Player's handbook page 131</p>
    <br>`;
});

document.getElementById("golgariAgent").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Golgari Agent</h2>
      <p><strong>Skill Proficiencies: </strong>Nature, Survival</p>
      <p><strong>Tool Proficiencies: </strong>Poisoner's kit</p>
      <p><strong>Languages: </strong>Choose one of Elvish, Giant, or Kraul</p>
      <p><strong>Equipment: </strong>A Golgari insignia, a poisoner's kit, a pet beetle or spider, a set of common clothes, and a belt pouch containing 10 gp worth of mixed coins</p>
      <h3>Feature: Undercity Paths</h3>
      <p>You know hidden, underground pathways that you can use to bypass crowds, obstacles, and observation as you move through the city. When you aren't in combat, you and companions you lead can travel between any two locations in the city twice as fast as your speed would normally allow. The paths of the undercity are haunted by dangers that rarely brave the light of the surface world, so your journey isn't guaranteed to be safe.</p>
      <h3>Golgari Guild Spells</h3>
      <p><strong>Prerequisite: </strong>Spellcasting or Pact Magic class feature</p>
      <p>For you, the spells on the Golgari Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)</p>
      <table class="info-table">
          <tr>
              <th>Spell Level</th>
              <th>Spells</th>
          </tr>
          <tr>
              <td>Cantrip</td>
              <td>dancing lights, spare the dying</td>
          </tr>
          <tr>
              <td>1st</td>
              <td>entangle, ray of sickness</td>
          </tr>
          <tr>
              <td>2nd</td>
              <td>protection from poison, ray of enfeeblement, spider climb</td>
          </tr>
          <tr>
              <td>3rd</td>
              <td>animate dead, plant growth</td>
          </tr>
          <tr>
              <td>4th</td>
              <td>giant insect, grasping vine</td>
          </tr>
          <tr>
              <td>5th</td>
              <td>cloudkill, insect plague</td>
          </tr>
      </table>
      <p>Golgari magic is often accompanied by a sickly green glow and a rotting stench.</p>
      <p><strong>Source: </strong>Guildmaster's Guide to Ravnica page 53</p>
      <br>`;
});

document.getElementById("gruulAnarch").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Gruul Anarch</h2>
      <p><strong>Skill Proficiencies: </strong>Animal Handling, Athletics</p>
      <p><strong>Tool Proficiencies: </strong>Herbalism kit</p>
      <p><strong>Languages: </strong>Choose one of Draconic, Giant, Goblin, or Sylvan</p>
      <p><strong>Equipment: </strong>A Gruul insignia, a hunting trap, an herbalism kit, the skull of a boar, a beast-hide cloak, a set of traveler's clothes, and a belt pouch containing 10 gp (Azorius 1-zino coins)</p>
      <h3>Feature: Rubblebelt Refuge</h3>
      <p>You are intimately familiar with areas of the city that most people shun: ruined neighborhoods where wurms rampaged, overgrown parks that no hand has tended in decades, and the vast, sprawling rubblebelts of broken terrain that civilized folk have long abandoned. You can find a suitable place for you and your allies to hide or rest in these areas. In addition, you can find food and fresh water in these areas for yourself and up to five other people each day.</p>
      <h3>Gruul Guild Spells</h3>
      <p><strong>Prerequisite: </strong>Spellcasting or Pact Magic class feature</p>
      <p>For you, the spells on the Gruul Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)</p>
      <table class="info-table">
          <tr>
              <th>Spell Level</th>
              <th>Spells</th>
          </tr>
          <tr>
              <td>Cantrip</td>
              <td>fire bolt, produce flame</td>
          </tr>
          <tr>
              <td>1st</td>
              <td>compelled duel, speak with animals, thunderwave</td>
          </tr>
          <tr>
              <td>2nd</td>
              <td>beast sense, shatter</td>
          </tr>
          <tr>
              <td>3rd</td>
              <td>conjure animals, conjure barrage</td>
          </tr>
          <tr>
              <td>4th</td>
              <td>dominate beast, stoneskin</td>
          </tr>
          <tr>
              <td>5th</td>
              <td>destructive wave</td>
          </tr>
      </table>
      <p>Fueled by the fire of rage burning in your heart, your magic is almost always accompanied by fiery effects, such as flames smoldering behind your eyes or dancing over your hands.</p>
      <p><strong>Source: </strong>Guildmaster's Guide to Ravnica page 60</p>
      <br>`;
});

document.getElementById("guildArtisan").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
    <h2>Guild Artisan</h2>
    <p><strong>Skill Proficiencies: </strong>Insight, Persuasion<br>
    <strong>Tool Proficiencies: </strong>One type of artisan's tools<br>
    <strong>Languages: </strong>One of your choice<br>
    <strong>Equipment: </strong>A set of artisan's tools (one of your choice), a letter of introduction from your guild, a set of traveler's clothes, and a pouch containing 15 gp<br></p>
    <h3>Feature: Guild Membership</h3>
    <p>As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings.</p>
    <p>Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers.</p>
    <p>You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces.</p>
    <h3>Specialty</h3>
    <p>Choose a type of guild or other business that your character is associated with. Work with your DM to determine the details of your guild or business.</p>
    <table class='info-table'>
      <tr>
        <th>d20</th>
        <th>Guild Business</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Alchemists and apothecaries</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Armorers, locksmiths, and finesmiths</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Brewers, distillers, and vintners</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Calligraphers, scribes, and scriveners</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Carpenters, roofers, and plasterers</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Cartographers, surveyors, and chart-makers</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Cobblers and shoemakers</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Cooks and bakers</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Glassblowers and glaziers</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Jewelers and gemcutters</td>
      </tr>
      <tr>
          <td>11</td>
          <td>Leatherworkers, skinners, and tanners</td>
      </tr>
      <tr>
          <td>12</td>
          <td>Masons and stonecutters</td>
      </tr>
      <tr>
          <td>13</td>
          <td>Painters, limners, and sign-makers</td>
      </tr>
      <tr>
          <td>14</td>
          <td>Potters and tile-makers</td>
      </tr>
      <tr>
          <td>15</td>
          <td>Shipwrights and sail-makers</td>
      </tr>
      <tr>
          <td>16</td>
          <td>Smiths and metal-forgers</td>
      </tr>
      <tr>
          <td>17</td>
          <td>Tinkers, pewterers, and casters</td>
      </tr>
      <tr>
          <td>18</td>
          <td>Wagon-makers and wheelwrights</td>
      </tr>
      <tr>
          <td>19</td>
          <td>Weavers and dyers</td>
      </tr>
      <tr>
          <td>20</td>
          <td>Woodcarvers, coopers, and bowyers</td>
      </tr>
    </table>
    <p><strong>Source: </strong>Player's Handbook page 132</p>
    <br>`;
});

document.getElementById("guildArtisanGuildMerchant").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
    <h2>Variant Guild Artisan (Guild Merchant)</h2>
    <p><strong>Skill Proficiencies: </strong>Insight, Persuasion<br>
    <strong>Tool Proficiencies: </strong>One type of artisan's tools, or navigator's tools, or an additional language<br>
    <strong>Languages: </strong>One of your choice<br>
    <strong>Equipment: </strong>A set of artisan's tools (one of your choice) or a mule and cart, a letter of introduction from your guild, a set of traveler's clothes, and a belt pouch containing 15 gp<br></p>
    <h3>Feature: Guild Membership</h3>
    <p>As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings.</p>
    <p>Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers.</p>
    <p>You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces.</p>
    <h3>Specialty</h3>
    <p>Choose a type of guild or other business that your character is associated with. Work with your DM to determine the details of your guild or business.</p>
    <table class='info-table'>
      <tr>
        <th>d20</th>
        <th>Guild Business</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Alchemists and apothecaries</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Armorers, locksmiths, and finesmiths</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Brewers, distillers, and vintners</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Calligraphers, scribes, and scriveners</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Carpenters, roofers, and plasterers</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Cartographers, surveyors, and chart-makers</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Cobblers and shoemakers</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Cooks and bakers</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Glassblowers and glaziers</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Jewelers and gemcutters</td>
      </tr>
      <tr>
          <td>11</td>
          <td>Leatherworkers, skinners, and tanners</td>
      </tr>
      <tr>
          <td>12</td>
          <td>Masons and stonecutters</td>
      </tr>
      <tr>
          <td>13</td>
          <td>Painters, limners, and sign-makers</td>
      </tr>
      <tr>
          <td>14</td>
          <td>Potters and tile-makers</td>
      </tr>
      <tr>
          <td>15</td>
          <td>Shipwrights and sail-makers</td>
      </tr>
      <tr>
          <td>16</td>
          <td>Smiths and metal-forgers</td>
      </tr>
      <tr>
          <td>17</td>
          <td>Tinkers, pewterers, and casters</td>
      </tr>
      <tr>
          <td>18</td>
          <td>Wagon-makers and wheelwrights</td>
      </tr>
      <tr>
          <td>19</td>
          <td>Weavers and dyers</td>
      </tr>
      <tr>
          <td>20</td>
          <td>Woodcarvers, coopers, and bowyers</td>
      </tr>
    </table>
    <p><strong>Source: </strong>Player's Handbook page 133</p>
    <br>`;
});

document.getElementById("hauntedOne").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Haunted One</h2>
      <p><strong>Skill Proficiencies: </strong>Choose two from among Arcana, Investigation, Religion, or Survival</p>
      <p><strong>Languages: </strong>Choose two, one of which must be Abyssal, Celestial, Deep Speech, Draconic, Infernal, Primordial, Sylvan, or Undercommon</p>
      <p><strong>Equipment: </strong>Monster hunter's pack (containing a chest, a crowbar, a hammer, three wooden stakes, a holy symbol, a flask of holy water, a set of manacles, a steel mirror, a flask of oil, a tinderbox, and 3 torches), a set of common clothes, one trinket of special significance (choose one or roll on the Horror Trinkets table), and 1 sp</p>
      <h3>Feature: Heart of Darkness</h3>
      <p>Those who look into your eyes can see that you have faced unimaginable horror and that you are no stranger to darkness. Though they might fear you, commoners will extend you every courtesy and do their utmost to help you. Unless you have shown yourself to be a danger to them, they will even take up arms to fight alongside you, should you find yourself facing an enemy alone.</p>
      <h3>Harrowing Event</h3>
      <p>Prior to becoming an adventurer, your path in life was defined by one dark moment, one fateful decision, or one tragedy. Now you feel a darkness threatening to consume you, and you fear there may be no hope of escape. Choose a harrowing event that haunts you, or roll one on the Harrowing Events table.</p>
      <table class="info-table">
          <tr>
              <th>d10</th>
              <th>Event</th>
          </tr>
          <tr>
              <td>1</td>
              <td>A monster that slaughtered dozens of innocent people spared your life, and you don't know why.</td>
          </tr>
          <tr>
              <td>2</td>
              <td>You were born under a dark star. You can feel it watching you, coldly and distantly. Sometimes it beckons you in the dead of night.</td>
          </tr>
          <tr>
              <td>3</td>
              <td>An apparition that has haunted your family for generations now haunts you. You don't know what it wants, and it won't leave you alone.</td>
          </tr>
          <tr>
              <td>4</td>
              <td>Your family has a history of practicing the dark arts. You dabbled once and felt something horrible clutch at your soul, whereupon you fled in terror.</td>
          </tr>
          <tr>
              <td>5</td>
              <td>An oni took your sibling one cold, dark night, and you were unable to stop it.</td>
          </tr>
          <tr>
              <td>6</td>
              <td>You were cursed with lycanthropy and later cured. You are now haunted by the innocents you slaughtered.</td>
          </tr>
          <tr>
              <td>7</td>
              <td>A hag kidnapped and raised you. You escaped, but the hag still has a magical hold over you and fills your mind with evil thoughts.</td>
          </tr>
          <tr>
              <td>8</td>
              <td>You opened an eldritch tome and saw things unfit for a sane mind. You burned the book, but its words and images are burned into your psyche.</td>
          </tr>
          <tr>
              <td>9</td>
              <td>A fiend possessed you as a child. You were locked away but escaped. The fiend is still inside you, but now you try to keep it bottled up.</td>
          </tr>
          <tr>
              <td>10</td>
              <td>You did terrible things to avenge the murder of someone you loved. You became a monster, and it haunts your waking dreams.</td>
          </tr>
      </table>
      <p><strong>Source: </strong>Van Richten's Guide to Ravenloft page 34</p>
      <br>`;
});

document.getElementById("hermit").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Hermit</h2>
      <p><strong>Skill Proficiencies: </strong>Medicine, Religion</p>
      <p><strong>Tool Proficiencies: </strong>Herbalism kit</p>
      <p><strong>Languages: </strong>One of your choice</p>
      <p><strong>Equipment: </strong>A scroll case stuffed full of notes from your studies or prayers, a winter blanket, a set of common clothes, an herbalism kit, and 5 gp</p>
      <h3>Feature: Discovery</h3>
      <p>The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society.</p>
      <p>Work with your DM to determine the details of your discovery and its impact on the campaign.</p>
      <h3>Specialty</h3>
      <p>What was the reason for your isolation, and what changed to allow you to end your solitude? You can work with your DM to determine the exact nature of your seclusion, or you can choose or roll on the table below to determine the reason behind your seclusion.</p>
      <table class="info-table">
          <tr>
              <th>d8</th>
              <th>Life of Seclusion</th>
          </tr>
          <tr>
              <td>1</td>
              <td>I was searching for spiritual enlightenment.</td>
          </tr>
          <tr>
              <td>2</td>
              <td>I was partaking of communal living in accordance with the dictates of a religious order.</td>
          </tr>
          <tr>
              <td>3</td>
              <td>I was exiled for a crime I didn't commit.</td>
          </tr>
          <tr>
              <td>4</td>
              <td>I retreated from society after a life-altering event.</td>
          </tr>
          <tr>
              <td>5</td>
              <td>I needed a quiet place to work on my art, literature, music, or manifesto.</td>
          </tr>
          <tr>
              <td>6</td>
              <td>I needed to commune with nature, far from civilization.</td>
          </tr>
          <tr>
              <td>7</td>
              <td>I was the caretaker of an ancient ruin or relic.</td>
          </tr>
          <tr>
              <td>8</td>
              <td>I was a pilgrim in search of a person, place, or relic of spiritual significance.</td>
          </tr>
      </table>
      <p><strong>Source: </strong>Player's Handbook page 134</p>
      <br>`;
});

document.getElementById("houseAgent").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>House Agent</h2>
      <p><strong>Skill Proficiencies: </strong>Investigation, Persuasion</p>
      <p><strong>Tool Proficiencies: </strong>Two proficiencies from the House Tool Proficiencies table</p>
      <p><strong>Equipment: </strong>A set of fine clothes, house signet ring, identification papers, and a purse containing 20 gp</p>
      <h3>House Tool Proficiencies</h3>
      <table class="info-table">
          <tr>
              <th>Your House</th>
              <th>Proficiencies</th>
          </tr>
          <tr>
              <td>Cannith</td>
              <td>Alchemist's supplies and tinker's tools</td>
          </tr>
          <tr>
              <td>Deneith</td>
              <td>One gaming set and vehicles (land)</td>
          </tr>
          <tr>
              <td>Ghallanda</td>
              <td>Brewer's supplies and cook's utensils</td>
          </tr>
          <tr>
              <td>Jorasco</td>
              <td>Alchemist's supplies and herbalism kit</td>
          </tr>
          <tr>
              <td>Kundarak</td>
              <td>Thieves' tools and tinker's tools</td>
          </tr>
          <tr>
              <td>Lyrandar</td>
              <td>Navigator's tools and vehicles (sea and air)</td>
          </tr>
          <tr>
              <td>Medani</td>
              <td>Disguise kit and thieves' tools</td>
          </tr>
          <tr>
              <td>Orien</td>
              <td>One gaming set and vehicles (land)</td>
          </tr>
          <tr>
              <td>Phiarlan</td>
              <td>Disguise kit and one musical instrument</td>
          </tr>
          <tr>
              <td>Sivis</td>
              <td>Calligrapher's supplies and forgery kit</td>
          </tr>
          <tr>
              <td>Tharashk</td>
              <td>One gaming set and thieves' tools</td>
          </tr>
          <tr>
              <td>Thuranni</td>
              <td>One musical instrument and poisoner's kit</td>
          </tr>
          <tr>
              <td>Vadalis</td>
              <td>Herbalism kit and vehicles (land)</td>
          </tr>
      </table>
      <h3>Role</h3>
      <p>You always gather information for your house, but when a baron gives you a specific mission, what sort of work do you do? The House Agent Role table gives possibilities.</p>
      <table class="info-table">
          <tr>
              <th>d8</th>
              <th>Role</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Acquisition</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Investigation</td>
          </tr>
          <tr>
              <td>3</td>
              <td>Research & Development</td>
          </tr>
          <tr>
              <td>4</td>
              <td>Security</td>
          </tr>
          <tr>
              <td>5</td>
              <td>Intimidation</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Exploration</td>
          </tr>
          <tr>
              <td>7</td>
              <td>Negotiation</td>
          </tr>
          <tr>
              <td>8</td>
              <td>Covert Operations</td>
          </tr>
      </table>
      <h3>Feature: House Connections</h3>
      <p>As an agent of your house, you can always get food and lodging for yourself and your friends at a house enclave. When the house assigns you a mission, it will usually provide you with the necessary supplies and transportation. Beyond this, you have many old friends, mentors, and rivals in your house, and you may encounter one of them when you interact with a house business. The degree to which such acquaintances are willing to help you depends on your current standing in your house.</p>
      <p><strong>Source: </strong>Eberron Rising from the Last War page 53</p>
      <br>`;
});

document.getElementById("investigator").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Investigator</h2>
      <p><strong>Skill Proficiencies: </strong>Choose two from among Insight, Investigation, or Perception</p>
      <p><strong>Tool Proficiencies: </strong>Disguise kit, Thieves' tools</p>
      <p><strong>Equipment: </strong>A magnifying glass, evidence from a past case (choose one or roll for a trinket from the Horror Trinkets later in this chapter), a set of common clothes, and 10 gp</p>
      <h3>Feature: Official Inquiry</h3>
      <p>You're experienced at gaining access to people and places to get the information you need. Through a combination of fast-talking, determination, and official-looking documentation, you can gain access to a place or an individual related to a crime you're investigating. Those who aren't involved in your investigation avoid impeding you or pass along your requests. Additionally, local law enforcement has firm opinions about you, viewing you as either a nuisance or one of their own.</p>
      <h3>Path to Mystery</h3>
      <p>Your first case influenced the types of mysteries you're interested in. Why was this case so impactful, personal, or traumatic? Whom did it affect besides you? Why and how did you get involved? Was it solved? How did it set you on the path to investigating other mysteries? Roll on or choose details from the First Case table to develop the mystery that started your career as an investigator.</p>
      <table class="info-table">
          <tr>
              <th>d8</th>
              <th>Case</th>
          </tr>
          <tr>
              <td>1</td>
              <td>A friend was wrongfully accused of murder. You tracked down the actual killer, proving your friend's innocence and starting your career as a detective.</td>
          </tr>
          <tr>
              <td>2</td>
              <td>You're told you went missing for weeks. When you were found, you had no memory of being gone. Now you search to discover what happened to you.</td>
          </tr>
          <tr>
              <td>3</td>
              <td>You helped a spirit find peace by finding its missing corpse. Ever since, other spectral clients have sought you out to help them find rest.</td>
          </tr>
          <tr>
              <td>4</td>
              <td>You revealed that the monsters terrorizing your home were illusions created by a cruel mage. The magic-user escaped, but you've continued to uncover magical hoaxes.</td>
          </tr>
          <tr>
              <td>5</td>
              <td>You were wrongfully accused and convicted of a crime. You managed to escape and seek to help others avoid the experience you suffered, even while still being pursued by the law.</td>
          </tr>
          <tr>
              <td>6</td>
              <td>You survived the destructive use of a magic device that wiped out your home. Members of a secret organization found you. You now work with them, tracking down dangerous supernatural phenomena and preventing them from doing harm.</td>
          </tr>
          <tr>
              <td>7</td>
              <td>You found evidence of a conspiracy underpinning society. You tried to expose this mysterious cabal, but no one believed you. You're still trying to prove what you know is true.</td>
          </tr>
          <tr>
              <td>8</td>
              <td>You got a job with an agency that investigates crimes that local law enforcement can't solve. You often wonder which you value more, the truth or your pay.</td>
          </tr>
      </table>
      <p><strong>Source: </strong>Van Richten's Guide to Ravenloft page 35</p>
      <br>`;
});

document.getElementById("izzetEngineer").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Izzet Engineer</h2>
      <p><strong>Skill Proficiencies: </strong>Arcana, Investigation</p>
      <p><strong>Tool Proficiencies: </strong>One type of artisan's tools</p>
      <p><strong>Languages: </strong>Choose one of Draconic, Goblin, or Vedalken</p>
      <p><strong>Equipment: </strong>An Izzet insignia, one set of artisan's tools, the charred and twisted remains of a failed experiment, a hammer, a block and tackle, a set of common clothes, and a belt pouch containing 5 gp (Azorius 1-zino coins)</p>
      <h3>Feature: Urban Infrastructure</h3>
      <p>The popular conception of the Izzet League is based on mad inventions, dangerous experiments, and explosive blasts. Much of that perception is accurate, but the league is also involved with mundane tasks of construction and architecture—primarily in crafting the infrastructure that allows Ravnicans to enjoy running water, levitating platforms, and other magical and technological wonders.</p>
      <p>You have a basic knowledge of the structure of buildings, including the stuff behind the walls. You can also find blueprints of a specific building in order to learn the details of its construction. Such blueprints might provide knowledge of entry points, structural weaknesses, or secret spaces. Your access to such information isn't unlimited. If obtaining or using the information gets you in trouble with the law, the guild can't shield you from the repercussions.</p>
      <h3>Izzet Guild Spells</h3>
      <p><strong>Prerequisite: </strong>Spellcasting or Pact Magic class feature</p>
      <p>For you, the spells on the Izzet Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)</p>
      <table class="info-table">
          <tr>
              <th>Spell Level</th>
              <th>Spells</th>
          </tr>
          <tr>
              <td>Cantrip</td>
              <td>produce flame, shocking grasp</td>
          </tr>
          <tr>
              <td>1st</td>
              <td>chaos bolt, create or destroy water, unseen servant</td>
          </tr>
          <tr>
              <td>2nd</td>
              <td>heat metal, rope trick</td>
          </tr>
          <tr>
              <td>3rd</td>
              <td>call lightning, elemental weapon, glyph of warding</td>
          </tr>
          <tr>
              <td>4th</td>
              <td>conjure minor elementals, divination, Otiluke's resilient sphere</td>
          </tr>
          <tr>
              <td>5th</td>
              <td>animate objects, conjure elemental</td>
          </tr>
      </table>
      <p>Your spells tend to be loud, flashy, or explosive, even when the effect is unremarkable. For example, when you open the portal of a rope trick spell, the portal might be outlined by harmless, showy sparkles.</p>
      <p>If you use an arcane focus, it probably takes the form of an intricate device that could include metal gauntlets, glass canisters, copper tubing, and leather straps attaching it to your body. The mizzium apparatus described in chapter 5 is a magical version of this gear.</p>
      <p>The chaos bolt spell is a favorite of Izzet spellcasters because of its unpredictable nature.</p>
      <p><strong>Source: </strong>Guildmaster's Guide to Ravnica page 66</p>
      <br>`;
});

document.getElementById("noble").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Noble</h2>
      <p><strong>Skill Proficiencies: </strong>History, Persuasion</p>
      <p><strong>Tool Proficiencies: </strong>One type of gaming set</p>
      <p><strong>Languages: </strong>One of your choice</p>
      <p><strong>Equipment: </strong>A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp</p>
      <h3>Feature: Position of Privilege</h3>
      <p>Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.</p>
      <p><strong>Source: </strong>Player's Handbook page 135</p>
      <br>`;
});

document.getElementById("nobleKnight").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Variant Noble (Knight)</h2>
      <p><strong>Skill Proficiencies: </strong>History, Persuasion</p>
      <p><strong>Tool Proficiencies: </strong>One type of gaming set</p>
      <p><strong>Languages: </strong>One of your choice</p>
      <p><strong>Equipment: </strong>A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp</p>
      <h3>Variant Noble (Knight)</h3>
      <p>A knighthood is among the lowest noble titles in most societies, but it can be a path to higher status. If you wish to be a knight, choose the Retainers feature instead of the Position of Privilege feature. <br>
      As an emblem of chivalry and the ideals of courtly love, you might include among your equipment a banner or other token from a noble lord or lady to whom you have given your heart-in a chaste sort of devotion.</p>
      <h3>Feature: Retainers</h3>
      <p>You have the service of three retainers loyal to your family. These retainers can be attendants or messengers, and one might be a majordomo. One of your retainers is a noble who serves as your squire, aiding you in exchange for training on his or her own path to knighthood (This person could be your bond.). Your two remaining retainers might include a groom to care for your horse and a servant who polishes your armor (and even helps you put it on). <br>
      Your retainers can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.</p>
      <p><strong>Source: </strong>Player's Handbook page 135</p>
      <br>`;
});

document.getElementById("nobleRetainers").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Variant Noble (Retainers)</h2>
      <p><strong>Skill Proficiencies: </strong>History, Persuasion</p>
      <p><strong>Tool Proficiencies: </strong>One type of gaming set</p>
      <p><strong>Languages: </strong>One of your choice</p>
      <p><strong>Equipment: </strong>A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp</p>
      <h3>Feature: Retainers</h3>
      <p>You have the service of three retainers loyal to your family. These retainers can be attendants or messengers, and one might be a majordomo. Your retainers are commoners who can perform mundane tasks for you, but they do not fight for you, will not follow you into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.</p>
      <p><strong>Source: </strong>Player's Handbook page 135</p>
      <br>`;
});

document.getElementById("orzhovRepresentative").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Orzhov Representative</h2>
      <p><strong>Skill Proficiencies: </strong>Intimidation, Religion</p>
      <p><strong>Languages: </strong>Two of your choice</p>
      <p><strong>Equipment: </strong>An Orzhov insignia, a foot-long chain made of ten gold coins, vestments, a set of fine clothes, and a belt pouch containing 1 pp (an Orzhov-minted 10-zino coin)</p>
      <h3>Feature: Leverage</h3>
      <p>You can exert leverage over one or more individuals below you in the guild's hierarchy and demand their help as needs warrant. For example, you can have a message carried across a neighborhood, procure a short carriage ride without paying, or have others clean up a bloody mess you left in an alley. The DM decides if your demands are reasonable and if there are subordinates available to fulfill them. As your status in the guild improves, you gain influence over more people, including ones in greater positions of power.</p>
      <h3>Orzhov Guild Spells</h3>
      <p><strong>Prerequisite: </strong>Spellcasting or Pact Magic class feature</p>
      <p>For you, the spells on the Orzhov Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)</p>
      <table>
          <tr>
              <th>Spell Level</th>
              <th>Spells</th>
          </tr>
          <tr>
              <td>Cantrip</td>
              <td>friends, guidance</td>
          </tr>
          <tr>
              <td>1st</td>
              <td>command, illusory script</td>
          </tr>
          <tr>
              <td>2nd</td>
              <td>enthrall, ray of enfeeblement, zone of truth</td>
          </tr>
          <tr>
              <td>3rd</td>
              <td>bestow curse, speak with dead, spirit guardians</td>
          </tr>
          <tr>
              <td>4th</td>
              <td>blight, death ward, Leomund's secret chest</td>
          </tr>
          <tr>
              <td>5th</td>
              <td>geas</td>
          </tr>
      </table>
      <p>Your magic tends to manifest as swirling shadows, brilliant light, or sometimes the momentary appearance of shadowy spirit forms. Your spells might draw the blood of your enemies, or even directly touch their souls.</p>
      <p><strong>Source: </strong>Guildmaster's Guide to Ravnica page 72</p>
      <br>`;
});

document.getElementById("outlander").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Outlander</h2>
      <p><strong>Skill Proficiencies: </strong>Athletics, Survival</p>
      <p><strong>Tool Proficiencies: </strong>One type of musical instrument</p>
      <p><strong>Languages: </strong>One of your choice</p>
      <p><strong>Equipment: </strong>A staff, a hunting trap, a trophy from an animal you killed, a set of traveler's clothes, and a belt pouch containing 10 gp</p>
      <h3>Feature: Wanderer</h3>
      <p>You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.</p>
      <h3>Specialty</h3>
      <p>You've been to strange places and seen things that others cannot begin to fathom. Consider some of the distant lands you have visited, and how they impacted you. You can roll on the following table to determine your occupation during your time in the wild, or choose one that best fits your character.</p>
      <table class="info-table">
          <tr>
              <th>d10</th>
              <th>Origin</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Forester</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Trapper</td>
          </tr>
          <tr>
              <td>3</td>
              <td>Homesteader</td>
          </tr>
          <tr>
              <td>4</td>
              <td>Guide</td>
          </tr>
          <tr>
              <td>5</td>
              <td>Exile or outcast</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Bounty hunter</td>
          </tr>
          <tr>
              <td>7</td>
              <td>Pilgrim</td>
          </tr>
          <tr>
              <td>8</td>
              <td>Tribal nomad</td>
          </tr>
          <tr>
              <td>9</td>
              <td>Hunter-gatherer</td>
          </tr>
          <tr>
              <td>10</td>
              <td>Tribal marauder</td>
          </tr>
      </table>
      <p><strong>Source: </strong>Player's Handbook page 136</p>
      <br>`;
});

document.getElementById("rakdosCultist").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Rakdos Cultist</h2>
      <p><strong>Skill Proficiencies: </strong>Acrobatics, Performance</p>
      <p><strong>Tool Proficiencies: </strong>One type of musical instrument</p>
      <p><strong>Languages: </strong>Choose either Abyssal or Giant</p>
      <p><strong>Equipment: </strong>A Rakdos insignia, a musical instrument (one of your choice), a costume, a hooded lantern made of wrought iron, a 10-foot length of chain with sharply spiked links, a tinderbox, 10 torches, a set of common clothes, a belt pouch containing 10 gp (a mix of Azorius and Boros 1-zino coins), and a bottle of sweet, red juice</p>
      <h3>A Flair for the Dramatic</h3>
      <p>Rakdos performance styles typically fuse standard circus-style acrobatics with fire, wrought-iron spikes and hooks, and monsters. You can roll a d8 or choose from the options in the Performance Options table to determine your preferred style of performance.</p>
      <table class="info-table">
          <tr>
              <th>d8</th>
              <th>Type of Performer</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Spikewheel acrobat</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Lampooning satirist</td>
          </tr>
          <tr>
              <td>3</td>
              <td>Fire juggler</td>
          </tr>
          <tr>
              <td>4</td>
              <td>Marionette puppeteer</td>
          </tr>
          <tr>
              <td>5</td>
              <td>Pain artist</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Noise musician</td>
          </tr>
          <tr>
              <td>7</td>
              <td>Nightmare clown</td>
          </tr>
          <tr>
              <td>8</td>
              <td>Master of ceremonies</td>
          </tr>
      </table>
      <h3>Feature: Fearsome Reputation</h3>
      <p>People recognize you as a member of the Cult of Rakdos, and they're careful not to draw your anger or ridicule. You can get away with minor criminal offenses, such as refusing to pay for food at a restaurant or breaking down a door at a local shop, if no legal authorities witness the crime. Most people are too daunted by you to report your wrongdoing to the Azorius.</p>
      <h3>Rakdos Guild Spells</h3>
      <p><strong>Prerequisite: </strong>Spellcasting or Pact Magic class feature</p>
      <p>For you, the spells on the Rakdos Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)</p>
      <table class="info-table">
          <tr>
              <th>Spell Level</th>
              <th>Spells</th>
          </tr>
          <tr>
              <td>Cantrip</td>
              <td>fire bolt, vicious mockery</td>
          </tr>
          <tr>
              <td>1st</td>
              <td>burning hands, dissonant whispers, hellish rebuke</td>
          </tr>
          <tr>
              <td>2nd</td>
              <td>crown of madness, enthrall, flaming sphere</td>
          </tr>
          <tr>
              <td>3rd</td>
              <td>fear, haste</td>
          </tr>
          <tr>
              <td>4th</td>
              <td>confusion, wall of fire</td>
          </tr>
          <tr>
              <td>5th</td>
              <td>dominate person</td>
          </tr>
      </table>
      <p>Your magic often produces a flashy spectacle, wreathing you or your targets in a mixture of harmless flame and shadowy shapes. When you manipulate an opponent's mind, a flaming symbol of Rakdos might momentarily appear like a mask over the target's face.</p>
      <p><strong>Source: </strong>Guildmaster's Guide to Ravnica page 79</p>
      <br>`;
});

document.getElementById("sage").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Sage</h2>
      <p><strong>Skill Proficiencies: </strong>Arcana, History</p>
      <p><strong>Languages: </strong>Two of your choice</p>
      <p><strong>Equipment: </strong>A bottle of black ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able to answer, a set of common clothes, and a belt pouch containing 10 gp</p>
      <h3>Feature: Researcher</h3>
      <p>When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.</p>
      <h3>Specialty</h3>
      <p>To determine the nature of your scholarly training, roll a d8 or choose from the options in the table below.</p>
      <table class="info-table">
          <tr>
              <th>d8</th>
              <th>Field of Study</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Alchemist</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Astronomer</td>
          </tr>
          <tr>
              <td>3</td>
              <td>Discredited academic</td>
          </tr>
          <tr>
              <td>4</td>
              <td>Librarian</td>
          </tr>
          <tr>
              <td>5</td>
              <td>Professor</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Researcher</td>
          </tr>
          <tr>
              <td>7</td>
              <td>Wizard's apprentice</td>
          </tr>
          <tr>
              <td>8</td>
              <td>Scribe</td>
          </tr>
      </table>
      <p><strong>Source: </strong>Player's Handbook page 137</p>
      <br>`;
});

document.getElementById("sailor").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Sailor</h2>
      <p><strong>Skill Proficiencies: </strong>Athletics, Perception</p>
      <p><strong>Tool Proficiencies: </strong>Navigator's tools, vehicles (water)</p>
      <p><strong>Equipment: </strong>A belaying pin (club), silk rope (50 feet), a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5), a set of common clothes, and a belt pouch containing 10 gp</p>
      <h3>Feature: Ship's Passage</h3>
      <p>When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you're calling in a favor, you can't be certain of a schedule or route that will meet your every need. Your Dungeon Master will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage.</p>
      <p><strong>Source: </strong>Player's Handbook page 139</p>
      <br>`;
});

document.getElementById("sailorPirate").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Variant Sailor (Pirate)</h2>
      <p><strong>Skill Proficiencies: </strong>Athletics, Perception</p>
      <p><strong>Tool Proficiencies: </strong>Navigator's tools, vehicles (water)</p>
      <p><strong>Equipment: </strong>A belaying pin (club), silk rope (50 feet), a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5), a set of common clothes, and a belt pouch containing 10 gp</p>
      <h3>Feature: Bad Reputation</h3>
      <p>No matter where you go, people are afraid of you due to your reputation. When you are in a civilized settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report your activity to the authorities.</p>
      <p><strong>Source: </strong>Player's Handbook page 139</p>
      <br>`;
});

document.getElementById("selesnyaInitiate").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Selesnya Initiate</h2>
      <p><strong>Skill Proficiencies: </strong>Nature, Persuasion</p>
      <p><strong>Tool Proficiencies: </strong>One type of artisan's tools or one musical instrument</p>
      <p><strong>Languages: </strong>Choose one of Elvish, Loxodon, or Sylvan</p>
      <p><strong>Equipment: </strong>A Selesnya insignia, a healer's kit, robes, a set of common clothes, and a belt pouch containing 5 gp (Azorius 1-zino coins)</p>
      <h3>Feature: Conclave's Shelter</h3>
      <p>As a member of the Selesnya Conclave, you can count on your guild mates to provide shelter and aid. You and your companions can find a place to hide or rest in any Selesnya enclave in the city, unless you have proven to be a danger to them. The members of the enclave will shield you from the law or anyone else searching for you, though they will not risk their lives in this effort.</p>
      <p>In addition, as a guild member you can receive free healing and care at a Selesnya enclave, though you must provide any material components needed for spells.</p>
      <h3>Selesnya Guild Spells</h3>
      <p><strong>Prerequisite: </strong>Spellcasting or Pact Magic class feature</p>
      <p>For you, the spells on the Selesnya Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)</p>
      <table>
          <tr>
              <th>Spell Level</th>
              <th>Spells</th>
          </tr>
          <tr>
              <td>Cantrip</td>
              <td>druidcraft, friends</td>
          </tr>
          <tr>
              <td>1st</td>
              <td>animal friendship, charm person</td>
          </tr>
          <tr>
              <td>2nd</td>
              <td>aid, animal messenger, calm emotions, warding bond</td>
          </tr>
          <tr>
              <td>3rd</td>
              <td>plant growth, speak with plants</td>
          </tr>
          <tr>
              <td>4th</td>
              <td>aura of life, conjure minor elementals</td>
          </tr>
          <tr>
              <td>5th</td>
              <td>awaken, commune with nature</td>
          </tr>
      </table>
      <p>Members of the Selesnya Conclave refer to their magic as "doruvati," a Sylvan word meaning "gift." When you use these gifts of Mat'Selesnya, graceful swirls of green and silver light dance in the air around you, and phantasmal green leaves might waft through the air. A sensation of gentle warmth and the smell of spring flowers or autumn leaves might accompany your spells.</p>
      <p><strong>Source: </strong>Guildmaster's Guide to Ravnica page 86</p>
      <br>`;
});

document.getElementById("simicScientist").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Simic Scientist</h2>
      <p><strong>Skill Proficiencies: </strong>Arcana, Medicine</p>
      <p><strong>Languages: </strong>Two of your choice</p>
      <p><strong>Equipment: </strong>A Simic insignia, a set of commoner's clothes, a book of research notes, an ink pen, a bottle of squid ink, a flask of oil (made from blubber), a vial of acid (derived from digestive juices), a vial of fish scales, a vial of seaweed, a vial of jellyfish stingers, a glass bottle of unidentified slime, and a belt pouch containing 10 gp (Azorius 1-zino coins)</p>
      <h3>Clades and Projects</h3>
      <p>As a Simic researcher, you are part of a clade—a diverse group of individuals combining disparate talents in pursuit of a common goal—or a researcher on a specialized, short-term project focused on addressing an immediate need. You can roll a d6 or choose from the options in the Research Options table to determine your area of research.</p>
      <table>
          <tr>
              <th>d6</th>
              <th>Clade/Project</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Hull Clade, focused on protection and durability</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Fin Clade, focused on movement</td>
          </tr>
          <tr>
              <td>3</td>
              <td>Gyre Clade, focused on cyclical patterns and metamagic</td>
          </tr>
          <tr>
              <td>4</td>
              <td>Guardian Project, focused on creating guard monsters and super soldiers</td>
          </tr>
          <tr>
              <td>5</td>
              <td>Crypsis Project, focused on intelligence and counterintelligence</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Independent research in a new area</td>
          </tr>
      </table>
      <h3>Feature: Researcher</h3>
      <p>When you attempt to learn or recall a magical or scientific fact, if you don't know that information, you know where and from whom you can obtain it. Usually, this information comes from a Simic laboratory, or sometimes from an Izzet facility, a library, a university, or an independent scholar or other learned person or creature. Knowing where the information can be found doesn't automatically enable you to learn it; you might need to offer bribes, favors, or other incentives to induce people to reveal their secrets.</p>
      <p>Your DM might rule that the knowledge you seek is secreted away in an inaccessible place, or that it simply can't be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.</p>
      <h3>Simic Guild Spells</h3>
      <p><strong>Prerequisite: </strong>Spellcasting or Pact Magic class feature</p>
      <p>For you, the spells on the Simic Guild Spells table are added to the spell list of your spellcasting class. (If you are a multiclass character with multiple spell lists, these spells are added to all of them.)</p>
      <table>
          <tr>
              <th>Spell Level</th>
              <th>Spells</th>
          </tr>
          <tr>
              <td>Cantrip</td>
              <td>acid splash, druidcraft</td>
          </tr>
          <tr>
              <td>1st</td>
              <td>detect poison and disease, expeditious retreat, jump</td>
          </tr>
          <tr>
              <td>2nd</td>
              <td>alter self, enhance ability, enlarge/reduce</td>
          </tr>
          <tr>
              <td>3rd</td>
              <td>gaseous form, water breathing, wind wall</td>
          </tr>
          <tr>
              <td>4th</td>
              <td>freedom of movement, polymorph</td>
          </tr>
          <tr>
              <td>5th</td>
              <td>creation</td>
          </tr>
      </table>
      <p>When your magic causes physical alterations in yourself or others, the result often displays the characteristics of fish, amphibians, or other water-dwelling creatures. Blue-green eddies of magical energy sometimes accompany your spellcasting, forming spirals that reflect the mathematical perfection of nature.</p>
      <p><source>Source: </source>Guildmaster's Guide to Ravnica page 93</p>
      <br>`;
});

document.getElementById("soldier").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Soldier</h2>
      <p><strong>Skill Proficiencies: </strong>Athletics, Intimidation</p>
      <p><strong>Tool Proficiencies: </strong>One type of gaming set, vehicles (land)</p>
      <p><strong>Equipment: </strong>An insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner), a bone dice set or playing card set, a set of common clothes, and a belt pouch containing 10 gp</p>
      <h3>Feature: Military Rank</h3>
      <p>You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.</p>
      <h3>Specialty</h3>
      <p>During your time as a soldier, you had a specific role to play in your unit or army. Roll a d8 or choose from the options in the table below to determine your role:</p>
      <table>
          <tr>
              <th>d8</th>
              <th>Role</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Officer</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Scout</td>
          </tr>
          <tr>
              <td>3</td>
              <td>Infantry</td>
          </tr>
          <tr>
              <td>4</td>
              <td>Cavalry</td>
          </tr>
          <tr>
              <td>5</td>
              <td>Healer</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Quartermaster</td>
          </tr>
          <tr>
              <td>7</td>
              <td>Standard-bearer</td>
          </tr>
          <tr>
              <td>8</td>
              <td>Support staff (cook, blacksmith, or the like)</td>
          </tr>
      </table>
      <p><strong>Source: </strong>Player's Handbook page 140</p>
      <br>`;
});

document.getElementById("urchin").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Urchin</h2>
      <p><strong>Skill Proficiencies: </strong>Sleight of Hand, Stealth</p>
      <p><strong>Tool Proficiencies: </strong>Disguise kit, Thieves' tools</p>
      <p><strong>Equipment: </strong>A small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothes, and a belt pouch containing 10 gp</p>
      <h3>Feature: City Secrets</h3>
      <p>You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.</p>
      <p><strong>Source: </strong>Player's Handbook page 141</p>
      <br>`;
});

document.getElementById("wildspacer").addEventListener("click", function () {
  var div = document.getElementById("backgroundInfo");
  div.innerHTML = `
      <h2>Wildspacer</h2>
      <p><strong>Skill Proficiencies: </strong>Athletics, Survival</p>
      <p><strong>Tool Proficiencies: </strong>Navigator's tools, vehicles (space)</p>
      <p><strong>Equipment: </strong>A belaying pin (club), a set of traveler's clothes, a grappling hook, 50 feet of hempen rope, and a pouch containing 10 gp</p>
      <h3>Close Encounter</h3>
      <p>You had a harrowing encounter with one of Wildspace's many terrors. You escaped with your life, but the encounter left you with a scar or two, or perhaps a recurring nightmare. Roll on the Close Encounter table to determine which creature nearly got the best of you. Creatures marked with an asterisk appear in Boo's Astral Menagerie; the others are described in the Monster Manual.</p>
      <table class="info-table">
          <tr>
              <th>d10</th>
              <th>Creature</th>
          </tr>
          <tr>
              <td>1</td>
              <td>Beholder</td>
          </tr>
          <tr>
              <td>2</td>
              <td>Cosmic horror*</td>
          </tr>
          <tr>
              <td>3</td>
              <td>Feyr*</td>
          </tr>
          <tr>
              <td>4</td>
              <td>Lunar dragon*</td>
          </tr>
          <tr>
              <td>5</td>
              <td>Mind flayer</td>
          </tr>
          <tr>
              <td>6</td>
              <td>Neh-thalggu*</td>
          </tr>
          <tr>
              <td>7</td>
              <td>Neogi*</td>
          </tr>
          <tr>
              <td>8</td>
              <td>Space clown*</td>
          </tr>
          <tr>
              <td>9</td>
              <td>Vampirate*</td>
          </tr>
          <tr>
              <td>10</td>
              <td>Void scavver*</td>
          </tr>
      </table>
      <h3>Feature: Wildspace Adaptation</h3>
      <p>You gain the Tough feat from the Player's Handbook. In addition, you learned how to adapt to zero gravity. Being weightless doesn't give you disadvantage on any of your melee attack rolls.</p>
      <p><strong>Source: </strong>Astral Adventurer's Guide page 8</p>
      <br>`;
});


}

