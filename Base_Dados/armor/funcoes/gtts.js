var _0x527e1b=_0xd37b;function _0xd37b(_0x1a694d,_0x52e14e){var _0x6425a7=_0x6425();return _0xd37b=function(_0xd37be3,_0x435413){_0xd37be3=_0xd37be3-0x1b1;var _0x15fbb6=_0x6425a7[_0xd37be3];return _0x15fbb6;},_0xd37b(_0x1a694d,_0x52e14e);}function _0x6425(){var _0x56c5b0=['join','eachSeries','Chinese\x20(Cantonese)','http://translate.google.com/translate_tts','Greek','async','listen','Afrikaans','&q=','createWriteStream','Macedonian','request','Swedish','Swahili','Indonesian','Spanish','end','linguagem\x20no\x20cmd\x20gtts\x20incorreta:\x20','Norwegian','parse','English\x20(United\x20States)','Korean','English','log','Croatian','¡!()[]¶;|°•—«»≤≥«»‹›\x0a\x20','Latvian','filter','Japanese','Dutch','url','10vZQlDP','?ie=UTF-8&tl=','English\x20(United\x20Kingdom)','French','645348HkQRoW','Missing\x20text.\x20Please\x20try:\x20','Chinese','German','GET','substr','Portuguese\x20(Brazil)','8635781IhwScZ','Danish','finish','escape-string-regexp','text','length','Chinese\x20(Mandarin/Taiwan)','Text-to-Speech\x20Server\x20running\x20on\x20','Tamil','Albanian','1336duhHOk','&client=tw-ob&textlen=','Catalan','application/json','707304qBWPDU','Hindi','indexOf','40eBEavm','lang','Thai','Error,\x20GTTS','Welsh','headers','Vietnamese','Serbian','?text=your+text','123635iursaD','Spanish\x20(United\x20States)','Slovak','query','33993JRFhot','&idx=','Hungarian','stringify','pipe','Arabic','No\x20text\x20to\x20speak','Spanish\x20(Spain)','Portuguese','writeHead','1091318AAacMi','78cOOvmQ','305683lcAPCn','Chinese\x20(Mandarin/China)','Polish','Italian'];_0x6425=function(){return _0x56c5b0;};return _0x6425();}(function(_0x52cb74,_0x218393){var _0x10e1a8=_0xd37b,_0x1033ce=_0x52cb74();while(!![]){try{var _0x4518b1=-parseInt(_0x10e1a8(0x1c7))/0x1+parseInt(_0x10e1a8(0x1f6))/0x2+-parseInt(_0x10e1a8(0x1dc))/0x3+parseInt(_0x10e1a8(0x1df))/0x4*(parseInt(_0x10e1a8(0x1e8))/0x5)+-parseInt(_0x10e1a8(0x1f7))/0x6*(-parseInt(_0x10e1a8(0x1f8))/0x7)+-parseInt(_0x10e1a8(0x1d8))/0x8*(-parseInt(_0x10e1a8(0x1ec))/0x9)+-parseInt(_0x10e1a8(0x1c3))/0xa*(parseInt(_0x10e1a8(0x1ce))/0xb);if(_0x4518b1===_0x218393)break;else _0x1033ce['push'](_0x1033ce['shift']());}catch(_0x36ab29){_0x1033ce['push'](_0x1033ce['shift']());}}}(_0x6425,0x4f64e));const request=require(_0x527e1b(0x207)),escapeStringRegexp=require(_0x527e1b(0x1d1)),async=require(_0x527e1b(0x201)),fs=require('fs'),MultiStream=require('multistream'),fakeUa=require('fake-useragent'),GOOGLE_TTS_URL=_0x527e1b(0x1ff),MAX_CHARS=0x64,LANGUAGES={'af':_0x527e1b(0x203),'sq':_0x527e1b(0x1d7),'ar':_0x527e1b(0x1f1),'hy':'Armenian','ca':_0x527e1b(0x1da),'zh':_0x527e1b(0x1c9),'zh-cn':_0x527e1b(0x1f9),'zh-tw':_0x527e1b(0x1d4),'zh-yue':_0x527e1b(0x1fe),'hr':_0x527e1b(0x1bc),'cs':'Czech','da':_0x527e1b(0x1cf),'nl':_0x527e1b(0x1c1),'en':_0x527e1b(0x1ba),'en-au':'English\x20(Australia)','en-uk':_0x527e1b(0x1c5),'en-us':_0x527e1b(0x1b8),'eo':'Esperanto','fi':'Finnish','fr':_0x527e1b(0x1c6),'de':_0x527e1b(0x1ca),'el':_0x527e1b(0x200),'ht':'Haitian\x20Creole','hi':_0x527e1b(0x1dd),'hu':_0x527e1b(0x1ee),'is':'Icelandic','id':_0x527e1b(0x1b2),'it':_0x527e1b(0x1fb),'ja':_0x527e1b(0x1c0),'ko':_0x527e1b(0x1b9),'la':'Latin','lv':_0x527e1b(0x1be),'mk':_0x527e1b(0x206),'no':_0x527e1b(0x1b6),'pl':_0x527e1b(0x1fa),'pt':_0x527e1b(0x1f4),'pt-br':_0x527e1b(0x1cd),'ro':'Romanian','ru':'Russian','sr':_0x527e1b(0x1e6),'sk':_0x527e1b(0x1ea),'es':_0x527e1b(0x1b3),'es-es':_0x527e1b(0x1f3),'es-us':_0x527e1b(0x1e9),'sw':_0x527e1b(0x1b1),'sv':_0x527e1b(0x208),'ta':_0x527e1b(0x1d6),'th':_0x527e1b(0x1e1),'tr':'Turkish','vi':_0x527e1b(0x1e5),'cy':_0x527e1b(0x1e3)};function Text2Speech(_0x10bb18,_0x383394){var _0x10fea4=_0x527e1b;try{var _0x6c8c7f=_0x10bb18||'en',_0x2ac3dc=_0x383394||![];_0x6c8c7f=_0x6c8c7f['toLowerCase']();if(!LANGUAGES[_0x6c8c7f])console['log'](_0x10fea4(0x1b5)+_0x6c8c7f);var _0x23a3f6=getArgsFactory(_0x6c8c7f);return{'tokenize':tokenize,'createServer':_0x2d170e=>createServer(_0x23a3f6,_0x2d170e),'stream':_0x22410b=>stream(_0x23a3f6,_0x22410b),'save':(_0x4541c8,_0x3b10de,_0x404fa0)=>save(_0x23a3f6,_0x4541c8,_0x3b10de,_0x404fa0)};}catch(_0x13b985){console['log'](_0x10fea4(0x1e2));}}function save(_0x57810b,_0x632b58,_0x1d334c,_0x36b7ae){var _0x3753c3=_0x527e1b,_0x39168d=tokenize(_0x1d334c),_0x4b9632=_0x39168d[_0x3753c3(0x1d3)];async[_0x3753c3(0x1fd)](_0x39168d,function(_0x68f2e5,_0x5a4245){var _0x8fa513=_0x3753c3,_0x52122b=_0x39168d[_0x8fa513(0x1de)](_0x68f2e5),_0x50bc47=getHeader(),_0x5ee05b=_0x57810b(_0x68f2e5,_0x52122b,_0x4b9632),_0x5a1f03=GOOGLE_TTS_URL+_0x5ee05b,_0x2afe1f=fs[_0x8fa513(0x205)](_0x632b58,{'flags':_0x52122b>0x0?'a':'w'});request({'uri':_0x5a1f03,'headers':_0x50bc47,'method':_0x8fa513(0x1cb)})[_0x8fa513(0x1f0)](_0x2afe1f),_0x2afe1f['on'](_0x8fa513(0x1d0),_0x5a4245),_0x2afe1f['on']('error',_0x5a4245);},_0x36b7ae);}function stream(_0x5989be,_0x28978a){var _0x4426f1=_0x527e1b,_0x17d158=tokenize(_0x28978a),_0x59fb6b=_0x17d158[_0x4426f1(0x1d3)];return MultiStream(_0x17d158['map'](function(_0x18fc9e,_0x2b1c05){var _0x5708f5=_0x4426f1,_0x188ee5=getHeader(),_0x5631b4=_0x5989be(_0x18fc9e,_0x2b1c05,_0x59fb6b),_0x118ad6=GOOGLE_TTS_URL+_0x5631b4;return request({'uri':_0x118ad6,'headers':_0x188ee5,'method':_0x5708f5(0x1cb)});}));}function getHeader(){var _0x46ee65={'User-Agent':fakeUa()};return _0x46ee65;}function getArgsFactory(_0x121b1b){return function(_0x4c56dd,_0x546267,_0x5819b3){var _0x38113f=_0xd37b,_0x58cb39=_0x4c56dd['length'],_0x5d01d3=encodeURIComponent(_0x4c56dd),_0x166884=_0x121b1b||'en';return _0x38113f(0x1c4)+_0x166884+_0x38113f(0x204)+_0x5d01d3+'&total='+_0x5819b3+_0x38113f(0x1ed)+_0x546267+_0x38113f(0x1d9)+_0x58cb39;};}function tokenize(_0xfd60cb){var _0x1e4e9c=_0x527e1b,_0x82384d=[];if(!_0xfd60cb)throw new Error(_0x1e4e9c(0x1f2));var _0x2ce480=_0x1e4e9c(0x1bd),_0x245797=_0x2ce480['split']('')['map'](function(_0x3baef9){return escapeStringRegexp(_0x3baef9);}),_0xe9ce56=_0x245797[_0x1e4e9c(0x1fc)]('|'),_0x31ecbe=_0xfd60cb['split'](new RegExp(_0xe9ce56));_0x31ecbe=_0x31ecbe[_0x1e4e9c(0x1bf)](_0x266af3=>_0x266af3['length']>0x0);var _0x4a495b=[],_0xeab080=0x0;for(let _0x1c3765 of _0x31ecbe){!_0x4a495b[_0xeab080]&&(_0x4a495b[_0xeab080]=''),_0x4a495b[_0xeab080][_0x1e4e9c(0x1d3)]+_0x1c3765[_0x1e4e9c(0x1d3)]<MAX_CHARS?_0x4a495b[_0xeab080]+='\x20'+_0x1c3765:(_0xeab080++,_0x4a495b[_0xeab080]=_0x1c3765);}return _0x4a495b[0x0]=_0x4a495b[0x0][_0x1e4e9c(0x1cc)](0x1),_0x4a495b;}function createServer(_0x756b71,_0x344e72){var _0x4cf6c8=_0x527e1b,_0x22fd30=require('http'),_0xaee529=require('url'),_0xf5ae93=_0x22fd30['createServer'](function(_0x51940b,_0x59356f){var _0x32e4df=_0xd37b,_0x55eeb2=_0xaee529[_0x32e4df(0x1b7)](_0x51940b[_0x32e4df(0x1c2)],!![])[_0x32e4df(0x1eb)],_0x34c89c=_0x756b71;_0x55eeb2&&_0x55eeb2[_0x32e4df(0x1e0)]&&LANGUAGES[_0x55eeb2['lang']]&&(_0x34c89c=getArgsFactory(_0x55eeb2[_0x32e4df(0x1e0)])),_0x55eeb2&&_0x55eeb2[_0x32e4df(0x1d2)]?(_0x59356f['writeHead'](0xc8,{'Content-Type':'audio/mpeg'}),stream(_0x34c89c,_0x55eeb2[_0x32e4df(0x1d2)])[_0x32e4df(0x1f0)](_0x59356f)):(console['log'](_0x51940b[_0x32e4df(0x1e4)]),_0x59356f[_0x32e4df(0x1f5)](0xc8,{'Content-Type':_0x32e4df(0x1db)}),_0x59356f[_0x32e4df(0x1b4)](JSON[_0x32e4df(0x1ef)]({'code':-0x1,'message':_0x32e4df(0x1c8)+_0x51940b['headers']['host']+_0x32e4df(0x1e7)})));});_0xf5ae93[_0x4cf6c8(0x202)](_0x344e72),console[_0x4cf6c8(0x1bb)](_0x4cf6c8(0x1d5)+_0x344e72);}module['exports']=Text2Speech;