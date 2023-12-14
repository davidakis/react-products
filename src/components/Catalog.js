import React from 'react';
import { Card, Row, Col, Select, InputNumber, Pagination } from 'antd';

const { Option } = Select;

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
        let products = fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => {return res.json()});
        let categories = fetch('https://api.escuelajs.co/api/v1/categories')
            .then(res => {return res.json()});
        products.then(data => this.setState({ products: data}));
        categories.then(data => this.setState({ filteredProducts: data}));
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
                    placeholder="Select category"
                    onChange={this.handleCategoryChange}
                  >
                    <Option value="">All Categories</Option>
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
                    placeholder="Min Price"
                    onChange={(value) => this.handlePriceRangeChange([value, priceRange[1]])}
                  />
                </Col>
                <Col span={6}>
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="Max Price"
                    onChange={(value) => this.handlePriceRangeChange([priceRange[0], value])}
                  />
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                {filteredProducts.map((product) => (
                  <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                    <Card title={product.name} style={{ width: '100%' }}>
                      <img src={product.images}></img>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          );
    }
}
export default Catalog;