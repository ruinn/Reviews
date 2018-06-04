const featureBank = [
  'Value for money',
  'Atmosphere',
  'Cleanliness',
  'Location',
  'Staff',
  'Security',
  'Facilities'
];

module.exports = featureBank.map((feature, index) => {
  return {feature: feature, featureId: index}
})