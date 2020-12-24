let top = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>To do List</title>
    <style>
        body { width: 50%; margin: 0 auto; font-family: Verdana, Geneva, Tahoma, sans-serif;}
        form {border: 1px solid teal; padding: 10px;}
        label { background-color: teal; color: white; padding: 3px;}
        h1 { background-color: #1e90ff; color: white; padding-left: 5px; padding-top: 20px; padding-bottom: 20px;}
        a {font-size: 16px;}
        #allItems {margin-left: 100px;}
        #myItems {margin-left: 160px;}
    </style>
</head>
<body>
    <h1>To do Items <a href="/login">Logout</a></h1>
    <a href="/list/all" id='allItems'>All Items</a>
    <a href="/list/mine" id='myItems'>My Items</a>
    <form action='/list/all' method="POST">
        <input type='text' name='item'>
        <input type="submit" value="submit" />
    </form>
    <br>
`;

module.exports = top;