function heroes(arr) {

    let result = []

    arr.map(hero => hero.split(' / ')).map(hero => result.push({ name: hero[0], level: hero[1], items: hero[2].split(', ').join(', ') }))

    result.sort((a, b) => a.level - b.level).map(hero => console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`))

}
heroes([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

])