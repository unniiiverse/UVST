import fileinclude from "gulp-file-include";
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import nocache from 'gulp-version-number';

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(webpHtmlNosvg())
        .pipe(nocache({
            'value': '%DT%',
            'append': {
                'key': 'nocache',
                'to': ['css', 'js']
            }
        }))
        .pipe(app.gulp.dest(app.path.build.html));
}