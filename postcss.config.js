module.exports = {
    plugins: {
        'postcss-normalize-charset': {},
        autoprefixer: { grid: "autoplace" },
        // メディアクエリをソートして１つにまとめる
        'postcss-sort-media-queries': {},
        // cssプロパティの順番を並び替える
        'css-declaration-sorter':{order:'smacss'},
    },
}