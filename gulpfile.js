const gulp=require("gulp");

//转译javascript
gulp.task("webpack",()=>{
    const webpack=require("webpack-stream");
    const config=require("./webpack.config.js");
    gulp.src("./src/js/**/*.js")
        .pipe(webpack(config))
        .pipe(gulp.dest("./www/js"));
});

//编译less为css
gulp.task("less",()=>{
    const less=require("gulp-less");
    gulp.src("./src/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("./www/css"));

});

gulp.task("default",["webpack","less"]);

gulp.task("watch",()=>{
    gulp.watch("src/less/**/*.less",["less"]);
    gulp.watch("src/js/**/*.js",["webpack"]);
})
