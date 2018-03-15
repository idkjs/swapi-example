// Generated by BUCKLESCRIPT VERSION 2.2.0, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var Client$ReactTemplate = require("./Client.bs.js");

function ste(prim) {
  return prim;
}

var Graphql_error = Caml_exceptions.create("FeedTwo-ReactTemplate.CharacterQuery.Graphql_error");

var query = "query films($first: Int)  {\nallFilms(first: $first)  {\nfilms  {\nid  \ntitle  \nreleaseDate  \n}\n}\n}";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match) {
    var value$1 = match[0]["allFilms"];
    var match$1 = Js_json.decodeNull(value$1);
    var tmp;
    if (match$1) {
      tmp = /* None */0;
    } else {
      var match$2 = Js_json.decodeObject(value$1);
      var tmp$1;
      if (match$2) {
        var value$2 = match$2[0]["films"];
        var match$3 = Js_json.decodeNull(value$2);
        var tmp$2;
        if (match$3) {
          tmp$2 = /* None */0;
        } else {
          var match$4 = Js_json.decodeArray(value$2);
          var tmp$3;
          if (match$4) {
            tmp$3 = match$4[0].map((function (value) {
                    var match = Js_json.decodeNull(value);
                    if (match) {
                      return /* None */0;
                    } else {
                      var match$1 = Js_json.decodeObject(value);
                      var tmp;
                      if (match$1) {
                        var value$1 = match$1[0];
                        var value$2 = value$1["id"];
                        var match$2 = Js_json.decodeString(value$2);
                        var tmp$1;
                        if (match$2) {
                          tmp$1 = match$2[0];
                        } else {
                          throw Graphql_error;
                        }
                        var value$3 = value$1["title"];
                        var match$3 = Js_json.decodeNull(value$3);
                        var tmp$2;
                        if (match$3) {
                          tmp$2 = /* None */0;
                        } else {
                          var match$4 = Js_json.decodeString(value$3);
                          var tmp$3;
                          if (match$4) {
                            tmp$3 = match$4[0];
                          } else {
                            throw Graphql_error;
                          }
                          tmp$2 = /* Some */[tmp$3];
                        }
                        var value$4 = value$1["releaseDate"];
                        var match$5 = Js_json.decodeNull(value$4);
                        var tmp$4;
                        if (match$5) {
                          tmp$4 = /* None */0;
                        } else {
                          var match$6 = Js_json.decodeString(value$4);
                          var tmp$5;
                          if (match$6) {
                            tmp$5 = match$6[0];
                          } else {
                            throw Graphql_error;
                          }
                          tmp$4 = /* Some */[tmp$5];
                        }
                        tmp = {
                          id: tmp$1,
                          title: tmp$2,
                          releaseDate: tmp$4
                        };
                      } else {
                        throw Graphql_error;
                      }
                      return /* Some */[tmp];
                    }
                  }));
          } else {
            throw Graphql_error;
          }
          tmp$2 = /* Some */[tmp$3];
        }
        tmp$1 = {
          films: tmp$2
        };
      } else {
        throw Graphql_error;
      }
      tmp = /* Some */[tmp$1];
    }
    return {
            allFilms: tmp
          };
  } else {
    throw Graphql_error;
  }
}

function json_of_optional(encoder, value) {
  if (value) {
    return Curry._1(encoder, value[0]);
  } else {
    return null;
  }
}

function json_of_array(encoder, value) {
  return value.map(Curry.__1(encoder));
}

function json_of_Int(value) {
  return value;
}

function make(first, _) {
  return {
          query: query,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "first",
                  json_of_optional(json_of_Int, first)
                ],
                /* [] */0
              ]),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var first = variables.first;
  return {
          query: query,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "first",
                  json_of_optional(json_of_Int, first)
                ],
                /* [] */0
              ]),
          parse: parse
        };
}

function ret_type() {
  return /* module */[];
}

var MT_Ret = /* module */[];

var CharacterQuery = /* module */[
  /* Graphql_error */Graphql_error,
  /* query */query,
  /* parse */parse,
  /* json_of_optional */json_of_optional,
  /* json_of_array */json_of_array,
  /* json_of_Int */json_of_Int,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

function parseFilms(allFilms) {
  if (allFilms) {
    var films = allFilms[0].films;
    if (films) {
      return films[0].map((function (film) {
                    if (film) {
                      var film$1 = film[0];
                      var title = film$1.title;
                      var releaseDate = film$1.releaseDate;
                      if (title) {
                        var title$1 = title[0];
                        if (releaseDate) {
                          return releaseDate[0] + (" - " + title$1);
                        } else {
                          return title$1;
                        }
                      } else if (releaseDate) {
                        return releaseDate[0];
                      } else {
                        return "Error retrieving film";
                      }
                    } else {
                      return "Error retrieving film";
                    }
                  }));
    } else {
      return /* array */[];
    }
  } else {
    return /* array */[];
  }
}

var component = ReasonReact.statelessComponent("Query");

function make$1() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      var characterQuery = make(/* Some */[6], /* () */0);
      return ReasonReact.element(/* None */0, /* None */0, Curry._2(Client$ReactTemplate.Instance[/* Query */1][/* make */2], characterQuery, (function (response, parse) {
                        if (typeof response === "number") {
                          return React.createElement("div", undefined, "Loading");
                        } else if (response.tag) {
                          return React.createElement("div", undefined, response[0]);
                        } else {
                          var allFilms = Curry._1(parse, response[0]).allFilms;
                          var parsedFilms = parseFilms(allFilms);
                          return React.createElement("ul", undefined, $$Array.map((function (film) {
                                            return React.createElement("li", undefined, film);
                                          }), parsedFilms));
                        }
                      })));
    });
  return newrecord;
}

var Query = 0;

exports.ste = ste;
exports.CharacterQuery = CharacterQuery;
exports.Query = Query;
exports.parseFilms = parseFilms;
exports.component = component;
exports.make = make$1;
/* component Not a pure module */
