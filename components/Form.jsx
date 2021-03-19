import { useForm } from "react-hook-form";
import {useRef, useState} from "react"

/* interface FormData {
    name: String;
    email: String;
} */
  
export default function Form() {
    const {register} = useForm();

    return (
        <form action="submit" className="flex flex-row">
        <div className="flex flex-col">
            <label htmlFor="username">Prénom</label>
            <input type="text" id="username" name="username" className="" />
        </div>
        <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="useremail"/>
        </div>
        <button className="rounded-full w-20 h-20 bg-brown-btn p-2 text-white font-bold text-3xl">&rsaquo;</button>
        </form>
    )
}