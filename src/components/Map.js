import React, {Component} from "react";
import { GoogleApiWrapper, infoWindow, Map, Marker } from 'google-maps-react';
import { relative } from "path";


class Maps extends Component {
    render() {
        const style = {
            height: "80%"
          }
        return(
            <div className="map">
            <Map
            style = {style} 
            google = { this.props.google }
            zoom = { 12 }
            initialCenter = {{ lat: 39.6428, lng: -75.71185}}>
                
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