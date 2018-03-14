# Reason-Apollo Swapi

This project illustrates the usage of reason-apollo to query the [SWAPI](http://swapi.apis.guru/) and serves as an example on how to use the project.

## Getting started

```
yarn install
yarn start
# in another tab
yarn run webpack
```

After you see the webpack compilation succeed (the `npm run webpack` step), open up the nested html files in `src/*` (**no server needed!**). Then modify whichever file in `src` and refresh the page to see the changes.

## Wierd Editor Error

* this repo is a straight copy of https://github.com/apollographql/reason-apollo/tree/master/examples/swapi

If you run `yarn start` and `yarn webpack` the file runs.

As soon as you open a file, example, `src/Feed.re`, webpack and bsb recompile and dont produce the bs.js files causing webpack to throw an error saying it cant find the files.

* initial run:

[![https://gyazo.com/8f171bc8df53e761b1659a6e4c30847b](https://i.gyazo.com/8f171bc8df53e761b1659a6e4c30847b.gif)](https://gyazo.com/8f171bc8df53e761b1659a6e4c30847b)

* then open Index.re:

<a href="https://gyazo.com/cfef088cdffddba2a1c4a6e8fa65b56b"><img src="https://i.gyazo.com/cfef088cdffddba2a1c4a6e8fa65b56b.gif" alt="https://gyazo.com/cfef088cdffddba2a1c4a6e8fa65b56b" width="724"/></a>

* Strangely, doesnt happen every time. Originally happened with Feed.re but then I could not reproduce.
