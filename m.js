//analyser
	
	 var audio =new (Audio);
	audio.src='song1.mp3';
	audio.control= true;
	audio.loop=true;
	audio.autoplay=false;
	
	
	var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
	window.addEventListener("load",initMp3Player,false);
	function initMp3Player() {
    document.getElementByID('audio_box').appendChild(audio);
	context=new webkitAudioContext();
	analyser=context.createAnalyser();
	canvas=document.getElementByID('analyser');
	ctx= canvas.getContext('2d');
	source=context.createMediaElementSource(audio);
	source.connect(analyser);
	analyser.connect(context.destination);
	frameLooper();
	}
	
	
	function frameLooper(){
		window.webkitRequestAnimationFrame(frameLooper);
		var frequencyBinCount;
		fbc_array=new Uint8Array(analyser.frequencyBinCount);
		analyser.getByteFrequencyData( fbc_array);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle='#00CCFF';
		bars=100;
		for(var i=0;i<bars;i++){
			bar_x=1*3;
			bar_width=2;
			bar_height=-(fbc_array[i]/2);
			ctx.fillRect(bar_x,canvas.height,bar-width,bar_height);
			
		}
	}
	
	frameLooper();
	