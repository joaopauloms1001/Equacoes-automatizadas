function baskara() {

    var a = document.getElementById('txta')
    var b = document.getElementById('txtb')
    var c = document.getElementById('txtc')

    var al = Number(a.value)
    var bl = Number(b.value)
    var cl = Number(c.value)

    if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0) {
        window.alert("[erro!] Preencha todos os campos")

    }
    else {

        var delta = (((bl) ** 2) - 4 * al * cl)
        var raizdelta = Math.sqrt(delta)

        if (delta < 0) {

            res1.innerHTML = `&Delta; = ${delta} || O delta é <b>negativo</b>, não existem raizes reais!`

        } else {

            x1 = (-bl + (raizdelta)) / 2 * al
            x2 = (-bl - (raizdelta)) / 2 * al

            res1.innerHTML = `<mark><b>x'= ${x1}</b></mark>  || <mark><b>x'' ${x2}</b></mark>`

        }

    }
}

function muv() {

    var v = document.getElementById('txtv')
    var vo = document.getElementById('txtvo')
    var at = document.getElementById('txtac')
    var t = document.getElementById('txtt')

    var vl = Number(v.value)
    var vol = Number(vo.value)
    var al = Number(at.value)
    var tl = Number(t.value)

    if (v.value.length == 0) {
        var vw = vol + (al * tl)
        res2.innerHTML = ` A velocidade final do objeto é de <mark>${vw}m/s</mark>`

    } else if (vo.value.length == 0) {
        var vol = (vl - (al * tl))
        res2.innerHTML = ` A velocidade inicial do objeto é de <mark>${vol}m/s</mark>`

    } else if (at.value.length == 0) {
        var al = (vl - vol) / tl

        if (al > 0) {
            res2.innerHTML = `O objeto esta acelerando a <mark>${al}m/s²</mark>`

        } else if (al == 0) {
            res2.innerHTML = `O objeto esta em velocidade <mark>constante</mark>`

        } else if (al < 0) {
            res2.innerHTML = `O objeto esta desacelerando a <mark>${al}m/s²</mark>`

        }
    } else if (t.value.length == 0) {
        tl = (vl - vol) / al

        if (tl < 0) {
            tl = Math.abs(tl);
            res2.innerHTML = `O tempo que o objeto demorou para deslocar foi de <mark>${tl}s</mark>`
        } else {
            res2.innerHTML = `O tempo que o objeto demorou para deslocar foi de <mark>${tl}s</mark>`
        }
    }
}

function forca() {

    var f = document.getElementById('txtf')
    var m = document.getElementById('txtm')
    var af = document.getElementById('txtac2')

    var fl = Number(f.value)
    var ml = Number(m.value)
    var av = Number(af.value)


    if (f.value.length == 0) {
        var fl = ml * av
        res3.innerHTML = `A força resultante do objeto é <mark>${fl}N</mark>`

    } else if (m.value.length == 0) {
        var ml = fl / av
        res3.innerHTML = `A massa do objeto é de <mark>${ml}Kg</mark>`

    } else if (af.value.length == 0) {
        var av = fl / ml
        res3.innerHTML = `A aceleração é de <mark>${av}m/s²</mark>`
    }
}

