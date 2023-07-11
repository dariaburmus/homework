const gulp = require("gulp");
const dartSass = require("sass");
const gulpSass = require("gulp-sass");
const concatCss = require("gulp-concat-css");
const uglify = require("gulp-uglify");
const minifyCSS = require("gulp-minify-css");
const concat = require("gulp-concat");

const sass = gulpSass(dartSass);

gulp.task("buildStyles", () => {
  return gulp
    .src("src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concatCss("./bundle.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest("./css"));
});

gulp.task("watchStyles", () => {
  return gulp.watch("src/**/*.scss", gulp.series(["buildStyles"]));
});

gulp.task("minifyJs", () => {
  return gulp
    .src("./src/**/*.js")
    .pipe(uglify())
    .pipe(concat("main.js"))
    .pipe(gulp.dest("./dist/js"));
});

gulp.task("watchMinifyJs", () => {
  return gulp.watch("./src/**/*.js", gulp.series(["minifyJs"]));
});
