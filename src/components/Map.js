import React, {Component} from "react";
// eslint-disable-next-line
import { GoogleApiWrapper, infoWindow, Map, Marker, InfoWindow } from 'google-maps-react';
// eslint-disable-next-line
import places from '../data/places.json';

class Maps extends Component {
    constructor(props){
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            places: this.places
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
    }

    onMarkerClick  = (props, marker, e) => {
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    onMapClick = (props)  => {
        if(this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }
    render() {
        const infostyle = {
            color: "black"
        }
        const style = {
            height: "79%",
            width: "73%",
            position: "relative",
        }
        console.log(places.places)
        fetch('https://api.foursquare.com/v2/venues/search?client_id=EUCEB1GZBXC2ACU5LXD2KMITTU1WDYEKQ43GAZFPBXDWRBHH&client_secret=CLIENT_SECRET&v=4AU5ZXC4QTWOKUHU4OK55KFSKKXR2FIQUKU5YMWFNSL4XJJH&limit=1&ll=28.558204,77.275699&limit=1')
        .then(function(response) {
            console.log(response)
            // Code for handling API response
        })
        .catch(function(error) {
            // Code for handling errors
            console.log(error);
        });

        return(
            <div className="map">
            <Map
                style = {style} 
                google = { this.props.google }
                onClick = {this.onMapClick}
                zoom = { 14 }
                initialCenter = {{ lat: 28.558204, lng: 77.275699 }}>
                <Marker key={"main marker"}
                    onClick = {this.onMarkerClick} 
                    title={"this is the main marker in south delhi"}
                    position = {{ lat: 28.558204, lng: 77.275699 }}
                    name = { 'South Delhi' }
                />
                {places.places.map((place) => <Marker
                    key = {place.name}
                    onClick = {this.onMarkerClick} 
                    title={place.name}
                    position = {{ lat: place.lat, lng: place.lng }}
                    name = { place.name }
                />)}
                <InfoWindow
                    
                    marker = {this.state.activeMarker}
                    visible = {this.state.showingInfoWindow} >
                    <div id="content" style = { infostyle }><h1 id="bodyContent">{this.state.activeMarker.name}</h1></div>
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