import React, {useState} from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogsList";
import hogs from "../porkers_data";

function App() {
	const [filter, setFilter] = useState(false);
    const [sorting, setSorting] = useState("name");

	const filteredHogs = hogs
    .filter((hog) => (filter ? hog.greased : true))
    .sort((hog1, hog2) => {
      if (sorting === "weight") {
        return hog1.weight - hog2.weight;
      } else {
        return hog1.name.localeCompare(hog2.name);
      }
    });

	return (
		<div className="App">
			<Nav />
			<Filter filter={filter} setFilter={setFilter} sorting={sorting} setSorting={setSorting} />
			<HogList hogs={hogs} filteredHogs={filteredHogs} />
		</div>
	);
}

export default App;