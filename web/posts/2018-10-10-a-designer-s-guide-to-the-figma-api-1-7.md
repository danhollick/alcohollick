
---
layout: post
title: "A designer’s guide to the Figma API (1/7)"
date: 2018-10-10 22:00:00.000Z
description: "Part 1 of 7 — Understanding the API."
categories: "[object Object],[object Object]"
---

You can find the code for this tutorial [here](https://github.com/danhollick/FigmaAPIThing).

At TIDAL, we have a comprehensive design system built in Figma. A little while ago, I decided to have a look at how we could use the Figma API to improve and maybe automate our workflow around this.

The problem I instantly ran into is that there are basically no resources out there demonstrating how to use it, especially at a lower technical level. So I thought I would write a little bit about how to get up and running and using the API.

It is a design tool after all, maybe designers should be able to use it. (This might be painfully slow for a more technical reader)





## What you’ll need?

* A text editor. [VSCode is good and free](https://code.visualstudio.com/).
* Figma.
* A mac. (It should be trivial to adapt the example to Windows, but I rely on the terminal quite a lot.)
* Some fucks to give.

## 

## 

## Step1: How the API works:

In essence the API is just a set of URLs, that we call _endpoints_. We can send requests to these endpoints and get responses back from them. The type of endpoint dictates what sort of stuff you get back. There are 10 endpoints currently available:

* [GET file](https://www.figma.com/developers/docs#files-endpoint) — returns file info in JSON.
* [GET file node](https://www.figma.com/developers/docs#nodes-endpoint)s — returns individual node info.
* [GET file images](https://www.figma.com/developers/docs#images-endpoint) — returns images for specific elements.
* [GET file versions](https://www.figma.com/developers/docs#get-file-versions-endpoint) — returns the version history for a file.
* [GET image fills](https://www.figma.com/developers/docs#get-image-fills-endpoint) — returns download links for images in the file.
* [GET comments](https://www.figma.com/developers/docs#get-comments-endpoint) — returns a list of file comments.
* [POST comments](https://www.figma.com/developers/docs#post-comments-endpoint) — posts a comment.
* [GET me](https://www.figma.com/developers/docs#get-me-endpoint) — returns authenticated user info.
* [GET team projects](https://www.figma.com/developers/docs#get-team-projects-endpoint) — returns a list of projects.
* [GET project files](https://www.figma.com/developers/docs#get-project-files-endpoint) — returns a list of files in a project.

_Before we carry on we should probably talk about what the API does not let us do:_ _**edit Figma files**._  
_You might notice from the list of endpoints above that all except one has the_ _`GET`_ _prefix before it. This means the we only have view-level access to those endpoints. The_ _`POST Comments`_ _endpoint lets us add a comment but that’s as far as it goes._

_This restricts how useful the API is for sure, but I am certain the Figma team is hard at work expanding the functionality. Being able to manipulate a Figma file programmatically will open up so much exciting stuff, so hopefully that’s on the way._





## Understanding the workflow.

So what if we wanted to get a few screens from a file and display them? The basic workflow would go as follows:

* **Step1:**  
We send a request to the `GET File` endpoint with the URL of our file as an endpoint.

![An illustration demonstrating how a server communicates to an endpoint](https://cdn.sanity.io/images/h2w4qpx8/production/d1a1cae1ad398e9e0a1dffb1df820f74fb093599-700x236.png)

* **Step 2:**  
We get a response in return. This will be a chunk of JSON that contains all the information for every element inside that file. You can think of this as a giant list that describes all the attributes every element has (and doesn’t have).  


![An illustration showing how an endpoint delivers a server request](https://cdn.sanity.io/images/h2w4qpx8/production/45feb6115d19d9543bc4c9ecf47bf0eb1e4c58db-700x236.png)

* **Step 3:**  
We iterate through this chunk of information and find the screens we want to display. Each element in a Figma file has a unique ID we need.

![An illustration showing a server processing a request](https://cdn.sanity.io/images/h2w4qpx8/production/098c5c074d24db5f26788a02e7b13dfc2c177d14-700x236.png)

* **Step 4:**  
Once we have found those IDs, we send them along with a new request, this time to the `GET File images` endpoint.

![An illustration demonstrating a server making a second request to an endpoint](https://cdn.sanity.io/images/h2w4qpx8/production/f49ab368054f7071997b861ed874c160ee243148-700x236.png)

* **Step 5:**  
That endpoint will then send us some more JSON, but this time it will contain URLs. These URLs are where the images of our screens are hosted by Figma.

![An illustration demonstrating an endpoint processing and returning a request](https://cdn.sanity.io/images/h2w4qpx8/production/a9b6d58a83ec13fabfc65b24a6abce7d3640dcde-700x236.png)

* **Step 6:**  
We send those URLs to our frontend to display them as images.

![An illustration demonstrating a server returning a request to a front end client](https://cdn.sanity.io/images/h2w4qpx8/production/0cb02e57a91452f129b9b54420b71e96bf4b5ae5-700x236.png)

In **Part 2** we are going to set up a server which will communicate to the Figma API endpoints. I promise it’s not as hard as it seems.



> If you want more super long, boring content like this make sure to follow me here. If you want some short-form boring content, follow me on twitter.

Twitter: https://twitter.com/DanHollick/status/972561872284274688?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext%252Fhtml%26key%3Da19fcc184b9711e1b4764040d3dc5c07%26schema%3Dtwitter%26url%3Dhttps%253A%2F%2Ftwitter.com%2Fdanhollick%2Fstatus%2F972561872284274688%26image%3Dhttps%253A%2F%2Fi.embed.ly%2F1%2Fimage%253Furl%253Dhttps%25253A%25252F%25252Fpbs.twimg.com%25252Fprofile_images%25252F772716760420192256%25252FzolPi_ki_400x400.jpg%2526key%253Da19fcc184b9711e1b4764040d3dc5c07