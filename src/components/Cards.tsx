export default function Cards() {
  return (
    <div
      id="cards"
      className="flex flex-col flex-wrap p-6 border min-w-64 xl:max-w-72 bg-white border-gray-200 shadow-lg duration-500 ease-in-out rounded-lg hover:scale-105"
    >
      <div className="flex items-center gap-10 justify-between">
        <h1 className="font-bold text-2xl">Learning Javascript</h1>
        <p className="bg-green-300 text-green-900 font-bold p-2 text-sm rounded-full">
          Daily
        </p>
      </div>

      <div>
        <p className="text-gray-500">Learning Javascript is fun</p>
      </div>

      <div className="mt-10 flex justify-between">
        <div className="flex flex-row items-center gap-2 bg-yellow-100 p-1 rounded-full">
          <svg
            className="h-4 w-4 text-yellow-700"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>

          <p className="text-yellow-700 font-bold">1000</p>
        </div>

        <button className="p-2 bg-red-500 text-white rounded-lg flex items-center gap-1 hover:bg-red-200 duration-500 ease-in-out">
          {" "}
          <svg
            className="h-5 w-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <polyline points="3 6 5 6 21 6" />{" "}
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}
