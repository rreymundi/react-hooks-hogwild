import React from "react";
import HogCard from './HogCard'

function HogList({ filteredHogs}) {
  return (
		<div className="ui three stackable cards">
			{filteredHogs.map(hog => (
				<HogCard hogs={filteredHogs} />
			))}
		</div>
  );
}

export default HogList;