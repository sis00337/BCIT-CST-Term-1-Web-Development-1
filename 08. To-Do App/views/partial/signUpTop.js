let top = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Page</title>
    <style>
        body { width: 50%; margin: 0 auto; font-family: Verdana, Geneva, Tahoma, sans-serif;}
        form {border: 1px solid teal; padding: 10px;}
        #imageNum {width: 170px;}
        p {color: red; font-weight: bold;}
        label { background-color: teal; color: white; padding: 3px;}
        h1 { background-color: teal; color: white; padding: 5px;}
    </style>
</head>
<body>
    <h1>To Do List App SignUP</h1>
    <form action="/signUp" method="POST">
        
        <label>Username</label>
        <input type="text" name='username' required='required'/><br> <br>
        
        <label>Password</label>
        <input type="password" name='password' required='required'/><br><br>

        <label>Image Number</label>
        <input type="number" id='imageNum' name='imageNum' min='1' max='99' required='required' placeholder='Enter between 1-99'/><br><br>

        <input type="submit" value="submit" />
    </form>
`;

module.exports = top;