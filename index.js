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

function addnewQualificationfield()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("AcaQualification");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let qualOb = document.getElementById("AcaQual");
    let qualfieldaddbutton = document.getElementById("QualButton");

    qualOb.insertBefore(newNode, qualfieldaddbutton);
}

function generateCV()
{
    let namefield = document.getElementById("userName").value;

    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = namefield;

    document.getElementById("nameT2").innerHTML = namefield;
    document.getElementById("contactT").innerHTML = document.getElementById("Contact").value;
    document.getElementById("addressT").innerHTML = document.getElementById("Address").value;
    document.getElementById("EadressT").innerHTML = document.getElementById("Eaddress").value;
    document.getElementById("LinkT").innerHTML = document.getElementById("LAddress").value;
    document.getElementById("InsT").innerHTML = document.getElementById("IAddress").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("object").value;
     
    //work field

    let wes = document.getElementsByClassName("workfield");
    let str="";

    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("workexpT").innerHTML = str;

    let quals = document.getElementsByClassName("workfield");
    let btr="";

    for(let e of btr)
    {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("qualT").innerHTML = btr;

}

function printCV()
{
    
}