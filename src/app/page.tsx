import Cards from "@/components/Cards";

export default async function Home() {
  return (
    <div className="text-black flex flex-col ml-10 mt-10 mb-10">
      <h1 className="font-bold mb-10 text-2xl">Habit List</h1>

      <div id="card-container" className=" flex flex-row gap-3 flex-wrap">
        <Cards />

        <Cards />
        <Cards />

        <Cards />

        <Cards />
        <Cards />

        <Cards />
      </div>
    </div>
  );
}
