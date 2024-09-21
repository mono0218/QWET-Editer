import NodeSetting from './node/nodeSetting'
import SceneSetting from './scene/sceneSetting'
import MeshSetting from './mesh/meshSetting'
import {QwetEditer} from "../lib/Editer";
import {TransformNode} from "@babylonjs/core";

export default function ObjectSettingMenu({
    editer,
    uniqueId,
}: {
    editer: QwetEditer
    uniqueId: number
}) {
    const mesh = editer.scene.getMeshByUniqueId(uniqueId)
    const light = editer.scene.getLightByUniqueId(uniqueId)
    const camera = editer.scene.getCameraByUniqueId(uniqueId)
    const node = editer.scene.getTransformNodeByUniqueId(uniqueId)
    editer.gizmo.positionGizmoEnabled = false;
    editer.gizmo.scaleGizmoEnabled = false;
    editer.gizmo.rotationGizmoEnabled = false;
    if (uniqueId === 0) {
        return <SceneSetting scene={editer.scene} />
    } else if (mesh) {
        editer.gizmo.positionGizmoEnabled = true;
        editer.gizmo.usePointerToAttachGizmos = false;
        editer.gizmo.attachToMesh(mesh);
        return <MeshSetting mesh={mesh} editer={editer}/>
    } else if (light) {
        editer.gizmo.positionGizmoEnabled = true;
        editer.gizmo.attachToNode(light);
    } else if (camera) {
        return <>a</>
    } else if (node) {
        editer.gizmo.positionGizmoEnabled = true;

        editer.gizmo.usePointerToAttachGizmos = false;
        editer.gizmo.attachToNode(node);
        return <NodeSetting node={node} />
    }
}
