# Payload CMS Backend Integration for Sovereign

This file sets up the Sovereign platform to use Payload CMS as a backend.

## 1. Install Payload CMS
```bash
npm install payload
```

## 2. Initialize Payload CMS
```bash
npx payload init
```
Follow prompts to create `payload.config.js` and admin user.

## 3. Define Collections
```js
// payload.config.js
module.exports = {
  collections: [
    {
      slug: 'opinions',
      labels: { singular: 'Opinion', plural: 'Opinions' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'content', type: 'textarea', required: true },
        { name: 'author', type: 'text' }
      ]
    }
  ]
}
```

## 4. Run Payload
```bash
npm run dev
```
Admin panel available at: `http://localhost:3000/admin`

## 5. Fetch Opinions in Hugo Frontend
```html
{{ $opinions := getJSON "http://localhost:3000/api/opinions" }}
{{ range $opinions.docs }}
<article>
  <h2>{{ .title }}</h2>
  <p>{{ .content }}</p>
</article>
{{ end }}
```

## 6. Submission Form
```html
<form method="POST" action="http://localhost:3000/api/opinions">
  <input type="text" name="title" required placeholder="Title">
  <textarea name="content" required placeholder="Content"></textarea>
  <input type="text" name="author" placeholder="Your Name">
  <button type="submit">Submit</button>
</form>
```

## 7. Deployment
- Deploy Payload CMS on Vercel, Heroku, or custom server.
- Hugo frontend fetches live data from Payload API.
- Ensure CORS is enabled for API access.