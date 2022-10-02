;(function () {
  function importJs() {
    return new Promise((resolve, reject) => {
      const importJs = document.createElement('script')
      importJs.setAttribute('type', 'text/javascript')
      importJs.setAttribute('src', 'https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.5/dayjs.min.js')
      document.getElementsByTagName('head')[0].appendChild(importJs)
      setTimeout(() => {
        if (!!dayjs) {
          return resolve('加载成功')
        }
        reject('加载失败....')
      }, 4000)
    })
  }

  function replaceHtml() {
    const yesterday = dayjs().add(-1, 'day')
    const formatYesterday = yesterday.format(`M月D日`)
    const unixYesterday = yesterday.unix()
    const unixNow = dayjs().unix()

    const expireHours = Math.ceil(+(dayjs(unixNow - unixYesterday) / 60 / 58))

    const name = document.querySelector('.base-wrapper .travalBox-top .name')
    const travalBoxBottom = document.querySelector('.base-wrapper .travalBox .travalBox-bottom')
    const messageBox = document.querySelector('.base-wrapper .message')
    const travalBoxBottomHTML =
      '<div class="travalBox-left"><div class="top-info"><span>核酸检测结果</span></div><div class="yin"><div class="hour">48</div><div class="result"><div class="result-top">小时内</div><div class="result-bottom"> 阴性 </div></div></div></div><!----><!----><!----><!----><div class="travalBox-right"><!----><div class="common-label">疫苗接种</div><div><div class="span-blue">已接种 3 针剂</div></div></div>'
    const messageHTML = `<div class="message-left"><div class="label">最近核酸检测</div><div class="bgsj2">采样时间</div><div class="desc"> ${formatYesterday} <span class="bgsj">16:57</span></div></div><div class="message-right"><div class="label label2">距到期还剩</div><div class="desc"><span><span class="blue-hour">${expireHours}</span>小时 </span><span><span class="blue-hour">35</span>分 </span></div></div>`

    travalBoxBottom.innerHTML = travalBoxBottomHTML
    messageBox.innerHTML = messageHTML
  }
  function deleteElement() {
    const mp3Btn = document.querySelector('#mp3Btn')
    const mp3BtnFoo = mp3Btn.parentElement
    mp3BtnFoo.removeChild(mp3Btn)
  }
  function injectStyle() {
    var _style = document.createElement('style')

    var _head = document.querySelector('head')

    _style.innerHTML =
      '.base-wrapper .travalBox .travalBox-bottom{margin-top:.37333rem!important;align-items:center!important;min-height:2.66667rem!important;height:auto!important;display:grid!important;grid-template-columns:50% 50%!important;grid-template-rows:100%!important}.base-wrapper .travalBox .travalBox-bottom .travalBox-left{height:100%!important;background:linear-gradient(225deg,#1fa2f3,#31c564)!important;border-radius:.13333rem!important;margin-right:.21333rem!important;display:flex!important;flex-direction:column!important;justify-content:space-around!important;align-items:center!important;padding:.26667rem 0!important}.base-wrapper .message{margin-top:.42667rem!important;padding:.13333rem .26667rem!important;background:#fff!important;border-radius:.18667rem!important;display:grid!important;grid-template-columns:auto 50%!important;height:100%!important;justify-content:space-between}.base-wrapper .message .message-left,.base-wrapper .message .message-right,.base-wrapper .message .message-right2{text-align:center!important;display:flex!important;flex-direction:column!important;justify-content:space-around!important;align-items:flex-start!important}.base-wrapper .message .bgsj2{white-space:nowrap!important;margin:.26667rem auto!important;border:.02667rem solid #3cbaf9!important;color:#3cbaf9!important;border-radius:.4rem!important;padding:.10667rem .26667rem!important;text-align:center!important;font-size:.42667rem!important}'

    _head.appendChild(_style)
  }

  deleteElement()
  injectStyle()

  importJs()
    .then(res => {
      console.log(res)
      replaceHtml()
    })
    .catch(err => {
      console.log(err)
    })
})()
