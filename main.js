let form = document.getElementById("addForm")
let itemlist = document.getElementById("items")
let filter = document.getElementById("filter")
form.addEventListener("submit",function(e){
    e.preventDefault()
    //console.log("xyz",e)
        let newitem = document.querySelector("#item").value 

        let li = document.createElement("li")
        
        li.className = "list-group-item"
      //add button  
        let btn = document.createElement("button")
       //button class 
        btn.className="btn btn-danger btn-sm float-right delete"
        //button symbol
        btn.appendChild(document.createTextNode("x"))

        li.appendChild(document.createTextNode(newitem))
        
        li.appendChild(btn)
       // console.log(li)
        
       itemlist.appendChild(li)
       
       document.querySelector("#item").value = '' //clear submit field
    
        })
       
       //delete Item logic
        itemlist.addEventListener("click",function(e){
       
            if(e.target.classList.contains("delete")){
       
                if(confirm("Do you want to do this?")){
       
                    itemlist.removeChild(e.target.parentElement)
       
                }else{
       
                    alert("No Timepass!!")
                }
            }
        })

filter.addEventListener("keyup",function(y){
    let text = y.target.value.toLowerCase()

     let items = document.getElementsByTagName("li")

     Array.from(items).forEach(function(content){
    let itemName = content.firstChild.textContent
    if(itemName.toLowerCase().indexOf(text) !=-1){
        content.style.display = "block"
    }else{
        content.style.display = "none"
    }
     })

})

        