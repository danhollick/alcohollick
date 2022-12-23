
---
layout: post
title: "A designer’s guide to the Figma API (7/7)"
date: 2018-10-10 23:30:00.000Z
description: "Part 7 of 7 — Finishing up."
categories: "[object Object],[object Object]"
---

You can find the code for this tutorial [here](https://github.com/danhollick/FigmaAPIThing).

Jesus, this has been a marathon. If you think reading it was tough… I have no recollection of a time before I started writing this.  
But if you are still here — congratulations. You beautiful nerd.

## 

## Bringing everything together.

Okay, so brief recap of that state of things since **Part 6**:

* We have our server on port 3001, which upon request talks to the Figma endpoint and spits out some data. Inside that data are some image urls we need.
* We have a React client, running in a development server on port 3000. It is set to use our 3001 server as a proxy.

We need to configure our React application to take the data from our server and display it. Simple.

Before we crack on, we have some things to fix. Open up `server.js` and edit the `app.use` method to look like this:

We made two changes:

* Changed the path to `/frames`. We don’t necessarily want to use the route path, so we are just changing it to something that makes sense.
* Removed `JSON.stringify()` from the response. We are going to handle the formatting on the client, so no need to send it as a string.

_Quick note: Using one big app class like we are doing for the purpose of this completely defeats the point of using React. Our app is simple enough to get away with it, but you really want to split things up into modular components._

Okay, we’re good to go. Open up `client/src/App.js` and delete everything between lines 8 and 23. It should look something like this:

![A screenshot of App.js](https://cdn.sanity.io/images/h2w4qpx8/production/b573a58845c8cde9d061c50a3706e30bf0a17656-677x351.png)

All we did was delete the boilerplate so we can add our own. This has left us with an empty `class` which React uses to create `Components`.

The first thing our component needs is some `state`. You can think of `state` as a sort of memory for our component — we use it to store stuff that the component needs while it is around. We need to save the response we get from the server in `state`.

Edit the class so it looks like this:

He we are initialising the `state` with a mock of the data our server will send. We are doing this because it allows us to set up a our component as if there is data there, before it has been fetched from the server. We’ll get more into that next.

Go ahead and edit the `return` so it looks like this:

```javascript
class App extends Component {
  state = { images: [
    { name: '', url:''  }
  ]}
  
  render() {
    return (
      <div className="App" >
      {this.state.images.map( //1
        (frame,i) =>
        <div key={i} >//2
          <img src={frame.url}  alt={"figma component"}/> //3
          <p>{frame.name}</p> //3
        </div>
      )}
    </div>
    );
  }
}
```

1. We are returning a bunch of html here that we want our component to display, but you’ll notice that on line 9 of the gist we have some `{ }`. In JSX (this html-like syntax React uses) we use them to indicate that we are going to write JavaScript.  
The JavaScript we are writing is a `.map()` on every item in our `images` array, inside our `state` object. We are telling React that for every item in our `images` array, produce the following html. Each item is passed down to this html so we can access its properties. This would have thrown an error if we didn’t initialise our `state` to have a mock of this structure as `state` would not have contained an array.
2. What is `key={i}` doing here? Well React needs to keep track of each chunk of html it generates here and the only way to do that is to assign each one a unique key. We are using the `index` of the array as our key. Notice the `{ }` that tells React that that value will come from JS. (There are plenty of reasons why you shouldn’t use the index of your array as a key, but for this simple case it’ll do.)  
It’s also worth noting that a `.map()` like this can only have one html child element, hence why we made sure to wrap our children in the parent `div`. If you don’t need a `div`, you can use a `<React.Fragment/>` to get around this.
3. Here we are passing down the properties of the array to the children elements. The `url` is being used as the `<img/>` source and the name is being used as the text value in the `<p/>`

So that’s all gravy, but now we need to actually fetch the data from our server.  
Add this `componentDidMount()` method to our component:

```javascript
class App extends Component {
  state = { images: [
    { name: '', url:''  }
  ]}

 componentDidMount() {//1
    fetch('/frames')//2
      .then(res => res.json())//3
      .then(data => this.setState({ images: data }))//4
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="App" }>
        {this.state.images.map(
          (frame,i) =>
          <div key={i} >
            <img src={frame.url} alt={"figma component"}/>
            <p>{frame.name}</p>
          </div>
        )}
      </div>
    )
  }
}
```

1. `componentDidMount()` is what is known as a life-cycle method in React. All it does is allow us to do _something_ when our component becomes a part of the DOM (basically when it becomes visible).
2. The _something_ we are doing is fetching some data from our server. Remember that our client is configured to use our server, running on [`http://localhost:3001/`](http://localhost:3001/), as a proxy. So when we tell it to `fetch(‘/frames’)` we are telling it to go to `[http://localhost:3001/](http://localhost:3001/)frames` and return the response.
3. `.then()` is a chaining method used on promises. That’s not really critical to understand, but it allows us to sequentially do stuff once the `fetch` has returned a result. “Hey, when you get that thing do this… and then this…. and then this…” The first thing we are doing is parsing the response as JSON.
4. Now that we have the data we need, we call `this.setState()` which is a built in method for updating the `state` object in React. The argument it takes is the updated `state` object. Importantly it makes sure that the component is re-rendered after the `state` object is updated, so that it actually displays the results of the change. Never directly edit `state` without using `setState()`.  
We pass in `{ images: data }` where `data` is our JSON response from the server. This syntax might be a bit tricky to get, but it’s called object de-structuring. The details aren’t super important but it looks for something with a key matching `images` inside the `state` object and then we update it’s value with `data`

If you hit save and run [http://localhost:3000/](http://localhost:3000/) you should see this:

![A screenshot of a browser window displaying an image from Figma](https://cdn.sanity.io/images/h2w4qpx8/production/15694df8038a4f2684aaaaa154e85886f8301a15-2876x1558.png)

Woohoo, it worked.  
But it looks a bit shit. So before we are done, we need to add some styling to our html. There are a bunch of ways to do this, but the simplest is to write some styles in objects and add them as inline styles to our elements. Update `App.js` to look like this:

```javascript
var containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 24,
  height: '100vh',
}

var divStyle = {
  margin: 24,
}

var imgStyle = {
  maxHeight: 200,
}

class App extends Component {
  state = { images: [
    { name: '', url:''  }
  ]
}

 componentDidMount() {
    fetch('/frames')
      .then(res => res.json())
      .then(data => this.setState({ images: data }))
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="App" style={containerStyle}>
        {this.state.images.map(
          (frame,i) =>
          <div key={i} style={divStyle}>
            <img src={frame.url} style={imgStyle} alt={"figma component"}/>
            <p>{frame.name}</p>
          </div>
        )}
      </div>
    )
  }
}
```

We have a bunch of style objects declared outside of our component, which we then attach to the relevant html components using inline styles.  
Notice that the styles in the objects have a different syntax to normal CSS? To make the styles work this way we have to remove the `—` in property names and values and use `camelCase` instead. We also use `,` to separate styles rather than `;` and remove unit types like `px`. It takes a bit of getting used to if you want to use this regularly.

Now if you hit refresh you should see:

![A screenshot of a browser displaying four images from Figma](https://cdn.sanity.io/images/h2w4qpx8/production/d4ac65ade64822ec3493b460c9985004faed1750-2878x1558.png)

Boom. We’re done. If you want to you can work on displaying different parts of the document. Maybe try create a rudimentary inspector that shows the attributes of each element in greater detail.  
Or don’t. You do you.

Thanks for reading. Hope it was helpful.

>   
If you want more super long, boring content like this make sure to follow me here. If you want some short-form boring content, follow me on twitter.

Twitter: https://twitter.com/DanHollick/status/1045688640960180224?s=20
