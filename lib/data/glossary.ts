import type { Image } from './beans'

export interface Term {
  term: string
  shortDefinition: string
  extendedDefinition: Array<string>
  graphic?: Image
}

export const terms: Array<Term> = [
  {
    term: 'Peaberry Sort',
    shortDefinition:
      'A peaberry is a unique type of coffee bean that occurs when a single, rounded bean develops inside the coffee cherry instead of the usual two flat-sided beans, resulting in a sweeter and more intense flavor profile.',
    extendedDefinition: [
      'Peaberry beans are often sold as a separate, high-end product as they are only found in about 5% of all coffee cherries.',
      'They are typically more expensive than traditional coffee beans, due to their rarity and the extra care required to separate the peaberries from the rest of the harvest.',
    ],
  },
  {
    term: 'Harvest Method',
    shortDefinition:
      'Coffee cherries do not ripen uniformly, so harvesters pick all cherries at once or multiple times to ensure each cherry is harvested at peak ripeness.',
    extendedDefinition: [
      'Strip Harvesting: The conventional method of coffee harvesting, where all the cherries, both ripe and unripe, are picked in a single pass through the coffee plant.',
      'Selective Harvesting: The meticulous approach where only perfectly ripe cherries are hand-selected and the unripe ones are left to keep growing, resulting in a higher-quality coffee.',
    ],
  },
  {
    term: 'Cherry Color',
    shortDefinition:
      'Coffee cherries can take on various hues as they mature. There are red, yellow, and orange fruiting trees.',
    extendedDefinition: [
      'Red coffee cherries are the most commonly cultivated typically starting out green, transitioning to yellow as they begin to mature, and eventually becoming a deep red when they reach their peak ripeness and are ready for harvest.',
      'Certain coffee varieties mature to a yellow or orange hue, making it challenging to assess when they have reached peak ripeness.',
      'There is a general belief among coffee professionals that using fully ripe, red cherries can result in a better quality coffee. The reasoning behind this belief is that fully ripe cherries have a higher sugar content and lower acidity, which can lead to a sweeter and more balanced cup of coffee.',
      'On the other hand, there is also a belief that using a mix of red and yellow cherries can result in a cup of coffee with a more complex flavor profile, as the different stages of ripeness can contribute unique flavors to the final product.',
      'Regardless, all coffee cherries should be fully ripe, as green or under-ripe cherries can result in a cup that is sour or astringent.',
    ],
  },
  {
    term: 'SCAA Score',
    shortDefinition:
      'The Specialty Coffee Association of America (SCAA) score is a system used to evaluate the quality of specialty coffee.',
    extendedDefinition: [
      "It's a 100-point scale that evaluates various aspects of the coffee, including aroma, flavor, aftertaste, acidity, body, balance, uniformity, and defects. The score takes into account the origin of the coffee, the processing method, and other factors that can influence the flavor profile of the coffee.",
      'The SCAA score is used by coffee buyers, roasters, and consumers to assess the quality and characteristics of different coffees, and it is widely recognized as a benchmark for specialty coffee quality.',
      '90-100: Outstanding',
      '85-89.99: Excellent',
      '80-84.99: Very Good',
      '<80.0: Below Specialty Quality',
    ],
  },
]
