/*


九章头条刷广告， 5分钟一次/10分钟一次
使用方法把token放到下面的引号里面，可无限扩展...... 尽量本群内部使用 骚年们 刷起来吧

[task_local]
# 九章头条刷广告
0,10,20,30,40,50 8-20 * * * jztt_ad.js, tag=九章头条刷广告 , enabled=true

*/

let jzttapp = process.env.JZTT_Token
if (jzttapp) {
    
} else {
    console.log(`请设置环境变量 [JZTT_Token] 单位毫秒 export JZTT_Token='[{},{}]');
    return
}


const _0x518d=['woBLLlw=','b8Kow6DCt8ORwoTCiHcq','OsKmwp05Q8KHCCAxw5UzH8KawonDosK/Mks8wpfCtsKq','csK/w5g=','dgnCig==','wrHDtHgIwqU=','FWvDgsKCwrjCnCRHw5VsDhoE','wq3DksKKBQ==','wrHChXrDjkwS','VGEtwpx6wrU=','wrHDvWUPwqFvIQ==','bwzCgHk=','HnfDtMOJwrnCmQI=','wq7ChmTDgw==','acKuw60=','w6XCh8K0wrA+wqkFw5gz','FxB9CsObHis=','wqrDvXAPwqVpMw==','fMKvwohjw5U8w7w=','JcKbLcOnwpp7w6osw5F1','SCvDgMK5','EklCwrw=','5b285aeT5our6KKr56+x','XXR7KFTCuMKvwrfCmMO6f8KCw7DCoA==','LGpiwr3DnjhAYA==','w7PCk8O1w5QWKsOgw7PDtmg=','w43CkCLCgA==','5YyZ5biO5ZGj','6YWf5bqMN/CbnpU=','UTnDuMK+QEg=','P8O/6Ze06K+iwqE=','IG53wrjDvSNf','wqzCkn7DuEwUQ0zDjg==','5oKD5Zet5L2J6I++5b64','L2Ri','w5MXfgTDtlMvFcO+EcOmw63DrcKD8JCRuueytue6q+mCjOefvvC4gJlxw60swpvCs8OeFcKywrXCsz7DgCJS','EVZR','G33DuMKRwrzClA==','FAHCtcKv','b8Kkw4NvwpnCglHCgsKmQg==','eMKuw4RI','woMQXSpH','w6fCmBNBQmTDkjjCmg==','w7/ChcOsw48jMcOn','egnCnsO8wqDCtQ==','woEBXTo=','w6LCv8O5XTbClcOr','C8KaPQ==','w6nCtcOq','YsOTacK4wrpswojDsQ==','dcKvw5DCsMOEwr7CuQ==','w7TCkG9zw5E/','cwDCjHjDkhXCgA==','wrLCgn7DjFsO','asOXPWQQ','w7zDrVx7Ig==','wqsnwoXCpcK4w5nCrsOmwop7','acOKG3IfVsKjO8KJwrbCglwE','wogRw6k=','wqEowoDCvQ==','JMOh6Zau6K+Tw50=','KAvCgsOoWMOBwpA=','wrHCl2TDmA==','w5jDpcOAVcOEwocmY1TDlA==','w7XCkcK5wqYswrM4w4Q5wqA=','FwvCssKtw65p','HBptL8OJAhE8wp0F','ZcKxw5h+','fsK6wolkw6Fjw6XDolg=','w6zCqcODVjPChA==','L25iwpHDsT9ZccKTw5o=','EVEWK8K3wqM=','w6DCtMO7','w5HCnjE=','csOXFQ==','woAfw7oN','wrfClEPDnl0BTw==','Z8K1w5x6UcKHHw==','wrE9wp7CuMKRw5HCs8OFwp0=','a2Q7wrlSPsKp','w5zDrsOaT8OXwpo=','CHfDp8KCwrPDhQ==','EjFXFA==','wpXCscOXw6gKUjYrdA==','woBWPAFTEQ==','YcOIdMKpw5AlwoDDsS5CwoHCkHpXwqbDm8Os','dMObw6JADg==','w4nCnMKzw7plPA==','5Lum6LWP5Y+0','w4bDpDNEZMOQw70=','JsKfLcKi','C1Y7MMKtwr7DhQUNSg==','GQZFIcOVBA==','w7HCjEQ=','w67Chk14','GVIqKMKxwq7Dpx4AQBxoVcKDcV3DsMKDBlPDucK2YWLCnRAKw47CnsOiMGwz','wqIcb8Oj','GDBpD1MELg==','CE0pMA==','wpxPMFbCpxh3','ecK1w4JxRMKM','TCPDmcK0QFPDlg==','eMK9w7XCpMOjwrnCjX8=','5Lqf56qp5aeY5p6w','w6JNMg==','Y8Ofw6R7BMO/wrfChg==','AhfCv8OpT8OIwoErccK5YsOY','RsOQY8O8JcKbfBbDq2c=','wpwUWiZDw4DCjg==','W2U+wrZ9wqBz','RMONcsOS','w6/Ck8O4w4U3LMO6w5PDvA==','w6zDo0JsMcOg','wp4QXSE=','wqXDvWUPwqFvIQ==','cMOIw7le','ASJKCVc=','UGsrwr1twrVo','w7nCgld9','Xy/DgMKZQFPDkAM=','wpZ5YS8=','ZMKuw5B5wo7Ckw==','w6fDvll+eAI=','d8OLI3MbfsKS','Wn5kG1s=','w4PDpjdEeg==','w7fCgxxQV0Q=','wq7DlsKKLsKQwojCrMKMdMOIXx/Dgg==','w7DDtkJp','wogRw6oNR8KXw7/CrB5R','bsOXfMK9wpl3wpc=','YMKkw5ZYwpnCk00=','w6nDomM=','w57DssOGTcOZwpE/e0g=','w7rChld4w58lOA==','w4jDuSlVe8KGwqvClMOzwrkPwr7Cn08Hw5bDvcOCwpMBwrnDgcO9a0DCizLCoXrDuSBucQ==','wr/DnMKaFA==','w4fDqClTacOQ','ZMOQX0U0PMKwP8OBwq3CmlwUZMKJZMOiB1s=','XWA8','wq1FLFLCogtYScKx','TcOac8OQP8KdVhHDq2A=','DTt3UEbCtcO2wpxBbsOVw7k=','JiBtVBnDtMKtw59jJcOLwqjCtRRAaW/DkMKtXz/Dl3zCpsKP','d8K/w4hv','dArCiMO7wpLCqcK9','w5PDvMOEQw==','fBXCmQ==','w6rDonl0','wrLDuWUD','GlZC','OsKRPsKZwpxkw6Q1w5lkVBU=','CktfwrsPTX9Vw6o=','w4jCgzo=','bcOME2UR','wrrDlsKK','SG84wqpt','BjFRDlcsHy9wUjg+Jg==','w7XCjcO5w458MMOmw5o=','DgHCr8K1','KAvCncOyRcOI','DUxFwqc=','LGpiwr0=','w6bCu8O5Wj8=','McKbLcKMwox4w6kew51xSQ==','DR3CiMK0w6tg','5byu5aea5Yi4','SCXDh8Kl','FixM','LR3Cv8O6XsOO','fxvCmcO0','wodZD1bCpAA=','AA/CssK6w4lswo8K','wqnDnMKtGcKNwo7CqcKC','w6LCvMKJ','w6LDonBUbhU=','SXR7','Si/Dh8K+Q1DDhw==','w7XChkJ4w5sjKg==','wpZ0dzU=','wptEJ1zCrQd8TcKn','wqs6wr3CpMKew5jCgg==','dsOTb8Kqwpk=','cGQuwrlWOMK7','w6DCgwdUXh3DmDrCkFg2w5A=','wq3CgmTChkwJRVfDk8Kf','w4zDojo=','wqnChnnDnw==','GlxC','UTnDp8KkXUHDhw==','OsKbN8Ktwo18','w7HCmcKgwrkxwqMKw4k+wqwzw4bCo8OPwqTCjsOfw6LCokfDpsO3wqLCjCLCisK1QMKeXsKRw4rDsg==','w6rDqFJ/NsOlwqfCo8Ou','wplLKk0=','w77CnMOow4E=','C1c4N8Kswr8=','MgzCo8O0RMOBwpxgXA==','w5XChSLCmHTCqE5DwoEgw7dUQD88wqJ8w5oCw7htwqF8FQ==','w73Cnz5cWV4=','wrsHScOQcMO7woQ=','woRFKlc=','w7PCiQZ+WV7Djz0=','5LmO6LWI5Yyx','w4rDr8OAUsOVwpAUbls=','wo3DvMKtOQ==','GDB0FV0E','woV5Zj/Cj8KEVw==','w7bCjMKkwrYw','wo7CqEPDvw==','wrAswpzCvcKew5XCvw==','IWV/wqjDnz5YQMKYw58=','5L6A5oyP5Lyo5LiL','b2/CgQ==','ZW/CkXJtEzLDhA==','wox9fz4=','Y8Ofw6Q=','VBNvMMKFLw==','wqFGJwlCBlMACMOAVcK9wpd9ZGxMwq7DtMOawoYQwqbDqg89bwnCrQ==','wpYbw74AVcKcw4U=','XcOXHW0TdQ==','dwrCig==','w4JR5byp5aaCDg==','Z3rCkHUhMzLDhA==','w73CnyNGV17Dow==','w6zCqcOcTDbCj8OS','w7fDo1d+NcO+wro=','CQvCosKyw64owpYdwoE=','HBpoKsOeCzou','w7TCkG1zw5o0','YcK4w4l4','w7nCmsKewro8wqU=','w7hbMA==','fMKjw6JzVcKAKCw2w5MzBcKY','ccKxw5h3','XcOXHHIffsK+esKgwoDClVUTNw==','ccKwwol0','w47DuMOdTMODwpsb','w7PCiQZFV1w=','5p+T5YmG5Zm46KyU6ZeB5pSW5o2E5LiG56uA77+26K6l5qOL5p206IaW6Lqj6K2D5aag57+w57qa5oKK5YWH','w7TCkGJuw4wwIA==','w7vDp0J7','w4vCmMKww7g=','bMKgw4Nd','LgjCtMOzf8OUwpk=','SzrDmMK4Ww==','GQZaO8OIDSs=','woPCtMOZw6we','X2s+wpRhwqluwog1w6E=','wpFoYDLCgMKX','McKbLcKewpB5w6A=','VsK/w4JiVcKKDmQVw5gqFA==','w7jDo0JXP8Oiwr3Crg==','Sy/DgMKnTko=','w4nDvg5QesObw6E=','R2JcC0fCs8K/','w63CllB0','D1AzMMK9wovDrwYMfAspTg==','WHBjC1DCksK1wqDClcOwdA==','SCvDhsKiSg==','csObcMK8wpNwwpA=','wrDDvWEHwqF4JQ==','AiZWHg==','ZcOZacK2woliwow=','T8KNw5nClsOkwoDCsQ==','S3o4wrBmwqA=','GTdMCg==','QQh5Nw==','dBXCmW8=','d8OLPmkVfg==','wqUaTcOgwprDig==','XG8+wrg=','EhptNw==','dcOGfMKtwol2wqfDuyxL','wpARw50YRsKWw47CrA==','wqIbacOR','asOXIXII','cgnCo8OwwqLCv8KDwqwSw6AXNAA=','wqAGZ8Ouwo3DhxxpasOd','wqkHdQ==','cgnCocO6wqjCtQ==','VcOdcsOf','GEFTwqw=','wq8swpjCucKQw5I=','GDB2H1cOJCZicygkIA==','asOdesKq','w63Do0V1PMO6wqw=','cMKowok=','w7TCkHJpw58/AQ==','w7bChkZswpMwNcKOwqFb','wopLN1g=','w5rClCLCvCfDqgQ=','wqUaUMO6wozDiCY=','YXnCu3RoIw==','wo5zdQ==','wrXDh8KKHcOFw4jDqA==','GlxCwpwJW3dRw78=','IXhFwqnDqjZJ','wqDCvMObw6waQgcsf8KfdTPChsK/c8OgwrfDp8KZwrzDq2klHl3CtMKjw40Hw4IOfcO5ajpJbg==','w7XCh8Km','MMKbLcKpwpE=','IXhYwrPDvDQ=','cMOfw6NH','w5zCkyU=','DVhEwrwP','eA7Ch33DhQ==','f8Kzw67CrsOMwrXCq3s9','wo1KKBs=','FgvCp8K/','wrHDnMKZ','w6DCosOkSiPCksOZUcOUCw==','w43DvMObVcOV','wqcGdg==','ScOQdsOVKcKHeg==','w7PDo1h9JMOk','SXR7KlzCucK/','e8K6woxpw6U8w6M=','w7HCjERv','OsKRPsK5','w5jCiT/CmzrDtDJUwplx'];(function(_0xf9dd13,_0x518d12){const _0x423bb6=function(_0x498e1c){while(--_0x498e1c){_0xf9dd13['push'](_0xf9dd13['shift']());}};_0x423bb6(++_0x518d12);}(_0x518d,0xa5));const _0x423b=function(_0xf9dd13,_0x518d12){_0xf9dd13=_0xf9dd13-0x0;let _0x423bb6=_0x518d[_0xf9dd13];if(_0x423b['kgbnhU']===undefined){(function(){const _0x5471cf=function(){let _0x3330ad;try{_0x3330ad=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x484112){_0x3330ad=window;}return _0x3330ad;};const _0x3920ca=_0x5471cf();const _0x1c380e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3920ca['atob']||(_0x3920ca['atob']=function(_0x4592fc){const _0x207446=String(_0x4592fc)['replace'](/=+$/,'');let _0x396040='';for(let _0x11e2cc=0x0,_0x3e0eb2,_0x3ef294,_0x5b3a6a=0x0;_0x3ef294=_0x207446['charAt'](_0x5b3a6a++);~_0x3ef294&&(_0x3e0eb2=_0x11e2cc%0x4?_0x3e0eb2*0x40+_0x3ef294:_0x3ef294,_0x11e2cc++%0x4)?_0x396040+=String['fromCharCode'](0xff&_0x3e0eb2>>(-0x2*_0x11e2cc&0x6)):0x0){_0x3ef294=_0x1c380e['indexOf'](_0x3ef294);}return _0x396040;});}());const _0x19dd2a=function(_0x56ed1c,_0x3e4ff3){let _0x53d2cf=[],_0x1e9e24=0x0,_0x572f57,_0x182ddf='',_0x530ae7='';_0x56ed1c=atob(_0x56ed1c);for(let _0x29dbba=0x0,_0x15d6f1=_0x56ed1c['length'];_0x29dbba<_0x15d6f1;_0x29dbba++){_0x530ae7+='%'+('00'+_0x56ed1c['charCodeAt'](_0x29dbba)['toString'](0x10))['slice'](-0x2);}_0x56ed1c=decodeURIComponent(_0x530ae7);let _0x23b82a;for(_0x23b82a=0x0;_0x23b82a<0x100;_0x23b82a++){_0x53d2cf[_0x23b82a]=_0x23b82a;}for(_0x23b82a=0x0;_0x23b82a<0x100;_0x23b82a++){_0x1e9e24=(_0x1e9e24+_0x53d2cf[_0x23b82a]+_0x3e4ff3['charCodeAt'](_0x23b82a%_0x3e4ff3['length']))%0x100;_0x572f57=_0x53d2cf[_0x23b82a];_0x53d2cf[_0x23b82a]=_0x53d2cf[_0x1e9e24];_0x53d2cf[_0x1e9e24]=_0x572f57;}_0x23b82a=0x0;_0x1e9e24=0x0;for(let _0x29108a=0x0;_0x29108a<_0x56ed1c['length'];_0x29108a++){_0x23b82a=(_0x23b82a+0x1)%0x100;_0x1e9e24=(_0x1e9e24+_0x53d2cf[_0x23b82a])%0x100;_0x572f57=_0x53d2cf[_0x23b82a];_0x53d2cf[_0x23b82a]=_0x53d2cf[_0x1e9e24];_0x53d2cf[_0x1e9e24]=_0x572f57;_0x182ddf+=String['fromCharCode'](_0x56ed1c['charCodeAt'](_0x29108a)^_0x53d2cf[(_0x53d2cf[_0x23b82a]+_0x53d2cf[_0x1e9e24])%0x100]);}return _0x182ddf;};_0x423b['GtDwOk']=_0x19dd2a;_0x423b['wcMWqx']={};_0x423b['kgbnhU']=!![];}const _0x498e1c=_0x423b['wcMWqx'][_0xf9dd13];if(_0x498e1c===undefined){if(_0x423b['HrkvhP']===undefined){_0x423b['HrkvhP']=!![];}_0x423bb6=_0x423b['GtDwOk'](_0x423bb6,_0x518d12);_0x423b['wcMWqx'][_0xf9dd13]=_0x423bb6;}else{_0x423bb6=_0x498e1c;}return _0x423bb6;};const $=new Env(_0x423b('0x101','mYGc'));const logs=0x0;let tz=$['getval']('tz')||'1';var hour='';var minute='';const headers={'Accept':_0x423b('0x42','D#5$'),'Origin':_0x423b('0x20','EJ[g'),'Accept-Encoding':_0x423b('0xef','iQsV'),'Content-Type':_0x423b('0xf9','B0YZ'),'Referer':_0x423b('0x129','b*YR'),'Host':'api.st615.com','User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2015_1\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148','Accept-Language':_0x423b('0x124','Op8Z'),'Connection':_0x423b('0x7b','^$#]')};if($[_0x423b('0x41','kn(%')]()){sqxsapp=JSON[_0x423b('0x136','^qHS')](process[_0x423b('0x125','^qHS')][_0x423b('0x62','VBJI')]);hour=new Date(new Date()[_0x423b('0x54','Jd2b')]()+0x8*0x3c*0x3c*0x3e8)['getHours']();minute=new Date(new Date()[_0x423b('0x95','M70C')]()+0x8*0x3c*0x3c*0x3e8)[_0x423b('0x52','^qHS')]();}else{hour=new Date()[_0x423b('0x111','jkVe')]();minute=new Date()[_0x423b('0x105','HUko')]();}!(async()=>{if(typeof $request!==_0x423b('0x109','CcW1')){}else{$[_0x423b('0x37','POeg')](_0x423b('0x2e','7g3)')+jzttapp[_0x423b('0x4','Ua[k')]+_0x423b('0xf2','IdO3'));for(let _0x39bca8=0x0;_0x39bca8<jzttapp[_0x423b('0x94','YHja')];_0x39bca8++){$['log'](_0x423b('0xb0','wvm8')+(_0x39bca8+0x1)+_0x423b('0x25','eeIu'));let _0x1896ad=jzttapp[_0x39bca8];for(let _0x5d1c2e=0x8;_0x5d1c2e<0xc;_0x5d1c2e++){$[_0x423b('0x8f','Gr6%')](_0x423b('0x1','M70C')+(_0x5d1c2e-0x7)+_0x423b('0xb5','yWrl'));await getReward(_0x1896ad[_0x423b('0x116','M70C')],_0x5d1c2e);await $[_0x423b('0x16','n7t^')](0x5dc);}}}})()['catch'](_0x1e8bed=>$[_0x423b('0x113','1^nB')](_0x1e8bed))[_0x423b('0xf3','OlVl')](()=>$[_0x423b('0x12e','Vvdf')]());function getReward(_0x40d330,_0x510b7a){return new Promise((_0x2e37df,_0x62417)=>{const _0x33a17f=_0x423b('0x121','OlVl');const _0x2b7785={'url':_0x33a17f,'headers':headers,'body':_0x423b('0xeb','wvm8')+_0x40d330+'&id='+_0x510b7a};$[_0x423b('0x6d','D#5$')](_0x2b7785,async(_0x1f8870,_0x5270c9,_0xa8c501)=>{try{if(safeGet(_0xa8c501)){const _0x8dd321=JSON[_0x423b('0xf0','el(0')](_0xa8c501);if(_0x8dd321['code']==0x0){$[_0x423b('0xe4','Op8Z')](_0x423b('0xbb','yWrl')+_0x8dd321[_0x423b('0x44','c*Jg')]['coin']+_0x423b('0xb6','Vvdf'));}}}catch(_0x10b967){$[_0x423b('0xd4','N4]Y')](_0x10b967);}_0x2e37df();});});}function safeGet(_0x346c63){try{if(typeof JSON[_0x423b('0x10e','dZus')](_0x346c63)==_0x423b('0xa2','n7t^')){return!![];}}catch(_0x3e5e29){console['log'](_0x3e5e29);console[_0x423b('0xca','NnuW')](_0x423b('0x49','n7t^'));return![];}}function Env(_0x58b790,_0x34cb63){class _0x349f63{constructor(_0x1bd3fd){this[_0x423b('0xe2','NnuW')]=_0x1bd3fd;}[_0x423b('0x60','dZus')](_0x1855f5,_0x165e1a=_0x423b('0x9','oBc)')){_0x1855f5=_0x423b('0x53','S^Sl')==typeof _0x1855f5?{'url':_0x1855f5}:_0x1855f5;let _0x4a5525=this[_0x423b('0x32','el(0')];return _0x423b('0x2b','n7t^')===_0x165e1a&&(_0x4a5525=this['post']),new Promise((_0x10f1da,_0x4ad1ca)=>{_0x4a5525[_0x423b('0xd5','mYGc')](this,_0x1855f5,(_0x5650bf,_0x2db039,_0x16735d)=>{_0x5650bf?_0x4ad1ca(_0x5650bf):_0x10f1da(_0x2db039);});});}[_0x423b('0x2f','EQL4')](_0xd588d){return this['send']['call'](this[_0x423b('0x85','kn(%')],_0xd588d);}[_0x423b('0xfc','B0YZ')](_0x99d7a4){return this[_0x423b('0xf8','^$#]')]['call'](this[_0x423b('0x71','IdO3')],_0x99d7a4,'POST');}}return new class{constructor(_0xcc7a56,_0x4fe83e){this[_0x423b('0x12c','qoJ7')]=_0xcc7a56,this[_0x423b('0x64','dZus')]=new _0x349f63(this),this[_0x423b('0x7c','xusF')]=null,this[_0x423b('0x7','eeIu')]=_0x423b('0xa6','wvm8'),this[_0x423b('0x8d','2sVq')]=[],this['isMute']=!0x1,this['isNeedRewrite']=!0x1,this['logSeparator']='\x0a',this[_0x423b('0xc4','drVD')]=new Date()[_0x423b('0x95','M70C')](),Object[_0x423b('0xea','qoJ7')](this,_0x4fe83e),this['log']('','🔔'+this['name']+_0x423b('0x38','yWrl'));}[_0x423b('0x87','18J5')](){return _0x423b('0xed','7g3)')!=typeof module&&!!module[_0x423b('0xc5','CcW1')];}[_0x423b('0x10','mYGc')](){return _0x423b('0x109','CcW1')!=typeof $task;}[_0x423b('0x50','LCl3')](){return _0x423b('0xf','xusF')!=typeof $httpClient&&_0x423b('0x1b','YHja')==typeof $loon;}[_0x423b('0x72','BUso')](){return _0x423b('0xa9','kn(%')!=typeof $loon;}[_0x423b('0xd0','Op8Z')](_0x27760c,_0x4dd253=null){try{return JSON[_0x423b('0x8a','$34Q')](_0x27760c);}catch{return _0x4dd253;}}[_0x423b('0x6e','Op8Z')](_0x55a322,_0x326673=null){try{return JSON['stringify'](_0x55a322);}catch{return _0x326673;}}['getjson'](_0x2cc515,_0x2d82d9){let _0x43f685=_0x2d82d9;const _0x1ef5b6=this[_0x423b('0xc8','NnuW')](_0x2cc515);if(_0x1ef5b6)try{_0x43f685=JSON[_0x423b('0x11','iQsV')](this[_0x423b('0x120','^$#]')](_0x2cc515));}catch{}return _0x43f685;}[_0x423b('0x47','qoJ7')](_0x4b41a3,_0x2a0677){try{return this[_0x423b('0xa4','(@*M')](JSON[_0x423b('0xe8','mYGc')](_0x4b41a3),_0x2a0677);}catch{return!0x1;}}[_0x423b('0x82','$34Q')](_0x36ec72){return new Promise(_0x578084=>{this[_0x423b('0x17','$34Q')]({'url':_0x36ec72},(_0x39c7a8,_0xec318a,_0x113184)=>_0x578084(_0x113184));});}[_0x423b('0xba','n7t^')](_0x3b55bb,_0x1c1cec){return new Promise(_0x2940db=>{let _0x115b14=this[_0x423b('0x29','S^Sl')](_0x423b('0x34','2sVq'));_0x115b14=_0x115b14?_0x115b14[_0x423b('0x5f','(@*M')](/\n/g,'')[_0x423b('0x10d','el(0')]():_0x115b14;let _0x3b5c51=this[_0x423b('0x10c','(@*M')](_0x423b('0x84','7g3)'));_0x3b5c51=_0x3b5c51?0x1*_0x3b5c51:0x14,_0x3b5c51=_0x1c1cec&&_0x1c1cec[_0x423b('0xff','jkVe')]?_0x1c1cec[_0x423b('0x5e','iQsV')]:_0x3b5c51;const [_0x455301,_0x362fa7]=_0x115b14[_0x423b('0x4f','jkVe')]('@'),_0x3c0151={'url':_0x423b('0x81','Gr6%')+_0x362fa7+_0x423b('0x9c','c*Jg'),'body':{'script_text':_0x3b55bb,'mock_type':_0x423b('0xec','dZus'),'timeout':_0x3b5c51},'headers':{'X-Key':_0x455301,'Accept':_0x423b('0xc9','HUko')}};this['post'](_0x3c0151,(_0x7c3b13,_0x54afb4,_0x2c7e2f)=>_0x2940db(_0x2c7e2f));})[_0x423b('0x13d','NnuW')](_0x5e3b94=>this[_0x423b('0xa','Vvdf')](_0x5e3b94));}['loaddata'](){if(!this[_0x423b('0x7f','EQL4')]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x423b('0xa7','n7t^')]=this[_0x423b('0xa1','Gr6%')]?this[_0x423b('0xf4','Jd2b')]:require(_0x423b('0xdd','c*Jg'));const _0x468bdf=this['path'][_0x423b('0x106','yWrl')](this[_0x423b('0x100','VBJI')]),_0x1f26dd=this[_0x423b('0x10b','yWrl')][_0x423b('0xfd','xusF')](process[_0x423b('0x79','Nh1C')](),this['dataFile']),_0xba3144=this['fs'][_0x423b('0x99','EJ[g')](_0x468bdf),_0x1f4e22=!_0xba3144&&this['fs'][_0x423b('0xd9','qoJ7')](_0x1f26dd);if(!_0xba3144&&!_0x1f4e22)return{};{const _0x961dd7=_0xba3144?_0x468bdf:_0x1f26dd;try{return JSON[_0x423b('0x5d','jkVe')](this['fs']['readFileSync'](_0x961dd7));}catch(_0x3aead4){return{};}}}}[_0x423b('0x132','$34Q')](){if(this[_0x423b('0x68','IdO3')]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x423b('0xb4','EJ[g')]=this['path']?this[_0x423b('0x10b','yWrl')]:require(_0x423b('0x12f','(@*M'));const _0x32c970=this[_0x423b('0xae','jkVe')][_0x423b('0x78','YHja')](this[_0x423b('0xb2','18J5')]),_0x398ab0=this[_0x423b('0xf4','Jd2b')][_0x423b('0xc','jkVe')](process['cwd'](),this[_0x423b('0xcb','iQsV')]),_0x35ad6c=this['fs'][_0x423b('0xda','kn(%')](_0x32c970),_0x5ea25a=!_0x35ad6c&&this['fs'][_0x423b('0x90','NnuW')](_0x398ab0),_0x516cf2=JSON['stringify'](this[_0x423b('0x4d','1^nB')]);_0x35ad6c?this['fs'][_0x423b('0x137','dZus')](_0x32c970,_0x516cf2):_0x5ea25a?this['fs'][_0x423b('0x5b','B0YZ')](_0x398ab0,_0x516cf2):this['fs'][_0x423b('0xd3','Op8Z')](_0x32c970,_0x516cf2);}}[_0x423b('0x11b','N4]Y')](_0xfa5e0e,_0x236195,_0x4e2aee){const _0x396a66=_0x236195[_0x423b('0xe7','c*Jg')](/\[(\d+)\]/g,_0x423b('0x102','IdO3'))['split']('.');let _0x35cf69=_0xfa5e0e;for(const _0x518445 of _0x396a66)if(_0x35cf69=Object(_0x35cf69)[_0x518445],void 0x0===_0x35cf69)return _0x4e2aee;return _0x35cf69;}['lodash_set'](_0x1cc822,_0x501404,_0x2c8910){return Object(_0x1cc822)!==_0x1cc822?_0x1cc822:(Array[_0x423b('0x4a','^$#]')](_0x501404)||(_0x501404=_0x501404[_0x423b('0x8','Gr6%')]()[_0x423b('0xc3','yWrl')](/[^.[\]]+/g)||[]),_0x501404[_0x423b('0x9f','(@*M')](0x0,-0x1)['reduce']((_0x3bdf82,_0x23d9fe,_0x2bfe2f)=>Object(_0x3bdf82[_0x23d9fe])===_0x3bdf82[_0x23d9fe]?_0x3bdf82[_0x23d9fe]:_0x3bdf82[_0x23d9fe]=Math[_0x423b('0x89','EJ[g')](_0x501404[_0x2bfe2f+0x1])>>0x0==+_0x501404[_0x2bfe2f+0x1]?[]:{},_0x1cc822)[_0x501404[_0x501404[_0x423b('0xcf','n7t^')]-0x1]]=_0x2c8910,_0x1cc822);}['getdata'](_0x12f789){let _0x5c298f=this[_0x423b('0xbf','wvm8')](_0x12f789);if(/^@/['test'](_0x12f789)){const [,_0x1e2e95,_0x123c59]=/^@(.*?)\.(.*?)$/[_0x423b('0x108','HUko')](_0x12f789),_0x520ead=_0x1e2e95?this['getval'](_0x1e2e95):'';if(_0x520ead)try{const _0x1cbf18=JSON[_0x423b('0x5d','jkVe')](_0x520ead);_0x5c298f=_0x1cbf18?this[_0x423b('0x70','IdO3')](_0x1cbf18,_0x123c59,''):_0x5c298f;}catch(_0x38dc06){_0x5c298f='';}}return _0x5c298f;}[_0x423b('0xe9','N1d7')](_0x32e42d,_0x3e4901){let _0x4bb6b2=!0x1;if(/^@/[_0x423b('0x112','S^Sl')](_0x3e4901)){const [,_0x141619,_0x244fce]=/^@(.*?)\.(.*?)$/[_0x423b('0x74','$34Q')](_0x3e4901),_0x356ea1=this[_0x423b('0x123','OlVl')](_0x141619),_0xca97ac=_0x141619?_0x423b('0xfa','IdO3')===_0x356ea1?null:_0x356ea1||'{}':'{}';try{const _0x398360=JSON[_0x423b('0x91','qoJ7')](_0xca97ac);this[_0x423b('0x127','HUko')](_0x398360,_0x244fce,_0x32e42d),_0x4bb6b2=this[_0x423b('0x10a','YHja')](JSON[_0x423b('0x1f','Ua[k')](_0x398360),_0x141619);}catch(_0x28ba85){const _0x53abcb={};this[_0x423b('0xdc','LCl3')](_0x53abcb,_0x244fce,_0x32e42d),_0x4bb6b2=this['setval'](JSON['stringify'](_0x53abcb),_0x141619);}}else _0x4bb6b2=this[_0x423b('0x57','jkVe')](_0x32e42d,_0x3e4901);return _0x4bb6b2;}[_0x423b('0x48','drVD')](_0x96fe64){return this[_0x423b('0x18','jkVe')]()||this[_0x423b('0xcd','^$#]')]()?$persistentStore[_0x423b('0x8e','eeIu')](_0x96fe64):this[_0x423b('0x3a','drVD')]()?$prefs[_0x423b('0x5c','M70C')](_0x96fe64):this[_0x423b('0x3f','^$#]')]()?(this[_0x423b('0x69','^qHS')]=this['loaddata'](),this[_0x423b('0xe5','N4]Y')][_0x96fe64]):this[_0x423b('0x13c','18J5')]&&this['data'][_0x96fe64]||null;}[_0x423b('0xdb','eeIu')](_0x3aab07,_0x389f08){return this['isSurge']()||this[_0x423b('0x13a','Ua[k')]()?$persistentStore['write'](_0x3aab07,_0x389f08):this['isQuanX']()?$prefs[_0x423b('0xb1','M70C')](_0x3aab07,_0x389f08):this[_0x423b('0x114','Vvdf')]()?(this[_0x423b('0x110','^$#]')]=this[_0x423b('0x3e','LCl3')](),this[_0x423b('0x5','BUso')][_0x389f08]=_0x3aab07,this[_0x423b('0x26','qoJ7')](),!0x0):this[_0x423b('0x4b','YHja')]&&this[_0x423b('0x1d','CcW1')][_0x389f08]||null;}[_0x423b('0x2d','18J5')](_0x574a3b){this[_0x423b('0xbc','18J5')]=this[_0x423b('0x12d','BUso')]?this[_0x423b('0x9d','c*Jg')]:require(_0x423b('0x3','dZus')),this[_0x423b('0x107','^qHS')]=this['cktough']?this[_0x423b('0x61','iQsV')]:require(_0x423b('0x13','drVD')),this['ckjar']=this[_0x423b('0xd1','YHja')]?this[_0x423b('0x117','OlVl')]:new this['cktough'][(_0x423b('0x126','xusF'))](),_0x574a3b&&(_0x574a3b['headers']=_0x574a3b[_0x423b('0x93','HUko')]?_0x574a3b[_0x423b('0x11d','1^nB')]:{},void 0x0===_0x574a3b[_0x423b('0x10f','^qHS')]['Cookie']&&void 0x0===_0x574a3b[_0x423b('0x8c','VBJI')]&&(_0x574a3b['cookieJar']=this[_0x423b('0x8b','POeg')]));}[_0x423b('0x135','Gr6%')](_0xddc210,_0x5243cf=()=>{}){_0xddc210[_0x423b('0xab','(@*M')]&&(delete _0xddc210[_0x423b('0xd','^$#]')][_0x423b('0x128','b*YR')],delete _0xddc210['headers']['Content-Length']),this[_0x423b('0x7e','IdO3')]()||this[_0x423b('0x28','dZus')]()?(this[_0x423b('0x58','OlVl')]()&&this[_0x423b('0x43','c*Jg')]&&(_0xddc210['headers']=_0xddc210['headers']||{},Object['assign'](_0xddc210['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x423b('0xb','M70C')](_0xddc210,(_0x17a066,_0x1db022,_0x2a449f)=>{!_0x17a066&&_0x1db022&&(_0x1db022[_0x423b('0x12a','c*Jg')]=_0x2a449f,_0x1db022[_0x423b('0xf5','B0YZ')]=_0x1db022['status']),_0x5243cf(_0x17a066,_0x1db022,_0x2a449f);})):this[_0x423b('0x115','Op8Z')]()?(this[_0x423b('0x76','dZus')]&&(_0xddc210['opts']=_0xddc210[_0x423b('0x11a','YHja')]||{},Object[_0x423b('0xc6','BUso')](_0xddc210[_0x423b('0xc7','yWrl')],{'hints':!0x1})),$task[_0x423b('0x2a','kn(%')](_0xddc210)[_0x423b('0x40','c*Jg')](_0x5e1d29=>{const {statusCode:_0x7e3b11,statusCode:_0x5e3e1b,headers:_0x48dae9,body:_0xc009a9}=_0x5e1d29;_0x5243cf(null,{'status':_0x7e3b11,'statusCode':_0x5e3e1b,'headers':_0x48dae9,'body':_0xc009a9},_0xc009a9);},_0x29dbcd=>_0x5243cf(_0x29dbcd))):this[_0x423b('0xdf','NnuW')]()&&(this[_0x423b('0xb3','CcW1')](_0xddc210),this[_0x423b('0x11e','Vvdf')](_0xddc210)['on']('redirect',(_0x55dc07,_0x2b6854)=>{try{if(_0x55dc07['headers'][_0x423b('0xad','Jd2b')]){const _0x3d3423=_0x55dc07[_0x423b('0xb9','18J5')][_0x423b('0x14','n7t^')]['map'](this['cktough'][_0x423b('0x36','Op8Z')][_0x423b('0x91','qoJ7')])[_0x423b('0x6c','N4]Y')]();this[_0x423b('0x51','7g3)')][_0x423b('0x119','Gr6%')](_0x3d3423,null),_0x2b6854[_0x423b('0x11f','qoJ7')]=this['ckjar'];}}catch(_0xa40377){this[_0x423b('0xa3','^qHS')](_0xa40377);}})[_0x423b('0x65','^lz[')](_0x5e8001=>{const {statusCode:_0x2c1b75,statusCode:_0x588c98,headers:_0x28f49c,body:_0x2abb4c}=_0x5e8001;_0x5243cf(null,{'status':_0x2c1b75,'statusCode':_0x588c98,'headers':_0x28f49c,'body':_0x2abb4c},_0x2abb4c);},_0x381f7f=>{const {message:_0x7808b6,response:_0x13f551}=_0x381f7f;_0x5243cf(_0x7808b6,_0x13f551,_0x13f551&&_0x13f551[_0x423b('0x46','Nh1C')]);}));}[_0x423b('0xc2','1^nB')](_0x4ba66c,_0x3959cc=()=>{}){if(_0x4ba66c[_0x423b('0x122','Gr6%')]&&_0x4ba66c[_0x423b('0x93','HUko')]&&!_0x4ba66c[_0x423b('0x3c','YHja')][_0x423b('0x55','c*Jg')]&&(_0x4ba66c[_0x423b('0x11c','iQsV')][_0x423b('0x104','Ua[k')]=_0x423b('0x1a','kn(%')),_0x4ba66c[_0x423b('0x12','N1d7')]&&delete _0x4ba66c['headers'][_0x423b('0x45','Op8Z')],this[_0x423b('0x58','OlVl')]()||this[_0x423b('0x21','drVD')]())this[_0x423b('0x22','D#5$')]()&&this[_0x423b('0xa0','wvm8')]&&(_0x4ba66c[_0x423b('0xce','POeg')]=_0x4ba66c[_0x423b('0x96','Nh1C')]||{},Object[_0x423b('0xee','2sVq')](_0x4ba66c[_0x423b('0x12','N1d7')],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['post'](_0x4ba66c,(_0x48a927,_0xc658,_0xf5e339)=>{!_0x48a927&&_0xc658&&(_0xc658[_0x423b('0x6a','LCl3')]=_0xf5e339,_0xc658[_0x423b('0x6b','iQsV')]=_0xc658['status']),_0x3959cc(_0x48a927,_0xc658,_0xf5e339);});else if(this[_0x423b('0xfb','dZus')]())_0x4ba66c[_0x423b('0x75','mYGc')]=_0x423b('0x27','Gr6%'),this[_0x423b('0x6f','BUso')]&&(_0x4ba66c[_0x423b('0xd8','n7t^')]=_0x4ba66c[_0x423b('0xaf','$34Q')]||{},Object[_0x423b('0x33','^lz[')](_0x4ba66c[_0x423b('0x66','POeg')],{'hints':!0x1})),$task[_0x423b('0x86','Jd2b')](_0x4ba66c)[_0x423b('0x73','HUko')](_0x24bb38=>{const {statusCode:_0x30fb53,statusCode:_0x523389,headers:_0x21aa66,body:_0x5700fe}=_0x24bb38;_0x3959cc(null,{'status':_0x30fb53,'statusCode':_0x523389,'headers':_0x21aa66,'body':_0x5700fe},_0x5700fe);},_0x1fdd7f=>_0x3959cc(_0x1fdd7f));else if(this[_0x423b('0x0','eeIu')]()){this[_0x423b('0xd2','mYGc')](_0x4ba66c);const {url:_0x72409a,..._0x2f2f7a}=_0x4ba66c;this[_0x423b('0x130','$34Q')][_0x423b('0xc0','eeIu')](_0x72409a,_0x2f2f7a)[_0x423b('0xe','S^Sl')](_0x4544c5=>{const {statusCode:_0x3f6e1a,statusCode:_0xeef3ef,headers:_0x1fdd86,body:_0x7420ff}=_0x4544c5;_0x3959cc(null,{'status':_0x3f6e1a,'statusCode':_0xeef3ef,'headers':_0x1fdd86,'body':_0x7420ff},_0x7420ff);},_0x147df7=>{const {message:_0x31c832,response:_0x3a7167}=_0x147df7;_0x3959cc(_0x31c832,_0x3a7167,_0x3a7167&&_0x3a7167['body']);});}}[_0x423b('0xa5','POeg')](_0x4102d6){let _0x1025c0={'M+':new Date()[_0x423b('0x24','drVD')]()+0x1,'d+':new Date()[_0x423b('0xaa','LCl3')](),'H+':new Date()[_0x423b('0x103','el(0')](),'m+':new Date()[_0x423b('0xe0','18J5')](),'s+':new Date()[_0x423b('0xc1','1^nB')](),'q+':Math['floor']((new Date()[_0x423b('0x56','YHja')]()+0x3)/0x3),'S':new Date()['getMilliseconds']()};/(y+)/[_0x423b('0x88','el(0')](_0x4102d6)&&(_0x4102d6=_0x4102d6[_0x423b('0x2c','mYGc')](RegExp['$1'],(new Date()[_0x423b('0x13e','Jd2b')]()+'')[_0x423b('0x1e','B0YZ')](0x4-RegExp['$1'][_0x423b('0x19','Jd2b')])));for(let _0x162725 in _0x1025c0)new RegExp('('+_0x162725+')')['test'](_0x4102d6)&&(_0x4102d6=_0x4102d6[_0x423b('0x35','N4]Y')](RegExp['$1'],0x1==RegExp['$1'][_0x423b('0xfe','c*Jg')]?_0x1025c0[_0x162725]:('00'+_0x1025c0[_0x162725])['substr']((''+_0x1025c0[_0x162725])[_0x423b('0xf1','oBc)')])));return _0x4102d6;}[_0x423b('0x9e','BUso')](_0x418b84=_0x58b790,_0x50938f='',_0x405bee='',_0x4b2049){const _0xd89bd=_0x5f03fd=>{if(!_0x5f03fd)return _0x5f03fd;if(_0x423b('0x63','^qHS')==typeof _0x5f03fd)return this[_0x423b('0xf6','LCl3')]()?_0x5f03fd:this['isQuanX']()?{'open-url':_0x5f03fd}:this[_0x423b('0x83','18J5')]()?{'url':_0x5f03fd}:void 0x0;if('object'==typeof _0x5f03fd){if(this[_0x423b('0x67','Op8Z')]()){let _0x2a95f5=_0x5f03fd[_0x423b('0x4e','Ua[k')]||_0x5f03fd[_0x423b('0xa8','VBJI')]||_0x5f03fd[_0x423b('0x138','CcW1')],_0x2e2f4f=_0x5f03fd[_0x423b('0x30','EQL4')]||_0x5f03fd[_0x423b('0xde','Nh1C')];return{'openUrl':_0x2a95f5,'mediaUrl':_0x2e2f4f};}if(this[_0x423b('0x10','mYGc')]()){let _0x1f2357=_0x5f03fd[_0x423b('0x39','EQL4')]||_0x5f03fd[_0x423b('0x133','EJ[g')]||_0x5f03fd[_0x423b('0xac','Nh1C')],_0x3619d3=_0x5f03fd[_0x423b('0x3d','eeIu')]||_0x5f03fd['mediaUrl'];return{'open-url':_0x1f2357,'media-url':_0x3619d3};}if(this[_0x423b('0xe6','n7t^')]()){let _0x539ae5=_0x5f03fd[_0x423b('0x92','D#5$')]||_0x5f03fd[_0x423b('0x12b','BUso')]||_0x5f03fd['open-url'];return{'url':_0x539ae5};}}};this['isMute']||(this[_0x423b('0x58','OlVl')]()||this[_0x423b('0xe1','B0YZ')]()?$notification[_0x423b('0x2','jkVe')](_0x418b84,_0x50938f,_0x405bee,_0xd89bd(_0x4b2049)):this[_0x423b('0x7a','^$#]')]()&&$notify(_0x418b84,_0x50938f,_0x405bee,_0xd89bd(_0x4b2049)));let _0x116591=['',_0x423b('0xbd','xusF')];_0x116591[_0x423b('0x5a','^$#]')](_0x418b84),_0x50938f&&_0x116591['push'](_0x50938f),_0x405bee&&_0x116591[_0x423b('0x13b','$34Q')](_0x405bee),console[_0x423b('0xbe','$34Q')](_0x116591[_0x423b('0x139','eeIu')]('\x0a')),this[_0x423b('0x97','^$#]')]=this[_0x423b('0x98','Jd2b')][_0x423b('0x118','drVD')](_0x116591);}[_0x423b('0x80','S^Sl')](..._0x4c6945){_0x4c6945['length']>0x0&&(this['logs']=[...this[_0x423b('0x77','iQsV')],..._0x4c6945]),console['log'](_0x4c6945[_0x423b('0x23','xusF')](this[_0x423b('0x131','Jd2b')]));}['logErr'](_0x46c0cc,_0x39dbeb){const _0x40c58e=!this[_0x423b('0x59','M70C')]()&&!this[_0x423b('0x3b','NnuW')]()&&!this[_0x423b('0xb7','jkVe')]();_0x40c58e?this[_0x423b('0xe3','EJ[g')]('','❗️'+this[_0x423b('0x9a','xusF')]+_0x423b('0xd6','1^nB'),_0x46c0cc[_0x423b('0x134','Op8Z')]):this[_0x423b('0xf7','^$#]')]('','❗️'+this[_0x423b('0x4c','oBc)')]+_0x423b('0xb8','Nh1C'),_0x46c0cc);}[_0x423b('0x1c','xusF')](_0x2d3d79){return new Promise(_0x3187e0=>setTimeout(_0x3187e0,_0x2d3d79));}['done'](_0x125832={}){const _0x2a4886=new Date()[_0x423b('0x7d','EJ[g')](),_0x2e0fd0=(_0x2a4886-this[_0x423b('0x9b','VBJI')])/0x3e8;this['log']('','🔔'+this[_0x423b('0x31','S^Sl')]+',\x20结束!\x20🕛\x20'+_0x2e0fd0+'\x20秒'),this[_0x423b('0x15','OlVl')](),(this[_0x423b('0xd7','Ua[k')]()||this[_0x423b('0xcc','VBJI')]()||this[_0x423b('0x6','xusF')]())&&$done(_0x125832);}}(_0x58b790,_0x34cb63);}
