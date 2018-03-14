/* let ste = ReasonReact.stringToElement;

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
                  parse(result)##allPersons;
                  <div>
                  <h1> (ReasonReact.stringToElement("TEST")) </h1>

                  /* (ste("Loading"))  */
                  </div>;
                }
            )
       </Query>;
     },
   }; */