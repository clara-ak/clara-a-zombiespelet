var player = {
    x: 100,
    y: 100,
    size: 15,
};

var food = {size: 5};
//{x: 300,
// y:600, size: 5}

function update() {
    clearScreen()
    {
        rectangle(player.x, player.y, player.size, player.size, "pink");
        circle(300, 600, food.size, "orange");
        circle(900, 50, food.size, "blue");

        if (keyboard.d) {
            player.x += 5;
        }
        if (keyboard.a) {
            player.x -= 5;
        }
        if (keyboard.w) {
            player.y -= 5;
        }
        if (keyboard.s) {
            player.y += 5;
        }

    }
    var d = distance(player.x, player.y, food, food);

    if (d < 10)
        player.size += 5;
}