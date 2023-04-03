The goal of this project is to prototype how well Strapi's REST api works as a simple client-facing CMS. In particular, this project is aimed at a photographer who wishes to...

- Add, Remove, and Modify images in their site's gallery; along with the text associated with any images.
- Modify any text on the site, for example:
    - The /about page will have the following text elements, each will be editable by the client via the Django Admin Site.
        - "About": A text block that may consist of one or more paragraphs.
        - "About Headline": Bolded header text that sits at the top of the page.

Some known limitations of this sytem:
- Can't add multiple 'types' of data under a single entry. Client's will be unable to include an image that sits between text elements on their own. The data is static and uniform.
- Changes to data types, styling, or content structure will need to be done by the developer.
