
const posts = [
    {title: "Post one", body: "This is post one"},
    {title: "Post two", body: "This is post two"},
]

// const promiseFunc = () =>{

//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//         let output = "";
//         posts.forEach(post=>{
//             output += `<li> ${post.title} and  ${post.body} </li>`
//         })
        
//         document.body.innerHTML = output;
//         resolve(output)
//     }, 2000);
// })
// }

async function promiseFunc() {
    let user = await [];
     setTimeout(() => {
        let output = "";
        posts.forEach(post=>{
            output += `<li> ${post.title} and  ${post.body} </li>`
        })
        document.body.innerHTML = output;
        user.push("Anas")
    }, 3000);
    return await user

}

// const url = "https://jsonplaceholder.typicode.com/todos"
promiseFunc()
.then(data => console.log(data))
.catch(err => console.log(err))
// createPostThree({title: "Post three", body: "This is post three"},()=>{
//     createPostFour({title: "Post four", body: "This is post four"},()=>{
//         createPostFive({title: "Post five", body: "This is post five"},getPosts)
//     })
// })


