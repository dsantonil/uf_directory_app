import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuilding, deletedBuilding} = this.props;
		//console.log('data', data)

		if(!data[selectedBuilding].coordinates){
			return (
				<div>
					<p>
						<i>Selected Building Name is: {data[selectedBuilding].name}</i>
						<br/>
						<br/>
						<i>Selected Building Code is: {data[selectedBuilding].code}</i>
					</p>
				</div>
			);
		}

		else{
			return (
				<div>
					<p>
						<i>Selected Building Name is: {data[selectedBuilding].name}</i>
						<br/>
						<br/>
						<i>Selected Building Code is: {data[selectedBuilding].code}</i>
						<br/>
						<br/>
						<i>Selected Building Coordinates are:</i>
						<br/>
						<i>Latitude:  {data[selectedBuilding].coordinates.latitude}</i>
						<br/>
						<i>Longitude: {data[selectedBuilding].coordinates.longitude}</i> 
						<br/>
						<br/>
						<i>Selected Building Address is: {data[selectedBuilding].address}</i>
						<br/>
					</p>
				</div>
			);
		}
	}
}
export default ViewBuilding;
