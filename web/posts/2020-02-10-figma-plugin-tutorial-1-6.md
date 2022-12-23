
---
layout: post
title: "Figma Plugin Tutorial (1/6)"
date: 2020-02-10 23:15:00.000Z
description: "Building a colour contrast checker."
categories: ""
---

> “Should designers code?  
F*ck yeah!” — socrates

Figma plugins are the new shiny thing in the design. From the outside it might seem like they are complicated to build but that’s not true. They are about as complicated as you make them and getting started with plugins is super easy.  
If you’ve ever wanted to build your own you’re in the right place.

## 

## 

## 🏗 What are we building

![A animated .gif of the Figma Plugin in action](https://cdn.sanity.io/images/h2w4qpx8/production/2f6286171681e3dc29ab885ee444fd61fc4dad7a-600x362.gif)

We are going to build this 👆, a lightweight and flexible colour contrast checker called [**zebra**](https://www.figma.com/c/plugin/806578669827234193/zebra) 🦓  
There are 6 parts including this one but you can bounce around however you want:

* (1/6) —Getting Started.
* [(2/6) — How Figma Plugins Work.](/writing/figma-plugin-tutorial-2-6/)
* [(3/6) — Wiring Things Up](/writing/figma-plugin-tutorial-3-6/)
* [(4/6) —Working with Colours](/writing/figma-plugin-tutorial-4-6/)
* [(5/6) —Working with the UI.](/writing/figma-plugin-tutorial-5-6/)
* [(6/6) — Polishing Things Up.](/writing/figma-plugin-tutorial-6-6/)

The repo for the plugin is [here](https://github.com/danhollick/zebra). It’s split up into steps to make it easier to follow.

## 

## 

## 👨‍👩‍👧 Who is this Tutorial for?

I guess the sweet-spot is a _designer-who-codes-a-little_ or a _developer-who-designs-a-little_.

If you spend all day writing JavaScript you might find it a little slow.  
If you have never written JavaScript you might feel a little lost.

If you have ever _partially understood_ a Mark Dalgleish tweet, you should do just fine.

Twitter: https://twitter.com/markdalgleish/status/1222631444897361920?s=20

## 

## 

## 🚀 **Getting Started.**

Luckily for us Figma has done some amazing work on the plugin creation process.

All we need to do is hit `Plugins -> Development -> New Plugin` in the menu bar. After that we’ll get to a dialog where we need to add the plugin name or link to an existing plugin. Enter zebra here and press Continue.

![Figma's create new plugin UI](https://cdn.sanity.io/images/h2w4qpx8/production/5d67460c1999ed6dd5194177ded73d33b1a60ef7-737x503.png)



We’ll get another dialog that allows us to pick from three different templates:

![A screenshot of the default plugin starter templates in Figma](https://cdn.sanity.io/images/h2w4qpx8/production/a42ca5900a8a88d6767dbbdc6495825c1335872b-736x503.png)

For our case we want the user to interact with our plugin because they might want to check the contrast on multiple parts of their designs, so we are going to pick the 3rd option.

Let’s take a minute to talk through the options here and what they give us. All three of these just add some template files to a folder:

![Starter files for the "Empty" template](https://cdn.sanity.io/images/h2w4qpx8/production/0f8ba98d23a483cd1784f28b8759dddd1e26f163-656x219.png)

* **Empty** provides a dead simple code.js file and a manifest.json. The manifest file is how Figma identifies plugins. It contains stuff like the plugin name, API version etc.  
Only use this one if you are happy to configure stuff on your own.
* **Run Once** comes with a few more files but most of them are to enable Typescript:  
- `code.ts` is a Typescript file that you can use instead of code.js.  
-` figma.d.ts` is a list of all the types the API uses. VSCode uses this to do nifty auto-complete stuff.  
- `tsconfig.json` configures Typescript.
* **With UI and Browser APIs** has all the the same files as **Run Once**, but it also has a ui.html file. This is because we are expecting the user to interact with our plugin and this file will be what launches in the little plugin window.

**__**

#### **_TYPESCRIPT TRIGGER WARNING_**

_All this TypeScript talk is a little daunting but don’t worry we aren’t going to be writing any TypeScript in this tutorial. We can still write our plugin in JavaScript we just won’t get all the nifty autocomplete magic™ that running a TypeScript server enables._

The last dialog of this process asks you where you want to download the template files. My folder structure looks like this `Documents -> dev -> FigmaPlugins -> zebra` but where you put it is up to you. I’d avoid placing it on the Desktop or in Downloads because you might accidentally delete it.

If you don’t already have it, [download VSCode](https://code.visualstudio.com/download) and install it. VSCode is a text editor that in recent years has become really popular in the JavaScript (and TypeScript) world. You can use whichever text editor you feel comfortable with but you might not get all the _autocomplete magic™_.

In VSCode, open up the folder you downloaded the template files into and navigate to `README.md.` You’ll see that here we have a few instructions for setting up the TypeScript compiler which **_we will completely ignore_**. In fact you can delete the code.ts and all the other typescript files if you want. Feel free to write your own little README.md to replace this.

## 

## 

## 🎤 Testing 1, 2…

Open code.js and you’ll see there is a bunch of example code there. You can read the comments but essentially this creates a plugin window where a user can select the number of rectangles they want to add to a file.

Open up Figma again and launch the plugin by hitting `Plugins -> Development -> zebra` in the menu. You should see this:

![A screenshot of our plugin UI at this point.](https://cdn.sanity.io/images/h2w4qpx8/production/8c78dfe3a10c71b8d9b690cb06dbb420e929f03f-451x366.png)

If you click `Create` you should see this:

![A screenshot of the result of our plugin: 5 orange rectangles.](https://cdn.sanity.io/images/h2w4qpx8/production/eab71b6b1c455e86d5ac992fd7edab8366fffcda-1010x263.png)

Now we need to make sure our template is working properly by editing something in `code.js`. On line 19 change the color from:

```javascript
color: { r: 1, g: 0.5, b: 0 }
```

to:

```javascript
color: { r: 1, g: 0.5, b: 1 } }
```

and hit `cmd + s` to save. If we run the plugin in Figma again we should now see this:

![A screenshot of the result of our plugin: 5 pink rectangles.](https://cdn.sanity.io/images/h2w4qpx8/production/e78b62da60a9c4efc6918ec698fab3ba032fb1aa-908x247.png)



This means our template is up and running and we can get on to the more interesting stuff. 🎉
