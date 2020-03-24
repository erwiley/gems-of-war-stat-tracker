let viewStarLevel = viewKingdomLevel = viewDelveLevel = viewDelveFaction = viewDelveHorde = viewClassLevel = viewClassTroop = viewWeaponCount = viewPetCount = false;

function allFalse() {
  viewStarLevel = viewKingdomLevel = viewDelveLevel = viewDelveFaction = viewDelveHorde = viewClassLevel = viewClassTroop = viewWeaponCount = viewPetCount = false;
}

function defaultOrder() {
  gemsDataGlobalArray.sort(function (a, b) {
    return a.id - b.id;
  });
  allFalse();
  outputGemData(gemsDataGlobalArray);
}

function starLevel() {
  gemsDataGlobalArray.sort(function (a, b) {
    let aStarLevel = a.hasOwnProperty("kingdom") ? a.kingdom.star_level : 0;
    let bStarLevel = b.hasOwnProperty("kingdom") ? b.kingdom.star_level : 0;
    return -(aStarLevel - bStarLevel);
  });
  allFalse();
  viewStarLevel = true;
  outputGemData(gemsDataGlobalArray);
}

function kingdomLevel() {
  gemsDataGlobalArray.sort(function (a, b) {
    let aKingdomLevel = a.hasOwnProperty("kingdom") ? a.kingdom.kingdom_level : 0;
    let bKingdomLevel = b.hasOwnProperty("kingdom") ? b.kingdom.kingdom_level : 0;
    return -(aKingdomLevel - bKingdomLevel);
  });
  allFalse();
  viewKingdomLevel = true;
  outputGemData(gemsDataGlobalArray);
}

function delveLevel() {
  gemsDataGlobalArray.sort(function (a, b) {
    let aDelveLevel = a.hasOwnProperty("delve") ? a.delve.level : 0;
    let bDelveLevel = b.hasOwnProperty("delve") ? b.delve.level : 0;
    return -(aDelveLevel - bDelveLevel);
  });
  allFalse();
  viewDelveLevel = true;
  outputGemData(gemsDataGlobalArray);
}

function delveFaction() {
  gemsDataGlobalArray.sort(function (a, b) {
    let aDelveFaction = a.hasOwnProperty("delve") ? a.delve.faction : 0;
    let bDelveFaction = b.hasOwnProperty("delve") ? b.delve.faction : 0;
    return -(aDelveFaction - bDelveFaction);
  });
  allFalse();
  viewDelveFaction = true;
  outputGemData(gemsDataGlobalArray);
}

function delveHorde() {
  gemsDataGlobalArray.sort(function (a, b) {
    let aDelveHorde = a.hasOwnProperty("delve") ? a.delve.horde : 0;
    let bDelveHorde = b.hasOwnProperty("delve") ? b.delve.horde : 0;
    return -(aDelveHorde - bDelveHorde);
  });
  allFalse();
  viewDelveHorde = true;
  outputGemData(gemsDataGlobalArray);
}

function classLevel() {
  gemsDataGlobalArray.sort(function (a, b) {
    let aClassLevel = a.hasOwnProperty("class") ? a.class.level : 0;
    let bClassLevel = b.hasOwnProperty("class") ? b.class.level : 0;
    return -(aClassLevel - bClassLevel);
  });
  allFalse();
  viewClassLevel = true;
  outputGemData(gemsDataGlobalArray);
}

function classTroop() {
  gemsDataGlobalArray.sort(function (a, b) {
    let aClassTroop = a.hasOwnProperty("class") ? a.class.troop : "z";
    let bClassTroop = b.hasOwnProperty("class") ? b.class.troop : "z";
    if (aClassTroop < bClassTroop) { return -1; }
    if (aClassTroop > bClassTroop) { return 1; }
    return 0;
  });
  allFalse();
  viewClassTroop = true;
  outputGemData(gemsDataGlobalArray);
}

function weaponCount() {
  gemsDataGlobalArray.sort(function (a, b) {
    let aWeaponsCount = a.hasOwnProperty("weapons") ? a.weapons.count : 0;
    let bWeaponsCount = b.hasOwnProperty("weapons") ? b.weapons.count : 0;
    return -(aWeaponsCount - bWeaponsCount);
  });
  allFalse();
  viewWeaponCount = true;
  outputGemData(gemsDataGlobalArray);
}

function petCount() {
  gemsDataGlobalArray.sort(function (a, b) {
    let aPetsCount = a.hasOwnProperty("pets") ? a.pets.count : 0;
    let bPetsCount = b.hasOwnProperty("pets") ? b.pets.count : 0;
    return -(aPetsCount - bPetsCount);
  });
  allFalse();
  viewPetCount = true;
  outputGemData(gemsDataGlobalArray);
}

function outputGemData(dataArray) {
  const container = document.getElementById("gemsDataStart");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  dataArray.forEach(data => {
    const tmpl = document.getElementById("kingdom-table-template").content.cloneNode(true);

    let kingdomName = data.kingdom.name;
    let delveName = data.hasOwnProperty("delve") ? data.delve.name : "No-Delve";
    let className = data.hasOwnProperty("class") ? data.class.name : "No-Class";

    tmpl.querySelector(".kingdom-categories .kingdom-name").innerText = kingdomName;
    tmpl.querySelector(".kingdom-categories .delve-name").innerText = delveName;
    tmpl.querySelector(".kingdom-categories .class-name").innerText = className;

    tmpl.querySelector(".star-level").innerText = data.kingdom.star_level;
    tmpl.querySelector(".kingdom-level").innerText = data.kingdom.kingdom_level == 15 ? "MAX-15" : data.kingdom.kingdom_level;

    tmpl.querySelector(".delve-level").innerText = data.hasOwnProperty("delve") ? data.delve.level : "---";
    tmpl.querySelector(".delve-faction").innerText = data.hasOwnProperty("delve") ? data.delve.faction : "---";
    tmpl.querySelector(".delve-horde").innerText = data.hasOwnProperty("delve") ? data.delve.horde : "---";

    let classLevel = data.hasOwnProperty("class") ? data.class.level : "---";
    let classTroop = data.hasOwnProperty("class") ? data.class.troop : "---";
    tmpl.querySelector(".class-level").innerText = classLevel;
    tmpl.querySelector(".class-troop").innerText = classTroop;

    tmpl.querySelector(".weapons-count").innerText = data.weapons.count;

    tmpl.querySelector(".pets-count").innerText = data.pets.count;

    // First Column Titles
    if (viewStarLevel || viewKingdomLevel) {
      tmpl.querySelector(".kingdom-categories .kingdom-name").classList.add("bg-primary");
    }

    if (viewDelveLevel || viewDelveFaction || viewDelveHorde) {
      tmpl.querySelector(".kingdom-categories .delve-name").classList.add("bg-success");
    }

    if (viewClassLevel || viewClassTroop) {
      tmpl.querySelector(".kingdom-categories .class-name").classList.add("bg-warning");
    }

    if (viewStarLevel) {
      tmpl.querySelector(".star-level").classList.add("bg-primary");
    }

    if (viewKingdomLevel) {
      tmpl.querySelector(".kingdom-level").classList.add("bg-primary");
    }

    if (viewDelveLevel) {
      tmpl.querySelector(".delve-level").classList.add("bg-success");
    }

    if (viewDelveFaction) {
      tmpl.querySelector(".delve-faction").classList.add("bg-success");
    }

    if (viewDelveHorde) {
      tmpl.querySelector(".delve-horde").classList.add("bg-success");
    }

    if (viewClassLevel) {
      tmpl.querySelector(".class-level").classList.add("bg-warning");
    }

    if (viewClassTroop) {
      tmpl.querySelector(".class-troop").classList.add("bg-warning");
    }

    if (viewWeaponCount) {
      tmpl.querySelector(".weapons-count").classList.add("bg-danger");
      tmpl.querySelector(".kingdom-categories .kingdom-name").classList.add("bg-danger");
    }

    if (viewPetCount) {
      tmpl.querySelector(".pets-count").classList.add("bg-info");
      tmpl.querySelector(".kingdom-categories .kingdom-name").classList.add("bg-info");
    }

    container.appendChild(tmpl);
  });
}

defaultOrder();
