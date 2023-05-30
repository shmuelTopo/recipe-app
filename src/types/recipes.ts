export interface RecipeSearch {
  id: string;
  title: string;
  readyInMinutes: number;
  dishTypes: string[];
  likes: number;
  image: string;
}

interface NutrientFact {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
}

export interface Nutrients {
  nutritionFacts: {
    vitamins: NutrientFact[];
    Calories: NutrientFact;
    Fat: NutrientFact;
    "Saturated Fat": NutrientFact;
    Carbohydrates: NutrientFact;
    "Net Carbohydrates": NutrientFact;
    Sugar: NutrientFact;
    Cholesterol: NutrientFact;
    Sodium: NutrientFact;
    Protein: NutrientFact;
    Fiber: NutrientFact;
  };
  caloriesBreakdown: {
    percentProtein: number;
    percentFat: number;
    percentCarbs: number;
  };
  weightPerServing: { amount: number; unit: string; servings: number };
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  sourceName: string;
  dishTypes: string[];
  spoonacularSourceUrl: string;
  likes: number;
  image: string;
  ingredients: Ingredient[];
  nutrients: Nutrients;
  summary: string;
  instructions: string[];
}
