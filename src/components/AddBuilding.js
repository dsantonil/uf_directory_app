import React from 'react';

class AddBuilding extends React.Component {
	addBuildingUpdate(){
		const searchInput = this.myValue.value
		this.props.addBuildingUpdate(searchInput)
    }
    addCodeUpdate(){
		const searchInput = this.myValue.value
		this.props.addCodeUpdate(searchInput)
    }
    addLatitudeUpdate(){
		const searchInput = this.myValue.value
		this.props.addLatitudeUpdate(searchInput)
    }
    addLongitudeUpdate(){
		const searchInput = this.myValue.value
		this.props.addLongitudeUpdate(searchInput)
    }
    addAddressUpdate(){
		const searchInput = this.myValue.value
		this.props.addAddressUpdate(searchInput)
    }

	render() {


		const building = {
			id: '',
			code: '',
			name: '',
			coordinates:
			{
				latitude:'',
				Longitude:''
			}, 
			address: ''
		}

		return (
			<header>
				<form>
					<input 
						type = "text" 
						ref = {(value) => {this.myValue = value}}
						placeholder = "Input Building Name" 
						onChange = {this.addBuildingUpdate.bind(this)}
					/>
                    <input 
						type = "text" 
						ref = {(value) => {this.myValue = value}}
						placeholder = "Input Building Code" 
						onChange = {this.addCodeUpdate.bind(this)}
					/>
                    <input 
						type = "text" 
						ref = {(value) => {this.myValue = value}}
						placeholder = "Input Latitude Coordinate" 
						onChange = {this.addLatitudeUpdate.bind(this)}
					/>
                    <input 
						type = "text" 
						ref = {(value) => {this.myValue = value}}
						placeholder = "Input Longitude Coordinate" 
						onChange = {this.addLongitudeUpdate.bind(this)}
					/>
                    <input 
						type = "text" 
						ref = {(value) => {this.myValue = value}}
						placeholder = "Input Building Address" 
						onChange = {this.addAddressUpdate.bind(this)}
					/>
					<button color = "#9FCCF9" >Add Building!</button>
				</form>
			</header>
		);
    }
}
export default AddBuilding;