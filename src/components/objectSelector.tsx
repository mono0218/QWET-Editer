import {Scene} from "@babylonjs/core";

export default function ObjectSelector({scene,onObjectSelect}:{ scene:Scene, onObjectSelect: (meshId:string) => void}){
    const handleObjectClick = (meshId:string) => {
        onObjectSelect(meshId);
    };

    const meshList = scene.meshes;

    return (
        <>
            <div className="w-72 bg-gray-800 p-4 text-white">
                <div className="mb-4 flex">
                    <button className="flex-1 rounded-md bg-transparent px-4 py-2 hover:bg-gray-700 focus:outline-none">
                        Scene
                    </button>
                </div>
                <div className="p-4">
                    <ul className="m-0 list-none p-0">
                        <li className="mb-2">
                            <div className="flex cursor-pointer items-center justify-between rounded-md bg-gray-700 px-4 py-2 hover:bg-gray-600"
                                 onClick={()=>{handleObjectClick(meshList[0].id)}}>

                                <span className="font-bold">{meshList[0].name}</span>
                                <button className="focus:outline-none">
                                    &#9660;
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
