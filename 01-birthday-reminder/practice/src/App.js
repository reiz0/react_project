import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
    const [ppl, setPpl] = useState(data);
    return (
        <main>
            <div className="container">
                <h3>{ppl.length} birthdays today</h3>
                <ul>
                    <List ppl={ppl} />
                </ul>
                <button
                    onClick={() => {
                        setPpl([]);
                    }}
                >
                    Clear All
                </button>
            </div>
        </main>
    );
}

function Lists() {
    return;
}

export default App;
