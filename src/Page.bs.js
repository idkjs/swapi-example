// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var FeedTwo$ReactTemplate = require("./FeedTwo.bs.js");
var PeopleFeed$ReactTemplate = require("./PeopleFeed.bs.js");

var component = ReasonReact.statelessComponent("Page");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, React.createElement("h1", undefined, "Star"), ReasonReact.element(/* None */0, /* None */0, FeedTwo$ReactTemplate.make(/* array */[])), ReasonReact.element(/* None */0, /* None */0, PeopleFeed$ReactTemplate.make(/* array */[])));
    });
  return newrecord;
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
