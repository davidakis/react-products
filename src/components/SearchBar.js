import React from 'react';
import { Input } from 'antd';

const url = 'https://api.escuelajs.co/api/v1/products/?categoryId=1';
const { Search } = Input;

class SearchBar extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
        data: [],
        filteredData: [],
        error: '',
        input: ''
    }
  } 

  componentDidMount() {
    fetch(url)
      .then(res => { 
        this.setState(
            {
                data: res.body || [],
                filteredData: res.body|| []
            }
        )
    })
    .catch(err => {console.log(err)})
  }
  
  handleFilter = e => {
    let { data } = this.state;
    const setInput = e.target.value;
    const newFilter = data.filter(value => {return value.toLowerCase()})
    this.setState({
        input: setInput,
        filteredData: newFilter
    });

  }
  
  render() {
    let {input, filteredData} = this.state;
     return (
        <div className="search">
    <div className="searchInputs">
      <Search
        placeholder="Cosa stai cercando?" 
        value={input}
        onChange={this.handleFilter}       
        enterButton
      />
    </div>
   
  </div>
     )
  }
}

export default SearchBar;