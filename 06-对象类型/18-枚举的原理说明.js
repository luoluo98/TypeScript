var songs = ['南山南', '成都'];
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
function changeDirection(direction) { }
changeDirection(Direction.Up);
