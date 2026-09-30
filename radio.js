/* Two user-supplied tracks. Audio only; no external video player. */
globalThis.CafeRadio=(()=>{
 const tracks=[{title:'오늘 어때 (wyd)',src:'wyd.mp3'},{title:'Like Fire',src:'like-fire.mp3'}];
 let language='ko',panel,audio,current=-1,bag=[],status='audioReady',history=[];
 const t=k=>CafeWords[language][k]??k;
 function paint(){if(!panel)return;panel.querySelectorAll('[data-radio-label]').forEach(el=>el.textContent=t(el.dataset.radioLabel));document.getElementById('radio-close').setAttribute('aria-label',t('collapseMusic'));document.getElementById('radio-status').textContent=t(status);document.getElementById('radio-track').textContent=current<0?'82MAJOR · 2 tracks':'♫ '+tracks[current].title;document.getElementById('radio-pause').textContent=t(audio.paused?'resumeMusic':'pauseMusic');document.getElementById('radio-volume').setAttribute('aria-label',t('volume'));panel.querySelectorAll('[data-track]').forEach(b=>{b.setAttribute('aria-pressed',String(Number(b.dataset.track)===current));});}
 function play(){audio.play().catch(()=>{status='audioBlocked';paint();});}
 function choose(i,remember=true){if(remember&&current>=0)history.push(current);current=i;audio.src=tracks[i].src;status='musicLoading';document.getElementById('radio-pause').disabled=false;if('mediaSession' in navigator){try{navigator.mediaSession.metadata=new MediaMetadata({title:tracks[i].title,artist:'82MAJOR',album:'Little Brew'});}catch{}}paint();play();}
 function next(){if(!bag.length){bag=Math.random()<.5?[0,1]:[1,0];if(bag.at(-1)===current)bag.reverse();}choose(bag.pop());}
 function previous(){if(history.length)choose(history.pop(),false);else if(current>=0){audio.currentTime=0;play();}}
 function init(){if(panel)return;panel=document.getElementById('radio');panel.innerHTML=`<div class="radio-heading"><h3 data-radio-label="radioTitle"></h3><button class="quiet" id="radio-close">×</button></div><p class="radio-note" data-radio-label="audioHint"></p><p class="radio-track" id="radio-track"></p><audio id="local-audio" controls preload="none" playsinline></audio><p id="radio-status" role="status" class="radio-note"></p><div class="radio-controls"><button class="buy" id="radio-next" data-radio-label="shuffle"></button><button class="quiet" id="radio-pause" disabled></button></div><label class="volume-label"><span data-radio-label="volume"></span><input id="radio-volume" type="range" min="0" max="100" value="35"></label><div class="track-list">${tracks.map((track,i)=>`<button class="reply" data-track="${i}" aria-pressed="false">♫ ${track.title}</button>`).join('')}</div>`;
 audio=document.getElementById('local-audio');audio.volume=.35;
 audio.addEventListener('play',()=>{status='musicPlaying';if('mediaSession' in navigator)navigator.mediaSession.playbackState='playing';paint();});
 audio.addEventListener('pause',()=>{if(!audio.ended)status='musicPaused';if('mediaSession' in navigator)navigator.mediaSession.playbackState='paused';paint();});
 audio.addEventListener('ended',next);audio.addEventListener('error',()=>{status='audioError';paint();});
 document.getElementById('radio-close').onclick=()=>{panel.hidden=true;};
 document.getElementById('radio-next').onclick=next;
 document.getElementById('radio-pause').onclick=()=>audio.paused?play():audio.pause();
 document.getElementById('radio-volume').oninput=e=>{audio.volume=Number(e.target.value)/100;};
 panel.querySelectorAll('[data-track]').forEach(b=>b.onclick=()=>{bag=[];choose(Number(b.dataset.track));});
 if('mediaSession' in navigator){for(const [key,handler] of Object.entries({play,pause:()=>audio.pause(),nexttrack:next,previoustrack:previous,seekto:d=>{if(Number.isFinite(d.seekTime))audio.currentTime=d.seekTime;}})){try{navigator.mediaSession.setActionHandler(key,handler);}catch{}}}
 paint();}
 return {open(lang){language=lang;init();panel.hidden=false;paint();},setLanguage(lang){language=lang;paint();}};
})();
