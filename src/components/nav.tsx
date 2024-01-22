"use client"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Dropdown,
    DropdownTrigger, Avatar, DropdownMenu, DropdownItem
} from "@nextui-org/react";
import {getServerSession} from "next-auth/next";
import {options} from "../../auth.config";
import {getSession} from "next-auth/react";
import React, {useState} from "react";
import { useRouter } from "next/navigation";
import {Session} from "next-auth";

export function Nav(){
    const router = useRouter();
    getSession().then((data)=>{
        if(data != null){
            setLogin(true)
            setSession(data)
        }
    })

    const [isLogin,setLogin] = useState(false)
    const [session, setSession] = useState<Session>()

    const onclick = (key)=> {
        if(session){
            if(key === "mypage"){
                router.push(`/users/${session.user.id}`)
            }else if(key === "notification"){
                router.push(`/users/${session.user.id}`)
            }else if(key === "logout") {
                router.push("/api/auth/signout")
            }
        }
    }

    return(
        <Navbar>
            <NavbarBrand>
                <Link className="font-bold text-inherit" href="/">ACME</Link>
            </NavbarBrand>
            <NavbarContent justify="end">
                {isLogin?
                    (<NavbarItem>
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    size="md"
                                    src={session.user.image}
                                />
                            </DropdownTrigger>

                            <DropdownMenu aria-label="Profile Actions" variant="flat" onAction={(key) => onclick(key)}>
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold">{session.user.name}</p>
                                    <p className="font-semibold">でログインしています</p>
                                </DropdownItem>
                                <DropdownItem key="mypage">マイページ</DropdownItem>
                                <DropdownItem key="notification">通知</DropdownItem>
                                <DropdownItem key="logout" color="danger">
                                    LogOut
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>) :

                    (<NavbarItem>
                        <Button as={Link} color="primary" href="/api/auth/signin" variant="flat">
                            Login
                        </Button>
                    </NavbarItem>)
                }
            </NavbarContent>
        </Navbar>
    );
}
