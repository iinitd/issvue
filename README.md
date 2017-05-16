# Issvue

A Client-side Github-issue Blog Generator.

# Features

1. Completely back-end free.

2. Ready to use. Create your blog on github website.

3. Vue.js based, friendly for developers.

4. Well-designed template.

5. Multiple authors. Exclude unexpected issues.

# For Users

A ready-to-use version is under docs folder.

Just fork it, and everything is set up already.

1. Fork [me](https://github.com/cogons/issvue-to-go).

2. Edit /docs/static/config.json.

3. Select `use docs folder` for your Github Pages.

4. Your blog is ready.

## For Developers

1. First you need node.js.

2. Clone [me](https://github.com/cogons/issvue).

`$ git clone https://github.com/cogons/issvue.git`

3. Install dependencies.

`$ cd issvue && npm install`。

4. Edit config under **/static** & **/src/static**.

`$ cd static && vi config.json`

`$ cp -f config.json ../src/static/config.json`

5. Look around.

6. Rebuild your blog.

`$ npm run build`。

7. Your blog is ready in **docs** folder.

# Todos

1. category page

2. pagination

3. single page (about)

You are welcome to **open an issue** on any advices or bugs.
