const express = require('express')
const app = express()
const port = 3000

const drake = ['https://youtu.be/uxpDa-c-4Mc', 'https://youtu.be/xpVfcZ0ZcFM', 'https://youtu.be/RubBzkZzpUA', 'https://youtu.be/JFm7YDVlqnI', 'https://youtu.be/-zzP29emgpg', 'https://youtu.be/U9BwWKXjVaI', 'https://youtu.be/eDuRoPIOBjE', 'https://youtu.be/xWggTb45brM', 'https://youtu.be/7LnBvuzjpr4', 'https://youtu.be/DRS_PpOrUZ4', 'https://youtu.be/cimoNqiulUE',' https://youtu.be/GxgqpCdOKak', 'https://youtu.be/CccnAvfLPvE', 'https://youtu.be/2lTB1pIg1y0', 'https://youtu.be/Xyv4Bjja8yc', 'https://youtu.be/lJTRVX9R5EA', 'https://youtu.be/rIhx2wZ8jnA', 'https://youtu.be/THVbtGqEO1o', 'https://youtu.be/XqpQpt_cmhE', 'https://youtu.be/BYDKK95cpfM', 'https://youtu.be/p9pf5EyOgcs', 'https://youtu.be/vX9msKu75qs', 'https://youtu.be/V7UgPHjN9qE', 'https://youtu.be/TRLSQDCkcaA', 'https://youtu.be/I4DjHHVHWAE', 'https://youtu.be/0KCWqnldEag', 'https://youtu.be/0jz0GAFNNIo', 'https://youtu.be/WNW1xRqbt94', 'https://youtu.be/lIlMtVGI5Pg', 'https://youtu.be/Xty2gi5cMa8']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.get('/', (req, res) => {
    res.redirect(drake[getRandomInt(drake.length)])
})

app.listen(port, () => {
    console.log(`The Drake launcher has been started on port ${port}`);
})