import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-4">
      <h1 className="text-5xl font-extrabold mb-8 tracking-wide drop-shadow-lg">
        Counter
      </h1>

      <div className="flex flex-col items-center space-y-8 bg-white p-8 rounded-lg shadow-2xl">
        <h1 className="text-6xl font-bold text-purple-700 px-12 py-6 rounded-lg shadow-md bg-gradient-to-r from-purple-100 to-purple-200">
          {count}
        </h1>

        <div className="grid grid-flow-col gap-6">
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            Increment
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            Decrement
          </button>
        </div>

        {/* Conditional rendering using logical AND */}
        {count > 0 && count % 5 === 0 && (
          <div className="bg-green-100 text-green-800 text-lg font-bold py-4 px-6 rounded-lg shadow-lg">
            🎉 You've reached a milestone of {count}!
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
