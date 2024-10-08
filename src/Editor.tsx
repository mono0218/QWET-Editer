import React, { useEffect, useState } from 'react'
import ObjectSelector from './components/objectSelector'
import ObjectSettingMenu from './components/objectSettingMenu'
import Header from './components/header'
import { QwetEditor } from './components/Editor'
import './global.css'

export default function Editor() {
    const [editor, seteditor] = useState<QwetEditor>()
    const [selectedObj, setSelectedObj] = useState<number>(0)

    useEffect(() => {
        seteditor(new QwetEditor())
    }, [])

    const handleObjectSelect = (uniqueId: number) => {
        setSelectedObj(uniqueId)
    }

    return (
        <>
            {editor ? <Header editor={editor} /> : <div>Loading...</div>}

            <div className="flex">
                {editor ? (
                    <ObjectSelector
                        editor={editor}
                        handleObjectSelect={handleObjectSelect}
                    />
                ) : (
                    <div>Loading...</div>
                )}

                <canvas className="w-2/3" />
                {editor ? (
                    <ObjectSettingMenu editor={editor} uniqueId={selectedObj} />
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    )
}
