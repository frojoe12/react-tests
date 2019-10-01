import React from "react"
import { shallow } from "enzyme"
import App from "./App"

const app = shallow(<App />)

it("renders correctly",()=>{
    expect(app).toMatchSnapshot()
})

it("initialized the `state` with an empty list", ()=> {
    expect(app.state().products).toEqual([])
})

it ('adds a new product to `state` when clicking the `add product` button', ()=> {
    app.find(".product-add").simulate("click")
    expect(app.state().product).toEqual([{id:1}])
})
