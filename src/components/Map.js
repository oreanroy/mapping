import React, {Component} from "react";
// eslint-disable-next-line
import { GoogleApiWrapper, infoWindow, Map, Marker, InfoWindow } from 'google-maps-react';
// eslint-disable-next-line
import places from '../data/places.json';
import Nav from './Nav';
var markers = [];

class Maps extends Component {
    constructor(props){
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            allPlaces: places,
            renderPlaces: places,
            content: "",
            name: "",
            displayedMarkers: "",
            verified: "false",
            rating: ''
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
        this.markerAdd = this.markerAdd.bind(this);
    }

    changeMarker = (postions) => {
        if(postions.length !== 0){
            this.setState({renderPlaces: postions})
        }
    }
    onMarkerClick  = (props, marker, e) => {
        console.log(marker)
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true,
            name: marker.name,
            content: ""
        });
        this.getInfo(marker.lat, marker.lng)
    }
    onMapClick = (props)  => {
        if(this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
                name: "",
                content: ""
            });
        }
    }
    //when list item clicked
    clickMarker = (e) =>{
        // console.log(e.target.innerText, markers[i].marker.name)
        for(var i in markers){
                if(markers[i].marker.name === e.target.innerText){
                    console.log(e.target.innerText, markers[i].marker.name)
                   console.log(markers[i].marker)
                   //console.log(this.props.markers[i].name);
                  var mark = markers[i].marker;
                  this.openInfowndow(mark);
                  this.getInfo(mark.lat, mark.lng)
            }
        }
    }

    openInfowndow(marker){
        console.log(marker)
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true,
            name: marker.key || marker.name,
            content: ""
        })
    }
    
   getInfo = (lat=0, lng=0) => {
       var self = this;
        if(lat !== 0 && lng !== 0){
            var url = "https://api.foursquare.com/v2/venues/search?client_id=EUCEB1GZBXC2ACU5LXD2KMITTU1WDYEKQ43GAZFPBXDWRBHH&client_secret=4AU5ZXC4QTWOKUHU4OK55KFSKKXR2FIQUKU5YMWFNSL4XJJH&v=20180323&limit=1&ll="+lat+","+lng;
            fetch(url).then(function(response){
                if(response.status === 200){
                response.json().then(function(data){
                    //console.log(data.response.venues[0].name  )
                    var venue = data.response.venues[0]; 
                    var name = data.response.venues[0].name
                    var verified = venue.verified
                    var rating = venue.rating
                    self.setState({content: name})
                    verified? self.setState({verified: "yes"}):self.setState({verified: "no"});
                    rating? self.setState({rating: rating}):self.setState({rating:'un rated place'});
                    return;
                })}
                else{
                    self.setState({content: "an error occured"})     
                }
            }).catch(function(error){
               self.setState({content: "no data available or an error occured"})
               return; 
            }) 
        }
        return;
    } 

    markerAdd=(marker ) =>{
        //console.log("i ran");
        //console.log(markers);
       markers.push(marker);
        return(marker);
    }
    setMarkers=() =>{
        this.setState({displayedMarkers: markers})
        //console.log(this.state.displayedMarkers)
        //console.log("i ran");
    }

    render() {
        // markers = [];
        // console.log(this.state.renderPlaces)
       console.log(markers);
        //console.log(this.places)
        const infostyle = {
            color: "black"
        }
        const style = {
            height: "100%",
            width: "100%",
            position: "relative",
        }
        return(
            <div>
                {console.log(markers)}
             {<Nav places={this.state.allPlaces} renderPlaces={this.state.renderPlaces} changeMarker={this.changeMarker} markers={markers} clickMarker={this.clickMarker}/>} 
            <Map className=" box content map"
                style = {style} 
                google = { this.props.google }
                onClick = {this.onMapClick}
                zoom = { 14 }
                initialCenter = {{ lat: 28.558204, lng: 77.275699 }}>
                <Marker key={"main marker"}
                    onClick = {this.onMarkerClick} 
                    title={"this is the main marker in south delhi"}
                    position = { {lat: 28.558204, lng: 77.275699} }
                    name = { 'South Delhi' }
                />
                {this.state.renderPlaces.map((place) => ( 
                    <Marker
                        ref= {this.markerAdd}
                        key = {place.name}
                        onClick = {this.onMarkerClick} 
                        title={place.name}
                        position = {{ lat: place.lat, lng: place.lng }}
                        lat = {place.lat}
                        lng = {place.lng}
                        name = { place.name }
                        
                    />             
                )
                )}
                {this.setMarker}
            
                <InfoWindow
                marker = {this.state.activeMarker}
                visible = {this.state.showingInfoWindow}>
                    <div id="content" style = { infostyle }>
                        <h1 id="bodyContent">{this.state.name}</h1>
                        <p>name: {this.state.content}</p>
                        <p>Verified: {this.state.verified}</p>
                        <p>Rating: {this.state.rating}</p>
                    </div>
                </InfoWindow>
            </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper ({
    api: (process.env.AIzaSyBNBnStUHSnWGG6YBtKA)
})(Maps)
//AIzaSyC0N4h7Ua3dlebfqz_E8Q6u_10Gp-LHiCc
//AIzaSyBe_l0WOxAPytKxDNBnStUHSnWGG6YBtKA
//Client ID
//EUCEB1GZBXC2ACU5LXD2KMITTU1WDYEKQ43GAZFPBXDWRBHH
//Client Secret
//4AU5ZXC4QTWOKUHU4OK55KFSKKXR2FIQUKU5YMWFNSL4XJJH
//this.getInfo = this.getInfo.bind(this);
//{this.getInfo(this.state.activeMarker.lat, this.state.activeMarker.lng)}
// <h2>{this.state.activeMarker.content}</h2>