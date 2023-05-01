import "./NutritionFacts.css";

function NutritionFacts({ nutrients }) {

  return (
    <>
      <section className="performance-facts">
        <header className="performance-facts__header">
          <h1 className="performance-facts__title">Nutrition Facts</h1>
          <p>
            Serving Size {nutrients.weightPerServing.amount}
            {nutrients.weightPerServing.unit}
          </p>
          <p>Serving Per Meal {nutrients.weightPerServing.servings}</p>
        </header>
        <table className="performance-facts__table">
          <thead>
            <tr>
              <th colSpan={3} className="small-info">
                Amount Per Serving
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan={2}>
                <b>Calories </b>
                {Math.round(nutrients.nutritionFacts.Calories.amount)}
              </th>
              <td>
                Calories from Fat{" "}
                {Math.round(
                  (nutrients.nutritionFacts.Calories.amount / 100) *
                    nutrients.caloriesBreakdown.percentFat
                )}
              </td>
            </tr>
            <tr className="thick-row">
              <td colSpan={3} className="small-info">
                <b>% Daily Value*</b>
              </td>
            </tr>
            <NutrientCell
              nutrient={nutrients.nutritionFacts.Fat}
              prefix={"Total"}
            />
            <NutrientCell
              nutrient={nutrients.nutritionFacts["Saturated Fat"]}
              isBlank={true}
            />
            <NutrientCell nutrient={nutrients.nutritionFacts.Cholesterol} />
            <NutrientCell nutrient={nutrients.nutritionFacts.Sodium} />

            <NutrientCell
              nutrient={nutrients.nutritionFacts.Carbohydrates}
              prefix={"Total"}
            />
            <NutrientCell
              nutrient={nutrients.nutritionFacts.Sugar}
              isBlank={true}
            />
            <NutrientCell
              nutrient={nutrients.nutritionFacts.Fiber}
              isBlank={true}
              prefix={"Dietary"}
            />
            <NutrientCell
              nutrient={nutrients.nutritionFacts.Protein}
              trClassName={"thick-end"}
            />
          </tbody>
        </table>
        <PerformanceTable vitamins={nutrients.nutritionFacts.vitamins} />
        
        <p className="small-info">
          * Percent Daily Values are based on a 2,000 calorie diet. Your daily
          values may be higher or lower depending on your calorie needs:
        </p>
        <table className="performance-facts__table--small small-info">
          <thead>
            <tr>
              <td colSpan={2} />
              <th>Calories:</th>
              <th>2,000</th>
              <th>2,500</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan={2}>Total Fat</th>
              <td>Less than</td>
              <td>65g</td>
              <td>80g</td>
            </tr>
            <tr>
              <td className="blank-cell" />
              <th>Saturated Fat</th>
              <td>Less than</td>
              <td>20g</td>
              <td>25g</td>
            </tr>
            <tr>
              <th colSpan={2}>Cholesterol</th>
              <td>Less than</td>
              <td>300mg</td>
              <td>300 mg</td>
            </tr>
            <tr>
              <th colSpan={2}>Sodium</th>
              <td>Less than</td>
              <td>2,400mg</td>
              <td>2,400mg</td>
            </tr>
            <tr>
              <th colSpan={3}>Total Carbohydrate</th>
              <td>300g</td>
              <td>375g</td>
            </tr>
            <tr>
              <td className="blank-cell" />
              <th colSpan={2}>Dietary Fiber</th>
              <td>25g</td>
              <td>30g</td>
            </tr>
          </tbody>
        </table>
        <p className="small-info">Calories per gram:</p>
        <p className="small-info text-center">
          Fat 9 • Carbohydrate 4 • Protein 4
        </p>
      </section>
    </>
  );
}

function NutrientCell({ nutrient, isBlank, trClassName, prefix }) {
  return (
    <tr className={trClassName}>
      {isBlank && <td className="blank-cell" />}
      <th colSpan={isBlank ? 1 : 2}>
        {isBlank ? (
          <>{`${prefix ?? ""} ${nutrient.name}`} </>
        ) : (
          <b>{`${prefix ?? ""} ${nutrient.name}`}</b>
        )}
        {" " + Math.round(nutrient.amount + " ")}
        {nutrient.unit}
      </th>
      <td>
        <b>{Math.round(nutrient.percentOfDailyNeeds)}%</b>
      </td>
    </tr>
  );
}

function PerformanceTable({ vitamins }) {
  //Create a 2D array to make it easier to work with when creating a 2-column table.
  const vitamins2dArray = [];
  vitamins.forEach((item, index) => {
    if (index % 2 === 0) vitamins2dArray.push([]);
    console.log(item, index, Math.floor(index / 2));
    vitamins2dArray[Math.floor(index / 2)].push(item);
  });
  return (
    <table className="performance-facts__table--grid">
      <tbody>
        {vitamins2dArray.map((vitamins, index) => (
          <tr key={index}>
            <td colSpan={vitamins2dArray.length-1 === index ? 3 : 2}>
              {vitamins[0].name} {vitamins[0].percentOfDailyNeeds}%
            </td>
            {vitamins[1] && <td>
              {vitamins[1].name} {vitamins[1].percentOfDailyNeeds}%
            </td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NutritionFacts;
