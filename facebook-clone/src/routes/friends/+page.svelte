<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>
<h1> Friends </h1>
<body>  </body>

<div class="button">
  <span class="plus">+</span>
  <span class="text">Add Friend</span>
</div>

<style>
    h1 {
        font-size: 3em ;
        font-family: 'Fantasy', 'Times New Roman', Times, serif;
        color: black;
    }
    body {
        font-family: sans-serif;
        width: 100%;
        height: 100%;
        margin: 0;
    }

    #friend-list { 
        display: block;
        margin: 0;
        padding: 0;
        width: 300px;
        height: 100%;
        background: #EEE;
        list-style-type: none;
    }

    .friend {
        width: 300px;
        height: 60px;
        background: #EEE;
        border-bottom: 1px solid #DDD;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .friend img {
        width: 45px;
        height: 45px;
        border-radius: 30px;
        border: 2px solid #AAA;
        object-fit: cover;
        margin-left: 5px;
        margin-right: 10px;
    }

    .friend .name {
        font-size: 18px;
    }

    .friend.selected {
        background: #43A047;
        color: white;
    }

    .friend.selected img {
        border-color: white;
    }

    .friend:not(.selected):hover {
        background: #DDD;
    }
    .button {
    background-color: rgb(78, 180, 203);
    width: 50px;
    height: 50px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
    overflow: hidden;
    cursor: pointer;
    color: #fff;
   }
   .plus, .text {
    position: absolute;
    transition: .3s;
   }
   .button:hover {
    width: 100px;
    transition: .3s;
   }
   .button:hover .plus {
    opacity: 0;
    transition: .3s;
   }
   .text {
    opacity: 0;
   }
   .button:hover .text {
    opacity: 1;
    transition: .3s;
   }
</style>

<ul id='friend-list'>
    <li class='friend selected'>
      <img src='https://i.imgur.com/nkN3Mv0.jpg' />
      <div class='name'>
        Andres Perez
      </div>
    </li>
    <li class='friend'>
      <img src='https://i.imgur.com/0I4lkh9.jpg' />
      <div class='name'>
        Leah Slaten
      </div>
    </li>
    <li class='friend'>
      <img src='https://i.imgur.com/s2WCwH2.jpg' />
      <div class='name'>
        Mario Martinez
      </div>
    </li>
    <li class='friend'>
      <img src='https://i.imgur.com/rxBwsBB.jpg' />
      <div class='name'>
        Cynthia Lo
      </div>
    </li>
    <li class='friend'>
      <img src='https://i.imgur.com/tovkOg2.jpg' />
      <div class='name'>
        Sally Lin
      </div>
    </li>
    <li class='friend'>
      <img src='https://i.imgur.com/A7lNstm.jpg' />
      <div class='name'>
        Danny Tang
      </div>
    </li>
  </ul>
