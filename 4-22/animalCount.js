function animalCount(miles) {
  const animalDensityFirstTenMiles = 10;
  const animalDensitySecondTenMiles = 50;
  const animalDensityRestMiles = 100;
  if (miles <= 10) {
    const count = miles * animalDensityFirstTenMiles;
    return count;
  } else if (miles <= 20) {
    const firstDenseAnimals = 10 * animalDensityFirstTenMiles;
    const restMiles = miles - 10;
    const secondDenseAnimals = restMiles * animalDensitySecondTenMiles;
    const totalAnimals = firstDenseAnimals + secondDenseAnimals;

    return totalAnimals;
  } else {
    const firstDenseAnimals = 10 * animalDensityFirstTenMiles;
    const secondDenseAnimals = 10 * animalDensitySecondTenMiles;
    const restMiles = miles - 20;
    const RestDenseAnimals = restMiles * animalDensityRestMiles;
    const totalAnimals =
      firstDenseAnimals + secondDenseAnimals + RestDenseAnimals;
    return totalAnimals;
  }
}

console.log(animalCount(75));
