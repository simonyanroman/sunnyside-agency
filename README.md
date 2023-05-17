# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./page_desktop.pdf)

![](page_mobile.pdf)

### Links

- Solution URL: (https://github.com/simonyanroman/sunnyside-agency)
- Live Site URL: (https://simonyanroman.github.io/sunnyside-agency/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

During this challenge i learned how to set-up custom CSS variables and use them in styling components.

Creating custom CSS variables.

```css
:root {
  --sides-padding: 1rem;
  --custom-padding: 4rem;
  --header-padding: 2rem;
  --custom-gap: 2rem;
}
```

Using custom CSS variables.

```css
.contact {
  padding-left: calc(var(--custom-padding) / 2);
  padding-right: calc(var(--custom-padding) / 2);
  padding-top: calc(var(--custom-padding) / 4);
  padding-bottom: calc(var(--custom-padding) / 4);
  border-radius: calc(var(--custom-padding) / 2);
}
```

I also learned how to use calculation in CSS styling.

```css
.introduction {
  gap: calc(var(--custom-gap) / 2);
}
```

### Continued development

I certanly need to train refactoring and structuring my code. I have problems in structuring CSS while implementing responsivness.

I also will be more carefull during analysing the design to dividing it into logic blocks and elements.

## Author

- Website - [Roman Simonyan](https://www.linkedin.com/in/simonyanrr)
- Frontend Mentor - [@simonyanroman](https://www.frontendmentor.io/profile/simonyanroman)
