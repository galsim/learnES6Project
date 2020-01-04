const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
    // Здесь будут задачи Gulp

    // Исходный код для Node
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"))
    
    //исходный код для браузера
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"))
})