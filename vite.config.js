// import { defineConfig } from 'vite'
// import viteImagemin from 'vite-plugin-imagemin'
// export default defineConfig({
//     base: './' ,
//     server:{
//         port: 3333
//     },
//     // viteImagemin({
//     //     gifsicle: {
//     //       optimizationLevel: 7,
//     //       interlaced: false,
//     //     },
//     //     optipng: {
//     //       optimizationLevel: 7,
//     //     },
//     //     mozjpeg: {
//     //       quality: 20,
//     //     },
//     //     pngquant: {
//     //       quality: [0.8, 0.9],
//     //       speed: 4,
//     //     },
//     //     svgo: {
//     //       plugins: [
//     //         {
//     //           name: 'removeViewBox',
//     //         },
//     //         {
//     //           name: 'removeEmptyAttrs',
//     //           active: false,
//     //         },
//     //         ],
//     //     },
//     // })
//     // ],
// })

import { defineConfig } from 'vite';

export default defineConfig({
    // css: {
    //     postcss: {
    //         // viteでautoprefixerを使うことを宣言
    //         plugins: [require('autoprefixer')],
    //     },
    // },
    
    // module.exports = {
    base: './',
    // 開発ディレクトリの監視
    root: './src',
    build: {
        // 出力場所（バンドル場所）の指定
        outDir: '../dist',
        // ファイルの出力（バンドル）設定
        rollOptions: {
            output: {
                assetFileNames:(assetInfo) => {
                    let extType = assetInfo.name.split(".")[1];
                    // iは正規表現で大文字・小文字を無視する
                    if(/ttf | otf | eot | woff | woff2/i.test(extType)) {
                        extType = "fonts";
                    }
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'images';
                    }
                    //ビルド時のCSS名を明記してコントロールする
                    if(extType === 'css') {
                        return `assets/css/style.css`;
                    }
                    return `assets/${extType}/[name][extname]`;
                },
                chunkFileNames: 'assets/js/[name].js',
                entryFileNames: 'assets/js/[name].js',
                
            }
        }
    },
});