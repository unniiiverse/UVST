import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(fonter({
            formats: ['woff']
        }))
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))

        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}

export const fontsStyle = () => {
    let fontsFile = `${app.path.srcFolder}/scss/base/fonts.scss`;
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            if (!fs.existsSync(fontsFile)) {
                fs.writeFile(fontsFile, '', cb);
                let newFileOnly;
                for (var i = 0; i < fontsFiles.length; i++) {
                    let fontFileName = fontsFiles[i].split('.')[0];
                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                        let fontWS = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                        let fontStyle = 'normal';

                        console.log(fontWS)

                        if (fontWS.toLowerCase() === 'thin') {
                            fontWS = 100;
                        } else if (fontWS.toLowerCase() === 'extralight' || fontWS.toLowerCase() === 'ultralight') {
                            fontWS = 200;
                        } else if (fontWS.toLowerCase() === 'light') {
                            fontWS = 300;
                        } else if (fontWS.toLowerCase() === 'medium') {
                            fontWS = 500;
                        } else if (fontWS.toLowerCase() === 'semibold') {
                            fontWS = 600;
                        } else if (fontWS.toLowerCase() === 'bold') {
                            fontWS = 700;
                        } else if (fontWS.toLowerCase() === 'extrabold' || fontWS.toLowerCase() === 'heavy') {
                            fontWS = 800;
                        } else if (fontWS.toLowerCase() === 'black') {
                            fontWS = 900;
                        } else if (fontWS.toLowerCase() === 'thinitalic') {
                            fontWS = 100;
                            fontStyle = 'italic';
                        } else if (fontWS.toLowerCase() === 'extralightitalic' || fontWS.toLowerCase() === 'ultralightitalic') {
                            fontWS = 200;
                            fontStyle = 'italic';
                        } else if (fontWS.toLowerCase() === 'lightitalic') {
                            fontWS = 300;
                            fontStyle = 'italic';
                        } else if (fontWS.toLowerCase() === 'mediumitalic') {
                            fontWS = 500;
                            fontStyle = 'italic';
                        } else if (fontWS.toLowerCase() === 'semibolditalic') {
                            fontWS = 600;
                            fontStyle = 'italic';
                        } else if (fontWS.toLowerCase() === 'bolditalic') {
                            fontWS = 700;
                            fontStyle = 'italic';
                        } else if (fontWS.toLowerCase() === 'extrabolditalic' || fontWS.toLowerCase() === 'heavyitalic') {
                            fontWS = 800;
                            fontStyle = 'italic';
                        } else if (fontWS.toLowerCase() === 'blackitalic') {
                            fontWS = 900;
                            fontStyle = 'italic';
                        } else {
                            fontWS = 400;
                        }
                        fs.appendFile(fontsFile, `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../../fonts/${fontFileName}.woff2") format("woff2"), url("../../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWS};\n\tfont-style: ${fontStyle};\n}\r\n`, cb);
                        newFileOnly = fontFileName;
                    }
                }
            } else {
                console.error("Файл scss/base/fonts.scss уже существует. Для обновления файла нужно его удалить!");
            }
        }
    });
    return app.gulp.src(`${app.path.srcFolder}`);

    function cb() {}

}