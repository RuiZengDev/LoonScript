[Script]
http-response ^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ script-path=https://raw.githubusercontent.com/Guding88/Script/main/dingyuetong.js, requires-body=true, timeout=10, tag=订阅通

[MITM]
hostname = buy.itunes.apple.com
