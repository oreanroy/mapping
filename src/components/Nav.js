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
    
    openNav = () =>{
        //document.getElementById("Sidenav").style.width = "250px";
        this.setState({navstyle:  "300px" })
    }
    
    closeNav = ()  =>{
        //document.getElementById("Sidenav").style.width = "0";
        this.setState({navstyle:  "0" })
    }
    filter = (query) =>{
        var filtered = [];
        if(query ===''){
           // this.setState({shown: this.state.places})
           //set the shown to all
           this.props.changeMarker(this.props.places.places)
        }
        if(query !=='' && isNaN(query)){
            filtered = this.props.places.places.filter(place => place.name.toLowerCase().includes(query.toLowerCase()));
            this.props.changeMarker(filtered)
        }
    }
    itemClick = (e) => {
        //console.log("i ran");
     //  console.log(this.props.markers[0]);
        this.props.clickMarker(e);
     return;
    }

    render() {
        var style = {
            size: "30px",
            cursor: "pointer"
        }
        var stylenav = {
            width: this.state.navstyle
        }
        //console.log(this.props)
        return(
            /*<div>
                <h3>Explore</h3>
                <select id="places">
                    <option value="cafe">Cafe</option>
                    <option value="parks">Parks</option>
                    <option value="gaming">Gaming</option>
                    <option value="hospital">Hospitals</option>
                </select>

            </div> */
            <div>
            <div id="Sidenav" className="nav" style={stylenav}>
                <a href={void(0)} className="closebtn" onClick={this.closeNav}>&times;</a>
                <input className="input" onChange={event=>this.filter(event.target.value)} />
                <ul>

                {this.props.renderPlaces.map((place) => <li onClick={e=>this.itemClick(place.name)}>{place.name} </li>)}
                </ul>
            </div>
            <span style={style} onClick={this.openNav}>&#9776; Explore</span>
            </div>
        )
    }
}