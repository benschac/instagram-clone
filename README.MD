# Benstagram

Tools: Express.js + Instagram API + OAuth2 + FlexBox + EJS + Vanilla Javascript.

Summary: Benstagram or Youstagram pulls your photos from Instagram using express and renders them on a custom layout for you to browse through.

![gif of application](http://g.recordit.co/QnVjo3JgAD.gif)

### Getting Started
- `npm install` in the root directory of the project.
- Instagram API: Your going to need to create an application generate API CLIENT, SECRET and ACCESS_TOKEN. then `touch config.js`

```javascript
 module.exports = {
   ACCESS_TOKEN: '[YOUR ACCESS TOKEN HERE]',
   CLIENT: '[YOUR CLIENT KEY HERE]',
   SECRET: '[YOUR SECRET KEY HERE]'
 }
```

If you need some help generating these keys, I wrote a blog post [TO-DO] here about my experience with some step by step instructions on how to generate everything you need.

- `npm run start`
