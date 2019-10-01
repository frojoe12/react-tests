import React, { Component } from "react"

class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            products:[]
        }
    }

    addProduct = () => {
        const { products } = this.state
        const ids = this.state.products.map(product => product.id)
        const max_id = ids.length > 0 ? Math.max(...ids) : 0
        products.push({id: max_id+1})
        this.setState({products})
    }

    render() {
        return (
            <div>
                <h2>Header</h2>
                <div className="product-list">
                    {this.state.products.map(product => {
                        return (
                            <div key={product.id}>
                                <div className="product-title">
                                    {product.title}
                                </div>
                                <div className="product-details">
                                    {product.details}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className="product-add" onClick={this.addProduct}>New product</button>
            </div>
        )
    }
}

export default App
