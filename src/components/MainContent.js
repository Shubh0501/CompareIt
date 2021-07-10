import React from 'react';
import { connect } from 'react-redux';
import { fetchNames } from '../actions';

import SearchBar from '../containers/SearchBar';

import '../styles/MainContent.css';

class MainContent extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
            suggestions1: [],
            suggestions2: [],
            data1: {},
            data2: {},
            classname_spinner: "spinner-div spinner-border text-info",
            classname_content: "row justify-content-around g-0"
        }
    }

    componentDidMount = () => {
        var className = this.state.classname_content;
        var className2 = `${this.state.classname_content} hidden`;
        this.setState({
            classname_content: className2
        });
        this.props.fetchNames(className,this.state.classname_spinner, this.updateState);
    }

    updateState = (content, spinner) => {
        this.setState({
            classname_content: content,
            classname_spinner: spinner
        });
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log(this.props)
        if (this.props.cameraData !== prevProps.cameraData) {
            if (this.props.searchNumber !== null && Object.keys(this.props.cameraData).length !== 0) {
                var data = this.props.cameraData
                this.setState({
                    [`data${this.props.searchNumber}`]: data
                }, () => console.log(this.state));
            }
        }
    }

    showData = (data) => {
        if (Object.keys(data).length !== 0) {
            return (
                <div className="data-container">
                    <div className="sub-heading-container">
                        <p className="sub-heading">General</p>
                        <table className="table-main">
                            <tbody>
                                <tr className="table-row">
                                    <td className="table-head">Name</td>
                                    <td className="table-data">{data.general.name}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Brand</td>
                                    <td className="table-data">{data.general.brand}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Launched Date</td>
                                    <td className="table-data">{data.general.launchedDate}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Camera Model</td>
                                    <td className="table-data">{data.general.cameraModel}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Camera Type</td>
                                    <td className="table-data">{data.general.cameraType}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Image Sensor Type</td>
                                    <td className="table-data">{data.general.imageSensorType}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Image Sensor Size</td>
                                    <td className="table-data">{data.general.imageSensorSize}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Effective Pixels</td>
                                    <td className="table-data">{data.general.effectivePixels}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Total Pixels</td>
                                    <td className="table-data">{data.general.totalPixels}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Max Resolution</td>
                                    <td className="table-data">{data.general.maxResolution}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Aspect Ratio</td>
                                    <td className="table-data">{data.general.aspectRatio}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-heading-container">
                        <p className="sub-heading">Sensor</p>
                        <table className="table-main">
                            <tbody>
                                <tr className="table-row">
                                    <td className="table-head">ISO Rating</td>
                                    <td className="table-data">{data.sensor.ISORating}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">White Balance Presets</td>
                                    <td className="table-data">{data.sensor.whiteBalancePresets}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Custom White Balance</td>
                                    <td className="table-data">{data.sensor.customWhiteBalance}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Autofocus Point</td>
                                    <td className="table-data">{data.sensor.autofocusPoint}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Processor</td>
                                    <td className="table-data">{data.sensor.processor}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Minimum Shutter Speed</td>
                                    <td className="table-data">{data.sensor.minimumShutterSpeed}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Maximum Shutter Speed</td>
                                    <td className="table-data">{data.sensor.maximumShutterSpeed}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-heading-container">
                        <p className="sub-heading">Shutter</p>
                        <table className="table-main">
                            <tbody>
                                <tr className="table-row">
                                    <td className="table-head">Shutter Type</td>
                                    <td className="table-data">{data.shutter.shutterType}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Continuous Shooting</td>
                                    <td className="table-data">{data.shutter.continuousShooting}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-heading-container">
                        <p className="sub-heading">Lens</p>
                        <table className="table-main">
                            <tbody>
                                <tr className="table-row">
                                    <td className="table-head">Lens Mount</td>
                                    <td className="table-data">{data.lens.lensMount}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Compatible Lenses</td>
                                    <td className="table-data">{data.lens.compatibleLenses}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Focal Length</td>
                                    <td className="table-data">{data.lens.focalLength}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-heading-container">
                        <p className="sub-heading">ViewFinder</p>
                        <table className="table-main">
                            <tbody>
                                <tr className="table-row">
                                    <td className="table-head">Type</td>
                                    <td className="table-data">{data.viewfinder.type}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Coverage</td>
                                    <td className="table-data">{data.viewfinder.coverage}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Magnification</td>
                                    <td className="table-data">{data.viewfinder.magnification}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Eyepoint</td>
                                    <td className="table-data">{data.viewfinder.eyepoint}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Diopric Adjustment</td>
                                    <td className="table-data">{data.viewfinder.diopricAdjustment}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-heading-container">
                        <p className="sub-heading">Display</p>
                        <table className="table-main">
                            <tbody>
                                <tr className="table-row">
                                    <td className="table-head">Size</td>
                                    <td className="table-data">{data.display.size}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Type</td>
                                    <td className="table-data">{data.display.type}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Touchscreen</td>
                                    <td className="table-data">{data.display.touchscreen}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Screen Dots</td>
                                    <td className="table-data">{data.display.screenDots}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-heading-container">
                        <p className="sub-heading">Flash</p>
                        <table className="table-main">
                            <tbody>
                                <tr className="table-row">
                                    <td className="table-head">Built In Flash</td>
                                    <td className="table-data">{data.flash.builtInFlash}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">External Flash</td>
                                    <td className="table-data">{data.flash.externalFlash}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-heading-container">
                        <p className="sub-heading">Power</p>
                        <table className="table-main">
                            <tbody>
                                <tr className="table-row">
                                    <td className="table-head">Battery Model</td>
                                    <td className="table-data">{data.power.batteryModel}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Battery Type</td>
                                    <td className="table-data">{data.power.batteryType}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Battery Life</td>
                                    <td className="table-data">{data.power.batteryLife}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Battery Life for Video</td>
                                    <td className="table-data">{data.power.batteryLifeForVideo}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-heading-container">
                        <p className="sub-heading">Connectivity</p>
                        <table className="table-main">
                            <tbody>
                                <tr className="table-row">
                                    <td className="table-head">WIFI</td>
                                    <td className="table-data">{data.connectivity.wifi}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Bluetooth</td>
                                    <td className="table-data">{data.connectivity.bluetooth}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">HDMI</td>
                                    <td className="table-data">{data.connectivity.hdmi}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">USB</td>
                                    <td className="table-data">{data.connectivity.usb}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Remote Control</td>
                                    <td className="table-data">{data.connectivity.remoteControl}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-heading-container">
                        <p className="sub-heading">Storage</p>
                        <table className="table-main">
                            <tbody>
                                <tr className="table-row">
                                    <td className="table-head">Memory Card Type</td>
                                    <td className="table-data">{data.storage.memoryCardType}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Video Format</td>
                                    <td className="table-data">{data.storage.videoFormat}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Image Format</td>
                                    <td className="table-data">{data.storage.imageFormat}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-heading-container">
                        <p className="sub-heading">Body</p>
                        <table className="table-main">
                            <tbody>
                                <tr className="table-row">
                                    <td className="table-head">Dimension</td>
                                    <td className="table-data">{data.body.dimension}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Weight</td>
                                    <td className="table-data">{data.body.weight}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Body Construction</td>
                                    <td className="table-data">{data.body.bodyConstruction}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Durability</td>
                                    <td className="table-data">{data.body.durability}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Colors</td>
                                    <td className="table-data">{data.body.colors}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-heading-container">
                        <p className="sub-heading">Audio</p>
                        <table className="table-main">
                            <tbody>
                                <tr className="table-row">
                                    <td className="table-head">Microphone</td>
                                    <td className="table-data">{data.audio.microphone}</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head">Speaker</td>
                                    <td className="table-data">{data.audio.speaker}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="no-content-div">
                    <p>Use the searchbar above to search for a product</p>
                </div>
            )
        }
    }

    render () {
        return (
            <div className="main-container">
                <div className={this.state.classname_spinner} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className={this.state.classname_content}>
                    <div className="col">
                        <div className="search-bar-container">
                            <div className="search-bar">
                                <SearchBar searchNumber={1} suggestions={this.props.suggestions} />
                            </div>
                        </div>
                        {this.showData(this.state.data1)}
                    </div>
                    <div className="col">
                        <div className="search-bar-container">
                            <div className="search-bar">
                                <SearchBar searchNumber={2} suggestions={this.props.suggestions}/>
                            </div>
                        </div>
                        {this.showData(this.state.data2)}
                    </div>
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = (state, props) => {
    return {
        error_msg: state.nameList.error,
        suggestions: state.nameList.names,
        cameraData: state.cameraData.camera,
        searchNumber: state.cameraData.searchNumber
    };
}

export default connect(mapStateToProps, {
    fetchNames
})
(MainContent);