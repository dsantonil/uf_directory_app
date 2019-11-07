import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import DeleteBuilding from './components/DeleteBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      addBuilding: '',
      addCode:'',
      addAddress: '',
      addLatitude: '',
      addLongitude: '',
      selectedBuilding: 0,
      deletedBuilding: 0,
      currentData: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  addBuildlingUpdate(value){
    this.setState({
      addBuilding: value
    })
  }

  addCodeUpdate(value){
    this.setState({
      addCode: value
    })
  }

  addLatitudeUpdate(value){
    this.setState({
      addLatitude: value
    })
  }

  addLongitudeUpdate(value){
    this.setState({
      addLongitude: value
    })
  }

  addAddressUpdate(value){
    this.setState({
      addAddress: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
     this.setState({
       selectedBuilding: id
     })
  }

  selectedDelete(id){
    let newData = this.state.currentData.filter(newData => {
      return newData.id !== id
    });

    this.setState({
      currentData:newData,
      selectedBuilding: 0
    })
  }


  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1 className = ".header2" >UF Directory App</h1>
        </div>
        <Search
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.currentData}
                    //data = {this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)} 
                    selectedDelete={this.selectedDelete.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <tr>
                 <td>
                  <b>Selected Building</b>
                </td>
              </tr>
              <ViewBuilding 
                selectedBuilding={this.state.selectedBuilding}
                deletedBuilding={this.state.deletedBuilding}
                data={this.state.currentData}
              />
            </div>
            <div className="column3">
              <tr>
                <td>
                  <b>Add Building</b>
                </td>
              </tr>
              <AddBuilding
                data={this.state.currentData}
                addBuilding={this.state.addBuilding}
                addBuildlingUpdate = {this.addBuildlingUpdate.bind(this)}
                addCode={this.state.addCode}
                addCodeUpdate = {this.addCodeUpdate.bind(this)}
                addLatitude={this.state.addLatitude}
                addLatitudeUpdate = {this.addLatitudeUpdate.bind(this)}
                addLongitude={this.state.addLongitude}
                addLongitudeUpdate = {this.addLongitudeUpdate.bind(this)}
                addAddress={this.state.addAddress}
                addAddressUpdate = {this.addAddressUpdate.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
