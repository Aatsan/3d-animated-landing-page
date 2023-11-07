// Shery.imageEffect("#back", {style: 5 , debug:true, gooey:true})  <-----This line for customization

function imageEffect() {
  Shery.imageEffect("#back", { style: 5, config: { "a": { "value": 1.74, "range": [0, 30] }, "b": { "value": -0.97, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.2114754098360656 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.26, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 3 } }, "discard_threshold": { "value": 0.47, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.26, "range": [0, 2] }, "noise_scale": { "value": 17.36, "range": [0, 100] } }, gooey: true })
}
imageEffect();

function textEffect() {

  var elems = document.querySelectorAll(".elem")

  elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;

    document.querySelector("#main").addEventListener("click", function () {
      if (!animating) {
        animating = true;
        gsap.to(h1s[index], {
          top: "-=100%",
          ease: Expo.easeInOut,
          duration: 1,
          onComplete: function () {
            gsap.set(this._targets[0], { top: "100%" });
            animating = false;
          }
        });

        index === h1s.length - 1 ? (index = 0) : index++;

        gsap.to(h1s[index], {
          top: "-=100%",
          ease: Expo.easeInOut,
          duration: 1
        });
      }

    });

  });

};
textEffect();



Shery.imageEffect("#heroright #imagediv" ,{
    style:5,
    config:{"a":{"value":2.48,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.46,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":24.95},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uFrequencyX":{"value":17.36,"range":[0,100]},"uFrequencyY":{"value":12.4,"range":[0,100]},"uFrequencyZ":{"value":15.7,"range":[0,100]}},
})
