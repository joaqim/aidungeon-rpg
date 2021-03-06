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
  strength: { name: "strength", value: 5, adj: "strong" },
  perception: { name: "perception", value: 5, adj: "perceptive" },
  endurance: { name: "endurance", value: 5, adj: "hardy" },
  charisma: { name: "charisma", value: 5, adj: "charismatic" },
  intelligence: { name: "intelligence", value: 5, adj: "intelligent" },
  agility: { name: "agility", value: 5, adj: "agile" },
  luck: { name: "luck", value: 1, adj: "lucky" },
};

const pronouns = {
  you: {
    subj: "you",
    obj: "you",
    poss: "your",
    poss_pro: "yours",
    refl: "yourself",
    past: "where",
  },

  he: {
    subj: "he",
    object: "him",
    poss: "his",
    poss_pro: "his",
    refl: "himself",
    past: "was",
  },

  she: {
    subj: "she",
    object: "her",
    poss: "her",
    poss_pro: "hers",
    refl: "herself",
    past: "was",
  },
  it: {
    subj: "it",
    object: "it",
    poss: "its",
    poss_pro: "its",
    refl: "itself",
    past: "was",
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
        return `${state.name} succeeded easily; ${state.pronouns.subj} ${state.pronouns.past} ${skill.adj} enough by far.`;
      } else if (comp >= 2) {
        return `${state.name} succeeded, thanks to ${state.pronouns.poss} ${skill.name}.`;
      } else if (comp >= 0) {
        return `${state.name} barely succeeded, but ${state.pronouns.subj} ${state.pronouns.past} ${skill.adj} enough.`;
      } else if (comp >= -2) {
        return `${state.name} failed, lacking enough ${skill.name}.`;
      } else
        return `${state.name} failed spectacularly, lacking enough ${skill.name}.`;
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

