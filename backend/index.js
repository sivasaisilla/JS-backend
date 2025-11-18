import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Why are you gay?');
});

app.get('/api/jokes', (req, res) => {
 const jokes = [
   { id: 1, title: 'Joke 1', content: 'Why did the scarecrow win an award? Because he was outstanding in his field!' },
   { id: 2, title: 'Joke 2', content: 'Why don’t scientists trust atoms? Because they make up everything!' },
   { id: 3, title: 'Joke 3', content: 'Why did the bicycle fall over? Because it was two-tired!' },
 ];
 res.send(jokes);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});