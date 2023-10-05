<script>
    let username = null;
    let password = null;

    const handleSubmit = () => {
        if (username != null && password != null){
            console.log(username,password)
        }
    }

</script>

<center class='login-form'>
    <body class='log-form-body'>
        <h1>Login</h1>
        
        <form class='log-form-group' on:submit|preventDefault={handleSubmit}>

            <div class="username">
                <label for="user-input">Username</label>
                <input class='user-input' type="text" bind:value={username} >
            </div>

            <div class="password">
                <label for="pass-input">Password</label>
                <input class="pass-input" type="password" bind:value={password}>
            </div>
            
            <div>
                <button class="log-but">Login</button>
            </div>
        </form>
        
        
        <div class='create-acc'>
            <a href="/create_account">Need an Account?</a>
        </div>
    </body>
</center>

<style>

.login-form{
    background-color: #f4f4f4;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 4%;
    line-height: 2em;
    height: 100vh;
    color: #555;
}

.create-acc a{
    color:black;
}

.create-acc a:hover{
    color: blue;
    cursor: pointer;
}

.log-form-body{
    background-color: white;
    float:none;
    width: 40%;
    font-size: x-large;
    padding: 2pc;
    border: 3px;
    border-radius: 5%;
    border-style: outset;
}

.log-form-group label{
    display:block;
    padding-right: 60%;
}

.log-form-group{
    padding: 8px;
}

.log-form-group input{
    width: 80%;
    height: 35px;
}

.log-form-group button{
    cursor: pointer;
    background-color:#555;
    width: 60%;
    border-radius: 2%;
    color: white;
    padding: 5px 10px;
    height: 30px;
    
}

.log-form-group button:hover{
    background-color: #1ab0ce;
}
</style>