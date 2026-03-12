// Shared astronomy question bank — used across tasks
window.ASTRO_QUESTIONS = [
  // Planets
  {q:"How many planets are in our solar system?",a:"8",hint:"Pluto was reclassified in 2006"},
  {q:"Which planet is known as the Red Planet?",a:"mars",hint:"Named after the Roman god of war"},
  {q:"Which is the largest planet in our solar system?",a:"jupiter",hint:"It has a Great Red Spot"},
  {q:"Which planet has the most moons?",a:"saturn",hint:"Over 140 confirmed moons"},
  {q:"Which planet is closest to the Sun?",a:"mercury",hint:"Smallest planet too"},
  {q:"Which planet spins on its side?",a:"uranus",hint:"Axial tilt of 98 degrees"},
  {q:"Which planet has the longest day?",a:"venus",hint:"One day = 243 Earth days"},
  {q:"What is the hottest planet in our solar system?",a:"venus",hint:"Thick CO2 atmosphere traps heat"},
  // Stars & Sun
  {q:"What is the name of our star?",a:"sun",hint:"Also called Sol"},
  {q:"What type of star is our Sun?",a:"yellow dwarf",hint:"Classification: G-type main-sequence"},
  {q:"What is the closest star to Earth (besides the Sun)?",a:"proxima centauri",hint:"4.24 light-years away"},
  {q:"How long does sunlight take to reach Earth? (minutes)",a:"8",hint:"The Sun is ~150 million km away"},
  {q:"What is the core of a dead massive star called?",a:"neutron star",hint:"Or it could become a black hole"},
  {q:"What do we call a star that explodes at end of its life?",a:"supernova",hint:"Can briefly outshine a galaxy"},
  // Space & Universe
  {q:"What galaxy do we live in?",a:"milky way",hint:"A barred spiral galaxy"},
  {q:"What is the name of the force that keeps planets in orbit?",a:"gravity",hint:"Isaac Newton described it first"},
  {q:"What is a light-year a measure of?",a:"distance",hint:"Not time — how far light travels in a year"},
  {q:"What is the name of the first man-made satellite?",a:"sputnik",hint:"Launched by the Soviet Union in 1957"},
  {q:"Who was the first human to walk on the Moon?",a:"neil armstrong",hint:"Apollo 11 mission, 1969"},
  {q:"What year did humans first land on the Moon?",a:"1969",hint:"Apollo 11 mission"},
  // Moons & other bodies
  {q:"What is the name of Earth's moon?",a:"luna",hint:"Also just called 'the Moon'"},
  {q:"Which planet has rings visible from Earth?",a:"saturn",hint:"Discovered by Galileo in 1610"},
  {q:"What is the name of the largest moon of Saturn?",a:"titan",hint:"Has a thick nitrogen atmosphere"},
  {q:"What do we call a small icy body orbiting the Sun with a tail?",a:"comet",hint:"Famous example: Halley's Comet"},
  {q:"What is the asteroid belt located between?",a:"mars and jupiter",hint:"Millions of rocky objects"},
  // Constellations
  {q:"How many constellations are officially recognised by the IAU?",a:"88",hint:"Defined in 1930"},
  {q:"What is the brightest star in the night sky?",a:"sirius",hint:"Also called the Dog Star"},
  {q:"What constellation contains the North Star?",a:"ursa minor",hint:"Also called the Little Dipper"},
  {q:"What is the North Star called?",a:"polaris",hint:"Almost directly above Earth's North Pole"},
  // Missions
  {q:"What was the name of NASA's first space shuttle?",a:"columbia",hint:"First launched in 1981"},
  {q:"Which space telescope was launched in 1990?",a:"hubble",hint:"Named after astronomer Edwin Hubble"},
  {q:"What is the name of NASA's Mars rover launched in 2020?",a:"perseverance",hint:"It also carried a small helicopter"},
  {q:"What does NASA stand for? (acronym first letter)",a:"n",hint:"National Aeronautics and Space Administration"},
];

// Get N random unique questions from bank
window.getQuestions = function(n) {
  const shuffled = [...window.ASTRO_QUESTIONS].sort(() => Math.random() - .5);
  return shuffled.slice(0, Math.min(n, shuffled.length));
};
