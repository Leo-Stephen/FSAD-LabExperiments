import React from 'react'

function Child(props) {
    function changeFun(){
        var name = document.getElementById("idname").value;
        var salary=document.getElementsByName("tb")[0].value;
        var location=document.getElementsByName("tb")[1].value;
        var age=document.getElementsByName("tb")[2].value;
        props.changeUser(name,salary,location,age)

    }
  return (
    <div>
        Name:<input type="text" id="idname" />
        <br />
        Salary:<input type="text" name="tb" />
        <br/>
        Location:<input type="text" name="tb" />
        <br/>
        Age:<input type="text" name="tb" />
        <br/>
        <button onClick={changeFun}>Update User</button>

      
    </div>
  )
}

export default Child
