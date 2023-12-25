// Write your code here
import readline from 'readline';
import { writeBlog, publishBlog } from './blogActions.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter your blog: ", (blogInput) => {
    writeBlog('./myblog.txt', blogInput);
    const publishedBlog = publishBlog('./myblog.txt');
    if (publishedBlog !== null) {
        //console.log("Published Blog:");
        console.log(publishedBlog);
    }
    rl.close();
});