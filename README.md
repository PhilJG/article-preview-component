# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

It has been a while since I completed a challenge so here is one.

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![desktop-active-complete](.design/complete/desktop-active-complete), ![desktop-complete](.design/complete/desktop-complete), ![mobile-active-complete](.design/complete/mobile-active-complete), ![mobile-complete](.design/complete/mobile-complete)

### Links

- Solution URL: [Github page](https://github.com/PhilJG/article-preview-component)
- Live Site URL: [Add live site URL here](https://philjg.github.io/article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript

### What I learned

I tried using alternative approaches for calling classes through js. However I cannot get the social box to hide when the same button is pressed on desktop. Any help there would be apprieciated.

```js
const showSocial = function () {
  if (social.classList.contains('hidden')) {
    social.classList.add('flex');
  }
};

const hideSocial = function () {
  if (social.classList.contains('flex')) {
    social.classList.add('hidden');
    social.classList.remove('flex');
    console.log('visible');
  }
};

shareOff.addEventListener('click', showSocial);
shareOff.addEventListener('click', hideSocial);
```

### Continued development

Positionin the contact and social boxes on top of each other with the box-model was challenging and messey. I will need to look into ways to improve on that.
I cannot get the social box to hide when the same button is pressed on desktop. I will need to figure that out.
Over all layout and styling with size and typography are not exactly like the original. I will need to look into methods to better imitate the mockups

## Author

- Website - [Phil J Gray](https://www.philjgray.ca)
- Frontend Mentor - [@PhilJG](https://www.frontendmentor.io/profile/yourusername)
