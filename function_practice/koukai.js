function confirmed(fn) {
    const input = window.prompt('実行しますか');
    if (input === '実行') {
        fn();
    }
}

confirmed(function() {
    console.log('リポジトリを削除')
});