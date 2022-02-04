---
title: 'Common Pitfalls for New Devs'
author: Richard Sween
desription: After reviewing coding academy presentations, here are three common things that jumped out for new devs to be aware of.
date: 2022-02-03T20:50:21.162Z
featuredImage: hero.jpg
featuredImageAlt: Shipping containers stacked in a lot
draft: true
tags:
  - tips
  - junior devs
  - engineering manager
---

I had the privilege to serve as an external reviewer for students at the [Mississippi Coding Academy](https://mscoding.org/) this week. There were a few common issues I saw that I thought might be useful for other newer devs to be aware of. If you just want to see the tips, [click here to jump down to the tips](#tips).

# Background

MCA is a no-cost coding academy based in Jackson, MS that trains full-stack web developers. Periodcally thoughout the 11 month term, MCA brings in exteral evaluators from the local development community to review the student's work and provide feeback and suggestions to both the students and the academy itself. 

The project we were evaluating this week is my favorite to be a part of - the students were tasked with building a game using JavaScript. Beyond that the requirements are pretty minimal - you have to show using functions and variables, you have to have interactivity, and it has to be at least tangentially a game. I love this project because you really get to see the creativity of the students shine through their work. And I was not disappointed. I actually live-Tweeted the second and third days if you want to check out some of their games [here](https://twitter.com/_RichardSween/status/1488905361100845062) and [here](https://twitter.com/_RichardSween/status/1489256577781493765).

<h1 id="tips">The Tips</h1>

## Tip One - Be Aware of Repetitive Code

This is something I've seen a few times looking at newer developers code - and certainly something I was guilty of too early on. Often I see newer devs, especially those who aren't as familiar or comforatble with functions, repeating large sections of code over and over again while only changing little things between the blocks. If you find yourself doing a lot of copy, paste, and change a few words in your code, it's probably time to create a function or class for it.

> **Why?** Two main issues with repetitive code are readability and maintainability. If you have similar code doing slightly different things, it's going to be harder to spot the important differences between sections of code. And if you find a bug or want to change a part of your repeated code, you have to be sure to remember to change it everywhere or your code is going to still be broken.

Let's look at an example. Say I have this block of code:

```javascript
let buttonOne = document.getElementById("buttonOne");
buttonOne.innerHtml("Label One");
buttonOne.onClick(() => console.log(`${buttonOne.innerHtml} clicked!`));

let buttonTwo = document.getElementById("buttonTwo");
buttonTwo.innerHtml("Label Two");
buttonTwo.onClick(() => console.log(`${buttonTwo.innerHtml} clicked!`));

let buttonThree = document.getElementById("buttonThree");
buttonThree.innerHtml("Label Three");
buttonThree.onClick(() => console.log(`${buttonThree.innerHtml} clicked!`));
```

Yikes, super repetitive. Let's see how we could refactor this into a simple function. 

```javascript
function setupButton(const buttonId, const buttonText) {
    let button = document.getElementById(buttonId);
    button.innerHtml(buttonText);
    button.onClick(() => console.log(`${button.innerHtml} clicked!`));
}

setupButton("buttonOne", "Label One");
setupButton("buttonTwo", "Label Two");
setupButton("buttonThree", "Label Three");

```

Now we have one function that handles our button setup code and we can call it multiple times to handle setting up each of our three buttons. If we need to add more functionality to the button or fix a bug, we only have to update our function one time. And of course if we need a reference to our button later in the code, we could update the function to return it:


```javascript
function setupButton(const buttonId, const buttonText) {
    let button = document.getElementById(buttonId);
    ...
    return button;
}

let buttonOne = setupButton("buttonOne", "Label One");
...
```

## Tip Two - Use Text on Images with Caution

This one definitely doesn't strictly apply to newer devs, I see a lot of experienced devs making this mistake too. Using text on images is something that you should use sparingly and carefully. If you're not careful, the text could be very hard to read.

>  **Why?** This is an issue related to accessibility, or making what we build usable by people with disabilities. The issue here is color contrast - even if some people can read white text on a yellow background, it doesn't mean everyone can (and it's still probably hard to read for those who can). Check out [this article on accessibility for beginners](https://www.deque.com/web-accessibility-beginners-guide/) from Deque for more information on accessibility.

