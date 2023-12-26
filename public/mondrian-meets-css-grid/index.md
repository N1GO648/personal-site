---
title: 'Mondrian Meets CSS Grid: Crafting Art with Code'
date: '2023-09-21'
spoiler: Explore how the CSS Grid layout brings Piet Mondrian's abstract visions to life in the digital realm.
---
![Alt text](goal.png)

CSS Grid is a two-dimensional layout system for the web, providing the ability to create complex designs with clean and concise code. It's like a canvas for web artists, and what better way to illustrate its capabilities than by recreating a masterpiece? This article delves into a project that uses CSS Grid to mimic Piet Mondrian's iconic abstract art.

The Essence of Mondrian's Art

Piet Mondrian, a Dutch pioneer of abstract art, is known for his grid-based paintings featuring primary colors partitioned by bold, black lines. His work is a fitting challenge for the precision and flexibility of CSS Grid.

Creating a Mondrian Painting with CSS Grid

The provided HTML and CSS snippet is a modern homage to Mondrian, demonstrating how his visionary compositions can be translated into web design. The .container class serves as the canvas, defined as a grid container with specific column and row dimensions.

The Grid Container
```jsx
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mondrian Project</title>
  <style>
  
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      padding: 0;
    }

    .container {
      height: 748px;
      width: 748px;
      display: grid;
      background-color: #000;
      grid-template-columns: 320px 198px 153px 50px;
      grid-template-rows: 414px 130px 155px 22px;
      gap: 9px;
    }

    .item {
      background-color: #F0F1EC;
    }

    .red {
      background-color: #E72F24;
    }

    .white1 {
      grid-column: span 3;
    }

    .white2 {
      grid-row: span 2;
    }

    .white3 {
      grid-area: 2 / 2 / 4 /4
    }

    .blue {
      background-color: #004592;
      border-bottom: 10px solid #000;
    }

    .white4 {
      grid-row: span 2;
    }

    .yellow {
      background-color: #F9D01E;
    }

    .black {
      background-color: #232629;
    }
  </style>
</head>

<body>

  <div class="container">
    <div class="item red"></div>
    <div class="item white1"></div>
    <div class="item white2"></div>
    <div class="item white3"></div>

    <div class="item blue"></div>
    <div class="item white4"></div>

    <div class="item"></div>
    <div class="item yellow"></div>
    <div class="item black"></div>
  </div>
</body>

</html>
```
Dimensions: The container is set to a specific height and width.

Columns and Rows: Defined with grid-template-columns and grid-template-rows to match the proportions in Mondrian's work.

Styling the Grid Items

Each div within the .container represents a piece of the composition, with classes like .red, .blue, .yellow, and .black mirroring Mondrian's color palette.

Positioning with Grid Lines

Spanning: Some elements use grid-column and grid-row to span multiple cells.

Grid Area: The .white3 class uses grid-area to position an element across both rows and columns.

CSS Grid's Role in Responsive Design

While this project focuses on a fixed artistic representation, CSS Grid shines in creating responsive layouts. By adjusting the grid with media queries, each Mondrian block can reposition or resize harmoniously, maintaining the aesthetic on any screen size.

This Mondrian project is more than an exercise in CSS Grid—it's a testament to the blend of art and technology. By learning to manipulate grid properties, web developers and designers can construct layouts that are both technically sound and visually compelling. CSS Grid doesn't just layout content; it opens the door to a world where code meets art.