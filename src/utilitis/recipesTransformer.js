const importantNutrients = [
  "Protein",
  "Sodium",
  "Cholesterol",
  "Sugar",
  "Net Carbohydrates",
  "Carbohydrates",
  "Saturated Fat",
  "Fat",
  "Fiber",
  "Calories",
];

function searchReusltsTransformer(searchResults) {
  console.log(searchResults)
  return searchResults.map((recipe) => {
    const {
      id,
      title,
      readyInMinutes,
      servings,
      sourceUrl,
      sourceName,
      spoonacularSourceUrl,
      image,
      summary,
      analyzedInstructions,
      nutrition
    } = recipe;

    const nutritionFacts = nutrition.nutrients.reduce(
      (nutritionObj, current) => {
        if (importantNutrients.includes(current.name)) {
          nutritionObj[current.name] = current;
        } else {
          nutritionObj.vitamins.push(current);
        }
        return nutritionObj;
      },
      { vitamins: [] }
    );
    const theRecipe = {
      id,
      title,
      readyInMinutes,
      servings,
      sourceUrl,
      sourceName,
      spoonacularSourceUrl,
      image,
      ingredients: nutrition.ingredients,
      nutrients: {
        nutritionFacts,
        caloriesBreakdown: nutrition.caloricBreakdown,
        weightPerServing: nutrition.weightPerServing
      },
      summary,
      analyzedInstructions,
    };

    theRecipe.nutrients.weightPerServing.servings = theRecipe.servings
    return theRecipe;
  });
}

export { searchReusltsTransformer };
