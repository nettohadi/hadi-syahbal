---
title: 'How to create your own website builder - Part 1'
date: '2023-06-23'
tags: 'blog, nextjs, tutorial'
author: 'John Doe'
readTime: '3 min read'
thumbnail: 'https://res.cloudinary.com/dhfbnshjv/image/upload/v1686481797/Screen_Shot_frontbuilder_zdpg5n.webp'
---

When you start dragging and dropping elements like buttons and images within a website builder, you're essentially giving 
instructions to the website builder on how your page will look like. These instructions, or preferences, are stored and 
will be used to render the page later.

In a regular web page, the content and layout are typically fixed and don't change unless the underlying code is 
modified. However, with a website builder, the dynamic rendering comes into play. The website builder takes your 
stored preferences, combines them with the chosen template, and generates the final web page on-the-fly whenever 
someone visits your site.

This dynamic rendering allows for flexibility and customization. As you make changes to your website builder project, 
such as rearranging elements or updating styles, the website builder instantly reflects those modifications in the 
dynamically rendered output.

Moving forward we will call these instructions and preferences the "page data".

## So, how does the page data look like?

Okay, it's time to talk about how the page data look like. The page data should contain both the html and css. Here 
is how it looks like:

```js
const pageData = {
	id:'dgakGAKdka',
	type: 'div',
	children:[
		{
			id:'wewkFRDdsg',
			type: 'heading',
			children:[],
			textContent: 'heading 1',
			styles:{
				width:'100px',
				height: '100px',
				backgroundColor: 'grey',
			}
		}
	],
	styles:{
		width:'100px',
		height: '100px',
		backgroundColor: 'grey',
	}
};
```

This is the simplest structure to represent html and css inside the page data. There can be more properties depending 
on specific use cases. Let's take a closer look at each property and talk about its purpose.

First, we have the "id". Every element should have its own unique id. In the next sections we will see many reasons 
for having a unique id, but for now we will just talk about only two of them. Id makes it easy for the website 
builder to know which element is selected or which element needs to rerender. Also, id makes it easy to store the 
history of actions performed within the website builder. We can use this history to create the undo-redo functionality.

Second, we have the "name" property,
