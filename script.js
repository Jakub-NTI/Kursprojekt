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
      <table class="info-table">
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
      <table class="info-table">
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
      <table class="info-table">
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
      <table class="info-table">
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
      <table class="info-table">
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


// Sample Races
document.getElementById("aarakocra").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Aarakocra</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1 <br>
      <strong>Size: </strong>Medium <br>
      <strong>Speed: </strong>30 ft., fly equal to your walking speed <br>
      <strong>Flight. </strong>Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor. <br>
      <strong>Talons. </strong>You have talons that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike. <br>
      <strong>Wind Caller. </strong>Starting at 3rd level, you can cast the gust of wind spell with this trait, without requiring a material component. Once you cast the spell with this trait, you can't do so again until you finish a long rest. You can also cast the spell using any spell slots you have of 2nd level or higher. <br>
      Intelligence, Wisdom, or Charisma is your spellcasting ability for when you cast gust of wind with this trait (choose when you select this race). <br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character. <br>
      <strong>Source: </strong>MPMM, page 5
    </p>`;
});

document.getElementById("aasimar").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Aasimar</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1 <br>
      <strong>Size: </strong>Small or Medium <br>
      <strong>Speed: </strong>30 ft. <br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you select this race. <br>
      <strong>Celestial Resistance. </strong>You have resistance to necrotic damage and radiant damage. <br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray. <br>
      <strong>Healing Hands. </strong>As an action, you can touch a creature and roll a number of d4s equal to your proficiency bonus. The creature regains a number of hit points equal to the total rolled. Once you use this trait, you can't use it again until you finish a long rest. <br>
      <strong>Light Bearer. </strong>You know the light cantrip. Charisma is your spellcasting ability for it. <br>
      <strong>Celestial Revelation. </strong>When you reach 3rd level, choose one of the revelation options below. Thereafter, you can use a bonus action to unleash the celestial energy within yourself, gaining the benefits of that revelation. Your transformation lasts for 1 minute or until you end it as a bonus action. Once you transform using your revelation below, you can't use it again until you finish a long rest. <br>
      <strong>Necrotic Shroud. </strong>Your eyes briefly become pools of darkness, and ghostly, flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you that can see you must succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your next turn. Until the transformation ends, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus. <br>
      <strong>Radiant Consumption. </strong>Searing light temporarily radiates from your eyes and mouth. For the duration, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes radiant damage equal to your proficiency bonus. Until the transformation ends, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus. <br>
      <strong>Radiant Soul. </strong>Two luminous, spectral wings sprout from your back temporarily. Until the transformation ends, you have a flying speed equal to your walking speed, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your proficiency bonus. <br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character. <br>
      <strong>Source: </strong>MPMM, page 7 <br>
    </p>`;
});

document.getElementById("astralElf").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Astral Elf</h2>
    <p>
      <strong>Ability Scores: </strong> Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong> Medium<br>
      <strong>Speed: </strong> 30 ft.<br>
      <strong>Creature Type. </strong> You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf.<br>
      <strong>Astral Fire. </strong> You know one of the following cantrips of your choice: dancing lights, light, or sacred flame. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this race).<br>
      <strong>Darkvision. </strong> You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Fey Ancestry. </strong> You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br>
      <strong>Keen Senses. </strong> You have proficiency in the Perception skill.<br>
      <strong>Starlight Step. </strong> As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
      <strong>Astral Trance. </strong> You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain conscious. Whenever you finish this trance, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory and the experiences of entities on the Astral Plane, and you retain them until you finish your next long rest.<br>
      <strong>Languages. </strong> You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong> AAG, page 10<br>
    </p>`;
});

document.getElementById("autognome").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Autognome</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Creature Type: </strong>Construct<br>
      <strong>Size: </strong>Small<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Creature Type: </strong>You are a Construct.<br>
      <strong>Armored Casing. </strong>You are encased in thin metal or some other durable material. While you aren't wearing armor, your base Armor Class is 13 + your Dexterity modifier.<br>
      <strong>Built for Success. </strong>You can add a d4 to one attack roll, ability check, or saving throw you make, and you can do so after seeing the d20 roll but before the effects of the roll are resolved. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
      <strong>Healing Machine. </strong>If the mending spell is cast on you, you can spend a Hit Die, roll it, and regain a number of hit points equal to the roll plus your Constitution modifier (minimum of 1 hit point). In addition, your creator designed you to benefit from several spells that preserve life but that normally don't affect Constructs: cure wounds, healing word, mass cure wounds, mass healing word, and spare the dying.<br>
      <strong>Mechanical Nature. </strong>You have resistance to poison damage and immunity to disease, and you have advantage on saving throws against being paralyzed or poisoned. You don't need to eat, drink, or breathe.<br>
      <strong>Sentry's Rest. </strong>When you take a long rest, you spend at least 6 hours in an inactive, motionless state, instead of sleeping. In this state, you appear inert, but you remain conscious.<br>
      <strong>Specialized Design. </strong>You gain two tool proficiencies of your choice, selected from the Player's Handbook.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>AAG, page 11<br>
    </p>`;
});

document.getElementById("bugbear").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Bugbear</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Creature Type. </strong>You are a Humanoid. You are also considered a goblinoid for any prerequisite or effect that requires you to be a goblinoid.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Fey Ancestry. </strong>You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br>
      <strong>Long-Limbed. </strong>When you make a melee attack on your turn, your reach for it is 5 feet greater than normal.<br>
      <strong>Powerful Build. </strong>You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.<br>
      <strong>Sneaky. </strong>You are proficient in the Stealth skill. In addition, without squeezing, you can move through and stop in a space large enough for a Small creature.<br>
      <strong>Surprise Attack. </strong>If you hit a creature with an attack roll, the creature takes an extra 2d6 damage if it hasn't taken a turn yet in the current combat.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 8<br>
    </p>`;
});

document.getElementById("centaur").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Centaur</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Creature Type: </strong>Fey<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>40 ft.<br>
      <strong>Creature Type. </strong>You are a Fey.<br>
      <strong>Charge. </strong>If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves.<br>
      <strong>Equine Build. </strong>You count as one size larger when determining your carrying capacity and the weight you can push or drag.<br>
      <strong>In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet instead of the normal 1 extra foot.</strong><br>
      <strong>Hooves. </strong>You have hooves that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike.<br>
      <strong>Natural Affinity. </strong>Your fey connection to nature gives you an intuitive connection to the natural world and the animals within it. You therefore have proficiency in one of the following skills of your choice: Animal Handling, Medicine, Nature, or Survival.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 9<br>
    </p>`;
});

document.getElementById("changeling").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Changeling</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Creature Type: </strong>Fey<br>
      <strong>Size: </strong>Small or Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Creature Type. </strong>You are a Fey.<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you select this race.<br>
      <strong>Changeling Instincts. </strong>Thanks to your connection to the fey realm, you gain proficiency with two of the following skills of your choice: Deception, Insight, Intimidation, Performance, or Persuasion.<br>
      <strong>Shapechanger. </strong>As an action, you change your appearance and your voice. You determine the specifics of the changes, including your coloration, hair length, and sex. You can also adjust your height between Medium and Small. You can make yourself appear as a member of another race, though none of your game statistics change. You can't duplicate the appearance of an individual you've never seen, and you must adopt a form that has the same basic arrangement of limbs that you have. Your clothing and equipment aren't changed by this trait.<br>
      <strong>You stay in the new form until you use an action to revert to your true form or until you die.</strong><br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 10<br>
    </p>`;
});

document.getElementById("customLineage").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Custom Lineage</h2>
    <p>
      <strong>Ability Scores: </strong>Choose any +2<br>
      <strong>Size: </strong>Small or Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Instead of choosing one of the game's races for your character at 1st level, you can use the following traits to represent your character's lineage, giving you full control over how your character's origin shaped them:</strong><br>
      <strong>Creature Type. </strong>You are a humanoid. You determine your appearance and whether you resemble any of your kin.<br>
      <strong>Size. </strong>You are Small or Medium (your choice).<br>
      <strong>Feat. </strong>You gain one feat of your choice for which you qualify.<br>
      <strong>Variable Trait. </strong>You gain one of the following options of your choice: (a) darkvision with a range of 60 feet or (b) proficiency in one skill of your choice.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Your race is considered to be a Custom Lineage for any game feature that requires a certain race, such as elf or dwarf.</strong><br>
      <strong>Source: </strong>TCE, page 8<br>
    </p>`;
});

document.getElementById("deepGnome").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Deep Gnome</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Creature Type. </strong>You are a Humanoid. You are also considered a gnome for any prerequisite or effect that requires you to be a gnome.<br>
      <strong>Darkvision. </strong>You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Gift of the Svirfneblin. </strong>Starting at 3rd level, you can cast the disguise self spell with this trait. Starting at 5th level, you can also cast the nondetection spell with it, without requiring a material component. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these using spell slots you have of the appropriate level.<br>
      <strong>Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).</strong><br>
      <strong>Gnomish Magic Resistance. </strong>You have advantage on Intelligence, Wisdom, and Charisma saving throws against spells.<br>
      <strong>Svirfneblin Camouflage. </strong>When you make a Dexterity (Stealth) check, you can make the check with advantage. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 11<br>
    </p>`;
});

document.getElementById("dhampir").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Dhampir</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small or Medium<br>
      <strong>Speed: </strong>35 ft., climb equal to your walking speed<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you gain this lineage.<br>
      <strong>Ancestral Legacy. </strong>If you replace a race with this lineage, you can keep the following elements of that race: any skill proficiencies you gained from it and any climbing, flying, or swimming speed you gained from it.<br>
      If you don't keep any of those elements or you choose this lineage at character creation, you gain proficiency in two skills of your choice.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness as shades of gray.<br>
      <strong>Deathless Nature. </strong>You don't need to breathe.<br>
      <strong>Spider Climb. </strong>You have a climbing speed equal to your walking speed. In addition, at 3rd level, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free.<br>
      <strong>Vampiric Bite. </strong>Your fanged bite is a natural weapon, which counts as a simple melee weapon with which you are proficient. You add your Constitution modifier, instead of your Strength modifier, to the attack and damage rolls when you attack with this bite. It deals 1d4 piercing damage on a hit. While you are missing half or more of your hit points, you have advantage on attack rolls you make with this bite.<br>
      When you attack with this bite and hit a creature that isn't a Construct or an Undead, you can empower yourself in one of the following ways of your choice:<br>
      - You regain hit points equal to the piercing damage dealt by the bite.<br>
      - You gain a bonus to the next ability check or attack roll you make; the bonus equals the piercing damage dealt by the bite.<br>
      You can empower yourself with this bite a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>VRGR, page 16<br>
    </p>`;
});

document.getElementById("dragonborn").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Dragonborn</h2>
    <p>
      <strong>Ability Scores: </strong>Str +2; Cha +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.<br>
      <strong>Size. </strong>Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.<br>
      <strong>Draconic Ancestry. </strong>You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.<br>
    </p>
    <table class="info-table">
      <p><strong>Draconic Ancestry</strong></p>
      <tr>
        <th>Dragon</th>
        <th>Damage Type</th>
        <th>Breath Weapon</th>
      </tr>
      <tr>
        <td>Black</td>
        <td>Acid</td>
        <td>5 by 30 ft. line (Dex. save)</td>
      </tr>
      <tr>
        <td>Blue</td>
        <td>Lightning</td>
        <td>5 by 30 ft. line (Dex. save)</td>
      </tr>
      <tr>
        <td>Brass</td>
        <td>Fire</td>
        <td>5 by 30 ft. line (Dex. save)</td>
      </tr>
      <tr>
        <td>Bronze</td>
        <td>Lightning</td>
        <td>5 by 30 ft. line (Dex. save)</td>
      </tr>
      <tr>
        <td>Copper</td>
        <td>Acid</td>
        <td>5 by 30 ft. line (Dex. save)</td>
      </tr>
      <tr>
        <td>Gold</td>
        <td>Fire</td>
        <td>15 ft. cone (Dex. save)</td>
      </tr>
      <tr>
        <td>Green</td>
        <td>Poison</td>
        <td>15 ft. cone (Con. save)</td>
      </tr>
      <tr>
        <td>Red</td>
        <td>Fire</td>
        <td>15 ft. cone (Dex. save)</td>
      </tr>
      <tr>
        <td>Silver</td>
        <td>Cold</td>
        <td>15 ft. cone (Con. save)</td>
      </tr>
      <tr>
        <td>White</td>
        <td>Cold</td>
        <td>15 ft. cone (Con. save)</td>
      </tr>
    </table>
    <p>
      <strong>Breath Weapon. </strong>You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.<br>
      When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.<br>
      After you use your breath weapon, you can't use it again until you complete a short or long rest.<br>
      <strong>Damage Resistance. </strong>You have resistance to the damage type associated with your draconic ancestry.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.<br>
      <strong>Source: </strong>PHB, page 32<br>
    </p>`;
});

document.getElementById("duergar").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Duergar</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Creature Type. </strong>You are a Humanoid. You are also considered a dwarf for any prerequisite or effect that requires you to be a dwarf.<br>
      <strong>Darkvision. </strong>You can see in dim light within 120 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Duergar Magic. </strong>Starting at 3rd level, you can cast the enlarge/reduce spell on yourself with this trait, without requiring a material component. Starting at 5th level, you can also cast the invisibility spell on yourself with this trait, without requiring a material component. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level.<br>
      Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).<br>
      <strong>Dwarven Resilience. </strong>You have advantage on saving throws you make to avoid or end the poisoned condition on yourself. You also have resistance to poison damage.<br>
      <strong>Psionic Fortitude. </strong>You have advantage on saving throws you make to avoid or end the charmed or stunned condition on yourself.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 12<br>
    </p>`;
});

document.getElementById("dwarfHill").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Dwarf (Hill)</h2>
    <p>
      <strong>Ability Scores: </strong>Con +2; Wis +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>25 ft.<br>
      <strong>Age. </strong>Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.<br>
      <strong>Size. </strong>Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.<br>
      <strong>Speed. </strong>Your speed is not reduced by wearing heavy armor.<br>
      <strong>Darkvision. </strong>Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Dwarven Resilience. </strong>You have advantage on saving throws against poison, and you have resistance against poison damage.<br>
      <strong>Dwarven Combat Training. </strong>You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.<br>
      <strong>Tool Proficiency. </strong>You gain proficiency with the artisan's tools of your choice: Smith's tools, brewer's supplies, or mason's tools.<br>
      <strong>Stonecunning. </strong>Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.<br>
      <strong>Dwarven Toughness. </strong>Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.<br>
      <strong>Source: </strong>PHB, page 20<br>
    </p>`;
});

document.getElementById("dwarfMountain").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Dwarf (Mountain)</h2>
    <p>
      <strong>Ability Scores: </strong>Str +2; Con +2<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>25 ft.<br>
      <strong>Age. </strong>Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.<br>
      <strong>Size. </strong>Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.<br>
      <strong>Speed. </strong>Your speed is not reduced by wearing heavy armor.<br>
      <strong>Darkvision. </strong>Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Dwarven Resilience. </strong>You have advantage on saving throws against poison, and you have resistance against poison damage.<br>
      <strong>Dwarven Combat Training. </strong>You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.<br>
      <strong>Tool Proficiency. </strong>You gain proficiency with the artisan's tools of your choice: Smith's tools, brewer's supplies, or mason's tools.<br>
      <strong>Stonecunning. </strong>Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.<br>
      <strong>Dwarven Armor Training. </strong>You have proficiency with light and medium armor.<br>
      <strong>Source: </strong>PHB, page 20<br>
    </p>`;
});

document.getElementById("eladrin").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Eladrin</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Choose your eladrin's season: </strong>autumn, winter, spring, or summer. When finishing a long rest, you can change your season. See the "Info" tab for more information.<br>
      <strong>Creature Type. </strong>You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Fey Ancestry. </strong>You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br>
      <strong>Fey Step. </strong>As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
      <strong>When you reach 3rd level, your Fey Step gain an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Intelligence, Wisdom, or Charisma modifier (choose when you select this race):</strong><br>
      <strong>Autumn. </strong>Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a Wisdom saving throw or be charmed by you for 1 minute, or until you or your companions deal any damage to the creatures.<br>
      <strong>Winter. </strong>When you use your Fey Step, one creature of your choice that you can see within 5 feet of you before you teleport must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.<br>
      <strong>Spring. </strong>When you use your Fey Step, you can touch one willing creature within 5 feet of you. That creature then teleports instead of you, appearing in an unoccupied space of your choice that you can see within 30 feet of you.<br>
      <strong>Summer. </strong>Immediately after you use your Fey Step, each creature of your choice that you can see within 5 feet of you takes fire damage equal to your proficiency bonus.<br>
      <strong>Keen Senses. </strong>You have proficiency in the Perception skill.<br>
      <strong>Trance. </strong>You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.<br>
      <strong>Whenever you finish this trance, you can change your season, and you can gain two proficiencies that you don't have, each one with a weapon or a tool of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest.</strong><br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 13<br>
    </p>`;
});

document.getElementById("elfDrow").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Elf (Drow)</h2>
    <p>
      <strong>Ability Scores: </strong>Dex +2; Cha +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.<br>
      <strong>Size. </strong>Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.<br>
      <strong>Superior Darkvision. </strong>Accustomed to the depths of the Underdark, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Keen Senses. </strong>You have proficiency in the Perception skill.<br>
      <strong>Fey Ancestry. </strong>You have advantage on saving throws against being charmed, and magic can't put you to sleep.<br>
      <strong>Trance. </strong>Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.<br>
      <strong>If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed.</strong><br>
      <strong>Languages. </strong>You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.<br>
      <strong>Sunlight Sensitivity. </strong>You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.<br>
      <strong>Drow Magic. </strong>You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait; you regain the ability to cast it when you finish a long rest. When you reach 5th level, you can also cast the darkness spell once per day with this trait; you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells.<br>
      <strong>Drow Weapon Training. </strong>You have proficiency with rapiers, shortswords, and hand crossbows.<br>
      <strong>Source: </strong>PHB, page 24<br>
    </p>`;
});

document.getElementById("elfHigh").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Elf (High)</h2>
    <p>
      <strong>Ability Scores: </strong>Dex +2; Int +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.<br>
      <strong>Size. </strong>Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.<br>
      <strong>Darkvision. </strong>Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Keen Senses. </strong>You have proficiency in the Perception skill.<br>
      <strong>Fey Ancestry. </strong>You have advantage on saving throws against being charmed, and magic can't put you to sleep.<br>
      <strong>Trance. </strong>Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.<br>
      <strong>If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed.</strong><br>
      <strong>Languages. </strong>You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.<br>
      <strong>Elf Weapon Training. </strong>You have proficiency with the longsword, shortsword, shortbow, and longbow.<br>
      <strong>Cantrip. </strong>You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.<br>
      <strong>Extra Language. </strong>You can speak, read, and write one extra language of your choosing.<br>
      <strong>Source: </strong>PHB, page 23<br>
    </p>`;
});

document.getElementById("elfWood").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Elf (Wood)</h2>
    <p>
      <strong>Ability Scores: </strong>Dex +2; Wis +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>35 ft.<br>
      <strong>Age. </strong>Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.<br>
      <strong>Size. </strong>Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.<br>
      <strong>Darkvision. </strong>Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Keen Senses. </strong>You have proficiency in the Perception skill.<br>
      <strong>Fey Ancestry. </strong>You have advantage on saving throws against being charmed, and magic can't put you to sleep.<br>
      <strong>Trance. </strong>Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.<br>
      <strong>If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed.</strong><br>
      <strong>Languages. </strong>You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.<br>
      <strong>Elf Weapon Training. </strong>You have proficiency with the longsword, shortsword, shortbow, and longbow.<br>
      <strong>Fleet of Foot. </strong>Your base walking speed increases to 35 feet.<br>
      <strong>Mask of the Wild. </strong>You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.<br>
      <strong>Source: </strong>PHB, page 24<br>
    </p>`;
});

document.getElementById("fairy").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Fairy</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Creature Type: </strong>Fey<br>
      <strong>Size: </strong>Small<br>
      <strong>Speed: </strong>30 ft., fly equal to your walking speed<br>
      <strong>Creature Type. </strong>You are a Fey.<br>
      <strong>Fairy Magic. </strong>You know the druidcraft cantrip. Starting at 3rd level, you can cast the faerie fire spell with this trait. Starting at 5th level, you can also cast the enlarge/reduce spell with this trait. Once you cast faerie fire or enlarge/reduce with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.<br>
      <strong>Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).</strong><br>
      <strong>Flight. </strong>Because of your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 14<br>
    </p>`;
});

document.getElementById("firbolg").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Firbolg</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Firbolg Magic. </strong>You can cast detect magic and disguise self spells with this trait. When you use this version of disguise self, you can seem up to 3 feet shorter or taller. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have.<br>
      <strong>Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).</strong><br>
      <strong>Hidden Step. </strong>As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
      <strong>Powerful Build. </strong>You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.<br>
      <strong>Speech of Beast and Leaf. </strong>You have the ability to communicate in a limited manner with Beasts, Plants, and vegetation. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on all Charisma checks you make to influence them.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 15<br>
    </p>`;
});

document.getElementById("genasiAir").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Genasi (Air)</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small or Medium. You choose the size when you select this race.<br>
      <strong>Speed: </strong>35 ft.<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you select this race.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Unending Breath. </strong>You can hold your breath indefinitely while you're not incapacitated.<br>
      <strong>Lightning Resistance. </strong>You have resistance to lightning damage.<br>
      <strong>Mingle with the Wind. </strong>You know the shocking grasp cantrip. Starting at 3rd level, you can cast the feather fall spell with this trait, without requiring a material component. Starting at 5th level, you can also cast the levitate spell with this trait, without requiring a material component. Once you cast feather fall or levitate with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.<br>
      <strong>Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).</strong><br>
      <strong>Source: </strong>MPMM, page 16<br>
    </p>`;
});

document.getElementById("genasiEarth").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Genasi (Earth)</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small or Medium. You choose the size when you select this race.<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you select this race.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Earth Walk. </strong>You can move across difficult terrain without expending extra movement if you are using your walking speed on the ground or a floor.<br>
      <strong>Merge with Stone. </strong>You know the blade ward cantrip. You can cast it as normal, and you can also cast it as a bonus action a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest.<br>
      <strong>Starting at 5th level, </strong>you can cast the pass without trace spell with this trait, without requiring a material component. Once you cast that spell with this trait, you can't do so again until you finish a long rest. You can also cast it using any spell slots you have of 2nd level or higher.<br>
      <strong>Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).</strong><br>
      <strong>Source: </strong>MPMM, page 17<br>
    </p>`;
});

document.getElementById("genasiFire").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Genasi (Fire)</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small or Medium. You choose the size when you select this race.<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you select this race.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Fire Resistance. </strong>You have resistance to fire damage.<br>
      <strong>Reach to the Blaze. </strong>You know the produce flame cantrip. Starting at 3rd level, you can cast the burning hands spell with this trait. Starting at 5th level, you can also cast the flame blade spell with this trait, without a material component. Once you cast burning hands or flame blade with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.<br>
      <strong>Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).</strong><br>
      <strong>Source: </strong>MPMM, page 17<br>
    </p>`;
});

document.getElementById("genasiWater").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Genasi (Water)</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small or Medium. You choose the size when you select this race.<br>
      <strong>Speed: </strong>30 ft., swim equal to your walking speed.<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you select this race.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Speed. </strong>Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed.<br>
      <strong>Acid Resistance. </strong>You have resistance to acid damage.<br>
      <strong>Amphibious. </strong>You breathe air and water.<br>
      <strong>Call to the Wave. </strong>You know the acid splash cantrip. Starting at 3rd level, you can cast the create or destroy water spell with this trait. Starting at 5th level, you can also cast the water walk spell with this trait, without requiring a material component. Once you cast create or destroy water or water walk with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level.<br>
      <strong>Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).</strong><br>
      <strong>Source: </strong>MPMM, page 17<br>
    </p>`;
});

document.getElementById("giff").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Giff</h2>
        <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft., swim equal to your walking speed<br>
      <strong>Astral Spark. </strong>Your psychic connection to the Astral Plane enables you to mystically access a spark of divine power, which you can channel through your weapons. When you hit a target with a simple or martial weapon, you can cause the target to take extra force damage equal to your proficiency bonus. You can use this trait a number of times equal to your proficiency bonus, but you can use it no more than once per turn. You regain all expended uses when you finish a long rest.<br>
      <strong>Firearms Mastery. </strong>You have a mystical connection to firearms that traces back to the gods of the giff, who delighted in such weapons. You have proficiency with all firearms and ignore the loading property of any firearm. In addition, attacking at long range with a firearm doesn't impose disadvantage on your attack roll.<br>
      <strong>Hippo Build. </strong>You have advantage on Strength-based ability checks and Strength saving throws. In addition, you count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>AAG, page 12<br>
    </p>`;
});

document.getElementById("githyanki").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Githyanki</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Astral Knowledge. </strong>You can mystically access a reservoir of experiences of entities connected to the Astral Plane. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you momentarily project your consciousness into the Astral Plane. These proficiencies last until the end of your next long rest.<br>
      <strong>Githyanki Psionics. </strong>You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait. Starting at 3rd level, you can cast the jump spell with this trait. Starting at 5th level, you can also cast misty step with it. Once you cast jump or misty step with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait. None of these spells require spell components when you cast them with this trait.<br>
      <strong>Psychic Resilience. </strong>You have resistance to psychic damage.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 18<br>
    </p>`;
});

document.getElementById("githzerai").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Githzerai</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Githzerai Psionics. </strong>You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait. Starting at 3rd level, you can cast the shield spell with this trait. Starting at 5th level, you can also cast the detect thoughts spell with it. Once you cast shield or detect thoughts spell with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast either of those spells using any spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait. None of these spells require spell components when you cast them with this trait.<br>
      <strong>Mental Discipline. </strong>Your innate psychic defenses grant you advantage on saving throws you make to avoid or end the charmed and frightened conditions on yourself.<br>
      <strong>Psychic Resilience. </strong>You have resistance to psychic damage.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 19<br>
    </p>`;
});

document.getElementById("gnomeForest").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Gnome (Forest)</h2>
    <p>
      <strong>Ability Scores: </strong>Int +2; Dex +1<br>
      <strong>Size: </strong>Small<br>
      <strong>Speed: </strong>25 ft.<br>
      <strong>Age. </strong>Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.<br>
      <strong>Size. </strong>Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.<br>
      <strong>Darkvision. </strong>Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Gnome Cunning. </strong>You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.<br>
      <strong>Natural Illusionist. </strong>You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.<br>
      <strong>Speak with Small Beasts. </strong>Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.<br>
      <strong>You may roll for your character's height and weight on the Random Height and Weight table. </strong>The roll in the Height Modifier column adds a number (in inches) to the character's base height. To get a weight, multiply the number you rolled for height by the roll in the Weight Modifier column and add the result (in pounds) to the base weight.<br>
      <strong>Source: </strong>PHB, page 37<br>
    </p>`;
});

document.getElementById("gnomeRock").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Gnome (Rock)</h2>
    <p>
      <strong>Ability Scores: </strong>Int +2; Con +1<br>
      <strong>Size: </strong>Small<br>
      <strong>Speed: </strong>25 ft.<br>
      <strong>Age. </strong>Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.<br>
      <strong>Size. </strong>Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.<br>
      <strong>Darkvision. </strong>Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Gnome Cunning. </strong>You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.<br>
      <strong>Artificer's Lore. </strong>Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.<br>
      <strong>Tinker. </strong>You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.<br>
      <strong>When you create a device, choose one of the following options:</strong><br>
      <strong>Clockwork Toy. </strong>This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.<br>
      <strong>Fire Starter. </strong>The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.<br>
      <strong>Music Box. </strong>When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.<br>
      <strong>You may roll for your character's height and weight on the Random Height and Weight table. </strong>The roll in the Height Modifier column adds a number (in inches) to the character's base height. To get a weight, multiply the number you rolled for height by the roll in the Weight Modifier column and add the result (in pounds) to the base weight.<br>
      <strong>Source: </strong>PHB, page 37<br>
    </p>`;
});

document.getElementById("goblin").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Goblin</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Creature Type. </strong>You are a Humanoid. You are also considered a goblinoid for any prerequisite or effect that requires you to be a goblinoid.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were in dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Fey Ancestry. </strong>You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br>
      <strong>Fury of the Small. </strong>When you damage a creature with an attack or a spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your proficiency bonus.<br>
      <strong>You can use this trait a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest, and you can use it no more than once per turn.</strong><br>
      <strong>Nimble Escape. </strong>You can take the Disengage or Hide action as a bonus action on each of your turns.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 20<br>
    </p>`;
});

document.getElementById("goliath").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Goliath</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Little Giant. </strong>You have proficiency in the Athletics skill, and you count as one size larger when determining your carrying weight and the weight you can push, drag, or lift.<br>
      <strong>Mountain Born. </strong>You have resistance to cold damage. You also naturally acclimate to high altitudes, even if you've never been to one. This includes elevations above 20,000 feet.<br>
      <strong>Stone's Endurance. </strong>You can supernaturally draw on unyielding stone to shrug off harm. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled and reduce the damage by that total.<br>
      <strong>You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</strong><br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 21<br>
    </p>`;
});

document.getElementById("grung").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Grung</h2>
    <p>
      <strong>Ability Scores: </strong>Dex +2; Con +1<br>
      <strong>Size: </strong>Small<br>
      <strong>Speed: </strong>25 ft., climb 25 ft.<br>
      <strong>Age. </strong>Grungs mature to adulthood in a single year, but have been known to live up to 50 years.<br>
      <strong>Alignment. </strong>Most grungs are lawful, having been raised in a strict caste system. They tend toward evil as well, coming from a culture where social advancement occurs rarely, and most often because another member of your army has died and there is no one else of that caste to fill the vacancy.<br>
      <strong>Size. </strong>Grungs stand between 2½ and 3½ feet tall and average about 30 pounds. Your size is Small.<br>
      <strong>Arboreal Alertness. </strong>You have proficiency in the Perception skill.<br>
      <strong>Amphibious. </strong>You can breathe air and water.<br>
      <strong>Poison Immunity. </strong>You're immune to poison damage and the poisoned condition.<br>
      <strong>Poisonous Skin. </strong>Any creature that grapples you or otherwise comes into direct contact with your skin must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. A poisoned creature no longer in direct contact with you can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.<br>
      <strong>You can also apply this poison to any piercing weapon as part of an attack with that weapon, though when you hit the poison reacts differently. The target must succeed on a DC 12 Constitution saving throw or take 2d4 poison damage.</strong><br>
      <strong>Standing Leap. </strong>Your long jump is up to 25 feet and your high jump is up to 15 feet, with or without a running start.<br>
      <strong>Water Dependency. </strong>If you fail to immerse yourself in water for at least 1 hour during a day, you suffer one level of exhaustion at the end of that day. You can only recover from this exhaustion through magic or by immersing yourself in water for at least 1 hour.<br>
      <strong>Languages. </strong>You can speak, read, and write Grung.<br>
      <strong>Source: </strong>OGA, page 4<br>
    </p>`;
});

document.getElementById("hadozee").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Hadozee</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small or Medium<br>
      <strong>Speed: </strong>30 ft., climb equal to your walking speed<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you select this race.<br>
      <strong>Dexterous Feet. </strong>As a bonus action, you can use your feet to manipulate an object, open or close a door or container, or pick up or set down a Tiny object.<br>
      <strong>Glide. </strong>When you fall at least 10 feet above the ground, you can use your reaction to extend your skin membranes to glide horizontally a number of feet equal to your walking speed, and you take 0 damage from the fall. You determine the direction of the glide.<br>
      <strong>Hadozee Dodge. </strong>The magic that runs in your veins heightens your natural defenses. When you take damage, you can use your reaction to roll a d6. Add your proficiency bonus to the number rolled, and reduce the damage you take by an amount equal to that total (minimum of 0 damage).<br>
      <strong>You can use this trait a number of times equal to your proficiency bonus. You regain all expended uses when you finish a long rest.</strong><br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>AAG, page 13<br>
    </p>`;
});

document.getElementById("halfElf").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Half-Elf</h2>
    <p>
      <strong>Ability Scores: </strong>Cha +2; Choose any other two unique +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.<br>
      <strong>Size. </strong>Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.<br>
      <strong>Darkvision. </strong>Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Fey Ancestry. </strong>You have advantage on saving throws against being charmed, and magic can't put you to sleep.<br>
      <strong>Skill Versatility. </strong>You gain proficiency in two skills of your choice.<br>
      <strong>Languages. </strong>You can speak, read, and write Common, Elvish, and one extra language of your choice.<br>
      <strong>Source: </strong>PHB, page 38. Available in the SRD.<br>
    </p>`;
});

document.getElementById("halfOrc").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Half-Orc</h2>
    <p>
      <strong>Ability Scores: </strong>Str +2; Con +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.<br>
      <strong>Size. </strong>Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.<br>
      <strong>Darkvision. </strong>Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Menacing. </strong>You gain proficiency in the Intimidation skill.<br>
      <strong>Relentless Endurance. </strong>When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.<br>
      <strong>Savage Attacks. </strong>When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.<br>
      <strong>Source: </strong>PHB, page 40.<br>
    </p>`;
});

document.getElementById("halflingLightfoot").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Halfling (Lightfoot)</h2>
    <p>
      <strong>Ability Scores: </strong>Dex +2; Cha +1<br>
      <strong>Size: </strong>Small<br>
      <strong>Speed: </strong>25 ft.<br>
      <strong>Age. </strong>A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.<br>
      <strong>Size. </strong>Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.<br>
      <strong>Lucky. </strong>When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.<br>
      <strong>Brave. </strong>You have advantage on saving throws against being frightened.<br>
      <strong>Halfling Nimbleness. </strong>You can move through the space of any creature that is of a size larger than yours.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.<br>
      <strong>Naturally Stealthy. </strong>You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.<br>
      <strong>Source: </strong>PHB, page 28.<br>
    </p>`;
});

document.getElementById("halflingStout").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Halfling (Stout)</h2>
    <p>
      <strong>Ability Scores: </strong>Dex +2; Con +1<br>
      <strong>Size: </strong>Small<br>
      <strong>Speed: </strong>25 ft.<br>
      <strong>Age. </strong>A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.<br>
      <strong>Size. </strong>Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.<br>
      <strong>Lucky. </strong>When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.<br>
      <strong>Brave. </strong>You have advantage on saving throws against being frightened.<br>
      <strong>Halfling Nimbleness. </strong>You can move through the space of any creature that is of a size larger than yours.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.<br>
      <strong>Stout Resilience. </strong>You have advantage on saving throws against poison, and you have resistance against poison damage.<br>
      <strong>Source: </strong>PHB, page 28.<br>
    </p>`;
});

document.getElementById("harengon").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Harengon</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small or Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you select this race.<br>
      <strong>Hare-Trigger. </strong>You can add your proficiency bonus to your initiative rolls.<br>
      <strong>Leporine Senses. </strong>You have proficiency in the Perception skill.<br>
      <strong>Lucky Footwork. </strong>When you fail a Dexterity saving throw, you can use your reaction to roll a d4 and add it to the save, potentially turning the failure into a success. You can't use this reaction if you're prone or your speed is 0.<br>
      <strong>Rabbit Hop. </strong>As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 22.<br>
    </p>`;
});

document.getElementById("hexblood").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Hexblood</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Creature Type: </strong>Fey<br>
      <strong>Size: </strong>Small or Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Creature Type. </strong>You are a Fey.<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you gain this lineage.<br>
      <strong>Ancestral Legacy. </strong>If you replace a race with this lineage, you can keep the following elements of that race: any skill proficiencies you gained from it and any climbing, flying, or swimming speed you gained from it. If you don't keep any of those elements or you choose this lineage at character creation, you gain proficiency in two skills of your choice.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness as shades of gray.<br>
      <strong>Eerie Token. </strong>As a bonus action, you can harmlessly remove a lock of your hair, one of your nails, or one of your teeth. This token is imbued with magic until you finish a long rest. While the token is imbued in this way, you can take these actions:<br>
      <strong>Telepathic Message. </strong> As an action, you can send a telepathic message to the creature holding or carrying the token, as long as you are within 10 miles of it. The message can contain up to twenty-five words.<br>
      <strong>Remote Viewing. </strong> If you are within 10 miles of the token, you can enter a trance as an action. The trance lasts for 1 minute, but it ends early if you dismiss it (no action required) or are incapacitated. During this trance, you can see and hear from the token as if you were located where it is. While you are using your senses at the token's location, you are blinded and deafened in regard to your own surroundings. When the trance ends, the token is harmlessly destroyed. Once you create a token using this feature, you can't do so again until you finish a long rest, at which point your missing part regrows.<br>
      <strong>Hex Magic. </strong>You can cast the disguise self and hex spells with this trait. Once you cast either of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have. Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells (choose the ability when you gain this lineage).<br>
    </p>  
    <div class='info-div'>
      <p>
        <strong>Becoming a Hag</strong><br>
        Hags can undertake a ritual to irreversibly transform a hexblood they created into a new hag, either one of their own kind or that embodies the hexblood's nature. This requires that both the hag and hexblood be in the same place and consent to the lengthy ritual—circumstances most hexbloods shun but might come to accept over the course of centuries. Once a hexblood undergoes this irreversible ritual, they emerge as a hag NPC no longer under the control of the hexblood's player, unless the DM rules otherwise.<br>
      </p>
    </div>
    <p>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>VRGR, page 18.<br>
    </p>`;
});

document.getElementById("hobgoblin").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Hobgoblin</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Creature Type. </strong>You are a Humanoid. You are also considered a goblinoid for any prerequisite or effect that requires you to be a goblinoid.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Fey Ancestry. </strong>You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br>
      <strong>Fey Gift. </strong>You can use this trait to take the Help action as a bonus action, and you can do so a number of times equal to your proficiency bonus. You regain all expended uses when you finish a long rest. Starting at 3rd level, choose one of the options below each time you take the Help action with this trait:<br>
      <em>Hospitality.</em> You and the creature you help each gain a number of temporary hit points equal to 1d6 plus your proficiency bonus.<br>
      <em>Passage.</em> You and the creature you help each increase your walking speeds by 10 feet until the start of your next turn.<br>
      <em>Spite.</em> Until the start of your next turn, the first time the creature you help hits a target with an attack roll, that target has disadvantage on the next attack roll it makes within the next minute.<br>
      <em>Fortune from the Many.</em> If you miss with an attack roll or fail an ability check or a saving throw, you can draw on your bonds of reciprocity to gain a bonus to the roll equal to the number of allies you can see within 30 feet of you (maximum bonus of +3). You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 23.<br>
    </p>`;
});

document.getElementById("human").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Human</h2>
    <p>
      <strong>Ability Scores: </strong>Str +1; Dex +1; Con +1; Int +1; Wis +1; Cha +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Humans reach adulthood in their late teens and live less than a century.<br>
      <strong>Size. </strong>Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.<br>
      <strong>Source: </strong>PHB, page 29.<br>
    </p>`;
});

document.getElementById("humanVariant").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Human (Variant)</h2>
    <p>
      <strong>Ability Scores: </strong>Choose any two unique +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Humans reach adulthood in their late teens and live less than a century.<br>
      <strong>Size. </strong>Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.<br>
      <strong>Skills. </strong>You gain proficiency in one skill of your choice.<br>
      <strong>Feat. </strong>You gain one feat of your choice.<br>
      <strong>Source: </strong>PHB, page 31.<br>
    </p>`;
});

document.getElementById("kalashtar").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Kalashtar</h2>
    <p>
      <strong>Ability Scores: </strong>Wis +2; Cha +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Kalashtar mature and age at the same rate as humans.<br>
      <strong>Alignment. </strong>The noble spirit tied to a kalashtar drives it toward lawful and good behavior. Most kalashtar combine strong self-discipline with compassion for all beings, but some kalashtar resist the virtuous influence of their spirit.<br>
      <strong>Size. </strong>Your size is Medium.<br>
      <strong>Dual Mind. </strong>You have advantage on all Wisdom saving throws.<br>
      <strong>Mental Discipline. </strong>You have resistance to psychic damage.<br>
      <strong>Mind Link. </strong>You can speak telepathically to any creature you can see, provided the creature is within a number of feet of you equal to 10 times your level. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.<br>
      When you're using this trait to speak telepathically to a creature, you can use your action to give that creature the ability to speak telepathically with you for 1 hour or until you end this effect as an action. To use this ability, the creature must be able to see you and must be within this trait's range. You can give this ability to only one creature at a time; giving it to a creature takes it away from another creature who has it.<br>
      <strong>Severed from Dreams. </strong>Kalashtar sleep, but they don't connect to the plane of dreams as other creatures do. Instead, their minds draw from the memories of their otherworldly spirit while they sleep. As such, you are immune to spells and other magical effects that require you to dream, like dream, but not to spells and other magical effects that put you to sleep, like sleep.<br>
      <strong>Languages. </strong>You can speak, read, and write Common, Quori, and one other language of your choice.<br>
      <strong>Source: </strong>ERLW, page 29.<br>
    </p>`;
});

document.getElementById("kenku").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Kenku</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small or Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Size. </strong>Your size is Medium or Small. You choose the size when you select this race.<br>
      <strong>Expert Duplication. </strong>When you copy writing or craftwork produced by yourself or someone else, you have advantage on any ability checks you make to produce an exact duplicate.<br>
      <strong>Kenku Recall. </strong>Thanks to your supernaturally good memory, you have proficiency in two skills of your choice.<br>
      Moreover, when you make an ability check using any skill in which you have proficiency, you can give yourself advantage on the check before rolling the d20. You can give yourself advantage in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
      <strong>Mimicry. </strong>You can accurately mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations only with a successful Wisdom (Insight) check against a DC of 8 + your proficiency bonus + your Charisma modifier.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 24.<br>
    </p>`;
});

document.getElementById("kobold").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Kobold</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were in dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Draconic Cry. </strong>As a bonus action, you let out a cry at your enemies within 10 feet of you. Until the start of your next turn, you and your allies have advantage on attack rolls against any of those enemies who could hear you. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
      <strong>Kobold Legacy. </strong>Kobold's connections to dragons can manifest in unpredictable ways in an individual kobold. Choose one of the following legacy options for your kobold.<br>
      <strong>Craftiness. </strong>You have proficiency in one of the following skills of your choice: Arcana, Investigation, Medicine, Sleight of Hand, or Survival.<br>
      <strong>Defiance. </strong>You have advantage on saving throws to avoid or end the frightened condition on yourself.<br>
      <strong>Draconic Sorcery. </strong>You know one cantrip of your choice from the sorcerer spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability for that cantrip (choose when you select this race).<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 25.<br>
    </p>`;
});

document.getElementById("leonin").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Leonin</h2>
    <p>
      <strong>Ability Scores: </strong>Con +2; Str +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>35 ft.<br>
      <strong>Age. </strong>Leonin mature and age at about the same rate as humans.<br>
      <strong>Alignment. </strong>Leonin tend toward good alignments. Leonin who are focused on the pride lean toward lawful good.<br>
      <strong>Size. </strong>Leonin are typically over 6 feet tall, with some standing over 7 feet. Your size is Medium.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Claws. </strong>Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you can deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.<br>
      <strong>Hunter's Instincts. </strong>You have proficiency in one of the following skills of your choice: Athletics, Intimidation, Perception, or Survival.<br>
      <strong>Daunting Roar. </strong>As a bonus action, you can let out an especially menacing roar. Creatures of your choice within 10 feet of you that can hear you must succeed on a Wisdom saving throw or become frightened of you until the end of your next turn. The DC of the save equals 8 + your proficiency bonus + your Constitution modifier. Once you use this trait, you can't use it again until you finish a short or long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and Leonin.<br>
      <strong>Source: </strong>MOT, page 20.<br>
    </p>`;
});

document.getElementById("lizardfolk").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Lizardfolk</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft., swim equal to your walking speed<br>
      <strong>Bite. </strong>You have a fanged maw that you can use to make unarmed strikes. When you hit with it, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.<br>
      <strong>Hold Breath. </strong>You can hold your breath for up to 15 minutes at a time.<br>
      <strong>Hungry Jaws. </strong>You can throw yourself into a feeding frenzy. As a bonus action, you can make a special attack with your Bite. If the attack hits, it deals its normal damage, and you gain temporary hit points equal to your proficiency bonus. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
      <strong>Natural Armor. </strong>You have tough, scaly skin. When you aren't wearing armor, your base AC is 13 + Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.<br>
      <strong>Nature's Intuition. </strong>Thanks to your mystical connection to nature, you gain proficiency with two of the following skills of your choice: Animal Handling, Medicine, Nature, Perception, Stealth, or Survival.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 26.<br>
    </p>`;
});

document.getElementById("loxodon").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Loxodon</h2>
    <p>
      <strong>Ability Scores: </strong>Con +2; Wis +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Loxodons physically mature at the same rate as humans, but they live about 450 years. They highly value the weight of wisdom and experience and are considered young until they reach the age of 60.<br>
      <strong>Alignment. </strong>Most loxodons are lawful, believing in the value of a peaceful, ordered life. They also tend toward good.<br>
      <strong>Size. </strong>Loxodons stand between 7 and 8 feet tall. Their massive bodies weigh between 300 and 400 pounds. Your size is Medium.<br>
      <strong>Powerful Build. </strong>You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.<br>
      <strong>Loxodon Serenity. </strong>You have advantage on saving throws against being charmed or frightened.<br>
      <strong>Natural Armor. </strong>You have thick, leathery skin. When you aren't wearing armor, your AC is 12 + your Constitution modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor.<br>
      <strong>Trunk. </strong>You can grasp things with your trunk, and you can use it as a snorkel. It has a reach of 5 feet, and it can lift a number of pounds equal to five times your Strength score. You can use it to do the following simple tasks: lift, drop, hold, push, or pull an object or a creature; open or close a door or a container; grapple someone; or make an unarmed strike. Your DM might allow other simple tasks to be added to that list of options.<br>
      Your trunk can't wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell.<br>
      <strong>Keen Smell. </strong>Thanks to your sensitive trunk, you have advantage on Wisdom (Perception), Wisdom (Survival), and Intelligence (Investigation) checks that involve smell.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and Loxodon.<br>
      <strong>Source: </strong>GGR, page 17.<br>
    </p>`;
});

document.getElementById("minotaur").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Minotaur</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Horns. </strong>You have horns that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier piercing damage, instead of the bludgeoning damage normal for an unarmed strike.<br>
      <strong>Goring Rush. </strong>Immediately after you take the Dash action on your turn and move at least 20 feet, you can make one melee attack with your Horns as a bonus action.<br>
      <strong>Hammering Horns. </strong>Immediately after you hit a creature with a melee attack as part of the Attack action on your turn, you can use a bonus action to attempt to push that target with your horns. The target must be within 5 feet of you and no more than one size larger than you. Unless it succeeds on a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier, you can push it up to 10 feet away from you.<br>
      <strong>Labyrinthine Recall. </strong>You always know which direction is north, and you have advantage on any Wisdom (Survival) check you make to navigate or track.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 27.<br>
    </p>`;
});

document.getElementById("orc").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Orc</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Adrenaline Rush. </strong>You can take the Dash action as a bonus action. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. Whenever you use this trait, you gain a number of temporary hit points equal to your proficiency bonus.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Powerful Build. </strong>You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.<br>
      <strong>Relentless Endurance. </strong>When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. Once you use this trait, you can't do so again until you finish a long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 28.<br>
    </p>`;
});

document.getElementById("plasmoid").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Plasmoid</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Creature Type: </strong>Ooze<br>
      <strong>Size: </strong>Small or Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Creature Type. </strong>You are an Ooze.<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you select this race.<br>
      <strong>Amorphous. </strong>You can squeeze through a space as narrow as 1 inch wide, provided you are wearing and carrying nothing. You have advantage on ability checks you make to initiate or escape a grapple.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Hold Breath. </strong>You can hold your breath for 1 hour.<br>
      <strong>Natural Resilience. </strong>You have resistance to acid and poison damage, and you have advantage on saving throws against being poisoned.<br>
      <strong>Shape Self. </strong>As an action, you can reshape your body to give yourself a head, one or two arms, one or two legs, and makeshift hands and feet, or you can revert to a limbless blob. While you have a humanlike shape, you can wear clothing and armor made for a Humanoid of your size. As a bonus action, you can extrude a pseudopod that is up to 6 inches wide and 10 feet long or reabsorb it into your body. As part of the same bonus action, you can use this pseudopod to manipulate an object, open or close a door or container, or pick up or set down a Tiny object. The pseudopod contains no sensory organs and can't attack, activate magic items, or lift more than 10 pounds.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>AAG, page 14.<br>
    </p>`;
});

document.getElementById("reborn").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Reborn</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small or Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you gain this lineage.<br>
      <strong>Ancestral Legacy. </strong>If you replace a race with this lineage, you can keep the following elements of that race: any skill proficiencies you gained from it and any climbing, flying, or swimming speed you gained from it. If you don't keep any of those elements or you choose this lineage at character creation, you gain proficiency in two skills of your choice.<br>
      <strong>Deathless Nature. </strong>You have escaped death, a fact represented by the following benefits: <br>
      - You have advantage on saving throws against disease and being poisoned, and you have resistance to poison damage. <br>
      - You have advantage on death saving throws. <br>
      - You don't need to eat, drink, or breathe. <br>
      - You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in an inactive, motionless state, during which you retain consciousness.<br>
      <strong>Knowledge from a Past Life. </strong>You temporarily remember glimpses of the past, perhaps faded memories from ages ago or a previous life. When you make an ability check that uses a skill, you can roll a d6 immediately after seeing the number on the d20 and add the number on the d6 to the check. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>VRGR, page 20.<br>
    </p>`;
});

document.getElementById("satyr").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Satyr</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Creature Type: </strong>Fey<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>35 ft.<br>
      <strong>Creature Type. </strong>You are a Fey.<br>
      <strong>Ram. </strong>You can use your head and horns to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier bludgeoning damage, instead of the bludgeoning damage normal for an unarmed strike.<br>
      <strong>Magic Resistance. </strong>You have advantage on saving throws against spells.<br>
      <strong>Mirthful Leaps. </strong>Whenever you make a long jump or a high jump, you can roll a d8 and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as usual.<br>
      <strong>Reveler. </strong>As an embodiment of revelry, you have proficiency in the Performance and Persuasion skills, and you have proficiency with one musical instrument of your choice.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 29.<br>
    </p>`;
});

document.getElementById("seaElf").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Sea Elf</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft., swim equal to your walking speed<br>
      <strong>Creature Type. </strong>You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf.<br>
      <strong>Speed. </strong>Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed.<br>
      <strong>Child of the Sea. </strong>You can breathe air and water, and you have resistance to cold damage.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Fey Ancestry. </strong>You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br>
      <strong>Friend of the Sea. </strong>Aquatic animals have an extraordinary affinity with your people. You can communicate simple ideas to any Beast that has a swimming speed. It can understand your words, though you have no special ability to understand it in return.<br>
      <strong>Keen Senses. </strong>You have proficiency in the Perception skill.<br>
      <strong>Trance. </strong>You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.<br>
      Whenever you finish this trance, you can gain two proficiencies that you don't have, each one with a weapon or a tool of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 30.<br>
    </p>`;
});

document.getElementById("shadarKai").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Shadar-Kai</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Creature Type. </strong>You are a Humanoid. You are also considered an elf for any prerequisite or effect that requires you to be an elf.<br>
      <strong>Blessing of the Raven Queen. </strong>As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.<br>
      Start at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Fey Ancestry. </strong>You have advantage on saving throws you make to avoid or end the charmed condition on yourself.<br>
      <strong>Keen Senses. </strong>You have proficiency in the Perception skill.<br>
      <strong>Necrotic Resistance. </strong>You have resistance to necrotic damage.<br>
      <strong>Trance. </strong>You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.<br>
      Whenever you finish this trance, you can gain two proficiencies that you don't have, each one with a weapon or a tool of your choice selected from the Player's Handbook. You mystically acquire these proficiencies by drawing them from shared elven memory, and you retain them until you finish your next long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 31.<br>
    </p>`;
});

document.getElementById("shifterBeasthide").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Shifter (Beasthide)</h2>
    <p>
      <strong>Ability Scores: </strong>Con +2; Str +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Shifters are quick to mature both physically and emotionally, reaching young adulthood at age 10. They rarely live to be more than 70 years old.<br>
      <strong>Alignment. </strong>Shifters tend toward neutrality, being more focused on survival than concepts of good and evil. A love of personal freedom can drive shifters toward chaotic alignments.<br>
      <strong>Size. </strong>Your size is Medium.<br>
      <strong>Speed. </strong>Your base walking speed is 30 feet.<br>
      <strong>Darkvision. </strong>You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Shifting. </strong>As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1 temporary hit point). You also gain additional benefits that depend on your shifter subrace, described below.<br>
      Once you shift, you can't do so again until you finish a short or long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common.<br>
      <strong>Natural Athlete. </strong>You have proficiency in the Athletics skill.<br>
      <strong>Shifting Feature. </strong>Whenever you shift, you gain 1d6 additional temporary hit points. While shifted, you have a +1 bonus to your Armor Class.<br>
      <strong>Source: </strong>ERLW, page 34.<br>
    </p>`;
});

document.getElementById("shifterLongtooth").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Shifter (Longtooth)</h2>
    <p>
      <strong>Ability Scores: </strong>Str +2; Dex +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Shifters are quick to mature both physically and emotionally, reaching young adulthood at age 10. They rarely live to be more than 70 years old.<br>
      <strong>Alignment. </strong>Shifters tend toward neutrality, being more focused on survival than concepts of good and evil. A love of personal freedom can drive shifters toward chaotic alignments.<br>
      <strong>Size. </strong>Your size is Medium.<br>
      <strong>Speed. </strong>Your base walking speed is 30 feet.<br>
      <strong>Darkvision. </strong>You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Shifting. </strong>As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1 temporary hit point). You also gain additional benefits that depend on your shifter subrace, described below.<br>
      Once you shift, you can't do so again until you finish a short or long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common.<br>
      <strong>Fierce. </strong>You have proficiency in the Intimidation skill.<br>
      <strong>Shifting Feature. </strong>While shifted, you can use your elongated fangs to make an unarmed strike as a bonus action. If you hit with your fangs, you can deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.<br>
      <strong>Source: </strong>ERLW, page 34.<br>
    </p>`;
});

document.getElementById("shifterSwiftstride").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Shifter (Swiftstride)</h2>
    <p>
      <strong>Ability Scores: </strong>Dex +2; Cha +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Shifters are quick to mature both physically and emotionally, reaching young adulthood at age 10. They rarely live to be more than 70 years old.<br>
      <strong>Alignment. </strong>Shifters tend toward neutrality, being more focused on survival than concepts of good and evil. A love of personal freedom can drive shifters toward chaotic alignments.<br>
      <strong>Size. </strong>Your size is Medium.<br>
      <strong>Speed. </strong>Your base walking speed is 30 feet.<br>
      <strong>Darkvision. </strong>You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Shifting. </strong>As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1 temporary hit point). You also gain additional benefits that depend on your shifter subrace, described below.<br>
      Once you shift, you can't do so again until you finish a short or long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common.<br>
      <strong>Graceful. </strong>You have proficiency in the Acrobatics skill.<br>
      <strong>Shifting Feature. </strong>While shifted, your walking speed increases by 10 feet. Additionally, you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn't provoke opportunity attacks.<br>
      <strong>Source: </strong>ERLW, page 34.<br>
    </p>`;
});

document.getElementById("shifterWildhunt").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Shifter (Wildhunt)</h2>
    <p>
      <strong>Ability Scores: </strong>Wis +2; Dex +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Shifters are quick to mature both physically and emotionally, reaching young adulthood at age 10. They rarely live to be more than 70 years old.<br>
      <strong>Alignment. </strong>Shifters tend toward neutrality, being more focused on survival than concepts of good and evil. A love of personal freedom can drive shifters toward chaotic alignments.<br>
      <strong>Size. </strong>Your size is Medium.<br>
      <strong>Speed. </strong>Your base walking speed is 30 feet.<br>
      <strong>Darkvision. </strong>You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Shifting. </strong>As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to your level + your Constitution modifier (minimum of 1 temporary hit point). You also gain additional benefits that depend on your shifter subrace, described below.<br>
      Once you shift, you can't do so again until you finish a short or long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common.<br>
      <strong>Natural Tracker. </strong>You have proficiency in the Survival skill.<br>
      <strong>Shifting Feature. </strong>While shifted, you have advantage on Wisdom checks, and no creature within 30 feet of you can make an attack roll with advantage against you, unless you're incapacitated.<br>
      <strong>Source: </strong>ERLW, page 34.<br>
    </p>`;
});

document.getElementById("simicHybrid").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Simic Hybrid</h2>
    <p>
      <strong>Ability Scores: </strong>Con +2; Choose any other +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Hybrids begin their lives as adult humans, elves, or vedalken. They age at a slightly accelerated rate, so their maximum life spans are probably reduced somewhat. The Guardian Project has not been operating long enough to observe the full effect of this phenomenon.<br>
      <strong>Alignment. </strong>Most hybrids share the generally neutral outlook of the Simic Combine. They are more interested in scientific research and the standing of their guild than in moral or ethical questions. Those who leave the Combine, however, often do so because their philosophical outlook and alignment are more in line with a different guild's.<br>
      <strong>Size. </strong>Your size is Medium, within the normal range of your humanoid base race.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and your choice of Elvish or Vedalken.<br>
      <strong>Animal Enhancement. </strong>Your body has been altered to incorporate certain animal characteristics. You choose one animal enhancement now and a second enhancement at 5th level.<br>
      At 1st level, choose one of the following options:<br>
      - <strong>Manta Glide.</strong> You have ray-like fins that you can use as wings to slow your fall or allow you to glide. When you fall and aren't incapacitated, you can subtract up to 100 feet from the fall when calculating falling damage, and you can move up to 2 feet horizontally for every 1 foot you descend. <br>
      - <strong>Nimble Climber.</strong> You have a climbing speed equal to your walking speed. <br>
      - <strong>Underwater Adaptation.</strong> You can breathe air and water, and you have a swimming speed equal to your walking speed. <br>
      At 5th level, your body evolves further, developing new characteristics. Choose one of the options you didn't take at 1st level, or one of the following options:<br>
      - <strong>Grappling Appendage.</strong> You have two special appendages growing alongside your arms. Choose whether they're both claws or tentacles. As an action, you can use one of them to try to grapple a creature. Each one is also a natural weapon, which you can use to make an unarmed strike. If you hit with it, the target takes bludgeoning damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. Immediately after hitting, you can try to grapple the target as a bonus action. These appendages can't precisely manipulate anything and can't wield weapons, magic items, or other specialized equipment. <br>
      - <strong>Carapace.</strong> Your skin in places is covered by a thick shell. You gain a +1 bonus to AC when you're not wearing heavy armor. <br>
      - <strong>Acid Spit.</strong> As an action, you can spray acid from glands in your mouth, targeting one creature or object you can see within 30 feet of you. The target takes 2d10 acid damage unless it succeeds on a Dexterity saving throw against a DC equal to 8 + your Constitution modifier + your proficiency bonus. This damage increases by 1d10 when you reach 11th level (3d10) and 17th level (4d10). You can use this trait a number of times equal to your Constitution modifier (minimum of once), and you regain all expended uses of it when you finish a long rest. <br>
      <strong>Source: </strong>GGR, page 20.<br>
    </p>`;
});

document.getElementById("tabaxi").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Tabaxi</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of:<br>
      (a) Choose any +2; choose any other +1<br>
      (b) Choose three different +1<br>
      <strong>Size: </strong>Small or Medium<br>
      <strong>Speed: </strong>30 ft., climb equal to your walking speed<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you select this race.<br>
      <strong>Speed. </strong>Your walking speed is 30 feet, and you have a climbing speed equal to your walking speed.<br>
      <strong>Cat's Claws. </strong>You can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.<br>
      <strong>Cat's Talent. </strong>You have proficiency in the Perception and Stealth skills.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Feline Agility. </strong>Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 33.<br>
    </p>`;
});

document.getElementById("thriKreen").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
  <h2>Thri-kreen</h2>
  <p>
    <strong>Ability Scores: </strong>Choose one of:<br>
    (a) Choose any +2; choose any other +1<br>
    (b) Choose three different +1<br>
    <strong>Creature Type: </strong>Monstrosity<br>
    <strong>Size: </strong>Small or Medium<br>
    <strong>Speed: </strong>30 ft.<br>
    <strong>Creature Type. </strong>You are a Monstrosity.<br>
    <strong>Size. </strong>You are Medium or Small. You choose the size when you select this race.<br>
    <strong>Chameleon Carapace. </strong>While you aren't wearing armor, your carapace gives you a base Armor Class of 13 + your Dexterity modifier.<br>
    As an action, you can change the color of your carapace to match the color and texture of your surroundings, giving you advantage on Dexterity (Stealth) checks made to hide in those surroundings.<br>
    <strong>Darkvision. </strong>You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
    <strong>Secondary Arms. </strong>You have two slightly smaller secondary arms below your primary pair of arms. The secondary arms can manipulate an object, open or close a door or container, pick up or set down a Tiny object, or wield a weapon that has the light property.<br>
    <strong>Sleepless. </strong>You do not require sleep and can remain conscious during a long rest, though you must still refrain from strenuous activity to gain the benefit of the rest.<br>
    <strong>Thri-kreen Telepathy. </strong>Without the assistance of magic, you can't speak the non-thri-kreen languages you know. Instead you use telepathy to convey your thoughts. You have the magical ability to transmit your thoughts mentally to willing creatures within 120 feet of yourself. A contacted creature doesn't need to share a language with you to understand your thoughts, but it must be able to understand at least one language. Your telepathic link to a creature is broken if you and the creature move more than 120 feet apart, if either of you is incapacitated, or if either of you mentally breaks the contact (no action required).<br>
    <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
    <strong>Source: </strong>AAG, page 15.<br>
  </p>
  `;
});

document.getElementById("tiefling").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Tiefling</h2>
    <p>
      <strong>Ability Scores: </strong>Cha +2; Int +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Tieflings mature at the same rate as humans but live a few years longer.<br>
      <strong>Size. </strong>Tieflings are about the same size and build as humans. Your size is Medium.<br>
      <strong>Darkvision. </strong>Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.<br>
      <strong>Hellish Resistance. </strong>You have resistance to fire damage.<br>
      <strong>Infernal Legacy. </strong>You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell with this trait; you regain the ability to cast it when you finish a long rest. Once you reach 5th level, you can also cast the darkness spell once per day with this trait; you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and Infernal.<br>
      <strong>Source: </strong>PHB.<br>
    </p>`;
});

document.getElementById("tortle").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Tortle</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small or Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you select this race.<br>
      <strong>Claws. </strong>You have claws that you can use to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.<br>
      <strong>Hold Breath. </strong>You can hold your breath for up to 1 hour.<br>
      <strong>Natural Armor. </strong>Your shell provides you a base AC of 17 (your Dexterity modifier doesn't affect this number). You can't wear light, medium, or heavy armor, but if you are using a shield, you can apply the shield's bonus as normal.<br>
      <strong>Nature's Intuition. </strong>Thanks to your mystical connection to nature, you gain proficiency with one of the following skills of your choice: Animal Handling, Medicine, Nature, Perception, Stealth, or Survival.<br>
      <strong>Shell Defense. </strong>You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to your AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 34.<br>
    </p>`;
});

document.getElementById("triton").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Triton</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft., swim equal to your walking speed<br>
      <strong>Speed. </strong>Your walking speed is 30 feet, and you have a swimming speed equal to your walking speed.<br>
      <strong>Amphibious. </strong>You can breathe air and water.<br>
      <strong>Control Air and Water. </strong>You can cast fog cloud with this trait. Starting at 3rd level, you can cast the gust of wind spell with this trait. Starting at 5th level, you can also cast the water walk spell with it. Once you cast any of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have of the appropriate level.<br>
      <strong>Intelligence, Wisdom, or Charisma </strong>is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Emissary of the Sea. </strong>You can communicate simple ideas to any Beast, Elemental, or Monstrosity that has a swimming speed. It can understand your words, though you have no special ability to understand it in return.<br>
      <strong>Guardian of the Depths. </strong>Adapted to the frigid ocean depths, you have resistance to cold damage.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 35.<br>
    </p>`;
});

document.getElementById("vedalken").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Vedalken</h2>
    <p>
      <strong>Ability Scores: </strong>Int +2; Wis +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>Vedalken mature slower than humans do, reaching maturity around age 40. Their life span is typically 350 years, with some living to the age of 500.<br>
      <strong>Alignment. </strong>Vedalken are usually lawful and non-evil.<br>
      <strong>Size. </strong>Tall and slender, Vedalken stand 6 to 6½ feet tall on average and usually weigh less than 200 pounds. Your size is Medium.<br>
      <strong>Vedalken Dispassion. </strong>You have advantage on all Intelligence, Wisdom, and Charisma saving throws.<br>
      <strong>Tireless Precision. </strong>You are proficient in one of the following skills of your choice: Arcana, History, Investigation, Medicine, Performance, or Sleight of Hand. You are also proficient with one tool of your choice.<br>
      Whenever you make an ability check with the chosen skill or tool, roll a d4 and add the number rolled to the check's total.<br>
      <strong>Partially Amphibious. </strong>By absorbing oxygen through your skin, you can breathe underwater for up to 1 hour. Once you've reached that limit, you can't use this trait again until you finish a long rest.<br>
      <strong>Languages. </strong>You can speak, read, and write Common, Vedalken, and one other language of your choice.<br>
      <strong>Source: </strong>GGR, page 21.<br>
    </p>`;
});

document.getElementById("warforged").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Warforged</h2>
    <p>
      <strong>Ability Scores: </strong>Con +2; Choose any other +1<br>
      <strong>Size: </strong>Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Age. </strong>A typical warforged is between two and thirty years old. The maximum warforged lifespan remains a mystery; so far, warforged have shown no signs of deterioration due to age. You are immune to magical aging effects.<br>
      <strong>Alignment. </strong>Most warforged take comfort in order and discipline, tending toward law and neutrality. But some have absorbed the morality, or lack thereof, of the beings with which they served.<br>
      <strong>Size. </strong>Your size is Medium.<br>
      <strong>Constructed Resilience. </strong>You were created to have remarkable fortitude, represented by the following benefits:<br>
      - You have advantage on saving throws against being poisoned, and you have resistance to poison damage.<br>
      - You don't need to eat, drink, or breathe.<br>
      - You are immune to disease.<br>
      - You don't need to sleep, and magic can't put you to sleep.<br>
      <strong>Sentry's Rest. </strong>When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious, and you can see and hear as normal.<br>
      <strong>Integrated Protection. </strong>Your body has built-in defensive layers, which can be enhanced with armor:<br>
      - You gain a +1 bonus to Armor Class.<br>
      - You can don only armor with which you have proficiency. To don armor other than a shield, you must incorporate it into your body over the course of 1 hour, during which you remain in contact with the armor. To doff armor, you must spend 1 hour removing it. You can rest while donning or doffing armor in this way.<br>
      - While you live, the armor incorporated into your body can't be removed against your will.<br>
      <strong>Specialized Design. </strong>You gain one skill proficiency and one tool proficiency of your choice.<br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language of your choice.<br>
      <strong>Source: </strong>ERLW, page 35.<br>
    </p>`;
});

document.getElementById("yuanTi").addEventListener("click", function () {
  var div = document.getElementById("raceInfo");
  div.innerHTML = `
    <h2>Yuan-ti</h2>
    <p>
      <strong>Ability Scores: </strong>Choose one of: (a) Choose any +2; choose any other +1 (b) Choose three different +1<br>
      <strong>Size: </strong>Small or Medium<br>
      <strong>Speed: </strong>30 ft.<br>
      <strong>Size. </strong>You are Medium or Small. You choose the size when you select this race.<br>
      <strong>Darkvision. </strong>You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.<br>
      <strong>Magic Resistance. </strong>You have advantage on saving throws against spells.<br>
      <strong>Poison Resilience. </strong>You have advantage on saving throws you make to avoid or end the poisoned condition on yourself. You also have resistance to poison damage.<br>
      <strong>Serpentine Spellcasting. </strong>You know the poison spray cantrip. You can cast animal friendship an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can also cast suggestion with this trait. Once you cast it, you can't do so again until you finish a long rest. You can also cast it using any spell slots you have of 2nd level or higher.<br>
      <strong>Intelligence, Wisdom, or Charisma is your spellcasting ability for these spells when you cast them with this trait (choose when you select this race).</strong><br>
      <strong>Languages. </strong>You can speak, read, and write Common and one other language that you and your DM agree is appropriate for your character.<br>
      <strong>Source: </strong>MPMM, page 36.<br>
    </p>`;
});


//Classes
document.getElementById("artificer").addEventListener("click", function () {
  var div = document.getElementById("classInfo");
  div.innerHTML = `
  <h2>Artificer</h2>
  <p>Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects. They see magic as a complex system waiting to be decoded and then harnessed in their spells and inventions. You can find everything you need to play one of these inventors in the next few sections. Artificers use a variety of tools to channel their arcane power. To cast a spell, an artificer might use alchemist's supplies to create a potent elixir, calligrapher's supplies to inscribe a sigil of power, or tinker's tools to craft a temporary charm. The magic of artificers is tied to their tools and their talents, and few other characters can produce the right tool for a job as well as an artificer.</p>
  <h3>Seekers of New Lore</h3>
  <p>Nothing excites an artificer quite like uncovering a new metal or discovering a source of elemental energy. In artificer circles, new inventions and strange discoveries create the most excitement. Artificers who wish to make their mark must innovate, creating something fresh, rather than iterating on familiar designs.</p>
  `;
});

document.getElementById("barbarian").addEventListener("click", function () {
  var div = document.getElementById("classInfo");
  div.innerHTML = `
  <h2>Barbarian</h2>
  <p>
    A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his people's elk herd. <br>
    A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to break his neck with her bare hands as she did to the last six rivals. <br>
    Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to drive his armored elbow into the gut of another. <br>
    These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea. <br>
    For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.
  </p>
  <h3>Primal Instinct</h3>
  <p>
    People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one's own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt. <br>
    Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.
  </p>
    <h3>A Life of Danger</h3>
    <p>Not every member of the tribes deemed "barbarians" by scions of civilized society has the barbarian class. A true barbarian among these people is as uncommon as a skilled fighter in a town, and he or she plays a similar role as a protector of the people and a leader in times of war. Life in the wild places of the world is fraught with peril: rival tribes, deadly weather, and terrifying monsters. Barbarians charge headlong into that danger so that their people don't have to. <br>
    Their courage in the face of danger makes barbarians perfectly suited for adventuring. Wandering is often a way of life for their native tribes, and the rootless life of the adventurer is little hardship for a barbarian. Some barbarians miss the close-knit family structures of the tribe, but eventually find them replaced by the bonds formed among the members of their adventuring parties.
  </p>`;
});

document.getElementById("bard").addEventListener("click", function () {
  var div = document.getElementById("classInfo");
  div.innerHTML = `
    <h2>Bard</h2>
    <p>Humming as she traces her fingers over an ancient monument in a long-forgotten ruin, a half-elf in rugged leathers finds knowledge springing into her mind, conjured forth by the magic of her song—knowledge of the people who constructed the monument and the mythic saga it depicts.<br>
    A stern human warrior bangs his sword rhythmically against his scale mail, setting the tempo for his war chant and exhorting his companions to bravery and heroism. The magic of his song fortifies and emboldens them.<br>
    Laughing as she tunes her cittern, a gnome weaves her subtle magic over the assembled nobles, ensuring that her companions' words will be well received.<br>
    Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds.</p>
    <h3>Music and Magic</h3>
    <p>In the worlds of D&D, words and music are not just vibrations of air, but vocalizations with power all their own. The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers.</p>
    <p>The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor. Their spells lean toward charms and illusions rather than blatantly destructive spells. They have a wide-ranging knowledge of many subjects and a natural aptitude that lets them do almost anything well. Bards become masters of the talents they set their minds to perfecting, from musical performance to esoteric knowledge.</p>
    <h3>Learning from Experience</h3>
    <p>True bards are not common in the world. Not every minstrel singing in a tavern or jester cavorting in a royal court is a bard. Discovering the magic hidden in music requires hard study and some measure of natural talent that most troubadours and jongleurs lack. It can be hard to spot the difference between these performers and true bards, though. A bard's life is spent wandering across the land gathering lore, telling stories, and living on the gratitude of audiences, much like any other entertainer. But a depth of knowledge, a level of musical skill, and a touch of magic set bards apart from their fellows.</p>
    <p>Only rarely do bards settle in one place for long, and their natural desire to travel—to find new tales to tell, new skills to learn, and new discoveries beyond the horizon—makes an adventuring career a natural calling. Every adventure is an opportunity to learn, practice a variety of skills, enter long-forgotten tombs, discover lost works of magic, decipher old tomes, travel to strange places, or encounter exotic creatures. Bards love to accompany heroes to witness their deeds firsthand. A bard who can tell an awe-inspiring story from personal experience earns renown among other bards. Indeed, after telling so many stories about heroes accomplishing mighty deeds, many bards take these themes to heart and assume heroic roles themselves.</p>
  `;
});

document.getElementById("cleric").addEventListener("click", function () {
  var div = document.getElementById("classInfo");
  div.innerHTML = `
    <h2>Cleric</h2>
    <p>Arms and eyes upraised toward the sun and a prayer on his lips, an elf begins to glow with an inner light that spills out to heal his battle-worn companions.<br>
    Chanting a song of glory, a dwarf swings his axe in wide swaths to cut through the ranks of orcs arrayed against him, shouting praise to the gods with every foe's fall.<br>
    Calling down a curse upon the forces of undeath, a human lifts her holy symbol as light pours from it to drive back the zombies crowding in on her companions.<br>
    Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.</p>
    <h3>Healers and Warriors</h3>
    <p>Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don't grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling.<br>
    Harnessing divine magic doesn't rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity's wishes.<br>
    Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side.</p>
    <h3>Divine Agents</h3>
    <p>Not every acolyte or officiant at a temple or shrine is a cleric. Some priests are called to a simple life of temple service, carrying out their gods' will through prayer and sacrifice, not by magic and strength of arms. In some cities, priesthood amounts to a political office, viewed as a stepping stone to higher positions of authority and involving no communion with a god at all. True clerics are rare in most hierarchies.<br>
    When a cleric takes up an adventuring life, it is usually because his or her god demands it. Pursuing the goals of the gods often involves braving dangers beyond the walls of civilization, smiting evil or seeking holy relics in ancient tombs. Many clerics are also expected to protect their deities' worshipers, which can mean fighting rampaging orcs, negotiating peace between warring nations, or sealing a portal that would allow a demon prince to enter the world.<br>
    Most adventuring clerics maintain some connection to established temples and orders of their faiths. A temple might ask for a cleric's aid, or a high priest might be in a position to demand it.</p>
  `;
});

document.getElementById("druid").addEventListener("click", function () {
  var div = document.getElementById("classInfo");
  div.innerHTML = `
    <h2>Druid</h2>
    <p>Holding high a gnarled staff wreathed with holly, an elf summons the fury of the storm and calls down explosive bolts of lightning to smite the torch-carrying orcs who threaten her forest.<br>
    Crouching out of sight on a high tree branch in the form of a leopard, a human peers out of the jungle at the strange construction of a temple of Evil Elemental Air, keeping a close eye on the cultists' activities.<br>
    Swinging a blade formed of pure fire, a half-elf charges into a mass of skeletal soldiers, sundering the unnatural magic that gives the foul creatures the mocking semblance of life.<br>
    Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature. Instead, they see themselves as extensions of nature's indomitable will.</p>
    <h3>Power of Nature</h3>
    <p>Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.<br>
    Druid spells are oriented toward nature and animals—the power of tooth and claw, of sun and moon, of fire and storm. Druids also gain the ability to take on animal forms, and some druids make a particular study of this practice, even to the point where they prefer animal form to their natural form.</p>
    <h3>Preserve the Balance</h3>
    <p>For druids, nature exists in a precarious balance. The four elements that make up a world—air, earth, fire, and water—must remain in equilibrium. If one element were to gain power over the others, the world could be destroyed, drawn into one of the elemental planes and broken apart into its component elements. Thus, druids oppose cults of Elemental Evil and others who promote one element to the exclusion of others.<br>
    Druids are also concerned with the delicate ecological balance that sustains plant and animal life, and the need for civilized folk to live in harmony with nature, not in opposition to it. Druids accept that which is cruel in nature, and they hate that which is unnatural, including aberrations (such as beholders and mind flayers) and undead (such as zombies and vampires). Druids sometimes lead raids against such creatures, especially when the monsters encroach on the druids' territory.<br>
    Druids are often found guarding sacred sites or watching over regions of unspoiled nature. But when a significant danger arises, threatening nature's balance or the lands they protect, druids take on a more active role in combating the threat, as adventurers.</p>
  `;
});

document.getElementById("fighter").addEventListener("click", function () {
  var div = document.getElementById("classInfo");
  div.innerHTML = `
    <h2>Fighter</h2>
    <p>A human in clanging plate armor holds her shield before her as she runs toward the massed goblins. An elf behind her, clad in studded leather armor, peppers the goblins with arrows loosed from his exquisite bow. The half-orc nearby shouts orders, helping the two combatants coordinate their assault to the best advantage.<br>
    A dwarf in chain mail interposes his shield between the ogre's club and his companion, knocking the deadly blow aside. His companion, a half-elf in scale armor, swings two scimitars in a blinding whirl as she circles the ogre, looking for a blind spot in its defenses.<br>
    A gladiator fights for sport in an arena, a master with his trident and net, skilled at toppling foes and moving them around for the crowd's delight—and his own tactical advantage. His opponent's sword flares with blue light an instant before she sends lightning flashing forth to smite him.<br>
    All of these heroes are fighters, perhaps the most diverse class of characters in the worlds of Dungeons & Dragons. Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.</p>
    <h3>Well-Rounded Specialists</h3>
    <p>Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike.</p>
    <h3>Trained for Danger</h3>
    <p>Not every member of the city watch, the village militia, or the queen's army is a fighter. Most of these troops are relatively untrained soldiers with only the most basic combat knowledge. Veteran soldiers, military officers, trained bodyguards, dedicated knights, and similar figures are fighters.<br>
    Some fighters feel drawn to use their training as adventurers. The dungeon delving, monster slaying, and other dangerous work common among adventurers is second nature for a fighter, not all that different from the life he or she left behind. There are greater risks, perhaps, but also much greater rewards—few fighters in the city watch have the opportunity to discover a magic flame tongue sword, for example.</p>
  `;
});

document.getElementById("monk").addEventListener("click", function () {
  var div = document.getElementById("classInfo");
  div.innerHTML = `
    <h2>Monk</h2>
    <p>Her fists a blur as they deflect an incoming hail of arrows, a half-elf springs over a barricade and throws herself into the massed ranks of hobgoblins on the other side. She whirls among them, knocking their blows aside and sending them reeling, until at last she stands alone.<br>
    Taking a deep breath, a human covered in tattoos settles into a battle stance. As the first charging orcs reach him, he exhales and a blast of fire roars from his mouth, engulfing his foes.<br>
    Moving with the silence of the night, a black-clad halfling steps into a shadow beneath an arch and emerges from another inky shadow on a balcony a stone's throw away. She slides her blade free of its cloth-wrapped scabbard and peers through the open window at the tyrant prince, so vulnerable in the grip of sleep.<br>
    Whatever their discipline, monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.</p>
    <h3>The Magic of Ki</h3>
    <p>Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse—specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies' physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes.</p>
    <h3>Training and Asceticism</h3>
    <p>Small walled cloisters dot the landscapes of the worlds of D&D, tiny refuges from the flow of ordinary life, where time seems to stand still. The monks who live there seek personal perfection through contemplation and rigorous training. Many entered the monastery as children, sent to live there when their parents died, when food couldn't be found to support them, or in return for some kindness that the monks had performed for their families.<br>
    Some monks live entirely apart from the surrounding population, secluded from anything that might impede their spiritual progress. Others are sworn to isolation, emerging only to serve as spies or assassins at the command of their leader, a noble patron, or some other mortal or divine power.<br>
    The majority of monks don't shun their neighbors, making frequent visits to nearby towns or villages and exchanging their service for food and other goods. As versatile warriors, monks often end up protecting their neighbors from monsters or tyrants.<br>
    For a monk, becoming an adventurer means leaving a structured, communal lifestyle to become a wanderer. This can be a harsh transition, and monks don't undertake it lightly. Those who leave their cloisters take their work seriously, approaching their adventures as personal tests of their physical and spiritual growth. As a rule, monks care little for material wealth and are driven by a desire to accomplish a greater mission than merely slaying monsters and plundering their treasure.</p>
  `;
});

document.getElementById("paladin").addEventListener("click", function () {
  var div = document.getElementById("classInfo");
  div.innerHTML = `
    <h2>Paladin</h2>
    <p>Clad in plate armor that gleams in the sunlight despite the dust and grime of long travel, a human lays down her sword and shield and places her hands on a mortally wounded man. Divine radiance shines from her hands, the man's wounds knit closed, and his eyes open wide with amazement.<br>
    A dwarf crouches behind an outcrop, his black cloak making him nearly invisible in the night, and watches an orc war band celebrating its recent victory. Silently, he stalks into their midst and whispers an oath, and two orcs are dead before they even realize he is there.<br>
    Silver hair shining in a shaft of light that seems to illuminate only him, an elf laughs with exultation. His spear flashes like his eyes as he jabs again and again at a twisted giant, until at last his light overcomes its hideous darkness.<br>
    Whatever their origin and their mission, paladins are united by their oaths to stand against the forces of evil. Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.</p>
    <h3>The Cause of Righteousness</h3>
    <p>A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work. Although many paladins are devoted to gods of good, a paladin's power comes as much from a commitment to justice itself as it does from a god.<br>
    Paladins train for years to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the sick and injured, to smite the wicked and the undead, and to protect the innocent and those who join them in the fight for justice.</p>
    <h3>Beyond the Mundane Life</h3>
    <p>Almost by definition, the life of a paladin is an adventuring life. Unless a lasting injury has taken him or her away from adventuring for a time, every paladin lives on the front lines of the cosmic struggle against evil. Fighters are rare enough among the ranks of the militias and armies of the world, but even fewer people can claim the true calling of a paladin. When they do receive the call, these warriors turn from their former occupations and take up arms to fight evil. Sometimes their oaths lead them into the service of the crown as leaders of elite groups of knights, but even then their loyalty is first to the cause of righteousness, not to crown and country.<br>
    Adventuring paladins take their work seriously. A delve into an ancient ruin or dusty crypt can be a quest driven by a higher purpose than the acquisition of treasure. Evil lurks in dungeons and primeval forests, and even the smallest victory against it can tilt the cosmic balance away from oblivion.</p>
  `;
});

document.getElementById("ranger").addEventListener("click", function () {
  var div = document.getElementById("classInfo");
  div.innerHTML = `
    <h2>Ranger</h2>
    <p>Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are planning a raid on a nearby farm. Clutching a shortsword in each hand, he becomes a whirlwind of steel, cutting down one enemy after another.<br>
    After tumbling away from a cone of freezing air, an elf finds her feet and draws back her bow to loose an arrow at the white dragon. Shrugging off the wave of fear that emanates from the dragon like the cold of its breath, she sends one arrow after another to find the gaps between the dragon's thick scales.<br>
    Holding his hand high, a half-elf whistles to the hawk that circles high above him, calling the bird back to his side. Whispering instructions in Elvish, he points to the owlbear he's been tracking and sends the hawk to distract the creature while he readies his bow.<br>
    Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.</p>
    <h3>Deadly Hunters</h3>
    <p>Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.<br>
    Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature's power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger's talents and abilities are honed with deadly focus on the grim task of protecting the borderlands.</p>
    <h3>Independent Adventurers</h3>
    <p>Though a ranger might make a living as a hunter, a guide, or a tracker, a ranger's true calling is to defend the outskirts of civilization from the ravages of monsters and humanoid hordes that press in from the wild. In some places, rangers gather in secretive orders or join forces with druidic circles. Many rangers, though, are independent almost to a fault, knowing that, when a dragon or a band of orcs attacks, a ranger might be the first—and possibly the last—line of defense.<br>
    This fierce independence makes rangers well suited to adventuring, since they are accustomed to life far from the comforts of a dry bed and a hot bath. Faced with city-bred adventurers who grouse and whine about the hardships of the wild, rangers respond with some mixture of amusement, frustration, and compassion. But they quickly learn that other adventurers who can carry their own weight in a fight against civilization's foes are worth any extra burden. Coddled city folk might not know how to feed themselves or find fresh water in the wild, but they make up for it in other ways.</p>
  `;
});

document.getElementById("rogue").addEventListener("click", function () {
  var div = document.getElementById("classInfo");
  div.innerHTML = `
    <h2>Rogue</h2>
    <p>Signaling for her companions to wait, a halfling creeps forward through the dungeon hall. She presses an ear to the door, then pulls out a set of tools and picks the lock in the blink of an eye. Then she disappears into the shadows as her fighter friend moves forward to kick the door open.<br>
    A human lurks in the shadows of an alley while his accomplice prepares for her part in the ambush. When their target—a notorious slaver—passes the alleyway, the accomplice cries out, the slaver comes to investigate, and the assassin's blade cuts his throat before he can make a sound.<br>
    Suppressing a giggle, a gnome waggles her fingers and magically lifts the key ring from the guard's belt. In a moment, the keys are in her hand, the cell door is open, and she and her companions are free to make their escape.<br>
    Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.</p>
    <h3>Skill and Precision</h3>
    <p>Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.<br>
    When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent down with a barrage of attacks. Rogues have an almost supernatural knack for avoiding danger, and a few learn magical tricks to supplement their other abilities.</p>
    <h3>A Shady Living</h3>
    <p>Every town and city has its share of rogues. Most of them live up to the worst stereotypes of the class, making a living as burglars, assassins, cutpurses, and con artists. Often, these scoundrels are organized into thieves' guilds or crime families. Plenty of rogues operate independently, but even they sometimes recruit apprentices to help them in their scams and heists. A few rogues make an honest living as locksmiths, investigators, or exterminators, which can be a dangerous job in a world where dire rats—and wererats—haunt the sewers.<br>
    As adventurers, rogues fall on both sides of the law. Some are hardened criminals who decide to seek their fortune in treasure hoards, while others take up a life of adventure to escape from the law. Some have learned and perfected their skills with the explicit purpose of infiltrating ancient ruins and hidden crypts in search of treasure.</p>
  `;
});

document.getElementById("sorcerer").addEventListener("click", function () {
  var div = document.getElementById("classInfo");
  div.innerHTML = `
    <h2>Sorcerer</h2>
    <p>Golden eyes flashing, a human stretches out her hand and unleashes the dragonfire that burns in her veins. As an inferno rages around her foes, leathery wings spread from her back and she takes to the air.<br>
    Long hair whipped by a conjured wind, a half-elf spreads his arms wide and throws his head back. Lifting him momentarily off the ground, a wave of magic surges up in him, through him, and out from him in a mighty blast of lightning.<br>
    Crouching behind a stalagmite, a halfling points a finger at a charging troglodyte. A blast of fire springs from her finger to strike the creature. She ducks back behind the rock formation with a grin, unaware that her wild magic has turned her skin bright blue.<br>
    Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can't study sorcery as one learns a language, any more than one can learn to live a legendary life. No one chooses sorcery; the power chooses the sorcerer.</p>
    <h3>Raw Magic</h3>
    <p>Magic is a part of every sorcerer, suffusing body, mind, and spirit with a latent power that waits to be tapped. Some sorcerers wield magic that springs from an ancient bloodline infused with the magic of dragons. Others carry a raw, uncontrolled magic within them, a chaotic storm that manifests in unexpected ways.<br>
    The appearance of sorcerous powers is wildly unpredictable. Some draconic bloodlines produce exactly one sorcerer in every generation, but in other lines of descent every individual is a sorcerer. Most of the time, the talents of sorcery appear as apparent flukes. Some sorcerers can't name the origin of their power, while others trace it to strange events in their own lives. The touch of a demon, the blessing of a dryad at a baby's birth, or a taste of the water from a mysterious spring might spark the gift of sorcery. So too might the gift of a deity of magic, exposure to the elemental forces of the Inner Planes or the maddening chaos of Limbo, or a glimpse into the inner workings of reality.<br>
    Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells as warlocks do. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power.</p>
    <h3>Unexplained Powers</h3>
    <p>Sorcerers are rare in the world, and it's unusual to find a sorcerer who is not involved in the adventuring life in some way. People with magical power seething in their veins soon discover that the power doesn't like to stay quiet. A sorcerer's magic wants to be wielded, and it has a tendency to spill out in unpredictable ways if it isn't called on.<br>
    Sorcerers often have obscure or quixotic motivations driving them to adventure. Some seek a greater understanding of the magical force that infuses them, or the answer to the mystery of its origin. Others hope to find a way to get rid of it, or to unleash its full potential. Whatever their goals, sorcerers are every bit as useful to an adventuring party as wizards, making up for a comparative lack of breadth in their magical knowledge with enormous flexibility in using the spells they know.</p>
  `;
});

document.getElementById("warlock").addEventListener("click", function () {
  var div = document.getElementById("classInfo");
  div.innerHTML = `
    <h2>Warlock</h2>
    <p>With a pseudodragon curled on his shoulder, a young elf in golden robes smiles warmly, weaving a magical charm into his honeyed words and bending the palace sentinel to his will.<br>
    As flames spring to life in her hands, a wizened human whispers the secret name of her demonic patron, infusing her spell with fiendish magic.<br>
    Shifting his gaze between a battered tome and the odd alignment of the stars overhead, a wild-eyed tiefling chants the mystic ritual that will open a doorway to a distant world.<br>
    Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.</p>
    <h3>Sworn and Beholden</h3>
    <p>A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity—beings not typically served by clerics. More often, though, the arrangement is similar to that between a master and an apprentice. The warlock learns and grows in power, at the cost of occasional services performed on the patron's behalf.<br>
    The magic bestowed on a warlock ranges from minor but lasting alterations to the warlock's being (such as the ability to see in darkness or to read any language) to access to powerful spells. Unlike bookish wizards, warlocks supplement their magic with some facility at hand-to-hand combat. They are comfortable in light armor and know how to use simple weapons.</p>
    <h3>Delvers into Secrets</h3>
    <p>Warlocks are driven by an insatiable need for knowledge and power, which compels them into their pacts and shapes their lives. This thirst drives warlocks into their pacts and shapes their later careers as well.<br>
    Stories of warlocks binding themselves to fiends are widely known. But many warlocks serve patrons that are not fiendish. Sometimes a traveler in the wilds comes to a strangely beautiful tower, meets its fey lord or lady, and stumbles into a pact without being fully aware of it. And sometimes, while poring over tomes of forbidden lore, a brilliant but crazed student's mind is opened to realities beyond the material world and to the alien beings that dwell in the outer void.<br>
    Once a pact is made, a warlock's thirst for knowledge and power can't be slaked with mere study and research. No one makes a pact with such a mighty patron if he or she doesn't intend to use the power thus gained. Rather, the vast majority of warlocks spend their days in active pursuit of their goals, which typically means some kind of adventuring. Furthermore, the demands of their patrons drive warlocks toward adventure.</p>
  `;
});

document.getElementById("wizard").addEventListener("click", function () {
  var div = document.getElementById("classInfo");
  div.innerHTML = `
    <h2>Wizard</h2>
    <p>Clad in the silver robes that denote her station, an elf closes her eyes to shut out the distractions of the battlefield and begins her quiet chant. Fingers weaving in front of her, she completes her spell and launches a tiny bead of fire toward the enemy ranks, where it erupts into a conflagration that engulfs the soldiers.<br>
    Checking and rechecking his work, a human scribes an intricate magic circle in chalk on the bare stone floor, then sprinkles powdered iron along every line and graceful curve. When the circle is complete, he drones a long incantation. A hole opens in space inside the circle, bringing a whiff of brimstone from the otherworldly plane beyond.<br>
    Crouching on the floor in a dungeon intersection, a gnome tosses a handful of small bones inscribed with mystic symbols, muttering a few words of power over them. Closing his eyes to see the visions more clearly, he nods slowly, then opens his eyes and points down the passage to his left.<br>
    Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.</p>
    <h3>Scholars of the Arcane</h3>
    <p>Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study.<br>
    Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.</p>
    <h3>The Lure of Knowledge</h3>
    <p>Wizards' lives are seldom mundane. The closest a wizard is likely to come to an ordinary life is working as a sage or lecturer in a library or university, teaching others the secrets of the multiverse. Other wizards sell their services as diviners, serve in military forces, or pursue lives of crime or domination.<br>
    But the lure of knowledge and power calls even the most unadventurous wizards out of the safety of their libraries and laboratories and into crumbling ruins and lost cities. Most wizards believe that their counterparts in ancient civilizations knew secrets of magic that have been lost to the ages, and discovering those secrets could unlock the path to a power greater than any magic available in the present age.</p>
  `;
});


}