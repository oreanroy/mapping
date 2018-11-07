import React, {Component} from "react";

export default class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            navstyle: "0",
            query: "",
            showing: []
            }
        }
    // nav opening and closing
    openNav = () =>{
        this.setState({navstyle:  "300px" })
    }
    
    closeNav = ()  =>{
        this.setState({navstyle:  "0" })
    }
    //filter function
    filter = (query) =>{
        var filtered = [];
        if(query ===''){
           this.props.changeMarker(this.props.places)
        }
        if(query !=='' && isNaN(query)){
            filtered = this.props.places.filter(place => place.name.toLowerCase().includes(query.toLowerCase()));
            this.props.changeMarker(filtered)
        }
    }
    itemClick = (e) => {
        this.props.clickMarker(e);
    }

    render() {
        var style = {
            size: "30px",
            cursor: "pointer"
        }
        var stylenav = {
            width: this.state.navstyle
        }
        // console.log(this.props.renderPlaces)
        return(
            <div>
            <div id="Sidenav" className="nav" style={stylenav}>
                <a href={void(0)} className="closebtn" onClick={this.closeNav}>&times;</a>
                <p>Filter</p>
                <input className="input" onChange={event=>this.filter(event.target.value)} />
                <ul>
                {this.props.renderPlaces.map((place) => <li onClick={(e) => this.itemClick(e)} key={place.name} >{place.name} </li>)}
                </ul>
            </div>
            <span style={style} onClick={this.openNav}>&#9776; Explore</span>
            </div>
        )
    }
}