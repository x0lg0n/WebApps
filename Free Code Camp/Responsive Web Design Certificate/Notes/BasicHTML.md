# Basic HTML Review

## HTML Basics

- **Role of HTML**: HTML represents the content and structure of the web page.
- **HTML Elements**: Elements are the building blocks for an HTML document. They represent headings, paragraphs, links, images and more. Most HTML elements consist of an opening tag (`<elementName>`) and a closing tag (`</elementName>`).

Here is the basic syntax:

_Example Code_: `<elementName>Content goes here</elementName>`

- **Void Elements**: Void elements cannot have any content and only have a start tag. Examples include `img` and `meta` elements.

_Example Code_: `<img>` `<meta>`

It is common to see some codebases that include a forward slash `/` inside the void element. Both of these are acceptable:

```html
<img>
<img/>
```

- **Attributes**: An attribute is a value placed inside the opening tag of an HTML element. Attributes provide additional information about the element or specify how the element should behave.

```html
<element attribute="value"></element>
```

A boolean attribute can either be present or absent in an HTML tag. If present, the value is true; otherwise it is false. Examples: `disabled`, `readonly`, `required`.

- **Comments**: Comments are used to leave notes for yourself and other developers.

```html
<!--This is an HTML comment.-->
```

## Common HTML Elements

### Heading Elements

There are six heading elements (`h1`–`h6`) that signify the importance of content. Lower numbers indicate higher importance.

```html
<h1>most important heading element</h1>
<h2>second most important heading element</h2>
<h3>third most important heading element</h3>
<h4>fourth most important heading element</h4>
<h5>fifth most important heading element</h5>
<h6>least important heading element</h6>
```

### Paragraph Elements

Used for paragraphs on a web page.

```html
<p>This is a paragraph element.</p>
```

### Image Elements

The `img` element adds images to the web page. Use the `src` attribute to specify the image location and the `alt` attribute for accessibility.

```html
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
```

### Body Element

Represents the main content of the HTML document.

```html
<body>
  <h1>CatPhotoApp</h1>
  <p>This is a paragraph element.</p>
</body>
```

### Section Elements

Used to divide content into smaller, semantic sections.

```html
<section>
  <h2>About Me</h2>
  <p>Hi, I am Jane Doe and I am a web developer.</p>
</section>
```

### Div Elements

A generic HTML element with no semantic meaning, used as a container for other elements.

```html
<div>
  <h1>I am a heading</h1>
  <p>I am a paragraph</p>
</div>
```

### Anchor (a) Elements

Used to create links. The `href` attribute specifies the URL.

```html
<a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg">cute cats</a>
```

### List Elements

**Unordered lists** use `<ul>` with `<li>` items:

```html
<ul>
  <li>catnip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
```

**Ordered lists** use `<ol>` with `<li>` items:

```html
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
```

### Emphasis Elements

**Emphasis** (`em`) places semantic emphasis on text:

```html
<p>Cats <em>love</em> lasagna.</p>
```

**Strong** (`strong`) indicates urgency or strong importance:

```html
<p>
  <strong>Important:</strong> Before proceeding, make sure to wear your safety goggles.
</p>
```

### Figure and Figcaption Elements

Groups content like images and diagrams with captions.

```html
<figure>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Two tabby kittens sleeping together on a couch.">
  <figcaption>Cats <strong>hate</strong> other cats.</figcaption>
</figure>
```

### Main Element

Represents the main content for a web page.

### Footer Element

Placed at the bottom of the HTML document, usually contains copyright and links.

```html
<footer>
  <p>
    No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a>
  </p>
</footer>
```

## Identifiers and Grouping

### IDs

Unique identifiers for HTML elements. ID names should only appear once per document and cannot have spaces. Use dashes for multi-word IDs.

```html
<h1 id="title">Movie Review Page</h1>
<div id="red-box"></div>
```

### Classes

Used to group elements for styling and behavior. Unlike IDs, classes can be reused and can have multiple values.

```html
<div class="box"></div>
<div class="box red-box"></div>
<div class="box blue-box"></div>
```

## Special Characters and Linking

### HTML Entities

Character references represent reserved characters in HTML.

```html
<p>This is an &lt;img /&gt; element</p>
```

Examples: `&amp;` (ampersand), `&lt;` (less than).

### Link Element

Links to external resources like stylesheets.

```html
<link rel="stylesheet" href="./styles.css" />
```

The `rel` attribute specifies the relationship; `href` specifies the URL.

### Script Element

Embeds executable code. Best practice is to link external JavaScript files.

```html
<body>
  <script src="path-to-javascript-file.js"></script>
</body>
```

## Boilerplate and Encoding

### HTML Boilerplate

The basic structure every HTML document needs:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>freeCodeCamp</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <!--Headings, paragraphs, images, etc. go inside here-->
  </body>
</html>
```

### DOCTYPE

Tells browsers which version of HTML you're using.

### HTML Element

The root element. Use the `lang` attribute to specify the document language.

### Head Element

Contains metadata needed for browsers and search engines.

### Meta Elements

Represent site metadata (character encoding, social media previews, etc.).

### Title Element

Sets text appearing in the browser tab.

### UTF-8 Character Encoding

A standardized character encoding widely used on the web. Set via the `charset` attribute in a meta element.

## SEO and Social Sharing

### SEO

Search Engine Optimization optimizes web pages for better visibility and search engine ranking.

### Meta (Description) Element

Provides a short page description impacting SEO.

```html
<meta
  name="description"
  content="Discover expert tips and techniques for gardening in small spaces, choosing the right plants, and maintaining a thriving garden."
/>
```

### Open Graph Tags

Control how content appears on social media platforms (Facebook, LinkedIn, etc.).

**og:title**: Sets the title for social media posts.

```html
<meta content="freeCodeCamp.org" property="og:title" />
```

**og:type**: Represents the content type (article, website, video, music).

```html
<meta property="og:type" content="website" />
```

**og:image**: Sets the image shown for social media posts.

```html
<meta
  content="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
  property="og:image"
/>
```

**og:url**: Sets the URL users click on for social media posts.

```html
<meta property="og:url" content="https://www.freecodecamp.org" />
```

## Media Elements and Optimization

### Replaced Elements

Elements whose content is determined by external resources (e.g., `iframe`).

```html
<iframe src="https://www.example.com" title="Example Site"></iframe>
```

Use `allowfullscreen` to allow full-screen mode:

```html
<iframe
  src="video-url"
  width="560"
  height="315"
  allowfullscreen
></iframe>
```

**Embedding YouTube videos**:

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/PkZNo7MFNFg?si=-UBVIUNM3csdeiWF"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
```

### Optimizing Media

Consider three factors: size, format, and compression.

**Image formats**: PNG and JPG are common but outdated. Use WEBP or AVIF for better optimization.

**Image licenses**:

- Public domain: No copyright restrictions
- Creative Commons 0: Free to use
- Permissive licenses: MIT, BSD, Creative Commons

**SVGs**: Scalable Vector Graphics scale to any size without quality loss, using paths and equations.

## Multimedia Integration

### Audio and Video Elements

Add sound and video content to HTML documents.

```html
<audio src="CrystalizeThatInnerChild.mp3" controls></audio>

<video
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  controls
  muted
></video>
```

**Supported formats**:

- Audio: mp3, wav, ogg
- Video: mp4, ogg, webm

### Audio/Video Attributes

**controls**: Enables playback controls (volume, pause, resume).

**loop**: Makes audio/video replay continuously.

```html
<audio src="audio.mp3" loop controls></audio>
```

**muted**: Starts audio/video in muted state.

```html
<audio src="audio.mp3" muted controls></audio>
```

**poster** (video only): Displays an image while the video is downloading.

```html
<video src="video.mp4" poster="image.jpg" width="620"></video>
```

### Source Element

Handles browser compatibility by providing multiple formats; the browser selects the first supported one.

```html
<audio controls>
  <source src="audio.ogg" type="audio/ogg" />
  <source src="audio.wav" type="audio/wav" />
  <source src="audio.mp3" type="audio/mpeg" />
</audio>
```

## Target Attribute Types

### Target Attribute Values

**_self** (default): Opens in the current tab/window.

```html
<a href="https://freecodecamp.org" target="_self">Visit freeCodeCamp</a>
```

**_blank**: Opens in a new tab or window.

```html
<a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
```

**_parent**: Opens in the parent browsing context.

```html
<a href="https://freecodecamp.org" target="_parent">Visit freeCodeCamp</a>
```

**_top**: Opens in the top-most browsing context (outermost window).

```html
<a href="https://freecodecamp.org" target="_top">Visit freeCodeCamp</a>
```

## Absolute vs. Relative Paths

### Path Definition

A path specifies the location of a file or directory in a file system.

### Path Syntax

- **Slash** (`/` or `\`): Path separator indicating directory/file breaks
- **Single dot** (`.`): Current directory
- **Double dot** (`..`): Parent directory

```txt
public/index.html
./favicon.ico
../src/index.css
```

### Absolute Path

A complete link starting from the root directory, includes protocol and domain name.

```html
<a href="https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg">
  View fCC Logo
</a>
```

### Relative Path

Specifies file location relative to the current file. More flexible for internal links.

```html
<p>
  Read more on the
  <a href="about.html">About Page</a>
</p>
```

## Link States

- **`:link`**: Default state for unvisited links
- **`:visited`**: Applied after a user visits the linked page
- **`:hover`**: Applied when hovering over a link
- **`:focus`**: Applied when focusing on a link
- **`:active`**: Applied when a link is being clicked
