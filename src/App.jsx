import { useEffect, useState } from "react";
import "./App.css";
const API_LINK = "https://official-joke-api.appspot.com/random_joke";
function App() {
    const [data, setData] = useState({});
    const [show, setShow] = useState(false);
    const fetchData = () => {
        fetch(API_LINK)
            .then((res) => res.json())
            .then((res) => setData(res));
        setShow(false);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <main className="h-screen w-screen bg-slate-900 flex justify-center items-center">
            <div className="flex flex-col w-[50%] h-[50%] bg-slate-100 p-4 justify-between items-center">
                <h1 className="text-2xl">{data.setup}</h1>
                <div className="flex flex-col gap-4 items-center">
                    {show && (
                        <p className="bg-teal-800 text-white p-3">
                            {data.punchline}
                        </p>
                    )}
                    <button
                        className="bg-indigo-500 text-white p-3 rounded"
                        onClick={() => setShow(true)}
                    >
                        Show punchline
                    </button>
                </div>
                <button
                    className="bg-cyan-900 w-[20%] rounded text-white p-2"
                    onClick={fetchData}
                >
                    Another Joke
                </button>
            </div>
        </main>
    );
}

export default App;
