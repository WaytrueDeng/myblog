---
title:  a record of my learning road of gatby
date: 2023-02-08
tags: ["IT","JS","Web"]
slug: gatsbyLearn
--- 

## graphql variable
### defination

```graphql


```

when we use string type it seems like we need to correct it witch the [String] type rather than String, anyway just follow the syntax

~~props is not recognized as query variable => what is the syntax of setting graphql variable value? => Default values can also be assigned to the variables in the query by adding the default value after the type declaration. ~~

props syntax `{varName}` is not working in query => how to correctly use jsx variable in query? => I find we should use ` ${varName}` instead =>
what is the ${syntax} => $ in graphql stands for variable

string interplotion not allowed in graphql query => what is string interploting?: evaluating the string return it's true value =>

#### final fix 

we can directly use the same props name and inject it to graphql by precedding the $ symbol

``` javascript
const Category = ({queryFor}) => {
  const {data} =  useStaticQuery(
    graphql`
query  ($queryFor: [String]) {
  allMdx(
    filter: {frontmatter: {tags: {in: $queryFor}}}
    sort: {frontmatter: {date: DESC}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        slug
        title
        tags
      }
      id
    }
  }
}
    `
  )
  return <div></div>;
};

```

## useStaticQuery Hook
``` javascript
const Category = ({queryFor}) => {
  const  {data}  =  useStaticQuery(
    graphql`
query  ($queryFor: [String]) {
  allMdx(
    filter: {frontmatter: {tags: {in: $queryFor}}}
    sort: {frontmatter: {date: DESC}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        slug
        title
        tags
      }
      id
    }
  }
}
    `
  )
  return (
    <div>
    { data.allMdx.nodes.map( (node) => (
  <article key={node.id}>
        <h2> <Link to={node.frontmatter.slug}> {node.frontmatter.title}</Link></h2>
        <p>{node.frontmatter.date}</p>
  </article>
    ) ) }
    </div>)
};
```

data is not defined => it seems like useStaticQuery has already return the data obejct so you should not add {} around it to destruct the obj, but when you need use page query instead you need to use {} to destruct the obj


## programmatically creat page
