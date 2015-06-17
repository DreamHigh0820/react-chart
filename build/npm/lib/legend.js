/*
 * ESnet React Charts, Copyright (c) 2014, The Regents of the University of
 * California, through Lawrence Berkeley National Laboratory (subject
 * to receipt of any required approvals from the U.S. Dept. of
 * Energy).  All rights reserved.
 *
 * If you have questions about your rights to use or distribute this
 * software, please contact Berkeley Lab's Technology Transfer
 * Department at TTD@lbl.gov.
 *
 * NOTICE.  This software is owned by the U.S. Department of Energy.
 * As such, the U.S. Government has been granted for itself and others
 * acting on its behalf a paid-up, nonexclusive, irrevocable,
 * worldwide license in the Software to reproduce, prepare derivative
 * works, and perform publicly and display publicly.  Beginning five
 * (5) years after the date permission to assert copyright is obtained
 * from the U.S. Department of Energy, and subject to any subsequent
 * five (5) year renewals, the U.S. Government is granted for itself
 * and others acting on its behalf a paid-up, nonexclusive,
 * irrevocable, worldwide license in the Software to reproduce,
 * prepare derivative works, distribute copies to the public, perform
 * publicly and display publicly, and to permit others to do so.
 *
 * This code is distributed under a BSD style license, see the LICENSE
 * file for complete information.
 */

"use strict";

var React = require("react");
var _ = require("underscore");

require("./legend.css");

var Legend = React.createClass({

    displayName: "Legend",

    getDefaultProps: function getDefaultProps() {
        return {
            "style": "swatch" };
    },

    render: function render() {
        var self = this;

        var items = [];
        _.each(this.props.categories, function (categoryClass, categoryLabel) {
            var styleClass;
            if (self.props.style === "swatch") {
                styleClass = "legend-swatch " + categoryClass;
            } else if (self.props.style === "line") {
                styleClass = "legend-line " + categoryClass;
            } else if (self.props.style === "dot") {
                styleClass = "legend-dot " + categoryClass;
            }

            var labelClass = "legend-label " + categoryClass;
            items.push(React.createElement(
                "li",
                { key: "legend-item-" + categoryLabel, className: "legend-list" },
                React.createElement("span", { className: styleClass }),
                React.createElement(
                    "span",
                    { className: labelClass },
                    " ",
                    categoryLabel,
                    " "
                )
            ));
        });

        return React.createElement(
            "ul",
            { className: "horizontal-legend" },
            items
        );
    }
});

module.exports = Legend;
//or "line" or "dot"