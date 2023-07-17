let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];
let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];
//Yêu cầu 1:
let { id, title, rating } = courses;
console.log(courses)
let goodRatings = courses.filter((a) => {
    return a.rating >= 4;
});
console.log(goodRatings);

//Yêu cầu 2:
let badRatings = courses.filter(count => count.rating < 4);

badRatings.forEach(count => {
    console.log(`${count.id}-${count.title}-${count.rating}`)
})

//Yêu cầu 3:
const merge = [...courses, ...addedCourses]
console.log(merge);