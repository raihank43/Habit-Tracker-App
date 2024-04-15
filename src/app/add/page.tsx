import { redirect } from "next/navigation";

export default async function Add() {
  const handleSubmit = async (formdata: FormData) => {
    "use server";
    const rawFormData = {
      name: formdata.get("name"),
      description: formdata.get("description"),
      startDate: formdata.get("startDate"),
      reward: formdata.get("reward"),
      interval: formdata.get("interval"),
    };

    const res = await fetch("http://localhost:3001/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      body: JSON.stringify(rawFormData),
    });

    if (res.ok) {
      redirect("/");
    }
  };
  return (
    <div className="text-black flex flex-col ml-10 mt-10 mb-10">
      <h1 className="font-bold mb-10 text-2xl">Add New Habit</h1>

      <form action={handleSubmit} className="flex flex-col border border-black">
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="" placeholder="Habit Name" />

        <label htmlFor="">Description</label>
        <textarea
          name="description"
          id=""
          placeholder="Habit Description"
        ></textarea>

        <label htmlFor="">Start Date</label>
        <input type="date" name="startDate" />

        <label htmlFor="">Reward</label>
        <input type="text" name="reward" />

        <label htmlFor="">Interval</label>
        <select name="interval" id="">
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">yearly</option>
        </select>

        <button type="submit">Add New Habit</button>
      </form>
    </div>
  );
}
