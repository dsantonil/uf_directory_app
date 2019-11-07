import React from 'react';

class DeleteBuilding extends React.Component {

	deleteCode(value) {
		
		//Here you will need to update the value of the filter with the value from the textbox
		const searchInput = this.myValue.value
		this.props.selectedDelete(searchInput)
	}


	render() {

		//console.log('filterText value', this.props.filterText)
		return (

			<header>
				<form>
					<input 
						type = "text" 
						ref = {(value) => {this.myValue = value}}
						placeholder = "Input Building Number to Delete" 
					/>
                    <button onClick = {(a) => {a.preventDefault(); this.deleteCode()}}>
                        Click to delete!
                    </button>
				</form>
			</header>
		);
    }
}
export default DeleteBuilding;