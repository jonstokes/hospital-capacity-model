export default {
  // Jon's original parameters
  lengthOfOutbreak: 365,
  //infectionRate: 10,
  hospitalRate: 20,
  icuRate: 5,
  fatalityRate: 2.3,
  hospitalStayLength: 15,
  icuStayLength: 10,

  // New parameters
  daysInfected: 12,
  infectionRate: 2.5,
  fractionCritical: 0.15,
  fractionDeadIcu: 0.05,
  fractionDeadHospital: 0.10,
  fractionDeadHome: 0.40,
  startDay: 60,
  endDay: 120,
  containedInfectionRate: 0.9,
}
