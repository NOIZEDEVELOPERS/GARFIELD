/*COPYRIGHT (C) 2022 CODED BY NOIZE */
const _0x4f5911=_0x301e;(function(_0x5b1d32,_0x3712d6){const _0x2a1839=_0x301e,_0x51df43=_0x5b1d32();while(!![]){try{const _0x1cbc9a=-parseInt(_0x2a1839(0x131))/0x1+-parseInt(_0x2a1839(0x140))/0x2+parseInt(_0x2a1839(0x145))/0x3+parseInt(_0x2a1839(0x12e))/0x4*(parseInt(_0x2a1839(0x132))/0x5)+parseInt(_0x2a1839(0x13c))/0x6+parseInt(_0x2a1839(0x130))/0x7+parseInt(_0x2a1839(0x146))/0x8*(parseInt(_0x2a1839(0x13b))/0x9);if(_0x1cbc9a===_0x3712d6)break;else _0x51df43['push'](_0x51df43['shift']());}catch(_0x3f8bb1){_0x51df43['push'](_0x51df43['shift']());}}}(_0x1ea7,0x5cf1f));function _0x301e(_0x40973b,_0x106486){const _0x1ea7a8=_0x1ea7();return _0x301e=function(_0x301e89,_0x104c13){_0x301e89=_0x301e89-0x12e;let _0x10a729=_0x1ea7a8[_0x301e89];return _0x10a729;},_0x301e(_0x40973b,_0x106486);}const Garfield=require(_0x4f5911(0x14a)),{MessageType,MessageOptions,Mimetype}=require('@adiwajshing/baileys'),fs=require('fs'),axios=require(_0x4f5911(0x148)),Config=require(_0x4f5911(0x14c)),request=require(_0x4f5911(0x13e)),got=require('got'),Language=require(_0x4f5911(0x144)),Lang=Language[_0x4f5911(0x135)]('sticker');Config[_0x4f5911(0x141)]==_0x4f5911(0x14b)&&Garfield[_0x4f5911(0x149)]({'pattern':_0x4f5911(0x136),'fromMe':!![],'desc':Lang[_0x4f5911(0x12f)]},async(_0x201e55,_0xdcd485)=>{const _0x4f8ced=_0x4f5911;if(_0xdcd485[0x1]==='')return await _0x201e55[_0x4f8ced(0x133)](Lang[_0x4f8ced(0x139)]);var _0x3a5dcd=await axios['get']('https://api.qrserver.com/v1/create-qr-code/?size=500x500&data='+_0xdcd485[0x1][_0x4f8ced(0x13a)](/#/g,'\x0a')+'\x20',{'responseType':_0x4f8ced(0x138)});await _0x201e55['sendMessage'](Buffer[_0x4f8ced(0x147)](_0x3a5dcd[_0x4f8ced(0x13f)]),MessageType[_0x4f8ced(0x137)],{'mimetype':Mimetype[_0x4f8ced(0x134)],'caption':_0x4f8ced(0x143),'quoted':_0x201e55[_0x4f8ced(0x13f)]});});function _0x1ea7(){const _0x2767cd=['../language','185391KOXqyV','320080xCFnhu','from','axios','addXnodes','../events','private','../config','309020kmMQkR','STICKER_DESC','16261QIMvqs','362413RMBGAd','5oBHPLj','sendMessage','jpg','getString','qr\x20?(.*)','image','arraybuffer','TEXT','replace','54bGrsrK','4149222vIDZrY','https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=','request','data','659712sDZbMC','WORKTYPE','get','\x20\x20```Follow\x20Us\x20Facebook\x20-\x20https://www.facebook.com/garfieldbots/```\x20\x20'];_0x1ea7=function(){return _0x2767cd;};return _0x1ea7();}Config['WORKTYPE']=='public'&&Garfield[_0x4f5911(0x149)]({'pattern':_0x4f5911(0x136),'fromMe':![],'desc':Lang['STICKER_DESC']},async(_0x8e710d,_0x8f83b8)=>{const _0x592c71=_0x4f5911;if(_0x8f83b8[0x1]==='')return await _0x8e710d['sendMessage'](Lang[_0x592c71(0x139)]);var _0x4483f0=await axios[_0x592c71(0x142)](_0x592c71(0x13d)+_0x8f83b8[0x1][_0x592c71(0x13a)](/#/g,'\x0a')+'\x20',{'responseType':_0x592c71(0x138)});await _0x8e710d[_0x592c71(0x133)](Buffer[_0x592c71(0x147)](_0x4483f0[_0x592c71(0x13f)]),MessageType['image'],{'mimetype':Mimetype['jpg'],'caption':_0x592c71(0x143),'quoted':_0x8e710d[_0x592c71(0x13f)]});});