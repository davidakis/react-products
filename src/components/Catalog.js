import React from 'react';
import styled from 'styled-components';
import { Card, Row, Col, Select, InputNumber, Checkbox, Pagination } from 'antd';

const { Option } = Select;

const cardStyle = {
  display: 'flex',
  width: '289px',
  height: '420px',
  paddingBottom: '20px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  flexShrink: 0,
  background: '#fff',
  boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.15);' 
}

const Img = styled.div`
   display: flex;
   height: 220px;
   padding: 5px 5px 0px 0px;
   flex-direction: column;
   align-items: flex-end;
   flex-shrink: 0;
   align-self: stretch; 
`

const Desc = styled.div`
  display: flex;
  width: 289px;
  height: 420px;
  padding-bottom: 20px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex-shrink: 0; 
`

const backgroundStyle = {
  backgroundRepeat: 'no-repeat', 
  backgroundPosition: '50%', 
  backgroundSize: 'cover', 
  backgroundColor: 'lightgrey' 
};

const Container = styled.div`
  position: relative;
  top: 350px;
`
const Footer = styled.div`
  position: relative;
  top: 300px;
`


class Catalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            categories: [],
            filteredProducts: [],
            selectedCategory: '',
            priceRange: [0, 1000],
            minValue: 1,
            maxValue: 20
        }
    }

    componentDidMount() {
     this.getItems();
    }

    getItems = () =>  {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(data => this.setState({products: data, filteredProducts: data}))
        .catch(err => console.log(err))

        fetch('https://api.escuelajs.co/api/v1/categories')
        .then(res => res.json())
        .then(data => this.setState({categories: data}))
        .catch(err => console.log(err))
    }

    toggleFilter = () =>{
      let {selectedCategory, filteredProducts, priceRange} = this.state;
       let filter = filteredProducts.filter(product => {
        (selectedCategory === '' || product.category === selectedCategory) &&
         product.price >= priceRange[0] &&
         product.price <= priceRange[1]
       });
       
       this.setState({
        filteredProducts: filter,
        priceRange: priceRange
       })
    }

    handleCategoryChange = value => {
       this.setState({
          selectedCategory: value,
      }, this.toggleFilter());
    }

    handlePriceRangeChange = value => {
        this.setState({ priceRange: value }, this.toggleFilter());
    }

    renderExtra = product => {
      return (
        <div style={{paddingBottom: '20px'}}>
          <Img style={{backgroundImage: `url(${product.images})`, ...backgroundStyle}}></Img>
          <Desc>{product.title}<br /><br />{product.description}</Desc>
        </div>
      )
    }

    handleChange = value => {
      this.setState({
        minValue: (value - 1) * 10,
        maxValue: value * 10
      });
    };

    render() {
        let {categories, filteredProducts, priceRange, minValue, maxValue} = this.state;
        return (
          <div>
            <div>
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Select
                    style={{ width: '100%' }}
                    placeholder="Categoria"
                    onChange={this.handleCategoryChange}
                  >
                    <Option value="">Tutte</Option>
                    {categories.map((category) => (
                      <Option key={category.id} value={category.name}>
                        {category.name}
                      </Option>
                    ))}
                  </Select>
                </Col>
                <Col span={6}>
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="Prezzo minimo"
                    onChange={(value) => this.handlePriceRangeChange([value, priceRange[1]])}
                  />
                </Col>
                <Col span={6}>
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="Prezzo massimo"
                    onChange={(value) => this.handlePriceRangeChange([priceRange[0], value])}
                  />
                </Col>
                <Col span={6}>
                  <Checkbox checked>Solo disponibili</Checkbox>
                </Col>
              </Row>
              <Container>
                <Row gutter={[16, 16]}>
                  {filteredProducts.length > 0 && 
                    filteredProducts.slice(minValue, maxValue).map((product) => (
                    <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                      <Card 
                        style={cardStyle} 
                        title={product.name} 
                        extra={this.renderExtra(product)}>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
              <Footer>
                <Pagination
                    defaultCurrent={1}
                    defaultPageSize={10} //default size of page
                    onChange={this.handleChange}
                    total={5} //total number of card data available
                  />
              </Footer>
            </div>
          );
    }
}
export default Catalog;