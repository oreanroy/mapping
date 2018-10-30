import React, {Component} from "react";

export default class Nav extends Component {
    render() {
        return(
            <div>
                <h3>Explore</h3>
                <select id="places">
                    <option value="cafe">Cafe</option>
                    <option value="parks">Parks</option>
                    <option value="gaming">Gaming</option>
                    <option value="hospital">Hospitals</option>
                </select>

            </div>
        )
    }
}