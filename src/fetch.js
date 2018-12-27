export function get(url,params) {
    let resetUrl = url;
    if(Object.keys(params).length > 0){
        let sendParams = '?';
        for(let key in params){
            sendParams += `${key}=${params[key]}&`
        }
        let resetParams = sendParams.slice(0,sendParams.lastIndexOf("&"));
        resetUrl = resetUrl + resetParams;
    }
    return fetch(resetUrl,{
        method: "GET",
        credentials: 'include'
    }).then((res) => {
        return res.text()
    }).then((response) => {
        return JSON.parse(response)
    }).catch((err) => {
        console.log("fetch get请求失败,18");
        console.log(err)
      })
}
// json 类型的post 传参
export function post(url,data) {
    return fetch(url,{
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        mode: "cors",
        cache: "force-cache"
    })
        .then((res) =>{
            return res.text()
        })
        .then((response) => {
            return JSON.parse(response)
        })
        .catch((err) => {
            console.log("fetch post请求失败")
        })

}

// formData 类型的post传参
// export function post(url,data) {
//     if(Object.keys(data).length > 0){
//         let formData = new FormData();
//         for(let key in data){
//             formData.append(key,data[key])
//         }
//         return fetch(url,{
//             method: 'POST',
//             body: formData
//         })
//             .then((res) =>{
//                 return res.text()
//             })
//             .then((response) => {
//                 return JSON.parse(response)
//             })
//             .catch((err) => {
//                 console.log("fetch post请求失败");
//                 console.log(err)
//             })
//     } else {
//         console.log("fetch post参数不能为空")
//     }
//
// }

// export function put(url,data) {
//     if(Object.keys(data).length > 0){
//         var formData = new FormData();
//         for(let key in data){
//             formData.append(key,data[key])
//         }
//         return fetch(url,{
//             method: "PUT",
//             body: formData
//         })
//             .then((res) =>{
//                 return res.text()
//             })
//             .then((response) => {
//                 return JSON.parse(response)
//             })
//             .catch((err) =>{
//                 console.log("fetch put传参失败");
//                 console.log(err)
//             })
//     } else {
//         console.log('fetch put参数不能为空')
//     }
// }