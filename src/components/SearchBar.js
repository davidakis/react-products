import React from 'react';
import { Input } from 'antd';

const url = 'https://api.escuelajs.co/api/v1/products/?categoryId=';
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
    fetch(url + '1').then(res => {
        this.setState(
            {
                data: res.data || [],
                filteredData: res.data || []
            }
        );
    })
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
        placeholder="input search text" 
        value={input}
        onChange={(e) => this.handleFilter(e)}       
        enterButton
      />
    </div>
      {filteredData.length !== 0 && (
    <div className="dataResult">
      {filteredData.slice(0, 10).map((value, index) => {
      return (
      <div className="dataItem" key={value.id}>
        <p>{value.first_name} {value.last_name}</p>
      </div>
      );
    })}
    </div>
    )}
  </div>
     )
  }
}

export default SearchBar;