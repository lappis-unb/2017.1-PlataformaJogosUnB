import React, {PropTypes} from "react";
import {Dropdown} from "semantic-ui-react";

export default class PerPageItems extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            "name": "Games per page: 16",
            "perPageNumber": 16
        }
    }

    listDropdownItems(){
        const items = [{
            name: "Games per page: 4",
            number: 4
        },{
            name: "Games per page: 8",
            number: 8
        },{
            name: "Games per page: 12",
            number: 12
        },{
            name: "Games per page: 16",
            number: 16
        },{
            name: "Games per page: 20",
            number : 20
        }]
        const listDropItems = items.map((item,index) =>
            <Dropdown.Item key={index} onClick={(e) => this.handleClick(item, e)}>
                {item.name}
            </Dropdown.Item>
        );
        return listDropItems;
    }

    handleClick(item){
        const option = item.number;
        this.setState({ name: item.name })
        this.setState({ perPageNumber: item.number })
        this.props.callbackParent('perPageOption', option)
    }

    render(){
        return(
            <Dropdown text={this.state.name}>
                <Dropdown.Menu>
                    {this.listDropdownItems()}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

PerPageItems.propTypes = {
    callbackParent: PropTypes.func.isRequired
}