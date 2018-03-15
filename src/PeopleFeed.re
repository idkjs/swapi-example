let ste = ReasonReact.stringToElement;

let default = (value, option) =>
  switch option {
  | None => value
  | Some(value) => value
};

module PeopleQuery = [%graphql
  {|
    query people($first: Int) {
        allPeople(first: $first) {
          people{
            id
            name
            birthYear
          }
        }
      }
  |}
];

   module Query2 = Client.Instance.Query;

   let component = ReasonReact.statelessComponent("PeopleFeed");

   let make = _children => {
     ...component,
     render: _self => {
       let peopleQuery = PeopleQuery.make(~first=6, ());
       <Query2 query=peopleQuery>
         ...(
              (response, parse) =>
                switch (response) {
                | Loading => <div> (ste("Loading")) </div>
                | Failed(error) => <div> (ste(error)) </div>
                | Loaded(result) =>
                  let test = parse(result)##allPeople;
                  Js.log(test);
                  <div>
                  <h1> (ReasonReact.stringToElement("TEST")) </h1>

                    <pre>
                      (ste(default("Baffled....", Js.Json.stringifyAny(test))))
                    </pre>    
                  </div>;
                }
            )
       </Query2>;
     }
   };