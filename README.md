



<img src="https://res.cloudinary.com/pinchepanchopincho/image/upload/v1549653619/styles/Match2.jpg">

### Playing sports - one MATCH at a time!


MATCH is a Progressive Web App that helps you find sports partners near you. It only matches you with people that have your skill level, the easy-to-use chat and user descriptions ensure that you only meet with people you find sympathetic.

##### Tech Stack:

* [React](https://reactjs.org/)

* [Koa](https://koajs.com/)

* [MongoDB](https://www.mongodb.com/)

* [Cloudinary](https://cloudinary.com/)

* [Socket.io](https://socket.io/)

  The front-end is build as progressive web app with React and Reach-Router. The backend is a NodeJS server on Koa with a Mongo database. Socket.io will be implemented for live-chat features.

##### Installation:

Fork and clone the repo, then run `npm i` both in the `./server/` and `./client/match/`folders. Make sure to activate lines 187 & 189 in `./server/controller/controller.js` to populate the database. Start the server with `node index` and then comment out the 2 lines again.

In the `./client/match`folder run `npm start`.

### FEATURES


#### The Match Interface

<img src="https://res.cloudinary.com/pinchepanchopincho/image/upload/v1549708022/styles/1.1MATCH.jpg">

The Match interface is at the heart of the Match experience. It connects you to players in your area and at your skill level. You can look into the description of the user to find further information and find out if you have other common interests.

You can decline or accept the Match by swiping or by pressing a button, the App will automatically notify you if the  interest is mutual.



#### The Chat

<img src="https://res.cloudinary.com/pinchepanchopincho/image/upload/v1549707909/styles/2.1MATCH.jpg">

The Chat let's you get in touch with your matches, find out more about the other player and set up game dates. The final version will include direct notifications with socket.io.



#### The Profile

<img src="https://res.cloudinary.com/pinchepanchopincho/image/upload/v1549707650/styles/3.1MATCH.jpg">

Choose your sport: Tennis, Table-Tennis, Squash or Badminton. Change your skill level and the search radius, update your personal information.
