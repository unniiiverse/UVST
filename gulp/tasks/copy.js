export const copy = () => {
    return app.gulp.src(app.path.src.files)
        .pipe(app.gulp.dest(app.path.build.files))
        .pipe(app.plugins.browserSync.stream());
}

export const useSrcBackup = () => {
    return app.gulp.src(`${app.path.backup}/srcBackup/**/*.*`)
        .pipe(app.gulp.dest(app.path.srcFolder))
}