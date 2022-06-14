import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
    const [show, setShow] = useState("");

    return (
        <div className="w-[900px]">
            <ReactQuill
                theme="snow"
                style={{
                    height: 250,
                    marginTop: "1rem",
                    display: "flex",
                    flexDirection: "column",
                }}
                // value={show}
                modules={{
                    toolbar: [
                        [{ header: "1" }, { header: "2" }, { font: [] }],
                        [{ size: [] }],
                        ["bold", "italic", "underline", "strike", "blockquote"],
                        [{ align: [] }],
                        [{ color: [] }, { background: [] }],
                        [
                            { list: "ordered" },
                            { list: "bullet" },
                            { indent: "-1" },
                            { indent: "+1" },
                        ],
                        ["link", "video", "image", "code-block"],
                        ["clean"],
                    ],
                }}
                formats={[
                    "header",
                    "font",
                    "size",
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "blockquote",
                    "color",
                    "background",
                    "list",
                    "bullet",
                    "indent",
                    "link",
                    "video",
                    "image",
                    "code-block",
                    "align",
                ]}
                // onChange={(val) => {
                //     setShow(val);
                // }}
            />
        </div>
    );
};

export default Editor;