# Config
## Menu
The config is duplicated for each language. The structure is the same, using translation tables to differentiate languages. The file cannot be unified, Hugo doesn't support it. It would break language links.
I had to use a workaround for donation link, which is language dependent.
Templates which work with menus check for .Identifier = donate and use partial template logic to access site.Param.

## Donation link
I wasn't able to find a cleaner way to avoid duplication of base URL.
Instead of direct accessing the site.Param, I use partial template to append locale query.

# Team, partners
All of them are separate pages. If they were resources, there was a problem while building, because accessing resources (images) of resources caused ordering problems when building.

# Frontmatter
Params are not it special subobject, for prettier CMS integration. There's a risk of clashing with default params of page to keep in mind.
The CMS handles duplication of front matter for multiple languages.

# Content
Entire site uses page bundles. Therefore images are local to their content.
Metadata - date is taken from gitinfo. Only old imported content uses frontmatter. Default Hugo [ordering](https://gohugo.io/configuration/front-matter/) should work. 

# Internationalization
Most of the content is localized using file names. There shouldn't be difference in content. Everything should be available in both languages.
The UI labels are localized in i18n directory.

# CMS
Decided to use Sveltia, looks and feels better than DecapCMS. Mainly it allows smoother gallery functionality, supports image transformations.

# CSS
I use semantic class names and brittle CSS intentionally.

## Header border
The border is a rainbow image, which prevents me to add regular border beneath the header.
The workaround is to add top header for the first sibling of header, which is main.

## Hamburger menu
I used CSS only tricks to avoid javascript. I have a hidden checkbox, which keeps track of open/close menu.
The menu appears using change in height, because visibility is not animatable.

## Classes
.entities = grid for dynamic content (events, projects, partners...)
.intro = common class for headings

## Styling
Entire site has following types of pages:
- Home page - totally custom
- Standalone page - custom layout page with complex header
- Section page - heading and card container
- Detail page - entity detail

# SVG
## HTML
I use partial template to embed all SVG's.
I want to be able to style them and <img> tag doesn't allow it.
I could use svg/use, but that markup was ugly, the viewbox didn't work on the outside svg and that resulted in many unnecessary requests.
I also considered creating svg bundle of symbols, which would solve the requests and caching, but that would complicate the build step.
So I opted for the easiest, most straightforward solution.

# Layouts
## Splits
Main idea is to have 2 sections 50-50. The issue is, when the content is not separated from the image in mobile version.
I cannot make it future proof and aligned properly.
The homepage is the only one with this. So it's using a hack.
