import fileinclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import nocache from 'gulp-version-number';

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.if(
            app.isBuild,
            webpHtmlNosvg()
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            nocache({
                'value': '%DT%',
                'append': {
                    'key': 'nocache',
                    'to': ['css', 'js']
                }
            })
        ))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream());
}

export const htmlInclude = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(app.gulp.dest(app.path.build.html));
}