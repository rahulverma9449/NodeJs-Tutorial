// Write your code here
import { readFileSync, writeFileSync } from 'fs';

const writeBlog = (filePath, blogContent) => {
    try {
        writeFileSync(filePath, blogContent);
        //console.log(`Blog saved successfully to ${filePath}`);
    } catch (error) {
        console.error(`Error writing blog to ${filePath}: ${error.message}`);
    }
};

const publishBlog = (filePath) => {
    try {
        const blogContent = readFileSync(filePath, 'utf-8');
        return blogContent;
    } catch (error) {
        console.error(`Error publishing blog from ${filePath}: ${error.message}`);
        return null;
    }
};

export { writeBlog, publishBlog };