
---
layout: post
title: "A designer’s guide to the Figma API (6/7)"
date: 2018-10-10 23:15:00.000Z
description: "Part 6 of 7 — Setting up a front-end."
categories: "[object Object],[object Object]"
---

You can find the code for this tutorial [here](https://github.com/danhollick/FigmaAPIThing).

In **Part 5**, we managed to get a bunch of image urls from the Figma endpoint. Before we can display them, we need to set up some sort of front-end.

## 

## 

## Step 5: Set up a front-end.

So in this section we are going to step away from our server for a bit, and rig up a front-end in React that’ll display the results we fetch from Figma. You can totally do this part in whatever front-end you want.

## 

## 

## What is React?

If you work within 50 metres of a developer, there’s about a 1000% chance you have heard/read about React. Depending on the developer, it’s either the best thing since the internet _or_ the latest in a long list of javascript-bloatware fads.

But what is it? Well it’s a javascript front-end framework for the web.  
This is a convoluted way of saying that it allows us to write HTML (and CSS) in JavaScript.

Why is that cool? Because it allows us to easily make **_re-usable components_**, much like you would in Sketch or Figma. It also does a lot of _clever-things_™️ under the hood that enable it to dynamically update parts of the page without reloading the whole page.  
These are things that HTML can’t do on it’s own, so using a framework like React saves developers a lot of time and makes for better web applications.

## 

## 

## Why React?

It’s **hot-shit** right now.

![A still from the movie Zoolander with "React is so hot right now" superimposed on it.](https://cdn.sanity.io/images/h2w4qpx8/production/cb3cf6b3fc1466330df0c67c52ab029d03f8bc3d-620x497.png)

No, but really. There are other frameworks like Vue or Angular but React is sort of the darling framework at the moment and that gives it one advantage that’s very useful to beginners: _a flourishing_ _ecosystem_.  
Because of it’s popularity there are tons of high quality tools and resources for it. This means we write less code overall and the learning curve is a little less steep because tons of people have walked the path before us.

## 

## 

## Setting it up.

In step 2 we installed `create-react-app`. This is a sort of an official template React project that comes with a lot of tedious stuff already set up. If you want to, you can install it globally so it will be available to use in other projects:

npm install create-react-app --global

Next we need to tell it to set up a template. We want to use the client template so that we can easily configure it to talk to our backend.

create-react-app client

This might take a while, and you should notice a a new folder called `client` that has this inside of it:

![A screenshot of the folder structure in Visual Studio Code](https://cdn.sanity.io/images/h2w4qpx8/production/bb95789f40b40e87d24daf866f5eae4e2c10acf3-303x421.png)

You might notice that there is a new `package.json` inside this client folder. This is because this client is a separate project to the backend one we have been working on, so they will have their own set of dependencies.

Navigate into the client directory with `cd client` and then run the development server that `create-react-app` set up for us by running the `npm start` command. This launches a server with our little React app on port 3000. So you should see something like this in your browser:

![A screenshot of a browser window showing the Create React App default](https://cdn.sanity.io/images/h2w4qpx8/production/63b7c62e0087fbcc91bef59f90e3c4a3e0ebf600-2874x1554.png)

Okay, so in a very basic way, our React app is up and running.

## 

## 

## Getting our two servers talking

So we have this nice shiny front-end running on one port, and this backend running on another… But how do we get the front-end client thing talking to our specific server? Well we need to open up the `package.json` inside the client folder and add the following line:

```json
"proxy": "http://localhost:3001",
```

So our the file looks something like this:

![A screenshot of a package.json file](https://cdn.sanity.io/images/h2w4qpx8/production/45318ca3fd275d4903ece3fd75409d017c9f6d01-850x460.png)



This little line forwards the client to our backend server, which you might remember we run on `http://localhost:3001.`

> Before going any further make sure you have both the front-end and back-end running. To do this you need to have two terminal windows open. The front-end server runs out of `FigmaServerThing/client` with the command `npm start` and the backend runs out of the root `FigmaServerThing` with the same `npm start` command.

That’s all we need to do here. 

In the **final part**, we configure our React app to fetch the data from our server and display it on screen.



> If you want more super long, boring content like this make sure to follow me here. If you want some short-form boring content, follow me on twitter.

Twitter: https://twitter.com/DanHollick/status/1221486605044797441?s=20