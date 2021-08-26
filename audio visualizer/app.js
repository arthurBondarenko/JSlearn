(function() {

    const NBR_OF_BARS = 50; 

    const audio = document.querySelector("audio");
    
    const ctx = new AudioContext();
    
    const audioSource = ctx.createMediaElementSource(audio);

    const analayzer = ctx.createAnalyser();

    audioSource.connect(analayzer);
    audioSource.connect(ctx.destination);

    const frequencyData = new Uint8Array(analayzer.frequencyBinCount);
    analayzer.getByteFrequencyData(frequencyData);

    const visualizerContainer = document.querySelector(".visualizer-container");

    for(let i = 0; i < NBR_OF_BARS; i++) {
        const bar = document.createElement("DIV");
        bar.setAttribute("id", "bar" + i);
        bar.setAttribute("class", "visualizer-container__bar");
        visualizerContainer.appendChild(bar);
    }

    function renderFrame() {
        analayzer.getByteFrequencyData(frequencyData);

        for(let i = 0; i < NBR_OF_BARS; i++) {

            const index = (i + 10) * 2;
            const fd = frequencyData[index];

            const bar = document.querySelector("#bar" + i);

            if(!bar) {
                continue;
            }

            const barHeight = Math.max(4, fd || 0);
            bar.style.height = barHeight + "px";
        }
        window.requestAnimationFrame(renderFrame);
    }

    renderFrame();

    audio.volume = 0.25;
    audio.play();
})();