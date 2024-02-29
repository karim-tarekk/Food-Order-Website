import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
const requestConfig = {};
export default function Meals() {
  const {
    data: availableMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }
  return (
    <>
      {isLoading ? (
        <p className="center">Fetching meals...</p>
      ) : (
        <ul id="meals">
          {availableMeals.map((meal) => (
            <MealItem meal={meal} key={meal.id} />
          ))}
        </ul>
      )}
    </>
  );
}
