function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isLandscape() {
    return window.innerWidth > window.innerHeight;
}

function handleMobileFullscreen(gameContainer, gameIframe, fullscreenBtn, exitFullscreenBtn, domainWatermark) {
    setTimeout(function() {
        domainWatermark.style.display = 'block';
    }, 1000);
    document.querySelector('header').style.display = 'none';
    gameContainer.style.height = '100vh';
    gameContainer.style.width = '100vw';
    gameContainer.style.position = 'fixed';
    gameContainer.style.top = '0';
    gameContainer.style.left = '0';
    gameContainer.style.zIndex = '9999';
    gameContainer.style.backgroundColor = '#000';

    if (isLandscape()) {
        gameIframe.style.width = '100vw';
        gameIframe.style.height = '100vh';
        gameIframe.style.transform = 'none';
        gameIframe.style.position = 'static';
        exitFullscreenBtn.style.transform = 'none';
        domainWatermark.style.display = 'block';
    } else {
        gameIframe.style.width = '100vh';
        gameIframe.style.height = '100vw';
        gameIframe.style.transform = 'rotate(90deg)';
        gameIframe.style.transformOrigin = 'top left';
        gameIframe.style.position = 'absolute';
        gameIframe.style.top = '0';
        gameIframe.style.left = '100%';
        exitFullscreenBtn.style.transform = 'rotate(90deg)';
        domainWatermark.style.display = 'none';
    }

    fullscreenBtn.style.display = 'none';
    exitFullscreenBtn.style.display = 'block';

    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(() => {
            console.log('Landscape lock not supported');
        });
    }
}

function handleDesktopFullscreen(gameIframe, fullscreenBtn, exitFullscreenBtn) {
    if (gameIframe.requestFullscreen) {
        gameIframe.requestFullscreen();
    } else if (gameIframe.mozRequestFullScreen) {
        gameIframe.mozRequestFullScreen();
    } else if (gameIframe.webkitRequestFullscreen) {
        gameIframe.webkitRequestFullscreen();
    } else if (gameIframe.msRequestFullscreen) {
        gameIframe.msRequestFullscreen();
    }
    fullscreenBtn.style.display = 'none';
    exitFullscreenBtn.style.display = 'block';
}

function enterFullscreen(gameContainer, gameIframe, fullscreenBtn, exitFullscreenBtn, domainWatermark) {
    if (isMobile()) {
        handleMobileFullscreen(gameContainer, gameIframe, fullscreenBtn, exitFullscreenBtn, domainWatermark);
    } else {
        handleDesktopFullscreen(gameIframe, fullscreenBtn, exitFullscreenBtn);
    }
}

function exitFullscreen(gameContainer, gameIframe, fullscreenBtn, exitFullscreenBtn, domainWatermark) {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }

    if (isMobile()) {
        document.querySelector('header').style.display = 'block';
        gameContainer.style = '';
        gameIframe.style = '';
        domainWatermark.style.display = 'none';
        if (screen.orientation && screen.orientation.unlock) {
            screen.orientation.unlock();
        }
    }

    fullscreenBtn.style.display = 'block';
    exitFullscreenBtn.style.display = 'none';
}

function handleFullscreenChange(gameContainer, gameIframe, fullscreenBtn, exitFullscreenBtn, domainWatermark) {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && 
        !document.mozFullScreenElement && !document.msFullscreenElement) {
        exitFullscreen(gameContainer, gameIframe, fullscreenBtn, exitFullscreenBtn, domainWatermark);
    }
}

function autoEnterFullscreen(gameContainer, gameIframe, fullscreenBtn, exitFullscreenBtn, domainWatermark) {
    if (isMobile() && !isLandscape()) {
        handleMobileFullscreen(gameContainer, gameIframe, fullscreenBtn, exitFullscreenBtn, domainWatermark);
    }
}

export { enterFullscreen, exitFullscreen, handleFullscreenChange, autoEnterFullscreen };
