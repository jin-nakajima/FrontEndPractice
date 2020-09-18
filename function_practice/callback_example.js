const isTweetable = function(text) {
    return text.length <= 140;
};

console.log(isTweetable('aaa'))


// normal function
function bring(food) {
    if (/* 手を洗ったら*/) {
        // 食材を持ってきてもらう処理
    }
}

function cut(food) {
    if (/* 手を洗ったら */) {
        // 食材を切る
    }
}
// callback function
// fn = 何かしらの関数
function washed(fn,food) {
    if (/* 手を洗ったら */) {
        fn(food); // callback
    }
}

function bring(food) {
    // 食材を持ってきてもらう処理
}

function cut(food) {
    // 食材を切る
}

function washed(bring,'food')
