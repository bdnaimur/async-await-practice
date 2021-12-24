
const posts = [
    {title: "Post one", body: "This is post one"},
    {title: "Post two", body: "This is post two"},
]

const createPostThree = (post,callback) =>{
    setTimeout(() => {
        posts.push(post)
        callback();
    }, 1000);
}
const createPostFour = (post,callback) =>{
    setTimeout(() => {
        posts.push(post)
        callback();
    }, 1500);
}
const createPostFive = (post,callback) =>{
    setTimeout(() => {
        posts.push(post)
        callback();
    }, 2000);
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
createPostThree({title: "Post three", body: "This is post three"},()=>{
    createPostFour({title: "Post four", body: "This is post four"},()=>{
        createPostFive({title: "Post five", body: "This is post five"},getPosts)
    })
})


