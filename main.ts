sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
    info.changeScoreBy(-1)
    otherSprite.destroy(effects.ashes, 100)
    music.powerDown.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(sprite, otherSprite: Sprite) {
     otherSprite.destroy(effects.hearts, 100)
     sprite.destroy()
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(sprite, otherSprite: Sprite) {
    if (otherSprite==mouse){
    otherSprite.setPosition(randint(0,160), randint(0,120))
    info.changeScoreBy(1)
    sprite.say("+" + 1, 200)
    }
    if (otherSprite==fish){
    otherSprite.setPosition(randint(0,160), randint(0,120))
    info.changeScoreBy(1)}
    sprite.say("+" + 1, 200)
    if (otherSprite==ice_cream){
    otherSprite.setPosition(randint(0,160), randint(0,120))
    info.changeLifeBy(-1)
    info.changeScoreBy(-3)
    sprite.say("-" + 1, 200)
    if (info.score() < 0){
    game.over()
    }
    }
})


controller.A.onEvent(ControllerButtonEvent.Pressed, function (){
    bone = sprites.createProjectileFromSide(assets.image`Bone`,0,-100)
    bone.setPosition(myCat.x, myCat.y)
    bone.setKind(SpriteKind.Projectile)
    })

scene.setBackgroundColor(10)

let myCat = sprites.create(assets.image`cat`, SpriteKind.Player )
let bone: Sprite = null
let myDog : Sprite = null
let mouse = sprites.create(assets.image`Mouse`
,SpriteKind.Food)
let fish  =sprites.create(assets.image`fish`
,SpriteKind.Food)
let ice_cream  =sprites.create(assets.image`ice cream`
,SpriteKind.Food)


controller.moveSprite(myCat)
myCat.setStayInScreen(true)
info.setLife(5)
info.setScore(2)
info.startCountdown(30)
game.splash("VÍTEJ VE HŘE! Tvá role je kočka, kterou musíš nakrmit. Dej si pozor na správné jídlo a na pejsky, kteří se ti snaží v cestě zabránit.")


/*game.onUpdateInterval(1200, function(){
    let dog = sprites.createProjectileFromSide(assets.image`Dog`, randint(-50, 50), randint(-50, 50))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (cat, dog)
{
    //cat.startEffect(effects.trail, 200)
    info.changeScoreBy(1)
})*/

game.onUpdateInterval(500, function() {
    myDog = sprites.createProjectileFromSide(assets.image`dog`, Math.randomRange(-20,20), Math.randomRange(60,80))
    myDog.setPosition(Math.randomRange(0,160), 0)
    myDog.setKind(SpriteKind.Enemy)
})

