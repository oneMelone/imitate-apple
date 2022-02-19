window.addEventListener('scroll', (e) => {
  let scrolled = document.documentElement.scrollTop;
  console.log(scrolled);

  // get Elements
  let $stickyImg1 = document.querySelector('.sticky-img1');

  let $sentence1 = document.querySelector('#intro-sentence-1');
  let $sentence2 = document.querySelector('#intro-sentence-2');
  let $sentence3 = document.querySelector('#intro-sentence-3');
  let $sentence4 = document.querySelector('#intro-sentence-4');
  let $sentence5 = document.querySelector('#intro-sentence-5');
  let $sentence6 = document.querySelector('#intro-sentence-6');

  let $proMaxDisplay = document.querySelector('#pro-max-display');
  let $proDisplay = document.querySelector('#pro-display');
  let $proMaxImg67 = document.querySelector('#pro-max-img-67');
  let $proImg61 = document.querySelector('#pro-img-61');
  let $retinaDisplay = document.querySelector('#retina-display');

  let $scene4Part1 = document.querySelector('#scene4-part1');
  let $scene4Part2 = document.querySelector('#scene4-part2');
  let $scene4Part3 = document.querySelector('#scene4-part3');

  let $scene5Img = document.querySelector('#scene5-img');

  let $macroPhotographyIntro = document.querySelector('#macro-photography-intro');
  let $videoIntroContainer = document.querySelector('#video-intro-container');

  let $trueDepthDoc = document.querySelector('#true-depth-doc');
  let $selfieImg = document.querySelector('#selfie-img');
  let $noWonderBanner = document.querySelector('#no-wonder-banner');

  // scene-1
  let insetValue = (scrolled > 45 ? scrolled - 95: 0) / 800;
  $stickyImg1.style.clipPath = `inset(0px 0px ${insetValue * 100}% 0px)`

  // scene-2
  if (scrolled < 570) {
    $sentence1.style.color = ''
    $sentence2.style.color = ''
    $sentence3.style.color = ''
    $sentence4.style.color = ''
    $sentence5.style.color = ''
    $sentence6.style.color = ''
  } else if (scrolled >= 570 && scrolled < 750) {
    $sentence1.style.color = 'white'
    $sentence2.style.color = ''
    $sentence3.style.color = ''
    $sentence4.style.color = ''
    $sentence5.style.color = ''
    $sentence6.style.color = ''
  } else if (scrolled >= 750 && scrolled < 1080) {
    $sentence1.style.color = ''
    $sentence2.style.color = 'white'
    $sentence3.style.color = ''
    $sentence4.style.color = ''
    $sentence5.style.color = ''
    $sentence6.style.color = ''
  } else if (scrolled >= 1080 && scrolled < 1245) {
    $sentence1.style.color = ''
    $sentence2.style.color = ''
    $sentence3.style.color = 'white'
    $sentence4.style.color = ''
    $sentence5.style.color = ''
    $sentence6.style.color = ''
  } else if (scrolled >= 1245 && scrolled < 1350) {
    $sentence1.style.color = ''
    $sentence2.style.color = ''
    $sentence3.style.color = ''
    $sentence4.style.color = 'white'
    $sentence5.style.color = ''
    $sentence6.style.color = ''
  } else if (scrolled >= 1350 && scrolled < 1620) {
    $sentence1.style.color = ''
    $sentence2.style.color = ''
    $sentence3.style.color = ''
    $sentence4.style.color = ''
    $sentence5.style.color = 'white'
    $sentence6.style.color = ''
  } else if (scrolled >= 1620) {
    $sentence1.style.color = ''
    $sentence2.style.color = ''
    $sentence3.style.color = ''
    $sentence4.style.color = ''
    $sentence5.style.color = ''
    $sentence6.style.color = 'white'
  }

  // scene-3
  if (scrolled >= 1830 && scrolled < 2300) {
    let opa = 0.3 + (scrolled - 1830) * (1 - 0.3) / (2300 - 1830);
    $proMaxDisplay.style.opacity = `${opa}`
    $proDisplay.style.opacity = `${opa}`
    let proMaxDisplayTrans = 150 - (scrolled - 1830) * 100 / (2300 - 1830);
    let proDisPlayTrans = -150 + (scrolled - 1830)  * 100 / (2300 - 1830);
    let ProMaxTrans = 100 - (scrolled - 1830) * 30 / (2300 - 1830);
    let ProTrans = -100 + (scrolled - 1830) * 30 / (2300 - 1830);
    $proMaxDisplay.style.transform = `translate(${proMaxDisplayTrans}px, 0px)`
    $proDisplay.style.transform = `translate(${proDisPlayTrans}px, 0px)`
    $proMaxImg67.style.transform = `translate(${ProMaxTrans}px, 0px)`
    $proImg61.style.transform = `translate(${ProTrans}px, 0px)`
  } else if (scrolled >= 2400 && scrolled < 2700) {
    let opa = 1 - (scrolled - 2400) * (1 - 0.3) / (2700 - 2400)
    let proMaxDisplayTrans = 50 + (scrolled - 2400) * 100 / (2700 - 2400);
    let proDisPlayTrans = -50 - (scrolled - 2400)  * 100 / (2700 - 2400);
    let ProMaxTrans = 70 + (scrolled - 2400) * 30 / (2700 - 2400);
    let ProTrans = -70 - (scrolled - 2400) * 30 / (2700 - 2400);
    $proMaxDisplay.style.transform = `translate(${proMaxDisplayTrans}px, 0px)`
    $proDisplay.style.transform = `translate(${proDisPlayTrans}px, 0px)`
    $proMaxImg67.style.transform = `translate(${ProMaxTrans}px, 0px)`
    $proImg61.style.transform = `translate(${ProTrans}px, 0px)`
    $proMaxDisplay.style.opacity = `${opa}`
    $proDisplay.style.opacity = `${opa}`
  }
  if (scrolled >= 2400 && scrolled < 3200) {
    let insetValue = (scrolled - 2393) / 800;
    $retinaDisplay.style.clipPath = `inset(0px 0px ${insetValue * 100}% 0px)`
  }

  //scene-4
  if (scrolled >= 3220 && scrolled < 4220) {
    let insetValue = (scrolled - 3220) / (1000);
    $scene4Part1.style.clipPath = `inset(0px 0px ${insetValue * 100}% 0px)`
  } else if (scrolled >= 4220 && scrolled < 5220) {
    let insetValue = (scrolled - 4220) / (1000);
    $scene4Part2.style.clipPath = `inset(0px 0px ${insetValue * 100}% 0px)`
  } else if (scrolled >= 5220 && scrolled < 6220) {
    let insetValue = (scrolled - 5220) / (1000);
    $scene4Part3.style.clipPath = `inset(0px 0px ${insetValue * 100}% 0px)`
  }

  // scene-5
  if (scrolled >= 6670 && scrolled < 7830) {
    let translateValue = -770 + (scrolled - 6670) * 800 / (7830 - 6670);
    $scene5Img.style.transform = `translate(-300px, ${translateValue}px)`;
  }

  // scene-6
  if (scrolled >= 9180 && scrolled < 9500) {
    let translateValue = 200 - (scrolled - 9180) * 200 / (9500 - 9180);
    let opacity = (scrolled - 9180) / (9500 - 9180);
    $macroPhotographyIntro.style.transform = `translate(0px, ${translateValue}px)`;
    $macroPhotographyIntro.style.opacity = `${opacity}`;
  } else if (scrolled >= 10600 && scrolled < 10900) {
    let translateValue = 200 - (scrolled - 10600) * 200 / (10900 - 10600);
    let opacity = (scrolled - 10600) / (10900 - 10600);
    $videoIntroContainer.style.transform = `translate(0px, ${translateValue}px)`;
    $videoIntroContainer.style.opacity = `${opacity}`;
  }

  // scene-7
  if (scrolled >= 11860 && scrolled < 12460) {
    let translateValue = scrolled - 11860;
    let opacity = 1 - (scrolled - 11860) / 300;
    $trueDepthDoc.style.transform = `translate(0px, ${translateValue}px)`;
    $trueDepthDoc.style.opacity = `${opacity}`;
  }
  if (scrolled >= 12320 && scrolled < 12800) {
    let translateValue = scrolled - 12320;
    let scaleValue = (scrolled - 12320) / (12800 - 12320);
    $selfieImg.style.transform=`translate(${900 + translateValue/4}px, ${600}px) scale(${2 - scaleValue}, ${2 - scaleValue})`
  }
  if (scrolled >= 12340 && scrolled < 12870) {
    let opacity = (scrolled - 12340) / (12870 - 12340);
    $noWonderBanner.style.opacity = `${opacity}`;
  }
  if (scrolled >= 12460 && scrolled < 12870) {
    let translateValue = scrolled - 12460;
    console.log("translateValue =", translateValue);
    $noWonderBanner.style.transform = `translate(350px, ${-800 + translateValue}px)`;
    console.log("noWonderBanner.style.transform =", $noWonderBanner.style.transform)
  }
})