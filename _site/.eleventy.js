module.exports = function(eleventyConfig) {
    //Passing Css Properties:
    eleventyConfig.addPassthroughCopy('')
    //Return Obj options
    return{
        dir: {
            input: "src", 
            output: "_site" 
        }
    }
}