var body = $response.body
var obj = JSON.parse(body)

function formatDate(time = +new Date()) {
  var date = new Date(time + 8 * 3600 * 1000)
  return date.toJSON().substr(0, 19).replace('T', ' ')
}

//过期标志
obj.obj.expireFlag = false

obj.obj.nucleicInfo.expireHour = 48
//过期时间
const myExpireTimeStamp = Date.now() + 1000 * 60 * 60 * 24 * 1
obj.obj.nucleicInfo.expireTime = formatDate(myExpireTimeStamp)
obj.obj.nucleicInfo.expireTimeStamp = myExpireTimeStamp.toString()

//采样时间

const mySampleTime = Date.now() - 1000 * 60 * 60 * 24 * 1
obj.obj.nucleicInfo.samplingTime = formatDate(mySampleTime)
obj.obj.nucleicInfo.sampleTimestamp = mySampleTime.toString()

obj.obj.vaccineInfo.vaccinateCount = 4

body = JSON.stringify(obj)

$done(body)
