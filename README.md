# Menu
The config is duplicated for each language. The structure is the same, using translation tables to differentiate languages. The file cannot be unified, Hugo doesn't support it. It would break language links.

# Events news
They are under common section. The sole reason is that I can access them as .Pages from section template.
Other options:
- Each they own headless section and a common one. Then I could access the .Pages directly from their respective section.
- Single section and use frontmatter to differentiate. Since CMS would support it, maybe the best solution?

# Frontmatter
Params are not it special subobject, for prettier CMS integration. There's a risk of clashing with default params of page to keep in mind.
The CMS handles duplication of front matter for multiple languages.