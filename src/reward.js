const needle = require("needle");

async function redeemCode(options){
    if(!options || typeof(options) != "object"){
        throw new Error("Invalid parameters.");
    }else{
        if(options.token && options.code){
            let token = options.token;
            let code = options.code;
            let request = {
                headers:{
                    "content-type":"application/json",
                    "accept":"application/json, text/plain, */*",
                    "access_token":token
                }
            }
            let body = {
                "serialno":code
            }
            let errorCode = {
                "1":"error_invalid_serialno",
                "2":"error_invalid_token",
                "3":"error_too_many_requests"
            }
            let respons = await needle("post","https://prod-api.reward.ff.garena.com/redemption/api/game/ff/redeem/",body, request);
            let response = JSON.parse(respons.body);
            if(response.msg == errorCode["1"]){
                return {
                    codeIsValid:false,
                    success: false
                }
            }else if(response.msg == errorCode["2"]){
                throw new Error("Invalid token.");
            }else if(response.msg == errorCode["3"]){
                return {
                    error:"too many requests",
                    codeIsValid:false,
                    success: false
                }
            }else{
                return {
                    codeIsValid:true,
                    success: true
                }
            }
        }else{
            throw new Error("invalid options.");
        }
    }
}
module.exports = redeemCode