var body = $response.body
var obj = JSON.parse(body)

//过期标志
obj.obj.expireFlag = false

obj.obj.nucleicInfo.expireHour = 48
//过期时间
// obj.obj.nucleicInfo.expireTime = '2022-10-15 22:34:32'
obj.obj.nucleicInfo.expireTimeStamp = '1665844472000'

//采样时间
// obj.obj.nucleicInfo.samplingTime = '2022-10-1 16:57:52'
obj.obj.nucleicInfo.sampleTimestamp = (Date.now() - 1254930313).toString()


obj.obj.vaccineInfo.vaccinateCount = 4

body = JSON.stringify(obj)

$done(body)
