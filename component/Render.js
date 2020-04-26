// 课程
let courseUlData = '';
JSON.parse(data).map((item,key)=>{
    courseUlData+= ' <li onclick=skip("course","'+item.id+'")>'+item.name+'</li>'
})
$(".courseUl").append(courseUlData)