const spells = {
  fireball: { name: "fireball", difficulty: 1, cost: 6, dmg: 1 },
  ice_spike: { name: "ice spike", difficulty: 2, cost: 6, dmg: 2 },
  restoration: {
    name: "restoration",
    diff: "medium",
    cost: 2,
    dmg: 0,
    healing: 6,
  },
};

const skills = {
  strength: { name: "strength", value: 5 },
  perception: { name: "perception", value: 5 },
  endurance: { name: "endurance", value: 5 },
  charisma: { name: "charisma", value: 5 },
  intelligence: { name: "intelligence", value: 5 },
  agility: { name: "agility", value: 5 },
  luck: { name: "luck", value: 0 },
};

const pronouns = {
  you: {
    subj: "you",
    obj: "you",
    poss: "your",
    poss_pro: "yours",
    refl: "yourself",
  },

  he: {
    subject: "he",
    object: "him",
    poss: "his",
    poss_pro: "his",
    reflexive: "himself",
  },

  she: {
    subject: "she",
    object: "her",
    poss: "her",
    poss_pro: "hers",
    reflexive: "herself",
  },
  it: {
    subject: "it",
    object: "it",
    poss: "its",
    poss_pro: "its",
    reflexive: "itself",
  },
};

var entity = function (name, pronouns) {
  var state = {
    name: name,
    spells: [],
    skills: skills,
    pronouns: pronouns,
  };
  return {
    try: function (action, skillName = null) {
      if (skillName !== null && skillCheck(state.skills[skillName])) {
        return `${state.name} ${action}`;
      } else return `${state.name} fails to ${action}`;
    },
    attempt: function (skillName, difficulty = 1) {
      const skill = state.skills[skillName];
      const comp = skillCheck(skill, difficulty);
      if (comp >= 2) {
        return `${state.name} succeeded very easily, thanks to ${state.pronouns.poss} ${skillName}.`;
      } else if (comp >= 2) {
        return `${state.name} succeeded, thanks to ${state.pronouns.poss} ${skillName}.`;
      } else if (comp >= 0) {
        return `${state.name} barely succeeded, thanks to ${state.pronouns.poss} ${skillName}.`;
      } else if (comp >= -2) {
        return `${state.name} failed, lacking enough ${skillName}.`;
      } else
        return `${state.name} failed spectacularly, lacking enough ${skillName}.`;
    },
    cast: function (spellName) {
      if (
        skillCheck(state.skills["intelligence"], spells[spellName].difficulty)
      ) {
        return `${state.name} casts ${spellName}.`;
      } else {
        return `${state.name} fails to cast ${spellName}.`;
      }
    },
  };
};

var e = new entity("You", pronouns.you);
console.log(e.attempt("strength"));

var w = new entity("Merlin", pronouns.he);
console.log(w.attempt("intelligence"));

//console.log(e.try("jump", "strength"));
//console.log(e.cast("fireball"));
//console.log(e.try("finds a spell book", "perception"));
