var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fd00f805-34c4-4fa6-94ad-1bba87d79a99","39ca6294-b5e2-47e1-988e-26723de1af8f","d007ebdd-6708-49fb-a206-b996b6b89ea5","51005276-03e8-4a96-b6e3-0a4e85ad7d05","da991e05-9f4a-4b87-b813-845e6195df14"],"propsByKey":{"fd00f805-34c4-4fa6-94ad-1bba87d79a99":{"name":"car1","sourceUrl":null,"frameSize":{"x":20,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"0gaXhDWbQxh6ah_zQEPXTPwy2g8j6pe7","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":37},"rootRelativePath":"assets/fd00f805-34c4-4fa6-94ad-1bba87d79a99.png"},"39ca6294-b5e2-47e1-988e-26723de1af8f":{"name":"car2","sourceUrl":null,"frameSize":{"x":20,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"tQpiNXkAckyY7IYEtUbP__QEWWyZf_Zg","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":37},"rootRelativePath":"assets/39ca6294-b5e2-47e1-988e-26723de1af8f.png"},"d007ebdd-6708-49fb-a206-b996b6b89ea5":{"name":"car3","sourceUrl":null,"frameSize":{"x":20,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"K7bGKbA3Bw3cvZgCQ38Ibr0W34CcwF1v","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":37},"rootRelativePath":"assets/d007ebdd-6708-49fb-a206-b996b6b89ea5.png"},"51005276-03e8-4a96-b6e3-0a4e85ad7d05":{"name":"car4","sourceUrl":null,"frameSize":{"x":20,"y":36},"frameCount":5,"looping":true,"frameDelay":12,"version":"S8bQbQSYL863r89FZlhlV7C0di5mhxu.","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":72},"rootRelativePath":"assets/51005276-03e8-4a96-b6e3-0a4e85ad7d05.png"},"da991e05-9f4a-4b87-b813-845e6195df14":{"name":"XerokRoumes","sourceUrl":null,"frameSize":{"x":10,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"1zjqiDekjR3EEkK_8E.pWueZ09JXOodH","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":30},"rootRelativePath":"assets/da991e05-9f4a-4b87-b813-845e6195df14.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 5;

var car1 = createSprite(110,245,10,10);
car1.setAnimation("car1")

var car2 = createSprite(160,130,10,10);
car2.setAnimation("car2")

var car3 = createSprite(210,245,10,10);
car3.setAnimation("car3")

var car4 = createSprite(260,130,10,10);
car4.setAnimation("car4")

var boundary1 = createSprite(190,120,420,3);

var boundary2 = createSprite(190,260,420,3);

var XerokRoumes = createSprite(25,190,10,10);
XerokRoumes.setAnimation("XerokRoumes")

var safezone = createSprite(355,190,90,136)
safezone.shapeColor = "springgreen"
 

car1.velocityY = -10
car2.velocityY = 10
car3.velocityY = -10
car4.velocityY = 10




function draw() {
  background ("white")
  
  textSize(18)
  stroke("Blue")
  text("Vidas:" +life,175,100)
  
createEdgeSprites();
car1.bounceOff(boundary1)
car2.bounceOff(boundary1)
car3.bounceOff(boundary1)
car4.bounceOff(boundary1)
car1.bounceOff(boundary2)
car2.bounceOff(boundary2)
car3.bounceOff(boundary2)
car4.bounceOff(boundary2)

if (keyDown("right")) {
  XerokRoumes.x = XerokRoumes.x + 3
}
if (keyDown("left")) {
  XerokRoumes.x = XerokRoumes.x - 3
}

  if (XerokRoumes.isTouching(car1) || XerokRoumes.isTouching(car2) || XerokRoumes.isTouching(car3) || XerokRoumes.isTouching(car4)) {
    life = life -1
    XerokRoumes.x = 25
    XerokRoumes.y = 190
    playSound("assets/category_explosion/8bit_explosion.mp3")
  }
  
  if (XerokRoumes.isTouching(safezone)) {
    XerokRoumes.velocityX = 0
    car1.velocityY = 0
    car2.velocityY = 0
    car3.velocityY = 0
    car4.velocityY = 0
    stroke("green")
    text("Você Venceu!",150,50)
  }

  if (life == 0) {
    XerokRoumes.velocityX = 0
    car1.velocityY = 0
    car2.velocityY = 0
    car3.velocityY = 0
    car4.velocityY = 0
    stroke("red")
    text("Você morreu!",150,50)
  }
 
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
