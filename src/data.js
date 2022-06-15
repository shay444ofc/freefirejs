const needle = require("needle");

async function getAccountCreationDate(id){
    let response = await needle("get","https://server-shay444ofc.vercel.app/api/data/"+id);
    if(response.body.erro){
        throw new Error("Invalid ID.");
    }else{
        let strDate = new Date(response.body.data.replace(/[/]/ig,"-"));
        return {
            date: strDate,
            otherFormat: response.body.data.replace(/[/]/ig,"-").split("-").reverse().join("-"),
            original_api_date: response.body.data
        }
    }
}
module.exports = getAccountCreationDate
