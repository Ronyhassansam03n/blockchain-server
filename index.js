const express = require( 'express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json')


app.get('/', (req, res) =>{
    res.send('all is done')
});

app.get('/course-categories', (req, res) => {

    res.send(categories)
})

app.get ('/all-course', (req, res) => {

    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const seletedCourses = courses.find( c => c.category_id === id);
    res.send(seletedCourses);

})




app.listen(port, () => {

    console.log('all is on the way', port)
})
