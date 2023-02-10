---
title: record of learning basic css
date: 2023-02-09
tags: ["IT", "CSS", "Web"]
slug: cssLearning
---

## Selector

<ul>
  <li>"nil" for &&</li>
  <li>" " for descandants(all element nested in  element)</li>
  <li>">" for child of upper element</li>
  <li>"~" for parent of right side element </li>
  <li>"+" for Selects the first element that is placed immediately after elements</li>
</ul>

<p>for example
<code>

p.className stands for all p tags have a className class

/_ select all li elements inside a p including recursive nested _/

p li {
}

/_ select all li elements which are directly child of p element _/

p > li

/_ select all p element whose child is li _/

p ~ li

/_ select the first p element after div element _/
div + p

</code>
</p>

## Color

## Border Padding Margin

<p>remember border -> margin is outside of border, padding is inside border, all of theme has top right down left , rememer the clockwise order

```
p.three {
  border-style: solid;
  border-width: 25px 10px 4px 35px; /* 25px top, 10px right, 4px bottom and 35px left */
}
```

</p>

## position

<ul>
  <li>all elements default position is static</li>
  <li>static positon is not affected by the top down left write properties</li>
  <li>relative positon will keep the original place however the absolute positon will release the positon </li>
  <li>absolute postion is relative to it's parent element positon, the parent element must hava a positon value rather than the static one</li>
  <li>fixed position is the positon relative to the view point </li>
  <li></li>
  <li></li>
</ul>

## Reference
<a href="/roam/tailwindCssLearn"></a>
