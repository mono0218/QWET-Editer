import S3 from "../r2"
import {DeleteObjectCommand, PutObjectCommand} from "@aws-sdk/client-s3";
class MotionStorage{
    async create({id,buffer}:{id:string,buffer:Buffer}){
        await S3.send(
            new PutObjectCommand({
                Body: buffer,
                Bucket: 'motion',
                Key: `${id}.vrm`,
                ContentType: "model/gltf-binary",
            })
        )
    }

    async update({id,buffer}:{id:string,buffer:Buffer}){
        await S3.send(
            new PutObjectCommand({
                Body: buffer,
                Bucket: 'motion',
                Key: `${id}.vrm`,
                ContentType: "model/gltf-binary",
            })
        )
    }

    async remove({id}:{id:string}){
        await S3.send(
            new DeleteObjectCommand({
                Bucket: 'motion',
                Key: `${id}.vrm`,
            })
        )
    }
}
