angular.module('app', [])
  .controller('appController', function($interval) {
    var triangle = this;
    triangle.text = 0;
    triangle.a = 0;
    triangle.b = 0;
    triangle.c = 0;
    triangle.isExists = false;

    triangle.inc = function() {
        triangle.text++;
        setTimeout(triangle.inc, 1000);
    }

    $interval(function() {
        triangle.text++;
    }, 1000);

    triangle.calcSquare = (a, b, c)  => {
        const p = (a + b + c) / 2;
        return Math.sqrt(
            p * (p - a) * (p - b) * (p - c)
        );
    }

    triangle.calcAlpha = (a, b, c) => {
        return Math.acos(
            (a**2 + b**2 - c**2) / (2*a*b)
        );
    }

    triangle.update = () => {
        triangle.a = set(triangle._a);
        triangle.b = set(triangle._b);
        triangle.c = set(triangle._c);
        triangle.alpha = triangle.calcAlpha(triangle.a, triangle.b, triangle.c);
        triangle.bHeight = triangle.CalcBHeight(triangle.b);
        triangle.bWidth = triangle.CalcBWidth(triangle.b);
        triangle.isExists = !isNaN(triangle.alpha);
        triangle.square = triangle.isExists?
        triangle.calcSquare(triangle.a, triangle.b, triangle.c):
        'Треугольника не существует';
        // triangle._a = scale(triangle.a);
        // triangle._b = scale(triangle.b);
        // triangle._c = scale(triangle.c);
    }

    triangle.CalcBHeight = (b) => {
        console.log(`sina: ${Math.sin(triangle.alpha)}`)
        return b * Math.sin(triangle.alpha);
    }

    triangle.CalcBWidth = (b) => {
        console.log(`cosa: ${Math.cos(triangle.alpha)}`)
        return b * Math.cos(triangle.alpha);
    }

    findMax = (a, b, c) => {
        return Math.max(a, Math.max(b, c));
    }

    set = (x) => {
        if (!isNaN(x) && x >= 0) {
            return x;
        }
    }

    triangle.scale = (x) => {
        const max = findMax(triangle.a, triangle.b, triangle.c);
        if (x == max) {
            return 40;
        } else {
            return x * 40 / max;
        }
    }

    triangle.update();
});