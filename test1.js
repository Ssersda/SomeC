var body = $response.body;
var obj = JSON.parse(body);

//过期标志
obj.obj.expireFlag=false

obj.obj.nucleicInfo.expireHour = 24
obj.obj.nucleicInfo.expireTime = "2022-10-15 22:34:32"
obj.obj.nucleicInfo.expireTimeStamp='1665844472000'
obj.obj.vaccineInfo.vaccinateCount=4
body = JSON.stringify(obj);


$done(body);
