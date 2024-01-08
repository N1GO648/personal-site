---
title: 'Mondrian Meets CSS Grid: Crafting Art with Code'
date: '2023-09-21'
spoiler: Explore how the CSS Grid layout brings Piet Mondrian's abstract visions to life in the digital realm.
---
![Alt text](goal.png)

Today, we're going to blend the worlds of art and web development. We'll learn how to create a digital Mondrian painting using CSS Grid, a powerful layout system in CSS. This project is perfect for beginners looking to understand CSS Grid while having fun with art!

## **Who Was Mondrian?**
Piet Mondrian was a Dutch painter famous for his abstract compositions of straight lines and bold colors. His style, characterized by geometric shapes and primary colors, lends itself wonderfully to replication using CSS Grid.

## **What is CSS Grid?**
CSS Grid Layout is a two-dimensional grid-based layout system in CSS. It's fantastic for creating complex web layouts like magazine-style designs, but also simple enough for projects like our Mondrian painting.

### **Why Use CSS Grid?**
* Control: It gives you complete control over both columns and rows.
* Flexibility: You can easily adjust the size and position of grid items.
* Simplicity: Once you understand the basics, it's straightforward to use.
* Creating a Mondrian Painting
* Let's break down how to create a Mondrian painting step-by-step.

### **Step 1: Set Up Your HTML Structure**
First, create a basic HTML file. 
```jsx
We'll use a <div> element to represent our painting and additional <div>s for each color block.
```
```jsx
<!DOCTYPE html>
<html>
<head>
  <title>Mondrian Painting with CSS Grid</title>
</head>
<body>
  <div class="painting">
    <div class="block red"></div>
    <div class="block blue"></div>
    <!-- Add more blocks as needed -->
  </div>
</body>
</html>
```

### **Step 2: Define the CSS Grid**
Now, let's style our painting using CSS. We'll define a grid container and assign grid areas to our blocks.

```jsx
.painting {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  width: 400px;
  height: 300px;
}

.block {
  border: 1px solid black;
}
```

### **Step 3: Style Each Block**
Mondrian's paintings typically use primary colors. Let's add color to our blocks.

```jsx
.red { background-color: red; }
.blue { background-color: blue; }
/* Add more colors as needed */
```

### **Step 4: Positioning the Blocks**
This is where the fun begins! Position each block to create a Mondrian-like composition. Use grid-column and grid-row to specify the position and span of each block.

```jsx
.red {
  grid-column: 1 / span 2;
  grid-row: 1;
}

.blue {
  grid-column: 3;
  grid-row: 2 / span 2;
}
```

### **Step 5: Fine-Tuning**
Adjust the size, position, and number of blocks to your liking. Experiment with different layouts to create your unique Mondrian masterpiece.

Creating a Mondrian painting with CSS Grid is a fantastic way to learn about grid layouts while unleashing your inner artist. This beginner-friendly project not only teaches you the basics of CSS Grid but also shows how you can use coding to create art. So, open your code editor and start painting with CSS!