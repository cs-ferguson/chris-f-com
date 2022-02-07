---
title: "Weeknotes: 2022, Week 5"
description: "My weeknotes for 2022, Week 5. The future of Privacy and non-obvious ways scheduling messages can be useful."
date: 2022-02-07
dateModified: 2022-02-07
tags:
  - weeknotes
layout: layouts/post.njk
permalink: /posts/weeknotes-2022-5/
featuredImage: /img/she-invaded-his-privacy-480w.webp
---
## This Week

I spent a lot of the week looking into the ins and outs of our [WP Cypress](https://github.com/bigbite/wp-cypress) tool, which will definitely continue into next week. Having not been involved in its development I am currently trying to gain empathy with our prospective users - understanding the key problems it solves, and testing out how well what we’ve built currently achieves that.

I also started looking into how we can increase awareness and encourage people to use the tool. It seems having some strong docs will be key to this. Which brings me to my key questions for the week, and also my key achievements...

## Questions

- What are good examples of Engineering Docs? This question is currently open with our Engineering team.
- What makes good Engineering Docs? Let’s see what people like and spot some patterns.

## Achievements

When discussing how to “market” WP Cypress with the team, we became fixated on “a website” for some reason, when whether we create one or not is secondary to the everything else we do.

I managed to deploy a crude 5-minute flowchart to explain why, and it seemed to work. Which was nice.

![Flowchart showing possible developer experience flows for WP Cypress](https://cfergo.s3.eu-west-1.amazonaws.com/wp-cypress-dev-ex-flow.png "For 5 minutes work, it saved 45 minutes discussion in Slack.")

## Other Thoughts

### Privacy

![Comic book panel showing a man looking distressed and a woman peeping in at him through a window. It has the caption “she invaded his privacy”. The man screams “No!”](https://cfergo.s3.eu-west-1.amazonaws.com/she-invaded-his-privacy.png "She invaded his privacy.")

People are getting sued for serving [Google Fonts on their site from Google Servers](https://www.theregister.com/2022/01/31/website_fine_google_fonts_gdpr/), so it seems legislators (at least in the EU) are definitely taking privacy seriously these days. With Browsers ditching third-party cookies left, right and centre, and Google's “Topics API” being rejected for concerns with fingerprinting, it seemsthe days of targeted advertising and cross-domain tracking are finally numbered. Fingers crossed.

However, a lot of clients and prospective clients recently are moving towards personalisation solutions - it just seems a risky time to invest in that tech when it could be on the way out. 

It is heading towards the point where the only way to obtain targeting/demographic information from your users will be to obtain that information directly from them, within your own site. What are the options for doing this (especially if proposals such as the Topics API fail)? Directly ask users to offer this information (surveys)? A bit jarring! There may be some clever ways to provide and encourage more opportunities for interactions within your site that help build user profiles. Or... just respect privacy and monetise some other way. FYI This site uses completely anonymous analytics, and no cookies. I can't track any repeat hits as a result, but that's not that important to me. I might stick an old-school hit counter on!

### The Prototype Mindset

The recent chapter in [Sprint](https://www.thesprintbook.com/) where they describe “the prototype mindset” could be incredibly useful as a tool to explain to the team what I mean by prototyping. A lot of the team still seem to be stuck on prototype as an unfinished/unpolished version of a site/product.

## Things that I learned this week

- Scheduling messages in Slack is useful for more than just timezones - it means I can formulate messages when the point is fresh in my head, and ensure they’re sent at a time that is convenient for the recipient e.g. not at the time of a school run or when people have just woken up (if they’re late starters!)
- [ffmpeg](https://www.ffmpeg.org/) can be used to convert gifs to movies
- That the no code movement is more popular than I thought: Spent some time researching it in a bit more depth this week. [No Code North-East](https://nocodenortheast.com/) had its first get-together last week, but like all meetups it was at the same awkward time - I will make more of an effort to attend the next one.