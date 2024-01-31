"use client"
import {Image} from "@nextui-org/react";
import {Input, Textarea} from "@nextui-org/input";
import {Modal, ModalContent ,ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function MotionUploadModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isSend, setIsSend] = useState(false)
    const router = useRouter();

    const onSubmit = async (event)=>{
        setIsSend(true)
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/motion', {
            method: 'POST',
            body: formData,
        })

        const result = await response.json()

        if(response.status != 200){
            alert(`エラーが発生しました\nError: ${result.message}`)
            setIsSend(false)
        }

        await router.push(`/motion/${result.uuid}`)
    }

    return (
        <>
            <Button onPress={onOpen} color="primary">新しく投稿する</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalBody className="p-10">
                                <h1 className="text-4xl font-bold text-center pb-5">モーションを投稿する</h1>

                                <div>
                                    <form onSubmit={onSubmit} className="grid gap-4 items-center">
                                        <Image
                                            className="w-full"
                                            alt="NextUI hero Image"
                                            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                                        />
                                        <input
                                            type="file"
                                            name="image"
                                        />

                                        <Input
                                            isRequired
                                            type="name"
                                            label="作品名"
                                            name="name"
                                        />

                                        <Textarea
                                            isRequired
                                            type="content"
                                            label="説明文"
                                            name="content"
                                        />

                                        <Input
                                            isRequired
                                            type="license"
                                            label="ライセンス"
                                            name="license"
                                        />

                                        <input
                                            type="file"
                                            name="file"
                                        />

                                        {isSend?(<p className="text-center">送信中...</p>):(<Button type="submit">投稿する</Button>)}

                                    </form>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
