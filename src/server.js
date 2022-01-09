const needle = require("needle");

async function GetServerInfo(server, lang, version){
    let response = await needle("get",`https://version.common.freefiremobile.com/live/ver.php?version=${version}&lang=${lang}&device=android&channel=android&appstore=trial&region=${server}`);
    let resp = JSON.parse(response.body);
    let billboard_msg = resp.billboard_msg ? resp.billboard_msg : ""
    if(server || lang || version){
        if(resp.is_server_open == true){
            return {
                server,
                serverIsOpen:true,
                patchnotes_url: resp.patchnote_url,
                billboard_msg,
                currentVersion: resp.remote_version
            }
        }else{
            return {
                server,
                serverIsOpen:false,
                patchnotes_url: resp.patchnote_url,
                billboard_msg,
                currentVersion: resp.remote_version
            }
        }
    }else{
        throw new Error("Invalid Parameters");
    }
}
module.exports = GetServerInfo
