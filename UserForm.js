export const userForm = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>   
</head>

<body>
    <form action="/send" method="post" enctype="multipart/form-data">
        <input type="text" name="username" placeholder="enter user name">
        <input type="file" name="userfile">
        <button type="submit">Submit</button>
    </form>
</body>

</html>`;
