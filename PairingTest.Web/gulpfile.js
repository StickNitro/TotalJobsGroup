const ts = require("gulp-typescript");
const gulp = require("gulp");
const clean = require("gulp-clean");
const karma = require("karma");

const destPath = "./libs/";

// Delete the dist directory
gulp.task("clean", () => {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
        "core-js/client/*.js",
        "systemjs/dist/*.js",
        "reflect-metadata/*.js",
        "rxjs/**",
        "zone.js/dist/*.js",
        "@angular/**/bundles/*.js",
        "bootstrap/dist/js/*.js"
    ], {
            cwd: "node_modules/**"
        })
        .pipe(gulp.dest("./libs"));
});

const tsProject = ts.createProject("tsScripts/tsconfig.json", {
    typescript: require("typescript")
});
gulp.task("ts", (done) => {
    const tsResult = gulp.src([
        "tsScripts/*.ts"
    ])
        .pipe(tsProject(), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest("./dist"));
});

gulp.task("watch", ["watch.ts"]);

gulp.task("watch.ts", ["ts"], () => {
    return gulp.watch("tsScripts/*.ts", ["ts"]);
});

gulp.task("test", (done) => {
    const karmaServer = new karma.Server({
        singleRun: true
    }, (exitCode) => { 
        done();
        process.exit(exitCode);
    });
});

gulp.task("default", ["scriptsNStyles", "watch"]);
