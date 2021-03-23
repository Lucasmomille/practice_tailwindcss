import { useForm } from "react-hook-form";
import {useRef, useState} from "react"

/* interface FormData {
    name: String;
    email: String;
} */

const wait = function (duration = 1000) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, duration)
    })
}

export default function Form() {
    const {register, handleSubmit, formState, errors} = useForm();

    const onSubmit = async data => {
        await wait(2000)
        console.log(data);
    }

    console.log(formState);

    return (
        <form action="submit" className="flex flex-row" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
            <label htmlFor="username">Prénom</label>
            <input type="text" id="username" name="username" className="" ref={register({required: true})} />
            {errors.username && <span className="text-red-500 text-xs">Vous devez renseigner ce champ</span>}
        </div>
        <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="useremail" ref={register({required: true})}/>
            {errors.username && <span className="text-red-500 text-xs">Vous devez renseigner ce champ</span>}
        </div>
        <button className="rounded-full w-20 h-20 bg-brown-btn p-2 text-white font-bold text-3xl">&rsaquo;</button>
        </form>
    )
}