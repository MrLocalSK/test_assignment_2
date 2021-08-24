const { error } = require('console');
const express = require('express')
const app = express();
const fetch = require('node-fetch');
const emp_data = require('./employee.json')
const pro_data = require('./project.json')
const port = 3000;

app.get('/employee/:id', function(req, res) {
    emp_id = req.params.id
    for(let emp of emp_data)
    {
        if(emp['employee_id'] == emp_id)
        {
            return res.json(emp)
        }

    } 
    return res.json({"Details" : "Employee details not found"});
});

app.get('/project/:id', function(req, res) {
    pro_id = req.params.id
    for(let pro of pro_data)
    {
        if(pro['project_id'] == pro_id)
        {
            return res.json(pro)
        }

    } 
    return res.json({"Details" : "Project details not found"});
});

app.get('/getemployeedetails/:id', async (req,res) => 
{
   let id = req.params.id
   let employheeData = await fetch(`http://127.0.0.1:3000/employee/${id}`)
    .then(res => res.json())
    .then(json =>{ return json;});
   let projectData = await fetch(`http://127.0.0.1:3000/project/${employheeData['project_id']}`)
    .then(res => res.json())
    .then(json => { console.log(json)
        return json; });
    console.log({employheeData,projectData})
    return res.json({employheeData,projectData});
    
})


app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});