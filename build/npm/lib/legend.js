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

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactAddons = require("react/addons");

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var merge = require("merge");

exports["default"] = _reactAddons2["default"].createClass({

    displayName: "Legend",

    getDefaultProps: function getDefaultProps() {
        return {
            "style": {},
            "labelStyle": {},
            "type": "swatch" };
    },

    render: function render() {
        var _this = this;

        var legendStyle = {
            listStyle: "none",
            paddingLeft: 0
        };

        var legendListStyle = {
            float: "left",
            marginRight: 10
        };

        var swatchStyle = {
            float: "left",
            width: 15,
            height: 15,
            margin: 2,
            borderRadius: 2,
            backgroundColor: "#CCC"
        };

        var lineStyle = {
            float: "left",
            width: 15,
            height: 3,
            margin: 2,
            marginTop: 8,
            backgroundColor: "#CCC"
        };

        var dotStyle = {
            float: "left",
            width: 8,
            height: 8,
            margin: 2,
            marginTop: 6,
            borderRadius: 4,
            backgroundColor: "#CCC"
        };

        var labelStyle = {};

        var items = [];
        _underscore2["default"].each(this.props.categories, function (category) {
            var style = undefined;
            var categoryStyle = category.style || {};
            var categoryLabelStyle = category.labelStyle || {};
            if (_this.props.type === "swatch") {
                style = merge(true, swatchStyle, categoryStyle);
            } else if (_this.props.type === "line") {
                style = merge(true, lineStyle, categoryStyle);
            } else if (_this.props.type === "dot") {
                style = merge(true, dotStyle, categoryStyle);
            }

            var labelStyle = merge(true, labelStyle, categoryLabelStyle);

            items.push(_reactAddons2["default"].createElement(
                "li",
                { key: "legend-item-" + category.key, style: legendListStyle },
                _reactAddons2["default"].createElement("span", { style: style }),
                _reactAddons2["default"].createElement(
                    "span",
                    { style: labelStyle },
                    " ",
                    category.label,
                    " "
                )
            ));
        });

        return _reactAddons2["default"].createElement(
            "ul",
            { style: legendStyle },
            items
        );
    }
});
module.exports = exports["default"];
//or "line" or "dot"