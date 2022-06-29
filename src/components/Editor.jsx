import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ]
}

const Editor = () => {
    const [show, setShow] = useState("");

    return (
        <div className="w-[900px]">
            <ReactQuill
                theme="snow"
                // onChange={...}
            modules={modules}
            placeholder="Your text goes here..."
            
            />
        </div>
    );
};



export default Editor;
