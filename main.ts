input.onButtonPressed(Button.A, function () {
    on = 0
})
input.onButtonPressed(Button.B, function () {
    on = 1
})
let on = 0
on = 1
basic.forever(function () {
    let magnetic_force = 0
    if (on) {
    	
    } else if (magnetic_force >= 1000) {
        game.addScore(1)
        music.playTone(698, music.beat(BeatFraction.Quarter))
        basic.pause(100)
    } else if (magnetic_force >= 800) {
        game.addScore(1)
        music.playTone(523, music.beat(BeatFraction.Quarter))
        basic.pause(300)
    } else if (magnetic_force >= 1000) {
        game.addScore(1)
        music.playTone(392, music.beat(BeatFraction.Half))
        basic.pause(500)
    } else if (magnetic_force >= 1000) {
        game.addScore(1)
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.pause(1000)
    } else {
        game.addScore(1)
        basic.pause(1200)
    }
})
