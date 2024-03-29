import React, { Component } from "react";
// import {storage} from './config/storageku';
import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import * as actions from "./../../actions";
import { Bar, Line } from 'react-chartjs-2';
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Dropdown,
    Progress,
    Row,
    Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
const brandInfo = getStyle('--info')

// Card Chart 2
const cardChartData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: brandInfo,
            borderColor: 'rgba(255,255,255,.55)',
            data: [1, 18, 9, 17, 34, 22, 11],
        },
    ],
};

const cardChartOpts2 = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent',
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                },

            }],
        yAxes: [
            {
                display: false,
                ticks: {
                    display: false,
                    min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
                    max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
                },
            }],
    },
    elements: {
        line: {
            tension: 0.00001,
            borderWidth: 1,
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
        },
    },
};

class Customer extends Component {
    state = {
        image: "",
        key: ""
    }

    renderCostumers() {
        // console.log("babiiii")
        const { data } = this.props;
        // console.log("asuu bener" + typeof(data))
        if (typeof (data) == "number") {
            console.log("NUMBER ANJING")
            return (
                    <Card className="text-white bg-info">
                        <CardBody className="pb-0">
                            <ButtonGroup className="float-right">
                                <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                                    {/* <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem disabled>Disabled action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu> */}
                                </ButtonDropdown>
                            </ButtonGroup>
                            <div className="text-value">{data}</div>
                            <div>CUSTOMERS</div>
                        </CardBody>
                        <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                            <Line data={cardChartData2} options={cardChartOpts2} height={70} />
                        </div>
                    </Card>
            );
        }
        // return dimput;
    }


    componentWillMount() {
        this.props.fetchToDos();
        console.log("asuuuuuu")
    }

    render() {
        const { todo } = this.props;
        return (
            <div>
                {this.renderCostumers()}
            </div>
        );
    }
}
const mapStateToProps = ( state ) => {
    return {
        data : state.dataMumut.datamu
    };
};


export default connect(mapStateToProps, actions)(Customer);