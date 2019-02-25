var myInput = document.getElementById('input');
var addTask = document.getElementById('addTask');
var mylist = document.getElementById('listOfTasks');

addTask.onclick = () => {

    if(myInput.value !== "") {
        var text1 = myInput.value;
        myInput.value = "";
        var newLi = document.createElement('li'); // new task
        var newDiv = document.createElement('div'); // create a span to store content with checkbox and words
        var newImg = document.createElement('img'); // create an img of deleting the task(in li next to a span)
        var newCheck = document.createElement('input'); 
        var newP = document.createElement('p'); // create a content with words

        newImg.className = "myImages";
        newImg.src = "images/recycle.png"; // ????????????
        newImg.style.height = "40px";
        newImg.style.position = "relative";
        newImg.style.cssFloat = "right";
        newImg.style.bottom = "47px";
        newImg.style.right = "5px";
        
        

        newCheck.className = "myCheckboxes";
        newCheck.type = "checkbox";
        newDiv.className = "myDivs";   
        newP.className = "myTasks";
        
        var text2 = "";
        
        let limit = 0;
        for(let i = 0; i < text1.length; i++) {
        
        text2 += text1[i];
        limit++;    
        if(limit === 35) {
            text2 += "\n";
            limit = 0;
        }  
        }     
        text2 = text2.replace(/\n/g, '<br>');   
        
        

        
        newP.innerHTML = text2; // store words from input to tag <p>
        newCheck.onclick = taskDone; // before putting them into blocks give them appropriate functions
        newImg.onclick = deleteTask; // every block(something) gets 1 type of function that is unique for each of them 
        newDiv.appendChild(newCheck);
        newDiv.appendChild(newP);
        newLi.appendChild(newDiv);
        newLi.appendChild(newImg);
        mylist.appendChild(newLi);

        
        
        
        



    }
    
    else alert("Your input must not be empty!");
   

}
var taskDone = (task) => {
    
    if(task.target.checked) {
        var v = task.target.parentNode;
        v.className = "doneDivs";
        console.log(`This is a parent: ${v.className}`);
    }
    else{
        var v = task.target.parentNode;
        v.className = "myDivs";
    }
    console.log(`This is a target: ${task.className}`);   
    
}

var deleteTask = (task) => {
    
    task.target.parentNode.remove();
}