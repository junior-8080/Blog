import React, { Component } from "react"
import {Link} from "react-router-dom"


import Header from "./Header"
import Footer from "./Footer"
// import Recent from "./Recent"
import CategoryInfo from "./CategoryInfo"
import "./category.css"

const contentful = require('contentful')

const client = contentful.createClient({
    space:"zymvofoqzatx",
    accessToken:"Nmp5brYY9IP6W3sb_r-tKrXkTeAARIwrgp71JxWLB68"
})

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result : [],
            query : props.match.params.id
        }
    }

    componentDidMount(){
        client.getEntries()
            .then((response) => {
             let newResult = []
                 response.items.forEach(item => {
                 if (item.sys.contentType.sys.id === "blogPost"){
                     if(item.fields.tags[0] === this.state.query){
                        return newResult.push(item)
                     }
                 }
             })
            this.setState({
               result:newResult
            })

        })
        .catch(console.error)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.id !== this.props.match.params.id){
            client.getEntries()
            .then((response) => {
             let newResult = []
                 response.items.forEach(item => {
                 if (item.sys.contentType.sys.id === "blogPost"){
                     if(item.fields.tags[0] === this.props.match.params.id){
                        return newResult.push(item)
                     }
                 }
             })
             console.log(newResult)
            this.setState({
               result:newResult
            })

        })
        .catch(console.error)
        }

    }

    render() {
        let catPost = this.state.result.map((item,i) => {
            return(
                <Link to={`/post/${item.sys.id}`} className="cat-item" key={item.id + `cat`}>
                    <img src={`https:`+item.fields.heroImage.fields.file.url} width="200px" height="200px" alt={`cat`+i} />
                    <div>
                        <h5>{item.fields.title}</h5>
                        <p>{item.fields.description}</p>
                    </div>
                    
                </Link>
            )
        })
        return(
            <div className="category">
                <Header />
                <CategoryInfo />
                <div className="cat-items">
                    {
                       catPost 
                    }
                </div>
                <Footer />
            </div>
        )
    }
}
export default Category