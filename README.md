The goal of this project is to prototype how well Strapi's REST api works as a simple client-facing CMS. In particular, this project is aimed at a photographer who wishes to...

- Add, Remove, and Modify images in their site's gallery; along with the text associated with any images.
- Modify any text on the site.

Some known limitations of this sytem:

- The data types in the CMS are atomic and static in the sense that to add or restructure the data requires development time (as opposed to being completely editable by the Client). For instance, client's will be unable to include an image that sits between text elements on their own. The data is static and uniform. The client can only add or remove elements that the developer has built support for.
- Changes to data types, styling, or content structure will need to be done by the developer.

## Development Setup

#### Environment Variables

The following environment variables need to be set for Vite in the frontend.

*`frontend/.env`*
```txt
VITE_API_TOKEN=thestrapiapitoken
```
