 document.getElementById("submit").onclick = function() {
        let username = document.getElementById("username").value;
        let pass = document.getElementById("pass").value;

        if (username == "" || pass == "") {
            document.getElementById("alert").style.display="block";
        } 
        else
        {
            const button = document.getElementById("submit");

            const newdiv = button.parentElement.parentElement.parentElement.parentElement.children[2].children[0].children[0].cloneNode(true);

            newdiv.children[2].innerHTML = username;
            newdiv.children[4].innerHTML = pass;
           newdiv.style.display = "block"; button.parentElement.parentElement.parentElement.parentElement.children[2].children[0].append(newdiv);
            document.getElementById("username").value="";
            document.getElementById("pass").value="";
        }
    }
    document.getElementById("close").onclick = function()
    {
        document.getElementById("alert").style.display = "none";
    }