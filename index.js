function addnewField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workfield");
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter here");
    
    
    let weOb = document.getElementById("workexp"); 
    let workfieldaddButton = document.getElementById("workaddbutton");

    weOb.insertBefore(newNode, workfieldaddButton);
}