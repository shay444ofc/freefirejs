const needle = require("needle");

async function GetVersion(){
    let response = await needle("get","https://server-shay444ofc.vercel.app/api/version");
    let versionInfo = response.body;
    if(versionInfo.news == "true"){
        return {
            newVersionAvailable:true,
            newVersion:versionInfo.version,
            currentVersion:versionInfo.last
        }
    }else{
        return {
            newVersionAvailable:false,
            currentVersion:versionInfo.last
        }
    }
}
module.exports = GetVersion();
