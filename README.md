# revisualized-app-for-discogs
discogs.com wrapper for outer users with revisualized ui

It is my pet-project dedicated to enhancing the visual appeal and user experience of a cool site [discogs.com](https://www.discogs.com/). I try to provide a modern, stylish overlay that transforms current design into more visually appealing and user-friendly interface, without altering the original content and functionality.

My main stack is Vue. I am developing this pet project to deepen my knowledge of React and Next.js.

Domain of the revisualization is __only__ other users' collections and wantlists. Not inner collections and all remaining functionality. Basically it is just a cool gallery of the music collection you have that is easy to show to your friends.

## Goals:
- [x] Create new visuals for wantlist
- [ ] Create new visuals for collection
- [x] Provide responsive layout
- [ ] Create some service with link shortenings that can store your layout settings before sending it to your friends

## TODO:
- [ ] Error handling when there is no permission to view wantlist/collection (example: abc)
- [ ] Error handling when there is no such user
- [ ] Error handling when rate limit is exceeded (?)
- [ ] Generate background profile banner by username (?)
- [x] In wantlist some info that describes type of vinyl etc
- [ ] Create issue about wantlist images
- [ ] Create issue about rating in wantlist
- [x] Sort options on List Page
- [x] Different list layouts
- [x] List pagination, different per_page options
- [ ] Color coded genres and styles, maybe background of cards
- [ ] Card reverse side
- [x] Fallback image on a card
- [ ] Dark/Light Theme
- [ ] Something interesting on the home page
- [x] In username input create a reset suffix
- [ ] Cover Image error fallback
- [x] Format image fallback
- [x] Card description filter
- [ ] Create custom loading page for wantlist
- [x] Make caching with unstable_cache
- [ ] Make better card design
- [ ] Make a user card by click on the avatar
- [x] Try to make width of a lone grid adjustable
- [x] Change cover size if its not a square (in cassettes)
- [x] Apply ddd principle to the project
- [ ] Stylize error page
- [ ] Make better table with image design
- [ ] Make better table without image design
- [x] Create responsive table design
- [ ] Create a color palette
- [x] Create copy button
- [ ] Make a tour of copy button after 3rd visit to the site
- [ ] Dicogs copyrights
- [x] Next Image in table images
- [x] Format pictures in table images
- [ ] Save layout settings when searching another person
- [x] Add a favicon
- [ ] Research if it's possible to not create an apiClient on each request
- [ ] Research what is the deal with currency
- [ ] Labels additional info demonstration
- [ ] Add i18n
- [x] Fix styles of table links
- [ ] Add tests
- [x] Add empty cards message
- [ ] Add format image distinction for colored vinyl/cassetes
- [ ] Add help to the main page

## Bugs
- [x] On error page on userinput change blur occurs for some reason
- [ ] Fix error display in the Server Components on prod
- [ ] loading.tsx doesn't trigger when wantlist's page is changed https://github.com/vercel/next.js/issues/53543
