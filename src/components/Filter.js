import React from "react";

function Filter({
	filter,
	setFilter,
	sorting,
	setSorting
}) {

    const handleFilter = (e) => setFilter(e.target.value)
    const handleSorting = (e) => setSorting(e.target.value)

    return (
        <>
        <div className="filterWrapper">
			<div className="ui menu">
				<div className="ui item">
					<label>Sort by </label>
				</div>
				<div className="ui item">
					<select
						className="ui selection dropdown"
						name="sort"
						onChange={handleSorting}
						value={sorting}
          >
						<option value="name">Name</option>
						<option value="weight">Weight</option>
					</select>
				</div>
				<div className="ui item">
					<label>Greased Pigs Only?</label>
				</div>
				<div className="ui item">
					<input
						className="ui toggle checkbox"
						checked={filter}
						onChange={handleFilter}
						type="checkbox"
					/>
				</div>
			</div>
		</div>
        </>
    )
}

export default Filter;