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
    // Defining elements
    var div = document.getElementById("backgroundInfo");
    // h
    var backgroundName = document.createElement("h2");
    var subheader = document.createElement("h3");
    // strong
    var strong1 = document.createElement("strong");
    var strong2 = document.createElement("strong");
    var strong3 = document.createElement("strong");
    var strong4 = document.createElement("strong");
    // p
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var br = document.createElement("br");

    // Text
    backgroundName.innerText = "Acolyte";
    subheader.innerText = "Feature: Shelter of the Faithful";
    strong1.innerText = "Skill Proficiencies: ";
    strong2.innerText = "Languages: ";
    strong3.innerText = "Equipment: ";
    strong4.innerText = "Source: ";
    var p1text = document.createTextNode("Insight, Religion");
    var p2text = document.createTextNode("Two of your choice");
    var p3text = document.createTextNode("A holy symbol, a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15 gp");
    var p4text = document.createTextNode("As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.");
    var p5text = document.createTextNode("You are well acquainted with the practices of a particular religion and are deeply committed to its teachings.");
    var p6text = document.createTextNode("You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.");
    var p8text = document.createTextNode("Player's Handbook page 127");
    // Clearing div
    div.innerHTML = "";

    // Appending tags into div
    div.appendChild(backgroundName);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(subheader);
    div.appendChild(p4);
    div.appendChild(p5);
    div.appendChild(p6);
    div.appendChild(p7);
    div.appendChild(p8);
    div.appendChild(br);

    // Appending text into p
    p1.appendChild(strong1);
    p1.appendChild(p1text);
    p2.appendChild(strong2);
    p2.appendChild(p2text);
    p3.appendChild(strong3);
    p3.appendChild(p3text);
    p4.appendChild(p4text);
    p5.appendChild(p5text);
    p6.appendChild(p6text);
    p8.appendChild(strong4);
    p8.appendChild(p8text);
});

  document.getElementById("astralDrifter").addEventListener("click", function () {
    // Defining elements
    var div = document.getElementById("backgroundInfo");
    // h
    var backgroundName = document.createElement("h2");
    var subheader1 = document.createElement("h3");
    var subheader2 = document.createElement("h3");
    var subheader3 = document.createElement("h3");
    // strong
    var strong1 = document.createElement("strong");
    var strong2 = document.createElement("strong");
    var strong3 = document.createElement("strong");
    var strong4 = document.createElement("strong");
    // p
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    // Table 
    var table = document.createElement("table");
    table.classList.add("info-table")
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var tr1 = document.createElement("tr");
    var tr2 = document.createElement("tr");
    var tr3 = document.createElement("tr");
    var tr4 = document.createElement("tr");
    var tr5 = document.createElement("tr");
    var tr6 = document.createElement("tr");
    var tr7 = document.createElement("tr");
    var tr8 = document.createElement("tr");
    var tr9 = document.createElement("tr");
    var tr10 = document.createElement("tr");
    var tr11 = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    var td9 = document.createElement("td");
    var td10 = document.createElement("td");
    var td11 = document.createElement("td");
    var td12 = document.createElement("td");
    var td13 = document.createElement("td");
    var td14 = document.createElement("td");
    var td15 = document.createElement("td");
    var td16 = document.createElement("td");
    var td17 = document.createElement("td");
    var td18 = document.createElement("td");
    var td19 = document.createElement("td");
    var td20 = document.createElement("td");
    // br
    var br = document.createElement("br");

    // Text
    backgroundName.innerText = "Astral Drifter";
    subheader1.innerText = "Longevity";
    subheader2.innerText = "Feature: Divine Contact";
    subheader3.innerText = "Divine Contact";
    strong1.innerText = "Skill Proficiencies: ";
    strong2.innerText = "Languages: ";
    strong3.innerText = "Equipment: ";
    strong4.innerText = "Source: ";
    var p1text = document.createTextNode("Insight, Religion");
    var p2text = document.createTextNode("Two of your choice (Celestial or Gith recommended)");
    var p3text = document.createTextNode("A set of traveler's clothes, a diary, an ink pen, a bottle of ink, and a pouch containing 10 gp");
    var p4text = document.createTextNode("You are 20d6 years older than you look, because you have spent that much time in the Astral Sea without aging.");
    var p5text = document.createTextNode("You gain the Magic Initiate feat from the Player's Handbook and must choose cleric for the feat.");
    var p6text = document.createTextNode("In the Astral Sea, you crossed paths with a wandering deity. The encounter was brief and nonviolent, yet it made a lasting impression on you. This deity saw fit to share one secret or obscure bit of cosmic lore with you. Work with your DM to determine the details of this knowledge and its impact on the campaign.");
    var p7text = document.createTextNode("Roll on the Divine Contact table to determine which deity you encountered, or work with your DM to identify a more suitable choice.");
    var p8text = document.createTextNode("Astral Adventures Guide page 7");
    // Table text
    th1.innerText = "d10";
    th2.innerText = "Wandering Deity";
    td1.innerText = "1";
    td2.innerText = "Corellon, god of art and magic (chaotic good)";
    td3.innerText = "2";
    td4.innerText = "Tymora, god of good fortune (chaotic good)";
    td5.innerText = "3";
    td6.innerText = "Fharlanghn, god of horizons and travel (neutral good)";
    td7.innerText = "4";
    td8.innerText = "Istus, god of fate and destiny (neutral)";
    td9.innerText = "5";
    td10.innerText = "Nuada, god of war and warriors (neutral)";
    td11.innerText = "6";
    td12.innerText = "Zivilyn, god of wisdom (neutral)";
    td13.innerText = "7";
    td14.innerText = "Arawn, god of life and death (neutral evil)";
    td15.innerText = "8";
    td16.innerText = "Hecate, god of magic and moons (chaotic evil)";
    td17.innerText = "9";
    td18.innerText = "Celestian, god of stars and wanderers (neutral)";
    td19.innerText = "10";
    td20.innerText = "Ptah, god of knowledge and secrets (lawful neutral)";
    // Clearing div
    div.innerHTML = "";

    // Appending tags into div
    div.appendChild(backgroundName);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(subheader1);
    div.appendChild(p4);
    div.appendChild(subheader2);
    div.appendChild(p5);
    div.appendChild(p6);
    div.appendChild(p7);
    div.appendChild(subheader3);
    div.appendChild(table);
    div.appendChild(p8);
    div.appendChild(br);
    // Appending text into p
    p1.appendChild(strong1);
    p1.appendChild(p1text);
    p2.appendChild(strong2);
    p2.appendChild(p2text);
    p3.appendChild(strong3);
    p3.appendChild(p3text);
    p4.appendChild(p4text);
    p5.appendChild(p5text);
    p6.appendChild(p6text);
    p7.appendChild(p7text);
    p8.appendChild(strong4);
    p8.appendChild(p8text);
    // Appending rows and cells into table
    table.appendChild(tr1);
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    table.appendChild(tr2);
    tr2.appendChild(td1);
    tr2.appendChild(td2);
    table.appendChild(tr3);
    tr3.appendChild(td3);
    tr3.appendChild(td4);
    table.appendChild(tr4);
    tr4.appendChild(td5);
    tr4.appendChild(td6);
    table.appendChild(tr5);
    tr5.appendChild(td7);
    tr5.appendChild(td8);
    table.appendChild(tr6);
    tr6.appendChild(td9);
    tr6.appendChild(td10);
    table.appendChild(tr7);
    tr7.appendChild(td11);
    tr7.appendChild(td12);
    table.appendChild(tr8);
    tr8.appendChild(td13);
    tr8.appendChild(td14);
    table.appendChild(tr9);
    tr9.appendChild(td15);
    tr9.appendChild(td16);
    table.appendChild(tr10);
    tr10.appendChild(td17);
    tr10.appendChild(td18);
    table.appendChild(tr11);
    tr11.appendChild(td19);
    tr11.appendChild(td20);
  });

  document.getElementById("athlete").addEventListener("click", function () {
    // Defining elements
    var div = document.getElementById("backgroundInfo");
    // h
    var backgroundName = document.createElement("h2");
    var subheader1 = document.createElement("h3");
    var subheader2 = document.createElement("h3");
    // strong
    var strong1 = document.createElement("strong");
    var strong2 = document.createElement("strong");
    var strong3 = document.createElement("strong");
    var strong4 = document.createElement("strong");
    var strong5 = document.createElement("strong");
    var strong6 = document.createElement("strong");
    // p
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p");
    var p9 = document.createElement("p");
    // Table 
    var table = document.createElement("table");
    table.classList.add("info-table")
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var tr1 = document.createElement("tr");
    var tr2 = document.createElement("tr");
    var tr3 = document.createElement("tr");
    var tr4 = document.createElement("tr");
    var tr5 = document.createElement("tr");
    var tr6 = document.createElement("tr");
    var tr7 = document.createElement("tr");
    var tr8 = document.createElement("tr");
    var tr9 = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    var td9 = document.createElement("td");
    var td10 = document.createElement("td");
    var td11 = document.createElement("td");
    var td12 = document.createElement("td");
    var td13 = document.createElement("td");
    var td14 = document.createElement("td");
    var td15 = document.createElement("td");
    var td16 = document.createElement("td");
    // br
    var br = document.createElement("br");

    // Text
    backgroundName.innerText = "Athlete";
    subheader1.innerText = "Feature: Echoes of Victory";
    subheader2.innerText = "Favored Event";
    strong1.innerText = "Skill Proficiencies: ";
    strong2.innerText = "Languages: ";
    strong3.innerText = "Tool Proficiencies: "
    strong4.innerText = "Equipment: ";
    strong5.innerText = "Favored Event";
    strong6.innerText = "Source: ";
    var p1text = document.createTextNode("Acrobatics, Athletics");
    var p2text = document.createTextNode("One of your choice");
    var p3text = document.createTextNode("Vehicles (land)");
    var p4text = document.createTextNode("A bronze discus or leather ball, a lucky charm or past trophy, a set of traveler's clothes, and a pouch containing 10 gp");
    var p5text = document.createTextNode("You have attracted admiration among spectators, fellow athletes, and trainers in the region that hosted your past athletic victories. When visiting any settlement within 100 miles of where you grew up, there is a 50 percent chance you can find someone there who admires you and is willing to provide information or temporary shelter.");
    var p6text = document.createTextNode("Between adventures, you might compete in athletic events sufficient enough to maintain a comfortable lifestyle, as per the <q> Practicing a Profession </q> downtime activity in chapter 8 of the Player's Handbook.");
    var p7text = document.createTextNode("While many athletes practice various games and events, most excel at a single form of competition. Roll or choose from the options in the Favored Event table to determine the athletic event in which you excel.");
    var p9text = document.createTextNode("Mythic Odysseys of Theros page 31");
    // Table text
    th1.innerText = "d8";
    th2.innerText = "Favored Event";
    td1.innerText = "1";
    td2.innerText = "Marathon";
    td3.innerText = "2";
    td4.innerText = "Long-distance running";
    td5.innerText = "3";
    td6.innerText = "Wrestling";
    td7.innerText = "4";
    td8.innerText = "Boxing";
    td9.innerText = "5";
    td10.innerText = "Chariot or horse race";
    td11.innerText = "6";
    td12.innerText = "Pankration (mixed unarmed combat)";
    td13.innerText = "7";
    td14.innerText = "Hoplite race (racing in full armor with a unit)";
    td15.innerText = "8";
    td16.innerText = "Pentathlon (running, long jump, discus, javelin, wrestling)";
    // Clearing div
    div.innerHTML = "";

    // Appending tags into div
    div.appendChild(backgroundName);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(subheader1);
    div.appendChild(p5);
    div.appendChild(p6);
    div.appendChild(subheader2);
    div.appendChild(p7);
    div.appendChild(p8);
    div.appendChild(table);
    div.appendChild(p9);
    div.appendChild(br);
    // Appending text into p
    p1.appendChild(strong1);
    p1.appendChild(p1text);
    p2.appendChild(strong2);
    p2.appendChild(p2text);
    p3.appendChild(strong3);
    p3.appendChild(p3text);
    p4.appendChild(strong4);
    p4.appendChild(p4text);
    p5.appendChild(p5text);
    p6.appendChild(p6text);
    p7.appendChild(p7text);
    p8.appendChild(strong5);
    p9.appendChild(strong6);
    p9.appendChild(p9text);
    // Appending rows and cells into table
    table.appendChild(tr1);
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    table.appendChild(tr2);
    tr2.appendChild(td1);
    tr2.appendChild(td2);
    table.appendChild(tr3);
    tr3.appendChild(td3);
    tr3.appendChild(td4);
    table.appendChild(tr4);
    tr4.appendChild(td5);
    tr4.appendChild(td6);
    table.appendChild(tr5);
    tr5.appendChild(td7);
    tr5.appendChild(td8);
    table.appendChild(tr6);
    tr6.appendChild(td9);
    tr6.appendChild(td10);
    table.appendChild(tr7);
    tr7.appendChild(td11);
    tr7.appendChild(td12);
    table.appendChild(tr8);
    tr8.appendChild(td13);
    tr8.appendChild(td14);
    table.appendChild(tr9);
    tr9.appendChild(td15);
    tr9.appendChild(td16);
});
  
document.getElementById("charlatan").addEventListener("click", function () {
  // Defining elements
  var div = document.getElementById("backgroundInfo");
  // h
  var backgroundName = document.createElement("h2");
  var subheader1 = document.createElement("h3");
  var subheader2 = document.createElement("h3");
  // strong
  var strong1 = document.createElement("strong");
  var strong2 = document.createElement("strong");
  var strong3 = document.createElement("strong");
  var strong4 = document.createElement("strong");
  // p
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  var p4 = document.createElement("p");
  var p5 = document.createElement("p");
  var p6 = document.createElement("p");
  // Table 
  var table = document.createElement("table");
  table.classList.add("info-table")
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var tr1 = document.createElement("tr");
  var tr2 = document.createElement("tr");
  var tr3 = document.createElement("tr");
  var tr4 = document.createElement("tr");
  var tr5 = document.createElement("tr");
  var tr6 = document.createElement("tr");
  var tr7 = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");
  var td10 = document.createElement("td");
  var td11 = document.createElement("td");
  var td12 = document.createElement("td");
  // br
  var br = document.createElement("br");

  // Text
  backgroundName.innerText = "Charlatan";
  subheader1.innerText = "Feature: False Identity";
  subheader2.innerText = "Specialty";
  strong1.innerText = "Skill Proficiencies: ";
  strong2.innerText = "Tool Proficiencies: ";
  strong3.innerText = "Equipment: ";
  strong4.innerText = "Source: ";
  var p1text = document.createTextNode("Deception, Sleight of Hand");
  var p2text = document.createTextNode("Disguise kit, Forgery kit");
  var p3text = document.createTextNode("A set of fine clothes, a disguise kit, tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke), and a pouch containing 15 gp");
  var p4text = document.createTextNode("You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.");
  var p5text = document.createTextNode("Every charlatan has an angle he or she uses in preference to other schemes. Choose a favorite scam or roll on the table below.");
  var p6text = document.createTextNode("Player's Handbook page 128");
  // Table text
  th1.innerText = "d6";
  th2.innerText = "Scam";
  td1.innerText = "1";
  td2.innerText = "I cheat at games of chance.";
  td3.innerText = "2";
  td4.innerText = "I shave coins or forge documents.";
  td5.innerText = "3";
  td6.innerText = "I insinuate myself into people's lives to prey on their weakness and secure their fortunes.";
  td7.innerText = "4";
  td8.innerText = "I put on new identities like clothes.";
  td9.innerText = "5";
  td10.innerText = "I run sleight-of-hand cons on street corners.";
  td11.innerText = "6";
  td12.innerText = "I convince people that worthless junk is worth their hard-earned money.";
  // Clearing div
  div.innerHTML = "";

  // Appending tags into div
  div.appendChild(backgroundName);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(subheader1);
  div.appendChild(p4);
  div.appendChild(subheader2);
  div.appendChild(p5);
  div.appendChild(table);
  div.appendChild(p6);
  div.appendChild(br);
  // Appending text into p
  p1.appendChild(strong1);
  p1.appendChild(p1text);
  p2.appendChild(strong2);
  p2.appendChild(p2text);
  p3.appendChild(strong3);
  p3.appendChild(p3text);
  p4.appendChild(p4text);
  p5.appendChild(p5text);
  p6.appendChild(strong4);
  p6.appendChild(p6text);
  // Appending rows and cells into table
  table.appendChild(tr1);
  tr1.appendChild(th1);
  tr1.appendChild(th2);
  table.appendChild(tr2);
  tr2.appendChild(td1);
  tr2.appendChild(td2);
  table.appendChild(tr3);
  tr3.appendChild(td3);
  tr3.appendChild(td4);
  table.appendChild(tr4);
  tr4.appendChild(td5);
  tr4.appendChild(td6);
  table.appendChild(tr5);
  tr5.appendChild(td7);
  tr5.appendChild(td8);
  table.appendChild(tr6);
  tr6.appendChild(td9);
  tr6.appendChild(td10);
  table.appendChild(tr7);
  tr7.appendChild(td11);
  tr7.appendChild(td12);
});

document.getElementById("criminal").addEventListener("click", function () {
  // Defining elements
  var div = document.getElementById("backgroundInfo");
  // h
  var backgroundName = document.createElement("h2");
  var subheader1 = document.createElement("h3");
  var subheader2 = document.createElement("h3");
  // strong
  var strong1 = document.createElement("strong");
  var strong2 = document.createElement("strong");
  var strong3 = document.createElement("strong");
  var strong4 = document.createElement("strong");
  // p
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  var p4 = document.createElement("p");
  var p5 = document.createElement("p");
  var p6 = document.createElement("p");
  var p7 = document.createElement("p");
  // Table 
  var table = document.createElement("table");
  table.classList.add("info-table")
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var tr1 = document.createElement("tr");
  var tr2 = document.createElement("tr");
  var tr3 = document.createElement("tr");
  var tr4 = document.createElement("tr");
  var tr5 = document.createElement("tr");
  var tr6 = document.createElement("tr");
  var tr7 = document.createElement("tr");
  var tr8 = document.createElement("tr");
  var tr9 = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");
  var td10 = document.createElement("td");
  var td11 = document.createElement("td");
  var td12 = document.createElement("td");
  var td13 = document.createElement("td");
  var td14 = document.createElement("td");
  var td15 = document.createElement("td");
  var td16 = document.createElement("td");
  // br
  var br = document.createElement("br");

  // Text
  backgroundName.innerText = "Criminal";
  subheader1.innerText = "Feature: Criminal Contact";
  subheader2.innerText = "Criminal Specialty";
  strong1.innerText = "Skill Proficiencies: ";
  strong2.innerText = "Tool Proficiencies: ";
  strong3.innerText = "Equipment: ";
  strong4.innerText = "Source: ";
  var p1text = document.createTextNode("Deception, Stealth");
  var p2text = document.createTextNode("One type of gaming set, Thieves' tools");
  var p3text = document.createTextNode("A crowbar, a set of dark common clothes including a hood, and a pouch containing 15 gp");
  var p4text = document.createTextNode("You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.");
  var p5text = document.createTextNode("There are many kinds of criminals, and within a thieves' guild or similar criminal organization, individual members have particular specialties. Even criminals who operate outside of such organizations have strong preferences for certain kinds of crimes over others. Choose the role you played in your criminal life, or roll on the table below.");
  var p6text = document.createTextNode("Player's Handbook page 129");
  // Table text
  th1.innerText = "d8";
  th2.innerText = "Criminal Specialty";
  td1.innerText = "1";
  td2.innerText = "Blackmailer";
  td3.innerText = "2";
  td4.innerText = "Burglar";
  td5.innerText = "3";
  td6.innerText = "Enforcer";
  td7.innerText = "4";
  td8.innerText = "Fence";
  td9.innerText = "5";
  td10.innerText = "Highway Robber";
  td11.innerText = "6";
  td12.innerText = "Hired Killer";
  td13.innerText = "7";
  td14.innerText = "Pickpocket";
  td15.innerText = "8";
  td16.innerText = "Smuggler";
  // Clearing div
  div.innerHTML = "";

  // Appending tags into div
  div.appendChild(backgroundName);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(subheader1);
  div.appendChild(p4);
  div.appendChild(subheader2);
  div.appendChild(p5);
  div.appendChild(table);
  div.appendChild(p6);
  div.appendChild(br);
  // Appending text into p
  p1.appendChild(strong1);
  p1.appendChild(p1text);
  p2.appendChild(strong2);
  p2.appendChild(p2text);
  p3.appendChild(strong3);
  p3.appendChild(p3text);
  p4.appendChild(p4text);
  p5.appendChild(p5text);
  p6.appendChild(strong4);
  p6.appendChild(p6text);
  // Appending rows and cells into table
  table.appendChild(tr1);
  tr1.appendChild(th1);
  tr1.appendChild(th2);
  table.appendChild(tr2);
  tr2.appendChild(td1);
  tr2.appendChild(td2);
  table.appendChild(tr3);
  tr3.appendChild(td3);
  tr3.appendChild(td4);
  table.appendChild(tr4);
  tr4.appendChild(td5);
  tr4.appendChild(td6);
  table.appendChild(tr5);
  tr5.appendChild(td7);
  tr5.appendChild(td8);
  table.appendChild(tr6);
  tr6.appendChild(td9);
  tr6.appendChild(td10);
  table.appendChild(tr7);
  tr7.appendChild(td11);
  tr7.appendChild(td12);
  table.appendChild(tr8);
  tr8.appendChild(td13);
  tr8.appendChild(td14);
  table.appendChild(tr9);
  tr9.appendChild(td15);
  tr9.appendChild(td16);
});

document.getElementById("criminalSpy").addEventListener("click", function () {
  // Defining elements
  var div = document.getElementById("backgroundInfo");
  // h
  var backgroundName = document.createElement("h2");
  var subheader1 = document.createElement("h3");
  var subheader2 = document.createElement("h3");
  // strong
  var strong1 = document.createElement("strong");
  var strong2 = document.createElement("strong");
  var strong3 = document.createElement("strong");
  var strong4 = document.createElement("strong");
  // p
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  var p4 = document.createElement("p");
  var p5 = document.createElement("p");
  var p6 = document.createElement("p");
  var p7 = document.createElement("p");
  // table 
  var table = document.createElement("table");
  table.classList.add("info-table")
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var tr1 = document.createElement("tr");
  var tr2 = document.createElement("tr");
  var tr3 = document.createElement("tr");
  var tr4 = document.createElement("tr");
  var tr5 = document.createElement("tr");
  var tr6 = document.createElement("tr");
  var tr7 = document.createElement("tr");
  var tr8 = document.createElement("tr");
  var tr9 = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");
  var td10 = document.createElement("td");
  var td11 = document.createElement("td");
  var td12 = document.createElement("td");
  var td13 = document.createElement("td");
  var td14 = document.createElement("td");
  var td15 = document.createElement("td");
  var td16 = document.createElement("td");
  // br
  var br = document.createElement("br");

  // Text
  backgroundName.innerText = "Variant Criminal (Spy)";
  subheader1.innerText = "Feature: Spy Contact";
  subheader2.innerText = "Criminal Specialty";
  strong1.innerText = "Skill Proficiencies: ";
  strong2.innerText = "Tool Proficiencies: ";
  strong3.innerText = "Equipment: ";
  strong4.innerText = "Source: ";
  var p1text = document.createTextNode("Deception, Stealth");
  var p2text = document.createTextNode("One type of gaming set, Thieves' tools");
  var p3text = document.createTextNode("A crowbar, a set of dark common clothes including a hood, and a pouch containing 15 gp");
  var p4text = document.createTextNode("You have a reliable and trustworthy contact who acts as your liaison to a network of other spies. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.");
  var p5text = document.createTextNode("There are many kinds of criminals, and within a thieves' guild or similar criminal organization, individual members have particular specialties. Even criminals who operate outside of such organizations have strong preferences for certain kinds of crimes over others. Choose the role you played in your criminal life, or roll on the table below.");
  var p6text = document.createTextNode("Player's Handbook page 130");
  // Table text
  th1.innerText = "d8";
  th2.innerText = "Criminal Specialty";
  td1.innerText = "1";
  td2.innerText = "Blackmailer";
  td3.innerText = "2";
  td4.innerText = "Burglar";
  td5.innerText = "3";
  td6.innerText = "Enforcer";
  td7.innerText = "4";
  td8.innerText = "Fence";
  td9.innerText = "5";
  td10.innerText = "Highway Robber";
  td11.innerText = "6";
  td12.innerText = "Hired Killer";
  td13.innerText = "7";
  td14.innerText = "Pickpocket";
  td15.innerText = "8";
  td16.innerText = "Smuggler";
  // Clearing div
  div.innerHTML = "";

  // Appending tags into div
  div.appendChild(backgroundName);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(subheader1);
  div.appendChild(p4);
  div.appendChild(subheader2);
  div.appendChild(p5);
  div.appendChild(table);
  div.appendChild(p6);
  div.appendChild(br);
  // Appending text into p
  p1.appendChild(strong1);
  p1.appendChild(p1text);
  p2.appendChild(strong2);
  p2.appendChild(p2text);
  p3.appendChild(strong3);
  p3.appendChild(p3text);
  p4.appendChild(p4text);
  p5.appendChild(p5text);
  p6.appendChild(strong4);
  p6.appendChild(p6text);
  // Appending rows and cells into table
  table.appendChild(tr1);
  tr1.appendChild(th1);
  tr1.appendChild(th2);
  table.appendChild(tr2);
  tr2.appendChild(td1);
  tr2.appendChild(td2);
  table.appendChild(tr3);
  tr3.appendChild(td3);
  tr3.appendChild(td4);
  table.appendChild(tr4);
  tr4.appendChild(td5);
  tr4.appendChild(td6);
  table.appendChild(tr5);
  tr5.appendChild(td7);
  tr5.appendChild(td8);
  table.appendChild(tr6);
  tr6.appendChild(td9);
  tr6.appendChild(td10);
  table.appendChild(tr7);
  tr7.appendChild(td11);
  tr7.appendChild(td12);
  table.appendChild(tr8);
  tr8.appendChild(td13);
  tr8.appendChild(td14);
  table.appendChild(tr9);
  tr9.appendChild(td15);
  tr9.appendChild(td16);
});

document.getElementById("entertainer").addEventListener("click", function () {
  // Defining elements
  var div = document.getElementById("backgroundInfo");
  // h
  var backgroundName = document.createElement("h2");
  var subheader1 = document.createElement("h3");
  var subheader2 = document.createElement("h3");
  // strong
  var strong1 = document.createElement("strong");
  var strong2 = document.createElement("strong");
  var strong3 = document.createElement("strong");
  var strong4 = document.createElement("strong");
  // p
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  var p4 = document.createElement("p");
  var p5 = document.createElement("p");
  var p6 = document.createElement("p");
  var p7 = document.createElement("p");
  // table 
  var table = document.createElement("table");
  table.classList.add("info-table")
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var tr1 = document.createElement("tr");
  var tr2 = document.createElement("tr");
  var tr3 = document.createElement("tr");
  var tr4 = document.createElement("tr");
  var tr5 = document.createElement("tr");
  var tr6 = document.createElement("tr");
  var tr7 = document.createElement("tr");
  var tr8 = document.createElement("tr");
  var tr9 = document.createElement("tr");
  var tr10 = document.createElement("tr");
  var tr11 = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");
  var td10 = document.createElement("td");
  var td11 = document.createElement("td");
  var td12 = document.createElement("td");
  var td13 = document.createElement("td");
  var td14 = document.createElement("td");
  var td15 = document.createElement("td");
  var td16 = document.createElement("td");
  var td17 = document.createElement("td");
  var td18 = document.createElement("td");
  var td19 = document.createElement("td");
  var td20 = document.createElement("td");
  // br
  var br = document.createElement("br");

  // Text
  backgroundName.innerText = "Entertainer";
  subheader1.innerText = "Feature: By Popular Demand";
  subheader2.innerText = "Entertainer Routine";
  strong1.innerText = "Skill Proficiencies: ";
  strong2.innerText = "Tool Proficiencies: ";
  strong3.innerText = "Equipment: ";
  strong4.innerText = "Source: ";
  var p1text = document.createTextNode("Acrobatics, Performance");
  var p2text = document.createTextNode("Disguise kit, one type of musical instrument");
  var p3text = document.createTextNode("A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), a costume, and a pouch containing 15 gp");
  var p4text = document.createTextNode("You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.");
  var p5text = document.createTextNode("A good entertainer is versatile, spicing up every performance with a variety of different routines. Choose one to three routines or roll on the table below to define your expertise as an entertainer.");
  var p6text = document.createTextNode("Player's Handbook page 130");
  // Table text
  th1.innerText = "d8";
  th2.innerText = "Routines";
  td1.innerText = "1";
  td2.innerText = "Actor";
  td3.innerText = "2";
  td4.innerText = "Dancer";
  td5.innerText = "3";
  td6.innerText = "Fire-eater";
  td7.innerText = "4";
  td8.innerText = "Jester";
  td9.innerText = "5";
  td10.innerText = "Juggler";
  td11.innerText = "6";
  td12.innerText = "Instrumentalist";
  td13.innerText = "7";
  td14.innerText = "Poet";
  td15.innerText = "8";
  td16.innerText = "Singer";
  td17.innerText = "9";
  td18.innerText = "Storyteller";
  td19.innerText = "10";
  td20.innerText = "Tumbler";
  // Clearing div
  div.innerHTML = "";

  // Appending tags into div
  div.appendChild(backgroundName);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(subheader1);
  div.appendChild(p4);
  div.appendChild(subheader2);
  div.appendChild(p5);
  div.appendChild(table);
  div.appendChild(p6);
  div.appendChild(br);
  // Appending text into p
  p1.appendChild(strong1);
  p1.appendChild(p1text);
  p2.appendChild(strong2);
  p2.appendChild(p2text);
  p3.appendChild(strong3);
  p3.appendChild(p3text);
  p4.appendChild(p4text);
  p5.appendChild(p5text);
  p6.appendChild(strong4);
  p6.appendChild(p6text);
  // Appending rows and cells into table
  table.appendChild(tr1);
  tr1.appendChild(th1);
  tr1.appendChild(th2);
  table.appendChild(tr2);
  tr2.appendChild(td1);
  tr2.appendChild(td2);
  table.appendChild(tr3);
  tr3.appendChild(td3);
  tr3.appendChild(td4);
  table.appendChild(tr4);
  tr4.appendChild(td5);
  tr4.appendChild(td6);
  table.appendChild(tr5);
  tr5.appendChild(td7);
  tr5.appendChild(td8);
  table.appendChild(tr6);
  tr6.appendChild(td9);
  tr6.appendChild(td10);
  table.appendChild(tr7);
  tr7.appendChild(td11);
  tr7.appendChild(td12);
  table.appendChild(tr8);
  tr8.appendChild(td13);
  tr8.appendChild(td14);
  table.appendChild(tr9);
  tr9.appendChild(td15);
  tr9.appendChild(td16);
  table.appendChild(tr10);
  tr10.appendChild(td17);
  tr10.appendChild(td18);
  table.appendChild(tr11);
  tr11.appendChild(td19);
  tr11.appendChild(td20);
});

document.getElementById("entertainerGladiator").addEventListener("click", function () {
  // Defining elements
  var div = document.getElementById("backgroundInfo");
  // h
  var backgroundName = document.createElement("h2");
  var subheader1 = document.createElement("h3");
  var subheader2 = document.createElement("h3");
  // strong
  var strong1 = document.createElement("strong");
  var strong2 = document.createElement("strong");
  var strong3 = document.createElement("strong");
  var strong4 = document.createElement("strong");
  // p
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  var p4 = document.createElement("p");
  var p5 = document.createElement("p");
  var p6 = document.createElement("p");
  var p7 = document.createElement("p");
  // table 
  var table = document.createElement("table");
  table.classList.add("info-table")
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var tr1 = document.createElement("tr");
  var tr2 = document.createElement("tr");
  var tr3 = document.createElement("tr");
  var tr4 = document.createElement("tr");
  var tr5 = document.createElement("tr");
  var tr6 = document.createElement("tr");
  var tr7 = document.createElement("tr");
  var tr8 = document.createElement("tr");
  var tr9 = document.createElement("tr");
  var tr10 = document.createElement("tr");
  var tr11 = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");
  var td10 = document.createElement("td");
  var td11 = document.createElement("td");
  var td12 = document.createElement("td");
  var td13 = document.createElement("td");
  var td14 = document.createElement("td");
  var td15 = document.createElement("td");
  var td16 = document.createElement("td");
  var td17 = document.createElement("td");
  var td18 = document.createElement("td");
  var td19 = document.createElement("td");
  var td20 = document.createElement("td");
  // br
  var br = document.createElement("br");

  // Text
  backgroundName.innerText = "Variant Entertainer (Gladiator)";
  subheader1.innerText = "Feature: By Popular Demand";
  subheader2.innerText = "Entertainer Routine";
  strong1.innerText = "Skill Proficiencies: ";
  strong2.innerText = "Tool Proficiencies: ";
  strong3.innerText = "Equipment: ";
  strong4.innerText = "Source: ";
  var p1text = document.createTextNode("Acrobatics, Performance");
  var p2text = document.createTextNode("Disguise kit, one type of musical instrument");
  var p3text = document.createTextNode("An inexpensive but unusual weapon, such as a trident or net (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), costume clothes, and a belt pouch containing 15 gp");
  var p4text = document.createTextNode("You can always find a place to perform in any place that features combat for entertainment—perhaps a gladiatorial arena or secret pit fighting club. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.");
  var p5text = document.createTextNode("A good entertainer is versatile, spicing up every performance with a variety of different routines. Choose one to three routines or roll on the table below to define your expertise as an entertainer.");
  var p6text = document.createTextNode("Player's Handbook page 130");
  // Table text
  th1.innerText = "d8";
  th2.innerText = "Routines";
  td1.innerText = "1";
  td2.innerText = "Actor";
  td3.innerText = "2";
  td4.innerText = "Dancer";
  td5.innerText = "3";
  td6.innerText = "Fire-eater";
  td7.innerText = "4";
  td8.innerText = "Jester";
  td9.innerText = "5";
  td10.innerText = "Juggler";
  td11.innerText = "6";
  td12.innerText = "Instrumentalist";
  td13.innerText = "7";
  td14.innerText = "Poet";
  td15.innerText = "8";
  td16.innerText = "Singer";
  td17.innerText = "9";
  td18.innerText = "Storyteller";
  td19.innerText = "10";
  td20.innerText = "Tumbler";
  // Clearing div
  div.innerHTML = "";

  // Appending tags into div
  div.appendChild(backgroundName);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(subheader1);
  div.appendChild(p4);
  div.appendChild(subheader2);
  div.appendChild(p5);
  div.appendChild(table);
  div.appendChild(p6);
  div.appendChild(br);
  // Appending text into p
  p1.appendChild(strong1);
  p1.appendChild(p1text);
  p2.appendChild(strong2);
  p2.appendChild(p2text);
  p3.appendChild(strong3);
  p3.appendChild(p3text);
  p4.appendChild(p4text);
  p5.appendChild(p5text);
  p6.appendChild(strong4);
  p6.appendChild(p6text);
  // Appending rows and cells into table
  table.appendChild(tr1);
  tr1.appendChild(th1);
  tr1.appendChild(th2);
  table.appendChild(tr2);
  tr2.appendChild(td1);
  tr2.appendChild(td2);
  table.appendChild(tr3);
  tr3.appendChild(td3);
  tr3.appendChild(td4);
  table.appendChild(tr4);
  tr4.appendChild(td5);
  tr4.appendChild(td6);
  table.appendChild(tr5);
  tr5.appendChild(td7);
  tr5.appendChild(td8);
  table.appendChild(tr6);
  tr6.appendChild(td9);
  tr6.appendChild(td10);
  table.appendChild(tr7);
  tr7.appendChild(td11);
  tr7.appendChild(td12);
  table.appendChild(tr8);
  tr8.appendChild(td13);
  tr8.appendChild(td14);
  table.appendChild(tr9);
  tr9.appendChild(td15);
  tr9.appendChild(td16);
  table.appendChild(tr10);
  tr10.appendChild(td17);
  tr10.appendChild(td18);
  table.appendChild(tr11);
  tr11.appendChild(td19);
  tr11.appendChild(td20);
});

document.getElementById("folkHero").addEventListener("click", function () {
  // Defining elements
  var div = document.getElementById("backgroundInfo");
  // h
  var backgroundName = document.createElement("h2");
  var subheader1 = document.createElement("h3");
  var subheader2 = document.createElement("h3");
  // strong
  var strong1 = document.createElement("strong");
  var strong2 = document.createElement("strong");
  var strong3 = document.createElement("strong");
  var strong4 = document.createElement("strong");
  // p
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  var p4 = document.createElement("p");
  var p5 = document.createElement("p");
  var p6 = document.createElement("p");
  var p7 = document.createElement("p");
  // table
  var table = document.createElement("table");
  table.classList.add("info-table")
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var tr1 = document.createElement("tr");
  var tr2 = document.createElement("tr");
  var tr3 = document.createElement("tr");
  var tr4 = document.createElement("tr");
  var tr5 = document.createElement("tr");
  var tr6 = document.createElement("tr");
  var tr7 = document.createElement("tr");
  var tr8 = document.createElement("tr");
  var tr9 = document.createElement("tr");
  var tr10 = document.createElement("tr");
  var tr11 = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");
  var td10 = document.createElement("td");
  var td11 = document.createElement("td");
  var td12 = document.createElement("td");
  var td13 = document.createElement("td");
  var td14 = document.createElement("td");
  var td15 = document.createElement("td");
  var td16 = document.createElement("td");
  var td17 = document.createElement("td");
  var td18 = document.createElement("td");
  var td19 = document.createElement("td");
  var td20 = document.createElement("td");
  // br
  var br = document.createElement("br");

  // Text
  backgroundName.innerText = "Folk Hero";
  subheader1.innerText = "Feature: Rustic Hospitality";
  subheader2.innerText = "Specialty";
  strong1.innerText = "Skill Proficiencies: ";
  strong2.innerText = "Tool Proficiencies: ";
  strong3.innerText = "Equipment: ";
  strong4.innerText = "Source: ";
  var p1text = document.createTextNode("Animal Handling, Survival");
  var p2text = document.createTextNode("One type of artisan's tools, vehicles (land)");
  var p3text = document.createTextNode("A set of artisan's tools (one of your choice), a shovel, an iron pot, a set of common clothes, and a pouch containing 10 gp");
  var p4text = document.createTextNode("Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.");
  var p5text = document.createTextNode("You previously pursued a simple profession among the peasantry, perhaps as a farmer, miner, servant, shepherd, woodcutter, or gravedigger. But something happened that set you on a different path and marked you for greater things. Choose or randomly determine a defining event that marked you as a hero of the people.");
  var p6text = document.createTextNode("Player's Handbook page 131");
  // Table text
  th1.innerText = "d10";
  th2.innerText = "Defining Event";
  td1.innerText = "1";
  td2.innerText = "I stood up to a tyrant's agents.";
  td3.innerText = "2";
  td4.innerText = "I saved people during a natural disaster.";
  td5.innerText = "3";
  td6.innerText = "I stood alone against a terrible monster.";
  td7.innerText = "4";
  td8.innerText = "I stole from a corrupt merchant to help the poor.";
  td9.innerText = "5";
  td10.innerText = "I led a militia to fight off an invading army.";
  td11.innerText = "6";
  td12.innerText = "I broke into a tyrant's castle and stole weapons to arm the people.";
  td13.innerText = "7";
  td14.innerText = "I trained the peasantry to use farming implements as weapons against a tyrant's soldiers.";
  td15.innerText = "8";
  td16.innerText = "A lord rescinded an unpopular decree after I led a symbolic act of protest against it.";
  td17.innerText = "9";
  td18.innerText = "A celestial, fey, or similar creature gave me a blessing or revealed my secret origin.";
  td19.innerText = "10";
  td20.innerText = "Recruited into a lord's army, I rose to leadership and was commended for my heroism.";
  // Clearing div
  div.innerHTML = "";

  // Appending tags into div
  div.appendChild(backgroundName);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(subheader1);
  div.appendChild(p4);
  div.appendChild(subheader2);
  div.appendChild(p5);
  div.appendChild(table);
  div.appendChild(p6);
  div.appendChild(br);
  // Appending text into p
  p1.appendChild(strong1);
  p1.appendChild(p1text);
  p2.appendChild(strong2);
  p2.appendChild(p2text);
  p3.appendChild(strong3);
  p3.appendChild(p3text);
  p4.appendChild(p4text);
  p5.appendChild(p5text);
  p6.appendChild(strong4);
  p6.appendChild(p6text);
  // Appending rows and cells into table
  table.appendChild(tr1);
  tr1.appendChild(th1);
  tr1.appendChild(th2);
  table.appendChild(tr2);
  tr2.appendChild(td1);
  tr2.appendChild(td2);
  table.appendChild(tr3);
  tr3.appendChild(td3);
  tr3.appendChild(td4);
  table.appendChild(tr4);
  tr4.appendChild(td5);
  tr4.appendChild(td6);
  table.appendChild(tr5);
  tr5.appendChild(td7);
  tr5.appendChild(td8);
  table.appendChild(tr6);
  tr6.appendChild(td9);
  tr6.appendChild(td10);
  table.appendChild(tr7);
  tr7.appendChild(td11);
  tr7.appendChild(td12);
  table.appendChild(tr8);
  tr8.appendChild(td13);
  tr8.appendChild(td14);
  table.appendChild(tr9);
  tr9.appendChild(td15);
  tr9.appendChild(td16);
  table.appendChild(tr10);
  tr10.appendChild(td17);
  tr10.appendChild(td18);
  table.appendChild(tr11);
  tr11.appendChild(td19);
  tr11.appendChild(td20);
});

document.getElementById("guildArtisan").addEventListener("click", function () {
  // Defining elements
  var div = document.getElementById("backgroundInfo");
  // h
  var backgroundName = document.createElement("h2");
  var subheader1 = document.createElement("h3");
  var subheader2 = document.createElement("h3");
  // strong
  var strong1 = document.createElement("strong");
  var strong2 = document.createElement("strong");
  var strong3 = document.createElement("strong");
  var strong4 = document.createElement("strong");
  var strong5 = document.createElement("strong");
  // p
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  var p4 = document.createElement("p");
  var p5 = document.createElement("p");
  var p6 = document.createElement("p");
  var p7 = document.createElement("p");
  var p8 = document.createElement("p");
  var p9 = document.createElement("p");
  // table
  var table = document.createElement("table");
  table.classList.add("info-table");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var tr1 = document.createElement("tr");
  var tr2 = document.createElement("tr");
  var tr3 = document.createElement("tr");
  var tr4 = document.createElement("tr");
  var tr5 = document.createElement("tr");
  var tr6 = document.createElement("tr");
  var tr7 = document.createElement("tr");
  var tr8 = document.createElement("tr");
  var tr9 = document.createElement("tr");
  var tr10 = document.createElement("tr");
  var tr11 = document.createElement("tr");
  var tr12 = document.createElement("tr");
  var tr13 = document.createElement("tr");
  var tr14 = document.createElement("tr");
  var tr15 = document.createElement("tr");
  var tr16 = document.createElement("tr");
  var tr17 = document.createElement("tr");
  var tr18 = document.createElement("tr");
  var tr19 = document.createElement("tr");
  var tr20 = document.createElement("tr");
  var tr21 = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");
  var td10 = document.createElement("td");
  var td11 = document.createElement("td");
  var td12 = document.createElement("td");
  var td13 = document.createElement("td");
  var td14 = document.createElement("td");
  var td15 = document.createElement("td");
  var td16 = document.createElement("td");
  var td17 = document.createElement("td");
  var td18 = document.createElement("td");
  var td19 = document.createElement("td");
  var td20 = document.createElement("td");
  var td21 = document.createElement("td");
  var td22 = document.createElement("td");
  var td23 = document.createElement("td");
  var td24 = document.createElement("td");
  var td25 = document.createElement("td");
  var td26 = document.createElement("td");
  var td27 = document.createElement("td");
  var td28 = document.createElement("td");
  var td29 = document.createElement("td");
  var td30 = document.createElement("td");
  var td31 = document.createElement("td");
  var td32 = document.createElement("td");
  var td33 = document.createElement("td");
  var td34 = document.createElement("td");
  var td35 = document.createElement("td");
  var td36 = document.createElement("td");
  var td37 = document.createElement("td");
  var td38 = document.createElement("td");
  var td39 = document.createElement("td");
  var td40 = document.createElement("td");
  // br
  var br = document.createElement("br");

  // Text
  backgroundName.innerText = "Guild Artisan";
  subheader1.innerText = "Feature: Guild Membership";
  subheader2.innerText = "Specialty";
  strong1.innerText = "Skill Proficiencies: ";
  strong2.innerText = "Tool Proficiencies: ";
  strong3.innerText = "Languages: ";
  strong4.innerText = "Equipment: ";
  strong5.innerText = "Source: ";
  var p1text = document.createTextNode("Insight, Persuasion");
  var p2text = document.createTextNode("One type of artisan's tools");
  var p3text = document.createTextNode("One of your choice");
  var p4text = document.createTextNode("A set of artisan's tools (one of your choice), a letter of introduction from your guild, a set of traveler's clothes, and a pouch containing 15 gp");
  var p5text = document.createTextNode("As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings.");
  var p6text = document.createTextNode("Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers.");
  var p7text = document.createTextNode("You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces.");
  var p8text = document.createTextNode("Choose a type of guild or other business that your character is associated with. Work with your DM to determine the details of your guild or business.");
  var p9text = document.createTextNode("Player's Handbook page 132");
  // Table text
  th1.innerText = "d20";
  th2.innerText = "Guild Business";
  td1.innerText = "1";
  td2.innerText = "Alchemists and apothecaries";
  td3.innerText = "2";
  td4.innerText = "Armorers, locksmiths, and finesmiths";
  td5.innerText = "3";
  td6.innerText = "Brewers, distillers, and vintners";
  td7.innerText = "4";
  td8.innerText = "Calligraphers, scribes, and scriveners";
  td9.innerText = "5";
  td10.innerText = "Carpenters, roofers, and plasterers";
  td11.innerText = "6";
  td12.innerText = "Cartographers, surveyors, and chart-makers";
  td13.innerText = "7";
  td14.innerText = "Cobblers and shoemakers";
  td15.innerText = "8";
  td16.innerText = "Cooks and bakers";
  td17.innerText = "9";
  td18.innerText = "Glassblowers and glaziers";
  td19.innerText = "10";
  td20.innerText = "Jewelers and gemcutters";
  td21.innerText = "11";
  td22.innerText = "Leatherworkers, skinners, and tanners";
  td23.innerText = "12";
  td24.innerText = "Masons and stonecutters";
  td25.innerText = "13";
  td26.innerText = "Painters, limners, and sign-makers";
  td27.innerText = "14";
  td28.innerText = "Potters and tile-makers";
  td29.innerText = "15";
  td30.innerText = "Shipwrights and sail-makers";
  td31.innerText = "16";
  td32.innerText = "Smiths and metal-forgers";
  td33.innerText = "17";
  td34.innerText = "Tinkers, pewterers, and casters";
  td35.innerText = "18";
  td36.innerText = "Wagon-makers and wheelwrights";
  td37.innerText = "19";
  td38.innerText = "Weavers and dyers";
  td39.innerText = "20";
  td40.innerText = "Woodcarvers, coopers, and bowyers";
  // Clearing div
  div.innerHTML = "";

  // Appending tags into div
  div.appendChild(backgroundName);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(p4);
  div.appendChild(subheader1);
  div.appendChild(p5);
  div.appendChild(p6);
  div.appendChild(p7);
  div.appendChild(subheader2);
  div.appendChild(p8);
  div.appendChild(table);
  div.appendChild(p9);
  div.appendChild(br);
  // Appending text into p
  p1.appendChild(strong1);
  p1.appendChild(p1text);
  p2.appendChild(strong2);
  p2.appendChild(p2text);
  p3.appendChild(strong3);
  p3.appendChild(p3text);
  p4.appendChild(strong4);
  p4.appendChild(p4text);
  p5.appendChild(p5text);
  p6.appendChild(p6text);
  p7.appendChild(p7text);
  p8.appendChild(p8text);
  p9.appendChild(strong5);
  p9.appendChild(p9text);
  // Appending rows and cells into table
  table.appendChild(tr1);
  tr1.appendChild(th1);
  tr1.appendChild(th2);
  table.appendChild(tr2);
  tr2.appendChild(td1);
  tr2.appendChild(td2);
  table.appendChild(tr3);
  tr3.appendChild(td3);
  tr3.appendChild(td4);
  table.appendChild(tr4);
  tr4.appendChild(td5);
  tr4.appendChild(td6);
  table.appendChild(tr5);
  tr5.appendChild(td7);
  tr5.appendChild(td8);
  table.appendChild(tr6);
  tr6.appendChild(td9);
  tr6.appendChild(td10);
  table.appendChild(tr7);
  tr7.appendChild(td11);
  tr7.appendChild(td12);
  table.appendChild(tr8);
  tr8.appendChild(td13);
  tr8.appendChild(td14);
  table.appendChild(tr9);
  tr9.appendChild(td15);
  tr9.appendChild(td16);
  table.appendChild(tr10);
  tr10.appendChild(td17);
  tr10.appendChild(td18);
  table.appendChild(tr11);
  tr11.appendChild(td19);
  tr11.appendChild(td20);
  table.appendChild(tr12);
  tr12.appendChild(td21);
  tr12.appendChild(td22);
  table.appendChild(tr13);
  tr13.appendChild(td23);
  tr13.appendChild(td24);
  table.appendChild(tr14);
  tr14.appendChild(td25);
  tr14.appendChild(td26);
  table.appendChild(tr15);
  tr15.appendChild(td27);
  tr15.appendChild(td28);
  table.appendChild(tr16);
  tr16.appendChild(td29);
  tr16.appendChild(td30);
  table.appendChild(tr17);
  tr17.appendChild(td31);
  tr17.appendChild(td32);
  table.appendChild(tr18);
  tr18.appendChild(td33);
  tr18.appendChild(td34);
  table.appendChild(tr19);
  tr19.appendChild(td35);
  tr19.appendChild(td36);
  table.appendChild(tr20);
  tr20.appendChild(td37);
  tr20.appendChild(td38);
  table.appendChild(tr21);
  tr21.appendChild(td39);
  tr21.appendChild(td40);
});

}

