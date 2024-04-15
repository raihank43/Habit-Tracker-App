export default function Sidebar() {
  return (
    <div className="bg-gray-900 flex flex-col min-h-screen text-white gap-5 min-w-60">
      <h1 className="font-bold text-2xl max-w-full w-fit p-10">Habit Tracker</h1>
      <h2 className=" p-3 w-full text-center">Home</h2>
      <h2 className=" p-3 w-full text-center">Add</h2>
      <h2 className=" p-3 w-full text-center">Daily</h2>
      <h2 className=" p-3 w-full text-center">Weekly</h2>
      <h2 className=" p-3 w-full text-center">Monthly</h2>
    </div>
  );
}
