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
            activeMarker: {}
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
        const style = {
            height: "79%",
            width: "73%",
            position: "relative",
          }
        return(
            <div className="map">
            <Map
                style = {style} 
                google = { this.props.google }
                onClick = {this.onMapClick}
                zoom = { 12 }
                initialCenter = {{ lat: 28.558204, lng: 77.275699 }}>
                <Marker
                    onClick = {this.onMarkerClick} 
                    title={"this place is awesome"}
                    position = {{ lat: 28.558204, lng: 77.275699 }}
                    name = { 'changing of season' }
                />
                <InfoWindow
                    marker = {this.state.activeMarker}
                    visible = {this.state.showingInfoWindow} >
                    <div id="content"><h1 id="bodyContent">Hii there</h1></div>
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