---
title: "Daft Stuff I've Built: No. 3, Sprint Start App"
description: "Training 100m alone is fine, until you need to practice sprint starts."
date: 2021-11-22
dateModified: 2021-11-22
tags:
  - featured
  - daft-stuff
layout: layouts/post.njk
permalink: /posts/daft-stuff-ive-built-3-sprint-start-app/
featuredImage: /img/P1230103-480w.webp
---
For this one we're going back to 2014...

I used to be a 100m runner. Due to a need to keep to my schedule flexible I frequently used to train alone. This was fine for most sessions, but became a problem when I wanted to practice my starts. With no one around to set me away - what was I supposed to do?

An App that could go through the stages of Sprint Start for me could be the answer - For those unfamiliar with track races, those stages are: "On Your Marks", "Set" and "Go"/a gun going off.

I did some research, downloaded a few of the existing Apps and encountered a number of problems:

- No ability to randomise the length of the pause periods between the stages.
- No ability to set the range of these time periods.
- The period between "Set" and "Go" were in full seconds. In the majority of real starts this time falls somewhere between 1.2 and 1.9 seconds, so the level of accuracy was not sufficient.

## Solution

I therefore set to work building my first ever app. As I am an Android user, I decided I would take the path of least resistance - bypass the Play store and just create an SDK to pop on my phone. Also, more experienced with web development rather than native apps, I took the lazy option and just threw together a bunch of JavaScript in a couple of WebViews into an app (no learning Java for me!).

Nowadays, I'd probably just create a PWA to achieve this, but back when I created this beast PWAs weren't a thing! To be honest, neither was a reliable mobile internet connection either. 

@[My Sprint Start App](sprint-start-app-screencast)

## Randomisation vs. Realism

The amount of time between the stages of the start would need to be different every time - otherwise I would just end up predicting when the gun would go off, and I wouldn't get any better at reacting to it.

The first version I built only allowed for random intervals (within set limits) but this didn't feel right when I tested it. It was at the next track fixture that I realised the distribution isn't actually random - and would be likely distributed around a certain period of time. I therefore added a "Simulation" mode so athletes could more closely get a feel for the time periods a real-life race official would use. To achieve this, I decided I would gather data on the real-life timings between "On your marks", "Set" and the gun, and feed these into the app. I would do this by timing from videos of world-class races, and timing the starts at local and national fixtures. Despite my best intentions, I only got around to gathering data on about 10 starts - anyway, it worked as a proof-of-concept!

Interestingly, my training tended to utilise both modes:

- Random kept me sharp, and taught me to react to the gun, and only to the gun.
- Simulation got me used to how a start would feel in a real meet.

As a side-note: Random was a lot of fun when using it as a group of athletes - especially watching everyone try to stay still during an unrealistically long pause. Well I thought it was fun anyway.

!["Me at the end of a 100m race."](https://cfergo.s3.eu-west-1.amazonaws.com/P1230103.jpeg "Me at the end of a race. Pour one out for my fitness.")