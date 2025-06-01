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

const feedEl = document.getElementById('feed')

// call function

renderPosts()

function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        let name= posts[i].name
        let location = posts[i].location
        let username = posts[i].username
        let avatar = posts[i].avatar
        let post = posts[i].post
        let caption = posts[i].comment
        let likes = posts[i].likes

        let newPost =
            `<div class="post">
                <div class="profile-info">
                        <img src=${avatar} alt="" class="profile-avatar">
                        <h2>
                            ${name}
                            <span>${location}</span>
                        </h2>
                </div>
                <div class="post-content">
                    <img src=${post} alt="" class="post-img">
                    <div class="post-info">
                        <div class="post-icons">
                            <img src="images/icon-heart.png" alt="" class="icon">
                            <img src="images/icon-comment.png" alt="" class="icon">
                            <img src="images/icon-dm.png" alt="" class="icon">
                        </div>
                        <p>
                            <span id="likes">${likes}</span> likes
                        </p>
                        <p>
                            <span id="user-name">${username}</span>
                            <span id="caption">${caption}</span>
                        </p>
                    </div>
                </div>
        </div>
    `
    feedEl.innerHTML += newPost

    }
}
