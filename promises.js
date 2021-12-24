
const posts = [
    {title: "Post one", body: "This is post one"},
    {title: "Post two", body: "This is post two"},
]

const createPostThree = (post) =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
           
            const error = false;
            if(error){
                reject("Something went wrong")
            }
            else{
                resolve()
            }
        }, 1000);
    })
}
const createPostFour = (post) =>{

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
           
            const error = false;
            if(error){
                reject("Something went wrong")
            }
            else{
                resolve()
            }
        }, 2000);
    })
}
const createPostFive = () =>{

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            posts.push({title: "Post five", body: "This is post five"})
           
            const error = false;
            if(error){
                reject("Something went wrong")
            }
            else{
                resolve()
            }
        }, 2500);
    })
}
const getPosts = () =>{
    setTimeout(() => {
        let output = "";
        posts.forEach(post=>{
            output += `<li> ${post.title} and  ${post.body} </li>`
        })
        
        document.body.innerHTML = output;
    }, 500);
}

createPostThree({title: "Post three", body: "This is post three"})
.then(()=>createPostFour({title: "Post four", body: "This is post four"}))
.then(createPostFive)
.then(getPosts)
.catch(err =>{console.log(err);});
// createPostThree({title: "Post three", body: "This is post three"},()=>{
//     createPostFour({title: "Post four", body: "This is post four"},()=>{
//         createPostFive({title: "Post five", body: "This is post five"},getPosts)
//     })
// })


