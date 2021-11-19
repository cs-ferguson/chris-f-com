---
title: "Daft Stuff I've Built: No. 1, The Stand-up Timer"
description: "Now and again, I like to turn my attention to coding things that remove a bit of friction from my day-to-day, and I'll be covering this miscellany in this series. Starting with the Stand-up Timer."
date: 2021-10-19
dateModified: 2021-11-17
tags:
  - daft-stuff
layout: layouts/post.njk
permalink: /posts/daft-stuff-ive-built-1-standup-timer/
featuredImage: /img/sut-screenshot-480w.webp
---
I'm no Software Engineer. On a scale of "I'm still using Internet Explorer" to [King-HTML-Decoding-Hacker](https://heavy.com/news/gov-mike-parson-html-source-code-decoded-ssn/)  I sit just a bit after the Citizen Developer level. I know enough code just to get things working how I want, but not enough to build them properly.

Aside: The future belongs to the Citizen Developers, I should write about that.

Now and again, I like to turn my attention to coding things that remove a bit of friction from my day-to-day, and I'll be covering this miscellany in this series.

![A screenshot of the Stand-up Timer](https://cfergo.s3.eu-west-1.amazonaws.com/sut-screenshot.png "The Stand-up Timer...")

We start with the Stand-up Timer. Everyone knows what the "Stand-up" is. I'm pretty sure it pre-dates the Scrum framework, but Scrum made it famous. Even though it's called a "Scrum" in Scrum and not a "Stand-up". Still with me?

It's another name for "everyone getting together as a team every day and forcing each other to talk to each other frequently so we can work as an actual team and help each other". I know what you're thinking - if everyone talks, every day, won't that take ages? 

NOT IF WE  DON'T LET ANYONE SIT DOWN, BRIAN! 

"But Lenora has incredibly sturdy legs, she can stand for ages." 

"You're right, let's keep it to three simple questions." 

"But Emlyn can talk the hind legs off a donkey regardless." 

"You're right... what do we do?" 

**And this is how the Stand-up Timer was born.**

Okay, I may be joking here.

Half-joking.

## Problems

Here are the problems I tried to solve with the Stand-up Timer:

1. Stand-ups are boring, monotonous and repetitive by their very nature and often nobody wants to be there (don't @ me with your "_YoU JuSt HaVeN'T CoMmUnIcAtEd ThEiR VaLuE PrOpErLy_" - I'm from the North-East of England, do you have any idea how cynical we all are?)
2. People can sometimes try to solve problems/impediments within the Stand-up
3. The team can slip into too much routine e.g. the same order of people everyday, going through the motions - you've got to keep people on their toes!

## Solutions

I tried to solve those issues in the Stand-up timer in the following ways:

1. Added maximum hilarity by:
    - allowing the addition of GIFs and Videos to be flashed up when a person is called, this allows for topical jokes to be made.
    - having the timer use the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to call a participant's name, and have everyone enjoy it try to pronounce names (anyone remember the Say program for Workbench on the Amiga?).
    - Allowing control of what the Speech API says when calling participants.
2. Each participant has a set amount of time to speak. This is visually indicated so they know how long they have left, and terminated with a gong.
3. The order is randomised.

@[Stand-up Timer Screencast](sut-screencast)

Now as you've probably gauged whilst reading this post - I'm not as funny as I think I am - and our team was still incredibly bored and tired of stand-ups, but I nailed problems 2 and 3.

I built the Timer using create-react-app. (This allowed me to add a Service Worker to easily make it a PWA, and now I have it on my phone wherever I go, because you never know when a Stand-up will occur. That's not true at all. They're every day at the same time. But never mind).

Other notable features:
- Modifiable duration
- Multiple Teams (currently limited to two because I forgot to add an "Add Team" button :| )
- Settings and Team details stored in local storage
- Keyboard operation to stop you fumbling for the mouse/trackpad mid-Stand-up
- Video introductions

You can find the repo here if you're interested, and try it out yourself at [standuptimer.chris-f.com](https://standuptimer.chris-f.com).

Next up in this series: The Gmail Inbox Zero Chrome Extension.