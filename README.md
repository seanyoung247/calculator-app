# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Aims](#aims)
    - [Current features](#Current-features)
  - [Built with](#built-with)
  - [Links](#links)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot
![App Screenshot](./design/screenshot.png)

### Aims

My primary aim was to learn the Vue framework by building a simple vue app. I also wanted to explore how much interactivity and reactivity can be built purely in CSS.

#### Current features

Currently the app has the following features:

- App:
  - Automated vertical layout and spacing using flexbox
  - Component based architecture:
    - Keypad:
      - Automatic generation of keys based on template and layout based by css grid
      - Keyboard entry with auto-binding of keys to buttons and button animation on keypress
    - Themes:
      - Theme switching based on css class templates
      - Theme toggle generated based on available themes
      - User chosen theme loading and saving using localStorage
    - Display:
      - Automatically adjusts text size to fit screen space down to a minimum font size
      - Allows touch, mouse drag, wheel and button scrolling if text is wider than screen width after minimum font size reached
      - Automatically shows and hides screen overflow indicators and buttons
  - Logic in modules:
    - Calc:
      - Evaluates expressions with Javascript interpreter
      - Autoformats numbers with thousands seperators for display
      - Deals with errors and misformed expressions
      - Allows expression chaining
    - measureText:
      - Measures pixel width of rendered text for a given element using the canvas API
    - settings:
      - Encapsulates loading and saving settings to localStorage

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vue](https://vuejs.org/) - Vue.js framework

### Links

- Solution URL: [Github](https://github.com/seanyoung247/calculator-app)
- Live Site URL: [Github pages](https://seanyoung247.github.io/calculator-app/)
