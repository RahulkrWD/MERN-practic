const express = require('express');
const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Sample data for posts
let posts = [
  { id: 1, username: 'JohnDoe', content: 'This is a sample post.' }
];

// Index route - show all posts
app.get('/', (req, res) => {
  res.render('index.ejs', { posts });
});

// New post form
// app.get('/posts/new', (req, res) => {
//   res.render('new');
// });

// Create a new post
app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    username: req.body.username,
    content: req.body.content
  };
  posts.push(newPost);
  res.redirect('/');
});

// Edit post form
app.get('/posts/:id/edit', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render('edit', { post });
});

// Update an existing post
app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  post.username = req.body.username;
  post.content = req.body.content;
  res.redirect('/');
});

// Delete a post
app.delete('/posts/:id', (req, res) => {
  posts = posts.filter(p => p.id != req.params.id);
  res.redirect('/');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
