---
title: We used to run Docker in the cloud. Here's why we don't anymore.
author: Richard Sween
description: While we were successful, we decided there was a better way. Find out what our biggest mistake was and how it could help you.
date: 2020-04-23T20:50:21.162Z
featuredImage: whale.jpg
featuredImageAlt: Whale Breaching
draft: true
tags:
  - Kubernetes
  - docker
  - architecture
---

# Our Problem

Recently we were working on a web application that is a content management system (CMS) for sport and entertainment venue operators to track and share security best practices. We had previous experience building web applications using the Django framework. We built out our application using two Docker containers - one for Django which served as our frontend and backend and one for the database.

There were some definite pros to this architecture. As a developer, it was easy to deploy the stack and have an isolated database and application container running locally for testing and development. The architecture was scalable, and it was easy to change out components (which we did once to change database engines).

# Deployment

As a functional application started to come together, we began to look ahead to how we would deploy this to our customers. Since we had a pair of Docker containers, we pulled in another engineer who was tasked with getting these containers running in the cloud. After a bit of research, our deployment engineer came up with a plan to use Kubernetes running on Google Cloud to host and maintain our infrastructure. At the time it sounded great! And it worked fairly well for our first few deployments. But after a while we started experiencing growing pains.

# "Why did we do it this way?"

The way our system was deployed, each individual instance (organization or topic) received its own instance of the system - its own Django container, database container, subdomain, etc. Again, this architecture had some pros, like strict separation of data. However, it quickly became apparent that this architecture wasn't going to scale like we thought it would. We quickly ran into issues like resource quotas and other challenges in maintaining this type of growth. Another significant issue was cost - we had no paying customers yet and yet our design choices were costing us hundreds of dollars a month in hosting fees.

# Our Fundamental Mistake

If you were reading closely, you might have realized our biggest mistake was right in front of our faces about two paragraphs back. Instead of asking, "How do we get these Docker containers running in the cloud?", we should have been asking, "What does our backend architecture need to look like to support our product's goals?". We were blinded by our design choices early in the project from seeing other ways of accomplishing our goals with less frustration and complexity.

# Hindsight is 20/20

Looking back and having done more reading and learning about Kubernetes in the past six months, there were big red flags we missed because we were focused on other things. **Kubernetes is hard**, which makes sense because it was built to solve hard problems at scale, not to run a couple Docker images in the cloud. There are certainly instances where Kubernetes would be the right answer, but unless you have a whole DevOps team devoted to building, maintaining, and scaling your infrastructure, it's probably not for you.

# Key Takeaways

1. Unbiased, third-party design reviews are invaluable
1. Just because Big Company X is doing something doesn't mean we _need_ to be doing it too

As engineers, designers, developers, etc., once we've spent enough time with a project, we naturally lose some objectivity just because we are so used to what we're doing and how we're doing it. That's part of the reason we're so bad at testing code we've written - but that's a post for another day. Getting a fresh set of eyes on any major decisions gives you a "sanity check" that what you're doing seems like the best course of action. Find some friend or colleague not working on the project and have them hear your pitch. Most importantly, be prepared for them to tell you they think what you're doing is crazy - far better to learn this at the design phase than halfway through development.

And secondly, there are a lot of things that Google or Amazon do that anyone could emulate in their business or projects. But there are also a lot of problems that they have and have built solutions for that only make sense at the incredibly large scale they have to work at every day. Kubernetes works for Google because they have tens of thousands of applications running worldwide that need to always be available. There's a good chance that the project you're working on doesn't, and there are simpler solutions to getting a database and hosting running on the internet. Trust me, I've tried.

# Sound Off

Have you made similar design decisions when in hindsight you were focused on the wrong thing? Do you have tips for keeping the bigger picture in focus when you're making decisions? I'd love to hear about them in the comments below!

Cover Photo by <a href="https://unsplash.com/@toddcravens?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Todd Cravens</a> on <a href="/s/photos/whale?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
