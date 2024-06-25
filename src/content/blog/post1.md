---
id: 1
title: "The Power of View Transitions"
desc: "Introducing the view transition animation. An elegant animation that triggers when navigating a site."
pubDate: "2024-06-21"
author: "Alberto Ramos"
image: "/blog/astro.webp"
tags: ["Astro", "Animations", "Framework"]
time: "3 min"
slug: "view-transitions"
---

# What are the View Transitions?
I know. You have spent the last minutes navigating my portfolio and my blog, and you are wondering: "What are those seamless page transition animations?"
<br>
Well, they are called "View Transitions" they are so easy to implement!

## How it works?
Astro provides a <viewTransitions /> component that can be added to the head of our page or its layout, and it will control how the page navigation looks. Of course it is customizable.
<br>
Even though the default animation (the one I am using for this website) is already very elegant, especially in SPAs (single page applications).
<br>
Here a basic example of the component using his default behaviour:


```html
---
import { ViewTransitions } from 'astro:transitions';
---
<html lang="en">
  <head>
    <title>My Homepage</title>
    <ViewTransitions />
  </head>
  <body>
    <h1>Welcome to my website!</h1>
  </body>
</html>

```
## Naming transitions
By providing a name to the transition, we can also link two elements that are shared between pages to create some news animations.

### Look at those items in different pages:
```html
<MyVideo controls="" autoplay="" transition:name="media-play" transition:persist />

```

```html
<Video controls="" autoplay="" transition:name="media-play" transition:persist />
```

## Animations
The animations that are currently supported are: fade, slide and initial, and we can add additional values, such as duration so we can combine them easily to create a fully animated website.
```html
---
import { fade } from 'astro:transitions';
---

<header transition:animate={fade({ duration: '0.4s' })}>

```

## Conclusion
As you can see with very few lines of code, we can create a very dynamic website that will please all of our users. 
<br>
I wish we could use those view transition in more JS frameworks, hopefully soon!
<br>
Check the official documentation of Astro for more information.
<br>
<span class="styled-link" href="https://docs.astro.build/en/guides/view-transitions/" target="_blank">Documentation</span>


