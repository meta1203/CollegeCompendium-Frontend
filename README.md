# CollegeCompendium-Frontend
The front end for our 2023 Software Engineering project

To get started:
- Make sure nodejs and npm are installed on your machine
- run `npm install` in the top-level directory.

Remember, `node_modules` is a joke for a reason; expect that to take 400+ MBs for a final
package that's like 800kB.

To dynamically view changes as you make them, run `npm start`. This will launch your browser
and monitor changes made to files to automatically refresh and update. If you have two monitors,
nows the time to use them!

If you need to change the browser, you can use `BROWSER=firefox npm start`. Just replace the 
`firefox` with whatever browser executable it is that you want. (I couldn't get this
working, but that's what the documentation says...)

Public, static files get stored in `/public/`. So if, for example, you used an image tag like
`<img src="examples/example1.png" />`, the file would be placed such that `/public/examples/example1.png`.

Importing files within the React project can be done by adding the file to `/src/`, then
importing it using `import example1 from 'example1.png'` then adding it to the tag like so:
`<img src={example1} />`.

We're going to use [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
for accelerated UI development. Trust me, this shizz is the *bomb*. Fully reactive web design
with almost zero thinking required. Just fiddle with it until it looks right ;)

Specifically, we're going to be using [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction).
The intersection of React & Bootstrap means we get all the nice-looking-ness of Bootstrap
and the powerful component-based render system of React all together in one kick-butt
package.