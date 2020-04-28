
var fsmodule=require('fs');
fsmodule.stat(process.argv[2],process.argv[3], function(err){
    if(err){
        console.error("cant rename the file");
    }else
    {
        console.log("renamed syuccesssfully");

    }
}
)