<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let posts = [];

    let author = '';
    let content = '';


    const addPost = () => {
      let post = {
        id: 0,
        author: author,
      };
      posts = [...posts, post];
      author = '';
      content = '';
    }
</script>
<h1> Friends </h1>
<body>  </body>

<div class="feed">
    {#each posts as post}
      <div class="post" key={post.id}>
        <div class="post-header">
          <div class="avatar"></div>
          <div class="post-author">{post.author}</div>
            <p>0 friends</p>
        </div>
        <div class="post-actions">
          <div class="action">
            <i class="fas fa-thumbs-up like-icon"></i>
          </div>
          <div class="action">
            <i  class="fas fa-comment comment-icon"></i>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class ="create-post">
    <h1>Add a Friend!</h1>
    <input type="text" placeholder="put their name here" bind:value={author} />
    <button on:click={addPost}> Submit </button>
</div>

<style>
    body{
        background: #eaeaea;
        margin-top:0px;
    }
    .avatar {
      width: 3rem;
      height: 3rem;
      border-radius: 1%;
      background-color: #cccaca;
      margin-right: 10px;
    }
  
    .post-author {
      font-weight: bold;
      margin-left: 3.625rem;
      font-size: 0.875rem;
      font-weight: 600;
    }

   .create-post{
      position: fixed;
      bottom: 20px;
      right: 20px;
    }
    
    .friend-list,
    .img-grid-list {
        margin: -1px;
        list-style-type: none;
    }
    .profile-container {
        padding: 1.5625rem;
    }
    @media (max-width: 767px) {
        .profile-container {
            padding: 0.9375rem 0.9375rem 3.6875rem;
        }
        .friend-list > li {
            float: none;
            width: auto;
        }
    }
    .friend-list,
    .img-grid-list {
        margin: -35px;
        list-style-type: none;
    }
    .profile-info-list > li.img-list a img {
        max-width: 2.25rem;
        -webkit-border-radius: 2.5rem;
        -moz-border-radius: 2.5rem;
        border-radius: 2.5rem;
    }
    .friend-list .friend-img img,
    .profile-header-img img {
        max-width: 100%;
    }
    
    .friend-list {
        padding: 0;
    }
    .friend-list > li {
        float: center;
        width: 50%;
    }
    .friend-list > li > a {
        display: block;
        text-decoration: none;
        color: #000;
        padding: 0.625rem;
        margin: 1px;
        background: #fff;
    }
    .friend-list > li > a:after,
    .friend-list > li > a:before {
        content: "";
        display: table;
        clear: both;
    }
    .friend-list .friend-img {
        float: left;
        width: 3rem;
        height: 3rem;
        overflow: hidden;
        background: #efeff4;
    }
    .friend-list .friend-info {
        margin-left: 3.625rem;
    }
    .friend-list .friend-info h4 {
        margin: 0.3125rem 0;
        font-size: 0.875rem;
        font-weight: 600;
    }
    .friend-list .friend-info p {
        color: #666;
        margin: 0;
    }
</style>

<div class="profile-container">
  <div class="row row-space-20">
      <div class="col-md-8">
          <div class="tab-content p-0">

  
<div class="tab-pane fade active show" id="profile-friends">

  <ul class="friend-list clearfix">
      <li>
          <a href="#">
              <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
              <div class="friend-info">
                  <h4>Sancho Aldo</h4>
                  <p>392 friends</p>
              </div>
          </a>
      </li>
      <li>
          <a href="#">
              <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></div>
              <div class="friend-info">
                  <h4>Jonty Augusto</h4>
                  <p>128 friends</p>
              </div>
          </a>
      </li>
      <li>
          <a href="#">
              <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" /></div>
              <div class="friend-info">
                  <h4>Androkles Allen</h4>
                  <p>12 friends</p>
              </div>
          </a>
      </li>
      <li>
          <a href="#">
              <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" /></div>
              <div class="friend-info">
                  <h4>Ithamar Silvio</h4>
                  <p>1,923 friends</p>
              </div>
          </a>
      </li>
      <li>
          <a href="#">
              <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" /></div>
              <div class="friend-info">
                  <h4>Denzel Annas</h4>
                  <p>893 friends</p>
              </div>
          </a>
      </li>
      <li>
          <a href="#">
              <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" /></div>
              <div class="friend-info">
                  <h4>Kamil Cree</h4>
                  <p>983 friends</p>
              </div>
          </a>
      </li>
      <li>
          <a href="#">
              <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="" /></div>
              <div class="friend-info">
                  <h4>Fritjof Inderjit</h4>
                  <p>3,321 friends</p>
              </div>
          </a>
      </li>
      <li>
          <a href="#">
              <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" /></div>
              <div class="friend-info">
                  <h4>Sushil Trygve</h4>
                  <p>921 friends</p>
              </div>
          </a>
      </li>
      <li>
          <a href="#">
              <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
              <div class="friend-info">
                  <h4>Frans Gebhard</h4>
                  <p>944 friends</p>
              </div>
          </a>
      </li>
  </ul>
</div>
</div>
</div>
</div>
</div>