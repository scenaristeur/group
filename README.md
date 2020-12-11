# group

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###


# make a gh-pages branches

https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages

create subbranch with dist folder

    comment the dist folder in the .gitignore file

git add dist -f && git commit -m "Initial dist subtree commit"

    build & publish to gh-pages

npm run build && git add .
git commit -m "my modif"
git push && git subtree push --prefix dist origin gh-pages


- create vue.config.js
```
const publicPath = process.env.NODE_ENV === 'production' ? '/group/' : '/'

module.exports = {
  // options...
  publicPath: publicPath,
  }
  ```


### Build in dist folder & publish to gh-pages
```
npm run git -- "new version"
```

### Calendrier
https://github.com/ahmadissa/dayspan-vuetify-2/tree/gh-pages

### a look at ipfs
https://ideea.io/vipfs/getting-started-tutorial   https://github.com/Ideea-inc/vipfs
browser https://www.npmjs.com/package/ipfs-vue
contracts : https://github.com/redacademy/vue-ethereum-ipfs

https://github.com/ipfs/js-ipfs/tree/c3c46073d31445411bf1f379f05c562eb628c860/examples/browser-vue

https://gist.github.com/MaiaVictor/b8a4a44005c7a5243ce0150585a4d48b
```

const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

(async () => {

  const doc = JSON.stringify({
    foo: "bar",
    tic: "tac"
  });

  const cid = await ipfs.add(doc);

  console.log("IPFS cid:", cid);

  console.log(await ipfs.cat(cid));

})();
```
https://www.tooploox.com/blog/using-ipfs-with-ethereum-for-data-storage

https://ethereum.stackexchange.com/questions/39141/creating-a-form-in-ipfs-for-users-to-enter-data/39205
