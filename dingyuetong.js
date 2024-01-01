#!name= 订阅通
#!desc=

[Script]
订阅通= type=http-response,requires-body=1,max-size=0,pattern=^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$,script-path=https://raw.githubusercontent.com/Guding88/Script/main/dingyuetong.js

[MITM]
hostname = %APPEND% buy.itunes.apple.com
