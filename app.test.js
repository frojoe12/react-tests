import React from "react"
import { shallow } from "enzyme"
import App from "./App"

describe("App", ()=> {

    const app = shallow(<App />)

    it("renders correctly",()=>{
        expect(app).toMatchSnapshot()
    })

    it("initialized the `state` with an empty list", ()=> {
        expect(app.state().products).toEqual([])
    })

    describe("when clicking the `add-product` button, () => {
        
        beforeEach(()=> {
            app.find("btn-add").simulate("click")
        })   
        afterEach(()=> {
            app.setState({products:[]})  
        })
        it ('adds a new product to `state` when clicking the `add product` button', ()=> {
            expect(app.state().product).toEqual([{id:1}])
        })
    
        it("adds a new product to the rendered list",()=> {
           expect(app.find(".product-list").children().length).toEqual(1)  
        })    
    })
})
