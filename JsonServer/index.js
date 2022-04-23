const {exec} = require("child_process");
const port = process.env.PORT || 3002;
const command = `json-server --watch db.json --port ${port}`;

exec(command, (err, stdout, stderr)=>{
    if(err){
        console.log("error running exec", err);
        return;
    }
    console.log("stdout:", stout);
    console.log("stderr:", stderr);
});