
let instaPosts= document.getElementById('insta-posts')


let webPosts =""

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function renderPosts(){
    for(let i=0;i<posts.length;i++){
       let script =`<section class="post-space">
        <div class="user-post-info">
            <div class="user-profile-img">
                <img class="user-profile-pic-style" src=${posts[i].avatar} alt="Picture of artist's face">
            </div>
            <div class="user-title">
                <h2> ${posts[i].name}</h2>
                <p class="location">${posts[i].location}</p>
            </div>
        </div>
        <div class="picture-holder">
            <img   class="picture" src=${posts[i].post} alt="Artist's self portrait">
        </div>
        <div class="user-interaction">
        <div class="social-icons">
            <img class="social-icon" src="images/icon-heart.png" alt="Heart Icon">
            <img class="social-icon" src="images/icon-comment.png" alt="Comment Icon">
            <img class="social-icon" src="images/icon-dm.png" alt="DM Icon">
        </div>
        <p class="likes">${posts[i].likes} likes</p>
        <p class="comment">
            <span class="user">${posts[i].username}</span>
            ${posts[i].comment}
        </p>
    </div>
    </section> `
    webPosts+=script

    }
    instaPosts.innerHTML=webPosts

    
}

renderPosts()





