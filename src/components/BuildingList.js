import React, { Component } from 'react';

class buildingList extends Component {

	render(){
		const {data, filterText, selectedUpdate, selectedDelete} = this.props;
		//console.log('This is my directory file', this.props.data);

		const buildingList = data
		.filter(directory => {
			return directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || 
			directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
		.map(directory => {
			return (
				<tr 
				key={directory.id}
				onClick = {() => selectedUpdate(directory.id-1)}
				>
					<td>{directory.code} </td>
					<td>{directory.name} </td>	
					<button onClick = {() => {selectedDelete(directory.id)}}>Delete Building!</button>
				</tr>
		);
		});	

		
		return (<div>{buildingList}</div>);
			}

}

export default buildingList;