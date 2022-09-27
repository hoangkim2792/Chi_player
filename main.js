var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'orange',
    // progressColor: 'none',
    height: '110',
    responsive: 'true',
    barWidth: '8',
    drawingContextAttributes: '{desynchronized: false}',

});


wavesurfer.load('./src/music/song.wav');

wavesurfer.on('ready', function () {
    wavesurfer.play();
});     