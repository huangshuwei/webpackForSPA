# webpack for single page project

##[Introduction](https://huangshuwei.github.io/2016/07/12/webpack%20%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8%E5%AE%9E%E6%88%98/)

This this a simple single page project by webpack. Help you quickly start to learn webpack.
More detailed introduction please read **[my blog...](https://huangshuwei.github.io/2016/07/12/webpack%20%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8%E5%AE%9E%E6%88%98/)**

##Installation

project:
`$ npm install`

global:
`$ npm install webpack -g`


##How to use

First copy the repo into your disk.

`$ git clone https://github.com/huangshuwei/webpackForSPA.git`


Then `$ cd webpackForSPA`


Next you can see the result by different command mode

* online mode:
`$ npm run build`
* dev mode:
`$ npm run dev`
* dev with HRM mode:
`$ npm run dev-hrm`

If you use 'dev with HRM mode' ,you should start the node server first(use node server to mock backend server).

`$ cd mockServer` 

`$ node server.js`

##What can this project do with webpack
**1.Extract css**

**2.Loading styles、images...**

**3.Generate html (html contain build bundles that include a hash in the filename which changes every compilation)**

**4.Generate common chunk**

**5.Splitting bundles**

**6.Setting environment variables**

**7.Compress the build**

**8.Add hashes to build bundles**

**9.Auto Refresh Browser**

**10.Hot Module Replacement(HRM)**

**11.Developing with backend server(like java、C#、nodejs、php)**

**12.Distinguish dev and build**

**13.Merge config**

**14.Clean publishing directory**


##Useful links
- [webpack official site](https://webpack.github.io/docs/)
- [webpack official example](https://github.com/webpack/webpack/tree/master/examples)


##License
http://www.opensource.org/licenses/mit-license.php
