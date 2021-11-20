import React, { useState } from "react";

// Components
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const WYSIWYGEditor = (props: any) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = (editorState: any) => {
        setEditorState(editorState);
        console.log("PROPS ==> ", props);
        return props.onChange(
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
        );
    };

    return (
        <React.Fragment>
            <div className="editor">
                <Editor
                    editorState={editorState}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    onEditorStateChange={onEditorStateChange}
                />
            </div>
        </React.Fragment>
    );
};

export default WYSIWYGEditor;