
<div class="header">
    <div class="main-header">
        
        <div class="title">
           Not Facebook 
        </div>
    </div>
    <div class="topnav">
      <a class="active" href="/">Home</a>
      <a href="/friends">Friends</a>
      <a href="/about">About</a>
    </div> 
</div>




<style>
  .main-header{
        background-color: #519df4;
        padding: 2rem;
    }

    .title{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 3rem;
    }
    /* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #59576c;
  color: white;
}
</style>

<slot></slot>