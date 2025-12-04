# Menu
The config is duplicated for each language. The structure is the same, using translation tables to differentiate languages. The file cannot be unified, Hugo doesn't support it. It would break language links.

# Events-news
Events and news are merged in one page. It is set up using content from both sections and using permalink to have proper structure.
The separate sections are headless, non navigable. That affects linking and resource building.

# Team, partners
All of them are separate pages. If they were resources, there was a problem while building, because accessing resources (images) of resources caused ordering problems when building.

# Frontmatter
Params are not it special subobject, for prettier CMS integration. There's a risk of clashing with default params of page to keep in mind.
The CMS handles duplication of front matter for multiple languages.

# Content
Entire site uses page bundles. Therefore images are local to their content.
Metadata is taken from gitinfo. Only old imported content uses frontmatter. Default Hugo [ordering](https://gohugo.io/configuration/front-matter/) should work. 

# Internationalization
Most of the content is localized using file names. There shouldn't be difference in content. Everything should be available in both languages.
The UI labels are localized in i18n directory.

# CMS
Decided to use Sveltia, looks and feels better than DecapCMS. Mainly it allows smoother gallery functionality, supports image transformations.

