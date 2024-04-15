import Cards from "@/components/Cards";
import { HabitType } from "./types/habitSchemaType";

async function fetchHabitsData() {
  const res = await fetch("http://localhost:3001/habits");

  return (await res.json()) as HabitType[];
}

export default async function Home() {
  const habits = await fetchHabitsData();
  return (
    <div className="text-black flex flex-col ml-10 mt-10 mb-10">
      <h1 className="font-bold mb-10 text-2xl">Habit List</h1>

      <div id="card-container" className=" flex flex-row gap-3 flex-wrap">
        {habits.map((el) => {
          return <Cards habit={el} />;
        })}
      </div>
    </div>
  );
}
