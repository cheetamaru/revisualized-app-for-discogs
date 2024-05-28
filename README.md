# discogs-revisualized
discogs.com wrapper for outer users with revisualized ui

It is my pet-project dedicated to enhancing the visual appeal and user experience of a cool site [discogs.com](https://www.discogs.com/). I try to provide a modern, stylish overlay that transforms current design into more visually appealing and user-friendly interface, without altering the original content and functionality.

Domain of the revisualization is __only__ other users' collections and wantlists. Not inner collections and all remaining functionality. Basically it is just a cool gallery of the music collection you have that is easy to show to your friends.

## Goals:
- [ ] Create new visuals for wantlist
- [ ] Create new visuals for collection
- [ ] Provide responsive layout
- [ ] Create some service with link shortenings that can store your layout settings before sending it to your friends

## TODO:
- [ ] Error handling when there is no permission to view wantlist/collection (example: abc)
- [x] Error handling when there is no such user
- [ ] Error handling when rate limit is exceeded
- [ ] Generate background profile banner by username (?)
- [x] In wantlist some info that describes type of vinyl etc
- [ ] Create issue about wantlist images
- [ ] Create issue about rating in wantlist
- [ ] Sort options on List Page
- [ ] Different list layouts
- [x] List pagination, different per_page options
- [ ] Color coded genres and styles, maybe background of cards
- [ ] Card reverse side
- [x] Fallback image on card
- [ ] Dark/Light Theme
- [ ] Something interesting on home page
- [x] In username input create a reset suffix
- [ ] Cover Image error fallback
- [x] Format image fallback
- [x] Card description filter
- [ ] Create custom loading page for wantlist
- [x] Make caching with unstable_cache
- [ ] Make better card design
- [ ] Make a user card by click on the avatar
- [x] Try to make width of a lone grid adjustable
- [ ] Change cover size if its not a square (in cassettes)
- [ ] Apply ddd principle to the project
- [ ] Stylize error page

## Bugs
- [x] On error page on userinput change blur occurs for some reason
- [ ] Fix error display in the Server Components on prod
- [ ] loading.tsx doesn't trigger when wantlist's page is changed https://github.com/vercel/next.js/issues/53543


