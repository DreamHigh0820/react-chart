/** @jsx React.DOM */

"use strict";

var React = require("react");
var _     = require("underscore");

require("./meter.css");

/**
 * Renders a simple horizontal linear meter
 *
 * Props:
 *     value  - the current value of the meter
 *     max    - the max value of the meter. The range is 0 to max.
 *     units  - string to show after the numerical representation of the value
 *     label  - label to show in front of the meter
 *
 * e.g.
 *
 *   CPU    |========================             |   75%
 *  (label) 0                     value         max   value and units
 *
 * Style:
 *     .meter-background - used to draw the container and background area
 *     .meter            - used for drawing the meter itself
 */
var Meter = React.createClass({

    displayName: "MeterView",

    getDefaultProps: function() {
        return {
            max: 100,
            value: 0,
            label: "value",
            units: "%"
        };
    },

    render: function() {
        var percent = parseInt(this.props.value/this.props.max*100, 10);
        var val = this.props.value;

        if (_.isUndefined(percent) || _.isNaN(percent) || percent < 0) {
            percent = 0;
            val = "-";
        }
        if (percent > this.props.max) {
            percent = 100;
        }

        var width = "" + percent + "%";

        return (
            <div className="row">
                <div className="col-md-2">
                    {this.props.label}
                </div>
                <div className="col-md-8">
                    <div className="meter-background">
                        <div className="meter" style={{width: width}} />
                    </div>
                </div>

                <div className="col-md-2">
                    {val} {this.props.units}
                </div>
            </div>
        );
    },
});

module.exports = Meter;