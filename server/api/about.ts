export default defineEventHandler(async (event) => {
  return [
    {
      Id: 1,
      imgUrl: 'yoga-1.jpeg',
      title: '整體健身',
      content: '每一個動作，都融入運動解剖學的的觀點強調以身體的中心線為出發點。',
    },
    {
      Id: 2,
      imgUrl: 'yoga-2.jpeg',
      title: '減壓放鬆',
      content: '調節全身系統、改善血液循環、減壓養心、釋放身心，達到修心養性的目的。',
    },
    {
      Id: 3,
      imgUrl: 'yoga-3.jpeg',
      title: '局部雕塑',
      content: '幫助強化背部與腹部的核心肌群，增進我們身體穩定度以及保持良好體態',
    },
  ]
})
