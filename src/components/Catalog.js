import React from 'react';
import styled from 'styled-components';
import { Card, Row, Col, Select, InputNumber, Checkbox, Pagination } from 'antd';

const { Option } = Select;

const cardStyle = {
  display: 'flex',
  height: '220px',
  padding: '5px 5px 0px 0px',
  flexDirection: 'column',
  alignItems: 'flex-end',
  flexShrink: 0,
  alignSelf: 'stretch' 
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


class Catalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            categories: [],
            filteredProducts: [],
            selectedCategory: '',
            priceRange: [0, 1000]
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

    handleCategoryChange = value => {
        this.setState({selectedCategory: value});
    }

    handlePriceRangeChange = value => {
        this.setState({ priceRange: value });
    }
    render() {
        let {categories, filteredProducts, priceRange} = this.state;
        return (
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
              <Row gutter={[16, 16]}>
                {filteredProducts.map((product) => (
                  <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                    <Card style={cardStyle} title={product.name}>
                      <Img><img src={product.images} width="578" height="385" /></Img>
                      <Desc>{product.description}</Desc>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          );
    }
}
export default Catalog;