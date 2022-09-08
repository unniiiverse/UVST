import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import webpCss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMedia from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {
            sourcemaps: true
        })
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass())
        .pipe(groupCssMedia())
        .pipe(webpCss({
            webpClass: '.webp',
            noWebpClass: '.no-webp'
        }))
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserslist: ['last 3 versions'],
            cascade: true
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream());
}