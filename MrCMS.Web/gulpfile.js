/// <binding Clean='clean' ProjectOpened='watch-gulp' />  

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    //project = require("./project.json");  //Requires that you have a project.json file and gets webroot directory from it.
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');

var paths = {
    // webroot: "./" + project.webroot + "/Content/"
    webroot: "./Content/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";
paths.sass = paths.webroot + "css/sass/**/*.scss";
paths.sassDest = paths.webroot + "css";
paths.cssCopyTo = "./themes/ridge-realty/content/css/";
//paths.autoprefixer = paths.webroot + "css/dist/style-sass.css";
//paths.autoprefixerDest = paths.webroot + "css/dist/dist"; 

//sass  
gulp.task('sass-autoprefixer:compile', function () {
    gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(gulp.dest(paths.sassDest))
        .pipe(gulp.dest(paths.cssCopyTo));
});

//gulp.task('watch:sass', function () {
//    gulp.watch(paths.sass, ['sass-compile']);
//});

gulp.task('watch-gulp', function () {
    //gulp.watch(paths.sass, ['sass-compile', 'autoprefixer-compile']);
    gulp.watch(paths.sass, ['sass-autoprefixer:compile']);

});

//autoprefixer
//gulp.task('autoprefixer-compile', function () {
//    return gulp.src(paths.autoprefixer)
//        .pipe(autoprefixer({
//            browsers: ['last 2 versions']   
//            //,
//            //cascade: false
//        }))
//        .pipe(gulp.dest(paths.sassDest));
//});

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);
